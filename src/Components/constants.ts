export const NAV_LINKS = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "Why Matcha",
    href: "#why-matcha",
  },
  {
    label: "History",
    href: "#history",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
] as const;

export const MUNK_IMAGES = {
  logo: "https://assets.zyrosite.com/munkwxt4k/MUNK-dJo7M02a1NC4ZLWK.svg",
  bannerImg:
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/munkwxt4k/magic-mind-pINbBI-unsplash-YanWLK8wDNuJ8wlo.jpg",
  why: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=704,h=790,fit=crop/munkwxt4k/magic-mind-unsplash-A85axXOaBEIBq7Mp.jpg",
  history:
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=496,h=560,fit=crop/munkwxt4k/screenshot-2022-01-24-at-11.37.44-YbN5vV4Z9gh0Z1xQ.png",
  product:
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=688,fit=crop/munkwxt4k/magic-mind-qFhycdo-unsplash-YX48MgRlMocqlEQ0.jpg",
  contact:
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=761,fit=crop/munkwxt4k/magic-mind-unsplash-Y4LyzLVeW0SoxjO1.jpg",
} as const;

export type MunkImageKey = keyof typeof MUNK_IMAGES;
//type MunkImageKey = "hero" | "why" | "history" | "product"

export const WHY_MATCHA_BLOCKS = [
  {
    title: "Concentration",
    body: "Matcha offers calm, sustained focus thanks to L-theanine working alongside natural caffeine.",
  },
  {
    title: "Energy",
    body: "A gentle lift without the crash—fuel for your mornings and deep work sessions.",
  },
  {
    title: "Relaxation",
    body: "Adaptogens and ritual help your nervous system find balance in a busy day.",
  },
  {
    title: "Happiness",
    body: "Small daily pleasures—pure honey, bright flavor, and a moment that’s yours.",
  },
] as const;

export const HISTORY_MUNK = {
  paragraphs: [
    "Paying homage to Zen monk Eisai who popularized Matcha in the 12th century, Munk is at its core a wellness destination. Our company is focused on sharing the benefits of Matcha on brain and body function. For us, everyone deserves access to good health.",
    "All of our products are created in a safe, ethical environment where science meets flavor.",
  ],
} as const;

export const PRODUCT_SECTION = {
  title: "MATCHA TEA TO FUEL YOUR BODY",
  price: "$30",
  priceSubtext: "Contains 15 shots",
  description:
    "Packed with adaptogens, nootropics, and delicious pure honey, our daily juice pots are an essential.",
  ctaLabel: "Buy now",
} as const;
