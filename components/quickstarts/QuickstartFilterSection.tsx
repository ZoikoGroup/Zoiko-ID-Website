"use client";

import Image from "next/image";
import { useState } from "react";

export default function QuickstartFilterSection() {
  const [selectedGoal, setSelectedGoal] = useState("All");
  const [selectedActor, setSelectedActor] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const notifyFilter = (type: string, value: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("quickstart-filter-change", {
          detail: { type, value },
        })
      );
    }
  };

  const handleGoalChange = (val: string) => {
    setSelectedGoal(val);
    notifyFilter("goal", val);
  };

  const handleActorChange = (val: string) => {
    setSelectedActor(val);
    notifyFilter("actor", val);
  };

  const handleLangChange = (val: string) => {
    setSelectedLanguage(val);
    notifyFilter("language", val);
  };

  const handleLevelChange = (val: string) => {
    setSelectedLevel(val);
    notifyFilter("level", val);
  };

  // Grouped rows matching exact Figma coordinates and layout
  const goalRows = [
    ["All", "Authenticate"],
    ["Decide", "Delegate"],
    ["Review"],
  ];

  const actorRows = [
    ["All", "Human"],
    ["Service", "AI Agent"],
  ];

  const languageRows = [
    ["All", "JavaScript"],
    ["Python", "Go"],
  ];

  const levelRows = [
    ["All", "Advanced", "Intro"],
  ];

  const renderButton = (
    label: string,
    currentSelected: string,
    onClick: (val: string) => void
  ) => {
    const isActive = currentSelected === label;
    return (
      <button
        key={label}
        type="button"
        onClick={() => onClick(label)}
        className={`cursor-pointer whitespace-nowrap rounded-[6px] px-4 py-2 text-[13.6px] font-bold transition-all duration-150 ${
          isActive
            ? "border border-azure-48 bg-azure-48 text-white-solid shadow-sm"
            : "border border-[#E2E8F0] bg-white-solid text-[#475569] hover:border-slate-300 hover:text-slate-900"
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <section
      id="quickstart-chooser"
      className="relative overflow-hidden bg-[#F8FAFC] bg-cover bg-center bg-no-repeat px-6 py-20 sm:px-10 sm:py-24 lg:px-20 lg:py-28 xl:px-40"
      style={{
        backgroundImage: "url('/quickstarts/quickstart-filter-bg.webp')",
      }}
    >
      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col items-center gap-10">
        {/* Chooser Intro Heading & Subtitle */}
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#071426] sm:text-5xl lg:text-[52px]">
            Choose your path
          </h2>
          <p className="max-w-[850px] font-manrope text-base font-normal leading-7 text-[#0D1F35]">
            Filter by your integration goal, actor type, and preferred language. Each quickstart includes prerequisites, verified code samples, error scenarios, and next steps.
          </p>
        </div>

        {/* Filter Card */}
        <div className="w-full rounded-[12px] border border-[#E2E8F0] bg-white-solid p-6 shadow-sm sm:p-9">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Goal Filter Column */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/quickstarts/filter-goal-icon.svg"
                  alt=""
                  width={15}
                  height={15}
                />
                <span className="font-manrope text-[14.4px] font-bold text-[#071426]">
                  Goal
                </span>
              </div>
              <div className="flex flex-col gap-2.5">
                {goalRows.map((row, rIdx) => (
                  <div key={rIdx} className="flex flex-wrap items-center gap-2">
                    {row.map((btn) =>
                      renderButton(btn, selectedGoal, handleGoalChange)
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Actor Filter Column */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/quickstarts/filter-actor-icon.svg"
                  alt=""
                  width={15}
                  height={15}
                />
                <span className="font-manrope text-[14.4px] font-bold text-[#071426]">
                  Actor
                </span>
              </div>
              <div className="flex flex-col gap-2.5">
                {actorRows.map((row, rIdx) => (
                  <div key={rIdx} className="flex flex-wrap items-center gap-2">
                    {row.map((btn) =>
                      renderButton(btn, selectedActor, handleActorChange)
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Language Filter Column */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/quickstarts/filter-lang-icon.svg"
                  alt=""
                  width={15}
                  height={15}
                />
                <span className="font-manrope text-[14.4px] font-bold text-[#071426]">
                  Language
                </span>
              </div>
              <div className="flex flex-col gap-2.5">
                {languageRows.map((row, rIdx) => (
                  <div key={rIdx} className="flex flex-wrap items-center gap-2">
                    {row.map((btn) =>
                      renderButton(btn, selectedLanguage, handleLangChange)
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Level Filter Column */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/quickstarts/filter-level-icon.svg"
                  alt=""
                  width={15}
                  height={15}
                />
                <span className="font-manrope text-[14.4px] font-bold text-[#071426]">
                  Level
                </span>
              </div>
              <div className="flex flex-col gap-2.5">
                {levelRows.map((row, rIdx) => (
                  <div key={rIdx} className="flex flex-wrap items-center gap-2">
                    {row.map((btn) =>
                      renderButton(btn, selectedLevel, handleLevelChange)
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
