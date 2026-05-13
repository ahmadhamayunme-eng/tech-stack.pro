import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Terms", href: "/terms" }
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_1fr]">
        <div className="max-w-xl">
          <p className="font-heading text-2xl font-bold text-white">Teck Stack</p>
          <p className="mt-4 text-base leading-8 text-white/58">
            AI tool discovery, comparisons, and workflow stacks for freelancers, agencies, creators, and Pakistani users.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap items-start gap-x-6 gap-y-3 text-sm font-medium text-white/62 md:justify-end">
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
