"use client";

import { useState } from "react";

export default function BuyButton({ id }) {
  const [loading, setLoading] = useState(false);

  async function buy() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Could not start checkout. Please try again.");
        setLoading(false);
      }
    } catch {
      alert("Could not start checkout. Please try again.");
      setLoading(false);
    }
  }

  return (
    <button className="btn" onClick={buy} disabled={loading}>
      {loading ? "Starting…" : "Buy now"}
    </button>
  );
}
