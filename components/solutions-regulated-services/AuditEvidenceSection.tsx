import Image from "next/image";
import { CheckCircleGreenIcon, DarkDocCheckHeaderIcon } from "./icons";

const auditRecords = [
  {
    title: "Actor & Credentials",
    description: "Who did it. Authentication method. Session context.",
  },
  {
    title: "Mandate Reference",
    description: "Which delegation was checked. Valid? In scope?",
  },
  {
    title: "Action & Resource",
    description: "What was done. On what. When.",
  },
  {
    title: "Decision & Reason",
    description: "Approved or denied. Policy evaluation trail.",
  },
  {
    title: "Immutable Proof",
    description: "Cryptographic signature. Cannot be altered. Regulator can verify.",
  },
];

export default function AuditEvidenceSection() {
  return (
    <section className="bg-[#f0f4f9] px-5 py-12 sm:bg-white sm:px-10 lg:px-16 lg:py-24 xl:px-20">
      <div className="mx-auto max-w-[1140px]">
        {/* Mobile Section Heading with Doc Check Icon */}
        <div className="mb-6 flex items-center gap-3 sm:hidden">
          <DarkDocCheckHeaderIcon className="size-6 shrink-0 text-[#071426]" />
          <h2 className="font-dm-serif text-[26px] font-normal leading-[1.15] text-azure-9">
            Audit evidence &amp;
            <br />
            compliance trail
          </h2>
        </div>

        {/* Mobile View: Standalone Card + Callout (hidden on tablet/desktop) */}
        <div className="flex flex-col gap-4 sm:hidden">
          <div className="flex flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
            <p className="font-manrope text-[12.5px] font-semibold text-azure-9">
              Every regulated action records:
            </p>

            <div className="flex flex-col gap-2.5 pt-1">
              {auditRecords.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-3 rounded-xl bg-[#f4f7fb] p-3"
                >
                  <CheckCircleGreenIcon className="size-4 shrink-0 text-emerald-500" />
                  <div>
                    <h4 className="font-manrope text-[12.5px] font-bold text-azure-9">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 font-manrope text-[11px] text-azure-47">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Bottom Callout */}
          <div className="rounded-2xl border border-sky-300 bg-[#f0f7fd] p-4.5">
            <p className="font-manrope text-[11.5px] leading-relaxed text-azure-9">
              <strong className="font-bold text-azure-9">
                Compliance-Ready:
              </strong>{" "}
              <span className="text-azure-47">
                Evidence can be exported in compliance formats (for SOX audits,
                HIPAA inquiries, FedRAMP reviews, etc.). Retention policy
                controlled by your organization.
              </span>
            </p>
          </div>
        </div>

        {/* Desktop View: Full-width / large photo section with heading, cards, and glass bar inside */}
        <div className="relative hidden w-full overflow-hidden rounded-[24px] px-6 py-16 shadow-[0_4px_30px_rgba(0,0,0,0.12)] sm:block sm:px-10 sm:py-20 lg:px-14 lg:py-24">
          {/* Background Photo (rs3.png) */}
          <Image
            src="/solutions-regulated-services/rs3.png"
            alt="Auditors and executive board reviewing compliance trail"
            fill
            sizes="(min-width: 1280px) 1140px, 100vw"
            className="object-cover object-[center_35%] brightness-90 contrast-[1.05]"
            priority={false}
          />

          {/* Dark Blue Overlay Matching Reference */}
          <div className="absolute inset-0 bg-[#071426]/75" />

          {/* Content Layer */}
          <div className="relative z-10 mx-auto flex max-w-[880px] flex-col items-center">
            {/* White Heading */}
            <h2 className="mb-10 text-center font-dm-serif text-3xl font-normal tracking-tight text-white-solid sm:text-4xl lg:mb-12 lg:text-[42px]">
              Audit evidence &amp; compliance trail
            </h2>

            {/* White Container with 5 Records */}
            <div className="w-full rounded-2xl bg-white p-7 shadow-2xl sm:p-9 lg:p-10">
              <p className="font-manrope text-[13px] font-semibold text-azure-9 sm:text-sm">
                Every regulated action records:
              </p>

              <div className="mt-4 flex flex-col gap-3">
                {auditRecords.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-3.5 rounded-xl bg-[#f4f7fb] px-4 py-3 sm:px-5 sm:py-3.5"
                  >
                    <CheckCircleGreenIcon className="size-4 shrink-0 text-emerald-500" />
                    <div>
                      <h4 className="font-manrope text-[12.5px] font-bold text-azure-9 sm:text-[13px]">
                        {item.title}
                      </h4>
                      <p className="mt-0.5 font-manrope text-[11px] text-azure-47 sm:text-xs">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Glass Callout Bar */}
            <div className="mt-5 w-full rounded-2xl border border-white/20 bg-[#071426]/70 p-5 backdrop-blur-md sm:mt-6 sm:p-6">
              <p className="font-manrope text-xs leading-relaxed text-slate-200 sm:text-[13px]">
                <strong className="font-semibold text-white">Compliance-Ready:</strong>{" "}
                Evidence can be exported in compliance formats (for SOX audits, HIPAA inquiries, FedRAMP reviews, etc.). Retention policy controlled by your organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
