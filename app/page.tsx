import { CategoryCard } from "@/components/CategoryCard";
import { ComparisonCard } from "@/components/ComparisonCard";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ToolCard } from "@/components/ToolCard";
import { WorkflowCard } from "@/components/WorkflowCard";

const categories = [
  {
    title: "AI Tools for Freelancers",
    description: "Find writing, research, proposal, design, and delivery tools for solo service work.",
    accent: "from-cyan-300 to-blue-500"
  },
  {
    title: "AI Tools for Agencies",
    description: "Build reliable stacks for client strategy, content operations, reporting, and growth.",
    accent: "from-violet-300 to-fuchsia-500"
  },
  {
    title: "AI Proposal Writers",
    description: "Create sharper proposals, outreach messages, and Upwork responses in less time.",
    accent: "from-sky-300 to-indigo-500"
  },
  {
    title: "AI SEO Tools",
    description: "Compare tools for keyword research, topical maps, briefs, audits, and optimization.",
    accent: "from-emerald-300 to-cyan-500"
  },
  {
    title: "AI Video Tools",
    description: "Discover video generators, editors, caption tools, repurposing suites, and avatars.",
    accent: "from-blue-300 to-violet-500"
  },
  {
    title: "Urdu AI Tools",
    description: "Explore tools that help with Urdu writing, translation, voice, content, and learning.",
    accent: "from-teal-300 to-blue-500"
  }
];

const tools = [
  {
    name: "ChatGPT",
    description: "A flexible AI assistant for writing, research, coding, planning, and daily workflows.",
    pricing: "Freemium",
    tags: ["Writing", "Research", "Automation"]
  },
  {
    name: "Claude",
    description: "Long-context AI for thoughtful writing, analysis, documents, and complex reasoning.",
    pricing: "Freemium",
    tags: ["Analysis", "Docs", "Strategy"]
  },
  {
    name: "Canva AI",
    description: "Design and content tools for social posts, presentations, brand assets, and quick visuals.",
    pricing: "Freemium",
    tags: ["Design", "Creators", "Marketing"]
  },
  {
    name: "Midjourney",
    description: "Premium image generation for concepts, campaigns, moodboards, and creative direction.",
    pricing: "Paid",
    tags: ["Images", "Branding", "Creative"]
  },
  {
    name: "Notion AI",
    description: "AI inside a workspace for notes, docs, project planning, summaries, and knowledge bases.",
    pricing: "Paid",
    tags: ["Docs", "Teams", "Planning"]
  },
  {
    name: "Gemini",
    description: "A search-connected AI assistant for research, writing, planning, and productivity.",
    pricing: "Free",
    tags: ["Research", "Planning", "Productivity"]
  }
];

const comparisons = [
  {
    left: "ChatGPT",
    right: "Claude",
    description: "Choose the better assistant for writing, research, long documents, and daily work."
  },
  {
    left: "Canva AI",
    right: "Adobe Express",
    description: "Compare fast design workflows for creators, agencies, and small business campaigns."
  },
  {
    left: "Cursor",
    right: "Windsurf",
    description: "Review AI coding environments before you commit your development workflow."
  }
];

const workflows = [
  {
    title: "AI workflow for SEO agencies",
    outcome:
      "Turn a client brief into keyword clusters, content outlines, optimized drafts, and reporting assets.",
    stack: "Research, briefs, writing, optimization, reporting"
  },
  {
    title: "AI workflow for Upwork freelancers",
    outcome:
      "Find suitable projects, write tailored proposals, prepare samples, and follow up with confidence.",
    stack: "Lead scanning, proposals, samples, client replies"
  },
  {
    title: "AI workflow for content creation",
    outcome:
      "Move from idea to script, visuals, captions, repurposed posts, and publishing checklists.",
    stack: "Ideation, scripting, design, editing, distribution"
  }
];

const faqs = [
  {
    question: "What is Teck Stack?",
    answer:
      "Teck Stack is an AI tools discovery and comparison website built to help people choose practical software stacks for real work."
  },
  {
    question: "Is Teck Stack free?",
    answer:
      "Yes. The homepage and tool discovery content are planned to be free, with recommendations designed for fast comparison."
  },
  {
    question: "Do you use affiliate links?",
    answer:
      "Yes, some recommendations may include affiliate links. The goal is to keep comparisons useful, transparent, and focused on fit."
  },
  {
    question: "Who is this website for?",
    answer:
      "It is for freelancers, agencies, creators, small businesses, and modern teams that want to use AI tools with less trial and error."
  },
  {
    question: "Will you cover tools that work in Pakistan?",
    answer:
      "Yes. Teck Stack will highlight tools, payment considerations, Urdu workflows, and use cases relevant to Pakistani users."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <div className="site-background" aria-hidden="true" />
      <Header />
      <Hero />

      <section id="categories" className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Workflow library</p>
          <h2 className="section-title">Explore AI tools by workflow</h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </section>

      <section id="tools" className="section-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Tool radar</p>
            <h2 className="section-title text-left">Popular AI tools</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-white/60">
            Quickly scan pricing style, strengths, and best-fit use cases before opening a full review.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.name} {...tool} />
          ))}
        </div>
      </section>

      <section id="comparisons" className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Decision support</p>
          <h2 className="section-title">Compare before you choose</h2>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {comparisons.map((comparison) => (
            <ComparisonCard key={`${comparison.left}-${comparison.right}`} {...comparison} />
          ))}
        </div>
      </section>

      <section id="ai-workflows" className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Stack recipes</p>
          <h2 className="section-title">Ready-made AI workflows</h2>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {workflows.map((workflow) => (
            <WorkflowCard key={workflow.title} {...workflow} />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
        <div className="cta-wave" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl">
          <p className="eyebrow">Spend smarter</p>
          <h2 className="text-balance text-3xl font-semibold text-white sm:text-5xl">
            Find the best tool before you waste money on the wrong one.
          </h2>
          <a href="#tools" className="primary-button mt-8 inline-flex">
            Start exploring
          </a>
        </div>
      </section>

      <FAQ items={faqs} />
      <Footer />
    </main>
  );
}
