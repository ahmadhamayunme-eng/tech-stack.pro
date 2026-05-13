type ComparisonCardProps = {
  left: string;
  right: string;
  description: string;
};

export function ComparisonCard({ left, right, description }: ComparisonCardProps) {
  return (
    <article className="glass-card overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-200/30 hover:shadow-glow">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <div className="rounded-md border border-white/10 bg-white/[0.05] p-4 text-center">
          <p className="text-sm font-semibold text-white">{left}</p>
        </div>
        <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-semibold text-white/60">
          VS
        </span>
        <div className="rounded-md border border-white/10 bg-white/[0.05] p-4 text-center">
          <p className="text-sm font-semibold text-white">{right}</p>
        </div>
      </div>
      <p className="mt-6 text-sm leading-6 text-white/60">{description}</p>
      <button type="button" className="primary-button mt-8 w-full justify-center">
        Compare
      </button>
    </article>
  );
}
