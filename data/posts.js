// Blog posts for SEO/GEO. Add new ones here.
// Each: slug, title, tag, excerpt, date, and body (array of blocks).
// Block types: { h2 } heading, { p } paragraph, { ul: [...] } list.

export const posts = [
  {
    slug: "buying-used-power-tools-what-to-check",
    title: "Buying Used Power Tools: What to Check Before You Pay",
    tag: "Buyer's Guide",
    date: "2026-06-09",
    excerpt:
      "A used drill or impact driver can be a great deal — or a paperweight. Here's the quick inspection checklist that separates the two.",
    body: [
      {
        p: "Used power tools are one of the best values in resale, but only if you know what you're looking at. A quality cordless tool that cost $180 new can sell for half that and still have years of life left. The trick is knowing how to tell a tool that was retired early from one that was run into the ground.",
      },
      { h2: "Start with the battery and contacts" },
      {
        p: "On cordless tools, the battery is often worth more than the tool itself. Look for corrosion or discoloration on the metal contacts, check that the pack clicks in firmly without wobble, and ask how old it is. Lithium-ion packs degrade with age and charge cycles whether they're used or not.",
      },
      { h2: "Run it before you commit" },
      {
        p: "A working tool should start instantly with no hesitation, run smoothly without grinding or rattling, and hold consistent speed under light load. Listen for these red flags:",
      },
      {
        ul: [
          "Burning or ozone smell — a sign of a failing motor",
          "Sparks visible through the vents beyond a faint normal glow",
          "Play or wobble in the chuck or drive shaft",
          "A trigger that sticks or responds unevenly",
        ],
      },
      { h2: "Check the wear points" },
      {
        p: "Inspect the chuck jaws on a drill, the anvil on an impact driver, and the shoe on a saw. These take the most abuse and tell you how hard the tool was used. Light scuffing is normal; deep gouges, cracks, or rounded edges mean heavy service.",
      },
      { h2: "What a fair price looks like" },
      {
        p: "As a rough rule, a used tool in good working condition sells for 40 to 60 percent of its current new price. Bare tools (no battery) go lower. If a seller can show the original receipt or it's a recent model still under warranty, it's worth paying toward the top of that range.",
      },
      {
        p: "Every tool we list is inspected and tested before it goes up, with condition described plainly. If you have a question about a specific item, ask before you buy.",
      },
    ],
  },
  {
    slug: "construction-surplus-where-deals-come-from",
    title: "Where Construction Surplus Deals Actually Come From",
    tag: "Inside the Trade",
    date: "2026-06-09",
    excerpt:
      "Overage, returns, job-site leftovers, and estate clear-outs — understanding the supply chain helps you spot a real deal from a fake one.",
    body: [
      {
        p: "When you see drywall screws, fixtures, or fasteners selling well below retail, it's fair to wonder where they came from. In most cases the answer is mundane and completely legitimate — and knowing the common sources helps you shop with confidence.",
      },
      { h2: "Job-site overage" },
      {
        p: "Contractors routinely over-order materials to avoid running short mid-project. When the job wraps, the leftover boxes of fasteners, fixtures, and hardware have nowhere to go. Rather than eat the cost, many sell the surplus. This is brand-new, sealed product at a discount.",
      },
      { h2: "Store returns and open-box" },
      {
        p: "Home improvement retailers can't resell a returned item as new even if it was never used. Much of it gets liquidated in bulk. An open-box doorbell or cookware set is often functionally identical to new — the box was simply opened.",
      },
      { h2: "Estate and downsizing clear-outs" },
      {
        p: "Garages and workshops accumulate tools and supplies over decades. When a property changes hands, that inventory often gets sold off at once. This is a frequent source of quality older tools that were built to last.",
      },
      { h2: "How to tell a real deal from a bad one" },
      {
        ul: [
          "The seller describes condition honestly, including flaws",
          "Photos show the actual item, not a stock image",
          "New-in-box items are still sealed; used items say so",
          "The price is below retail but not impossibly low",
        ],
      },
      {
        p: "Everything we stock comes from these ordinary channels — overage, returns, and clear-outs — inspected and described as it is. The goal is simple: real goods at a fair price, with nothing hidden.",
      },
    ],
  },
  {
    slug: "shipping-tools-safely",
    title: "How We Pack and Ship Tools So They Arrive Intact",
    tag: "How We Work",
    date: "2026-06-09",
    excerpt:
      "Heavy, awkward, and often metal — tools need real packing. Here's the standard we hold ourselves to on every order.",
    body: [
      {
        p: "A tool that arrives damaged helps nobody. Shipping heavy and irregular items well takes more than dropping them in a box, so here's how every order leaves our hands.",
      },
      { h2: "Right-sized boxes, double-walled when it matters" },
      {
        p: "Heavy items go in double-walled corrugated boxes sized to leave room for cushioning on all sides. A tool that shifts in transit is a tool that breaks, so we eliminate empty space.",
      },
      { h2: "Protecting the vulnerable parts" },
      {
        p: "Chucks, blades, cords, and protruding parts get wrapped or capped before the whole item is cushioned. Anything with a battery ships in compliance with carrier rules for lithium-ion.",
      },
      { h2: "Fast handling from Pittsburgh" },
      {
        p: "Orders generally go out within one to two business days. Shipping from Pittsburgh means quick transit times to most of the East Coast and Midwest, and we pass along the discounted carrier rates rather than padding shipping to pad margin.",
      },
      {
        p: "If anything arrives wrong, reach out — a fair transaction means standing behind what leaves the shop.",
      },
    ],
  },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);
