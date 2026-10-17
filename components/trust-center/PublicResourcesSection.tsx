"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { FolderMinus } from "lucide-react";

import { Section, SectionHeading } from "./shared";

type AssetType = "Control explanation" | "Policy" | "Assessment" | "Architectural note";
type AssetState = "Current" | "Superseded" | "Withdrawn";

type Asset = {
  title: string;
  type: AssetType;
  scope: string;
  reportingPeriod: string;
  lastVerified: string; // ISO date
  visibility: "Public" | "Restricted";
  state: AssetState;
  action: { label: string; href: string };
};

// Populated only from the verified registry. No placeholder records are shown.
const assets: Asset[] = [];

const assetTypes: AssetType[] = ["Control explanation", "Policy", "Assessment", "Architectural note"];
const assetStates: AssetState[] = ["Current", "Superseded", "Withdrawn"];
const columns = ["Title", "Type", "Scope", "Reporting period", "Last verified", "Visibility", "State", "Action"];

const resourceTypes = [
  {
    title: "Control explanation",
    description: "Plain-language description of a control.",
    image: { src: "/trust-center/resource-control.webp", alt: "Person reading notes on a clipboard" },
  },
  {
    title: "Policy",
    description: "Approved organizational policy statement.",
    image: { src: "/trust-center/resource-policy.webp", alt: "A signed policy document being handed over" },
  },
  {
    title: "Assessment",
    description: "Results of a review, with scope and date.",
    image: { src: "/trust-center/resource-assessment.webp", alt: "Colleagues reviewing results around a table" },
  },
  {
    title: "Architectural note",
    description: "Technical description of a design area.",
    image: { src: "/trust-center/resource-architectural-note.webp", alt: "Designer sketching on a tablet beside a laptop" },
  },
];

const fieldClass =
  "w-full rounded-md border border-[#CBD5E1] bg-white-solid px-3.5 py-2.5 font-manrope text-[15px] text-[#0F172A] placeholder:text-[#94A3B8] outline-none transition-colors focus:border-azure-48";
const labelClass = "font-manrope text-xs font-extrabold uppercase tracking-wide text-[#0F172A]";

export default function PublicResourcesSection() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [state, setState] = useState("");
  const [sort, setSort] = useState("last-verified");

  const visibleAssets = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = assets.filter(
      (asset) =>
        (!q || asset.title.toLowerCase().includes(q) || asset.scope.toLowerCase().includes(q)) &&
        (!type || asset.type === type) &&
        (!state || asset.state === state),
    );
    return filtered.sort((a, b) =>
      sort === "title" ? a.title.localeCompare(b.title) : b.lastVerified.localeCompare(a.lastVerified),
    );
  }, [query, type, state, sort]);

  return (
    <Section id="evidence-assets">
      <SectionHeading
        title="Public resources and gated evidence, listed separately"
        description="Public material is searchable. Restricted items show only the labels they are cleared to show, and downloads require server-side authorization."
      />

      <form
        role="search"
        onSubmit={(e) => e.preventDefault()}
        className="mt-10 grid grid-cols-1 gap-4 rounded-2xl border border-grey-91 bg-white-solid p-5 sm:grid-cols-2 lg:mt-[86px] lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-3.5"
      >
        <label className="flex flex-col gap-2 sm:col-span-2 lg:col-span-1">
          <span className={labelClass}>Search</span>
          <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Title or scope" className={fieldClass} />
        </label>
        <label className="flex flex-col gap-2">
          <span className={labelClass}>Type</span>
          <select value={type} onChange={(e) => setType(e.target.value)} className={fieldClass}>
            <option value="">All types</option>
            {assetTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className={labelClass}>Status</span>
          <select value={state} onChange={(e) => setState(e.target.value)} className={fieldClass}>
            <option value="">All states</option>
            {assetStates.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className={labelClass}>Sort</span>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className={fieldClass}>
            <option value="last-verified">Last verified</option>
            <option value="title">Title</option>
          </select>
        </label>
      </form>

      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[820px] border-collapse text-left">
          <thead>
            <tr className="border-y border-grey-91 bg-grey-96">
              {columns.map((col) => (
                <th key={col} scope="col" className="px-4 py-4 font-manrope text-sm font-bold text-[#0F172A]">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          {visibleAssets.length > 0 ? (
            <tbody>
              {visibleAssets.map((asset) => (
                <tr key={asset.title} className="border-b border-grey-91 font-manrope text-sm text-azure-47">
                  <td className="px-4 py-4 font-bold text-[#0F172A]">{asset.title}</td>
                  <td className="px-4 py-4">{asset.type}</td>
                  <td className="px-4 py-4">{asset.scope}</td>
                  <td className="px-4 py-4">{asset.reportingPeriod}</td>
                  <td className="px-4 py-4">{asset.lastVerified}</td>
                  <td className="px-4 py-4">{asset.visibility}</td>
                  <td className="px-4 py-4">{asset.state}</td>
                  <td className="px-4 py-4">
                    <Link href={asset.action.href} className="font-bold text-azure-48 hover:underline">
                      {asset.action.label}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : null}
        </table>
      </div>

      {visibleAssets.length === 0 ? (
        <div className="mt-3 flex flex-col items-center gap-4 rounded-2xl border border-dashed border-[#94A3B8] px-6 py-14 text-center">
          <FolderMinus className="size-10 text-[#0E7490]" strokeWidth={1.75} aria-hidden="true" />
          <h3 className="font-dm-serif text-2xl font-normal text-[#0F172A]">
            {assets.length === 0 ? "No published evidence assets are listed yet" : "No assets match these filters"}
          </h3>
          <p className="max-w-[620px] font-manrope text-base leading-[26px] text-azure-47">
            Trust topics remain available above. When approved assets are published, each row will show its
            scope, dates, state and permitted action. No placeholder records are shown.
          </p>
          <Link
            href="#"
            className="mt-2 inline-flex items-center rounded-md border border-azure-48 px-6 py-3 font-manrope text-base font-bold text-azure-48 transition-colors hover:bg-azure-48/5"
          >
            Talk to an identity expert
          </Link>
        </div>
      ) : null}

      <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {resourceTypes.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-2xl border border-grey-91 bg-white-solid">
            <div className="relative h-[110px] w-full">
              <Image src={item.image.src} alt={item.image.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-col gap-2 p-5">
              <h3 className="font-manrope text-lg font-bold text-[#0F172A]">{item.title}</h3>
              <p className="font-manrope text-sm leading-[22px] text-azure-47">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
