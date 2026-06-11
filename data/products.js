// ============================================================
//  PRODUCTS — this is the only file you edit to manage stock.
//  Add, remove, or change items here. No database needed.
//
//  Each product needs:
//    id          unique string, no spaces (used in the URL)
//    name        what buyers see
//    price       in US dollars (e.g. 24.99)
//    category    "household" or "construction"
//    description short blurb
//    image       a URL to a photo (or "/placeholder.svg" for now)
//    active      true = listed for sale, false = hidden
// ============================================================

export const products = [
  {
    id: "dewalt-impact-driver",
    name: "DeWalt 20V Impact Driver (Tool Only)",
    price: 89.0,
    category: "construction",
    description:
      "Cordless 20V MAX impact driver, bare tool. Lightly used, strong runtime. Battery not included.",
    image: "/placeholder.svg",
    active: true,
  },
  {
    id: "milwaukee-tape-25",
    name: "Milwaukee 25' Magnetic Tape Measure",
    price: 18.5,
    category: "construction",
    description:
      "25-foot magnetic tape with reinforced frame. Standout and durable hook. New.",
    image: "/placeholder.svg",
    active: true,
  },
  {
    id: "drywall-screws-5lb",
    name: 'Drywall Screws 1-5/8" — 5 lb Box',
    price: 14.0,
    category: "construction",
    description:
      "Coarse-thread drywall screws, phosphate coated. Roughly 1,000 screws per box.",
    image: "/placeholder.svg",
    active: true,
  },
  {
    id: "ring-doorbell",
    name: "Smart Video Doorbell (1080p)",
    price: 45.0,
    category: "household",
    description:
      "1080p HD video doorbell with motion alerts and two-way talk. Wired or battery. Open box.",
    image: "/placeholder.svg",
    active: true,
  },
  {
    id: "stainless-cookware-10pc",
    name: "10-Piece Stainless Steel Cookware Set",
    price: 72.0,
    category: "household",
    description:
      "Tri-ply stainless set: pots, pans, and lids. Oven and dishwasher safe. New in box.",
    image: "/placeholder.svg",
    active: true,
  },
  {
    id: "led-shop-light",
    name: "4ft LED Shop Light (5000K)",
    price: 22.0,
    category: "household",
    description:
      "Linkable 4-foot LED shop light, 5000K daylight, 4000 lumens. Plug-in. New.",
    image: "/placeholder.svg",
    active: true,
  },
];

// Helpers used across the app
export const getProduct = (id) => products.find((p) => p.id === id);
export const activeProducts = () => products.filter((p) => p.active);
export const categories = ["household", "construction"];
