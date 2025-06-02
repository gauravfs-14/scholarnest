import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { HERO_CTAS, SITE_CONFIG } from "@/config/site";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <h1 className="mb-6 flex flex-col items-center gap-2 text-center">
        <span className="text-3xl md:text-5xl xl:text-7xl font-extrabold tracking-tight">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-primary to-accent-foreground/70 bg-clip-text text-transparent">
            {SITE_CONFIG.name}!
          </span>
        </span>
        <span className="text-lg md:text-xl xl:text-2xl font-semibold ">
          {SITE_CONFIG.tagline}
        </span>
      </h1>
      <p className="text-sm md:text-md xl:text-lg text-center max-w-2xl text-muted-foreground">
        {SITE_CONFIG.description}
      </p>
      <div className="mt-8 flex space-x-4">
        {HERO_CTAS.map((cta) => (
          <Link
            key={cta.label}
            href={cta.href}
            className={cn(
              buttonVariants({
                variant: cta.type === "primary" ? "default" : "ghost",
              })
            )}
            {...(cta.isExternal ? { target: "_blank" } : {})}
          >
            {cta.icon && <cta.icon className="inline mr" />}
            {cta.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
