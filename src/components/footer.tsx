export default function Footer() {
  return (
    <footer className="bg-accent/40 py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Gaurab Chhetri. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Built with Next.js and Contentlayer
        </p>
      </div>
    </footer>
  );
}
