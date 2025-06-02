import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPapers, Paper } from "contentlayer/generated";

function PaperCard(paper: Paper) {
  return (
    <div className="mb-8 border-b border-gray-200 pb-6 dark:border-gray-700">
      <h2 className="mb-1 text-xl font-semibold">
        <Link
          href={paper.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {paper.title}
        </Link>
      </h2>
      <time dateTime={paper.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(paper.date), "LLLL d, yyyy")}
      </time>
      <div className="prose dark:prose-invert prose-sm mt-4">
        {paper.sort_description}
      </div>
    </div>
  );
}

export default function PapersPage() {
  const papers = allPapers.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">
        Next.js + Contentlayer Example
      </h1>
      {papers.map((paper, idx) => (
        <PaperCard key={idx} {...paper} />
      ))}
    </div>
  );
}
