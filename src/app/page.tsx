import { ArticleCard } from "@/components/ArticleCard";
import { CategoryCard } from "@/components/CategoryCard";
import { ComparisonCard } from "@/components/ComparisonCard";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { HeroSection } from "@/components/HeroSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { PageShell } from "@/components/PageShell";
import { SearchBar } from "@/components/SearchBar";
import { SectionHeading } from "@/components/SectionHeading";
import { ToolCard } from "@/components/ToolCard";
import { WorkflowCard } from "@/components/WorkflowCard";
import { articles, bestGuides, categories, comparisons, homepageFaqs, tools, workflows } from "@/data/site";

const heroChips = ["Freelancers", "Agencies", "Urdu Tools", "Free AI Tools", "Upwork"];

export default function Home() {
  return (
    <PageShell>
      <HeroSection
        eyebrow="tech-stack.pro"
        title="Build your perfect AI stack"
        description="Discover, compare, and choose the best AI tools for freelancers, agencies, creators, and modern workflows."
      >
        <SearchBar chips={heroChips} />
      </HeroSection>

      <section className="section-shell" id="categories">
        <SectionHeading eyebrow="Workflow library" title="Explore AI tools by workflow" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.slice(0, 6).map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <section className="section-shell" id="tools">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Tool radar" title="Popular AI tools" align="left" />
          <p className="max-w-md text-base leading-8 text-white/60">
            Quickly scan pricing style, strengths, and best-fit use cases before opening a full review.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {tools.slice(0, 6).map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <section className="section-shell" id="comparisons">
        <SectionHeading eyebrow="Decision support" title="Compare before you choose" />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {comparisons.map((comparison) => (
            <ComparisonCard key={comparison.slug} comparison={comparison} />
          ))}
        </div>
      </section>

      <section className="section-shell" id="workflows">
        <SectionHeading eyebrow="Stack recipes" title="Ready-made AI workflows" />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {workflows.map((workflow) => (
            <WorkflowCard key={workflow.slug} workflow={workflow} />
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Best-of guides" title="Start with a ranked shortlist" />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {bestGuides.map((guide) => (
            <a key={guide.slug} href={`/best/${guide.slug}`} className="glass-card block p-6 transition hover:-translate-y-1 hover:border-cyan-200/30">
              <p className="eyebrow text-left">Guide</p>
              <h3 className="mt-4 font-heading text-2xl font-bold text-white">{guide.title}</h3>
              <p className="mt-4 text-base leading-7 text-white/60">{guide.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Latest insights" title="Latest blog posts" />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <NewsletterSection />
      <CTASection />

      <section className="section-shell">
        <SectionHeading eyebrow="FAQ" title="Questions before you explore" />
        <FAQAccordion items={homepageFaqs} />
      </section>
    </PageShell>
  );
}
