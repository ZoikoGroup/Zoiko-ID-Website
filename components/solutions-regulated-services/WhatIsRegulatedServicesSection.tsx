import { QuestionMarkBadgeIcon } from "./icons";

export default function WhatIsRegulatedServicesSection() {
  return (
    <section className="bg-white px-5 py-12 lg:hidden">
      <div className="mx-auto max-w-[520px]">
        {/* Mobile Header with Dark Circular Question Mark Badge */}
        <div className="flex flex-col items-center text-center">
          <QuestionMarkBadgeIcon className="size-8" />
          <h2 className="mt-3.5 font-dm-serif text-[28px] font-normal leading-[1.18] text-azure-9">
            Identity +
            <br />
            Authority + Evidence
            <br />
            for regulated work
          </h2>
        </div>

        {/* Info Card */}
        <div className="mt-7 rounded-2xl border border-blue-100/90 bg-[#f4f8fc] p-6 text-left shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
          <p className="font-manrope text-[13.5px] font-semibold leading-relaxed text-slate-800">
            Regulated Services is a compliance-first identity infrastructure for
            sectors with explicit authority, audit, and evidence requirements.
          </p>

          <ul className="mt-5 space-y-3 font-manrope text-[13px] leading-relaxed text-slate-700">
            <li className="flex items-start gap-2.5">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-slate-500" />
              <span>
                <strong className="font-semibold text-slate-900">
                  Identity:
                </strong>{" "}
                Authenticate actors (humans, systems, agents) with verified
                credentials
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-slate-500" />
              <span>
                <strong className="font-semibold text-slate-900">
                  Authority:
                </strong>{" "}
                Define bounded delegation—scope, purpose, time, and revocation
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-slate-500" />
              <span>
                <strong className="font-semibold text-slate-900">
                  Evidence:
                </strong>{" "}
                Immutable audit trail linking actor → action → decision →
                resource
              </span>
            </li>
          </ul>

          <p className="mt-6 font-manrope text-[11.5px] leading-relaxed text-slate-500">
            <strong className="font-medium text-slate-700">
              No compliance warranties:
            </strong>{" "}
            Architecture supports your organization&apos;s regulatory framework.
            Final compliance assessment remains your responsibility.
          </p>
        </div>
      </div>
    </section>
  );
}
