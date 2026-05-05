import type { Product } from "@/data/products";

export const ShopProductCard = ({ product, locale }: { product: Product; locale: "zh" | "en" }) => {
  const name = locale === "zh" ? product.nameZh : product.name;

  return (
    <div className="group relative bg-card-hammy border border-border/60 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-glow transition-all duration-500 hover:-translate-y-1.5">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-elevated">
        <img
          src={product.image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] tracking-[0.3em] uppercase bg-background/70 backdrop-blur-md border border-border/60 text-primary">
            {product.category}
          </span>
        </div>
        {product.isNew && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-primary text-primary-foreground shadow-sm">
              NEW
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4 md:p-5">
        <div className="text-[10px] tracking-[0.2em] uppercase text-muted-hammy mb-1.5">
          {product.brand}
        </div>
        <h3 className="text-foreground text-sm md:text-base font-medium leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        <div className="mt-3 flex items-end justify-between">
          <div className="flex items-baseline gap-0.5">
            <span className="text-xs text-muted-hammy">¥</span>
            <span className="text-foreground font-display font-semibold text-lg md:text-xl tracking-tight">
              {product.price.toFixed(2)}
            </span>
          </div>
          <span className="text-[10px] text-muted-hammy tabular-nums">
            {product.salesCount.toLocaleString()}+
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShopProductCard;
