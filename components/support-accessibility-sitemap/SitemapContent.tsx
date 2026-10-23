"use client";

import { useMemo, useState } from "react";
import SitemapHeroSection from "./SitemapHeroSection";
import SitemapPlatformIdentitySection from "./SitemapPlatformIdentitySection";
import SitemapDevelopersIntegrateSection from "./SitemapDevelopersIntegrateSection";
import SitemapResourcesCompanySection from "./SitemapResourcesCompanySection";
import SitemapSupportAuthoritySection from "./SitemapSupportAuthoritySection";
import SitemapCtaSection from "./SitemapCtaSection";
import { SITEMAP_CATEGORIES } from "./sitemapData";

export default function SitemapContent() {
  const [searchQuery, setSearchQuery] = useState("");

  const matchCount = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return 0;

    let count = 0;
    for (const cat of SITEMAP_CATEGORIES) {
      for (const item of cat.items) {
        if (
          item.name.toLowerCase().includes(q) ||
          cat.title.toLowerCase().includes(q) ||
          (item.description && item.description.toLowerCase().includes(q))
        ) {
          count++;
        }
      }
    }
    return count;
  }, [searchQuery]);

  return (
    <>
      {/* 1. CL-01 Hero & Direct Answer with Search */}
      <SitemapHeroSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        matchCount={matchCount}
      />

      {/* 2. Platform, Identity & Solutions Sections */}
      <SitemapPlatformIdentitySection searchQuery={searchQuery} />

      {/* 3. Developers, Integrations & Security Operations Sections */}
      <SitemapDevelopersIntegrateSection searchQuery={searchQuery} />

      {/* 4. Resources, Pricing & Company Sections */}
      <SitemapResourcesCompanySection searchQuery={searchQuery} />

      {/* 5. Support, Accessibility, Legal & Authority Sections */}
      <SitemapSupportAuthoritySection searchQuery={searchQuery} />

      {/* 6. Section 20 - Final CTA */}
      <SitemapCtaSection />
    </>
  );
}
