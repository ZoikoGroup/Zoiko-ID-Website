import React from "react";
import { Search, X, FolderOpen, AlertCircle } from "lucide-react";

const topicItems = [
  { label: "Identity basics", active: true },
  { label: "Organization identity", active: false },
  { label: "Credentials", active: false },
  { label: "Verification", active: false },
  { label: "Authorization & delegation", active: false },
  { label: "Continuous trust", active: false },
  { label: "Machine & agent identity", active: false },
] as const;

const audienceItems = [
  "Architect",
  "Enterprise buyer",
  "Risk / compliance",
  "Developer",
  "IAM / CISO",
] as const;

const sortItems = ["Relevance", "Recently reviewed"] as const;

const levelItems = ["Advanced", "Introductory", "Intermediate"] as const;

export default function IdentitySearchFilter() {
  return (
    <section className="bg-white min-h-screen py-16 px-4 md:px-8 flex flex-col items-center">
      <div className="max-w-7xl w-full">
        {/* Header Section */}
        <div className="text-center md:text-left mb-10 max-w-4xl">
          <h1 className="text-3xl md:text-[40px] font-bold text-slate-900 tracking-tight font-serif mb-3 leading-tight">
            Find the subject without scanning everything
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Filter by topic, audience and level. Results count and the reset
            control update as you choose. This layout shows the controls and
            states only; no guide inventory is published yet.
          </p>
        </div>

        {/* Main Filter Card Container */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 md:p-8 flex flex-col gap-6">
          {/* Search Bar */}
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search identity concepts"
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all"
              readOnly
            />
          </div>

          {/* Topic Filter Section */}
          <div className="flex flex-col gap-2.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Topic
            </span>
            <div className="flex flex-wrap gap-2">
              {topicItems.map((item, idx) => (
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

          {/* Audience, Sort, Level Section Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
            {/* Audience */}
            <div className="md:col-span-6 flex flex-col gap-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Audience
              </span>
              <div className="flex flex-wrap gap-2">
                {audienceItems.map((item, idx) => (
                  <button
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="md:col-span-3 flex flex-col gap-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Sort
              </span>
              <div className="flex flex-wrap gap-2">
                {sortItems.map((item, idx) => (
                  <button
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Level */}
            <div className="md:col-span-3 flex flex-col gap-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Level
              </span>
              <div className="flex flex-wrap gap-2">
                {levelItems.map((item, idx) => (
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

          <hr className="border-slate-100 my-2" />

          {/* Results Match Status & Reset */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-sm font-semibold text-slate-900">
              0 guides match these filters
            </span>
            <button className="px-4 py-2 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors">
              Reset filters
            </button>
          </div>

          {/* Empty Search State Box */}
          <div className="border border-dashed border-slate-300 rounded-2xl p-10 flex flex-col items-center justify-center text-center bg-slate-50/50">
            <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-700 mb-4 shadow-sm">
              <FolderOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-serif mb-2">
              No guides match this search
            </h3>
            <p className="text-xs md:text-sm text-slate-500 max-w-md leading-relaxed">
              Adjust your search, reset filters, or start with a topic from the
              learning path below. A missing result does not mean the topic is
              unsupported.
            </p>
          </div>

          {/* Warning / Notice Banner */}
          <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3.5 flex items-start gap-3 text-amber-900">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs md:text-sm leading-relaxed font-normal">
              Search is temporarily unavailable. Browse the topic list below, or
              use the learning path. We will not describe the library as empty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
