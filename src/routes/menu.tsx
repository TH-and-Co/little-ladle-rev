import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CloudDivider, CloudPattern, OrnateFrame } from "@/components/Ornate";
import { BrandSeal } from "@/components/Brand";
import { Reveal } from "@/components/Reveal";
import { business, finishes, images, menuCategories, sides } from "@/data/site";

const siteUrl = "";
const pageUrl = siteUrl + "/menu";
const pageTitle = "Menu — Ingredient Wall, Broths & Free Sauce Bar | Little Ladle Hotpot";
const pageDescription =
  "Browse the Little Ladle Hotpot ingredient wall: five broths or stir fry, meats, seafood, vegetables, noodles and wontons, plus 12 free sauces. Walk in dine in only at Westfield West Lakes.";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
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
      { property: "og:image", content: `${siteUrl}${images.ingredientWall.src}` },
      { name: "twitter:image", content: `${siteUrl}${images.ingredientWall.src}` },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
  }),
});

function MenuPage() {
  const [active, setActive] = useState<string>(menuCategories[0].id);
  const category = menuCategories.find((c) => c.id === active) ?? menuCategories[0];
  const [finish, setFinish] = useState<string>(finishes[0].id);
  const activeFinish = finishes.find((f) => f.id === finish) ?? finishes[0];

  return (
    <>
      <section className="surface-deep relative overflow-hidden py-20">
        <CloudPattern
          variant="flowing"
          flip
          className="pointer-events-none absolute -right-44 top-0 w-[500px] text-gold opacity-30 sm:opacity-75"
        />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">
          <Reveal>
            <BrandSeal size={104} rotate={-6} className="mb-6" />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
              Pick • Weigh • Simmer • Savor
            </p>
            <h1 className="font-asian mt-4 text-[2.1rem] font-extrabold text-deep-foreground sm:text-5xl md:text-6xl">
              Everything you can put in <span className="brush-gold">your bowl</span>.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-deep-foreground/85">
              Fresh trays restocked all day. Take exactly what you love, choose a broth, and we cook
              it for you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16" aria-labelledby="finish-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Reveal from="left">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Choose your finish
            </p>
            <h2
              id="finish-title"
              className="font-asian mt-3 text-3xl font-extrabold text-brand sm:text-4xl md:text-5xl"
            >
              Five broths, or a wok-fired stir fry.
            </h2>
          </Reveal>

          <div className="mt-12 grid min-w-0 grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
            <Reveal from="left" className="min-w-0">
              <div
                role="tablist"
                aria-label="Broths and stir fry"
                aria-orientation="vertical"
                className="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:overflow-visible sm:pb-0 lg:flex-col lg:flex-nowrap"
              >
                {finishes.map((f) => {
                  const selected = f.id === finish;
                  return (
                    <button
                      key={f.id}
                      type="button"
                      role="tab"
                      id={`finish-tab-${f.id}`}
                      aria-selected={selected}
                      aria-controls="finish-panel"
                      onClick={() => setFinish(f.id)}
                      className={`min-h-11 shrink-0 snap-start whitespace-nowrap rounded-full border px-5 text-left text-sm font-sans font-semibold transition-all duration-500 sm:whitespace-normal lg:w-full lg:rounded-2xl lg:px-5 lg:py-4 ${
                        selected
                          ? "btn-gold"
                          : "border-gold/35 bg-card text-brand hover:-translate-y-0.5 hover:border-gold/70 hover:text-primary"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {f.name}
                        {"badge" in f && f.badge ? (
                          <span
                            className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] ${
                              selected ? "bg-deep/15" : "bg-gold/15 text-primary"
                            }`}
                          >
                            {f.badge}
                          </span>
                        ) : null}
                      </span>
                      <span className="mt-0.5 hidden text-[11px] font-semibold uppercase tracking-[0.16em] opacity-70 lg:block">
                        {f.flavour}
                      </span>
                    </button>
                  );
                })}
              </div>
            </Reveal>

            <div
              role="tabpanel"
              id="finish-panel"
              aria-labelledby={`finish-tab-${activeFinish.id}`}
              key={activeFinish.id}
              className="page-enter min-w-0"
            >
              <OrnateFrame className="card-glow overflow-hidden rounded-2xl border border-gold/35 bg-card shadow-warm sm:min-h-[600px] lg:min-h-[700px]">
                <div className="group aspect-[16/10] overflow-hidden">
                  <img
                    src={activeFinish.image.src}
                    alt={activeFinish.image.alt}
                    loading="lazy"
                    decoding="async"
                    width={1024}
                    height={768}
                    className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-2xl font-bold text-brand">{activeFinish.name}</h3>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                      {activeFinish.flavour}
                    </span>
                  </div>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {activeFinish.description}
                  </p>
                  {"note" in activeFinish && activeFinish.note ? (
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {activeFinish.note}
                    </p>
                  ) : null}
                  {activeFinish.spiceLevels ? (
                    <div className="mt-6">
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                        Choose your heat
                      </p>
                      <ul className="mt-2 flex flex-wrap gap-1.5">
                        {activeFinish.spiceLevels.map((level) => (
                          <li
                            key={level}
                            className="rounded-full border border-gold/35 bg-gold/5 px-3 py-1 text-xs font-semibold text-brand"
                          >
                            {level}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {activeFinish.tags.length > 0 ? (
                    <ul className="mt-6 flex flex-wrap gap-1.5">
                      {activeFinish.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-gold/35 px-2.5 py-0.5 text-[11px] font-semibold text-brand"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </OrnateFrame>
            </div>
          </div>

          <Reveal delay={200} className="mt-10 w-full">
            <div className="relative w-full overflow-hidden rounded-2xl border border-gold/35 bg-deep shadow-warm">
              <div className="flex flex-col items-center gap-5 p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-8">
                <span className="shrink-0 rounded-full bg-gold px-4 py-2 text-center font-sans text-xs font-extrabold uppercase tracking-widest text-deep">
                  Always Included
                </span>
                <p className="text-center text-base leading-relaxed text-deep-foreground sm:text-left md:text-lg">
                  <span className="font-semibold text-white">
                    Free DIY Sauce Station with Every Bowl
                  </span>{" "}
                  — 12 authentic sauces, oils, and garnishes at no extra charge.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CloudDivider className="mx-auto max-w-4xl px-6" />

      <section className="py-16" aria-labelledby="categories-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 id="categories-title" className="sr-only">
            Ingredient categories
          </h2>

          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-gold/35 bg-card shadow-warm">
              <div
                role="tablist"
                aria-label="Ingredient categories"
                className="flex flex-wrap gap-2 border-b border-gold/15 bg-cream/50 p-3 sm:p-4"
              >
                {menuCategories.map((c) => {
                  const selected = c.id === active;
                  return (
                    <button
                      key={c.id}
                      role="tab"
                      type="button"
                      id={`tab-${c.id}`}
                      aria-selected={selected}
                      aria-controls={`panel-${c.id}`}
                      onClick={() => setActive(c.id)}
                      className={`min-h-10 rounded-full px-4 text-sm font-sans font-semibold transition-all duration-300 ${
                        selected
                          ? "btn-gold"
                          : "border border-gold/35 bg-cream text-brand hover:border-gold/35 hover:bg-gold/10"
                      }`}
                    >
                      {c.title}
                    </button>
                  );
                })}
              </div>

              <div
                role="tabpanel"
                id={`panel-${category.id}`}
                aria-labelledby={`tab-${category.id}`}
                key={category.id}
                className="page-enter"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr]">
                  <div className="order-2 lg:order-1 flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                      {category.title}
                    </p>
                    <h3 className="font-asian mt-3 text-2xl font-extrabold text-brand sm:text-3xl">
                      {category.intro}
                    </h3>
                    <p className="mt-6 text-sm italic leading-relaxed text-muted-foreground">
                      Availability changes with the season — the wall is restocked throughout the
                      day.
                    </p>
                  </div>

                  <div className="order-1 lg:order-2">
                    <div className="h-full p-4 sm:p-6 lg:p-8">
                      <div className="group h-full overflow-hidden rounded-2xl border border-gold/35 bg-cream/50 p-1.5 shadow-warm transition-all duration-500 hover:border-gold/35">
                        <img
                          src={category.photos[0].src}
                          alt={category.photos[0].alt}
                          loading="lazy"
                          decoding="async"
                          width={1280}
                          height={960}
                          className="h-full min-h-[260px] w-full rounded-xl object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CloudDivider className="mx-auto max-w-4xl px-6" />

      <section className="py-20" aria-labelledby="sides-title">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
          <Reveal>
            <h2
              id="sides-title"
              className="font-asian text-3xl font-extrabold text-brand sm:text-4xl md:text-5xl"
            >
              Sides & dessert
            </h2>
          </Reveal>
          <div className="mt-10 flex justify-center">
            {sides.map((s) => (
              <Reveal key={s.title} from="scale" className="w-full max-w-md">
                <div className="card-glow flex h-full flex-col items-center rounded-2xl border border-gold/35 bg-card p-7 text-center shadow-warm">
                  <span className="rounded-full bg-gold px-2.5 py-1 font-sans text-[10px] font-extrabold uppercase tracking-widest text-deep">
                    Complimentary
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-brand">{s.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-deep relative overflow-hidden py-20">
        <CloudPattern
          variant="coiled"
          className="pointer-events-none absolute -left-44 bottom-2 w-[480px] text-gold opacity-75"
        />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-6">
          <Reveal from="scale">
            <h2 className="font-asian text-3xl font-extrabold text-deep-foreground sm:text-4xl md:text-5xl">
              Hungry yet? The wall is open until 9pm.
            </h2>
            <p className="mt-6 leading-relaxed text-deep-foreground/85">
              {business.address.street}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
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
                Visit us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
