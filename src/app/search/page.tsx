import { CTASection } from "@/components/CTASection";
import { FilterSidebar } from "@/components/FilterSidebar";
import { HeroSection } from "@/components/HeroSection";
import { PageShell } from "@/components/PageShell";
import { SearchBar } from "@/components/SearchBar";
import { SectionHeading } from "@/components/SectionHeading";
import { ToolCard } from "@/components/ToolCard";
import { categories, tools } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Search AI Tools - Teck Stack",
  description: "Search and filter AI tools by category, pricing, use case, platform, Urdu support, and Pakistan availability.",
  path: "/search"
});

export default function SearchPage() {
  return (
    <PageShell>
      <HeroSection eyebrow="Search" title="Find the right AI tool faster" description="Search the mock tool library, scan categories, and filter by practical buying criteria.">
        <SearchBar chips={["Free", "Freemium", "Urdu support", "Works in Pakistan", "For agencies"]} />
      </HeroSection>

      <section className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <FilterSidebar />
          <div>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <SectionHeading eyebrow="Results" title="Tool results" align="left" description={`${tools.length} tools available in the current mock catalog.`} />
              <label className="text-sm font-medium text-white/62">
                Sort
                <select className="ml-3 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-white">
                  <option>Recommended</option>
                  <option>Free first</option>
                  <option>Highest rated</option>
                </select>
              </label>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {tools.map((tool) => <ToolCard key={tool.slug} tool={tool} />)}
            </div>
            <div className="glass-card mt-8 p-6 text-center">
              <h2 className="font-heading text-2xl font-bold text-white">No exact match?</h2>
              <p className="mt-3 text-base leading-7 text-white/60">Try a workflow search like proposal writing, Urdu content, SEO agency, video creation, or Upwork.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Categories" title="Browse by category" />
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <a key={category.slug} href={`/category/${category.slug}`} className="chip">{category.title}</a>
          ))}
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
}
