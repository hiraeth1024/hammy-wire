import { useMemo, useState, useRef, useEffect } from "react";
import { useT, useLocale } from "@/i18n/context";
import type { Product, SortOption } from "@/data/products";
import { filterAndSort } from "@/data/products";
import { ShopProductCard } from "./ShopProductCard";
import type { ShopFilters } from "./ShopFilterSidebar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const GRID_COLS: Record<number, string> = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
};

const PAGE_SIZE = 9;

/* SVG grid icons */
function GridIcon({ cols }: { cols: number }) {
  const size = 16;
  const gap = 2;
  const cell = (size - gap * (cols + 1)) / cols;
  const cells = Array.from({ length: cols * cols }, (_, i) => {
    const row = Math.floor(i / cols);
    const col = i % cols;
    return { x: gap + col * (cell + gap), y: gap + row * (cell + gap) };
  });

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      {cells.map((c) => (
        <rect key={`${c.x}-${c.y}`} x={c.x} y={c.y} width={cell} height={cell} rx={1.5} fill="currentColor" opacity={0.6} />
      ))}
    </svg>
  );
}

interface Props {
  products: Product[];
  filters: ShopFilters;
  sort: SortOption;
  onSortChange: (s: SortOption) => void;
  onClearFilter: (key: keyof ShopFilters) => void;
}

export const ShopProductGrid = ({
  products,
  filters,
  sort,
  onSortChange,
  onClearFilter,
}: Props) => {
  const t = useT();
  const { locale } = useLocale();
  const [gridSize, setGridSize] = useState(3);
  const [page, setPage] = useState(1);
  const [animKey, setAnimKey] = useState(0);
  const prevCount = useRef(0);

  const filtered = useMemo(
    () => filterAndSort(products, filters, sort),
    [products, filters, sort],
  );

  // Trigger fade animation when filtered results change
  useEffect(() => {
    if (filtered.length !== prevCount.current) {
      setAnimKey((k) => k + 1);
      prevCount.current = filtered.length;
    }
  }, [filtered.length]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pageProducts = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const handleFilterChange = (key: keyof ShopFilters) => {
    onClearFilter(key);
    setPage(1);
  };

  const activeFilterChips: { label: string; onRemove: () => void }[] = [];
  if (filters.category) {
    activeFilterChips.push({
      label: filters.category,
      onRemove: () => handleFilterChange("category"),
    });
  }
  if (filters.brand) {
    activeFilterChips.push({
      label: filters.brand,
      onRemove: () => handleFilterChange("brand"),
    });
  }
  if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
    const minStr = filters.minPrice !== undefined ? `¥${filters.minPrice}` : "";
    const maxStr = filters.maxPrice !== undefined ? `¥${filters.maxPrice}` : "";
    activeFilterChips.push({
      label: maxStr ? `${minStr} - ${maxStr}` : minStr,
      onRemove: () => {
        onClearFilter("minPrice");
        onClearFilter("maxPrice");
      },
    });
  }

  return (
    <div className="w-full lg:w-3/4">
      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-card-hammy border border-border rounded-xl px-4 py-3">
        <div className="flex items-center gap-4">
          {/* Sort */}
          <Select value={sort} onValueChange={(v) => { onSortChange(v as SortOption); setPage(1); }}>
            <SelectTrigger className="w-[150px] bg-background border-border text-foreground text-xs h-9">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-card-hammy border-border">
              <SelectItem value="default">{t.shop.sortDefault}</SelectItem>
              <SelectItem value="sales">{t.shop.sortSales}</SelectItem>
              <SelectItem value="price-desc">{t.shop.sortPriceDesc}</SelectItem>
              <SelectItem value="price-asc">{t.shop.sortPriceAsc}</SelectItem>
              <SelectItem value="newest">{t.shop.sortNewest}</SelectItem>
            </SelectContent>
          </Select>

          <span className="hidden sm:inline text-xs text-muted-hammy">
            <span className="text-foreground font-medium">{filtered.length}</span>{" "}
            {t.shop.productsFound}
          </span>
        </div>

        {/* Grid size toggle */}
        <div className="flex items-center gap-1.5 bg-background rounded-lg p-1 border border-border">
          {[2, 3, 4].map((n) => (
            <button
              key={n}
              onClick={() => setGridSize(n)}
              className={`w-8 h-8 rounded-md flex items-center justify-center transition-all duration-200 ${
                gridSize === n
                  ? "bg-primary/15 text-primary shadow-sm"
                  : "text-muted-hammy hover:text-foreground hover:bg-background"
              }`}
              title={`${n}×${n}`}
            >
              <GridIcon cols={n} />
            </button>
          ))}
        </div>
      </div>

      {/* Active filter chips */}
      {activeFilterChips.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mb-6 animate-fade-in">
          {activeFilterChips.map((chip) => (
            <button
              key={chip.label}
              onClick={chip.onRemove}
              className="inline-flex items-center gap-1.5 pl-3 pr-2 py-1.5 rounded-full text-xs bg-primary/10 text-primary border border-primary/25 hover:bg-primary/20 hover:border-primary/40 transition-all duration-200"
            >
              {chip.label}
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M2 2l6 6M8 2l-6 6" />
              </svg>
            </button>
          ))}
        </div>
      )}

      {/* Product grid */}
      <div
        key={animKey}
        className={`grid ${GRID_COLS[gridSize]} gap-4 md:gap-5`}
      >
        {pageProducts.map((p, i) => (
          <div
            key={p.id}
            className="animate-fade-in"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <ShopProductCard product={p} locale={locale} />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-24">
          <p className="text-muted-hammy text-sm">No products match your filters.</p>
          <button
            onClick={() => {
              onClearFilter("category");
              onClearFilter("brand");
              onClearFilter("minPrice");
              onClearFilter("maxPrice");
            }}
            className="mt-4 text-xs text-primary hover:text-primary/80 transition-colors"
          >
            {t.shop.clearAll}
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-12">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={safePage <= 1}
            className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-hammy hover:text-foreground hover:border-foreground/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 3L5 7l4 4" />
            </svg>
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter((p) => {
              if (totalPages <= 7) return true;
              if (p === 1 || p === totalPages) return true;
              if (Math.abs(p - safePage) <= 1) return true;
              return false;
            })
            .map((p, i, arr) => {
              const showEllipsis = i > 0 && p - arr[i - 1] > 1;
              return (
                <div key={p} className="flex items-center gap-1.5">
                  {showEllipsis && <span className="text-muted-hammy text-xs px-0.5">...</span>}
                  <button
                    onClick={() => setPage(p)}
                    className={`w-9 h-9 rounded-lg text-xs font-medium transition-all duration-200 ${
                      p === safePage
                        ? "bg-primary/15 text-primary border border-primary/30"
                        : "text-muted-hammy hover:text-foreground hover:bg-card-hammy"
                    }`}
                  >
                    {p}
                  </button>
                </div>
              );
            })}

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={safePage >= totalPages}
            className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-hammy hover:text-foreground hover:border-foreground/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 3l4 4-4 4" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopProductGrid;
