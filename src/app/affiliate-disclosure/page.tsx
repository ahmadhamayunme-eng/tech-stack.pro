import { StaticPage } from "@/components/StaticPage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Affiliate Disclosure - Teck Stack",
  description: "Affiliate disclosure for Teck Stack recommendations and tool links.",
  path: "/affiliate-disclosure"
});

export default function AffiliateDisclosurePage() {
  return (
    <StaticPage
      eyebrow="Disclosure"
      title="Affiliate Disclosure"
      description="Transparency matters when tool recommendations can affect buying decisions."
      sections={[
        {
          title: "Affiliate links",
          body: "Some Teck Stack pages may contain affiliate links. If a user buys through those links, Teck Stack may earn a commission at no extra cost to the user."
        },
        {
          title: "Editorial approach",
          body: "Recommendations should be based on practical fit, workflow relevance, pricing, alternatives, and user needs. Affiliate potential should not be the only reason a tool appears."
        },
        {
          title: "User-first comparisons",
          body: "Teck Stack aims to show strengths, limitations, and alternatives so readers can make better decisions before spending money."
        }
      ]}
    />
  );
}
