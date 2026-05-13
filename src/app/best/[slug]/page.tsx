import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { HeroSection } from "@/components/HeroSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { PageShell } from "@/components/PageShell";
import { PricingBadge, TagBadge } from "@/components/Badges";
import { SectionHeading } from "@/components/SectionHeading";
import { bestGuides } from "@/data/site";
import { getBestGuide, getToolsBySlugs } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

type BestPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return bestGuides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }: BestPageProps) {
  const guide = getBestGuide(params.slug);
  if (!guide) return {};
  return createMetadata({
    title: `${guide.title} - Teck Stack`,
    description: guide.description,
    path: `/best/${guide.slug}`
  });
}

export default function BestPage({ params }: BestPageProps) {
  const guide = getBestGuide(params.slug);
  if (!guide) notFound();

  const rankedTools = getToolsBySlugs(guide.toolSlugs);

  return (
    <PageShell>
      <HeroSection eyebrow="Best-of guide" title={guide.title} description={guide.description} />
      <section className="section-shell">
        <SectionHeading eyebrow="Quick table" title="At-a-glance shortlist" />
        <div className="mt-10 overflow-hidden rounded-lg border border-white/10">
          {rankedTools.map((tool, index) => (
            <div key={tool.slug} className="grid gap-4 border-b border-white/10 bg-white/[0.035] p-5 last:border-b-0 md:grid-cols-[80px_1fr_140px] md:items-center">
              <p className="font-heading text-3xl font-bold text-cyan-100">#{index + 1}</p>
              <div>
                <h2 className="font-heading text-2xl font-bold text-white">{tool.name}</h2>
                <p className="mt-2 text-base leading-7 text-white/60">{tool.description}</p>
              </div>
              <PricingBadge pricing={tool.pricing} />
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Ranked list" title="Detailed recommendations" />
        <div className="mt-10 space-y-5">
          {rankedTools.map((tool, index) => (
            <article key={tool.slug} className="glass-card p-6">
              <p className="eyebrow text-left">Rank #{index + 1}</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-white">{tool.name}</h2>
              <p className="mt-4 text-base leading-8 text-white/62">{tool.longDescription}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {tool.bestFor.map((tag) => <TagBadge key={tag} label={tag} />)}
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-cyan-100">Pros</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-white/62">{tool.pros.map((item) => <li key={item}>+ {item}</li>)}</ul>
                </div>
                <div>
                  <h3 className="font-semibold text-violet-100">Cons</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-white/62">{tool.cons.map((item) => <li key={item}>- {item}</li>)}</ul>
                </div>
              </div>
              <a href={tool.affiliateUrl} className="primary-button mt-6">Visit Tool</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Final recommendations" title="Best choice by situation" />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {guide.recommendations.map((recommendation) => (
            <div key={recommendation} className="glass-card p-5 text-base leading-7 text-white/70">{recommendation}</div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="FAQ" title={`${guide.title} questions`} />
        <FAQAccordion items={guide.faq} />
      </section>
      <NewsletterSection />
      <CTASection />
    </PageShell>
  );
}
