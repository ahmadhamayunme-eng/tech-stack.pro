import Link from "next/link";

const navLinks = [
  { label: "AI Tools", href: "/category/ai-tools-for-freelancers" },
  { label: "Comparisons", href: "/compare/chatgpt-vs-claude" },
  { label: "Workflows", href: "/workflows/upwork-ai-workflow" },
  { label: "Best Guides", href: "/best/best-ai-tools-for-upwork" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/75 backdrop-blur-2xl">
      <nav aria-label="Primary navigation" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Teck Stack home">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/20 bg-white/[0.06] shadow-glow">
            <span className="h-3.5 w-3.5 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(103,232,249,0.9)]" />
          </span>
          <span className="flex items-center gap-2">
            <span className="font-heading text-base font-bold text-white">Teck Stack</span>
            <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase text-cyan-100">
              Beta
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-sm font-medium text-white/70 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="/search" className="secondary-button">
          Explore Tools
        </Link>
      </nav>
    </header>
  );
}
