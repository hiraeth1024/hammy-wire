import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useLocale, useT } from "@/i18n/context";

export const Nav = () => {
  const t = useT();
  const { locale, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/shop", label: t.nav.shop },
    { to: "/about", label: t.nav.about },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-gradient-copper shadow-glow" />
          <span className="text-foreground font-display font-bold tracking-[0.18em] text-lg">
            HAMMY
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm tracking-wide transition-colors relative py-1",
                  isActive ? "text-foreground" : "text-muted-hammy hover:text-foreground"
                )
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-copper" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setLocale(locale === "zh" ? "en" : "zh")}
            className="hidden sm:inline text-xs text-muted-hammy hover:text-foreground tracking-widest transition-colors"
          >
            中 / EN
          </button>
          <a
            href="#contact"
            className="text-xs md:text-sm px-4 md:px-5 py-2 md:py-2.5 rounded-full border border-border hover:border-primary hover:text-primary transition-colors tracking-wide"
          >
            {t.nav.inquiry}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
