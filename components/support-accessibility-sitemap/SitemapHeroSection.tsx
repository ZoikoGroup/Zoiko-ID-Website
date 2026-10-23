"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";

interface SitemapHeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  matchCount?: number;
}

export default function SitemapHeroSection({
  searchQuery,
  onSearchChange,
  matchCount,
}: SitemapHeroSectionProps) {
  const isSearching = searchQuery.trim().length > 0;
  const hasNoMatches = isSearching && matchCount === 0;

  return (
    <section
      className="relative -mt-20 overflow-hidden px-6 pb-20 pt-36 sm:-mt-24 sm:px-10 sm:pt-40 lg:-mt-[116px] lg:px-20 lg:pb-24 lg:pt-[175px] xl:px-40"
      style={{
        backgroundColor: "#071426",
        backgroundImage: `linear-gradient(180deg, rgba(7, 20, 38, 0.90) 0%, rgba(7, 20, 38, 0.95) 100%), url('/support-accessibility-sitemap/sitemap-hero-bg.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Subtle Cyan Radial Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,184,214,0.18)_0%,rgba(34,184,214,0)_70%)] blur-[60px]"
      />

      <div className="relative mx-auto flex w-full max-w-[1240px] flex-col items-center justify-between gap-12 lg:flex-row lg:items-center lg:gap-16">
        {/* Left: Text & CTA */}
        <div className="flex w-full flex-1 flex-col items-start gap-6 text-left">
          <h1 className="font-dm-serif text-4xl font-normal leading-[1.12] text-white-solid sm:text-6xl lg:text-[72px] lg:leading-[82.8px]">
            Sitemap
          </h1>

          <div className="flex max-w-[644px] flex-col gap-4 font-manrope text-base font-normal leading-[29.92px] text-[#CBD5E1] sm:text-[17.6px]">
            <p>
              Find the Zoiko iD information you need. Browse platform pages, solutions,
              documentation, trust resources, and support destinations.
            </p>
            <p>
              Browse Zoiko iD’s public pages, documentation, security information, and
              support resources.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 pt-4">
            <Link
              href="#support-accessibility"
              className="inline-flex items-center justify-center rounded-lg bg-[#2563EB] px-6 py-3.5 font-manrope text-[15px] font-bold text-white-solid shadow-[0px_8px_20px_0px_rgba(37,99,235,0.30)] transition-all duration-200 hover:bg-blue-600 hover:shadow-[0px_10px_24px_0px_rgba(37,99,235,0.40)] hover:-translate-y-0.5"
            >
              Choose an enquiry type
            </Link>

            <Link
              href="#support-accessibility"
              className="inline-flex items-center justify-center rounded-lg border border-white-solid/80 bg-transparent px-6 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid transition-all duration-200 hover:bg-white-solid/10 hover:-translate-y-0.5"
            >
              Explore Help &amp; Support
            </Link>
          </div>
        </div>

        {/* Right: Search Box Card */}
        <div
          aria-label="Conceptual illustration: an actor has a proven identity, but authority is a separate bounded element. Text version follows in the next section."
          className="flex w-full max-w-[453px] shrink-0 flex-col gap-3 rounded-[22px] bg-[#F1F5F9] p-7 sm:p-[34px]"
        >
          <div className="flex flex-col gap-3 rounded-[20px] border border-[#D9E1EC] bg-white-solid p-6 sm:p-[34px]">
            {/* Heading */}
            <div className="pb-1.5">
              <h3 className="font-dm-serif text-[26px] font-normal leading-[31.2px] text-[#0B1B33]">
                Search site pages
              </h3>
            </div>

            {/* Search Input */}
            <div className="relative flex h-[52px] w-full items-center rounded-xl border border-[#C5D2E2] bg-white-solid px-4 transition-colors focus-within:border-[#2563EB] focus-within:ring-2 focus-within:ring-[#2563EB]/20">
              <Search
                aria-hidden="true"
                className="size-5 shrink-0 text-[#94A3B8]"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search site pages"
                className="h-full w-full bg-transparent pl-3 pr-2 font-manrope text-base font-normal text-[#0B1B33] placeholder:text-[#94A3B8] focus:outline-none"
              />
              {isSearching && (
                <button
                  type="button"
                  onClick={() => onSearchChange("")}
                  className="rounded p-1 text-[#94A3B8] hover:text-[#0B1B33]"
                  aria-label="Clear search"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>

            {/* Helper text */}
            <p className="font-manrope text-[13px] font-normal leading-[20.8px] text-[#5B6B82]">
              Matches public page names and approved descriptions only.
            </p>

            {/* Status box */}
            <div className="rounded-xl bg-[#F3F6FA] p-[18px]">
              <p className="font-manrope text-sm font-normal leading-[22.4px] text-[#334155]">
                {hasNoMatches ? (
                  "No pages match your search. Try another term or browse all sections."
                ) : isSearching ? (
                  <>
                    Found{" "}
                    <strong className="font-semibold text-[#0B1B33]">
                      {matchCount}
                    </strong>{" "}
                    matching page{matchCount === 1 ? "" : "s"} across the directory.
                  </>
                ) : (
                  "No pages match your search. Try another term or browse all sections."
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
