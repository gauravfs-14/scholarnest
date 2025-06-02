import {
  BarChart3,
  BookOpen,
  Code2,
  Files,
  FileText,
  GitGraphIcon,
  Home,
  Info,
  User,
  Users,
} from "lucide-react";

export const SITE_CONFIG = {
  name: "ScholarNest",
  description:
    " A modern, open-source platform for publishing and exploring academic research papers, technical reports, and project documentation — built with Next.js, Tailwind CSS, and Contentlayer.",
  tagline: "Organize, Discover, and Share Research Papers",
};

export const NAV_LINKS = [
  { title: "Home", url: "/", icon: Home },
  { title: "Papers", url: "/paper", icon: Files },
  { title: "About", url: "/about", icon: Info },
  { title: "Docs", url: "/docs", icon: BookOpen, isExternal: true },
  {
    title: "Developer",
    url: "https://gaurabchhetri.com.np",
    icon: User,
    isExternal: true,
  },
  {
    title: "GitHub",
    url: "#",
    icon: GitGraphIcon,
    isExternal: true,
    isCTA: true,
  },
];

export const STATIC_NAV_ABOVE_PAPERS = [
  { title: "Home", url: "/", icon: Home },
  { title: "Papers", url: "/paper", icon: Files },
  { title: "Docs", url: "/docs", icon: BookOpen, isExternal: true },
];

export const STATIC_NAV_BELOW_PAPERS = [
  { title: "About", url: "/about", icon: Info },
  { title: "GitHub", url: "#", icon: GitGraphIcon, isExternal: true },
  {
    title: "Developer",
    url: "https://gaurabchhetri.com.np",
    icon: User,
    isExternal: true,
  },
];

export const HERO_CTAS = [
  {
    label: "Get Started",
    href: "/paper",
    icon: Files,
    type: "primary",
    isExternal: false,
  },
  {
    label: "Documentation",
    href: "/docs",
    icon: BookOpen,
    type: "secondary",
    isExternal: true,
  },
];

export const SITE_FEATURES = [
  {
    title: "Structured Academic Publishing",
    description:
      "Organize your research papers, technical reports, and project documentation in a clean, folder-based system — with full support for rich metadata and citations.",
    icon: FileText,
  },
  {
    title: "Author & Affiliation Management",
    description:
      "Display detailed author information, including names, affiliations, ORCID links, and corresponding author badges — just like a real journal article.",
    icon: Users,
  },
  {
    title: "Interactive Visual Enhancements",
    description:
      "Seamlessly embed interactive charts, figures, videos, and datasets within your papers using MDX components and modern visualization libraries.",
    icon: BarChart3,
  },
  {
    title: "Citations Made Easy",
    description:
      "Support for APA, MLA, and BibTeX formats with copy-to-clipboard functionality — making it easy for others to cite your work correctly.",
    icon: BookOpen,
  },
  {
    title: "Powered by Open Web Tech",
    description:
      "Built on Next.js, Tailwind CSS, and Contentlayer. Developer-friendly, research-ready, and easy to deploy or extend for any academic or technical use case.",
    icon: Code2,
  },
];

export const FAQ_ITEMS = [
  {
    question: "What is ScholarNest?",
    answer:
      "ScholarNest is an open-source documentation and publishing platform for research papers, technical reports, and academic projects. Built with Next.js, Tailwind CSS, and Contentlayer, it provides a clean, structured, and customizable way to share scholarly work online.",
  },
  {
    question: "Who is ScholarNest for?",
    answer:
      "ScholarNest is ideal for researchers, students, academic labs, and independent developers who want a modern, markdown-based system for presenting and archiving research work with metadata, citations, and embedded media.",
  },
  {
    question: "How are papers organized and displayed?",
    answer:
      "Each paper is written in MDX and lives in a folder-based hierarchy. Contentlayer parses metadata like title, authors, publication venue, and tags — which are then used to auto-generate routes, sidebars, and citations on the site.",
  },
  {
    question: "Can I embed charts, videos, and datasets?",
    answer:
      "Yes. ScholarNest supports MDX, which means you can embed React components, interactive charts (e.g., Recharts, Plotly), video embeds, and even downloadable datasets directly inside your papers.",
  },
  {
    question: "Is ScholarNest open-source and customizable?",
    answer:
      "Absolutely. ScholarNest is fully open-source and built for extensibility. You can customize layouts, components, styling, and metadata to fit your specific research or institutional needs.",
  },
];

export const CALL_TO_ACTION = {
  title: "Ready to share your research?",
  description:
    "Get started with ScholarNest today and transform how you publish and present your academic work.",
  button: {
    label: "Explore Papers",
    href: "/paper",
    icon: Files,
    isExternal: false,
  },
};
