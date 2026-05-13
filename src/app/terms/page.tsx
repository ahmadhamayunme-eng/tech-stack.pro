import { StaticPage } from "@/components/StaticPage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms - Teck Stack",
  description: "Terms for using the Teck Stack website.",
  path: "/terms"
});

export default function TermsPage() {
  return (
    <StaticPage
      eyebrow="Terms"
      title="Terms of Use"
      description="Basic terms for browsing and using Teck Stack."
      sections={[
        {
          title: "Website content",
          body: "Teck Stack content is provided for informational purposes. Users should verify pricing, availability, and product details on each tool's official website before buying."
        },
        {
          title: "No professional guarantee",
          body: "Tool recommendations and workflows are educational and should not be treated as financial, legal, or professional advice."
        },
        {
          title: "Changes",
          body: "The site, content, and policies may be updated as Teck Stack grows into a full AI tools discovery platform."
        }
      ]}
    />
  );
}
