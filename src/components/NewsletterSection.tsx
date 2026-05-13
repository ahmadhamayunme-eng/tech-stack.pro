export function NewsletterSection() {
  return (
    <section className="section-shell">
      <div className="glass-card mx-auto max-w-4xl p-8 text-center sm:p-10">
        <p className="eyebrow">Newsletter</p>
        <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-white sm:text-5xl">Get smarter AI tool picks</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/60">A concise weekly digest of useful AI tools, comparisons, and workflow ideas for practical builders.</p>
        <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input id="newsletter-email" type="email" placeholder="you@example.com" className="min-h-12 flex-1 rounded-full border border-white/10 bg-black/25 px-5 text-white outline-none placeholder:text-white/36 focus:border-cyan-200/50" />
          <button type="button" className="primary-button justify-center">Join free</button>
        </form>
      </div>
    </section>
  );
}
