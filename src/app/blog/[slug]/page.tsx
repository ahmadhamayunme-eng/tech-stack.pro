import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { AuthorCard } from "@/components/AuthorCard";
import { CTASection } from "@/components/CTASection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { ToolCard } from "@/components/ToolCard";
import { articles } from "@/data/site";
import { getArticle, getAuthor, getToolsBySlugs } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

type BlogPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: BlogPageProps) {
  const article = getArticle(params.slug);
  if (!article) return {};
  return createMetadata({
    title: `${article.title} - Teck Stack`,
    description: article.description,
    path: `/blog/${article.slug}`
  });
}

export default function BlogPage({ params }: BlogPageProps) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const author = getAuthor(article.authorSlug);
  const relatedTools = getToolsBySlugs(article.relatedTools);
  const relatedArticles = articles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <PageShell>
      <article>
        <section className="relative isolate overflow-hidden px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-24 lg:px-8">
          <div className="dotted-grid absolute inset-0 -z-20" aria-hidden="true" />
          <div className="hero-wave" aria-hidden="true" />
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow">{article.category}</p>
            <h1 className="mt-5 font-heading text-5xl font-bold leading-tight text-white sm:text-7xl">{article.title}</h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-white/64">{article.description}</p>
            <p className="mt-5 text-sm font-medium text-white/45">{article.publishedAt} - {article.readingTime}</p>
          </div>
        </section>

        <section className="section-shell">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[260px_1fr]">
            <aside className="space-y-4 lg:sticky lg:top-24 lg:h-fit">
              {author ? <AuthorCard author={author} /> : null}
              <div className="glass-card p-5">
                <h2 className="font-heading text-xl font-bold text-white">Table of contents</h2>
                <ol className="mt-4 space-y-2 text-sm leading-6 text-white/62">
                  {article.sections.map((section) => <li key={section.heading}>{section.heading}</li>)}
                </ol>
              </div>
            </aside>
            <div className="glass-card p-6 sm:p-10">
              <div className="mb-10 aspect-video rounded-lg border border-white/10 bg-gradient-to-br from-cyan-300/20 via-blue-500/10 to-violet-500/20" />
              <div className="space-y-10">
                {article.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="font-heading text-3xl font-bold leading-tight text-white">{section.heading}</h2>
                    <p className="mt-5 text-lg leading-9 text-white/68">{section.body}</p>
                  </section>
                ))}
              </div>
              <div className="mt-10 rounded-lg border border-cyan-200/20 bg-cyan-300/10 p-6">
                <h2 className="font-heading text-2xl font-bold text-white">Tool stack note</h2>
                <p className="mt-3 text-base leading-8 text-white/64">Use Teck Stack comparisons before choosing a paid AI tool. The right workflow matters more than the most popular logo.</p>
              </div>
            </div>
          </div>
        </section>
      </article>

      <section className="section-shell">
        <SectionHeading eyebrow="Related tools" title="Tools mentioned in this article" />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {relatedTools.map((tool) => <ToolCard key={tool.slug} tool={tool} />)}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Related articles" title="Keep reading" />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {relatedArticles.map((item) => <ArticleCard key={item.slug} article={item} />)}
        </div>
      </section>
      <NewsletterSection />
      <CTASection />
    </PageShell>
  );
}
