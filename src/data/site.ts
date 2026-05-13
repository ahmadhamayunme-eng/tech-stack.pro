export type PricingType = "Free" | "Freemium" | "Paid";

export type FAQItem = {
  question: string;
  answer: string;
};

export type Tool = {
  slug: string;
  name: string;
  logoMark: string;
  description: string;
  longDescription: string;
  pricing: PricingType;
  pricingNote: string;
  bestFor: string[];
  tags: string[];
  platforms: string[];
  worksInPakistan: boolean;
  urduSupport: boolean;
  affiliateUrl: string;
  rating: string;
  trustBadges: string[];
  features: string[];
  pros: string[];
  cons: string[];
  useCases: string[];
};

export type Category = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  accent: string;
  toolSlugs: string[];
  relatedWorkflows: string[];
  faq: FAQItem[];
};

export type ComparisonMetric = {
  label: string;
  toolA: string;
  toolB: string;
};

export type Comparison = {
  slug: string;
  toolA: string;
  toolB: string;
  title: string;
  description: string;
  winner: string;
  winnerReason: string;
  metrics: ComparisonMetric[];
  faq: FAQItem[];
};

export type Workflow = {
  slug: string;
  title: string;
  description: string;
  problem: string;
  outcome: string;
  estimatedPricing: string;
  toolSlugs: string[];
  steps: string[];
  tips: string[];
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  authorSlug: string;
  publishedAt: string;
  readingTime: string;
  relatedTools: string[];
  sections: { heading: string; body: string }[];
};

export type Author = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  social: string;
};

export type BestGuide = {
  slug: string;
  title: string;
  description: string;
  toolSlugs: string[];
  recommendations: string[];
  faq: FAQItem[];
};

