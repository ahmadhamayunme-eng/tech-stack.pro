import { notFound } from "next/navigation";
import { ComparisonCard } from "@/components/ComparisonCard";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { HeroSection } from "@/components/HeroSection";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { ToolComparisonTable } from "@/components/ToolComparisonTable";
import { comparisons } from "@/data/site";
import { getComparison, getTool } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

type ComparisonPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return comparisons.map((comparison) => ({ slug: comparison.slug }));
}

export function generateMetadata({ params }: ComparisonPageProps) {
  const comparison = getComparison(params.slug);
  if (!comparison) return {};
  return createMetadata({
    title: `${comparison.title} - Teck Stack`,
    description: comparison.description,
    path: `/compare/${comparison.slug}`
  });
}

export default function ComparisonPage({ params }: ComparisonPageProps) {
  const comparison = getComparison(params.slug);
  if (!comparison) notFound();

  const toolA = getTool(comparison.toolA);
  const toolB = getTool(comparison.toolB);
  const comparisonTools = [toolA, toolB].filter((tool): tool is NonNullable<typeof tool> => Boolean(tool));
  const related = comparisons.filter((item) => item.slug !== comparison.slug);

  return (
    <PageShell>
      <HeroSection eyebrow="Comparison" title={comparison.title} description={comparison.description}>
        <div className="glass-card mx-auto max-w-3xl p-6">
          <p className="eyebrow">Quick winner</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white">{comparison.winner}</h2>
          <p className="mt-4 text-base leading-8 text-white/62">{comparison.winnerReason}</p>
        </div>
      </HeroSection>

      <section className="section-shell">
        <SectionHeading eyebrow="Side-by-side" title="Comparison table" />
        <div className="mt-10">
          <ToolComparisonTable leftLabel={toolA?.name ?? "Tool A"} rightLabel={toolB?.name ?? "Tool B"} metrics={comparison.metrics} />
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-4 md:grid-cols-2">
          {comparisonTools.map((tool) => (
            <div key={tool.slug} className="glass-card p-6">
              <h2 className="font-heading text-3xl font-bold text-white">{tool.name} pros and cons</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="font-semibold text-cyan-100">Pros</p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-white/62">
                    {tool.pros.map((item) => <li key={item}>+ {item}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-violet-100">Cons</p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-white/62">
                    {tool.cons.map((item) => <li key={item}>- {item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Verdict" title="Which one should you choose?" />
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-9 text-white/64">{comparison.winnerReason}</p>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Related" title="More comparisons" />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {related.map((item) => <ComparisonCard key={item.slug} comparison={item} />)}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="FAQ" title={`${comparison.title} questions`} />
        <FAQAccordion items={comparison.faq} />
      </section>
      <CTASection />
    </PageShell>
  );
}
