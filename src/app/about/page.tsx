import { StaticPage } from "@/components/StaticPage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Teck Stack",
  description: "Learn about Teck Stack, our mission, and how we help people choose better AI tools and workflows.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <StaticPage
      eyebrow="About"
      title="AI tool decisions should feel clearer"
      description="Teck Stack helps freelancers, agencies, creators, and Pakistani users discover AI tools by real workflows, not hype."
      sections={[
        {
          title: "Our mission",
          body: "We make AI tool discovery practical. Instead of endless tool lists, Teck Stack connects tools to outcomes, budgets, platforms, and real work."
        },
        {
          title: "What Teck Stack does",
          body: "We publish tool reviews, side-by-side comparisons, best-of guides, workflow stacks, and educational articles that help users choose before they pay."
        },
        {
          title: "Why trust us",
          body: "Our content is structured around practical fit: who the tool is for, where it works, what it costs, what alternatives exist, and how it fits into a broader stack."
        }
      ]}
    />
  );
}
