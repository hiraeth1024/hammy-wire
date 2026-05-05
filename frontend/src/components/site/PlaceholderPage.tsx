import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useT } from "@/i18n/context";

type Props = { title: string; subtitle: string; eyebrow: string };

export const PlaceholderPage = ({ title, subtitle, eyebrow }: Props) => {
  const t = useT();

  return (
    <main className="bg-background min-h-screen flex flex-col">
      <Nav />
      <section className="flex-1 flex items-center pt-32 pb-24">
        <div className="container">
          <div className="text-xs tracking-[0.4em] text-muted-hammy uppercase mb-6">
            <span className="inline-block w-6 h-px bg-primary align-middle mr-2" />
            {eyebrow}
          </div>
          <h1 className="font-display font-semibold text-foreground text-balance text-5xl md:text-8xl leading-[0.95] tracking-tight max-w-4xl">
            {title}
          </h1>
          <p className="mt-8 max-w-xl text-muted-hammy text-lg leading-relaxed">{subtitle}</p>
          <div className="mt-12 inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-border text-sm text-muted-hammy">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            {t.placeholder.comingSoon}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default PlaceholderPage;
