type WorkflowCardProps = {
  title: string;
  outcome: string;
  stack: string;
};

export function WorkflowCard({ title, outcome, stack }: WorkflowCardProps) {
  return (
    <article className="glass-card relative min-h-72 overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent" />
      <p className="eyebrow text-left">Outcome first</p>
      <h3 className="mt-5 text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-white/60">{outcome}</p>
      <div className="mt-8 rounded-md border border-white/10 bg-black/25 p-4">
        <p className="text-xs uppercase text-white/40">Stack path</p>
        <p className="mt-2 text-sm text-white/70">{stack}</p>
      </div>
    </article>
  );
}
