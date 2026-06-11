import { getProduct, activeProducts } from "@/data/products";
import { notFound } from "next/navigation";
import BuyButton from "@/app/components/BuyButton";

export function generateStaticParams() {
  return activeProducts().map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }) {
  const p = getProduct(params.id);
  if (!p) return { title: "Not found" };
  return {
    title: `${p.name} — Hiland Supply`,
    description: p.description,
  };
}

export default function ProductPage({ params }) {
  const p = getProduct(params.id);
  if (!p || !p.active) notFound();

  return (
    <main className="wrap">
      <a href="/" className="back">← Back to shop</a>
      <div className="detail">
        <div className="photo">
          <img src={p.image} alt={p.name} />
        </div>
        <div>
          <span className="tag">{p.category}</span>
          <h1>{p.name}</h1>
          <div className="bigprice">${p.price.toFixed(2)}</div>
          <p className="desc">{p.description}</p>
          <BuyButton id={p.id} />
          <p style={{ fontSize: 13, color: "var(--concrete)", marginTop: 16 }}>
            Secure checkout via Stripe. Ships from Pittsburgh.
          </p>
        </div>
      </div>
    </main>
  );
}
