import { useT } from "@/i18n/context";

export const CTA = () => {
  const t = useT();

  return (
    <section className="relative bg-background py-24 md:py-40" id="contact">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card-hammy p-10 md:p-20">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/20 blur-[120px]" />
          <div className="relative">
            <h2 className="font-display font-semibold text-foreground text-balance text-4xl md:text-7xl leading-[1] tracking-tight max-w-3xl whitespace-pre-line">
              {t.cta.titlePrefix}
              <span className="bg-gradient-copper bg-clip-text text-transparent">{t.cta.titleHighlight}</span>
              {t.cta.titleSuffix}
            </h2>
            <p className="mt-6 text-muted-hammy max-w-xl">{t.cta.desc}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:sales@hammy.example"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {t.cta.quoteBtn} <span aria-hidden>→</span>
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {t.cta.browseBtn}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
