import Link from "next/link";
import type { Tool } from "@/data/site";
import { PricingBadge, TagBadge } from "@/components/Badges";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <article className="glass-card flex min-h-80 flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200/30 hover:shadow-card-glow">
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-sm font-bold text-white">{tool.logoMark}</div>
        <PricingBadge pricing={tool.pricing} />
      </div>
      <h3 className="mt-6 font-heading text-2xl font-bold text-white">{tool.name}</h3>
      <p className="mt-3 text-base leading-7 text-white/60">{tool.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {tool.bestFor.slice(0, 3).map((tag) => (
          <TagBadge key={tag} label={tag} />
        ))}
      </div>
      <Link href={`/tools/${tool.slug}`} className="secondary-button mt-auto justify-center">
        View Tool
      </Link>
    </article>
  );
}
