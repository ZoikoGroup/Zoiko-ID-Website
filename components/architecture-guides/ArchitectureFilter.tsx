"use client";

import React from "react";
import { Search, X, FolderOpen, AlertCircle } from "lucide-react";

interface FilterOption {
  label: string;
  active?: boolean;
}

const topics: FilterOption[] = [
  { label: "Identity", active: true },
  { label: "Authority", active: false },
  { label: "Policy", active: false },
  { label: "Signals", active: false },
  { label: "Evidence", active: false },
  { label: "Integration", active: false },
] as const;

const actors: string[] = [
  "Human",
  "Organization",
  "Service",
  "Machine",
  "Agent",
] as const;

const depths: string[] = ["Foundations", "Patterns", "Advanced"] as const;

const sorts: string[] = ["Relevance", "Recently reviewed"] as const;

export default function ArchitectureFilter() {
  return (
    <section className="bg-[#F1F5F9] min-h-screen py-16 px-4 md:px-12 lg:px-24 flex flex-col items-start justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Header Section */}
        <div className="text-left max-w-3xl mb-10">
          <h1 className="text-3xl md:text-[42px] font-bold text-slate-900 tracking-tight font-serif mb-3 leading-[1.15]">
            Filter by question, actor and depth
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Choose a topic, an actor category and a reading depth. Filters
            appear only for values the guide registry supports. This layout
            shows the controls and their states; no guide inventory is published
            yet.
          </p>
        </div>

        {/* Main Card Container */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_4px_12px_#0000001A] p-6 md:p-10 w-full flex flex-col gap-6">
          {/* Search Bar */}
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Optional: search architecture topics"
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all"
              readOnly
            />
          </div>

          {/* Filter Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
            {/* TOPIC Column */}
            <div className="md:col-span-4 flex flex-col gap-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                TOPIC
              </span>
              <div className="flex flex-wrap gap-2">
                {topics.map((item, idx) => (
                  <button
                    key={idx}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      item.active
                        ? "bg-slate-900 text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.active && <X className="w-3 h-3 text-slate-300" />}
                  </button>
                ))}
              </div>
            </div>

            {/* ACTOR Column */}
            <div className="md:col-span-3 flex flex-col gap-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                ACTOR
              </span>
              <div className="flex flex-wrap gap-2">
                {actors.map((item, idx) => (
                  <button
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* DEPTH Column */}
            <div className="md:col-span-2 flex flex-col gap-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                DEPTH
              </span>
              <div className="flex flex-wrap gap-2">
                {depths.map((item, idx) => (
                  <button
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* SORT Column */}
            <div className="md:col-span-3 flex flex-col gap-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                SORT
              </span>
              <div className="flex flex-wrap gap-2">
                {sorts.map((item, idx) => (
                  <button
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <hr className="border-slate-100 my-1" />

          {/* Matches & Clear Filters */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-sm font-semibold text-slate-900">
              0 guides match these filters
            </span>
            <a
              href="#"
              className="px-4 py-2 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors inline-block"
            >
              Clear all filters
            </a>
          </div>

          {/* Empty Search Box */}
          <div className="border border-dashed border-slate-300 rounded-2xl p-10 flex flex-col items-center justify-center text-center bg-slate-50/40">
            <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-700 mb-4 shadow-sm">
              <FolderOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-serif mb-2">
              No guides match these filters
            </h3>
            <p className="text-xs md:text-sm text-slate-500 max-w-md leading-relaxed">
              Remove a filter, or clear all. Your selections are kept until you
              change them.
            </p>
          </div>

          {/* Warning Banner */}
          <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3.5 flex items-start gap-3 text-amber-900">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs md:text-sm leading-relaxed font-normal">
              <strong className="font-semibold text-slate-900">
                The guide index is temporarily unavailable.
              </strong>{" "}
              Featured pattern steps remain on this page. We will not describe
              the library as empty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
