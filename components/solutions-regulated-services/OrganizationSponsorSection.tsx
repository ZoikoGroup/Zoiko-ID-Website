import Image from "next/image";

export default function OrganizationSponsorSection() {
  return (
    <section className="bg-white px-5 py-12 sm:px-10 lg:px-16 lg:py-24 xl:px-20">
      <div className="mx-auto max-w-[1140px]">
        {/* Section Heading */}
        <h2 className="mb-8 text-center font-dm-serif text-[28px] font-normal leading-[1.18] tracking-tight text-azure-9 sm:mb-10 sm:text-4xl lg:mb-12 lg:text-[44px]">
          <span className="sm:hidden">
            Organization, sponsor
            <br />
            &amp; representation
          </span>
          <span className="hidden sm:inline">
            Organization, sponsor &amp; representation
          </span>
        </h2>

        {/* Mobile View: 2 Stacked White Cards with subtle borders (hidden on tablet/desktop) */}
        <div className="flex flex-col gap-5 sm:hidden">
          {/* Card 1: Organizational Context */}
          <div className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
            <h3 className="font-dm-serif text-lg font-normal text-azure-9">
              Organizational Context
            </h3>

            <ul className="mt-4 flex flex-col gap-3 font-manrope text-[12.5px] leading-relaxed text-azure-47">
              <li className="flex items-start gap-2">
                <span className="text-azure-47">•</span>
                <span>
                  Who owns the resource being accessed? (e.g., Bank, Hospital,
                  Agency)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-azure-47">•</span>
                <span>
                  What policies apply? (e.g., SOX, HIPAA, FedRAMP, NERC)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-azure-47">•</span>
                <span>
                  Who can grant authority? (e.g., Risk Officer, Chief
                  Compliance Officer)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-azure-47">•</span>
                <span>
                  How long is authority retained? (e.g., Quarterly review,
                  annual audit)
                </span>
              </li>
            </ul>
          </div>

          {/* Card 2: Sponsor Accountability */}
          <div className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
            <h3 className="font-dm-serif text-lg font-normal text-azure-9">
              Sponsor Accountability
            </h3>

            <ul className="mt-4 flex flex-col gap-3 font-manrope text-[12.5px] leading-relaxed text-azure-47">
              <li className="flex items-start gap-2">
                <span className="text-azure-47">•</span>
                <span>
                  Who authorized this actor? (Named sponsor, with credentials)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-azure-47">•</span>
                <span>
                  For what purpose? (Business justification documented)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-azure-47">•</span>
                <span>How long? (Expiry date set explicitly)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-azure-47">•</span>
                <span>
                  Revocable? (Yes, anytime, by sponsor or org policy)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop View: Card Container with Background Photo (rs5.png) */}
        <div className="relative hidden min-h-[380px] w-full overflow-hidden rounded-[20px] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)] sm:block sm:p-8 lg:p-10">
          {/* Background Photo (rs5.png) */}
          <Image
            src="/solutions-regulated-services/rs5.png"
            alt="Corporate and regulatory compliance team reviewing organizational mandate"
            fill
            sizes="(min-width: 1200px) 1140px, 100vw"
            className="object-cover object-center brightness-75"
          />

          {/* Dark Overlay with subtle tint */}
          <div className="absolute inset-0 bg-[#071426]/70 backdrop-blur-[1px]" />

          {/* 2 White Floating Cards Grid */}
          <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {/* Card 1: Organizational Context */}
            <div className="flex flex-col rounded-2xl bg-white p-6 shadow-xl sm:p-8">
              <h3 className="font-dm-serif text-lg font-normal text-azure-9 sm:text-xl">
                Organizational Context
              </h3>

              <ul className="mt-5 flex flex-col gap-3 font-manrope text-[12.5px] leading-relaxed text-azure-47 sm:text-[13px]">
                <li className="flex items-start gap-2">
                  <span className="text-azure-47">•</span>
                  <span>
                    Who owns the resource being accessed? (e.g., Bank, Hospital,
                    Agency)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-azure-47">•</span>
                  <span>
                    What policies apply? (e.g., SOX, HIPAA, FedRAMP, NERC)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-azure-47">•</span>
                  <span>
                    Who can grant authority? (e.g., Risk Officer, Chief
                    Compliance Officer)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-azure-47">•</span>
                  <span>
                    How long is authority retained? (e.g., Quarterly review,
                    annual audit)
                  </span>
                </li>
              </ul>
            </div>

            {/* Card 2: Sponsor Accountability */}
            <div className="flex flex-col rounded-2xl bg-white p-6 shadow-xl sm:p-8">
              <h3 className="font-dm-serif text-lg font-normal text-azure-9 sm:text-xl">
                Sponsor Accountability
              </h3>

              <ul className="mt-5 flex flex-col gap-3 font-manrope text-[12.5px] leading-relaxed text-azure-47 sm:text-[13px]">
                <li className="flex items-start gap-2">
                  <span className="text-azure-47">•</span>
                  <span>
                    Who authorized this actor? (Named sponsor, with
                    credentials)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-azure-47">•</span>
                  <span>
                    For what purpose? (Business justification documented)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-azure-47">•</span>
                  <span>
                    How long? (Expiry date set explicitly)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-azure-47">•</span>
                  <span>
                    Revocable? (Yes, anytime, by sponsor or org policy)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
