import { posts } from "@/data/posts";

export const metadata = {
  title: "Guides — Hiland Supply",
  description:
    "Practical guides on buying used tools, construction surplus, and getting fair deals on household goods.",
};

export default function Blog() {
  return (
    <main className="wrap">
      <div className="blog-head">
        <h1>Guides</h1>
      </div>
      <div className="posts">
        {posts.map((p) => (
          <a key={p.slug} href={`/blog/${p.slug}`} className="post-row">
            <span className="tag">{p.tag}</span>
            <h2>{p.title}</h2>
            <p>{p.excerpt}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
