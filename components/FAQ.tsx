type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
};

export function FAQ({ items }: FAQProps) {
  return (
    <section className="section-shell" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-heading" className="section-title">
          Questions before you explore
        </h2>
      </div>
      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {items.map((item) => (
          <details key={item.question} className="glass-card group p-0">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left text-base font-medium text-white outline-none transition focus-visible:ring-2 focus-visible:ring-cyan-300 sm:px-6">
              {item.question}
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition group-open:rotate-45 group-open:text-cyan-100">
                +
              </span>
            </summary>
            <div className="px-5 pb-5 text-sm leading-6 text-white/60 sm:px-6">{item.answer}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
