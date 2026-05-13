import Link from "next/link";
import type { Article } from "@/data/site";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/blog/${article.slug}`} className="glass-card group block p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30">
      <p className="eyebrow text-left">{article.category}</p>
      <h3 className="mt-4 font-heading text-2xl font-bold leading-tight text-white">{article.title}</h3>
      <p className="mt-4 text-base leading-7 text-white/60">{article.description}</p>
      <p className="mt-6 text-sm font-medium text-white/45">{article.readingTime}</p>
    </Link>
  );
}
