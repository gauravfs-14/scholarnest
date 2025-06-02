import { NAV_LINKS, SITE_CONFIG } from "@/config/site";
import { cn } from "@/lib/utils";

import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { ExternalLink, FileText, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export default function Navbar() {
  return (
    <nav className="bg-accent/40 backdrop-blur-lg shadow max-w-7xl w-[90%] mx-auto fixed top-5 md:top-10 z-50 inset-x-0 rounded-full px-4">
      <div className="mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          <FileText className="inline-block mr" />
          {SITE_CONFIG.name}
        </Link>
        <div className="flex items-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className={cn(
                buttonVariants({
                  variant: link.isCTA ? "default" : "ghost",
                  size: link.isCTA ? "lg" : "sm",
                }),
                "rounded-full hidden md:inline-flex"
              )}
            >
              {link.isExternal && <ExternalLink className="inline-block mr" />}
              {link.title}
            </Link>
          ))}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <FileText className="inline-block mr" />
                    {SITE_CONFIG.name}
                  </SheetTitle>
                </SheetHeader>
                <SheetDescription className="flex flex-col items-center gap-4">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.url}
                      href={link.url}
                      className={cn(
                        buttonVariants({
                          variant: link.isCTA ? "default" : "ghost",
                        }),
                        "rounded-full ml-3"
                      )}
                    >
                      {link.isExternal && (
                        <ExternalLink className="inline-block mr-2" />
                      )}
                      {link.title}
                    </Link>
                  ))}
                </SheetDescription>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
