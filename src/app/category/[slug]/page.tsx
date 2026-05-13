import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { ComparisonCard } from "@/components/ComparisonCard";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FilterSidebar } from "@/components/FilterSidebar";
import { HeroSection } from "@/components/HeroSection";
import { PageShell } from "@/components/PageShell";
import { SearchBar } from "@/components/SearchBar";
import { SectionHeading } from "@/components/SectionHeading";
import { ToolCard } from "@/components/ToolCard";
import { WorkflowCard } from "@/components/WorkflowCard";
import { articles, categories, comparisons, workflows } from "@/data/site";
import { getCategory, getToolsBySlugs } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

type CategoryPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export function generateMetadata({ params }: CategoryPageProps) {
  const category = getCategory(params.slug);
  if (!category) return {};
  return createMetadata({
    title: `${category.title} - Teck Stack`,
    description: category.description,
    path: `/category/${category.slug}`
  });
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategory(params.slug);
  if (!category) notFound();

  const categoryTools = getToolsBySlugs(category.toolSlugs);
  const relatedWorkflows = workflows.filter((workflow) => category.relatedWorkflows.includes(workflow.slug));

  return (
    <PageShell>
      <HeroSection eyebrow="Category" title={category.title} description={category.intro}>
        <SearchBar chips={["Free", "Works in Pakistan", "Urdu support", "Agencies", "Freelancers"]} />
      </HeroSection>

      <section className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <FilterSidebar />
          <div>
            <SectionHeading eyebrow="Tools" title={`Best ${category.title}`} align="left" description="Browse the current shortlist and use filters as a planning guide while the full database is being built." />
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {categoryTools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Comparisons" title="Featured comparisons" />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {comparisons.slice(0, 3).map((comparison) => (
            <ComparisonCard key={comparison.slug} comparison={comparison} />
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Related workflows" title="Workflows that use these tools" />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {relatedWorkflows.map((workflow) => (
            <WorkflowCard key={workflow.slug} workflow={workflow} />
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="FAQ" title={`${category.title} questions`} />
        <FAQAccordion items={category.faq} />
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Related articles" title="Learn before you choose" />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
