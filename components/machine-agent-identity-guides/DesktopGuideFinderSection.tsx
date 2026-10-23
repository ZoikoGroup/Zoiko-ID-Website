"use client";

import { useState } from "react";
import Image from "next/image";

const GROUPS = [
  { label: "Actor type", items: ["Service", "Workload", "Machine", "AI agent"] },
  { label: "Topic", items: ["Lifecycle", "Sponsorship", "Authorization", "Revocation", "Evidence"] },
  { label: "Reader depth", items: ["Beginner", "Intermediate", "Advanced"] },
];

export default function GuideFinderSection() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (key: string) =>
    setSelected((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );

  return (
    <section
      id="guide-finder"
      className="w-full bg-[#f1f5f9] py-[105px] px-[160px]"
    >
      <div className="mx-auto flex w-full flex-col gap-[60px]">
        <div className="flex flex-col gap-[12px]">
          <h2 className="font-dm-serif text-[52px] font-normal leading-[57.9px] text-[#07111f]">
            Filter by actor, topic and depth
          </h2>
          <p className="max-w-[820px] pt-[1.3px] font-manrope text-[16px] font-normal leading-[25.6px] text-[#64748b]">
            Filters appear only for values the approved guide registry supports. No guide inventory is published in this layout, so the counts below show the empty state.
          </p>
        </div>
        <div className="flex flex-col gap-[18px] rounded-[22px] border border-[#e2e8f0] bg-white p-[34px]">
          <div className="flex h-[52px] items-center gap-[12px] rounded-[10px] border border-[#cbd5e1] px-[16px]">
            <Image
              src="/machine-agent-identity-guides/desktop-icon-search.svg"
              alt=""
              width={20}
              height={20}
              className="shrink-0"
            />
            <span className="font-manrope text-[15px] font-normal leading-[24px] text-[#94a3b8]">
              Optional: search architecture topics
            </span>
          </div>

          <div className="grid grid-cols-4 gap-x-[20px] gap-y-[20px] pt-[6px]">
            {GROUPS.map((g) => (
              <div key={g.label} className="flex flex-col gap-[10px]">
                <h3 className="font-manrope text-[12px] font-bold uppercase leading-[19.2px] tracking-[0.72px] text-[#07111f]">
                  {g.label}
                </h3>
                <div className="flex flex-wrap gap-x-[8px] gap-y-[8px]">
                  {g.items.map((item) => {
                    const key = `${g.label}:${item}`;
                    const on = selected.includes(key);
                    return (
                      <button
                        key={key}
                        type="button"
                        aria-pressed={on}
                        onClick={() => toggle(key)}
                        className={`rounded-full border px-[12px] pb-[7.8px] pt-[6px] font-manrope text-[13px] font-semibold leading-[20.8px] transition-all duration-150 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 ${
                          on
                            ? "border-[#07111f] bg-[#07111f] text-white"
                            : "border-[#e2e8f0] bg-white text-[#475569] hover:border-[#cbd5e1]"
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-y-[12px] border-t border-[#e2e8f0] pt-[26px]">
            <p className="font-manrope text-[16px] font-bold leading-[25.6px] text-[#07111f]">
              0 guides match these filters
            </p>
            <button
              type="button"
              onClick={() => setSelected([])}
              className="rounded-[8px] border border-[#cbd5e1] px-[16px] pb-[9.9px] pt-[9.5px] font-manrope text-[14px] font-bold leading-[22.4px] text-[#334155] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#f8fafc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
            >
              Clear all filters
            </button>
          </div>

          <div className="flex flex-col items-center gap-[9.5px] rounded-[18px] border border-dashed border-[#94a3b8] bg-[#fafafa] px-[36px] pb-[36px] pt-[40px]">
            <Image
              src="/machine-agent-identity-guides/desktop-empty-state.svg"
              alt=""
              width={52}
              height={52}
            />
            <p className="text-center font-dm-serif text-[24px] font-normal leading-[30px] text-[#07111f]">
              No guides match these filters
            </p>
            <p className="max-w-[520px] text-center font-manrope text-[14px] font-normal leading-[22.4px] text-[#64748b]">
              Remove a filter, or clear all. Your selections are kept until you change them.
            </p>
          </div>

          <div className="rounded-[12px] bg-[#fff7ed] px-[18px] py-[13.7px]">
            <p className="font-manrope text-[14px] leading-[22.4px] text-[#07111f]">
              <strong className="font-bold">Search is temporarily unavailable.</strong>
              <span className="font-normal"> Browse the actor types and topics on this page instead. We will not describe the library as empty.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
