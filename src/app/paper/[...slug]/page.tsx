"use client";

import { useEffect } from "react";
import { format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPapers } from "contentlayer/generated";
import { redirect, useParams } from "next/navigation";

const PaperLayout = () => {
  const params = useParams();
  const slugArray = params.slug as string[];
  const slug = slugArray.join("/");
  const paper = allPapers.find((p) => p._raw.flattenedPath === slug);

  useEffect(() => {
    if (!paper) {
      redirect("/404");
    }
  }, [paper, slug]);

  if (!paper) {
    return <p className="text-center text-red-600">Paper not found.</p>;
  }

  const MDXContent = useMDXComponent(paper.body.code);

  return (
    <article className="mx-auto max-w-3xl py-8 px-4 prose dark:prose-invert">
      <div className="mb-6 text-center">
        <time dateTime={paper.date} className="text-xs text-gray-500">
          {format(parseISO(paper.date), "LLLL d, yyyy")}
        </time>
        <h1>{paper.title}</h1>
      </div>
      <MDXContent />
    </article>
  );
};

export default PaperLayout;
