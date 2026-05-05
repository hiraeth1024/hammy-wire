import { useT } from "@/i18n/context";

export const Quality = () => {
  const t = useT();

  return (
    <section className="relative bg-elevated py-24 md:py-32">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="text-xs tracking-[0.4em] text-muted-hammy uppercase mb-3">
            <span className="inline-block w-6 h-px bg-primary align-middle mr-2" />
            {t.quality.eyebrow}
          </div>
          <h2 className="font-display font-semibold text-foreground text-4xl md:text-6xl leading-[1] tracking-tight">
            {t.quality.titlePrefix}
            <span className="bg-gradient-copper bg-clip-text text-transparent">{t.quality.titleHighlight}</span>
            {t.quality.titleSuffix}
          </h2>
          <p className="mt-6 text-muted-hammy max-w-md leading-relaxed">{t.quality.desc}</p>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
            {t.quality.certs.map((c) => (
              <div
                key={c}
                className="bg-bg-card aspect-[3/2] flex items-center justify-center text-muted-hammy hover:text-foreground hover:bg-background transition-colors"
              >
                <span className="text-sm md:text-base font-display tracking-[0.2em]">{c}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {t.quality.stats.map((s) => (
              <div key={s.label} className="border-t border-border pt-4">
                <div className="font-display text-foreground text-3xl md:text-4xl font-semibold">{s.value}</div>
                <div className="text-muted-hammy text-xs mt-2 tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
