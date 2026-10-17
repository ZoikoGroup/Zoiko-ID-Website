"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface FilterOption {
  id: string;
  label: string;
}

const categoryOptions: FilterOption[] = [
  { id: "identity-federation", label: "Identity and federation" },
  { id: "credentials-auth", label: "Credentials and authentication" },
  { id: "authority-delegation", label: "Authority and delegation" },
  { id: "machine-agent", label: "Machine and agent" },
  { id: "privacy-regulatory", label: "Privacy and regulatory" },
  { id: "assurance", label: "Assurance" },
];

const relationshipOptions: FilterOption[] = [
  { id: "designed-for", label: "Designed for" },
  { id: "planned", label: "Planned" },
  { id: "implemented", label: "Implemented" },
  { id: "independently-assessed", label: "Independently assessed" },
  { id: "certified", label: "Certified" },
];

const actorClassOptions: FilterOption[] = [
  { id: "people", label: "People" },
  { id: "organizations", label: "Organizations" },
  { id: "services-machines", label: "Services and machines" },
  { id: "ai-agents", label: "AI agents" },
];

interface StandardItem {
  name: string;
  category: string;
  relationship: string;
  actorClass: string;
  description: string;
  statusBadge: string;
}

const mockStandards: StandardItem[] = [
  {
    name: "OAuth 2.0",
    category: "authority-delegation",
    relationship: "implemented",
    actorClass: "services-machines",
    description: "Authorization framework for delegated access tokens.",
    statusBadge: "NOT PUBLICLY CONFIRMED",
  },
  {
    name: "OpenID Connect",
    category: "credentials-auth",
    relationship: "implemented",
    actorClass: "people",
    description: "Identity layer on top of OAuth 2.0 for federated sign-in.",
    statusBadge: "NOT PUBLICLY CONFIRMED",
  },
  {
    name: "SAML 2.0",
    category: "credentials-auth",
    relationship: "implemented",
    actorClass: "organizations",
    description: "XML-based framework for enterprise identity federation.",
    statusBadge: "NOT PUBLICLY CONFIRMED",
  },
  {
    name: "SCIM 2.0",
    category: "identity-federation",
    relationship: "implemented",
    actorClass: "organizations",
    description: "System for Cross-domain Identity Management provisioning.",
    statusBadge: "NOT PUBLICLY CONFIRMED",
  },
  {
    name: "FIDO2 / WebAuthn",
    category: "credentials-auth",
    relationship: "designed-for",
    actorClass: "people",
    description: "Public key credentials for phishing-resistant authentication.",
    statusBadge: "DESIGNED FOR",
  },
];

