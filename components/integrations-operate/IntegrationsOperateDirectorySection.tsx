"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

interface DirectoryItem {
  icon: string;
  category: string;
  system: string;
  purpose: string;
  availabilityType: "request" | "documented";
  scope: string;
  lastVerified: string;
  docLabel: string;
  docHref: string;
}

const directoryData: DirectoryItem[] = [
  {
    icon: "/integrations-operate/icon-334_4892.svg",
    category: "Federation",
    system: "Standards-based federation (OIDC, SAML)",
    purpose: "Connect sign-in to an existing identity provider",
    availabilityType: "request",
    scope: "Not confirmed",
    lastVerified: "Not recorded",
    docLabel: "Authentication & SSO",
    docHref: "/authentication-sso",
  },
  {
    icon: "/integrations-operate/icon-334_4910.svg",
    category: "Applications and policy",
    system: "Policy decision interface",
    purpose: "Request bounded access decisions for application actions",
    availabilityType: "request",
    scope: "Not confirmed",
    lastVerified: "Not recorded",
    docLabel: "API Reference",
    docHref: "/api-reference",
  },
  {
    icon: "/integrations-operate/icon-334_4929.svg",
    category: "B2B organizations",
    system: "Organization identity model",
    purpose: "Represent organization affiliation and tenant boundaries",
    availabilityType: "request",
    scope: "Not confirmed",
    lastVerified: "Not recorded",
    docLabel: "Organization Identity",
    docHref: "/organization-identity",
  },
  {
    icon: "/integrations-operate/icon-334_4948.svg",
    category: "Machine and AI agents",
    system: "Non-human principal model",
    purpose: "Sponsor, mandate, and scope for automated principals",
    availabilityType: "request",
    scope: "Not confirmed",
    lastVerified: "Not recorded",
    docLabel: "AI Agent Security",
    docHref: "/ai-agent-security",
  },
  {
    icon: "/integrations-operate/icon-334_4967.svg",
    category: "Credentials and verification",
    system: "Issuer, holder, verifier model",
    purpose: "Issue, hold, and verify credential status",
    availabilityType: "request",
    scope: "Not confirmed",
    lastVerified: "Not recorded",
    docLabel: "Credentials",
    docHref: "/authentication-sso",
  },
  {
    icon: "/integrations-operate/icon-334_4986.svg",
    category: "Webhooks and events",
    system: "Event notifications",
    purpose: "Receive notifications about trust-state changes",
    availabilityType: "documented",
    scope: "See documentation",
    lastVerified: "See changelog",
    docLabel: "Webhooks & Events",
    docHref: "/changelog",
  },
];

const categoryFilters = [
  "All categories",
  "Federation",
  "Applications",
  "Machine & AI agents",
  "Credentials",
  "Events",
];

