import { useT } from "@/i18n/context";
import heroImg from "@/assets/hero-cable.jpg";

export const Hero = () => {
  const t = useT();

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Hammy premium copper electrical cable with durable PVC jacket"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(var(--background)/0.4)_50%,_hsl(var(--background))_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />

      {/* Top tiny brand line */}
      <div className="relative z-10 container pt-32 md:pt-40">
        <div className="flex items-center gap-3 text-xs tracking-[0.4em] text-muted-hammy uppercase animate-fade-in">
          <span className="w-8 h-px bg-primary" />
          {t.hero.eyebrow}
        </div>
      </div>

      {/* Main copy */}
      <div className="relative z-10 container mt-10 md:mt-20 max-w-5xl">
        <h1 className="font-display font-semibold text-foreground text-balance leading-[0.95] tracking-tight text-[clamp(2.75rem,8vw,7.5rem)] animate-fade-in">
          {t.hero.title1}
          <br />
          <span className="bg-gradient-copper bg-clip-text text-transparent">{t.hero.title2}</span>
        </h1>
        <p className="mt-8 max-w-xl text-base md:text-lg text-muted-hammy leading-relaxed animate-fade-in [animation-delay:120ms]">
          {t.hero.subtitle}
        </p>
      </div>

      {/* Bottom stats bar */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="container pb-10 md:pb-14">
          <div className="hairline mb-6" />
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="flex flex-wrap gap-x-10 gap-y-3 text-xs md:text-sm text-muted-hammy tracking-wide">
              <span><span className="text-foreground font-semibold">30+</span>　{t.hero.stats[0]}</span>
              <span><span className="text-foreground font-semibold">ISO 9001</span>　{t.hero.stats[1]}</span>
              <span><span className="text-foreground font-semibold">50+</span>　{t.hero.stats[2]}</span>
              <span><span className="text-foreground font-semibold">100%</span>　{t.hero.stats[3]}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-hammy tracking-[0.3em] uppercase animate-bounce-down">
              {t.hero.scrollHint}
              <span className="block w-px h-8 bg-gradient-to-b from-primary to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
