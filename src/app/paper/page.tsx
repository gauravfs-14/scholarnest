import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPapers, Paper } from "contentlayer/generated";
import { Badge } from "@/components/ui/badge";

export function PaperCard({ slug }: { slug: string }) {
  const paper = allPapers.find((p) => p.slug === slug);
  if (!paper) {
    return null; // or handle not found case
  }
  return (
    <div className="group rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-all bg-background dark:bg-muted/40">
      <div className="flex flex-col gap-3">
        {/* Title */}
        <Link
          href={paper.url}
          className="text-lg font-semibold text-foreground group-hover:underline line-clamp-2"
        >
          {paper.title}
        </Link>

        {/* Meta: date + publication */}
        <div className="flex items-center flex-wrap gap-2 text-xs text-muted-foreground">
          <time dateTime={paper.date}>
            {format(parseISO(paper.date), "LLLL d, yyyy")}
          </time>
          {paper.publication && (
            <Badge variant="secondary" className="text-[10px]">
              {paper.publication}
            </Badge>
          )}
        </div>

        {/* Author preview */}
        {paper.authors && paper.authors?.length > 0 && (
          <div className="text-xs text-muted-foreground line-clamp-1">
            {paper.authors.map((a) => a.name).join(", ")}
          </div>
        )}

        {/* Description */}
        {paper.sort_description && (
          <p className="text-sm text-muted-foreground mt-1 line-clamp-3">
            {paper.sort_description}
          </p>
        )}

        {/* Tags (limit to first 2) */}
        {paper.tags && paper.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {paper.tags.slice(0, 2).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs px-2 py-0.5 rounded-md"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function PapersPage() {
  const papers = allPapers.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <main className="container mx-auto max-w-6xl px-2 md:px-4 xl:px-6 min-h-screen">
      <div className="pt-4" />
      <div className="text-center mb-10">
        <h2 className="relative text-4xl font-extrabold tracking-tight text-foreground mb-4 after:content-[''] after:block after:mx-auto after:mt-3 after:h-[3px] after:w-24 after:bg-gradient-to-r after:from-primary after:to-accent-foreground/70 after:rounded-full">
          Research Papers
        </h2>
        <p className="text-md text-muted-foreground max-w-2xl mx-auto">
          Explore our collection of research papers, covering a wide range of
          topics and insights. Each paper provides a detailed analysis and
          findings that contribute to the field.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {papers.map((paper) => (
          <PaperCard key={paper._id} slug={paper.slug} />
        ))}
      </div>
    </main>
  );
}
