import type { ReactNode } from "react";

export function LadleMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.5 3.5V12" />
      <path d="M8 12h11a5.5 5.5 0 0 1-11 0Z" />
      <path d="M15.5 3.5a2 2 0 1 1 2 2" />
    </svg>
  );
}

export function BrandSeal({
  className = "",
  size = 128,
  rotate = -9,
}: {
  className?: string;
  size?: number;
  rotate?: number;
}) {
  const id = `seal-path-${size}-${Math.round(rotate)}`;
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none relative z-10 inline-flex aspect-square shrink-0 items-center justify-center rounded-full border border-gold/35 bg-deep text-gold ${className}`}
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotate}deg)`,
        boxSizing: "border-box",
      }}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full">
        <defs>
          <path id={id} d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" fill="none" />
        </defs>
        <text
          fill="currentColor"
          className="text-[9.5px] font-semibold uppercase"
          style={{ letterSpacing: "0.28em" }}
        >
          <textPath href={`#${id}`} startOffset="0%">
            FRESH DAILY · WEST LAKES ·
          </textPath>
        </text>
      </svg>
      <img
        src="/fox-mascot-gold.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        width={512}
        height={512}
        className="relative h-auto object-contain"
        style={{ width: size * 0.42, transform: `rotate(${-rotate}deg)` }}
      />
    </span>
  );
}

export function LadleDivider({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex items-center gap-4 ${className}`}>
      <span className="rule-gold h-px flex-1" />
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/35 text-gold">
        <LadleMark className="size-5" />
      </span>
      <span className="rule-gold h-px flex-1" />
    </div>
  );
}

export function BrandBanner({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`surface-deep relative overflow-hidden py-10 ${className}`}>
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-4 px-5 text-center sm:px-6 lg:max-w-7xl">
        <LadleDivider className="w-full max-w-md lg:max-w-xl" />
        <p className="font-asian text-xl leading-snug text-deep-heading sm:text-2xl lg:whitespace-nowrap lg:text-2xl xl:text-3xl">
          {children}
        </p>
      </div>
    </section>
  );
}
