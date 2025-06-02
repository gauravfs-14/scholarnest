"use client";

import { FileText, ChevronRight } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/components/ui/sidebar";

import { allPapers } from "contentlayer/generated";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import {
  SITE_CONFIG,
  STATIC_NAV_ABOVE_PAPERS,
  STATIC_NAV_BELOW_PAPERS,
} from "@/config/site";

// Group papers by folder (e.g., "optimizers/apollo") or top-level
function organizePapers() {
  const topLevel: { title: string; url: string; position: number }[] = [];
  const folders: Record<
    string,
    { title: string; url: string; position: number }[]
  > = {};

  for (const paper of allPapers) {
    const segments = paper.slug.split("/");
    const position = paper.sidebar_position ?? 0;

    const entry = {
      title: paper.title,
      url: `/paper/${paper.slug}`,
      position,
    };

    if (segments.length === 1) {
      topLevel.push(entry);
    } else {
      const folder = segments[0];
      if (!folders[folder]) folders[folder] = [];
      folders[folder].push(entry);
    }
  }

  // Sort top-level papers
  topLevel.sort((a, b) => a.position - b.position);

  // Sort each folder's papers
  Object.entries(folders).forEach(([folder, papers]) => {
    folders[folder] = papers.sort((a, b) => a.position - b.position);
  });

  return { topLevel, folders };
}

export function AppSidebar() {
  const { topLevel, folders } = organizePapers();

  return (
    <Sidebar>
      <SidebarHeader className="py-6">
        <Link href="/" className="flex items-center">
          <FileText className="w-6 h-6 inline-flex mr" />
          <span className="text-lg font-bold">{SITE_CONFIG.name}</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {STATIC_NAV_ABOVE_PAPERS.length > 0 && (
          <SidebarGroup>
            <SidebarGroupLabel>Discover</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {STATIC_NAV_ABOVE_PAPERS.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        target={item.isExternal ? "_blank" : "_self"}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        <SidebarGroup>
          <SidebarGroupLabel>Research Papers</SidebarGroupLabel>
          <SidebarGroupContent>
            {/* Top-level (no folder) papers */}
            {topLevel.length > 0 && (
              <SidebarMenu className="mb-2">
                {topLevel.map((paper) => (
                  <SidebarMenuItem key={paper.url}>
                    <SidebarMenuButton asChild>
                      <Link href={paper.url}>
                        <FileText className="w-4 h-4" />
                        <span>{paper.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            )}

            {/* Folder groups */}

            {Object.entries(folders).map(([folder, papers]) => (
              <Collapsible
                key={folder}
                defaultOpen
                className="group/collapsible"
              >
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={folder}>
                    {folder.replace(/[-_]/g, " ").toUpperCase()}
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {papers.map((paper) => (
                      <SidebarMenuItem key={paper.url}>
                        <SidebarMenuButton asChild>
                          <Link href={paper.url}>
                            <FileText className="w-4 h-4" />
                            <span>{paper.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>

        {STATIC_NAV_BELOW_PAPERS.length > 0 && (
          <SidebarGroup>
            <SidebarGroupLabel>More</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {STATIC_NAV_BELOW_PAPERS.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        target={item.isExternal ? "_blank" : "_self"}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
