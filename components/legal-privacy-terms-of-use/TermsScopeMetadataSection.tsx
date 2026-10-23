import React from "react";
import Image from "next/image";

interface SectionProps {
  view?: "desktop" | "mobile";
}

const pageLinks = [
  { label: "Scope", href: "#scope" },
  { label: "Metadata", href: "#metadata" },
  { label: "Clauses", href: "#clauses" },
  { label: "Related notices", href: "#related-notices" },
  { label: "Versions", href: "#versions" },
  { label: "Print and share", href: "#print-share" },
  { label: "Questions", href: "#questions" },
];

export default function TermsScopeMetadataSection({ view }: SectionProps) {
  if (view === "mobile") {
    return (
      <section id="metadata" className="w-full border-b border-[#D9E1EC] bg-[#F8FAFC] px-[22px] py-[60px]">
        <div className="flex flex-col gap-[36px]">
          {/* Aside - On this page Card */}
          <div className="flex flex-col rounded-[14px] border border-[#D9E1EC] bg-white p-[22px]">
            <div className="pb-[14px]">
              <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#5B6B82]">
                Document identity
              </span>
            </div>
            {pageLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center border-b border-[#D9E1EC] py-2 font-['Manrope'] text-[14px] leading-[23.8px] text-[#0B1B33] transition-colors hover:text-[#0891B2]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* 01 Applicability summary */}
          <div className="flex flex-col">
            <span className="font-['DM_Serif_Display'] text-[14px] tracking-[0.12em] text-[#0891B2]">
              01
            </span>
            <div className="pb-[26.83px] pt-[9px]">
              <h2 className="font-['DM_Serif_Display'] text-[32px] font-normal leading-[35.84px] text-[#0B1B33]">
                Applicability summary
              </h2>
            </div>
            <div className="flex flex-col gap-[14px] rounded-[16px] border border-[#D9E1EC] bg-white p-[22px]">
              <div className="w-fit rounded-full bg-[#FEF3C7] px-3 py-1">
                <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.08em] text-[#92400E]">
                  Pending Legal
                </span>
              </div>
              <p className="font-['Manrope'] text-[15px] font-normal leading-[25.5px] text-[#5B6B82]">
                The “Applies to” and “Does not replace”
                <br />
                statements appear only when Legal provides
                <br />
                the exact approved wording. Until then this
                <br />
                summary is omitted, and no assumption is
                <br />
                made about enterprise contracts or other
                <br />
                agreements.
              </p>
            </div>
          </div>

          {/* 02 Document metadata */}
          <div className="flex flex-col">
            <span className="font-['DM_Serif_Display'] text-[14px] tracking-[0.12em] text-[#0891B2]">
              02
            </span>
            <div className="pb-[0.83px] pt-[9px]">
              <h2 className="font-['DM_Serif_Display'] text-[32px] font-normal leading-[35.84px] text-[#0B1B33]">
                Document metadata
              </h2>
            </div>

            <div className="flex flex-col gap-[14px] pt-[26px]">
              {/* Version */}
              <div className="flex flex-col gap-[10px] rounded-[12px] border border-[#D9E1EC] bg-white p-[18px] pb-[19px] pt-[15px]">
                <span className="font-['Manrope'] text-[14px] font-bold leading-[23.8px] text-[#0B1B33]">
                  Version
                </span>
                <div className="w-fit rounded-[6px] bg-[#EEF2F7] px-2 py-0.5">
                  <span className="font-['Manrope'] text-[13.7px] leading-[23.8px] text-[#5B6B82]">
                    Required from Legal
                  </span>
                </div>
              </div>

              {/* Effective date */}
              <div className="flex flex-col gap-[10px] rounded-[12px] border border-[#D9E1EC] bg-white p-[18px] pb-[19px] pt-[15px]">
                <span className="font-['Manrope'] text-[14px] font-bold leading-[23.8px] text-[#0B1B33]">
                  Effective date
                </span>
                <div className="w-fit rounded-[6px] bg-[#EEF2F7] px-2 py-0.5">
                  <span className="font-['Manrope'] text-[13.7px] leading-[23.8px] text-[#5B6B82]">
                    Required from Legal
                  </span>
                </div>
              </div>

              {/* Last updated */}
              <div className="flex flex-col gap-[10px] rounded-[12px] border border-[#D9E1EC] bg-white p-[18px] pb-[19px] pt-[15px]">
                <span className="font-['Manrope'] text-[14px] font-bold leading-[23.8px] text-[#0B1B33]">
                  Last updated
                </span>
                <div className="w-fit rounded-[6px] bg-[#EEF2F7] px-2 py-0.5">
                  <span className="font-['Manrope'] text-[13.7px] leading-[23.8px] text-[#5B6B82]">
                    Required from Legal, if permitted
                  </span>
                </div>
              </div>

              {/* Publishing legal entity */}
              <div className="flex flex-col gap-[10px] rounded-[12px] border border-[#D9E1EC] bg-white p-[18px] pb-[19px] pt-[15px]">
                <span className="font-['Manrope'] text-[14px] font-bold leading-[23.8px] text-[#0B1B33]">
                  Publishing legal entity
                </span>
                <div className="w-fit rounded-[6px] bg-[#EEF2F7] px-2 py-0.5">
                  <span className="font-['Manrope'] text-[13.8px] leading-[23.8px] text-[#5B6B82]">
                    Required from Corporate Legal
                  </span>
                </div>
              </div>

              {/* Legal approval ID */}
              <div className="flex flex-col gap-[10px] rounded-[12px] border border-[#D9E1EC] bg-white p-[18px] pb-[19px] pt-[15px]">
                <span className="font-['Manrope'] text-[14px] font-bold leading-[23.8px] text-[#0B1B33]">
                  Legal approval ID
                </span>
                <div className="w-fit rounded-[6px] bg-[#EEF2F7] px-2 py-0.5">
                  <span className="font-['Manrope'] text-[14px] leading-[23.8px] text-[#5B6B82]">
                    Required from Legal Ops
                  </span>
                </div>
              </div>

              {/* Jurisdiction scope */}
              <div className="flex flex-col gap-[10px] rounded-[12px] border border-[#D9E1EC] bg-white p-[18px] pb-[19px] pt-[15px]">
                <span className="font-['Manrope'] text-[14px] font-bold leading-[23.8px] text-[#0B1B33]">
                  Jurisdiction scope
                </span>
                <div className="w-fit rounded-[6px] bg-[#EEF2F7] px-2 py-0.5">
                  <span className="font-['Manrope'] text-[13.9px] leading-[23.8px] text-[#5B6B82]">
                    Only if approved
                  </span>
                </div>
              </div>
            </div>

            <div className="pb-[0.59px] pt-[14.79px]">
              <p className="font-['Manrope'] text-[14px] leading-[23.8px] text-[#5B6B82]">
                A missing field blocks publication. No placeholder is
                <br />
                published in its place, and no date is filled in from
                <br />
                today.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // DESKTOP VERSION
  return (
    <section id="metadata" className="w-full bg-[#F8FAFC] px-8 lg:px-[160px] py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] justify-center gap-[90px]">
        {/* Left Column: Aside - On this page (width: 260px) */}
        <aside className="w-[260px] shrink-0">
          <div className="sticky top-28 flex flex-col">
            <div className="pb-[14px]">
              <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#5B6B82]">
                Document identity
              </span>
            </div>
            {pageLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center border-b border-[#D9E1EC] py-2 font-['Manrope'] text-[14px] leading-[23.8px] text-[#0B1B33] transition-colors hover:text-[#0891B2]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </aside>

        {/* Right Column: Content (width: 770px) */}
        <div className="flex w-[770px] flex-col gap-9">
          {/* Applicability summary */}
          <div className="flex flex-col gap-[13px]">
            <h2 className="font-['DM_Serif_Display'] text-[52px] font-normal leading-[58.24px] text-[#0B1B33]">
              Applicability summary
            </h2>
            <div className="pt-[5px]">
              <p className="font-['Manrope'] text-[18px] font-normal leading-[30.6px] text-[#5B6B82]">
                The “Applies to” and “Does not replace” statements appear only
                <br />
                with Legal’s exact wording. Until then the summary is omitted,
                <br />
                and no assumption is made about enterprise contracts.
              </p>
            </div>

            {/* Summary withheld card */}
            <div className="flex items-start gap-[18px] rounded-[18px] border border-[#D9E1EC] bg-white p-7 pb-[26px] pt-[33px]">
              <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[#E4F3F8]">
                <Image
                  src="/legal-privacy-terms-of-use/withheld-alert.svg"
                  alt="Alert"
                  width={26}
                  height={26}
                />
              </div>
              <div className="flex flex-col">
                <h4 className="font-['Manrope'] text-[18px] font-bold leading-[25.2px] text-[#0B1B33]">
                  Summary withheld
                </h4>
                <p className="mt-[6px] font-['Manrope'] text-[15px] font-normal leading-[25.5px] text-[#5B6B82]">
                  Omitted rather than guessed. No override of other
                  <br />
                  agreements is implied.
                </p>
                <div className="mt-4 w-fit rounded-full bg-[#FEF3C7] px-3 py-1">
                  <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.08em] text-[#92400E]">
                    Pending Legal
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Document identity */}
          <div className="flex flex-col gap-[13px]">
            <h2 className="font-['DM_Serif_Display'] text-[52px] font-normal leading-[58.24px] text-[#0B1B33]">
              Document identity
            </h2>
            <div className="pt-[5px]">
              <p className="font-['Manrope'] text-[18px] font-normal leading-[30.6px] text-[#5B6B82]">
                This page presents the Terms of Use for Zoiko iD. The operative
                <br />
                clauses are supplied by Legal and are not shown on this shell.
                <br />
                Every identity field is filled only from the approved record.
              </p>
            </div>

            {/* 2x2 Grid */}
            <div className="grid grid-cols-2 gap-[14px] pt-[17px]">
              {/* Public label */}
              <div className="flex h-[90px] items-center gap-[14px] rounded-[14px] border border-[#D9E1EC] bg-white px-5 py-[18px]">
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[#E4F3F8]">
                  <Image
                    src="/legal-privacy-terms-of-use/identity-label.svg"
                    alt="Public label icon"
                    width={26}
                    height={26}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-['Manrope'] text-[14px] font-bold leading-[23.8px] text-[#0B1B33]">
                    Public label
                  </span>
                  <span className="font-['Manrope'] text-[14px] leading-[23.8px] text-[#5B6B82]">
                    Terms of Use
                  </span>
                </div>
              </div>

              {/* Publishing entity */}
              <div className="flex h-[90px] items-center gap-[14px] rounded-[14px] border border-[#D9E1EC] bg-white px-5 py-[18px]">
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[#E4F3F8]">
                  <Image
                    src="/legal-privacy-terms-of-use/identity-entity.svg"
                    alt="Publishing entity icon"
                    width={26}
                    height={26}
                  />
                </div>
                <div className="flex flex-col gap-[3.9px]">
                  <span className="font-['Manrope'] text-[14px] font-bold leading-[23.8px] text-[#0B1B33]">
                    Publishing entity
                  </span>
                  <div className="w-fit rounded-[6px] bg-[#EEF2F7] px-2 py-0.5">
                    <span className="font-['Manrope'] text-[14px] leading-[23.8px] text-[#5B6B82]">
                      Pending Legal
                    </span>
                  </div>
                </div>
              </div>

              {/* Effective date */}
              <div className="flex h-[90px] items-center gap-[14px] rounded-[14px] border border-[#D9E1EC] bg-white px-5 py-[18px]">
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[#E4F3F8]">
                  <Image
                    src="/legal-privacy-terms-of-use/identity-effective.svg"
                    alt="Effective date icon"
                    width={26}
                    height={26}
                  />
                </div>
                <div className="flex flex-col gap-[3.9px]">
                  <span className="font-['Manrope'] text-[14px] font-bold leading-[23.8px] text-[#0B1B33]">
                    Effective date
                  </span>
                  <div className="w-fit rounded-[6px] bg-[#EEF2F7] px-2 py-0.5">
                    <span className="font-['Manrope'] text-[14px] leading-[23.8px] text-[#5B6B82]">
                      Pending Legal
                    </span>
                  </div>
                </div>
              </div>

              {/* Version */}
              <div className="flex h-[90px] items-center gap-[14px] rounded-[14px] border border-[#D9E1EC] bg-white px-5 py-[18px]">
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[#E4F3F8]">
                  <Image
                    src="/legal-privacy-terms-of-use/identity-version.svg"
                    alt="Version icon"
                    width={26}
                    height={26}
                  />
                </div>
                <div className="flex flex-col gap-[3.9px]">
                  <span className="font-['Manrope'] text-[14px] font-bold leading-[23.8px] text-[#0B1B33]">
                    Version
                  </span>
                  <div className="w-fit rounded-[6px] bg-[#EEF2F7] px-2 py-0.5">
                    <span className="font-['Manrope'] text-[14px] leading-[23.8px] text-[#5B6B82]">
                      Pending Legal
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
