import type { Metadata } from "next";

const siteName = "Teck Stack";
const siteUrl = "https://tech-stack.pro";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
};

export function createMetadata({ title, description, path = "/" }: SeoInput): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: url
    },
    other: {
      "verify-admitad": "4b1685ead3"
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
