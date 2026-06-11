import Stripe from "stripe";

// Stripe needs the raw request body to verify the signature
export const config = { api: { bodyParser: false } };

export async function POST(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const sig = req.headers.get("stripe-signature");
  const body = await req.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature failed:", err.message);
    return new Response("Bad signature", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const s = event.data.object;
    const order = {
      product: s.metadata?.product_id,
      amount: (s.amount_total / 100).toFixed(2),
      email: s.customer_details?.email,
      name: s.customer_details?.name,
      ship: s.shipping_details?.address,
    };

    // Order received — log it. To get an email, plug in Resend below.
    console.log("NEW ORDER:", JSON.stringify(order, null, 2));

    // ---- OPTIONAL: email yourself with Resend ----
    // 1) npm install resend
    // 2) set RESEND_API_KEY and ORDER_EMAIL in .env.local
    // 3) uncomment:
    //
    // const { Resend } = await import("resend");
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "orders@yourdomain.com",
    //   to: process.env.ORDER_EMAIL,
    //   subject: `New order: ${order.product} ($${order.amount})`,
    //   text: JSON.stringify(order, null, 2),
    // });
  }

  return new Response("ok", { status: 200 });
}
