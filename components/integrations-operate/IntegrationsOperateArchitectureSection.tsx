import Image from "next/image";

export default function IntegrationsOperateArchitectureSection() {
  return (
    <section className="bg-white-solid px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-[60px]">
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col items-center gap-5 text-center">
          <h2 className="font-dm-serif text-3xl font-normal text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[62.4px]">
            How an integration fits
          </h2>

          <p className="max-w-[860px] font-manrope text-base font-normal leading-7 text-[#64748B] sm:text-[16.8px] sm:leading-[28.56px]">
            Zoiko iD sits as an overlay beside your identity provider, applications, and policy consumers. Each function has a
            <br className="hidden sm:block" />
            {" "}clear owner and a visible trust boundary.
          </p>
        </div>

        {/* Global Network Image Illustration */}
        <div className="relative h-[220px] w-full overflow-hidden rounded-[16px] sm:h-[320px]">
          <Image
            src="/integrations-operate/img-69abea3a2afb044af9287d767428410b12fe4e09.png"
            alt="Reference Architecture Diagram"
            fill
            sizes="(min-width: 1120px) 1120px, 100vw"
            className="object-cover"
          />
        </div>

        {/* 3 Architecture Nodes + Connecting Arrows */}
        <div className="flex w-full flex-col items-center gap-8">
          <div className="flex w-full flex-col items-center justify-center gap-6 md:flex-row md:gap-4 lg:gap-8">
            {/* Card 1: Your IdP or app */}
            <div className="flex w-full max-w-[280px] flex-col items-center rounded-[12px] border border-[#E2E8F0] bg-white-solid p-6 text-center shadow-xs md:max-w-[230px]">
              <div className="flex size-[52px] items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,rgba(34,184,214,0.18)_0%,rgba(37,99,235,0.14)_100%)]">
                <Image
                  src="/integrations-operate/icon-334_4357.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="shrink-0"
                />
              </div>

              <h3 className="mt-4 font-manrope text-[16px] font-bold leading-6 text-[#071426]">
                Your IdP or app
              </h3>

              <p className="mt-2 font-manrope text-[13.6px] font-normal leading-[23px] text-[#64748B]">
                Authenticates the
                <br />
                person or service and
                <br />
                owns the application
                <br />
                action.
              </p>
            </div>

            {/* Connecting Arrow 1 */}
            <div className="hidden shrink-0 items-center justify-center md:flex">
              <Image
                src="/integrations-operate/icon-334_4366.svg"
                alt=""
                width={19}
                height={19}
                className="shrink-0"
              />
            </div>

            {/* Card 2: Zoiko iD trust layer (Dashed border) */}
            <div className="flex w-full max-w-[280px] flex-col items-center rounded-[12px] border-2 border-dashed border-[#22B8D6] bg-white-solid p-6 text-center shadow-xs md:max-w-[232px]">
              <div className="flex size-[52px] items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,rgba(34,184,214,0.18)_0%,rgba(37,99,235,0.14)_100%)]">
                <Image
                  src="/integrations-operate/icon-334_4372.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="shrink-0"
                />
              </div>

              <h3 className="mt-4 font-manrope text-[16px] font-bold leading-6 text-[#071426]">
                Zoiko iD trust
                <br />
                layer
              </h3>

              <p className="mt-2 font-manrope text-[13.6px] font-normal leading-[23px] text-[#64748B]">
                Identity verification,
                <br />
                scoped authority, and
                <br />
                decision support.
              </p>
            </div>

            {/* Connecting Arrow 2 */}
            <div className="hidden shrink-0 items-center justify-center md:flex">
              <Image
                src="/integrations-operate/icon-334_4366.svg"
                alt=""
                width={19}
                height={19}
                className="shrink-0"
              />
            </div>

            {/* Card 3: Policy consumer */}
            <div className="flex w-full max-w-[280px] flex-col items-center rounded-[12px] border border-[#E2E8F0] bg-white-solid p-6 text-center shadow-xs md:max-w-[230px]">
              <div className="flex size-[52px] items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,rgba(34,184,214,0.18)_0%,rgba(37,99,235,0.14)_100%)]">
                <Image
                  src="/integrations-operate/icon-334_4387.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="shrink-0"
                />
              </div>

              <h3 className="mt-4 font-manrope text-[16px] font-bold leading-6 text-[#071426]">
                Policy consumer
              </h3>

              <p className="mt-2 font-manrope text-[13.6px] font-normal leading-[23px] text-[#64748B]">
                Applies its own rules
                <br />
                and makes the final
                <br />
                consequential decision.
              </p>
            </div>
          </div>

          {/* Row of 4 Pills below the cards */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* Pill 1: Sign-in */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white-solid px-4 py-2 shadow-xs">
              <Image
                src="/integrations-operate/icon-334_4397.svg"
                alt=""
                width={16}
                height={16}
                className="shrink-0"
              />
              <span className="font-manrope text-sm font-semibold text-[#071426]">
                Sign-in
              </span>
            </div>

            {/* Pill 2: Authority */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white-solid px-4 py-2 shadow-xs">
              <Image
                src="/integrations-operate/icon-334_4402.svg"
                alt=""
                width={16}
                height={16}
                className="shrink-0"
              />
              <span className="font-manrope text-sm font-semibold text-[#071426]">
                Authority
              </span>
            </div>

            {/* Pill 3: Policy */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white-solid px-4 py-2 shadow-xs">
              <Image
                src="/integrations-operate/icon-334_4407.svg"
                alt=""
                width={16}
                height={16}
                className="shrink-0"
              />
              <span className="font-manrope text-sm font-semibold text-[#071426]">
                Policy
              </span>
            </div>

            {/* Pill 4: Evidence */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white-solid px-4 py-2 shadow-xs">
              <Image
                src="/integrations-operate/icon-334_4412.svg"
                alt=""
                width={16}
                height={16}
                className="shrink-0"
              />
              <span className="font-manrope text-sm font-semibold text-[#071426]">
                Evidence
              </span>
            </div>
          </div>
        </div>

        {/* Text Equivalent Box */}
        <div className="flex w-full flex-col gap-5 rounded-[12px] border border-[#E2E8F0] bg-[rgba(34,184,214,0.15)] p-6 sm:p-8">
          <h4 className="font-manrope text-base font-bold text-[#071426]">
            Text equivalent of this diagram
          </h4>

          <ol className="flex flex-col gap-2.5 font-manrope text-[14.4px] leading-6 text-[#64748B]">
            <li>
              1. Your identity provider or application authenticates the person or service. This owns the sign‑in.
            </li>
            <li>
              2. The Zoiko iD trust layer evaluates identity, scoped authority, and policy context, and returns a bounded decision.
            </li>
            <li>
              3. A policy consumer or application applies its own rules. It owns the downstream action.
            </li>
            <li>
              4. Evidence records the actor, authority, scope, policy, time, and origin for review. The owning system remains the source of truth.
            </li>
          </ol>

          <p className="mt-2 font-manrope text-sm leading-6 text-[#64748B]">
            <strong className="font-bold text-[#071426]">Note:</strong> Zoiko iD does not sign every transaction and does not perform downstream application actions.
          </p>
        </div>
      </div>
    </section>
  );
}
