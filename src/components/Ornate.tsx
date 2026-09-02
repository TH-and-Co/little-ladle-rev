import type { ReactNode } from "react";
import cloudV1 from "@/assets/cloud-v1.svg?raw";
import cloudV2 from "@/assets/cloud-v2.svg?raw";

export function OrnateFrame({
  className = "",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return <div className={`ornate-frame ${className}`}>{children}</div>;
}

type CloudVariant = "coiled" | "flowing" | "billow";

const CLOUD_ART: Record<CloudVariant, string> = {
  coiled: cloudV1,
  flowing: cloudV2,
  billow: cloudV1,
};

export function XiangyunCloud({
  className = "",
  variant = "coiled",
  flip = false,
}: {
  className?: string;
  variant?: CloudVariant;
  flip?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={`xiangyun inline-block ${className}`}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      dangerouslySetInnerHTML={{ __html: CLOUD_ART[variant] }}
    />
  );
}

export function CloudPattern({
  className = "",
  variant = "coiled",
  flip = false,
}: {
  className?: string;
  variant?: CloudVariant;
  flip?: boolean;
}) {
  return <XiangyunCloud className={className} variant={variant} flip={flip} />;
}

export function CloudDivider({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "deep";
}) {
  return (
    <div aria-hidden className={`flex items-center justify-center gap-4 ${className}`}>
      <span className={`h-px flex-1 rule-gold ${tone === "deep" ? "opacity-60" : "opacity-45"}`} />
      <XiangyunCloud variant="flowing" className="w-[190px] shrink-0 text-gold" />
      <span className={`h-px flex-1 rule-gold ${tone === "deep" ? "opacity-60" : "opacity-45"}`} />
    </div>
  );
}
