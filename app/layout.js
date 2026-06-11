import "./globals.css";

export const metadata = {
  title: "Hiland Supply — Tools & Household Goods | Pittsburgh",
  description:
    "Quality tools, construction supplies, and household goods at fair prices. Based in Pittsburgh, shipping nationwide.",
  openGraph: {
    title: "Hiland Supply — Tools & Household Goods",
    description:
      "Quality tools, construction supplies, and household goods at fair prices.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="masthead">
          <div className="wrap">
            <a href="/" className="logo">
              Hiland<span className="mark">.</span>Supply
            </a>
            <nav className="nav">
              <a href="/">Shop</a>
              <a href="/?cat=construction">Construction</a>
              <a href="/?cat=household">Household</a>
              <a href="/blog">Guides</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="foot">
          <div className="wrap">
            <span>© {new Date().getFullYear()} Hiland Enterprises, LLC — Pittsburgh, PA</span>
            <span>
              <a href="/blog">Guides</a> · Ships nationwide
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
