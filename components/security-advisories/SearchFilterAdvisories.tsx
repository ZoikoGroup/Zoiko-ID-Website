"use client";

import { useState } from "react";
import { Search, FolderOpen, AlertCircle, X } from "lucide-react";

export default function SearchFilterAdvisories() {
  const [identityChecked, setIdentityChecked] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#0F172A] sm:text-[44px]">
            Search, filter and sort published advisories
          </h2>
          <p className="mt-3 text-[16px] leading-[1.7] text-[#475569] sm:text-[17px]">
            The list reads only approved public records. Filters appear only for
            values the source supports.
          </p>
        </div>

        {/* Main Card Container */}
        <div className="mt-12 flex flex-col rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
            {/* Left Sidebar Filters */}
            <div className="flex flex-col space-y-8 pr-0 lg:border-r lg:border-[#E2E8F0] lg:pr-8">
              {/* Product Area */}
              <div>
                <h3 className="text-[14px] font-bold text-[#0F172A]">
                  Product area
                </h3>
                <div className="mt-4 flex flex-col space-y-3">
                  <label className="flex items-center gap-3 text-[14px] text-[#334155] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={identityChecked}
                      onChange={(e) => setIdentityChecked(e.target.checked)}
                      className="h-4 w-4 rounded border-[#CBD5E1] text-[#2563EB] focus:ring-[#2563EB]"
                    />
                    Identity platform
                  </label>
                  <label className="flex items-center gap-3 text-[14px] text-[#64748B] cursor-pointer">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-[#CBD5E1] text-[#2563EB]"
                    />
                    Integrations and SDKs
                  </label>
                  <label className="flex items-center gap-3 text-[14px] text-[#64748B] cursor-pointer">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-[#CBD5E1] text-[#2563EB]"
                    />
                    APIs
                  </label>
                  <label className="flex items-center gap-3 text-[14px] text-[#64748B] cursor-pointer">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-[#CBD5E1] text-[#2563EB]"
                    />
                    Webhooks and events
                  </label>
                </div>
              </div>

              {/* Published Date */}
              <div>
                <h3 className="text-[14px] font-bold text-[#0F172A]">
                  Published date
                </h3>
                <div className="mt-4 flex flex-col space-y-3">
                  <label className="flex items-center gap-3 text-[14px] text-[#64748B] cursor-pointer">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-[#CBD5E1] text-[#2563EB]"
                    />
                    Last 30 days
                  </label>
                  <label className="flex items-center gap-3 text-[14px] text-[#64748B] cursor-pointer">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-[#CBD5E1] text-[#2563EB]"
                    />
                    Last 12 months
                  </label>
                  <label className="flex items-center gap-3 text-[14px] text-[#64748B] cursor-pointer">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-[#CBD5E1] text-[#2563EB]"
                    />
                    Custom range
                  </label>
                </div>
              </div>

              {/* Lifecycle */}
              <div>
                <h3 className="text-[14px] font-bold text-[#0F172A]">
                  Lifecycle
                </h3>
                <div className="mt-4 flex flex-col space-y-3">
                  <label className="flex items-center gap-3 text-[14px] text-[#64748B] cursor-pointer">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-[#CBD5E1] text-[#2563EB]"
                    />
                    Current
                  </label>
                  <label className="flex items-center gap-3 text-[14px] text-[#64748B] cursor-pointer">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-[#CBD5E1] text-[#2563EB]"
                    />
                    Updated
                  </label>
                  <label className="flex items-center gap-3 text-[14px] text-[#64748B] cursor-pointer">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-[#CBD5E1] text-[#2563EB]"
                    />
                    Superseded
                  </label>
                  <label className="flex items-center gap-3 text-[14px] text-[#64748B] cursor-pointer">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-[#CBD5E1] text-[#2563EB]"
                    />
                    Withdrawn
                  </label>
                </div>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="flex flex-col">
              {/* Search & Sort Controls */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94A3B8]" />
                  <input
                    type="text"
                    placeholder="Search title, summary or advisory ID"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-xl border border-[#CBD5E1] bg-white py-3 pl-11 pr-4 text-[14px] text-[#0F172A] placeholder-[#94A3B8] focus:border-[#2563EB] focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <button className="rounded-xl border border-[#CBD5E1] bg-white px-4 py-3 text-[13px] font-semibold text-[#334155] shadow-sm hover:bg-[#F8FAFC]">
                    Sort: Newest published
                  </button>
                  <button className="rounded-xl border border-[#CBD5E1] bg-white px-4 py-3 text-[13px] font-semibold text-[#334155] shadow-sm hover:bg-[#F8FAFC]">
                    Stable tie-break by ID
                  </button>
                </div>
              </div>

              {/* Match Count Note */}
              <p className="mt-4 text-[13px] font-semibold text-[#0F172A]">
                0 advisories match these filters
              </p>

              {/* Empty State Box */}
              <div className="mt-4 flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#CBD5E1] bg-[#FAFAFA] py-16 px-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E0F2FE] text-[#0284C7]">
                  <FolderOpen className="h-6 w-6" />
                </div>
                <h4 className="mt-4 text-[18px] font-bold text-[#0F172A]">
                  No advisories match these filters
                </h4>
                <p className="mt-2 max-w-md text-[14px] leading-[1.6] text-[#64748B]">
                  This does not mean there are no security issues. Reset your
                  filters, or read the Security contact route if you need help.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <button className="inline-flex items-center gap-2 rounded-xl border border-[#CBD5E1] bg-white px-4 py-2.5 text-[13px] font-semibold text-[#334155] shadow-sm hover:bg-[#F8FAFC]">
                    <X className="h-4 w-4" />
                    Reset filters
                  </button>
                  <button className="inline-flex items-center rounded-xl bg-[#2563EB] px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm hover:opacity-90">
                    Security contact
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Banner Alert */}
          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-[#FED7AA] bg-[#FFFBEB] p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FEF3C7] text-[#D97706]">
              <AlertCircle className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-[15px] font-bold text-[#9A3412]">
                Advisory information is temporarily unavailable
              </h4>
              <p className="mt-1 text-[13px] leading-[1.6] text-[#B45309]">
                If the list cannot be loaded, we will not show a cached result
                as current. Contact the Security contact route for urgent
                questions.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Subtext */}
        <p className="mt-4 text-[12px] text-[#64748B]">
          State shown when the source is unavailable. Not shown as a live
          result.
        </p>
      </div>
    </section>
  );
}
