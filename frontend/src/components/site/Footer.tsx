import { Link } from "react-router-dom";
import { useT } from "@/i18n/context";

export const Footer = () => {
  const t = useT();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-copper" />
              <span className="font-display font-bold tracking-[0.18em] text-foreground">HAMMY</span>
            </Link>
            <p className="mt-5 text-muted-hammy text-sm leading-relaxed">{t.footer.brandDesc}</p>
          </div>

          {t.footer.columns.map((c) => (
            <div key={c.title}>
              <div className="text-foreground text-sm font-semibold tracking-wide">{c.title}</div>
              <ul className="mt-5 space-y-3">
                {c.items.map((it) => (
                  <li key={it}>
                    <a href="#" className="text-sm text-muted-hammy hover:text-foreground transition-colors">
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline my-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="text-[10px] tracking-[0.4em] uppercase text-muted-hammy mb-2">{t.footer.contactLabel}</div>
            <a href={`tel:${t.footer.contactPhone.replace(/\s/g, "")}`} className="text-foreground hover:text-primary transition-colors">
              {t.footer.contactPhone}
            </a>
            <div className="text-muted-hammy mt-1">{t.footer.contactEmail}</div>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.4em] uppercase text-muted-hammy mb-2">{t.footer.headquartersLabel}</div>
            <div className="text-foreground">{t.footer.headquartersName}</div>
            <div className="text-muted-hammy mt-1">{t.footer.headquartersAddr}</div>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.4em] uppercase text-muted-hammy mb-2">{t.footer.hoursLabel}</div>
            <div className="text-foreground">{t.footer.hoursValue}</div>
            <div className="text-muted-hammy mt-1">{t.footer.hoursNote}</div>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-muted-hammy">
          <div>© {new Date().getFullYear()} Hammy Cable Co., Ltd. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-foreground transition-colors">{t.footer.terms}</a>
            <a href="#" className="hover:text-foreground transition-colors">{t.footer.icp}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
