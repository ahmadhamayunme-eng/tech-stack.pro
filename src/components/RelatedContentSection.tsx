import type { Article, Comparison, Tool, Workflow } from "@/data/site";
import { ArticleCard } from "@/components/ArticleCard";
import { ComparisonCard } from "@/components/ComparisonCard";
import { ToolCard } from "@/components/ToolCard";
import { WorkflowCard } from "@/components/WorkflowCard";
import { SectionHeading } from "@/components/SectionHeading";

type RelatedContentSectionProps = {
  title: string;
  description?: string;
  tools?: Tool[];
  comparisons?: Comparison[];
  workflows?: Workflow[];
  articles?: Article[];
};

export function RelatedContentSection({ title, description, tools = [], comparisons = [], workflows = [], articles = [] }: RelatedContentSectionProps) {
  return (
    <section className="section-shell">
      <SectionHeading eyebrow="Related" title={title} description={description} />
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => <ToolCard key={tool.slug} tool={tool} />)}
        {comparisons.map((comparison) => <ComparisonCard key={comparison.slug} comparison={comparison} />)}
        {workflows.map((workflow) => <WorkflowCard key={workflow.slug} workflow={workflow} />)}
        {articles.map((article) => <ArticleCard key={article.slug} article={article} />)}
      </div>
    </section>
  );
}