export const tools: Tool[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    logoMark: "Ch",
    description: "Flexible AI assistant for writing, research, coding, planning, and daily workflows.",
    longDescription:
      "ChatGPT is a general AI assistant that fits many creator, freelancer, agency, and small business workflows. It is strong for drafting, brainstorming, research support, coding help, and repeatable task planning.",
    pricing: "Freemium",
    pricingNote: "Free plan available, paid plans unlock stronger models and higher limits.",
    bestFor: ["Writing", "Research", "Automation"],
    tags: ["General AI", "Writing", "Research"],
    platforms: ["Web", "iOS", "Android", "API"],
    worksInPakistan: true,
    urduSupport: true,
    affiliateUrl: "https://chat.openai.com",
    rating: "4.8",
    trustBadges: ["Free plan", "API", "Urdu prompts", "Team-ready"],
    features: ["Document drafting", "Code assistance", "Custom instructions", "File analysis", "Workflow planning"],
    pros: ["Very broad use cases", "Strong writing and coding help", "Useful free tier"],
    cons: ["Needs prompt quality for best results", "Can require paid plan for heavy work"],
    useCases: ["Client proposals", "Blog outlines", "Research summaries", "Code debugging"]
  },
  {
    slug: "claude",
    name: "Claude",
    logoMark: "Cl",
    description: "Long-context AI for thoughtful writing, analysis, documents, and complex reasoning.",
    longDescription:
      "Claude is especially useful for reading long documents, turning messy notes into polished writing, and producing careful strategic analysis for knowledge work.",
    pricing: "Freemium",
    pricingNote: "Free access with paid plans for higher usage and advanced models.",
    bestFor: ["Analysis", "Docs", "Strategy"],
    tags: ["Long context", "Writing", "Research"],
    platforms: ["Web", "Mobile", "API"],
    worksInPakistan: true,
    urduSupport: true,
    affiliateUrl: "https://claude.ai",
    rating: "4.7",
    trustBadges: ["Long context", "Clean writing", "Research workflows"],
    features: ["Long document review", "Reasoning", "Polished writing", "Research synthesis"],
    pros: ["Excellent long-form writing", "Strong analysis", "Good for document-heavy work"],
    cons: ["Availability and limits can vary", "Some teams may need paid access"],
    useCases: ["Policy summaries", "Client strategy docs", "Research notes", "Email drafts"]
  },
  {
    slug: "midjourney",
    name: "Midjourney",
    logoMark: "Mi",
    description: "Premium image generation for concepts, campaigns, moodboards, and creative direction.",
    longDescription:
      "Midjourney helps creators and agencies produce high-quality image concepts, visual directions, social creative, and campaign moodboards.",
    pricing: "Paid",
    pricingNote: "Paid plans are required for production use.",
    bestFor: ["Images", "Branding", "Creative"],
    tags: ["Image AI", "Design", "Campaigns"],
    platforms: ["Web", "Discord"],
    worksInPakistan: true,
    urduSupport: false,
    affiliateUrl: "https://www.midjourney.com",
    rating: "4.6",
    trustBadges: ["High quality visuals", "Creative teams", "Commercial plans"],
    features: ["Image generation", "Style references", "Creative variations", "Moodboard support"],
    pros: ["Excellent visual quality", "Great for concepts", "Strong creative control"],
    cons: ["Paid only", "Prompting takes practice"],
    useCases: ["Ad concepts", "Brand moodboards", "Product visuals", "YouTube thumbnails"]
  },
  {
    slug: "canva-ai",
    name: "Canva AI",
    logoMark: "Ca",
    description: "Design and content tools for social posts, presentations, brand assets, and quick visuals.",
    longDescription:
      "Canva AI combines approachable design tools with AI writing, image, presentation, and quick content creation features for non-designers and teams.",
    pricing: "Freemium",
    pricingNote: "Free plan available, premium templates and AI credits vary by plan.",
    bestFor: ["Design", "Creators", "Marketing"],
    tags: ["Design", "Social media", "Presentations"],
    platforms: ["Web", "iOS", "Android"],
    worksInPakistan: true,
    urduSupport: true,
    affiliateUrl: "https://www.canva.com",
    rating: "4.7",
    trustBadges: ["Free plan", "Templates", "Team libraries"],
    features: ["AI design", "Magic write", "Presentation builder", "Brand kits", "Social templates"],
    pros: ["Very easy to use", "Huge template library", "Good for quick client assets"],
    cons: ["Advanced designers may need more control", "Premium assets require paid plan"],
    useCases: ["Instagram posts", "Pitch decks", "Brand kits", "Client reports"]
  },
  {
    slug: "gemini",
    name: "Gemini",
    logoMark: "Ge",
    description: "Search-connected AI assistant for research, writing, planning, and productivity.",
    longDescription:
      "Gemini is useful when a workflow benefits from search-connected answers, productivity support, and quick research across general topics.",
    pricing: "Free",
    pricingNote: "Free access available, advanced plans may unlock more capabilities.",
    bestFor: ["Research", "Planning", "Productivity"],
    tags: ["Research", "Assistant", "Productivity"],
    platforms: ["Web", "Mobile"],
    worksInPakistan: true,
    urduSupport: true,
    affiliateUrl: "https://gemini.google.com",
    rating: "4.5",
    trustBadges: ["Free access", "Research", "Productivity"],
    features: ["Search-assisted answers", "Writing help", "Planning", "Summaries"],
    pros: ["Strong general research", "Easy to access", "Useful for quick answers"],
    cons: ["Output quality can vary by task", "Advanced workflows may need other tools"],
    useCases: ["Market research", "Planning", "Drafting", "Learning"]
  },
  {
    slug: "notion-ai",
    name: "Notion AI",
    logoMark: "No",
    description: "AI inside a workspace for notes, docs, project planning, summaries, and knowledge bases.",
    longDescription:
      "Notion AI helps teams and solo operators turn notes, tasks, docs, and project information into a living workspace with summaries and writing support.",
    pricing: "Paid",
    pricingNote: "Requires Notion workspace access and an AI add-on or eligible plan.",
    bestFor: ["Docs", "Teams", "Planning"],
    tags: ["Workspace", "Docs", "Teams"],
    platforms: ["Web", "Desktop", "Mobile"],
    worksInPakistan: true,
    urduSupport: true,
    affiliateUrl: "https://www.notion.so/product/ai",
    rating: "4.4",
    trustBadges: ["Workspace AI", "Docs", "Team knowledge"],
    features: ["AI summaries", "Meeting notes", "Workspace search", "Doc drafting", "Project planning"],
    pros: ["Great inside existing docs", "Good for team knowledge", "Clean workspace experience"],
    cons: ["Best only if you already use Notion", "AI is tied to workspace content"],
    useCases: ["SOPs", "Meeting summaries", "Project docs", "Content calendars"]
  },
  {
    slug: "cursor",
    name: "Cursor",
    logoMark: "Cu",
    description: "AI code editor for faster development, refactors, and codebase-aware assistance.",
    longDescription:
      "Cursor brings AI assistance directly into a coding environment, helping developers understand, change, and refactor codebases faster.",
    pricing: "Freemium",
    pricingNote: "Free usage available with paid tiers for heavier AI coding work.",
    bestFor: ["Coding", "Refactors", "Developers"],
    tags: ["Code", "IDE", "Developer tools"],
    platforms: ["Desktop"],
    worksInPakistan: true,
    urduSupport: false,
    affiliateUrl: "https://cursor.com",
    rating: "4.6",
    trustBadges: ["Codebase context", "Developer workflow", "Fast edits"],
    features: ["Inline edits", "Codebase chat", "Refactors", "Autocomplete", "Terminal assistance"],
    pros: ["Strong coding workflow", "Good codebase context", "Fast for refactors"],
    cons: ["Requires developer judgment", "Heavy usage may need paid plan"],
    useCases: ["Feature builds", "Bug fixes", "Refactors", "Code review"]
  },
  {
    slug: "windsurf",
    name: "Windsurf",
    logoMark: "Wi",
    description: "AI coding environment focused on agentic development and smooth code workflows.",
    longDescription:
      "Windsurf is built for AI-assisted software development with an emphasis on flow, project context, and multi-step coding support.",
    pricing: "Freemium",
    pricingNote: "Free tier available with paid plans for more advanced usage.",
    bestFor: ["Coding", "Agents", "Product builds"],
    tags: ["Code", "IDE", "Agents"],
    platforms: ["Desktop"],
    worksInPakistan: true,
    urduSupport: false,
    affiliateUrl: "https://windsurf.com",
    rating: "4.5",
    trustBadges: ["Agentic coding", "Project context", "Developer workflow"],
    features: ["AI coding agent", "Project context", "Inline edits", "Autocomplete", "Multi-file changes"],
    pros: ["Smooth AI coding flow", "Good for product work", "Modern interface"],
    cons: ["Requires careful review", "Feature set changes quickly"],
    useCases: ["MVP builds", "Code generation", "Refactors", "Developer productivity"]
  }
];

