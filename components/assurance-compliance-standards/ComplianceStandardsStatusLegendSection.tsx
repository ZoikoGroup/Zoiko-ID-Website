import Image from "next/image";
import React from "react";

interface StatusCardProps {
  badge: string;
  badgeBg: string;
  badgeTextColor: string;
  badgeBorder?: string;
  title: string;
  description: React.ReactNode;
  bottomBoxText: string;
}

const statusCards: StatusCardProps[] = [
  {
    badge: "DESIGNED FOR",
    badgeBg: "bg-[#DBEAFE]",
    badgeTextColor: "text-[#1E40AF]",
    title: "Intended design",
    description: (
      <>
        The architecture is built with this standard in
        <br />
        mind. Not a statement of production support.
      </>
    ),
    bottomBoxText: "Confirm scope with engineering",
  },
  {
    badge: "PLANNED",
    badgeBg: "bg-[#FEF3C7]",
    badgeTextColor: "text-[#92400E]",
    title: "Roadmap intent",
    description: (
      <>
        Not released. Never described or styled as
        <br />
        available.
      </>
    ),
    bottomBoxText: "No delivery date is stated",
  },
  {
    badge: "IMPLEMENTED",
    badgeBg: "bg-[#DCFCE7]",
    badgeTextColor: "text-[#166534]",
    title: "Verified capability",
    description: "Confirmed by an approved capability record for a stated scope and version.",
    bottomBoxText: "Scope and version shown",
  },
  {
    badge: "INDEPENDENTLY ASSESSED",
    badgeBg: "bg-[#CCFBF1]",
    badgeTextColor: "text-[#115E59]",
    title: "Outside review",
    description: (
      <>
        Reviewed by an independent party. The report,
        <br />
        scope and date are named.
      </>
    ),
    bottomBoxText: "Report access is gated",
  },
  {
    badge: "CERTIFIED",
    badgeBg: "bg-[#EDE9FE]",
    badgeTextColor: "text-[#5B21B6]",
    title: "Certification",
    description: (
      <>
        Issued by a named certifying body, with exact
        <br />
        scope, date and validity.
      </>
    ),
    bottomBoxText: "Shown only with a verified record",
  },
  {
    badge: "NOT PUBLICLY CONFIRMED",
    badgeBg: "bg-[#F1F5F9]",
    badgeTextColor: "text-[#64748B]",
    badgeBorder: "border border-dashed border-[#94A3B8]",
    title: "Unknown status",
    description: "No verified public record exists. Absence is never read as non-support.",
    bottomBoxText: "Ask for details via the expert route",
  },
];

export default function ComplianceStandardsStatusLegendSection() {
  return (
    <section className="bg-[#F1F5F9] px-6 py-16 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-[60px]">
        {/* Section Header */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal text-[#0B1B33] sm:text-4xl lg:text-[52px] lg:leading-[58.9px]">
            Six statuses, each with a precise meaning
          </h2>
          <div className="w-full max-w-[820px] pt-[1.3px]">
            <p className="font-manrope text-base font-normal leading-[25.6px] text-[#64748B]">
              A status is always shown as text, with its scope and the date it was last reviewed. A standard name alone never<br className="hidden md:inline" /> sets a status.
            </p>
          </div>
        </div>

        {/* 6 Status Cards Grid */}
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {statusCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col justify-between gap-2.5 rounded-[18px] border border-[#E2E8F0] bg-[#FFFFFF] p-[26px] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col gap-2.5">
                  <span
                    className={`inline-flex w-fit items-center justify-center rounded-full px-3 py-1.5 font-manrope text-[11px] font-extrabold uppercase leading-[17.6px] tracking-[0.08em] ${card.badgeBg} ${card.badgeTextColor} ${card.badgeBorder || ""}`}
                  >
                    {card.badge}
                  </span>

                  <h3 className="font-manrope text-[17px] font-bold leading-[27.2px] text-[#0B1B33]">
                    {card.title}
                  </h3>

                  <div className="font-manrope text-[14px] font-normal leading-[22.4px] text-[#64748B]">
                    {card.description}
                  </div>
                </div>

                <div className="mt-2.5 flex items-center rounded-[8px] bg-[#F1F5F9] px-2.5 py-2">
                  <span className="font-manrope text-[13px] font-normal leading-[20.8px] text-[#0B1B33]">
                    {card.bottomBoxText}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Notice Banner */}
          <div className="mt-3 flex items-center gap-3.5 rounded-r-[12px] border-l-4 border-[#F59E0B] bg-[#FFFBEB] px-[22px] py-[18px]">
            <Image
              src="/assurance-compliance-standards/icon-411_5732.svg"
              alt=""
              width={24}
              height={24}
              className="shrink-0"
            />
            <p className="font-manrope text-[15px] leading-[24px] text-[#0B1B33]">
              <span className="font-bold">Protocol names are not guarantees.</span>
              {" "}
              <span className="font-normal">
                Listing a protocol means it is a subject of the taxonomy. Production support is shown only where an approved
                <br className="hidden md:inline" />
                {" "}capability record exists.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
