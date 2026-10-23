"use client";

import { useState } from "react";
import Image from "next/image";

interface TwoQuestionsPrimaryRouteSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function TwoQuestionsPrimaryRouteSection({
  view = "all",
}: TwoQuestionsPrimaryRouteSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  const [helpCategory, setHelpCategory] = useState<string>("");
  const [userRole, setUserRole] = useState<string>("");

  const helpOptions = [
    "Signing in or accessing my account",
    "Integrating with the API or an SDK",
    "Organization or delegated access",
    "Something else or I am not sure",
  ];

  const roleOptions = [
    "Existing account holder",
    "Developer or integrator",
    "Organization administrator",
    "General question",
  ];

  return (
    <section id="routes" className="w-full">
      {/* MOBILE VERSION (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden bg-[#f8fafc] px-5 py-12">
        {/* Category tag */}
        <div className="flex items-center gap-2">
          <span className="h-[2px] w-4 bg-[#0ea5e9]" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0284c7]">
            GUIDED ROUTING
          </span>
        </div>

        {/* Title & Subtitle */}
        <h2 className="mt-3 font-dm-serif text-[28px] font-normal leading-[1.2] tracking-tight text-[#071324]">
          Two questions, one primary route
        </h2>
        <p className="mt-3 font-manrope text-[12.5px] leading-relaxed text-[#4b5563]">
          Answer two questions to see the single route that owns your issue. Choosing an answer never asks for credentials and sends nothing.
        </p>

        {/* White Diagnostic Card */}
        <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
          {/* Question 1 */}
          <div>
            <h3 className="font-dm-serif text-[18px] font-normal text-[#071324]">
              What do you need help with?
            </h3>
            <div className="mt-3.5 flex flex-col gap-2.5">
              {helpOptions.map((option) => {
                const isChecked = helpCategory === option;
                return (
                  <label
                    key={option}
                    onClick={() => setHelpCategory(option)}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 text-xs font-manrope transition ${
                      isChecked
                        ? "border-[#0284c7] bg-sky-50/40 text-[#071324] font-medium"
                        : "border-slate-200/90 bg-white text-[#475569] hover:border-slate-300"
                    }`}
                  >
                    <div
                      className={`flex size-4 shrink-0 items-center justify-center rounded-full border transition ${
                        isChecked ? "border-[#0284c7]" : "border-slate-300"
                      }`}
                    >
                      {isChecked && <div className="size-2 rounded-full bg-[#0284c7]" />}
                    </div>
                    <span>{option}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Question 2 */}
          <div className="mt-6">
            <h3 className="font-dm-serif text-[18px] font-normal text-[#071324]">
              Which describes you best?
            </h3>
            <div className="mt-3.5 flex flex-col gap-2.5">
              {roleOptions.map((option) => {
                const isChecked = userRole === option;
                return (
                  <label
                    key={option}
                    onClick={() => setUserRole(option)}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 text-xs font-manrope transition ${
                      isChecked
                        ? "border-[#0284c7] bg-sky-50/40 text-[#071324] font-medium"
                        : "border-slate-200/90 bg-white text-[#475569] hover:border-slate-300"
                    }`}
                  >
                    <div
                      className={`flex size-4 shrink-0 items-center justify-center rounded-full border transition ${
                        isChecked ? "border-[#0284c7]" : "border-slate-300"
                      }`}
                    >
                      {isChecked && <div className="size-2 rounded-full bg-[#0284c7]" />}
                    </div>
                    <span>{option}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Example Result Box */}
          <div className="mt-6 rounded-2xl border border-slate-100 bg-[#f8fafc] p-4 sm:p-5">
            <span className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-slate-400">
              EXAMPLE RESULT
            </span>
            <h4 className="mt-2 font-manrope text-[15px] font-bold text-[#071324]">
              Your primary route appears here
            </h4>
            <p className="mt-1 font-manrope text-xs leading-relaxed text-[#64748b]">
              One destination, with an optional alternate. The result updates when an answer changes.
            </p>
            <div className="mt-4 border-t border-slate-200/60 pt-3">
              <p className="font-manrope text-[11px] leading-relaxed text-[#94a3b8]">
                If the category is unclear, a general recovery route is shown instead.
              </p>
            </div>
          </div>
        </div>
      </div>
      )}

      {/* DESKTOP VERSION (hidden sm:block) */}
      {showDesktop && (
        <div className="hidden sm:block py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1020px] px-6 sm:px-8">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="font-dm-serif text-3xl font-normal leading-[1.18] tracking-tight text-[#071324] sm:text-4xl lg:text-[44px]">
              Two questions, one primary route
            </h2>
            <p className="mx-auto mt-3 max-w-[680px] font-manrope text-xs leading-relaxed text-[#64748b] sm:text-sm sm:leading-relaxed">
              Answer two questions to see the single route that owns your issue. Choosing an answer never asks for credentials and sends nothing.
            </p>
          </div>

          {/* Diagnostic 2-Column Container */}
          <div className="mt-12 grid grid-cols-1 gap-8 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl sm:p-10 lg:grid-cols-2 lg:gap-12">
            {/* Left Column: Radio Option Groups */}
            <div className="flex flex-col">
              {/* Question 1 */}
              <div>
                <h3 className="font-dm-serif text-lg font-normal text-[#071324] sm:text-xl">
                  What do you need help with?
                </h3>
                <div className="mt-3.5 flex flex-col gap-2.5">
                  {helpOptions.map((option) => {
                    const isChecked = helpCategory === option;
                    return (
                      <label
                        key={option}
                        className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 text-xs transition sm:text-[13px] font-manrope ${
                          isChecked
                            ? "border-[#2563eb] bg-blue-50/50 text-[#071324] font-semibold"
                            : "border-slate-200/90 bg-white text-[#475569] hover:border-slate-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="helpCategory"
                          checked={isChecked}
                          onChange={() => setHelpCategory(option)}
                          className="size-4 shrink-0 accent-[#2563eb]"
                        />
                        <span>{option}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Question 2 */}
              <div className="mt-8">
                <h3 className="font-dm-serif text-lg font-normal text-[#071324] sm:text-xl">
                  Which describes you best?
                </h3>
                <div className="mt-3.5 flex flex-col gap-2.5">
                  {roleOptions.map((option) => {
                    const isChecked = userRole === option;
                    return (
                      <label
                        key={option}
                        className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 text-xs transition sm:text-[13px] font-manrope ${
                          isChecked
                            ? "border-[#2563eb] bg-blue-50/50 text-[#071324] font-semibold"
                            : "border-slate-200/90 bg-white text-[#475569] hover:border-slate-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="userRole"
                          checked={isChecked}
                          onChange={() => setUserRole(option)}
                          className="size-4 shrink-0 accent-[#2563eb]"
                        />
                        <span>{option}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Result Box & Laptop Photo */}
            <div className="flex flex-col justify-between rounded-2xl border border-slate-200/70 bg-slate-50/60 p-6 sm:p-7">
              <div>
                <span className="font-mono text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                  EXAMPLE RESULT
                </span>
                <h4 className="mt-2 font-manrope text-base font-bold text-[#071324] sm:text-lg">
                  Your primary route appears here
                </h4>
                <p className="mt-1 font-manrope text-xs leading-relaxed text-[#64748b]">
                  One destination, with scope and rationale. The result updates when an answer changes.
                </p>
                <div className="mt-4 border-t border-slate-200/60 pt-3">
                  <p className="font-manrope text-[11px] leading-relaxed text-slate-400">
                    Select a category to see its primary and secondary routes to relevant teams.
                  </p>
                </div>
              </div>

              {/* Laptop photograph (ahs3.png) */}
              <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200/70 shadow-sm">
                <Image
                  src="/Support-Accessibility-01-help-support/ahs3.png"
                  alt="Laptop computer in workspace ready for developer or support session"
                  fill
                  sizes="(min-width: 1024px) 460px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </section>
  );
}
