import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useT } from "@/i18n/context";
import type { SortOption } from "@/data/products";
import { allProducts } from "@/data/products";
import { ShopFilterSidebar } from "@/components/site/ShopFilterSidebar";
import type { ShopFilters } from "@/components/site/ShopFilterSidebar";
import { ShopProductGrid } from "@/components/site/ShopProductGrid";
import shopBg from "@/assets/shop.png";

const Shop = () => {
  const t = useT();
  const [filters, setFilters] = useState<ShopFilters>({});
  const [sort, setSort] = useState<SortOption>("default");

  return (
    <main className="bg-background min-h-screen flex flex-col">
      <Nav />

      {/* Hero banner — 1/3 viewport */}
      <section className="relative h-[35vh] min-h-[260px] md:min-h-[320px] flex items-center">
        <img
          src={shopBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
        <div className="relative z-10 container mt-16 md:mt-20">
          <div className="text-xs tracking-[0.4em] text-muted-hammy uppercase mb-4 animate-fade-in">
            <span className="inline-block w-6 h-px bg-primary align-middle mr-2" />
            {t.nav.shop}
          </div>
          <h1 className="font-display font-semibold text-foreground text-4xl md:text-7xl tracking-tight leading-[1] animate-fade-in">
            {t.shop.title}
          </h1>
        </div>
      </section>

      {/* Main content: sidebar + grid — 2/3 */}
      <section className="flex-1 pb-24">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            <ShopFilterSidebar
              filters={filters}
              onChange={(f) => setFilters(f)}
            />
            <ShopProductGrid
              products={allProducts}
              filters={filters}
              sort={sort}
              onSortChange={setSort}
              onClearFilter={(key) => {
                const next = { ...filters };
                if (key === "minPrice" || key === "maxPrice") {
                  delete next.minPrice;
                  delete next.maxPrice;
                } else {
                  delete next[key];
                }
                setFilters(next);
              }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Shop;
