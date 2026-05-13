const footerLinks = ["About", "Contact", "Privacy Policy", "Affiliate Disclosure"];

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="text-lg font-semibold text-white">Teck Stack</p>
          <p className="mt-3 text-sm leading-6 text-white/50">
            AI tool discovery, comparisons, and workflow stacks for freelancers, agencies, creators, and Pakistani users.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/60">
          {footerLinks.map((link) => (
            <a key={link} href="#" className="transition hover:text-white">
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
