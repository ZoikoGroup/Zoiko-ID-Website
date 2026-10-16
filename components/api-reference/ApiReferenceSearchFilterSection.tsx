"use client";

import Image from "next/image";
import { useState } from "react";

export default function ApiReferenceSearchFilterSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  return (
    <section id="search-filter" className="bg-[#F1F5F9] px-6 py-16 sm:px-10 lg:px-20 lg:py-[95px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-6">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-3xl font-normal text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[71.3px]">
          Find what you need
        </h2>

        {/* Search Input Box */}
        <div className="flex w-full items-center gap-3 rounded-[12px] border border-[#E2E8F0] bg-white-solid px-6 py-4 shadow-xs transition-colors focus-within:border-[#2563EB]">
          <Image
            src="/api-reference/icon-320_85.svg"
            alt=""
            width={20}
            height={20}
            className="shrink-0"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search endpoints, methods, parameters... (e.g., 'create credential', 'revoke mandate')"
            className="w-full bg-transparent font-manrope text-base font-normal text-[#071426] placeholder-[#64748B] outline-none"
          />
        </div>

        {/* 3 Columns Filters */}
        <div className="grid w-full grid-cols-1 gap-6 pt-2 md:grid-cols-3">
          {/* Column 1: Filter by method */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Image
                src="/api-reference/icon-320_93.svg"
                alt=""
                width={16}
                height={16}
              />
              <span className="font-manrope text-base font-bold text-[#475569]">
                Filter by method
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => setSelectedMethod(selectedMethod === "GET" ? null : "GET")}
                className={`flex w-full items-center gap-2 rounded-[4px] border bg-white-solid px-3 py-4 text-left transition-all ${
                  selectedMethod === "GET" ? "border-[#22B8D6] ring-1 ring-[#22B8D6]" : "border-[#E2E8F0] hover:border-slate-300"
                }`}
              >
                <span className="inline-flex rounded-[4px] bg-[rgba(34,184,214,0.15)] px-3 py-1.5 font-sans text-[12.8px] font-bold uppercase tracking-[0.05em] text-[#22B8D6]">
                  GET
                </span>
                <span className="font-sans text-[13.3px] font-normal text-black">
                  Retrieve
                </span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedMethod(selectedMethod === "POST" ? null : "POST")}
                className={`flex w-full items-center gap-2 rounded-[4px] border bg-white-solid px-3 py-4 text-left transition-all ${
                  selectedMethod === "POST" ? "border-[#F59E0B] ring-1 ring-[#F59E0B]" : "border-[#E2E8F0] hover:border-slate-300"
                }`}
              >
                <span className="inline-flex rounded-[4px] bg-[rgba(245,158,11,0.15)] px-3 py-1.5 font-sans text-[12.8px] font-bold uppercase tracking-[0.05em] text-[#F59E0B]">
                  POST
                </span>
                <span className="font-sans text-[13.3px] font-normal text-black">
                  Create/Update
                </span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedMethod(selectedMethod === "DELETE" ? null : "DELETE")}
                className={`flex w-full items-center gap-2 rounded-[4px] border bg-white-solid px-3 py-4 text-left transition-all ${
                  selectedMethod === "DELETE" ? "border-[#DC2626] ring-1 ring-[#DC2626]" : "border-[#E2E8F0] hover:border-slate-300"
                }`}
              >
                <span className="inline-flex rounded-[4px] bg-[rgba(220,38,38,0.15)] px-3 py-1.5 font-sans text-[12.8px] font-bold uppercase tracking-[0.05em] text-[#DC2626]">
                  DELETE
                </span>
                <span className="font-sans text-[13.3px] font-normal text-black">
                  Remove
                </span>
              </button>
            </div>
          </div>

          {/* Column 2: Filter by category */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Image
                src="/api-reference/icon-320_113.svg"
                alt=""
                width={16}
                height={16}
              />
              <span className="font-manrope text-base font-bold text-[#475569]">
                Filter by category
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {["Authentication", "Credentials", "Delegation"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                  className={`flex w-full items-center rounded-[4px] border bg-white-solid px-3 py-4 text-left transition-all ${
                    selectedCategory === cat ? "border-[#2563EB] ring-1 ring-[#2563EB]" : "border-[#E2E8F0] hover:border-slate-300"
                  }`}
                >
                  <span className="font-sans text-[13.3px] font-normal text-black">
                    {cat}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Filter by status */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Image
                src="/api-reference/icon-320_125.svg"
                alt=""
                width={16}
                height={16}
              />
              <span className="font-manrope text-base font-bold text-[#475569]">
                Filter by status
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => setSelectedStatus(selectedStatus === "STABLE" ? null : "STABLE")}
                className={`flex w-full items-center gap-2 rounded-[4px] border bg-white-solid px-3 py-4 text-left transition-all ${
                  selectedStatus === "STABLE" ? "border-[#16A34A] ring-1 ring-[#16A34A]" : "border-[#E2E8F0] hover:border-slate-300"
                }`}
              >
                <span className="inline-flex rounded-[20px] bg-[rgba(22,163,74,0.15)] px-3 py-1 font-sans text-xs font-bold uppercase tracking-[0.05em] text-[#16A34A]">
                  STABLE
                </span>
                <span className="font-sans text-[13.3px] font-normal text-black">
                  v1+
                </span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedStatus(selectedStatus === "BETA" ? null : "BETA")}
                className={`flex w-full items-center gap-2 rounded-[4px] border bg-white-solid px-3 py-4 text-left transition-all ${
                  selectedStatus === "BETA" ? "border-[#F59E0B] ring-1 ring-[#F59E0B]" : "border-[#E2E8F0] hover:border-slate-300"
                }`}
              >
                <span className="inline-flex rounded-[20px] bg-[rgba(245,158,11,0.15)] px-3 py-1 font-sans text-xs font-bold uppercase tracking-[0.05em] text-[#F59E0B]">
                  BETA
                </span>
                <span className="font-sans text-[13.3px] font-normal text-black">
                  Testing
                </span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedStatus(selectedStatus === "DEPRECATED" ? null : "DEPRECATED")}
                className={`flex w-full items-center gap-2 rounded-[4px] border bg-white-solid px-3 py-4 text-left transition-all ${
                  selectedStatus === "DEPRECATED" ? "border-[#DC2626] ring-1 ring-[#DC2626]" : "border-[#E2E8F0] hover:border-slate-300"
                }`}
              >
                <span className="inline-flex rounded-[20px] bg-[rgba(220,38,38,0.15)] px-3 py-1 font-sans text-xs font-bold uppercase tracking-[0.05em] text-[#DC2626]">
                  DEPRECATED
                </span>
                <span className="font-sans text-[13.3px] font-normal text-black">
                  Retiring
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
