import type { Metadata } from "next";
import SitemapContent from "@/components/support-accessibility-sitemap/SitemapContent";

export const metadata: Metadata = {
  title: "Sitemap | Support & Accessibility | Zoiko iD",
  description:
    "Find the Zoiko iD information you need. Browse platform pages, solutions, documentation, trust resources, and support destinations.",
};

export default function SupportAccessibilitySitemapPage() {
  return <SitemapContent />;
}
