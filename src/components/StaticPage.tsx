import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { PageShell } from "@/components/PageShell";

type StaticPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: { title: string; body: string }[];
  children?: React.ReactNode;
};

export function StaticPage({ eyebrow, title, description, sections, children }: StaticPageProps) {
  return (
    <PageShell>
      <HeroSection eyebrow={eyebrow} title={title} description={description} />
      <section className="section-shell">
        <div className="mx-auto max-w-4xl space-y-4">
          {sections.map((section) => (
            <article key={section.title} className="glass-card p-6 sm:p-8">
              <h2 className="font-heading text-3xl font-bold text-white">{section.title}</h2>
              <p className="mt-4 text-lg leading-9 text-white/64">{section.body}</p>
            </article>
          ))}
          {children}
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
}