export const categories: Category[] = [
  {
    slug: "ai-writing-tools",
    title: "AI Writing Tools",
    description: "Compare AI tools for blogs, proposals, emails, scripts, and client content.",
    intro: "Use this category to choose writing tools by workflow, price, language support, and fit for freelancers or teams.",
    accent: "from-cyan-300 to-blue-500",
    toolSlugs: ["chatgpt", "claude", "notion-ai", "gemini"],
    relatedWorkflows: ["upwork-ai-workflow", "ai-workflow-for-content-creation"],
    faq: [
      { question: "Which AI writing tool is best for freelancers?", answer: "ChatGPT and Claude are the strongest starting points for proposals, briefs, and long-form writing." },
      { question: "Can these tools write in Urdu?", answer: "Several tools support Urdu prompts and translation workflows, especially ChatGPT, Claude, Gemini, and Canva AI." }
    ]
  },
  {
    slug: "ai-video-tools",
    title: "AI Video Tools",
    description: "Find tools for video ideas, scripts, thumbnails, editing, captions, and repurposing.",
    intro: "Video workflows usually need a stack rather than one tool. Start with ideation, design, editing, and distribution.",
    accent: "from-violet-300 to-fuchsia-500",
    toolSlugs: ["chatgpt", "canva-ai", "midjourney", "gemini"],
    relatedWorkflows: ["ai-workflow-for-content-creation"],
    faq: [
      { question: "Are AI video tools good for creators?", answer: "Yes. The best stacks combine scriptwriting, thumbnails, captioning, repurposing, and publishing support." },
      { question: "Can I start free?", answer: "Yes. Canva AI, ChatGPT, and Gemini give creators a useful free or freemium starting stack." }
    ]
  },
  {
    slug: "ai-tools-for-freelancers",
    title: "AI Tools for Freelancers",
    description: "Tools for proposals, research, delivery, client communication, design, and automation.",
    intro: "Freelancers need tools that save time, improve proposals, and help deliver client-ready work without adding complexity.",
    accent: "from-sky-300 to-indigo-500",
    toolSlugs: ["chatgpt", "claude", "canva-ai", "notion-ai", "gemini"],
    relatedWorkflows: ["upwork-ai-workflow"],
    faq: [
      { question: "What should freelancers automate first?", answer: "Start with proposals, project briefs, research summaries, client updates, and reusable templates." },
      { question: "Do these tools work in Pakistan?", answer: "Most listed tools work in Pakistan, though payment options and plan availability can vary." }
    ]
  },
  {
    slug: "ai-seo-tools",
    title: "AI SEO Tools",
    description: "AI tools for keyword research, topical maps, briefs, optimization, and reporting.",
    intro: "SEO teams can use AI to move faster from research to briefs, drafts, optimization, and reporting.",
    accent: "from-emerald-300 to-cyan-500",
    toolSlugs: ["chatgpt", "claude", "gemini", "notion-ai"],
    relatedWorkflows: ["ai-workflow-for-seo-agencies"],
    faq: [
      { question: "Can AI replace SEO strategy?", answer: "No. AI speeds research and production, but strong SEO still needs human judgment and real search data." },
      { question: "What is the best free SEO AI stack?", answer: "Start with ChatGPT or Gemini for ideation and pair it with your preferred keyword data source." }
    ]
  },
  {
    slug: "urdu-ai-tools",
    title: "Urdu AI Tools",
    description: "AI tools for Urdu writing, translation, content planning, research, and creator workflows.",
    intro: "This category focuses on tools that support Pakistani and Urdu users with practical writing and content workflows.",
    accent: "from-teal-300 to-blue-500",
    toolSlugs: ["chatgpt", "claude", "gemini", "canva-ai", "notion-ai"],
    relatedWorkflows: ["ai-workflow-for-content-creation", "upwork-ai-workflow"],
    faq: [
      { question: "Which tools support Urdu?", answer: "ChatGPT, Claude, Gemini, Canva AI, and Notion AI can support Urdu writing or translation workflows." },
      { question: "Are Urdu tools free?", answer: "Several tools have free or freemium access, but higher usage may need paid plans." }
    ]
  },
  {
    slug: "ai-proposal-writers",
    title: "AI Proposal Writers",
    description: "Write better proposals, cover letters, client replies, and outreach messages faster.",
    intro: "Proposal tools are best when they help you personalize the offer, show relevant proof, and keep your tone clear.",
    accent: "from-blue-300 to-violet-500",
    toolSlugs: ["chatgpt", "claude", "gemini"],
    relatedWorkflows: ["upwork-ai-workflow"],
    faq: [
      { question: "Can AI write winning Upwork proposals?", answer: "AI can help structure and personalize proposals, but results depend on targeting, proof, and your offer." },
      { question: "Should proposals sound automated?", answer: "No. Use AI for clarity and speed, then edit for specificity and a human tone." }
    ]
  }
];

