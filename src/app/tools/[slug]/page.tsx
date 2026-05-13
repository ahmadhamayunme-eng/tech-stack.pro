import Link from "next/link";
import { notFound } from "next/navigation";
import { PricingBadge, TagBadge } from "@/components/Badges";
import { ComparisonCard } from "@/components/ComparisonCard";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { HeroSection } from "@/components/HeroSection";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { ToolCard } from "@/components/ToolCard";
import { homepageFaqs, tools } from "@/data/site";
import { getRelatedComparisons, getTool } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

type ToolPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export function generateMetadata({ params }: ToolPageProps) {
  const tool = getTool(params.slug);
  if (!tool) return {};
  return createMetadata({
    title: `${tool.name} Review, Pricing, Alternatives - Teck Stack`,
    description: tool.description,
    path: `/tools/${tool.slug}`
  });
}

export default function ToolPage({ params }: ToolPageProps) {
  const tool = getTool(params.slug);
  if (!tool) notFound();

  const relatedComparisons = getRelatedComparisons(tool.slug);
  const alternatives = tools.filter((item) => item.slug !== tool.slug).slice(0, 3);

  return (
    <PageShell>
      <HeroSection eyebrow="Tool review" title={tool.name} description={tool.longDescription}>
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3">
          <PricingBadge pricing={tool.pricing} />
          {tool.trustBadges.map((badge) => (
            <TagBadge key={badge} label={badge} />
          ))}
        </div>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={tool.affiliateUrl} className="primary-button justify-center">Visit Tool</a>
          <a href={tool.affiliateUrl} className="secondary-button justify-center">Try Free</a>
          <a href="#pricing" className="secondary-button justify-center">View Pricing</a>
        </div>
      </HeroSection>

      <section className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="space-y-10">
            <div className="grid gap-4 md:grid-cols-3">
              {["Dashboard preview", "Workflow preview", "Output preview"].map((label) => (
                <div key={label} className="glass-card aspect-video p-5">
                  <div className="h-full rounded-md border border-white/10 bg-gradient-to-br from-cyan-300/20 via-blue-500/10 to-violet-500/20" />
                  <p className="mt-3 text-sm text-white/55">{label}</p>
                </div>
              ))}
            </div>

            <section>
              <SectionHeading eyebrow="Features" title={`What ${tool.name} does well`} align="left" />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {tool.features.map((feature) => (
                  <div key={feature} className="glass-card p-5 text-base font-medium text-white/78">{feature}</div>
                ))}
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-2">
              <div className="glass-card p-6">
                <h2 className="font-heading text-2xl font-bold text-white">Pros</h2>
                <ul className="mt-5 space-y-3 text-base leading-7 text-white/64">
                  {tool.pros.map((item) => <li key={item}>+ {item}</li>)}
                </ul>
              </div>
              <div className="glass-card p-6">
                <h2 className="font-heading text-2xl font-bold text-white">Cons</h2>
                <ul className="mt-5 space-y-3 text-base leading-7 text-white/64">
                  {tool.cons.map((item) => <li key={item}>- {item}</li>)}
                </ul>
              </div>
            </section>

            <section>
              <SectionHeading eyebrow="Best for" title="Where it fits best" align="left" />
              <div className="mt-6 flex flex-wrap gap-2">
                {tool.useCases.map((useCase) => <TagBadge key={useCase} label={useCase} />)}
              </div>
            </section>

            <section id="pricing" className="glass-card p-6">
              <p className="eyebrow text-left">Pricing</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-white">{tool.pricing}</h2>
              <p className="mt-4 text-base leading-8 text-white/62">{tool.pricingNote}</p>
            </section>
          </div>

          <aside className="glass-card h-fit p-6 lg:sticky lg:top-24">
            <div className="grid h-16 w-16 place-items-center rounded-lg border border-white/10 bg-cyan-300 text-xl font-bold text-slate-950">{tool.logoMark}</div>
            <h2 className="mt-5 font-heading text-2xl font-bold text-white">{tool.name}</h2>
            <p className="mt-3 text-base leading-7 text-white/60">Rating: {tool.rating}/5</p>
            <a href={tool.affiliateUrl} className="primary-button mt-6 w-full justify-center">Visit Tool</a>
            <Link href="/search" className="secondary-button mt-3 w-full justify-center">Compare alternatives</Link>
          </aside>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Alternatives" title={`Alternatives to ${tool.name}`} />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {alternatives.map((alternative) => <ToolCard key={alternative.slug} tool={alternative} />)}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Related comparisons" title="Compare your options" />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {relatedComparisons.map((comparison) => <ComparisonCard key={comparison.slug} comparison={comparison} />)}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Verdict" title={`Should you use ${tool.name}?`} />
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-9 text-white/64">{tool.name} is a strong choice when your workflow matches {tool.bestFor.join(", ").toLowerCase()}. Start with the free or entry plan where available, then upgrade only when it saves measurable time.</p>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="FAQ" title={`${tool.name} questions`} />
        <FAQAccordion items={homepageFaqs.slice(0, 3)} />
      </section>
      <CTASection />
    </PageShell>
  );
}
