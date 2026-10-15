"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ChangelogLatestSummarySection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [surface, setSurface] = useState("All surfaces");
  const [classification, setClassification] = useState("All types");
  const [impact, setImpact] = useState("All impact");
  const [sort, setSort] = useState("Newest first");

  const handleReset = () => {
    setSearchTerm("");
    setSurface("All surfaces");
    setClassification("All types");
    setImpact("All impact");
    setSort("Newest first");
  };

  return (
    <section id="browse-changes" className="relative bg-[#071426] px-6 py-20 sm:px-10 lg:px-[160px] lg:py-[95px]">
      {/* Background with overlay */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/changelog/summary-bg-2b87d1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,38,0.9)_0%,rgba(7,20,38,0.95)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1120px] flex flex-col gap-[36px]">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-[12px]">
          <h2 className="font-dm-serif text-3xl font-normal leading-[1.15] text-white-solid sm:text-4xl lg:text-[46px] lg:leading-[52.9px]">
            Browse published changes
          </h2>
          <p className="max-w-[860px] font-manrope text-[15px] font-normal leading-[25px] text-white-solid/90 sm:text-[16px] sm:leading-[26.4px]">
            Search and filter approved public entries. Filters apply to the published record fields only.
          </p>
        </div>

        {/* Filter Card */}
        <div className="flex w-full flex-col gap-[20px] rounded-[12px] border border-[#E2E8F0] bg-white-solid p-6 sm:p-[28px_28px_32px] shadow-sm">
          <div className="grid grid-cols-1 items-end gap-[16px] md:grid-cols-[minmax(0,2fr)_repeat(4,minmax(0,1fr))]">
            {/* Search Input */}
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="search-input" className="flex items-center gap-[6px] font-manrope text-[11.5px] font-extrabold uppercase tracking-[0.05em] text-[#071426]">
                <Image
                  src="/changelog/icons/icon_334_6638.svg"
                  alt=""
                  width={13}
                  height={13}
                  className="shrink-0"
                />
                SEARCH CHANGES
              </label>
              <input
                id="search-input"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Title, summary, or component"
                className="h-[48px] w-full rounded-[8px] border border-[#E2E8F0] bg-white-solid px-[15px] font-manrope text-[14px] text-[#071426] placeholder-[#94A3B8] focus:border-[#2563EB] focus:outline-none"
              />
            </div>

            {/* Surface Select */}
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="surface-select" className="font-manrope text-[11.5px] font-extrabold uppercase tracking-[0.05em] text-[#071426]">
                SURFACE
              </label>
              <select
                id="surface-select"
                value={surface}
                onChange={(e) => setSurface(e.target.value)}
                className="h-[48px] w-full appearance-none rounded-[8px] border border-[#E2E8F0] bg-white-solid px-[14px] font-manrope text-[14px] text-[#071426] focus:border-[#2563EB] focus:outline-none cursor-pointer"
              >
                <option>All surfaces</option>
                <option>API</option>
                <option>SDK</option>
                <option>Console</option>
                <option>Webhooks</option>
              </select>
            </div>

            {/* Classification Select */}
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="classification-select" className="font-manrope text-[11.5px] font-extrabold uppercase tracking-[0.05em] text-[#071426]">
                CLASSIFICATION
              </label>
              <select
                id="classification-select"
                value={classification}
                onChange={(e) => setClassification(e.target.value)}
                className="h-[48px] w-full appearance-none rounded-[8px] border border-[#E2E8F0] bg-white-solid px-[14px] font-manrope text-[14px] text-[#071426] focus:border-[#2563EB] focus:outline-none cursor-pointer"
              >
                <option>All types</option>
                <option>Feature</option>
                <option>Improvement</option>
                <option>Breaking</option>
                <option>Fix</option>
              </select>
            </div>

            {/* Impact Select */}
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="impact-select" className="font-manrope text-[11.5px] font-extrabold uppercase tracking-[0.05em] text-[#071426]">
                IMPACT
              </label>
              <select
                id="impact-select"
                value={impact}
                onChange={(e) => setImpact(e.target.value)}
                className="h-[48px] w-full appearance-none rounded-[8px] border border-[#E2E8F0] bg-white-solid px-[14px] font-manrope text-[14px] text-[#071426] focus:border-[#2563EB] focus:outline-none cursor-pointer"
              >
                <option>All impact</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            {/* Sort Select */}
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="sort-select" className="font-manrope text-[11.5px] font-extrabold uppercase tracking-[0.05em] text-[#071426]">
                SORT
              </label>
              <select
                id="sort-select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="h-[48px] w-full appearance-none rounded-[8px] border border-[#E2E8F0] bg-white-solid px-[14px] font-manrope text-[14px] text-[#071426] focus:border-[#2563EB] focus:outline-none cursor-pointer"
              >
                <option>Newest first</option>
                <option>Oldest first</option>
              </select>
            </div>
          </div>

          {/* Filter Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#F1F5F9] pt-4">
            <span className="font-manrope text-[15px] font-bold text-[#071426]">
              0 published entries
            </span>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex h-[42px] items-center gap-[8px] rounded-[6px] border border-[#2563EB] bg-white-solid px-[18px] font-manrope text-[14px] font-bold text-[#2563EB] transition-colors hover:bg-blue-50"
            >
              <Image
                src="/changelog/icons/icon_334_6678.svg"
                alt=""
                width={16}
                height={16}
                className="shrink-0"
              />
              Reset filters
            </button>
          </div>
        </div>

        {/* Blue Callout Card */}
        <div className="flex items-start gap-[14px] rounded-[12px] border-l-[4px] border-[#2563EB] bg-white-solid p-[22px_26px]">
          <div className="flex shrink-0 items-center justify-center pt-0.5">
            <Image
              src="/changelog/icons/icon_334_6683.svg"
              alt=""
              width={24}
              height={24}
              className="shrink-0"
            />
          </div>
          <p className="font-manrope text-[14.7px] font-normal leading-[24.29px] text-[#071426]">
            <strong className="font-bold">Published entries only.</strong> Drafts,
            embargoed notes, and private release evidence are never shown on this
            page. Corrections keep
            <br className="hidden lg:inline" />
            their original revision and show a visible update note.
          </p>
        </div>

        {/* Empty State Status Box */}
        <div className="flex flex-col items-center justify-center gap-[16px] rounded-[12px] border border-dashed border-white/70 bg-white/10 p-[48px_32px] text-center backdrop-blur-sm">
          <Image
            src="/changelog/icons/icon_334_6612.svg"
            alt=""
            width={52}
            height={52}
            className="shrink-0"
          />

          <h3 className="max-w-[702px] font-dm-serif text-[28px] font-normal leading-[36px] text-white-solid sm:text-[36px] sm:leading-[42px]">
            No public changelog entries have been published yet.
          </h3>

          <p className="max-w-[620px] font-manrope text-[15px] font-normal leading-[25px] text-white-solid/85 sm:text-[16px] sm:leading-[26.4px]">
            When approved entries are published, they appear here with their
            affected areas, impact, and links to authoritative guidance. In the
            meantime, explore developer documentation or contact the team for
            approved guidance.
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-[16px]">
            <Link
              href="#documentation"
              className="inline-flex h-[54px] items-center gap-[10px] rounded-[6px] bg-[#2563EB] px-[26px] font-manrope text-[15.2px] font-bold leading-[25.84px] text-white-solid transition-colors hover:bg-blue-700"
            >
              <Image
                src="/changelog/icons/icon_340_978.svg"
                alt=""
                width={16}
                height={16}
                className="shrink-0 brightness-0 invert"
              />
              Explore developer documentation
            </Link>

            <Link
              href="#contact"
              className="inline-flex h-[54px] items-center gap-[10px] rounded-[6px] border border-white-solid/80 bg-transparent px-[26px] font-manrope text-[15.2px] font-bold leading-[25.84px] text-white-solid transition-colors hover:bg-white-solid/10"
            >
              <Image
                src="/changelog/icons/icon_334_6626.svg"
                alt=""
                width={16}
                height={16}
                className="shrink-0 brightness-0 invert"
              />
              Contact the team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
