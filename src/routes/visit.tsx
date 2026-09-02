import { createFileRoute } from "@tanstack/react-router";
import { CloudDivider, CloudPattern } from "@/components/Ornate";
import { BrandSeal } from "@/components/Brand";
import { Reveal } from "@/components/Reveal";
import { SocialIcon } from "@/components/SocialIcon";
import { arrivalSteps, business, images, socials } from "@/data/site";

const siteUrl = "";
const pageUrl = siteUrl + "/visit";
const pageTitle = "Visit Us — Shop 127, Westfield West Lakes, Open 11am–9pm | Little Ladle Hotpot";
const pageDescription =
  "Find Little Ladle Hotpot at Shop 127, Westfield West Lakes, 111 West Lakes Boulevard, West Lakes South Australia 5021 — Food Court Entrance. Open Monday to Sunday, 11am–9pm, walk in dine in only. Map, directions and socials.";

export const Route = createFileRoute("/visit")({
  component: VisitPage,
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
      { property: "og:url", content: pageUrl },
      { property: "og:image", content: `${siteUrl}${images.interior.src}` },
      { name: "twitter:image", content: `${siteUrl}${images.interior.src}` },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
  }),
});

const mapEmbed =
  "https://www.google.com/maps?q=Shop+127,+Westfield+West+Lakes,+111+West+Lakes+Boulevard,+West+Lakes+SA+5021+(Food+Court+Entrance)&z=17&output=embed";

function VisitPage() {
  return (
    <>
      <section className="surface-deep relative overflow-hidden py-20">
        <CloudPattern
          variant="coiled"
          className="pointer-events-none absolute -left-44 bottom-2 w-[500px] text-gold opacity-75"
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-2">
          <Reveal from="left">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Visit</p>
            <h1 className="font-asian mt-4 text-[2.1rem] font-extrabold text-deep-foreground sm:text-5xl md:text-6xl">
              Come and see us at West Lakes.
            </h1>
            <dl className="relative mt-10 space-y-7 rounded-2xl border border-gold/35 p-6 text-deep-foreground sm:p-8">
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Where</dt>
                <dd className="mt-1.5 text-lg leading-relaxed">
                  {business.shop}, Westfield West Lakes
                  <br />
                  {business.address.street}, {business.address.suburb} {business.address.state}{" "}
                  {business.address.postcode}
                </dd>
                <dd className="mt-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-gold/35 px-3.5 py-1.5 text-sm font-semibold text-gold">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="size-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                    {business.address.entrance}
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Hours</dt>
                <dd className="mt-1.5 text-lg leading-relaxed">{business.hours}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Dining</dt>
                <dd className="mt-1.5 text-lg leading-relaxed">
                  Walk in dine in only no bookings needed.
                </dd>
                <dd className="mt-1 leading-relaxed text-deep-foreground/75">
                  Delivery available via UberEats.
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Follow</dt>
                <dd className="mt-3 flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="inline-flex size-12 items-center justify-center rounded-full border border-gold/35 text-gold transition-all duration-500 hover:-translate-y-0.5 hover:bg-gold hover:text-gold-foreground"
                    >
                      <SocialIcon name={s.icon} />
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex min-h-11 items-center rounded-full px-6"
              >
                Get directions
              </a>
              <a
                href={business.uberEatsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center rounded-full border border-gold/35 px-6 font-sans font-semibold text-deep-foreground transition-colors hover:border-gold hover:text-gold"
              >
                Order on UberEats
              </a>
            </div>
          </Reveal>

          <Reveal from="right" delay={140}>
            <div className="card-glow overflow-hidden rounded-2xl border border-gold/35 p-1.5">
              <iframe
                title="Map showing Little Ladle Hotpot at Westfield West Lakes"
                src={mapEmbed}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-[4/3] w-full rounded-xl border-0 lg:aspect-[3/4]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16" aria-label="Our venue">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:px-6 md:grid-cols-2">
          {[images.exterior, images.interior].map((img, i) => (
            <Reveal key={img.alt} from={i === 0 ? "left" : "right"} delay={i * 120}>
              <div className="card-glow group overflow-hidden rounded-2xl border border-gold/35 bg-card p-1.5 shadow-warm">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={900}
                  className="aspect-[4/3] w-full rounded-xl object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CloudDivider className="mx-auto max-w-4xl px-6 py-2" tone="light" />

      <section className="py-20" aria-labelledby="arrive-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Reveal from="left">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              When you arrive
            </p>
            <h2
              id="arrive-title"
              className="font-asian mt-3 text-3xl font-extrabold text-brand sm:text-4xl md:text-5xl"
            >
              Grab a bowl, pick a broth, sit down.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {arrivalSteps.map((s, i) => (
              <Reveal key={s.n} as="article" from={i === 1 ? "up" : "scale"} delay={i * 130}>
                <div className="card-glow h-full overflow-hidden rounded-2xl border border-gold/35 bg-card shadow-warm">
                  <div className="group aspect-[4/3] overflow-hidden">
                    <img
                      src={s.image.src}
                      alt={s.image.alt}
                      loading="lazy"
                      decoding="async"
                      width={1200}
                      height={900}
                      className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                    />
                  </div>
                  <div className="p-7">
                    <span className="font-display text-sm font-extrabold tracking-[0.2em] text-primary">
                      {s.n}
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-brand">{s.title}</h3>
                    <p className="mt-2.5 leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-deep relative overflow-hidden py-24">
        <CloudPattern
          variant="billow"
          flip
          className="pointer-events-none absolute -right-44 top-2 hidden w-[480px] text-gold opacity-70 lg:block"
        />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-6">
          <Reveal from="scale">
            <BrandSeal size={112} rotate={-7} className="mb-4" />
            <h2 className="font-asian text-3xl font-extrabold text-deep-foreground sm:text-4xl md:text-5xl">
              See you at <span className="brush-gold">the ingredient wall</span>.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-deep-foreground/85">
              {business.hours} · Walk in dine in only, no bookings
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex min-h-11 items-center rounded-full px-7"
              >
                Get directions
              </a>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="inline-flex size-12 items-center justify-center rounded-full border border-gold/35 text-gold transition-all duration-500 hover:-translate-y-0.5 hover:bg-gold hover:text-gold-foreground"
                >
                  <SocialIcon name={s.icon} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
