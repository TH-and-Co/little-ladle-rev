import { createFileRoute, Link } from "@tanstack/react-router";
import { CloudPattern, OrnateFrame } from "@/components/Ornate";
import { BrandBanner, LadleDivider } from "@/components/Brand";
import { Parallax } from "@/components/Parallax";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { business, images, steps } from "@/data/site";

const siteUrl = "";
const pageUrl = siteUrl + "/";
const pageTitle = "Little Ladle Hotpot — Build-Your-Own Malatang, West Lakes";
const pageDescription =
  "Shop the fresh ingredient wall, pick one of five broths, and we cook it for you. Little Ladle Hotpot at Westfield West Lakes, Adelaide. Open 11am–9pm daily.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "restaurant.restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
      { property: "og:url", content: pageUrl },
      { property: "og:image", content: `${siteUrl}${images.hero.src}` },
      { name: "twitter:image", content: `${siteUrl}${images.hero.src}` },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: business.name,
          description: pageDescription,
          url: pageUrl,
          servesCuisine: ["Chinese", "Sichuan", "Hotpot", "Malatang"],
          image: `${siteUrl}${images.hero.src}`,
          telephone: business.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: `${business.shop}, Westfield West Lakes, ${business.address.street}`,
            addressLocality: business.address.suburb,
            addressRegion: business.address.state,
            postalCode: business.address.postcode,
            addressCountry: business.address.country,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: business.hoursSchema.opens,
              closes: business.hoursSchema.closes,
            },
          ],
          acceptsReservations: "False",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <section className="surface-deep relative overflow-hidden">
        <div className="hidden lg:block">
          <CloudPattern
            variant="coiled"
            className="pointer-events-none absolute -left-56 top-2 w-[520px] text-gold opacity-70"
          />
          <CloudPattern
            variant="flowing"
            flip
            className="pointer-events-none absolute -right-40 bottom-8 w-[480px] text-gold opacity-70"
          />
        </div>

        <div className="lg:hidden">
          <div className="relative">
            <div className="aspect-[4/3] w-full">
              <img
                src={images.hero.src}
                alt={images.hero.alt}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width={1600}
                height={1200}
                className="size-full object-cover"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-deep via-deep/80 to-transparent" />
          </div>

          <div className="relative px-5 pb-12 pt-6 sm:px-6">
            <Reveal from="up">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold">
                Westfield West Lakes · Food Court Entrance
              </p>
            </Reveal>
            <Reveal from="up" delay={110}>
              <h1 className="font-asian mb-4 text-[2.1rem] font-bold leading-[1.1] tracking-tight text-deep-foreground">
                Build your bowl at the <span className="brush-gold">fresh ingredient wall</span>.
              </h1>
            </Reveal>
            <Reveal from="up" delay={180}>
              <p className="mb-6 max-w-md text-base leading-relaxed text-deep-foreground/90">
                Walk the fresh ingredient wall, pick a broth, and we cook it for you. No burners, no
                set combos — just your bowl, made to order.
              </p>
            </Reveal>
            <Reveal from="up" delay={260}>
              <div className="mb-8 flex flex-col gap-3">
                <Link
                  to="/menu"
                  className="btn-gold inline-flex min-h-12 w-full items-center justify-center rounded-full px-6"
                >
                  See the full menu
                </Link>
                <Link
                  to="/visit"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-gold/35 px-6 font-sans font-semibold text-deep-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  Opening hours
                </Link>
              </div>
            </Reveal>

            <Reveal from="up" delay={340}>
              <dl className="flex border-t border-white/10 pt-5">
                {[
                  ["5", "broths"],
                  ["12", "free sauces"],
                  ["7", "days a week"],
                ].map(([v, k], i) => (
                  <div
                    key={k}
                    className={cn("flex-1 text-center", i > 0 && "border-l border-white/10")}
                  >
                    <dt className="sr-only">{k}</dt>
                    <dd>
                      <span className="block text-2xl font-bold text-gold">{v}</span>
                      <span className="mt-1 block text-xs font-medium text-deep-foreground">
                        {k}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-[58%]">
            <Parallax speed={0.06} className="size-full">
              <div className="relative size-full [mask-image:linear-gradient(to_right,transparent,black_42%)]">
                <img
                  src={images.hero.src}
                  alt={images.hero.alt}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width={1600}
                  height={1280}
                  className="animate-kenburns size-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>
            </Parallax>
          </div>
          <div className="bg-glow animate-glow pointer-events-none absolute right-[6%] top-1/2 aspect-square w-[44%] -translate-y-1/2 rounded-full blur-2xl" />

          <div className="relative mx-auto max-w-6xl px-5 pb-32 pt-44 sm:px-6">
            <div className="max-w-xl">
              <Reveal from="left">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold">
                  Westfield West Lakes · Food Court Entrance
                </p>
              </Reveal>
              <Reveal from="left" delay={110}>
                <h1 className="font-asian mb-4 text-[2.1rem] font-bold leading-[1.15] tracking-tight text-deep-foreground sm:text-5xl md:text-6xl">
                  Build your bowl at the <span className="brush-gold">fresh ingredient wall</span>.
                </h1>
              </Reveal>
              <Reveal from="up" delay={170}>
                <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-deep/50 px-4 py-2 font-sans text-[11px] font-bold tracking-[0.08em] text-gold backdrop-blur-sm sm:text-xs">
                  Your bowl, your choice, steaming fresh.
                </p>
              </Reveal>
              <Reveal from="up" delay={220}>
                <p className="mb-6 max-w-lg text-base leading-relaxed text-deep-foreground md:text-lg">
                  Walk the fresh ingredient wall, pick a broth, and we cook it for you. No burners,
                  no set combos — just your bowl, made to order.
                </p>
              </Reveal>
              <Reveal from="up" delay={320}>
                <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                  <Link
                    to="/menu"
                    className="btn-gold inline-flex min-h-12 w-full items-center justify-center rounded-full px-6 sm:w-auto"
                  >
                    See the full menu
                  </Link>
                  <Link
                    to="/visit"
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-gold/35 px-6 font-sans font-semibold text-deep-foreground transition-colors hover:border-gold hover:text-gold sm:w-auto"
                  >
                    Opening hours
                  </Link>
                </div>
              </Reveal>

              <Reveal from="up" delay={420}>
                <dl className="grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-4">
                  {[
                    ["5", "broths"],
                    ["12", "free sauces"],
                    ["7", "days a week"],
                  ].map(([v, k]) => (
                    <div key={k}>
                      <dt className="sr-only">{k}</dt>
                      <dd>
                        <span className="block text-2xl font-bold text-gold sm:text-3xl">{v}</span>
                        <span className="mt-1 block text-xs font-medium text-deep-foreground sm:text-sm">
                          {k}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-6">
        <Reveal>
          <LadleDivider className="mx-auto max-w-xs" />
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              At Little Ladle, we do hotpot a little differently. Explore our fresh ingredient wall,
              filled with vegetables, marinated meats, seafood, noodles and wontons, then build a
              bowl that&rsquo;s completely your own.
            </p>
            <p>
              Just fresh ingredients, bold flavours and a relaxed dining experience designed for
              sharing good food and even better moments with friends and family.
            </p>
          </div>
        </Reveal>
      </section>

      <BrandBanner>
        Fresh ingredients, endless possibilities, build your bowl and leave the rest to us
      </BrandBanner>

      <section className="bg-secondary/50 py-20" aria-labelledby="how-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Reveal from="left">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Highlights</p>
            <h2
              id="how-title"
              className="font-asian mt-3 text-3xl font-extrabold text-brand sm:text-4xl md:text-5xl"
            >
              Three steps to your bowl
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} as="article" from={i === 1 ? "up" : "scale"} delay={i * 130}>
                <OrnateFrame className="card-glow h-full rounded-2xl border border-gold/35 bg-card shadow-warm">
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
                </OrnateFrame>
              </Reveal>
            ))}
          </div>
          <Reveal delay={180} className="mt-10 w-full">
            <div className="relative w-full overflow-hidden rounded-2xl border border-gold/35 bg-deep shadow-warm">
              <div className="flex flex-col items-center gap-5 p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-8">
                <span className="shrink-0 rounded-full bg-gold px-4 py-2 text-center font-sans text-xs font-extrabold uppercase tracking-widest text-deep">
                  Always Included
                </span>
                <p className="text-center text-base leading-relaxed text-deep-foreground sm:text-left md:text-lg lg:whitespace-nowrap">
                  <span className="font-semibold text-white">
                    Free DIY Sauce Station with Every Bowl
                  </span>{" "}
                  — 12 authentic sauces, oils, and garnishes at no extra charge.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={220} className="mt-12 flex justify-center">
            <Link
              to="/menu"
              className="btn-gold inline-flex min-h-11 items-center rounded-full px-6"
            >
              See full menu
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="surface-deep relative overflow-hidden py-24">
        <CloudPattern
          variant="billow"
          className="pointer-events-none absolute -left-44 bottom-2 w-[500px] text-gold opacity-75"
        />
        <CloudPattern
          variant="coiled"
          flip
          className="pointer-events-none absolute -right-44 top-2 hidden w-[440px] text-gold opacity-65 lg:block"
        />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-6">
          <Reveal from="scale">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
              Walk in, we&apos;ll do the rest
            </p>
            <h2 className="font-asian mt-4 text-[2.1rem] font-extrabold text-deep-foreground sm:text-5xl md:text-6xl">
              Come and build a bowl with us tonight.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-deep-foreground/85">
              {business.address.street}, {business.address.suburb} {business.address.state}{" "}
              {business.address.postcode} · {business.hours}
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-gold inline-flex min-h-11 items-center rounded-full px-7"
              >
                Get directions
              </a>
              <Link
                to="/visit"
                className="inline-flex min-h-11 items-center rounded-full border border-gold/35 px-7 font-sans font-semibold text-deep-foreground transition-colors hover:border-gold hover:text-gold"
              >
                Plan your visit
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
