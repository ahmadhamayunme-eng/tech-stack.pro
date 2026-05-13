import { articles, authors, bestGuides, categories, comparisons, tools, workflows } from "@/data/site";

export function getTool(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getComparison(slug: string) {
  return comparisons.find((comparison) => comparison.slug === slug);
}

export function getWorkflow(slug: string) {
  return workflows.find((workflow) => workflow.slug === slug);
}

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getAuthor(slug: string) {
  return authors.find((author) => author.slug === slug);
}

export function getBestGuide(slug: string) {
  return bestGuides.find((guide) => guide.slug === slug);
}

export function getToolsBySlugs(slugs: string[]) {
  return slugs.map(getTool).filter((tool): tool is NonNullable<typeof tool> => Boolean(tool));
}

export function getRelatedComparisons(toolSlug: string) {
  return comparisons.filter((comparison) => comparison.toolA === toolSlug || comparison.toolB === toolSlug);
}

export function getArticlesByAuthor(authorSlug: string) {
  return articles.filter((article) => article.authorSlug === authorSlug);
}