export const comparisons: Comparison[] = [
  {
    slug: "chatgpt-vs-claude",
    toolA: "chatgpt",
    toolB: "claude",
    title: "ChatGPT vs Claude",
    description: "Compare the two leading AI assistants for writing, research, documents, and daily workflows.",
    winner: "ChatGPT",
    winnerReason: "ChatGPT is the better all-rounder for most mixed workflows, while Claude is excellent for long documents and careful writing.",
    metrics: [
      { label: "Pricing", toolA: "Freemium", toolB: "Freemium" },
      { label: "Free plan", toolA: "Yes", toolB: "Yes" },
      { label: "API", toolA: "Yes", toolB: "Yes" },
      { label: "Integrations", toolA: "Broad ecosystem", toolB: "Growing ecosystem" },
      { label: "AI quality", toolA: "Excellent generalist", toolB: "Excellent long-form reasoning" },
      { label: "Workflow suitability", toolA: "Broad daily workflows", toolB: "Documents and analysis" },
      { label: "Team features", toolA: "Available", toolB: "Available" },
      { label: "Learning curve", toolA: "Easy", toolB: "Easy" }
    ],
    faq: [
      { question: "Which is better for freelancers?", answer: "ChatGPT is usually better as a first all-round AI assistant, while Claude is excellent for long client documents." },
      { question: "Should I use both?", answer: "Many power users do. Use ChatGPT for broad workflows and Claude for long-form review or careful writing." }
    ]
  },
  {
    slug: "canva-ai-vs-adobe-express",
    toolA: "canva-ai",
    toolB: "midjourney",
    title: "Canva AI vs Adobe Express",
    description: "Compare quick design workflows for creators, marketers, and small agencies.",
    winner: "Canva AI",
    winnerReason: "Canva AI is the easier choice for fast social, presentation, and brand template workflows.",
    metrics: [
      { label: "Pricing", toolA: "Freemium", toolB: "Freemium" },
      { label: "Free plan", toolA: "Yes", toolB: "Yes" },
      { label: "API", toolA: "Limited", toolB: "Limited" },
      { label: "Integrations", toolA: "Strong template ecosystem", toolB: "Creative cloud ecosystem" },
      { label: "AI quality", toolA: "Strong for production layouts", toolB: "Strong for quick edits" },
      { label: "Workflow suitability", toolA: "Creators and agencies", toolB: "Design teams" },
      { label: "Team features", toolA: "Strong", toolB: "Strong" },
      { label: "Learning curve", toolA: "Very easy", toolB: "Easy" }
    ],
    faq: [
      { question: "Which is faster for social content?", answer: "Canva AI is usually faster for template-based social content." },
      { question: "Which is better for agencies?", answer: "Canva AI is easier for non-designers and repeatable client templates." }
    ]
  },
  {
    slug: "cursor-vs-windsurf",
    toolA: "cursor",
    toolB: "windsurf",
    title: "Cursor vs Windsurf",
    description: "Compare AI coding environments before choosing your developer workflow.",
    winner: "Cursor",
    winnerReason: "Cursor is a strong default for codebase-aware editing, while Windsurf is compelling for agentic product-building flows.",
    metrics: [
      { label: "Pricing", toolA: "Freemium", toolB: "Freemium" },
      { label: "Free plan", toolA: "Yes", toolB: "Yes" },
      { label: "API", toolA: "No", toolB: "No" },
      { label: "Integrations", toolA: "Editor and model ecosystem", toolB: "Editor and agent workflow" },
      { label: "AI quality", toolA: "Strong for code context", toolB: "Strong for multi-step edits" },
      { label: "Workflow suitability", toolA: "Refactors and daily coding", toolB: "Agentic feature building" },
      { label: "Team features", toolA: "Available", toolB: "Available" },
      { label: "Learning curve", toolA: "Medium", toolB: "Medium" }
    ],
    faq: [
      { question: "Which is better for beginners?", answer: "Cursor is often easier to adopt if you already know VS Code-style workflows." },
      { question: "Can AI code tools replace developers?", answer: "No. They speed implementation but still require architecture, testing, and review." }
    ]
  }
];

