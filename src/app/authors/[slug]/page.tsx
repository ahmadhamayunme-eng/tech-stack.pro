import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { AuthorCard } from "@/components/AuthorCard";
import { ComparisonCard } from "@/components/ComparisonCard";
import { HeroSection } from "@/components/HeroSection";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { ToolCard } from "@/components/ToolCard";
import { authors, comparisons, tools } from "@/data/site";
import { getArticlesByAuthor, getAuthor } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

type AuthorPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return authors.map((author) => ({ slug: author.slug }));
}

export function generateMetadata({ params }: AuthorPageProps) {
  const author = getAuthor(params.slug);
  if (!author) return {};
  return createMetadata({
    title: `${author.name} - Teck Stack`,
    description: author.bio,
    path: `/authors/${author.slug}`
  });
}

export default function AuthorPage({ params }: AuthorPageProps) {
  const author = getAuthor(params.slug);
  if (!author) notFound();

  const published = getArticlesByAuthor(author.slug);

  return (
    <PageShell>
      <HeroSection eyebrow="Author" title={author.name} description={author.bio} />
      <section className="section-shell">
        <div className="mx-auto max-w-3xl">
          <AuthorCard author={author} />
        </div>
      </section>
      <section className="section-shell">
        <SectionHeading eyebrow="Published articles" title="Latest by this author" />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {published.map((article) => <ArticleCard key={article.slug} article={article} />)}
        </div>
      </section>
      <section className="section-shell">
        <SectionHeading eyebrow="Reviewed tools" title="Tools reviewed" />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {tools.slice(0, 3).map((tool) => <ToolCard key={tool.slug} tool={tool} />)}
        </div>
      </section>
      <section className="section-shell">
        <SectionHeading eyebrow="Featured comparisons" title="Comparison work" />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {comparisons.map((comparison) => <ComparisonCard key={comparison.slug} comparison={comparison} />)}
        </div>
      </section>
    </PageShell>
  );
}
