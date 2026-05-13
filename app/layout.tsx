import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://teck-stack.pro"),
  title: "Teck Stack - Find the Best AI Tools and Workflows",
  description:
    "Discover, compare, and choose the best AI tools, SaaS products, and workflows for freelancers, agencies, creators, and Pakistani users.",
  openGraph: {
    title: "Teck Stack - Find the Best AI Tools and Workflows",
    description:
      "Discover, compare, and choose the best AI tools, SaaS products, and workflows for freelancers, agencies, creators, and Pakistani users.",
    url: "https://teck-stack.pro",
    siteName: "Teck Stack",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
