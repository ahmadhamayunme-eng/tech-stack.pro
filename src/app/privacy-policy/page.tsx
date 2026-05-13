import { StaticPage } from "@/components/StaticPage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy - Teck Stack",
  description: "Privacy policy for Teck Stack.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <StaticPage
      eyebrow="Privacy"
      title="Privacy Policy"
      description="A clear privacy foundation for the Teck Stack platform."
      sections={[
        {
          title: "Information we collect",
          body: "Teck Stack may collect basic contact information when users submit forms, subscribe to updates, or contact the team. Analytics may be added later to understand site performance."
        },
        {
          title: "How information is used",
          body: "Information is used to respond to messages, improve content, understand user needs, and maintain a useful AI tools discovery experience."
        },
        {
          title: "Your choices",
          body: "Users can request updates or deletion of contact information by emailing hello@tech-stack.pro."
        }
      ]}
    />
  );
}
