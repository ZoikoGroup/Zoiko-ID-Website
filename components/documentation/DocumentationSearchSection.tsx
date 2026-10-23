"use client";

import { useState } from "react";
import { Search } from "lucide-react";

interface DocumentationSearchSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const filterOptions = [
  "All types",
  "Concept",
  "How-to",
  "Integration reference",
  "Policy",
];

export default function DocumentationSearchSection({
  view = "all",
}: DocumentationSearchSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All types");

  return (
    <section id="search" className="w-full bg-white">
      {/* DESKTOP VERSION (hidden sm:block) */}
      {showDesktop && (
        <div className="hidden sm:block py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Heading & Subtitle */}
              <div className="lg:col-span-4">
                <h2 className="font-dm-serif text-3xl font-normal leading-[1.15] tracking-tight text-[#071324] sm:text-4xl lg:text-[44px]">
                  Search by
                  <br />
                  topic or
                  <br />
                  question
                </h2>
                <p className="mt-4 max-w-[280px] font-manrope text-xs leading-relaxed text-[#64748b] sm:text-[13px]">
                  Search matches published documentation only. Typed queries are not recorded in analytics.
                </p>
              </div>

              {/* Right Column: Search Bar, Filter Pills & Result State Card */}
              <div className="flex flex-col gap-6 lg:col-span-8">
                {/* Search Bar Input Container */}
                <div className="flex items-center rounded-xl border border-slate-200/90 bg-white p-2 shadow-sm transition-all focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-100">
                  <div className="flex flex-1 items-center gap-3 pl-3">
                    <Search className="size-4 shrink-0 text-slate-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search documentation by topic or question"
                      className="w-full bg-transparent font-manrope text-xs text-[#071324] placeholder-slate-400 outline-none sm:text-sm"
                    />
                  </div>
                  <button
                    type="button"
                    className="rounded-lg bg-[#071324] px-6 py-2.5 font-manrope text-xs font-semibold text-white transition hover:bg-slate-800"
                  >
                    Search
                  </button>
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap items-center gap-2.5">
                  {filterOptions.map((option) => {
                    const isSelected = activeFilter === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setActiveFilter(option)}
                        className={`rounded-full px-4 py-1.5 font-manrope text-xs font-medium transition ${
                          isSelected
                            ? "bg-[#071324] text-white shadow-sm"
                            : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-[#071324]"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                {/* No Results Card */}
                <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-7">
                  <div className="inline-flex items-center rounded-full bg-[#f1f5f9] px-3 py-1">
                    <span className="font-mono text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                      NO RESULTS SHOWN
                    </span>
                  </div>

                  <h3 className="mt-3.5 font-manrope text-[15px] font-bold text-[#071324] sm:text-base">
                    No documentation matches your search
                  </h3>

                  <p className="mt-1.5 font-manrope text-xs leading-relaxed text-[#64748b] sm:text-[12.5px]">
                    Try a broader term or browse the topic families. Results are never generated, so nothing is invented when a search has no match.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE VERSION (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden bg-[#f4f7fa] px-5 py-12 border-t border-slate-200/60">
          {/* Category Number & Eyebrow */}
          <div>
            <p className="font-mono text-[10.5px] font-bold uppercase tracking-widest text-[#0ea5e9]">
              01 · SEARCH AND FINDER
            </p>
            <div className="mt-1.5 h-[2px] w-12 bg-[#0ea5e9]" />
          </div>

          {/* Heading */}
          <h2 className="mt-4 font-dm-serif text-[30px] font-normal leading-[1.2] tracking-tight text-[#071324]">
            Search by topic or question
          </h2>

          {/* Subtitle */}
          <p className="mt-3 font-manrope text-xs leading-relaxed text-[#64748b]">
            Search matches published documentation only. Typed queries are not recorded in analytics.
          </p>

          {/* Search Card Container */}
          <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-xs">
            <div className="flex items-start gap-2.5 px-1 py-1">
              <Search className="mt-0.5 size-4 shrink-0 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search documentation by topic or question"
                className="w-full bg-transparent font-manrope text-xs text-[#071324] placeholder:text-slate-400 outline-none"
              />
            </div>

            <button
              type="button"
              className="mt-3.5 w-full rounded-xl bg-[#0c192c] py-3 text-center font-manrope text-xs font-semibold text-white shadow-xs transition hover:bg-[#132742]"
            >
              Search
            </button>
          </div>

          {/* Filter Pills */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {filterOptions.map((option) => {
              const isSelected = activeFilter === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setActiveFilter(option)}
                  className={`rounded-full px-4 py-1.5 font-manrope text-[11px] font-medium transition ${
                    isSelected
                      ? "bg-[#0c192c] text-white shadow-xs"
                      : "border border-slate-200/80 bg-white text-slate-600 hover:border-slate-300"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {/* No Results Card */}
          <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-5.5 shadow-xs">
            <div className="inline-flex items-center rounded-full bg-[#edf2f7] px-3 py-1">
              <span className="font-mono text-[9px] font-bold tracking-wider text-slate-600 uppercase">
                NO RESULTS SHOWN
              </span>
            </div>

            <h3 className="mt-3 font-manrope text-[14px] font-bold leading-snug text-[#071324]">
              No documentation matches your search
            </h3>

            <p className="mt-2 font-manrope text-xs leading-relaxed text-[#64748b]">
              Try a broader term or browse the topic families. Results are never generated, so nothing is invented when a search has no match.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
