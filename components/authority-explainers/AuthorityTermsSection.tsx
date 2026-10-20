import Image from "next/image";

export default function AuthorityTermsSection() {
  return (
    <section
      className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-20 lg:py-[95px] xl:px-40"
      style={{
        backgroundColor: "#071426",
        backgroundImage: `linear-gradient(180deg, rgba(7, 20, 38, 0.90) 0%, rgba(7, 20, 38, 0.95) 100%), url('/authority-explainers/summary-bg.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col gap-14 lg:gap-16">
        {/* Heading */}
        <div className="flex flex-col gap-3 text-left">
          <h2 className="font-dm-serif text-3xl font-normal leading-[57.8px] text-white-solid sm:text-5xl lg:text-[52px]">
            Five terms, five different questions
          </h2>
          <p className="max-w-[780px] font-manrope text-base font-normal leading-7 text-white-solid/90">
            A sign-in, a permission and a logged decision are separate things. Each term says what it means and what it does not establish.
          </p>
        </div>

        {/* 4 Term Cards Grid */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1. Identity */}
          <div className="flex flex-col gap-2 rounded-[18px] border border-[#E2E8F0] bg-white-solid p-6 shadow-sm">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#E0F2FE]">
              <Image
                src="/authority-explainers/term-icon-identity.svg"
                alt=""
                width={20}
                height={20}
                className="size-5"
              />
            </div>
            <h3 className="pt-2 font-manrope text-[17px] font-bold leading-6 text-[#0B1B33]">
              Identity
            </h3>
            <p className="font-manrope text-sm font-normal leading-[22.4px] text-[#64748B]">
              Who or what the actor is. It does not grant permission.
            </p>
          </div>

          {/* 2. Authentication */}
          <div className="flex flex-col gap-2 rounded-[18px] border border-[#E2E8F0] bg-white-solid p-6 shadow-sm">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#E0F2FE]">
              <Image
                src="/authority-explainers/term-icon-auth.svg"
                alt=""
                width={20}
                height={20}
                className="size-5"
              />
            </div>
            <h3 className="pt-2 font-manrope text-[17px] font-bold leading-6 text-[#0B1B33]">
              Authentication
            </h3>
            <p className="font-manrope text-sm font-normal leading-[22.4px] text-[#64748B]">
              Checking the actor. It does not establish a mandate.
            </p>
          </div>

          {/* 3. Delegated authority */}
          <div className="flex flex-col gap-2 rounded-[18px] border border-[#E2E8F0] bg-white-solid p-6 shadow-sm">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#E0F2FE]">
              <Image
                src="/authority-explainers/term-icon-delegation.svg"
                alt=""
                width={20}
                height={20}
                className="size-5"
              />
            </div>
            <h3 className="pt-2 font-manrope text-[17px] font-bold leading-6 text-[#0B1B33]">
              Delegated authority
            </h3>
            <p className="font-manrope text-sm font-normal leading-[22.4px] text-[#64748B]">
              A bounded basis to act for someone or something else.
            </p>
          </div>

          {/* 4. Authorization */}
          <div className="flex flex-col gap-2 rounded-[18px] border border-[#E2E8F0] bg-white-solid p-6 shadow-sm">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#E0F2FE]">
              <Image
                src="/authority-explainers/term-icon-decision.svg"
                alt=""
                width={20}
                height={20}
                className="size-5"
              />
            </div>
            <h3 className="pt-2 font-manrope text-[17px] font-bold leading-6 text-[#0B1B33]">
              Authorization
            </h3>
            <p className="font-manrope text-sm font-normal leading-[22.4px] text-[#64748B]">
              Deciding whether a specific action is permitted in current context.
            </p>
          </div>
        </div>

        {/* 5th Card: Evidence (Wide) */}
        <div className="flex w-full flex-col gap-2 rounded-[18px] border border-[#E2E8F0] bg-white-solid p-6 sm:p-7">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#E0F2FE]">
            <Image
              src="/authority-explainers/term-icon-evidence.svg"
              alt=""
              width={20}
              height={20}
              className="size-5"
            />
          </div>
          <h3 className="pt-1 font-manrope text-[17px] font-bold leading-6 text-[#0B1B33]">
            Evidence
          </h3>
          <p className="font-manrope text-sm font-normal leading-[22.4px] text-[#64748B]">
            The reviewable context of a decision. It is not a substitute for permission.
          </p>
        </div>

        {/* Flow: Actor -> Mandate and policy -> Decision record */}
        <div className="flex flex-col items-center gap-4 pt-2">
          <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row md:gap-3">
            {/* Step 1: Actor */}
            <div className="flex w-full flex-1 flex-col gap-1.5 rounded-2xl border border-[#E2E8F0] bg-white-solid p-5 sm:min-h-[122px] sm:p-6">
              <span className="font-manrope text-[15px] font-bold leading-6 text-[#0B1B33]">
                Actor
              </span>
              <span className="font-manrope text-sm font-normal leading-[22.4px] text-[#334155]">
                The identity presenting the request
              </span>
            </div>

            {/* Arrow */}
            <span
              aria-hidden="true"
              className="hidden font-manrope text-2xl font-extrabold text-[#22B8D6] md:block"
            >
              →
            </span>

            {/* Step 2: Mandate and policy */}
            <div className="flex w-full flex-1 flex-col gap-1.5 rounded-2xl border border-[#E2E8F0] bg-white-solid p-5 sm:min-h-[122px] sm:p-6">
              <span className="font-manrope text-[15px] font-bold leading-6 text-[#0B1B33]">
                Mandate and policy
              </span>
              <span className="font-manrope text-sm font-normal leading-[22.4px] text-[#334155]">
                Bounded authority, checked against current context
              </span>
            </div>

            {/* Arrow */}
            <span
              aria-hidden="true"
              className="hidden font-manrope text-2xl font-extrabold text-[#22B8D6] md:block"
            >
              →
            </span>

            {/* Step 3: Decision record */}
            <div className="flex w-full flex-1 flex-col gap-1.5 rounded-2xl border border-[#E2E8F0] bg-white-solid p-5 sm:min-h-[122px] sm:p-6">
              <span className="font-manrope text-[15px] font-bold leading-6 text-[#0B1B33]">
                Decision record
              </span>
              <span className="font-manrope text-sm font-normal leading-[22.4px] text-[#334155]">
                Outcome and basis, kept under privacy controls
              </span>
            </div>
          </div>

          {/* Badge */}
          <div className="self-center rounded-lg bg-[#EDE9FE] px-3 py-2">
            <span className="font-manrope text-[13px] font-normal leading-[20.8px] text-[#5B21B6]">
              Conceptual decision illustration.
            </span>
          </div>

          {/* Amber callout alert */}
          <div className="w-full rounded-r-xl border-l-4 border-amber-500 bg-white-solid px-5 py-4 shadow-sm">
            <p className="font-manrope text-sm font-normal leading-[22.4px] text-[#0B1B33]">
              <strong className="font-bold text-[#0B1B33]">No inference.</strong>{" "}
              Being verified, being affiliated with an organization, or holding a credential does not, by itself, establish permission to act.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
