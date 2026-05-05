import type { Translations } from "../types";

const en: Translations = {
  nav: {
    home: "Home",
    shop: "Shop",
    about: "About",
    contact: "Contact",
    inquiry: "Inquiry",
    langLabel: "中",
  },
  hero: {
    eyebrow: "Hammy · Series 01",
    title1: "Extremely",
    title2: "Durable Jacket",
    subtitle:
      "Environmental PVC material, soft and flexible, protective and durable.",
    stats: [
      "30+ Years Experience",
      "ISO 9001 Certified",
      "50+ Countries Served",
      "100% Pure Copper",
    ],
    scrollHint: "Scroll",
  },
  products: {
    eyebrow: "Our Products",
    title: "Engineered, end‑to‑end.",
    viewSpecs: "View specifications",
    items: [
      {
        name: "RVV",
        tag: "Power",
        desc: "Multi-core flexible cable with PVC sheath. Built for industrial machines, lighting and household power runs that demand both flexibility and protection.",
        specs: [
          { label: "Cores", value: "2 – 24" },
          { label: "Section", value: "0.5 – 10 mm²" },
          { label: "Voltage", value: "300 / 500 V" },
          { label: "Jacket", value: "Eco-PVC" },
        ],
      },
      {
        name: "RVS",
        tag: "Signal",
        desc: "Twisted pair flexible wire with anti-interference performance. Widely used for fire alarm, broadcast and low-voltage signal lines.",
        specs: [
          { label: "Cores", value: "2 (Twisted)" },
          { label: "Section", value: "0.5 – 2.5 mm²" },
          { label: "Voltage", value: "300 / 300 V" },
          { label: "Jacket", value: "PVC" },
        ],
      },
      {
        name: "LAN Cat6",
        tag: "Network",
        desc: "Category 6 ethernet cable engineered for stable gigabit transmission. Pure oxygen-free copper conductors and precision-twisted pairs.",
        specs: [
          { label: "Bandwidth", value: "250 MHz" },
          { label: "Speed", value: "1 Gbps" },
          { label: "Pairs", value: "4 (UTP / FTP)" },
          { label: "Length", value: "305 m / box" },
        ],
      },
      {
        name: "Twisted Pair",
        tag: "Telecom",
        desc: "High-purity copper twisted pair cable for communication and instrumentation. Tight twist rate dramatically reduces crosstalk.",
        specs: [
          { label: "Pairs", value: "1 – 100" },
          { label: "AWG", value: "22 – 26" },
          { label: "Shield", value: "UTP / STP" },
          { label: "Use", value: "Telecom" },
        ],
      },
    ],
  },
  testimonials: {
    eyebrow: "Voices from the field",
    title: "Trusted on every continent.",
    items: [
      {
        name: "M. Schneider",
        role: "Procurement, BauTech GmbH",
        country: "Germany",
        text: "The jacket quality on Hammy RVV is the best we've sourced in 12 years. Zero failures across 40,000m installed.",
      },
      {
        name: "Aarav Patel",
        role: "Project Lead, Infinite Networks",
        country: "India",
        text: "Their Cat6 holds gigabit easily over 90m runs. Packaging and consistency are exceptional.",
      },
      {
        name: "L. Costa",
        role: "Owner, Costa Eletrica",
        country: "Brazil",
        text: "Pure copper, accurate gauge, fair pricing. Hammy has become our default supplier.",
      },
      {
        name: "Mr. Chen",
        role: "Project Manager, Huadong Electric",
        country: "China",
        text: "RVS twisted pair is extremely stable, great field feedback. We've reordered 6 times.",
      },
      {
        name: "Y. Tanaka",
        role: "Engineer, Kobe Systems",
        country: "Japan",
        text: "Tight tolerances and clean shielding. Documentation is detailed and accurate.",
      },
      {
        name: "S. El-Amin",
        role: "Distributor, Cairo Cables",
        country: "Egypt",
        text: "Lead times are reliable, and the team responds within hours. Top-tier OEM partner.",
      },
    ],
  },
  categories: {
    eyebrow: "Categories",
    title: "A wire for every application.",
    subtitle:
      "Four core families — power, signal, network and telecom. All built on the same uncompromising copper.",
    items: [
      {
        name: "RVV Power Cable",
        desc: "Flexible PVC sheathed multi-core power lines.",
        spec: "0.5 – 10 mm² · 2-24 cores",
      },
      {
        name: "RVS Signal Cable",
        desc: "Anti-interference twisted pair for low voltage.",
        spec: "0.5 – 2.5 mm² · 2 cores",
      },
      {
        name: "Cat6 Network",
        desc: "Gigabit ethernet, OFC pure copper.",
        spec: "250MHz · 305m/box",
      },
      {
        name: "Twisted Pair",
        desc: "Telecom & instrumentation cable.",
        spec: "AWG 22-26 · UTP / STP",
      },
    ],
  },
  quality: {
    eyebrow: "Quality Assurance",
    titlePrefix: "Quality you can ",
    titleHighlight: "trust",
    titleSuffix: ".",
    desc: "Every reel of Hammy cable passes more than a thousand inline checks — from copper purity, twist pitch, insulation thickness, to high-voltage spark and aging tests.",
    certs: ["ISO 9001", "ISO 14001", "CE", "RoHS", "CCC", "UL"],
    stats: [
      { value: "1000+", label: "QC checkpoints" },
      { value: "100%", label: "Pure copper core" },
      { value: "30yr", label: "Service warranty" },
    ],
  },
  cta: {
    titlePrefix: "Power your project\nwith ",
    titleHighlight: "Hammy",
    titleSuffix: ".",
    desc: "Request a sample, ask for an OEM quote, or speak with an engineer. We respond within 24 hours.",
    quoteBtn: "Request a quote",
    browseBtn: "Browse products",
  },
  footer: {
    brandDesc:
      "Premium electrical wires & cables, engineered with pure copper and uncompromising PVC jackets.",
    columns: [
      {
        title: "Our Brand",
        items: ["About Hammy", "Brand Story", "News", "Sustainability"],
      },
      {
        title: "Our Stores",
        items: [
          "Shanghai Flagship",
          "Shenzhen Showroom",
          "Yiwu Wholesale",
          "Global Distributors",
        ],
      },
      {
        title: "Resources",
        items: [
          "Product Categories",
          "Certifications",
          "Tech Blog",
          "Downloads",
        ],
      },
      {
        title: "For Customers",
        items: [
          "After-Sales",
          "Returns Policy",
          "Shipping & Logistics",
          "FAQ",
        ],
      },
    ],
    contactLabel: "Contact",
    headquartersLabel: "Headquarters",
    hoursLabel: "Hours",
    contactPhone: "+86 574 1234 5678",
    contactEmail: "sales@hammy.example",
    headquartersName: "Hammy Cable Industrial Park",
    headquartersAddr: "No. 88 Copper Rd, Ningbo, China",
    hoursValue: "Mon — Sat · 09:00 – 18:00",
    hoursNote: "Global support · 24h email",
    privacy: "Privacy",
    terms: "Terms",
    icp: "浙ICP备 0000000 号",
  },
  placeholder: {
    comingSoon: "Coming soon",
  },
  shop: {
    title: "Shop",
    filters: "Filters",
    clearAll: "Clear All",
    price: "Price Range",
    minPrice: "Min",
    maxPrice: "Max",
    apply: "Apply",
    category: "Category",
    brand: "Brand",
    allCategories: "All Categories",
    allBrands: "All Brands",
    sortBy: "Sort",
    sortDefault: "Default",
    sortSales: "Best Selling",
    sortPriceDesc: "Price: High to Low",
    sortPriceAsc: "Price: Low to High",
    sortNewest: "Newest",
    gridSize: "View",
    productsFound: "products found",
    prev: "Prev",
    next: "Next",
  },
  notFound: {
    title: "404",
    message: "Oops! Page not found",
    link: "Return to Home",
  },
};

export default en;
