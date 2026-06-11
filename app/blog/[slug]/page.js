import { getPost, posts } from "@/data/posts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getPost(params.slug);
  if (!p) return { title: "Not found" };
  return { title: `${p.title} — Hiland Supply`, description: p.excerpt };
}

export default function Post({ params }) {
  const p = getPost(params.slug);
  if (!p) notFound();

  return (
    <main className="wrap">
      <article className="article">
        <a href="/blog" className="back" style={{ paddingTop: 0, marginBottom: 24, display: "inline-block" }}>← All guides</a>
        <h1>{p.title}</h1>
        <div className="meta">{p.tag} · {new Date(p.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</div>
        {p.body.map((block, i) => {
          if (block.h2) return <h2 key={i}>{block.h2}</h2>;
          if (block.p) return <p key={i}>{block.p}</p>;
          if (block.ul) return <ul key={i}>{block.ul.map((li, j) => <li key={j}>{li}</li>)}</ul>;
          return null;
        })}
      </article>
    </main>
  );
}
