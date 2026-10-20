import Image from "next/image";
import Link from "next/link";

export default function AuthorityHeroSection() {
  return (
    <section
      className="relative -mt-20 overflow-hidden px-6 pb-20 pt-36 sm:-mt-24 sm:px-10 sm:pt-40 lg:-mt-[116px] lg:px-20 lg:pb-24 lg:pt-[175px] xl:px-40"
      style={{
        backgroundColor: "#071426",
        backgroundImage: `linear-gradient(180deg, rgba(7, 20, 38, 0.90) 0%, rgba(7, 20, 38, 0.95) 100%), url('/authority-explainers/hero-bg.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Subtle Cyan Radial Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,184,214,0.18)_0%,rgba(34,184,214,0)_70%)] blur-[60px]"
      />

      <div className="relative mx-auto flex w-full max-w-[1240px] flex-col items-center justify-between gap-12 lg:flex-row lg:items-center lg:gap-16">
        {/* Left: Text & CTA */}
        <div className="flex w-full flex-1 flex-col items-start gap-6 text-left">
          <h1 className="font-dm-serif text-4xl font-normal leading-[1.12] text-white-solid sm:text-6xl lg:text-[70px] lg:leading-[82.8px]">
            Understand delegated authority across people, organizations and AI agents.
          </h1>

          <p className="max-w-[640px] font-manrope text-base font-normal leading-[29.92px] text-[#CBD5E1] sm:text-[17.6px]">
            Delegated authority describes a bounded permission for one actor to act on behalf of another under defined conditions. Proving identity alone does not establish that authority.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 pt-4">
            <Link
              href="#readers-section"
              className="inline-flex items-center justify-center rounded-lg bg-[#2563EB] px-6 py-3.5 font-manrope text-[15px] font-bold text-white-solid shadow-[0px_8px_20px_0px_rgba(37,99,235,0.30)] transition-all duration-200 hover:bg-blue-600 hover:shadow-[0px_10px_24px_0px_rgba(37,99,235,0.40)] hover:-translate-y-0.5"
            >
              Explore explainers
            </Link>

            <Link
              href="#paths-section"
              className="inline-flex items-center justify-center rounded-lg border border-white-solid/80 bg-transparent px-6 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid transition-all duration-200 hover:bg-white-solid/10 hover:-translate-y-0.5"
            >
              View architecture guides
            </Link>
          </div>
        </div>

        {/* Right: Conceptual Illustration Card */}
        <div
          aria-label="Conceptual illustration: an actor has a proven identity, but authority is a separate bounded element."
          className="flex w-full max-w-[453px] shrink-0 flex-col gap-3 rounded-[22px] bg-[#F1F5F9] p-7 sm:p-[34px]"
        >
          {/* Item 1: Identity */}
          <div className="flex items-center gap-3.5 rounded-[14px] border border-[#E2E8F0] bg-white-solid p-4 transition-all duration-150 hover:border-slate-300">
            <div className="flex size-10 shrink-0 items-center justify-center">
              <Image
                src="/authority-explainers/hero-icon-identity.svg"
                alt=""
                width={24}
                height={24}
                className="size-6 text-[#0B1B33]"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-manrope text-[15px] font-bold leading-6 text-[#0B1B33]">
                Identity
              </span>
              <span className="font-manrope text-sm font-normal leading-[22.4px] text-[#64748B]">
                Who the actor is
              </span>
            </div>
          </div>

          {/* Item 2: Delegated authority */}
          <div className="flex items-center gap-3.5 rounded-[14px] border border-[#E2E8F0] bg-white-solid p-4 transition-all duration-150 hover:border-slate-300">
            <div className="flex size-10 shrink-0 items-center justify-center">
              <Image
                src="/authority-explainers/hero-icon-authority.svg"
                alt=""
                width={24}
                height={24}
                className="size-6 text-[#0B1B33]"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-manrope text-[15px] font-bold leading-6 text-[#0B1B33]">
                Delegated authority
              </span>
              <span className="font-manrope text-sm font-normal leading-[22.4px] text-[#64748B]">
                A bounded basis to act for another party
              </span>
            </div>
          </div>

          {/* Item 3: Decision */}
          <div className="flex items-center gap-3.5 rounded-[14px] border border-[#E2E8F0] bg-white-solid p-4 transition-all duration-150 hover:border-slate-300">
            <div className="flex size-10 shrink-0 items-center justify-center">
              <Image
                src="/authority-explainers/hero-icon-decision.svg"
                alt=""
                width={24}
                height={24}
                className="size-6 text-[#0B1B33]"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-manrope text-[15px] font-bold leading-6 text-[#0B1B33]">
                Decision
              </span>
              <span className="font-manrope text-sm font-normal leading-[22.4px] text-[#64748B]">
                Whether this action is permitted now
              </span>
            </div>
          </div>

          {/* Item 4: Evidence */}
          <div className="flex items-center gap-3.5 rounded-[14px] border border-[#E2E8F0] bg-white-solid p-4 transition-all duration-150 hover:border-slate-300">
            <div className="flex size-10 shrink-0 items-center justify-center">
              <Image
                src="/authority-explainers/hero-icon-evidence.svg"
                alt=""
                width={24}
                height={24}
                className="size-6 text-[#0B1B33]"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-manrope text-[15px] font-bold leading-6 text-[#0B1B33]">
                Evidence
              </span>
              <span className="font-manrope text-sm font-normal leading-[22.4px] text-[#64748B]">
                A reviewable explanation of the decision
              </span>
            </div>
          </div>

          {/* Badge */}
          <div className="self-start rounded-lg bg-[#EDE9FE] px-3 py-2">
            <span className="font-manrope text-[13px] font-normal leading-[20.8px] text-[#5B21B6]">
              Conceptual illustration. Not a product screen.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
