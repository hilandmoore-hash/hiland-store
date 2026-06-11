import Stripe from "stripe";
import { getProduct } from "@/data/products";

export async function POST(req) {
  try {
    const { id } = await req.json();
    const product = getProduct(id);

    if (!product || !product.active) {
      return Response.json({ error: "Item not available" }, { status: 404 });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const origin =
      req.headers.get("origin") ||
      process.env.SITE_URL ||
      "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: Math.round(product.price * 100),
          },
          quantity: 1,
        },
      ],
      // Collect shipping address so you know where to send it
      shipping_address_collection: { allowed_countries: ["US"] },
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/product/${product.id}`,
      metadata: { product_id: product.id },
    });

    return Response.json({ url: session.url });
  } catch (err) {
    console.error("Checkout error:", err);
    return Response.json({ error: "Checkout failed" }, { status: 500 });
  }
}
