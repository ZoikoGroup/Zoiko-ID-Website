"use client";

import React from "react";
import Image from "next/image";
import { User, Key, CheckCircle2, FileText, Umbrella } from "lucide-react";

interface RolesAndPolicySectionProps {
  view?: "all" | "desktop" | "mobile";
}

const roles = [
  {
    icon: User,
    title: "Principal",
    description: "The party whose authority is being used.",
  },
  {
    icon: Key,
    title: "Delegate",
    description: "The actor who receives a bounded grant.",
  },
  {
    icon: CheckCircle2,
    title: "Approver",
    description: "Someone with verified authority to grant it.",
  },
  {
    icon: FileText,
    title: "Resource owner",
    description: "The owner of the target the action touches.",
  },
  {
    icon: Umbrella,
    title: "Policy service",
    description: "Evaluates the request against current rules.",
  },
];

export default function RolesAndPolicySection({
  view = "all",
}: RolesAndPolicySectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section className="hidden sm:block relative w-full bg-[#f8fafc] py-16 lg:py-24 border-t border-[#edf2f7]">
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Heading and 5 Roles List */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h2
                  className="font-dm-serif font-['DM_Serif_Display'] text-[38px] sm:text-[44px] lg:text-[48px] font-normal leading-[1.12] tracking-tight text-[#0b1b33]"
                  style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
                >
                  Principal, delegate,<br />
                  approver and policy
                </h2>

                <p className="mt-4 font-['Manrope'] text-[14px] sm:text-[14.5px] leading-[1.7] text-[#5b6b82] max-w-[500px]">
                  Five roles appear in every authority decision. Each one has its own question, and
                  a missing role is a reason to deny, not a reason to assume.
                </p>

                {/* Vertical Roles List with connecting line */}
                <div className="mt-8 lg:mt-10 flex flex-col">
                  {roles.map((role, idx) => {
                    const Icon = role.icon;
                    const isLast = idx === roles.length - 1;

                    return (
                      <div key={role.title} className="relative flex items-start gap-4 pb-6 last:pb-0">
                        {/* Connecting Line */}
                        {!isLast && (
                          <div className="absolute left-[17px] top-[32px] bottom-0 w-[1.5px] bg-[#bfdbfe]" />
                        )}

                        {/* Circular Icon Badge */}
                        <div className="relative z-10 flex size-[36px] shrink-0 items-center justify-center rounded-full border border-[#93c5fd] bg-white text-[#2563eb] shadow-xs">
                          <Icon className="size-[17px] stroke-[1.8]" />
                        </div>

                        {/* Text Details */}
                        <div className="pt-0.5">
                          <h3 className="font-['Manrope'] text-[14.5px] font-bold text-[#0b1b33]">
                            {role.title}
                          </h3>
                          <p className="mt-0.5 font-['Manrope'] text-[12px] leading-relaxed text-[#64748b]">
                            {role.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Signing Document on Blue Clipboard */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative h-[420px] sm:h-[460px] lg:h-[490px] w-full max-w-[520px] overflow-hidden rounded-[28px] shadow-sm">
                  <Image
                    src="/authorization-delegated-authority/ada7.png"
                    alt="Professional signing an authority document on a blue clipboard with a pen"
                    fill
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <section className="sm:hidden relative w-full bg-[#f4f6fa] px-4 py-9 border-t border-[#edf2f7]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider uppercase text-[#00bcd4]">
              05 · WHO ACTS, FOR WHOM
            </span>
          </div>

          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[28px] sm:text-[32px] font-normal leading-[1.14] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            Principal, delegate,<br />approver and policy
          </h2>

          <p className="mt-3 font-['Manrope'] text-[13px] leading-[1.65] text-[#5b6b82]">
            Five roles appear in every authority decision. Each one has its own question, and a missing role is a reason to deny, not a reason to assume.
          </p>

          {/* Connected Vertical Roles List */}
          <div className="mt-7 flex flex-col">
            {roles.map((role, idx) => {
              const Icon = role.icon;
              const isLast = idx === roles.length - 1;

              return (
                <div key={role.title} className="relative flex items-start gap-3.5 pb-5 last:pb-0">
                  {/* Connecting Line */}
                  {!isLast && (
                    <div className="absolute left-[17px] top-[32px] bottom-0 w-[1.5px] bg-[#93c5fd]" />
                  )}

                  {/* Circular Icon Badge */}
                  <div className="relative z-10 flex size-[36px] shrink-0 items-center justify-center rounded-full border border-[#93c5fd] bg-white text-[#2563eb] shadow-xs">
                    <Icon className="size-[17px] stroke-[1.8]" />
                  </div>

                  {/* Text Details */}
                  <div className="pt-0.5">
                    <h3 className="font-['Manrope'] text-[14px] font-bold text-[#0b1b33]">
                      {role.title}
                    </h3>
                    <p className="mt-0.5 font-['Manrope'] text-[11.5px] leading-relaxed text-[#64748b]">
                      {role.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Badges */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#f3e8ff] px-2.5 py-0.5 font-['Manrope'] text-[10px] font-bold tracking-wider text-[#7c3aed] uppercase">
              ILLUSTRATIVE
            </span>
            <span className="rounded-full bg-[#eef2f6] px-2.5 py-0.5 font-['Manrope'] text-[9.5px] font-bold tracking-wider text-[#475569] uppercase">
              TEXT SEQUENCE IN PLACE OF A DIAGRAM
            </span>
          </div>

          {/* Image */}
          <div className="mt-5 relative h-[280px] w-full overflow-hidden rounded-[22px] shadow-sm bg-slate-100">
            <Image
              src="/authorization-delegated-authority/ada26.jpg"
              alt="Team discussing roles and authority in office"
              fill
              sizes="(max-width: 640px) 100vw, 400px"
              className="object-cover object-center"
            />
          </div>
        </section>
      )}
    </>
  );
}
