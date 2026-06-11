export const metadata = { title: "Order confirmed — Hiland Supply" };

export default function Success() {
  return (
    <main className="wrap">
      <div className="success">
        <h1>Order confirmed</h1>
        <p>Thanks — your payment went through. You'll get a confirmation email, and your item ships from Pittsburgh.</p>
        <a href="/" className="btn btn-ghost">Keep shopping</a>
      </div>
    </main>
  );
}
