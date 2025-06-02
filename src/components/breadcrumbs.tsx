"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

// Simplified breadcrumbs logic
export default function Breadcrumbs({ className }: { className?: string }) {
  const pathname = usePathname();
  const segments = pathname.split("/");

  return (
    <Breadcrumb className={className}>
      {segments.length > 1 ? (
        <BreadcrumbList>
          {segments.slice(1).map((segment, index) => (
            <>
              <BreadcrumbItem key={index}>
                <BreadcrumbLink
                  href={`/${segments.slice(1, index + 2).join("/")}`}
                >
                  {segment.charAt(0).toUpperCase() + segment.slice(1)}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < segments.length - 2 && <BreadcrumbSeparator />}
            </>
          ))}
        </BreadcrumbList>
      ) : (
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>Home</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      )}
    </Breadcrumb>
  );
}
