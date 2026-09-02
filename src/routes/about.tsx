import { createFileRoute, Link } from "@tanstack/react-router";
import { CloudDivider, CloudPattern, OrnateFrame } from "@/components/Ornate";
import { BrandSeal } from "@/components/Brand";
import { Parallax } from "@/components/Parallax";
import { Reveal } from "@/components/Reveal";
import { differences, founders, images } from "@/data/site";
const ownersPhoto = { url: "/little-ladle-about-owners.webp" };

const siteUrl = "";
const pageUrl = siteUrl + "/about";
const pageTitle = "Our Story — Anthony & Michael's Malatang Shop | Little Ladle Hotpot";
const pageDescription =
  "Why Anthony Bui and Michael Du opened Little Ladle Hotpot: malatang-style hotpot with no burners, no juggling raw plates — just a fresh ingredient wall and a bowl cooked for you.";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
      { property: "og:url", content: pageUrl },
      { property: "og:image", content: `${siteUrl}${ownersPhoto.url}` },
      { name: "twitter:image", content: `${siteUrl}${ownersPhoto.url}` },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
  }),
});

function AboutPage() {
  return (
    <>
      <section className="surface-deep relative overflow-hidden py-20">
        <CloudPattern
          variant="billow"
          className="pointer-events-none absolute -left-44 top-2 w-[520px] text-gold opacity-75"
        />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">
          <Reveal>
            <h1 className="font-asian mt-4 text-[2.1rem] font-extrabold text-deep-foreground sm:text-5xl md:text-6xl">
              Our Story
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:items-start">
          <Reveal from="left" className="w-full min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Our origin</p>
            <h2 className="font-asian mt-3 text-3xl font-extrabold text-brand sm:text-4xl md:text-5xl">
              Little Ladle was born from a simple idea: bringing people together over great food.
            </h2>
            <div className="mt-7 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                The idea for Little Ladle started in early 2025, when we began talking about
                bringing a fresh and modern hotpot experience to Adelaide’s western suburbs. We felt
                there was an opportunity to create something that was exciting and full of flavour,
                while still being welcoming and easy to enjoy for people who may be trying malatang
                or hotpot for the very first time.
              </p>
              <p>From those early conversations, Little Ladle slowly started to come to life.</p>
              <p>
                Our vision was to create a place where everyone could build a bowl exactly the way
                they like it. Choose your favourite ingredients, pick your soup base and spice level
                and create a meal that feels completely your own. Whether you like something rich
                and spicy, light and comforting, or bold and saucy, there’s something for everyone.
              </p>
              <p>
                Since opening, it’s been incredibly rewarding to see how people have embraced Little
                Ladle. Our Signature Malatang has quickly become a favourite for its rich, aromatic
                and comforting broth. Our Mushroom Soup has been popular with those looking for
                something earthy and full bodied, while our Dry Stir Fry has become a go-to for
                customers who love bold, wok-style flavours without the broth.
              </p>
              <p>
                But what means the most to us is seeing familiar faces come back, bringing their
                friends and families with them. That sense of community is exactly what we hoped
                Little Ladle would become.
              </p>
              <p>
                A lot of time, planning and passion went into bringing Little Ladle to life, from
                refining our recipes and developing the menu to designing the space and finding the
                right home. West Lakes felt like the perfect place for us. We wanted to bring
                something new to the western suburbs and create a place that locals, families,
                workers and shoppers could all enjoy.
              </p>
              <p>
                At its heart, Little Ladle is built on passion and a genuine love for good food.
              </p>
            </div>
          </Reveal>

          <Reveal
            from="right"
            delay={120}
            className="w-full min-w-0 overflow-hidden lg:sticky lg:top-24 lg:self-start"
          >
            <Parallax speed={0.04}>
              <OrnateFrame className="card-glow group mx-auto w-full max-w-full overflow-hidden rounded-2xl border border-gold/35 p-1.5 shadow-warm">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={ownersPhoto.url}
                    alt="Anthony Bui and Michael Du standing together in front of the Little Ladle ingredient wall"
                    loading="lazy"
                    decoding="async"
                    width={1280}
                    height={1600}
                    className="aspect-[4/5] w-full object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                  />
                </div>
              </OrnateFrame>
            </Parallax>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Anthony Bui & Michael Du, owners
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-gold/35 bg-card p-6 text-center shadow-warm">
              <BrandSeal size={72} rotate={-6} className="shrink-0" />
              <div className="min-w-0">
                <h3 className="font-asian text-xl font-extrabold text-brand">
                  A Western Suburbs First
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Bringing modern, build-your-own malatang hotpot to Westfield West Lakes.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CloudDivider className="mx-auto max-w-4xl px-6" />

      <section className="surface-deep relative overflow-hidden py-24">
        <CloudPattern
          variant="flowing"
          flip
          className="pointer-events-none absolute -right-44 top-4 w-[500px] text-gold opacity-70"
        />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">
          <Reveal from="scale">
            <blockquote className="relative rounded-2xl border border-gold/35 p-8 pt-16 sm:p-10 sm:pt-16">
              <BrandSeal
                size={96}
                rotate={-8}
                className="absolute -top-10 left-1/2 -translate-x-1/2 bg-deep"
              />
              <p className="quote-serif text-3xl leading-snug text-gold sm:text-5xl">
                &ldquo;{founders.quote}&rdquo;
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="py-20" aria-labelledby="diff-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Reveal from="left">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              The difference
            </p>
            <h2
              id="diff-title"
              className="font-asian mt-3 text-3xl font-extrabold text-brand sm:text-4xl md:text-5xl"
            >
              What makes Little Ladle different
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {differences.map((d, i) => (
              <Reveal key={d.title} as="article" from={i === 1 ? "up" : "scale"} delay={i * 130}>
                <OrnateFrame className="card-glow h-full rounded-2xl border border-gold/35 bg-card p-7 shadow-warm">
                  <span className="font-display text-sm font-extrabold tracking-[0.2em] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-brand">{d.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-muted-foreground">{d.body}</p>
                </OrnateFrame>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:items-center">
          <Reveal from="left">
            <OrnateFrame className="card-glow group overflow-hidden rounded-2xl border border-gold/35 p-1.5">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={images.table.src}
                  alt={images.table.alt}
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={900}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                />
              </div>
            </OrnateFrame>
          </Reveal>
          <Reveal from="right" delay={120}>
            <h2 className="font-asian text-3xl font-extrabold text-brand sm:text-4xl md:text-5xl">
              Hotpot made personal, dining made social
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Every bowl is made to suit the person enjoying it. Choose your ingredients, your
              flavour and your level of spice, then come together at the table without anyone having
              to compromise. From little ones to malatang lovers, there&rsquo;s a bowl for everyone.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="btn-gold inline-flex min-h-11 items-center rounded-full px-6"
              >
                See the menu
              </Link>
              <Link
                to="/visit"
                className="inline-flex min-h-11 items-center rounded-full border border-brand/30 px-6 font-sans font-semibold text-brand transition-colors hover:border-primary hover:text-primary"
              >
                Find us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
