import Link from "next/link";
import type { Category } from "@/data/site";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={`/category/${category.slug}`} className="glass-card group flex min-h-60 flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30 hover:shadow-glow">
      <div className={`h-1.5 w-20 rounded-full bg-gradient-to-r ${category.accent}`} />
      <h3 className="mt-8 font-heading text-2xl font-bold leading-tight text-white">{category.title}</h3>
      <p className="mt-4 text-base leading-7 text-white/60">{category.description}</p>
      <span className="mt-auto pt-8 text-sm font-semibold text-cyan-100 transition group-hover:translate-x-1">Explore workflow -&gt;</span>
    </Link>
  );
}
