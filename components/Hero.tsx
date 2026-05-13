const chips = ["Freelancers", "Agencies", "Urdu Tools", "Free AI Tools", "Upwork"];

export function Hero() {
  return (
    <section className="relative isolate px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24 lg:px-8 lg:pb-28">
      <div className="dotted-grid absolute inset-0 -z-20" aria-hidden="true" />
      <div className="hero-wave" aria-hidden="true" />
      <div className="mx-auto max-w-5xl text-center">
        <p className="mx-auto inline-flex rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium uppercase text-cyan-100 shadow-glow backdrop-blur">
          teck-stack.pro
        </p>
        <h1 className="mx-auto mt-8 max-w-5xl text-balance text-5xl font-semibold text-white sm:text-7xl lg:text-8xl">
          Build your perfect <span className="text-gradient">AI stack</span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-8 text-white/60 sm:text-lg">
          Discover, compare, and choose the best AI tools for freelancers, agencies, creators, and modern workflows.
        </p>

        <form action="#tools" className="mx-auto mt-10 max-w-3xl" aria-label="Find AI tools">
          <div className="glass-card p-2 sm:p-3">
            <div className="flex flex-col gap-3 rounded-[1.35rem] bg-black/20 p-2 ring-1 ring-white/10 sm:flex-row sm:items-center sm:p-3">
              <label htmlFor="ai-search" className="sr-only">
                What do you want to do with AI?
              </label>
              <input
                id="ai-search"
                type="search"
                placeholder="What do you want to do with AI?"
                className="min-h-14 flex-1 bg-transparent px-4 text-base text-white placeholder:text-white/40 outline-none"
              />
              <button type="submit" className="primary-button min-h-12 justify-center">
                Find Tools
              </button>
            </div>
            <div className="flex flex-wrap gap-2 px-3 pb-3 pt-4">
              {chips.map((chip) => (
                <button key={chip} type="button" className="chip">
                  {chip}
                </button>
              ))}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
