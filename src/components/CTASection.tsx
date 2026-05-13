import Link from "next/link";

type CTASectionProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  href?: string;
};

export function CTASection({
  title = "Find the best tool before you waste money on the wrong one.",
  description = "Browse practical comparisons, workflow stacks, and tool recommendations built for real-world decisions.",
  buttonLabel = "Start exploring",
  href = "/search"
}: CTASectionProps) {
  return (
    <section className="relative z-10 overflow-hidden border-y border-white/10 px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
      <div className="cta-wave" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl">
        <p className="eyebrow">Spend smarter</p>
        <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">{description}</p>
        <Link href={href} className="primary-button mt-8 inline-flex">
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
