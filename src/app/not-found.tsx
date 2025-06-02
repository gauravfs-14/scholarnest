import { buttonVariants } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold text-foreground">
        404 - Page Not Found
      </h1>
      <p className="my-4 text-muted-foreground">
        The page you are looking for does not exist.
      </p>
      <Link className={buttonVariants()} href={"/"}>
        <Home className="mr-2 h-4 w-4 inline" />
        Go to Home
      </Link>
    </div>
  );
}
