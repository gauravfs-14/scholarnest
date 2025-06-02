import { compareDesc } from "date-fns";
import { allPapers } from "contentlayer/generated";
import PaperCard from "./paper-card";

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