export const workflows: Workflow[] = [
  {
    slug: "ai-workflow-for-seo-agencies",
    title: "AI workflow for SEO agencies",
    description: "Turn a client brief into keyword clusters, content outlines, optimized drafts, and reporting assets.",
    problem: "SEO agencies lose time moving between research, briefs, writing, optimization, and reporting.",
    outcome: "A repeatable operating system for faster content planning and client delivery.",
    estimatedPricing: "Start free, then expect $20 to $60/month for heavier AI usage.",
    toolSlugs: ["chatgpt", "claude", "gemini", "notion-ai"],
    steps: ["Clarify the target audience and offer", "Generate keyword clusters and content angles", "Create briefs and outlines", "Draft and optimize content", "Summarize outcomes for client reporting"],
    tips: ["Keep a reusable prompt library", "Review facts manually", "Use human editors for final quality"]
  },
  {
    slug: "upwork-ai-workflow",
    title: "AI workflow for Upwork freelancers",
    description: "Find suitable projects, write tailored proposals, prepare samples, and follow up with confidence.",
    problem: "Freelancers waste hours writing generic proposals that do not connect to the buyer's real problem.",
    outcome: "A faster proposal system that improves clarity, relevance, and follow-up consistency.",
    estimatedPricing: "Free to $20/month for most freelancers starting out.",
    toolSlugs: ["chatgpt", "claude", "canva-ai", "notion-ai"],
    steps: ["Analyze the job post", "Extract buyer pain points", "Draft a tailored proposal", "Create a proof asset or mini-plan", "Track follow-ups in a workspace"],
    tips: ["Never paste a generic proposal", "Add proof from your portfolio", "Keep proposals short and specific"]
  },
  {
    slug: "ai-workflow-for-content-creation",
    title: "AI workflow for content creation",
    description: "Move from idea to script, visuals, captions, repurposed posts, and publishing checklists.",
    problem: "Creators need to ship consistently across formats without losing quality or brand voice.",
    outcome: "A content engine that turns one idea into multiple publish-ready assets.",
    estimatedPricing: "Free to $40/month depending on visual and design needs.",
    toolSlugs: ["chatgpt", "canva-ai", "midjourney", "gemini"],
    steps: ["Collect content ideas", "Write scripts and hooks", "Create visuals and thumbnails", "Repurpose into captions and posts", "Publish with a repeatable checklist"],
    tips: ["Keep a voice guide", "Batch related ideas", "Track what converts"]
  }
];

