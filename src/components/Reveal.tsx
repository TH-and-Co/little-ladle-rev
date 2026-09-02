import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  as?: "div" | "li" | "article" | "section" | "span";
  className?: string;
  delay?: number;

  from?: "up" | "left" | "right" | "scale";
  children?: ReactNode;
  id?: string;
  "aria-labelledby"?: string;
};

export function Reveal({
  as = "div",
  className = "",
  delay = 0,
  from = "up",
  children,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as "div";
  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement | null>}
      className={`reveal reveal-${from} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  );
}
