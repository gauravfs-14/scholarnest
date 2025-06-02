import { allPapers } from "contentlayer/generated";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { Badge } from "@/components/ui/badge";

export default function PaperCard({ slug }: { slug: string }) {
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