export default function ComplianceStandardsBrowserSection() {
  // Initial state mirrors Figma default state:
  // "Identity and federation" and "Designed for" selected
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "identity-federation",
  ]);
  const [selectedRelationships, setSelectedRelationships] = useState<string[]>([
    "designed-for",
  ]);
  const [selectedActors, setSelectedActors] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggleCategory = (id: string) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleRelationship = (id: string) => {
    setSelectedRelationships((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleActor = (id: string) => {
    setSelectedActors((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedRelationships([]);
    setSelectedActors([]);
    setSearchQuery("");
  };

  // Check matching standards
  const filteredStandards = mockStandards.filter((std) => {
    if (selectedCategories.length > 0 && !selectedCategories.includes(std.category)) {
      return false;
    }
    if (
      selectedRelationships.length > 0 &&
      !selectedRelationships.includes(std.relationship)
    ) {
      return false;
    }
    if (selectedActors.length > 0 && !selectedActors.includes(std.actorClass)) {
      return false;
    }
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      return (
        std.name.toLowerCase().includes(q) ||
        std.description.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <section
      id="standards-browser"
      className="bg-[#FFFFFF] px-6 py-16 lg:px-20 lg:py-[105px] xl:px-40"
    >
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-[60px]">
        {/* Section Header */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal text-[#0B1B33] sm:text-4xl lg:text-[52px] lg:leading-[58.9px]">
            Search and filter the standards registry
          </h2>
          <p className="max-w-[960px] pt-[1.3px] font-manrope text-base font-normal leading-[25.6px] text-[#64748B]">
            <span className="md:whitespace-nowrap">
              Results are read from an approved registry. Each result shows its status, scope, version where confirmed, and the
            </span>
            <br className="hidden md:block" />
            {" "}date it was last reviewed.
          </p>
        </div>

        {/* Big Card Wrapper */}
        <div className="rounded-[20px] border border-[#E2E8F0] bg-[#FFFFFF] p-6 pt-[52px] sm:p-7 sm:pt-[52px] lg:p-7 lg:pt-[52px]">
          <div className="flex flex-col gap-[30px] lg:flex-row">
            {/* Left Filter Sidebar */}
            <aside className="w-full shrink-0 border-b border-[#E2E8F0] pb-6 pr-0 lg:w-[260px] lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
              {/* Category Group */}
              <div className="flex flex-col gap-2.5">
                <h4 className="font-manrope text-[17px] font-bold leading-[27.2px] text-[#0B1B33]">
                  Category
                </h4>
                <div className="flex flex-col gap-2">
                  {categoryOptions.map((opt) => {
                    const isChecked = selectedCategories.includes(opt.id);
                    return (
                      <label
                        key={opt.id}
                        className="flex cursor-pointer items-center gap-2.5"
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleCategory(opt.id)}
                          className="h-4 w-4 rounded-[4px] border-[#CBD5E1] text-[#2563EB] focus:ring-blue-500"
                        />
                        <span className="font-manrope text-[14px] font-normal leading-[22.4px] text-[#334155]">
                          {opt.label}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Relationship Group */}
              <div className="mt-4.5 flex flex-col gap-2.5 pt-[18px]">
                <h4 className="font-manrope text-[17px] font-bold leading-[27.2px] text-[#0B1B33]">
                  Relationship
                </h4>
                <div className="flex flex-col gap-2">
                  {relationshipOptions.map((opt) => {
                    const isChecked = selectedRelationships.includes(opt.id);
                    return (
                      <label
                        key={opt.id}
                        className="flex cursor-pointer items-center gap-2.5"
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleRelationship(opt.id)}
                          className="h-4 w-4 rounded-[4px] border-[#CBD5E1] text-[#2563EB] focus:ring-blue-500"
                        />
                        <span className="font-manrope text-[14px] font-normal leading-[22.4px] text-[#334155]">
                          {opt.label}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Actor Class Group */}
              <div className="mt-4.5 flex flex-col gap-2.5 pt-[18px]">
                <h4 className="font-manrope text-[17px] font-bold leading-[27.2px] text-[#0B1B33]">
                  Actor class
                </h4>
                <div className="flex flex-col gap-2">
                  {actorClassOptions.map((opt) => {
                    const isChecked = selectedActors.includes(opt.id);
                    return (
                      <label
                        key={opt.id}
                        className="flex cursor-pointer items-center gap-2.5"
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleActor(opt.id)}
                          className="h-4 w-4 rounded-[4px] border-[#CBD5E1] text-[#2563EB] focus:ring-blue-500"
                        />
                        <span className="font-manrope text-[14px] font-normal leading-[22.4px] text-[#334155]">
                          {opt.label}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </aside>

            {/* Right Results Column */}
            <div className="flex flex-1 flex-col gap-[13px]">
              {/* Search Box */}
              <div className="relative flex h-[50px] w-full items-center gap-2.5 rounded-[10px] border border-[#CBD5E1] bg-[#FFFFFF] px-4">
                <Image
                  src="/assurance-compliance-standards/icon-411_5802.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="shrink-0"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by title, acronym or synonym"
                  className="w-full bg-transparent font-manrope text-[14px] font-normal text-[#0B1B33] placeholder-[#94A3B8] outline-none"
                />
              </div>

              {/* Active Filter Badges */}
              {(selectedCategories.length > 0 ||
                selectedRelationships.length > 0 ||
                selectedActors.length > 0) && (
                <div className="flex flex-wrap items-center gap-2.5 pt-[3px]">
                  {selectedCategories.map((id) => {
                    const opt = categoryOptions.find((c) => c.id === id);
                    if (!opt) return null;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => toggleCategory(id)}
                        className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-[#F1F5F9] px-3.5 py-1.5 font-manrope text-[13px] font-bold leading-[20.8px] text-[#0B1B33] transition-colors hover:bg-slate-200"
                      >
                        <span>{opt.label}</span>
                        <Image
                          src="/assurance-compliance-standards/icon-411_5810.svg"
                          alt="Remove filter"
                          width={14}
                          height={14}
                          className="shrink-0"
                        />
                      </button>
                    );
                  })}

                  {selectedRelationships.map((id) => {
                    const opt = relationshipOptions.find((r) => r.id === id);
                    if (!opt) return null;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => toggleRelationship(id)}
                        className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-[#F1F5F9] px-3.5 py-1.5 font-manrope text-[13px] font-bold leading-[20.8px] text-[#0B1B33] transition-colors hover:bg-slate-200"
                      >
                        <span>{opt.label}</span>
                        <Image
                          src="/assurance-compliance-standards/icon-411_5816.svg"
                          alt="Remove filter"
                          width={14}
                          height={14}
                          className="shrink-0"
                        />
                      </button>
                    );
                  })}

                  {selectedActors.map((id) => {
                    const opt = actorClassOptions.find((a) => a.id === id);
                    if (!opt) return null;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => toggleActor(id)}
                        className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-[#F1F5F9] px-3.5 py-1.5 font-manrope text-[13px] font-bold leading-[20.8px] text-[#0B1B33] transition-colors hover:bg-slate-200"
                      >
                        <span>{opt.label}</span>
                        <span className="text-xs">×</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Match Counter */}
              <div className="pt-[3px]">
                <p className="font-manrope text-[15px] font-bold leading-[24px] text-[#0B1B33]">
                  {filteredStandards.length} standards match these filters
                </p>
              </div>

              {/* Empty State Card (matching Figma state) */}
              {filteredStandards.length === 0 ? (
                <div className="flex flex-col items-center gap-2.5 rounded-[16px] border border-dashed border-[#94A3B8] bg-[#FAFAFA] p-9 text-center">
                  <Image
                    src="/assurance-compliance-standards/icon-411_5822.svg"
                    alt=""
                    width={52}
                    height={52}
                    className="shrink-0"
                  />
                  <h3 className="font-dm-serif text-2xl font-normal leading-[30px] text-[#0B1B33]">
                    No standards match these filters
                  </h3>
                  <p className="max-w-[560px] font-manrope text-[14px] font-normal leading-[22.4px] text-[#64748B]">
                    A missing result is not evidence that a standard is unsupported. Clear filters, or ask
                    <br />
                    an identity expert about a specific standard.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
                    <button
                      type="button"
                      onClick={clearAllFilters}
                      className="rounded-[8px] border border-[#2563EB] bg-[#FFFFFF] px-5 py-2.5 font-manrope text-[15px] font-bold leading-[24px] text-[#2563EB] transition-colors hover:bg-blue-50"
                    >
                      Clear filters
                    </button>
                    <Link
                      href="#expert"
                      className="rounded-[8px] bg-[#2563EB] px-5 py-2.5 font-manrope text-[15px] font-bold leading-[24px] text-[#FFFFFF] transition-colors hover:bg-blue-600"
                    >
                      Talk to an identity expert
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {filteredStandards.map((std) => (
                    <div
                      key={std.name}
                      className="flex items-center justify-between rounded-[12px] border border-[#E2E8F0] bg-[#FFFFFF] p-4.5"
                    >
                      <div className="flex flex-col">
                        <span className="font-manrope text-[16px] font-bold text-[#0B1B33]">
                          {std.name}
                        </span>
                        <span className="font-manrope text-[14px] text-[#64748B]">
                          {std.description}
                        </span>
                      </div>
                      <span className="rounded-full border border-dashed border-[#94A3B8] bg-[#F1F5F9] px-3 py-1 font-manrope text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#334155]">
                        {std.statusBadge}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Bottom Sorting Note */}
              <div className="pt-2">
                <p className="font-manrope text-[15px] font-bold leading-[24px] text-[#64748B]">
                  Default sort: curated relevance. Alternatives: alphabetical, last reviewed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
