import { useT } from "@/i18n/context";

export const Categories = () => {
  const t = useT();

  return (
    <section className="relative bg-background py-24 md:py-32" id="categories">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="text-xs tracking-[0.4em] text-muted-hammy uppercase mb-3">
              <span className="inline-block w-6 h-px bg-primary align-middle mr-2" />
              {t.categories.eyebrow}
            </div>
            <h2 className="font-display font-semibold text-foreground text-3xl md:text-5xl tracking-tight max-w-2xl">
              {t.categories.title}
            </h2>
          </div>
          <p className="text-muted-hammy max-w-sm">{t.categories.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {t.categories.items.map((c) => (
            <div
              key={c.name}
              className="group relative bg-card-hammy p-6 md:p-8 hover:bg-background transition-colors min-h-[260px] flex flex-col"
            >
              <div className="text-[10px] tracking-[0.4em] text-primary uppercase mb-6">
                {c.name.split(" ")[0]}
              </div>
              <h3 className="font-display text-foreground text-2xl md:text-3xl font-semibold tracking-tight">
                {c.name}
              </h3>
              <p className="text-muted-hammy text-sm mt-3 leading-relaxed flex-1">{c.desc}</p>
              <div className="mt-6 pt-4 border-t border-border text-xs text-muted-hammy tracking-wide">
                {c.spec}
              </div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-copper opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
