import Link from "next/link";
import type { Workflow } from "@/data/site";

export function WorkflowCard({ workflow }: { workflow: Workflow }) {
  return (
    <article className="glass-card relative min-h-80 overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent" />
      <p className="eyebrow text-left">Outcome first</p>
      <h3 className="mt-5 font-heading text-2xl font-bold leading-tight text-white">{workflow.title}</h3>
      <p className="mt-4 text-base leading-7 text-white/60">{workflow.description}</p>
      <div className="mt-8 rounded-md border border-white/10 bg-black/25 p-4">
        <p className="text-xs font-semibold uppercase text-white/40">Expected result</p>
        <p className="mt-2 text-sm leading-6 text-white/70">{workflow.outcome}</p>
      </div>
      <Link href={`/workflows/${workflow.slug}`} className="secondary-button mt-6 justify-center">
        View Workflow
      </Link>
    </article>
  );
}
