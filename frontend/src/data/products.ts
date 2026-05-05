import rvvImg from "@/assets/product-rvv.jpg";
import rvsImg from "@/assets/product-rvs.jpg";
import lanImg from "@/assets/product-lan.jpg";
import twistedImg from "@/assets/product-twisted.jpg";

export type Category = "RVV" | "RVS" | "LAN" | "Twisted Pair";
export type SortOption = "default" | "sales" | "price-desc" | "price-asc" | "newest";

export interface Product {
  id: number;
  name: string;
  nameZh: string;
  category: Category;
  brand: string;
  price: number;
  salesCount: number;
  isNew: boolean;
  image: string;
}

const categoryImages: Record<Category, string> = {
  RVV: rvvImg,
  RVS: rvsImg,
  LAN: lanImg,
  "Twisted Pair": twistedImg,
};

const brands = ["Hammy Pro", "CopperMax", "FlexWire", "CableTech", "PowerLink"];

function p(
  id: number,
  name: string,
  nameZh: string,
  category: Category,
  brand: string,
  price: number,
  salesCount: number,
  isNew: boolean,
): Product {
  return { id, name, nameZh, category, brand, price, salesCount, isNew, image: categoryImages[category] };
}

export const allProducts: Product[] = [
  p(1, "RVV 2×0.5mm²", "RVV 2×0.5mm² 软护套电缆", "RVV", "Hammy Pro", 1.20, 1580, false),
  p(2, "RVV 3×1.0mm²", "RVV 3×1.0mm² 软护套电缆", "RVV", "Hammy Pro", 2.35, 2340, false),
  p(3, "RVV 3×2.5mm²", "RVV 3×2.5mm² 软护套电缆", "RVV", "CopperMax", 4.80, 980, false),
  p(4, "RVV 5×4.0mm²", "RVV 5×4.0mm² 软护套电缆", "RVV", "PowerLink", 9.50, 650, false),
  p(5, "RVV 5×6.0mm²", "RVV 5×6.0mm² 软护套电缆", "RVV", "FlexWire", 13.80, 420, true),
  p(6, "RVS 2×0.5mm²", "RVS 2×0.5mm² 双绞软线", "RVS", "Hammy Pro", 0.85, 3200, false),
  p(7, "RVS 2×1.0mm²", "RVS 2×1.0mm² 双绞软线", "RVS", "Hammy Pro", 1.15, 2850, false),
  p(8, "RVS 2×1.5mm²", "RVS 2×1.5mm² 双绞软线", "RVS", "CableTech", 1.60, 1920, false),
  p(9, "RVS 2×2.5mm²", "RVS 2×2.5mm² 双绞软线", "RVS", "CopperMax", 2.40, 1100, true),
  p(10, "Cat6 UTP 305m", "六类网线 UTP 305米", "LAN", "Hammy Pro", 85.00, 2100, false),
  p(11, "Cat6 FTP 305m", "六类网线 FTP 305米", "LAN", "Hammy Pro", 105.00, 1650, false),
  p(12, "Cat6A STP 305m", "超六类网线 STP 305米", "LAN", "CableTech", 145.00, 780, false),
  p(13, "Cat5e UTP 305m", "超五类网线 UTP 305米", "LAN", "PowerLink", 55.00, 3400, false),
  p(14, "Cat6 UTP 100m", "六类网线 UTP 100米", "LAN", "FlexWire", 32.00, 890, true),
  p(15, "TP UTP 2P AWG24", "双绞线 UTP 2对 AWG24", "Twisted Pair", "Hammy Pro", 0.45, 4500, false),
  p(16, "TP STP 4P AWG22", "双绞线 STP 4对 AWG22", "Twisted Pair", "CableTech", 1.80, 2100, false),
  p(17, "TP UTP 25P AWG24", "双绞线 UTP 25对 AWG24", "Twisted Pair", "Hammy Pro", 12.50, 750, false),
  p(18, "TP STP 50P AWG22", "双绞线 STP 50对 AWG22", "Twisted Pair", "CopperMax", 28.00, 380, true),
  p(19, "TP UTP 100P AWG24", "双绞线 UTP 100对 AWG24", "Twisted Pair", "PowerLink", 55.00, 190, false),
  p(20, "RVV 2×0.75mm²", "RVV 2×0.75mm² 软护套电缆", "RVV", "FlexWire", 1.60, 1260, false),
];

export const allBrands = [...new Set(allProducts.map((p) => p.brand))];
export const allCategories: Category[] = ["RVV", "RVS", "LAN", "Twisted Pair"];

export function filterAndSort(
  products: Product[],
  filters: { category?: Category; brand?: string; minPrice?: number; maxPrice?: number },
  sort: SortOption,
): Product[] {
  let result = [...products];

  if (filters.category) result = result.filter((p) => p.category === filters.category);
  if (filters.brand) result = result.filter((p) => p.brand === filters.brand);
  if (filters.minPrice !== undefined) result = result.filter((p) => p.price >= filters.minPrice!);
  if (filters.maxPrice !== undefined) result = result.filter((p) => p.price <= filters.maxPrice!);

  switch (sort) {
    case "sales":
      result.sort((a, b) => b.salesCount - a.salesCount);
      break;
    case "price-desc":
      result.sort((a, b) => b.price - a.price);
      break;
    case "price-asc":
      result.sort((a, b) => a.price - b.price);
      break;
    case "newest":
      result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      break;
    default:
      break;
  }

  return result;
}
