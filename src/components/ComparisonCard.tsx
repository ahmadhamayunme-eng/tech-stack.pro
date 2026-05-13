import Link from "next/link";
import type { Comparison } from "@/data/site";
import { getTool } from "@/lib/content";

export function ComparisonCard({ comparison }: { comparison: Comparison }) {
  const toolA = getTool(comparison.toolA);
  const toolB = getTool(comparison.toolB);

  return (
    <article className="glass-card overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-200/30 hover:shadow-glow">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <div className="rounded-md border border-white/10 bg-white/[0.05] p-4 text-center">
          <p className="font-heading text-base font-bold text-white">{toolA?.name ?? comparison.toolA}</p>
        </div>
        <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-bold text-white/60">VS</span>
        <div className="rounded-md border border-white/10 bg-white/[0.05] p-4 text-center">
          <p className="font-heading text-base font-bold text-white">{toolB?.name ?? comparison.toolB}</p>
        </div>
      </div>
      <p className="mt-6 text-base leading-7 text-white/60">{comparison.description}</p>
      <Link href={`/compare/${comparison.slug}`} className="primary-button mt-8 w-full justify-center">
        Compare
      </Link>
    </article>
  );
}
