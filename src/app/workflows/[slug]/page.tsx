import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { ToolCard } from "@/components/ToolCard";
import { WorkflowCard } from "@/components/WorkflowCard";
import { workflows } from "@/data/site";
import { getToolsBySlugs, getWorkflow } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

type WorkflowPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return workflows.map((workflow) => ({ slug: workflow.slug }));
}

export function generateMetadata({ params }: WorkflowPageProps) {
  const workflow = getWorkflow(params.slug);
  if (!workflow) return {};
  return createMetadata({
    title: `${workflow.title} - Teck Stack`,
    description: workflow.description,
    path: `/workflows/${workflow.slug}`
  });
}

export default function WorkflowPage({ params }: WorkflowPageProps) {
  const workflow = getWorkflow(params.slug);
  if (!workflow) notFound();

  const stack = getToolsBySlugs(workflow.toolSlugs);
  const related = workflows.filter((item) => item.slug !== workflow.slug);

  return (
    <PageShell>
      <HeroSection eyebrow="Workflow" title={workflow.title} description={workflow.description} />

      <section className="section-shell">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="glass-card p-6 md:col-span-2">
            <p className="eyebrow text-left">Problem</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white">{workflow.problem}</h2>
            <p className="mt-5 text-lg leading-9 text-white/62">{workflow.outcome}</p>
          </div>
          <div className="glass-card p-6">
            <p className="eyebrow text-left">Estimated pricing</p>
            <p className="mt-4 font-heading text-2xl font-bold leading-tight text-white">{workflow.estimatedPricing}</p>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Step by step" title="Workflow overview" />
        <div className="mx-auto mt-10 max-w-4xl space-y-4">
          {workflow.steps.map((step, index) => (
            <article key={step} className="glass-card grid gap-4 p-5 sm:grid-cols-[64px_1fr] sm:items-center">
              <div className="grid h-12 w-12 place-items-center rounded-lg border border-cyan-200/25 bg-cyan-300/10 font-heading text-xl font-bold text-cyan-100">{index + 1}</div>
              <p className="text-lg font-medium leading-8 text-white/78">{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Tools used" title="Tool stack cards" />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stack.map((tool) => <ToolCard key={tool.slug} tool={tool} />)}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Automation flow" title="How the work moves" />
        <div className="glass-card mx-auto mt-10 max-w-5xl p-6">
          <div className="grid gap-3 md:grid-cols-5">
            {workflow.steps.map((step, index) => (
              <div key={step} className="rounded-md border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-white/64">
                <p className="font-heading text-lg font-bold text-white">{index + 1}</p>
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Tips" title="Make this workflow better" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {workflow.tips.map((tip) => (
            <div key={tip} className="glass-card p-6 text-base leading-8 text-white/66">{tip}</div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Related workflows" title="Explore more stacks" />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {related.map((item) => <WorkflowCard key={item.slug} workflow={item} />)}
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
}
