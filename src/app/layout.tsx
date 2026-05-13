import type { ReactNode } from "react";
import { DM_Sans, Poppins } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { createMetadata } from "@/lib/seo";
import "@/styles/globals.css";

const heading = DM_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

const body = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

export const metadata = createMetadata({
  title: "Teck Stack - Find the Best AI Tools and Workflows",
  description:
    "Discover, compare, and choose the best AI tools, SaaS products, and workflows for freelancers, agencies, creators, and Pakistani users."
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
