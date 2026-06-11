"use client";

import { useState } from "react";
import { activeProducts, categories } from "@/data/products";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function Store() {
  const params = useSearchParams();
  const initial = params.get("cat") || "all";
  const [filter, setFilter] = useState(
    categories.includes(initial) ? initial : "all"
  );

  const all = activeProducts();
  const shown = filter === "all" ? all : all.filter((p) => p.category === filter);

  return (
    <main>
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">Pittsburgh · Ships Nationwide</p>
          <h1>Tools and goods, priced to move.</h1>
          <p>
            A rotating lineup of quality construction supplies and household
            items — inspected, fairly priced, and ready to ship. New stock added
            often.
          </p>
        </div>
      </section>

      <div className="wrap">
        <div className="toolbar">
          <button
            className={`chip ${filter === "all" ? "on" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c}
              className={`chip ${filter === c ? "on" : ""}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
          <span className="count">
            {shown.length} item{shown.length === 1 ? "" : "s"}
          </span>
        </div>

        <div className="grid">
          {shown.map((p) => (
            <a key={p.id} href={`/product/${p.id}`} className="card">
              <div className="thumb">
                <img src={p.image} alt={p.name} />
              </div>
              <div className="body">
                <span className="tag">{p.category}</span>
                <h3>{p.name}</h3>
                <span className="price">${p.price.toFixed(2)}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<main className="wrap"><p style={{ padding: 60 }}>Loading…</p></main>}>
      <Store />
    </Suspense>
  );
}
