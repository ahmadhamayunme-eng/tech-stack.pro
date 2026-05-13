import { StaticPage } from "@/components/StaticPage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact Teck Stack",
  description: "Contact Teck Stack for partnerships, tool submissions, feedback, and support.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <StaticPage
      eyebrow="Contact"
      title="Talk to Teck Stack"
      description="Send tool suggestions, partnership questions, corrections, or feedback for the AI tool directory."
      sections={[
        {
          title: "Support email",
          body: "For now, reach the Teck Stack team at hello@tech-stack.pro. A full support workflow will be added as the platform grows."
        },
        {
          title: "Tool submissions",
          body: "If you build an AI or SaaS tool, share the use case, pricing, platform support, affiliate details, and what workflow your product improves."
        }
      ]}
    >
      <form className="glass-card p-6 sm:p-8" aria-label="Contact form">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-semibold text-white/70">
            Name
            <input type="text" className="mt-2 min-h-12 w-full rounded-lg border border-white/10 bg-black/25 px-4 text-white outline-none focus:border-cyan-200/50" />
          </label>
          <label className="text-sm font-semibold text-white/70">
            Email
            <input type="email" className="mt-2 min-h-12 w-full rounded-lg border border-white/10 bg-black/25 px-4 text-white outline-none focus:border-cyan-200/50" />
          </label>
        </div>
        <label className="mt-4 block text-sm font-semibold text-white/70">
          Message
          <textarea rows={5} className="mt-2 w-full rounded-lg border border-white/10 bg-black/25 px-4 py-3 text-white outline-none focus:border-cyan-200/50" />
        </label>
        <button type="button" className="primary-button mt-5">Send message</button>
      </form>
    </StaticPage>
  );
}
