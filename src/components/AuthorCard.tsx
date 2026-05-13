import Link from "next/link";
import type { Author } from "@/data/site";
import { TagBadge } from "@/components/Badges";

export function AuthorCard({ author }: { author: Author }) {
  return (
    <div className="glass-card p-6">
      <div className="flex items-start gap-4">
        <div className="grid h-14 w-14 place-items-center rounded-lg border border-white/10 bg-cyan-300 text-lg font-bold text-slate-950">{author.name.slice(0, 2)}</div>
        <div>
          <h3 className="font-heading text-xl font-bold text-white">{author.name}</h3>
          <p className="text-sm text-cyan-100/80">{author.role}</p>
        </div>
      </div>
      <p className="mt-5 text-base leading-7 text-white/60">{author.bio}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {author.expertise.map((item) => (
          <TagBadge key={item} label={item} />
        ))}
      </div>
      <Link href={`/authors/${author.slug}`} className="secondary-button mt-6">
        View profile
      </Link>
    </div>
  );
}
