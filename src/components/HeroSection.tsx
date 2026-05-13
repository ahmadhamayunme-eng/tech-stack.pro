import type { ReactNode } from "react";

type HeroSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
  align?: "center" | "left";
};

export function HeroSection({ eyebrow, title, description, children, align = "center" }: HeroSectionProps) {
  const isCenter = align === "center";

  return (
    <section className="relative isolate overflow-hidden px-4 pb-14 pt-16 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8">
      <div className="dotted-grid absolute inset-0 -z-20" aria-hidden="true" />
      <div className="hero-wave" aria-hidden="true" />
      <div className={`mx-auto max-w-5xl ${isCenter ? "text-center" : "text-left"}`}>
        {eyebrow ? <p className="eyebrow mx-auto inline-flex rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 shadow-glow backdrop-blur">{eyebrow}</p> : null}
        <h1 className="mx-auto mt-7 max-w-5xl text-balance font-heading text-5xl font-bold leading-[1.02] text-white sm:text-7xl lg:text-8xl">
          {title}
        </h1>
        <p className={`mt-7 max-w-3xl text-pretty text-lg leading-8 text-white/64 sm:text-xl ${isCenter ? "mx-auto" : ""}`}>{description}</p>
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}
