import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

export const Paper = defineDocumentType(() => ({
  name: "Paper",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",

  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    status: { type: "string", required: false },
    version: { type: "string", required: false },
    language: { type: "string", required: false },
    sidebar_position: { type: "number", required: false, default: 0 },
    publication: { type: "string", required: false },
    publisher: { type: "string", required: false },
    doi: { type: "string", required: false },
    venue_url: { type: "string", required: false },

    authors: {
      type: "list",
      of: defineNestedType(() => ({
        name: "Author",
        fields: {
          name: { type: "string", required: true },
          affiliation: { type: "string", required: false },
          url: { type: "string", required: false },
          email: { type: "string", required: false },
          orcid: { type: "string", required: false },
          corresponding: { type: "boolean", required: false },
          role: { type: "string", required: false },
        },
      })),
    },

    corresponding_author: { type: "string", required: false },
    acknowledgements: { type: "string", required: false },
    sort_description: { type: "string", required: false },

    tags: { type: "list", of: { type: "string" }, required: false },
    topics: { type: "list", of: { type: "string" }, required: false },
    methods: { type: "list", of: { type: "string" }, required: false },
    fields: { type: "list", of: { type: "string" }, required: false },
    tasks: { type: "list", of: { type: "string" }, required: false },

    links: {
      type: "nested",
      of: defineNestedType(() => ({
        name: "Links",
        fields: {
          pdfs: {
            type: "nested",
            of: defineNestedType(() => ({
              name: "PDFLinks",
              fields: {
                published: { type: "string", required: false },
                preprint: { type: "string", required: false },
              },
            })),
            required: false,
          },
          code: { type: "string", required: false },
          slides: { type: "string", required: false },
          videos: {
            type: "nested",
            of: defineNestedType(() => ({
              name: "VideoLinks",
              fields: {
                talk: { type: "string", required: false },
                demo: { type: "string", required: false },
              },
            })),
            required: false,
          },
          poster: { type: "string", required: false },
        },
      })),
      required: false,
    },

    datasets: {
      type: "list",
      of: defineNestedType(() => ({
        name: "Dataset",
        fields: {
          name: { type: "string", required: true },
          url: { type: "string", required: false },
          description: { type: "string", required: false },
        },
      })),
      required: false,
    },

    tools: { type: "list", of: { type: "string" }, required: false },

    cover_image: { type: "string", required: false },

    citation_styles: {
      type: "nested",
      of: defineNestedType(() => ({
        name: "CitationStyles",
        fields: {
          apa: { type: "string", required: false },
          mla: { type: "string", required: false },
          bibtex: { type: "string", required: false },
        },
      })),
      required: false,
    },

    is_open_access: { type: "boolean", required: false },
    related_papers: { type: "list", of: { type: "string" }, required: false },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (paper) => `/paper/${paper._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath, // supports nested folders!
    },
  },
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
}));

export default makeSource({
  contentDirPath: "src/papers",
  documentTypes: [Paper],
});