export default function IntegrationsOperateDirectorySection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All categories");

  const filteredItems = useMemo(() => {
    return directoryData.filter((item) => {
      const matchesSearch =
        searchTerm === "" ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.system.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.purpose.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFilter =
        selectedFilter === "All categories" ||
        item.category.toLowerCase().includes(selectedFilter.toLowerCase()) ||
        (selectedFilter === "Applications" && item.category.toLowerCase().includes("applications")) ||
        (selectedFilter === "Events" && item.category.toLowerCase().includes("webhooks"));

      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, selectedFilter]);

  const handleReset = () => {
    setSearchTerm("");
    setSelectedFilter("All categories");
  };

  return (
    <section className="bg-[#F1F5F9] px-4 py-16 sm:px-8 lg:px-12 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-[30px]">
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col items-center pt-[2px] text-center">
          <h2 className="font-dm-serif text-3xl font-normal text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[62.4px]">
            Integrations directory
          </h2>

          <p className="mt-[23px] max-w-[860px] font-manrope text-base font-normal leading-7 text-[#64748B] sm:text-[16.8px] sm:leading-[28.56px]">
            A public, approved-metadata directory of integration categories and their status. It shows what is confirmed in
            <br className="hidden sm:block" />
            {" "}published documentation and nothing more. It is not a list of your tenant&apos;s configuration.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex w-full flex-col gap-4">
          {/* Search Box */}
          <div className="flex h-[50px] w-full items-center gap-3 rounded-[8px] border border-[#E2E8F0] bg-white-solid px-4 shadow-2xs focus-within:border-[#2563EB]">
            <svg
              className="size-5 shrink-0 text-[#64748B]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search categories, standards, or purposes"
              className="w-full bg-transparent font-manrope text-base font-normal text-[#071426] placeholder-[#64748B] outline-none"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {categoryFilters.map((filter) => {
              const isSelected = selectedFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`rounded-full px-5 py-2.5 font-manrope text-sm font-semibold transition-all ${
                    isSelected
                      ? "bg-[#071426] text-white-solid shadow-xs"
                      : "border border-[#E2E8F0] bg-white-solid text-[#071426] hover:bg-slate-50"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* Counter & Reset Button Row */}
          <div className="flex items-center justify-between pt-1">
            <span className="font-manrope text-base font-bold text-[#071426]">
              Showing {filteredItems.length} of {directoryData.length} categories
            </span>
            <button
              onClick={handleReset}
              className="rounded-[8px] border border-[#2563EB] bg-[#EFF6FF] px-4 py-2 font-manrope text-sm font-semibold text-[#2563EB] transition-colors hover:bg-blue-100"
            >
              Reset filters
            </button>
          </div>
        </div>

        {/* Directory Table with Dark Navy Header & Dark Border */}
        <div className="w-full overflow-hidden rounded-[12px] border-2 border-[#071426] bg-white-solid shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-[#071426] text-white-solid">
                <tr>
                  <th className="px-5 py-4 font-manrope text-sm font-bold text-white-solid">
                    Category
                  </th>
                  <th className="px-5 py-4 font-manrope text-sm font-bold text-white-solid">
                    System or standard
                  </th>
                  <th className="px-5 py-4 font-manrope text-sm font-bold text-white-solid">
                    Primary purpose
                  </th>
                  <th className="px-5 py-4 font-manrope text-sm font-bold text-white-solid">
                    Availability
                  </th>
                  <th className="px-5 py-4 font-manrope text-sm font-bold text-white-solid">
                    Scope
                  </th>
                  <th className="px-5 py-4 font-manrope text-sm font-bold text-white-solid">
                    Last verified
                  </th>
                  <th className="px-5 py-4 font-manrope text-sm font-bold text-white-solid">
                    Documentation
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {filteredItems.map((item, idx) => (
                  <tr
                    key={idx}
                    className="transition-colors hover:bg-slate-50/60"
                  >
                    {/* Category with Blue Icon */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2.5">
                        <Image
                          src={item.icon}
                          alt=""
                          width={20}
                          height={20}
                          className="shrink-0"
                        />
                        <span className="font-manrope text-sm font-medium text-[#071426]">
                          {item.category}
                        </span>
                      </div>
                    </td>

                    {/* System */}
                    <td className="px-5 py-4 font-manrope text-sm font-normal text-[#475569]">
                      {item.system}
                    </td>

                    {/* Purpose */}
                    <td className="px-5 py-4 font-manrope text-sm font-normal text-[#475569]">
                      {item.purpose}
                    </td>

                    {/* Availability Badge */}
                    <td className="px-5 py-4">
                      {item.availabilityType === "request" ? (
                        <div className="inline-flex flex-col items-center justify-center rounded-[20px] border border-dashed border-[#22B8D6] bg-[rgba(34,184,214,0.08)] px-3.5 py-1.5 text-center font-manrope text-[11px] font-bold uppercase leading-tight text-[#071426]">
                          <span>DETAILS</span>
                          <span>AVAILABLE ON</span>
                          <span>REQUEST</span>
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center rounded-[20px] bg-[#E2E8F0] px-3.5 py-1.5 text-center font-manrope text-[11px] font-bold uppercase text-[#071426]">
                          DOCUMENTED
                        </div>
                      )}
                    </td>

                    {/* Scope */}
                    <td className="px-5 py-4 font-manrope text-sm font-normal text-[#475569]">
                      {item.scope}
                    </td>

                    {/* Last verified */}
                    <td className="px-5 py-4 font-manrope text-sm font-normal text-[#475569]">
                      {item.lastVerified}
                    </td>

                    {/* Documentation link */}
                    <td className="px-5 py-4 font-manrope text-sm font-normal text-[#2563EB]">
                      <Link href={item.docHref} className="hover:underline">
                        {item.docLabel}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Callout Box (Buttery White with amber accent) */}
        <div className="w-full rounded-[10px] border-l-4 border-[#F59E0B] bg-[#FFFBEB] px-[26px] pt-[26px] pb-[22px] shadow-2xs">
          <p className="font-manrope text-base font-normal leading-[27.2px] text-[#475569]">
            <strong className="font-bold text-[#071426]">Availability note.</strong>{" "}
            A listed category is an architecture concept unless its status says otherwise. A category listing is not a claim that a
            <br className="hidden sm:block" />
            {" "}connector is live, certified, or supported for your environment.
          </p>
        </div>
      </div>
    </section>
  );
}