export const authors: Author[] = [
  {
    slug: "teck-stack-editorial",
    name: "Teck Stack Editorial",
    role: "AI tools research team",
    bio: "The Teck Stack editorial team tests AI tools, maps practical workflows, and writes buying guides for freelancers, agencies, creators, and Pakistani users.",
    expertise: ["AI tools", "Freelancing", "SaaS workflows", "SEO", "Creator systems"],
    social: "https://tech-stack.pro"
  }
];

export const articles: Article[] = [
  {
    slug: "how-to-choose-an-ai-tool-stack",
    title: "How to choose an AI tool stack without wasting money",
    description: "A practical framework for choosing AI tools by workflow, budget, and output quality.",
    category: "Buying guide",
    authorSlug: "teck-stack-editorial",
    publishedAt: "2026-05-13",
    readingTime: "6 min read",
    relatedTools: ["chatgpt", "claude", "notion-ai"],
    sections: [
      { heading: "Start with the workflow", body: "The best AI stack is not the stack with the most famous tools. It is the stack that removes friction from the work you repeat every week." },
      { heading: "Check the output quality", body: "Compare tools using the same prompt, the same source material, and the same deadline. Good comparisons are practical, not abstract." },
      { heading: "Watch the hidden costs", body: "A free plan is useful for testing, but your real cost includes limits, collaboration, export options, and the time needed to fix weak outputs." }
    ]
  },
  {
    slug: "best-ai-tools-for-pakistani-freelancers",
    title: "Best AI tools for Pakistani freelancers in 2026",
    description: "A focused guide to AI tools that help with proposals, client work, Urdu support, and delivery.",
    category: "Freelancing",
    authorSlug: "teck-stack-editorial",
    publishedAt: "2026-05-13",
    readingTime: "7 min read",
    relatedTools: ["chatgpt", "claude", "canva-ai"],
    sections: [
      { heading: "Proposal speed matters", body: "Freelancers need a workflow that helps them understand the buyer, write clearly, and respond faster without sounding automated." },
      { heading: "Urdu support is useful", body: "Urdu support helps with local research, bilingual content, and explaining ideas to Pakistani clients or team members." },
      { heading: "Pick tools you will actually use", body: "A simple stack that gets used daily beats a complicated stack that looks impressive but slows delivery." }
    ]
  },
  {
    slug: "ai-seo-workflow-for-agencies",
    title: "An AI SEO workflow agencies can use for client delivery",
    description: "How agencies can use AI for briefs, content operations, and reporting without losing strategy.",
    category: "SEO",
    authorSlug: "teck-stack-editorial",
    publishedAt: "2026-05-13",
    readingTime: "8 min read",
    relatedTools: ["chatgpt", "claude", "gemini"],
    sections: [
      { heading: "AI improves throughput", body: "AI helps teams move faster through ideation, clustering, briefs, and first drafts, but strategy still needs human ownership." },
      { heading: "Build reusable prompts", body: "Agencies should turn their best thinking into reusable prompt systems and review checklists." },
      { heading: "Measure client outcomes", body: "The workflow is only useful if it improves delivery speed, content quality, reporting clarity, and client retention." }
    ]
  }
];

