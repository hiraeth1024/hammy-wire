import { useState } from "react";
import { useT } from "@/i18n/context";
import type { Category } from "@/data/products";
import { allCategories, allBrands } from "@/data/products";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export interface ShopFilters {
  category?: Category;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
}

interface Props {
  filters: ShopFilters;
  onChange: (f: ShopFilters) => void;
}

function FilterIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M2 3.5h10L8.5 7v3.5L5.5 12V7L2 3.5z" />
    </svg>
  );
}

export const ShopFilterSidebar = ({ filters, onChange }: Props) => {
  const t = useT();
  const [min, setMin] = useState(filters.minPrice?.toString() ?? "");
  const [max, setMax] = useState(filters.maxPrice?.toString() ?? "");

  const hasFilters = filters.category || filters.brand || filters.minPrice !== undefined || filters.maxPrice !== undefined;

  return (
    <aside className="w-full lg:w-1/4 shrink-0">
      <div className="lg:sticky lg:top-28 bg-card-hammy border border-border/60 rounded-2xl p-6 backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-primary"><FilterIcon /></span>
          <h2 className="font-display text-foreground text-base font-semibold tracking-tight">
            {t.shop.filters}
          </h2>
          {hasFilters && (
            <button
              onClick={() => {
                setMin("");
                setMax("");
                onChange({});
              }}
              className="ml-auto text-xs text-primary/70 hover:text-primary transition-colors"
            >
              {t.shop.clearAll}
            </button>
          )}
        </div>

        {/* Category */}
        <div className="mb-6">
          <label className="block text-xs text-muted-hammy mb-2.5 tracking-wide">
            {t.shop.category}
          </label>
          <Select
            value={filters.category ?? "all"}
            onValueChange={(v) =>
              onChange({ ...filters, category: v === "all" ? undefined : (v as Category) })
            }
          >
            <SelectTrigger className="w-full bg-background border-border/60 text-foreground text-xs h-10 rounded-lg focus:border-primary/50 transition-colors">
              <SelectValue placeholder={t.shop.allCategories} />
            </SelectTrigger>
            <SelectContent className="bg-card-hammy border-border">
              <SelectItem value="all">{t.shop.allCategories}</SelectItem>
              {allCategories.map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Brand */}
        <div className="mb-6">
          <label className="block text-xs text-muted-hammy mb-2.5 tracking-wide">
            {t.shop.brand}
          </label>
          <Select
            value={filters.brand ?? "all"}
            onValueChange={(v) =>
              onChange({ ...filters, brand: v === "all" ? undefined : v })
            }
          >
            <SelectTrigger className="w-full bg-background border-border/60 text-foreground text-xs h-10 rounded-lg focus:border-primary/50 transition-colors">
              <SelectValue placeholder={t.shop.allBrands} />
            </SelectTrigger>
            <SelectContent className="bg-card-hammy border-border">
              <SelectItem value="all">{t.shop.allBrands}</SelectItem>
              {allBrands.map((b) => (
                <SelectItem key={b} value={b}>{b}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price range */}
        <div>
          <label className="block text-xs text-muted-hammy mb-2.5 tracking-wide">
            {t.shop.price}
          </label>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              placeholder={t.shop.minPrice}
              value={min}
              onChange={(e) => setMin(e.target.value)}
              className="w-full bg-background border-border/60 text-foreground text-xs h-10 rounded-lg focus:border-primary/50 transition-colors"
            />
            <span className="text-muted-hammy/40 text-xs">—</span>
            <Input
              type="number"
              placeholder={t.shop.maxPrice}
              value={max}
              onChange={(e) => setMax(e.target.value)}
              className="w-full bg-background border-border/60 text-foreground text-xs h-10 rounded-lg focus:border-primary/50 transition-colors"
            />
          </div>
          <Button
            variant="outline"
            size="sm"
            className="w-full mt-2.5 border-border/60 text-muted-hammy hover:text-foreground hover:border-primary/30 text-xs h-9 rounded-lg transition-all duration-200"
            onClick={() => {
              const minVal = min ? parseFloat(min) : undefined;
              const maxVal = max ? parseFloat(max) : undefined;
              onChange({ ...filters, minPrice: minVal, maxPrice: maxVal });
            }}
          >
            {t.shop.apply}
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default ShopFilterSidebar;
