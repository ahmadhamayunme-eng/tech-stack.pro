type ToolCardProps = {
  name: string;
  description: string;
  pricing: string;
  tags: string[];
};

const pricingStyles: Record<string, string> = {
  Free: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
  Freemium: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
  Paid: "border-violet-300/25 bg-violet-300/10 text-violet-100"
};

export function ToolCard({ name, description, pricing, tags }: ToolCardProps) {
  return (
    <article className="glass-card flex min-h-72 flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200/30 hover:shadow-card-glow">
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-sm font-semibold text-white">
          {name.slice(0, 2)}
        </div>
        <span
          className={`rounded-full border px-3 py-1 text-xs font-medium ${
            pricingStyles[pricing] ?? "border-white/20 bg-white/10 text-white/75"
          }`}
        >
          {pricing}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-semibold text-white">{name}</h3>
      <p className="mt-3 text-sm leading-6 text-white/60">{description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/60">
            {tag}
          </span>
        ))}
      </div>

      <button type="button" className="secondary-button mt-auto justify-center">
        View Tool
      </button>
    </article>
  );
}
