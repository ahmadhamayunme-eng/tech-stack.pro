import type { PricingType } from "@/data/site";

const pricingStyles: Record<PricingType, string> = {
  Free: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
  Freemium: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
  Paid: "border-violet-300/25 bg-violet-300/10 text-violet-100"
};

export function PricingBadge({ pricing }: { pricing: PricingType }) {
  return <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${pricingStyles[pricing]}`}>{pricing}</span>;
}

export function TagBadge({ label }: { label: string }) {
  return <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70">{label}</span>;
}
