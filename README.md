# 🧠 ScholarNest

**ScholarNest** is a modern, open-source platform for publishing and exploring research papers online. It enables beautifully rendered academic content using MDX and is designed for individuals, labs, or research groups who want to share their papers, tools, and datasets in a clean, organized, and discoverable way.

## ✨ Features

- 📝 MDX-based paper authoring with academic metadata (title, authors, publication, DOI, BibTeX, datasets, tools, etc.)
- 📁 Folder-aware paper organization with sidebar sorting
- 🎓 Author affiliation display, corresponding author highlight
- 📄 Abstract, acknowledgements, and citation styles supported
- 📦 Responsive layout with prose-style typography
- 🧩 Component wrappers (e.g., `<MDXImage>`, `<MDXAccordion>`) usable directly in MDX
- 🧠 Built with [Contentlayer](https://contentlayer.dev/), [shadcn/ui](https://ui.shadcn.com/), and [Next.js](https://nextjs.org/)
- 🚀 More features comming soon...

## 📂 Project Structure

```txt
src/
├── components/        # UI and MDX component wrappers
├── papers/            # .mdx research papers (nested allowed)
├── app/paper/[...slug] # Dynamic MDX page rendering
├── lib/               # Utilities
└── styles/            # Global Tailwind styles
````

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/gauravfs-14/scholarnest.git
cd scholarnest
```

### 2. Install Dependencies

```bash
npm install
# or
yarn
```

### 3. Run the Dev Server

```bash
yarn dev
# or
npm run dev
```

Open `http://localhost:3000` to see your site.

## ✍️ Writing a New Paper

Add a new `.mdx` file in `src/papers/`, for example `src/papers/sample.mdx`.

## 🧩 Custom MDX Components

ScholarNest provides reusable components for writing interactive academic papers. Use them like:

```mdx
<MDXImage src="/figures/chart1.png" alt="Gradient sparsity impact" />

<MDXAccordion
  data={[
    { question: "What is L2 Regularization?", answer: "A penalty term..." }
  ]}
/>
```

## 🔗 Related Projects

* [Contentlayer](https://contentlayer.dev/)
* [shadcn/ui](https://ui.shadcn.com/)
* [Next.js](https://nextjs.org/)
* [Vercel](https://vercel.com/) — Recommended for deployment

## 🚀 Deployment

You can deploy directly to [Vercel](https://vercel.com/) for free:

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

Or set up CI for `next export` if you prefer a static export.

---

## 📜 License

MIT License © 2025 [Gaurab Chhetri](https://gaurabchhetri.com.np).

> This project is open-source and free to use. Contributions are welcome! However, please link back to the original repository if you use this code in your projects.

## 📚 Citation

If you use ScholarNest in your research or projects, please cite it as follows:

```bibtex
@misc{scholarnest2025,
  title = {ScholarNest: A Modern Platform for Academic Publishing},
  author = {Chhetri, Gaurab},
  year = {2025},
  howpublished = {\url{https://github.com/gauravfs-14/scholarnest}},
  note = {Accessed: YYYY-MM-DD}
}
```
