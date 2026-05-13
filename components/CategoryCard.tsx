type CategoryCardProps = {
  title: string;
  description: string;
  accent: string;
};

export function CategoryCard({ title, description, accent }: CategoryCardProps) {
  return (
    <article className="glass-card group min-h-56 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30 hover:shadow-glow">
      <div className={`h-1.5 w-20 rounded-full bg-gradient-to-r ${accent}`} />
      <h3 className="mt-8 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-white/60">{description}</p>
      <div className="mt-8 flex items-center text-sm font-medium text-cyan-100">
        Explore workflow
        <span className="ml-2 transition group-hover:translate-x-1" aria-hidden="true">
          -&gt;
        </span>
      </div>
    </article>
  );
}
