export type Locale = "zh" | "en";

export interface Translations {
  nav: {
    home: string;
    shop: string;
    about: string;
    contact: string;
    inquiry: string;
    langLabel: string;
  };
  hero: {
    eyebrow: string;
    title1: string;
    title2: string;
    subtitle: string;
    stats: [string, string, string, string];
    scrollHint: string;
  };
  products: {
    eyebrow: string;
    title: string;
    viewSpecs: string;
    items: {
      name: string;
      tag: string;
      desc: string;
      specs: { label: string; value: string }[];
    }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: {
      name: string;
      role: string;
      country: string;
      text: string;
    }[];
  };
  categories: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      name: string;
      desc: string;
      spec: string;
    }[];
  };
  quality: {
    eyebrow: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    desc: string;
    certs: string[];
    stats: { value: string; label: string }[];
  };
  cta: {
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    desc: string;
    quoteBtn: string;
    browseBtn: string;
  };
  footer: {
    brandDesc: string;
    columns: { title: string; items: [string, string, string, string] }[];
    contactLabel: string;
    headquartersLabel: string;
    hoursLabel: string;
    contactPhone: string;
    contactEmail: string;
    headquartersName: string;
    headquartersAddr: string;
    hoursValue: string;
    hoursNote: string;
    privacy: string;
    terms: string;
    icp: string;
  };
  placeholder: {
    comingSoon: string;
  };
  notFound: {
    title: string;
    message: string;
    link: string;
  };
  shop: {
    title: string;
    filters: string;
    clearAll: string;
    price: string;
    minPrice: string;
    maxPrice: string;
    apply: string;
    category: string;
    brand: string;
    allCategories: string;
    allBrands: string;
    sortBy: string;
    sortDefault: string;
    sortSales: string;
    sortPriceDesc: string;
    sortPriceAsc: string;
    sortNewest: string;
    gridSize: string;
    productsFound: string;
    prev: string;
    next: string;
  };
}
