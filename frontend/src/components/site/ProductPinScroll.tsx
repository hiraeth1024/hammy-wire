import { useEffect, useRef, useState } from "react";
import { useT } from "@/i18n/context";
import rvv from "@/assets/product-rvv.jpg";
import rvs from "@/assets/product-rvs.jpg";
import lan from "@/assets/product-lan.jpg";
import twisted from "@/assets/product-twisted.jpg";

const images = [rvv, rvs, lan, twisted];

export const ProductPinScroll = () => {
  const t = useT();
  const products = t.products.items;
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const passed = Math.min(Math.max(-rect.top, 0), total);
      setProgress(total > 0 ? passed / total : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const n = products.length;
  const translatePct = -progress * (n - 1) * 100;
  const activeIdx = Math.min(n - 1, Math.round(progress * (n - 1)));

  return (
    <section
      ref={sectionRef}
      className="relative bg-background"
      style={{ height: `${n * 100}vh` }}
      id="products"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Section header */}
        <div className="absolute top-0 inset-x-0 z-20 pt-24 md:pt-28">
          <div className="container flex items-end justify-between gap-6">
            <div>
              <div className="text-xs tracking-[0.4em] text-muted-hammy uppercase mb-3">
                <span className="inline-block w-6 h-px bg-primary align-middle mr-2" />
                {t.products.eyebrow}
              </div>
              <h2 className="font-display font-semibold text-foreground text-3xl md:text-5xl tracking-tight">
                {t.products.title}
              </h2>
            </div>
            {/* progress segments */}
            <div className="hidden md:flex items-center gap-2">
              {products.map((p, i) => (
                <div key={p.name} className="flex items-center gap-2">
                  <span
                    className={`text-[11px] tracking-widest transition-colors ${
                      i === activeIdx ? "text-foreground" : "text-muted-hammy/60"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`block h-px transition-all duration-500 ${
                      i === activeIdx ? "w-16 bg-primary" : "w-8 bg-border"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal track */}
        <div
          className="flex h-full will-change-transform transition-transform duration-100 ease-out"
          style={{ width: `${n * 100}vw`, transform: `translateX(${translatePct}vw)` }}
        >
          {products.map((p, i) => (
            <div
              key={p.name}
              className="w-screen h-full shrink-0 flex items-center"
            >
              <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pt-32 md:pt-40">
                {/* Image */}
                <div className="lg:col-span-7 relative">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-card-hammy border border-border">
                    <img
                      src={images[i]}
                      alt={p.name}
                      width={1280}
                      height={960}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-5 left-5 px-3 py-1 rounded-full text-[10px] tracking-[0.3em] uppercase bg-background/60 backdrop-blur border border-border text-foreground">
                      {p.tag}
                    </div>
                    <div className="absolute bottom-5 right-5 text-[10px] text-muted-hammy tracking-widest">
                      HAMMY · {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="lg:col-span-5">
                  <div className="text-xs tracking-[0.4em] text-primary uppercase mb-4">
                    Product · {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-4xl md:text-6xl leading-none tracking-tight">
                    {p.name}
                  </h3>
                  <p className="mt-6 text-muted-hammy leading-relaxed max-w-md">
                    {p.desc}
                  </p>

                  <dl className="mt-8 grid grid-cols-2 gap-px bg-border rounded-lg overflow-hidden border border-border">
                    {p.specs.map((s) => (
                      <div key={s.label} className="bg-bg-card p-4">
                        <dt className="text-[10px] tracking-[0.3em] uppercase text-muted-hammy">
                          {s.label}
                        </dt>
                        <dd className="mt-1 text-foreground font-medium">{s.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 mt-8 text-sm text-foreground border-b border-primary pb-1 hover:gap-3 transition-all"
                  >
                    {t.products.viewSpecs}
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPinScroll;
