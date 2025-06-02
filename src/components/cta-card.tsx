import { CALL_TO_ACTION } from "@/config/site";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export default function CTA() {
  return (
    <Card className="bg-accent/20 shadow-sm rounded-2xl text-center mx-2 md:mx-5 lg:mx-10 px-2 lg:px-5 xl:px-10 py-10">
      <CardHeader className="text-3xl font-bold -mb-5">
        {CALL_TO_ACTION.title}
      </CardHeader>
      <CardContent className="text-muted-foreground text-base leading-relaxed max-w-[100%] md:max-w-[95%] xl:max-w-[90%] mx-auto -mb-2">
        {CALL_TO_ACTION.description}
      </CardContent>
      <CardFooter className="flex justify-center">
        <Link
          href={CALL_TO_ACTION.button.href}
          className={cn(buttonVariants({ variant: "default" }), "gap-2")}
          {...(CALL_TO_ACTION.button.isExternal ? { target: "_blank" } : {})}
        >
          {CALL_TO_ACTION.button.icon && (
            <CALL_TO_ACTION.button.icon className="inline mr-2" />
          )}
          <span>{CALL_TO_ACTION.button.label}</span>
        </Link>
      </CardFooter>
    </Card>
  );
}
