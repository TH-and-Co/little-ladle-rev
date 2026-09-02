import { Link } from "@tanstack/react-router";
import { business, socials } from "@/data/site";
import { SocialIcon } from "@/components/SocialIcon";
import { LadleDivider } from "@/components/Brand";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/visit", label: "Visit" },
] as const;

export function SiteFooter() {
  return (
    <footer className="surface-deep relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pt-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <p className="font-asian text-3xl leading-none text-deep-heading sm:text-4xl">
              {business.name}
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-gold">
              {business.shop}, Westfield West Lakes
            </p>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-deep-foreground/85">
              Crafting Adelaide&apos;s favourite build-your-own malatang experience, bowl by bowl.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="inline-flex size-12 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[color-mix(in_oklab,var(--gold)_80%,white)]"
                >
                  <SocialIcon name={s.icon} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">Explore</p>
            <ul className="mt-4 space-y-2.5 text-base">
              {footerLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="font-semibold text-deep-foreground/85 underline-offset-4 transition-colors hover:text-gold hover:underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">Find us</p>
            <address className="mt-4 not-italic text-deep-foreground/85">
              {business.address.street}
              <br />
              {business.address.suburb} {business.address.state} {business.address.postcode}
              <br />
              <span className="text-gold">{business.address.entrance}</span>
            </address>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.22em] text-gold">
              Trading hours
            </p>
            <p className="mt-1 text-deep-foreground/85">{business.hours}</p>
            <p className="mt-1 text-sm text-deep-foreground/70">
              Walk in dine in only, no bookings
            </p>
          </div>
        </div>

        <LadleDivider className="mt-14" />

        <div className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-deep-foreground/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p>
            Website designed by{" "}
            <a
              href="https://thco.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 transition-colors hover:text-gold hover:underline"
            >
              THCO
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