export const bestGuides: BestGuide[] = [
  {
    slug: "best-ai-tools-for-upwork",
    title: "Best AI tools for Upwork freelancers",
    description: "A ranked starter stack for finding projects, writing proposals, preparing samples, and managing delivery.",
    toolSlugs: ["chatgpt", "claude", "canva-ai", "notion-ai"],
    recommendations: ["Use ChatGPT for proposal structure", "Use Claude for longer client documents", "Use Canva AI for quick proof assets", "Use Notion AI for project tracking"],
    faq: [
      { question: "Can AI help me win more Upwork jobs?", answer: "AI can improve speed and clarity, but your targeting, proof, and offer still matter most." },
      { question: "Which tool should I start with?", answer: "Start with ChatGPT or Claude, then add Canva AI if your proposals need visual samples." }
    ]
  },
  {
    slug: "best-ai-proposal-generators",
    title: "Best AI proposal generators",
    description: "Tools that help freelancers and agencies write clearer, more specific proposals and client messages.",
    toolSlugs: ["chatgpt", "claude", "gemini"],
    recommendations: ["Use ChatGPT for fast first drafts", "Use Claude for polished proposal language", "Use Gemini for quick research support"],
    faq: [
      { question: "Should I send AI proposals as-is?", answer: "No. Edit every proposal so it matches the buyer's project and your actual experience." },
      { question: "Are proposal generators free?", answer: "Most general AI assistants have free or freemium plans that can help with proposals." }
    ]
  },
  {
    slug: "best-ai-tools-for-content-creators",
    title: "Best AI tools for content creators",
    description: "A practical creator stack for ideation, scripting, design, thumbnails, and repurposing.",
    toolSlugs: ["chatgpt", "canva-ai", "midjourney", "gemini"],
    recommendations: ["Use ChatGPT for scripts", "Use Canva AI for layouts", "Use Midjourney for visual concepts", "Use Gemini for quick topic research"],
    faq: [
      { question: "Can creators start free?", answer: "Yes. ChatGPT, Gemini, and Canva AI give creators a strong free or freemium starting stack." },
      { question: "Which tool is best for thumbnails?", answer: "Canva AI is easiest for production thumbnails, while Midjourney is strong for high-end visual concepts." }
    ]
  }
];

export const homepageFaqs: FAQItem[] = [
  { question: "What is Teck Stack?", answer: "Teck Stack is an AI tools discovery and comparison platform built to help people choose practical software stacks for real work." },
  { question: "Is Teck Stack free?", answer: "Yes. Tool discovery, comparison pages, guides, and workflows are designed to be free to browse." },
  { question: "Do you use affiliate links?", answer: "Yes, some recommendations may include affiliate links. The goal is transparent recommendations that still prioritize fit and usefulness." },
  { question: "Who is this website for?", answer: "Teck Stack is for freelancers, agencies, creators, small businesses, and Pakistani or Urdu users exploring AI workflows." },
  { question: "Will you cover tools that work in Pakistan?", answer: "Yes. We highlight tools, payment considerations, Urdu support, and practical use cases relevant to Pakistani users." }
];
