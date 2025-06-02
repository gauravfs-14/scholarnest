"use client";

import { useEffect } from "react";
import { format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPapers } from "contentlayer/generated";
import { redirect, useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FileText, GitBranch, Mic, Presentation, Video } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import MDXImage from "@/components/mdx/MDXImage";
import MDXAccordion from "@/components/mdx/MDXAccordion";
import PaperCard from "../paper-card";

const mdxComponents = {
  MDXImage,
  MDXAccordion,
};

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

  const MDXContent = useMDXComponent(paper?.body?.code ?? "");

  if (!paper) {
    return null; // or handle not found case
  }

  return (
    <article className="max-w-[760px] mx-auto px-6 py-12 font-serif text-foreground">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold leading-tight mb-3">{paper.title}</h1>

        <div className="text-sm text-muted-foreground">
          <time dateTime={paper.date}>
            {format(parseISO(paper.date), "LLLL d, yyyy")}
          </time>
        </div>

        {paper.publication && (
          <p className="text-sm mt-2 italic text-muted-foreground">
            {paper.publication}
            {paper.version ? ` • ${paper.version}` : ""}
            {paper.status ? ` • ${paper.status}` : ""}
            {paper.language ? ` • ${paper.language}` : ""}
          </p>
        )}
      </header>

      {paper.authors && paper.authors.length > 0 && (
        <section className="text-center text-sm text-muted-foreground mb-6">
          <div className="mb-1 flex flex-wrap justify-center gap-2">
            {paper.authors.map((author, i) => {
              const aff = author.affiliation ? i + 1 : null;
              const authorInfo = (
                <>
                  <div className="font-semibold">{author.name}</div>
                  {author.role && <div>Role: {author.role}</div>}
                  {author.affiliation && (
                    <div>Affiliation: {author.affiliation}</div>
                  )}
                  {author.email && <div>Email: {author.email}</div>}
                  {author.orcid && (
                    <div>
                      ORCID:{" "}
                      <a
                        href={`https://orcid.org/${author.orcid}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        {author.orcid}
                      </a>
                    </div>
                  )}
                </>
              );

              return (
                <HoverCard key={i}>
                  <HoverCardTrigger asChild>
                    <span className="font-medium cursor-pointer text-foreground">
                      {author.url ? (
                        <Link
                          href={author.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {author.name}
                        </Link>
                      ) : (
                        author.name
                      )}
                      {aff && <sup>{aff}</sup>}
                      {author.corresponding && <sup>*</sup>}
                      {i < (paper.authors ? paper.authors.length : 0) - 1 &&
                        ", "}
                    </span>
                  </HoverCardTrigger>
                  <HoverCardContent className="text-sm">
                    {authorInfo}
                  </HoverCardContent>
                </HoverCard>
              );
            })}
          </div>

          <div className="text-xs mt-1 space-y-0.5">
            {paper.authors.map((author, i) =>
              author.affiliation ? (
                <div key={i}>
                  <sup>{i + 1}</sup> {author.affiliation}
                </div>
              ) : null
            )}
          </div>

          {paper.authors.some((a) => a.corresponding && a.email) && (
            <div className="mt-1 text-xs italic">
              * Corresponding author:{" "}
              {paper.authors.find((a) => a.corresponding && a.email)?.email}
            </div>
          )}
        </section>
      )}

      <div className="flex gap-2 flex-wrap items-center justify-center">
        {paper.links?.pdfs?.published && (
          <Link
            href={paper.links.pdfs.published}
            target="_blank"
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            <FileText className="inline mr-1" />
            Published PDF
          </Link>
        )}
        {paper.links?.pdfs?.preprint && (
          <Link
            href={paper.links.pdfs.preprint}
            target="_blank"
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            <FileText className="inline mr-1" />
            Preprint PDF
          </Link>
        )}

        {paper.links?.code && (
          <Link
            href={paper.links.code}
            target="_blank"
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            <GitBranch className="inline mr-1" />
            GitHub Repository
          </Link>
        )}

        {paper.links?.slides && (
          <Link
            href={paper.links.slides}
            target="_blank"
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            <Presentation className="inline mr-1" />
            Presentation Slides
          </Link>
        )}

        {paper.links?.videos?.talk && (
          <Link
            href={paper.links.videos.talk}
            target="_blank"
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            <Mic className="inline mr-1" />
            Watch Talk
          </Link>
        )}

        {paper.links?.videos?.demo && (
          <Link
            href={paper.links.videos.demo}
            target="_blank"
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            <Video className="inline mr-1" />
            Watch Demo
          </Link>
        )}
      </div>

      <hr className="my-8 border-muted" />

      {paper.abstract && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Abstract</h2>
          <p className="italic text-muted-foreground text-sm">
            {paper.abstract}
          </p>
        </section>
      )}

      {paper.cover_image && (
        <section className="mb-10">
          <Image
            src={paper.cover_image ?? "/images/default_cover.jpg"}
            alt={paper.title}
            width={800}
            height={450}
            className="rounded-lg shadow-md mb-4"
            style={{ objectFit: "cover" }}
          />
        </section>
      )}

      <section className="mb-12 prose prose-lg dark:prose-invert ">
        <MDXContent components={mdxComponents} />
      </section>

      {paper.datasets && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Datasets</h2>
          <ul className="list-disc pl-5 text-sm">
            {paper.datasets.map((ds, i) => (
              <li key={i}>
                <strong>{ds.name}</strong>
                {ds.url && (
                  <Link
                    href={ds.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 underline text-blue-600"
                  >
                    [Link]
                  </Link>
                )}
                {ds.description && ` — ${ds.description}`}
              </li>
            ))}
          </ul>
        </section>
      )}

      {paper.tools && paper.tools.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Tools Used</h2>
          <ul className="list-disc pl-5 text-sm">
            {paper.tools.map((tool, i) => (
              <li key={i}>{tool}</li>
            ))}
          </ul>
        </section>
      )}

      <div className="pt-10 border-t text-sm text-muted-foreground space-y-4">
        {paper.acknowledgements && (
          <p>
            <strong>Acknowledgements:</strong> {paper.acknowledgements}
          </p>
        )}

        {paper.citation_styles?.bibtex && (
          <details className="mt-4">
            <summary className="cursor-pointer font-medium">
              Show BibTeX
            </summary>
            <pre
              className="bg-muted text-xs mt-2 p-3 rounded overflow-x-auto whitespace-pre-wrap"
              onClick={() => {
                if (paper.citation_styles && paper.citation_styles.bibtex) {
                  navigator.clipboard.writeText(paper.citation_styles.bibtex);
                  alert("BibTeX copied to clipboard!");
                }
              }}
            >
              {"// BibTeX citation for this paper\nClick to copy:\n\n"}
              {paper.citation_styles.bibtex}
            </pre>
          </details>
        )}

        {paper.citation_styles?.apa && (
          <details className="mt-4">
            <summary className="cursor-pointer font-medium">Show APA</summary>
            <pre
              className="bg-muted text-xs mt-2 p-3 rounded overflow-x-auto whitespace-pre-wrap"
              onClick={() => {
                if (paper.citation_styles && paper.citation_styles.apa) {
                  navigator.clipboard.writeText(paper.citation_styles.apa);
                  alert("APA citation copied to clipboard!");
                }
              }}
            >
              {"// APA citation for this paper\nClick to copy:\n\n"}
              {paper.citation_styles.apa}
            </pre>
          </details>
        )}
        {paper.citation_styles?.mla && (
          <details className="mt-4">
            <summary className="cursor-pointer font-medium">Show MLA</summary>
            <pre
              className="bg-muted text-xs mt-2 p-3 rounded overflow-x-auto whitespace-pre-wrap"
              onClick={() => {
                if (paper.citation_styles && paper.citation_styles.mla) {
                  navigator.clipboard.writeText(paper.citation_styles.mla);
                  alert("MLA citation copied to clipboard!");
                }
              }}
            >
              {"// MLA citation for this paper\nClick to copy:\n\n"}
              {paper.citation_styles.mla}
            </pre>
          </details>
        )}
      </div>
      <div>
        {paper.related_papers && paper.related_papers.length > 0 && (
          <section className="my-10">
            <h2 className="text-xl font-semibold mb-4">Related Papers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {paper.related_papers.map((related, i) => (
                <PaperCard key={i} slug={related} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
};

export default PaperLayout;
