export type BrewStep = {
  title: string;
  description: string;
};

export type TeaProduct = {
  slug: string;
  name: string;
  subtitle: string;
  shortDescription: string;
  longDescription: string;
  origin: string;
  price: string;
  image: string;
  tones: string[];
  ingredients: string[];
  brewingGuide: BrewStep[];
  featured?: boolean;
};

export const teaProducts: TeaProduct[] = [
  {
    slug: "imperial-matcha-reserve",
    name: "Imperial Matcha Reserve",
    subtitle: "Stone-milled ceremonial blend",
    shortDescription:
      "Silk-textured matcha with a sweet marine finish and velvety umami.",
    longDescription:
      "Harvested from first-flush shade-grown leaves and stone-milled in small batches, this matcha opens with soft pistachio notes and settles into a smooth, lingering sweetness.",
    origin: "Uji, Japan",
    price: "$52",
    image: "/images/tea/imperial-matcha-reserve.png",
    tones: ["Silky", "Umami", "Sweet Grass"],
    ingredients: ["First flush tencha", "Mountain spring dried leaf"],
    brewingGuide: [
      {
        title: "Warm and Prepare",
        description:
          "Pre-heat your bowl and whisk, then sift 2g of matcha for an even foam.",
      },
      {
        title: "Whisk with Precision",
        description:
          "Add 60ml of water at 78°C and whisk in quick zig-zag motions for 20 seconds.",
      },
      {
        title: "Complete the Ritual",
        description:
          "Top with another 40ml water and enjoy immediately while the crema is alive.",
      },
    ],
    featured: true,
  },
  {
    slug: "silk-earl-grey",
    name: "Silk Earl Grey",
    subtitle: "Single-estate bergamot infusion",
    shortDescription:
      "A polished black tea with citrus bloom, honeyed depth, and dry floral lift.",
    longDescription:
      "Crafted from high-elevation whole leaves and bright Calabrian bergamot oil, this blend delivers a refined aromatic profile that stays elegant from first sip to finish.",
    origin: "Nuwara Eliya, Sri Lanka",
    price: "$34",
    image: "/images/tea/silk-earl-grey.png",
    tones: ["Citrus", "Honey", "Floral"],
    ingredients: ["Whole-leaf Ceylon black tea", "Calabrian bergamot oil"],
    brewingGuide: [
      {
        title: "Measure",
        description: "Use 3g of leaf per 200ml of filtered water.",
      },
      {
        title: "Infuse",
        description: "Steep at 92°C for 3 minutes without agitation.",
      },
      {
        title: "Serve",
        description:
          "Pour gently through a warm strainer and rest for 30 seconds before sipping.",
      },
    ],
  },
  {
    slug: "white-peony-atelier",
    name: "White Peony Atelier",
    subtitle: "Hand-picked spring white tea",
    shortDescription:
      "Delicate white tea with melon nuance and a soft mineral aftertaste.",
    longDescription:
      "Selected from unopened buds and tender leaves, this tea captures spring clarity with graceful floral notes and a quietly sweet finish.",
    origin: "Fuding, China",
    price: "$41",
    image: "/images/tea/white-peony-atelier.png",
    tones: ["Melon", "Wildflower", "Mineral"],
    ingredients: ["Bai Mu Dan buds and leaves"],
    brewingGuide: [
      {
        title: "Rinse",
        description: "Briefly awaken leaves with 85°C water and discard rinse.",
      },
      {
        title: "Steep",
        description: "Infuse 4g per 240ml for 2.5 minutes.",
      },
      {
        title: "Repeat",
        description: "Rebrew 2 to 3 times, adding 20 seconds each infusion.",
      },
    ],
  },
  {
    slug: "amber-oolong-signature",
    name: "Amber Oolong Signature",
    subtitle: "Charcoal-finished mountain oolong",
    shortDescription:
      "Rounded body with toasted sugar aromatics and orchid-like lift.",
    longDescription:
      "Slow-roasted over charcoal to reveal complexity, this oolong balances creamy depth with bright top notes for a tea that evolves beautifully across infusions.",
    origin: "Alishan, Taiwan",
    price: "$46",
    image: "/images/tea/amber-oolong-signature.png",
    tones: ["Toasted Sugar", "Orchid", "Cream"],
    ingredients: ["Hand-rolled high-mountain oolong leaf"],
    brewingGuide: [
      {
        title: "Prime the Vessel",
        description: "Warm gaiwan and cups to maintain aromatic precision.",
      },
      {
        title: "First Infusion",
        description: "Use 5g leaf, 95°C water, and steep for 40 seconds.",
      },
      {
        title: "Progressive Infusions",
        description: "Increase each brew by 10 to 15 seconds.",
      },
    ],
  },
  {
    slug: "jasmine-nocturne",
    name: "Jasmine Nocturne",
    subtitle: "Night-scented green tea",
    shortDescription:
      "An airy green base layered with natural jasmine petals over several nights.",
    longDescription:
      "The leaves are repeatedly scented with fresh blossoms at dusk, resulting in a nuanced cup that is bright, soft, and quietly aromatic.",
    origin: "Guangxi, China",
    price: "$37",
    image: "/images/tea/jasmine-nocturne.png",
    tones: ["Jasmine", "Fresh Green", "Sweet Finish"],
    ingredients: ["Spring green tea", "Fresh jasmine blossoms"],
    brewingGuide: [
      {
        title: "Leaf-to-Water Ratio",
        description: "Use 3g per 200ml.",
      },
      {
        title: "Steep Lightly",
        description: "Infuse at 80°C for 2 minutes.",
      },
      {
        title: "Enjoy",
        description: "Serve in thin porcelain for a clean floral nose.",
      },
    ],
  },
  {
    slug: "smoked-lapsang-atelier",
    name: "Smoked Lapsang Atelier",
    subtitle: "Pine-smoked artisanal black tea",
    shortDescription:
      "Bold and velvety with controlled smoke, dark cacao, and sweet wood.",
    longDescription:
      "A modern interpretation of traditional smoking, designed for balance. The profile is deep and layered, yet smooth enough for slow evening sipping.",
    origin: "Wuyi, China",
    price: "$39",
    image: "/images/tea/smoked-lapsang-atelier.png",
    tones: ["Smoke", "Cacao", "Cedar"],
    ingredients: ["Wuyi black tea", "Pine smoke finish"],
    brewingGuide: [
      {
        title: "Dose",
        description: "Use 4g per 220ml of water.",
      },
      {
        title: "Steep",
        description: "Infuse at 95°C for 2.5 minutes.",
      },
      {
        title: "Pair",
        description: "Best served with dark chocolate or aged cheese.",
      },
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Aurelia's teas feel less like a beverage and more like a daily ceremony.",
    author: "Elena Park",
    role: "Tea Sommelier",
  },
  {
    quote:
      "The craftsmanship is undeniable. Every infusion tastes intentional and pure.",
    author: "Marcus Leung",
    role: "Hospitality Curator",
  },
  {
    quote:
      "Minimal packaging, exceptional leaf quality, and a beautifully calm brand experience.",
    author: "Nadia Valdez",
    role: "Design Director",
  },
];

export const featuredTea =
  teaProducts.find((product) => product.featured) ?? teaProducts[0];
