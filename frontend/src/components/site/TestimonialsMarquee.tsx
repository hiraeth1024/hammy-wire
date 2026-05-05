import { useT } from "@/i18n/context";

export const TestimonialsMarquee = () => {
  const t = useT();
  const testimonials = t.testimonials.items;
  const list = [...testimonials, ...testimonials];

  return (
    <section className="relative bg-elevated py-24 md:py-32 overflow-hidden">
      <div className="container">
        <div className="text-xs tracking-[0.4em] text-muted-hammy uppercase mb-3">
          <span className="inline-block w-6 h-px bg-primary align-middle mr-2" />
          {t.testimonials.eyebrow}
        </div>
        <h2 className="font-display font-semibold text-foreground text-3xl md:text-5xl tracking-tight max-w-3xl">
          {t.testimonials.title}
        </h2>
      </div>

      <div className="mt-14 marquee-pause relative">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-bg-elevated to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-bg-elevated to-transparent z-10" />

        <div className="flex gap-6 w-max animate-marquee">
          {list.map((item, i) => (
            <figure
              key={i}
              className="w-[320px] md:w-[420px] shrink-0 bg-card-hammy border border-border rounded-2xl p-6 md:p-8 hover:border-primary/60 transition-colors"
            >
              <div className="flex gap-1 text-primary text-sm mb-4" aria-label="5 stars">
                {"★★★★★"}
              </div>
              <blockquote className="text-foreground/90 leading-relaxed text-sm md:text-base">
                "{item.text}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <div className="text-foreground text-sm font-medium">{item.name}</div>
                <div className="text-muted-hammy text-xs mt-1">
                  {item.role} · {item.country}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMarquee;
