import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
const logo = { url: "/logo.svg" };
import { business } from "@/data/site";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/visit", label: "Visit" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const floating = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = scrolled || open;
  const linkBase =
    "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300";
  const linkTone =
    floating || dark ? "text-deep-foreground/85 hover:text-gold" : "text-brand hover:text-primary";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
          dark
            ? "border-b border-gold/25 bg-[#360C0E]/90 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.55)] backdrop-blur-md"
            : floating
              ? "border-b border-transparent"
              : "border-b border-gold/25 bg-cream/95 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 sm:px-6">
          <Link
            to="/"
            aria-label={`${business.name} home`}
            className="group inline-flex min-w-0 shrink-0 items-center rounded-2xl border border-gold/45 bg-cream px-3 py-1.5 shadow-[0_10px_30px_-12px_color-mix(in_oklab,var(--gold)_75%,transparent)] transition-transform duration-500 hover:-translate-y-0.5 sm:px-4 sm:py-2"
          >
            <img
              src={logo.url}
              alt={`${business.name} logo`}
              width={320}
              height={120}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-9 w-auto sm:h-12 md:h-14"
            />
          </Link>

          <div className="flex items-center gap-2">
            <nav aria-label="Primary" className="hidden md:block">
              <ul
                className={`flex items-center gap-1 rounded-full border px-1.5 py-1 ${
                  floating || dark
                    ? "border-gold/35 bg-deep/40 backdrop-blur-sm"
                    : "border-gold/30 bg-card"
                }`}
              >
                {navLinks.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      activeOptions={{ exact: l.to === "/" }}
                      className={`${linkBase} ${linkTone}`}
                      activeProps={{
                        className: `${linkBase} ${floating || dark ? "text-gold" : "text-primary"} after:absolute after:inset-x-3 after:-bottom-1 after:h-[3px] after:rounded-full after:bg-gold after:shadow-[0_0_12px_color-mix(in_oklab,var(--gold)_70%,transparent)]`,
                      }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-11 shrink-0 items-center rounded-full bg-gold px-5 font-sans text-sm font-bold text-gold-foreground shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[color-mix(in_oklab,var(--gold)_82%,white)] sm:inline-flex"
            >
              Find us
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label="Toggle menu"
              className={`inline-flex size-11 items-center justify-center rounded-full border md:hidden ${
                floating || dark
                  ? "border-gold/40 bg-deep/40 text-deep-foreground"
                  : "border-gold/30 bg-card text-brand"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {open ? (
                  <>
                    <path d="M6 6l12 12" />
                    <path d="M18 6L6 18" />
                  </>
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {open ? (
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className="page-enter mx-5 mb-3 max-h-[calc(100dvh-6.5rem)] overflow-y-auto rounded-3xl border border-gold/40 bg-cream p-3 shadow-warm md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    activeOptions={{ exact: l.to === "/" }}
                    className="block rounded-2xl px-4 py-3.5 text-base font-semibold text-brand"
                    activeProps={{
                      className:
                        "block rounded-2xl bg-secondary px-4 py-3.5 text-base font-bold text-primary",
                    }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex min-h-12 w-full items-center justify-center rounded-full bg-gold px-5 font-sans text-sm font-bold text-gold-foreground shadow-md"
            >
              Find us
            </a>
          </nav>
        ) : null}
      </header>

      {floating ? null : <div aria-hidden className="h-20 sm:h-24" />}
    </>
  );
}
