import Image from "next/image";
import {
  ClockRefreshIcon,
  NeedsReviewIcon,
  CheckCircleGreenIcon,
  XCircleRedIcon,
  RevokedSlashIcon,
  OutcomesCheckboxHeaderIcon,
} from "./icons";

export default function VerificationOutcomesSection() {
  return (
    <section className="bg-[#f1f5f9] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-24 xl:px-20">
      <div className="mx-auto max-w-[1180px]">
        {/* Section Heading */}
        <h2 className="mb-8 text-center font-dm-serif text-[28px] font-normal leading-[1.18] tracking-tight text-azure-9 sm:text-4xl lg:mb-14 lg:text-[44px]">
          {/* Mobile Heading */}
          <span className="lg:hidden">
            <span className="inline-flex items-center justify-center gap-2.5">
              <OutcomesCheckboxHeaderIcon className="size-[22px] shrink-0" />
              <span>Verification</span>
            </span>
            <br />
            <span>outcomes &amp; freshness</span>
          </span>

          {/* Desktop Heading */}
          <span className="hidden lg:inline">
            Verification outcomes &amp; freshness
          </span>
        </h2>

        {/* Mobile Vertical Stack Layout (lg:hidden) */}
        <div className="flex flex-col gap-3.5 sm:max-w-none lg:hidden">
          {/* 1. Verified */}
          <div className="flex items-start gap-3.5 rounded-[18px] border border-slate-200/80 bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
              <CheckCircleGreenIcon className="size-5" />
            </div>
            <div>
              <h3 className="font-manrope text-[14.5px] font-bold text-azure-9">
                Verified
              </h3>
              <p className="mt-1 font-manrope text-xs leading-relaxed text-azure-47">
                Claims validated against authoritative source. Evidence current
                and matches applicant assertions.
              </p>
            </div>
          </div>

          {/* 2. Needs Review */}
          <div className="flex items-start gap-3.5 rounded-[18px] border border-slate-200/80 bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-50">
              <NeedsReviewIcon className="size-5" />
            </div>
            <div>
              <h3 className="font-manrope text-[14.5px] font-bold text-azure-9">
                Needs Review
              </h3>
              <p className="mt-1 font-manrope text-xs leading-relaxed text-azure-47">
                Verification inconclusive or partially successful. Human review
                required before decision.
              </p>
            </div>
          </div>

          {/* 3. Unable to Verify */}
          <div className="flex items-start gap-3.5 rounded-[18px] border border-slate-200/80 bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-red-50">
              <XCircleRedIcon className="size-5" />
            </div>
            <div>
              <h3 className="font-manrope text-[14.5px] font-bold text-azure-9">
                Unable to Verify
              </h3>
              <p className="mt-1 font-manrope text-xs leading-relaxed text-azure-47">
                Claims cannot be validated. Method unsupported, registry
                unavailable, or evidence insufficient.
              </p>
            </div>
          </div>

          {/* 4. Stale / Outdated */}
          <div className="flex items-start gap-3.5 rounded-[18px] border border-slate-200/80 bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-50">
              <ClockRefreshIcon className="size-5" />
            </div>
            <div>
              <h3 className="font-manrope text-[14.5px] font-bold text-azure-9">
                Stale / Outdated
              </h3>
              <p className="mt-1 font-manrope text-xs leading-relaxed text-azure-47">
                Verification older than policy threshold. Re-verification
                required to proceed.
              </p>
            </div>
          </div>

          {/* 5. Revoked */}
          <div className="flex items-start gap-3.5 rounded-[18px] border border-slate-200/80 bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-rose-50">
              <RevokedSlashIcon className="size-5" />
            </div>
            <div>
              <h3 className="font-manrope text-[14.5px] font-bold text-azure-9">
                Revoked
              </h3>
              <p className="mt-1 font-manrope text-xs leading-relaxed text-azure-47">
                Previously verified claim invalidated. Organization or applicant
                revoked permission or status changed.
              </p>
            </div>
          </div>

          {/* 6. Proof & Freshness Info Card */}
          <div className="rounded-[18px] border border-slate-200/80 bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-cyan-49" />
              <h3 className="font-manrope text-[14.5px] font-bold text-azure-9">
                Proof &amp; Freshness
              </h3>
            </div>
            <p className="mt-2.5 font-manrope text-xs leading-relaxed text-azure-47">
              Every verification result includes:{" "}
              <strong className="font-bold text-azure-9">Issuer</strong> (who
              verified),{" "}
              <strong className="font-bold text-azure-9">Evidence</strong> (what
              was checked),{" "}
              <strong className="font-bold text-azure-9">
                As-of timestamp
              </strong>{" "}
              (when checked),{" "}
              <strong className="font-bold text-azure-9">Expiry</strong> (when
              trust expires),{" "}
              <strong className="font-bold text-azure-9">Scope</strong> (what
              claim is supported). Never assume universal coverage.
            </p>
          </div>
        </div>

        {/* Desktop 2-Column Grid Layout (hidden lg:grid) */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:items-start lg:gap-7">
          {/* Left Column: 2 Cards + Image */}
          <div className="flex flex-col gap-5">
            {/* Stale / Outdated */}
            <div className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-200 hover:border-slate-300">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-amber-50">
                <ClockRefreshIcon className="size-5" />
              </div>
              <div>
                <h3 className="font-manrope text-[15px] font-bold text-azure-9 sm:text-base">
                  Stale / Outdated
                </h3>
                <p className="mt-1 font-manrope text-[13px] leading-relaxed text-azure-47 sm:text-[13.5px]">
                  Verification older than policy threshold. Re-verification
                  required to proceed.
                </p>
              </div>
            </div>

            {/* Needs Review */}
            <div className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-200 hover:border-slate-300">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-amber-50">
                <NeedsReviewIcon className="size-5" />
              </div>
              <div>
                <h3 className="font-manrope text-[15px] font-bold text-azure-9 sm:text-base">
                  Needs Review
                </h3>
                <p className="mt-1 font-manrope text-[13px] leading-relaxed text-azure-47 sm:text-[13.5px]">
                  Verification inconclusive or partially successful. Human review
                  required before decision.
                </p>
              </div>
            </div>

            {/* Feature Photo */}
            <div className="relative aspect-[800/533] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
              <Image
                src="/solutions-verified-onboarding/svo3.png"
                alt="Business professional reviewing verification documentation"
                fill
                sizes="(min-width: 1024px) 580px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: 3 Status Cards + Proof & Freshness Card */}
          <div className="flex flex-col gap-5">
            {/* Verified */}
            <div className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-200 hover:border-slate-300">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
                <CheckCircleGreenIcon className="size-5" />
              </div>
              <div>
                <h3 className="font-manrope text-[15px] font-bold text-azure-9 sm:text-base">
                  Verified
                </h3>
                <p className="mt-1 font-manrope text-[13px] leading-relaxed text-azure-47 sm:text-[13.5px]">
                  Claims validated against authoritative source. Evidence current
                  and matches applicant assertions.
                </p>
              </div>
            </div>

            {/* Unable to Verify */}
            <div className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-200 hover:border-slate-300">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-red-50">
                <XCircleRedIcon className="size-5" />
              </div>
              <div>
                <h3 className="font-manrope text-[15px] font-bold text-azure-9 sm:text-base">
                  Unable to Verify
                </h3>
                <p className="mt-1 font-manrope text-[13px] leading-relaxed text-azure-47 sm:text-[13.5px]">
                  Claims cannot be validated. Method unsupported, registry
                  unavailable, or evidence insufficient.
                </p>
              </div>
            </div>

            {/* Revoked */}
            <div className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-200 hover:border-slate-300">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-rose-50">
                <RevokedSlashIcon className="size-5" />
              </div>
              <div>
                <h3 className="font-manrope text-[15px] font-bold text-azure-9 sm:text-base">
                  Revoked
                </h3>
                <p className="mt-1 font-manrope text-[13px] leading-relaxed text-azure-47 sm:text-[13.5px]">
                  Previously verified claim invalidated. Organization or applicant
                  revoked permission or status changed.
                </p>
              </div>
            </div>

            {/* Proof & Freshness Info Card */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-200 hover:border-slate-300 sm:p-7">
              <div className="flex items-center gap-2.5">
                <span className="size-2.5 rounded-full bg-cyan-49" />
                <h3 className="font-manrope text-[15px] font-bold text-azure-9 sm:text-base">
                  Proof &amp; Freshness
                </h3>
              </div>
              <p className="mt-3 font-manrope text-[13px] leading-relaxed text-azure-47 sm:text-[13.5px]">
                Every verification result includes:{" "}
                <strong className="font-bold text-azure-9">Issuer</strong> (who
                verified),{" "}
                <strong className="font-bold text-azure-9">Evidence</strong> (what
                was checked),{" "}
                <strong className="font-bold text-azure-9">
                  As-of timestamp
                </strong>{" "}
                (when checked),{" "}
                <strong className="font-bold text-azure-9">Expiry</strong> (when
                trust expires),{" "}
                <strong className="font-bold text-azure-9">Scope</strong> (what
                claim is supported). Never assume universal coverage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
