import Image from "next/image";

const legacyItems = [
  "Third party gets broad credentials",
  "Access granted indefinitely",
  "No explicit scope or purpose",
  "Hard to revoke (account still active)",
  "Audit trail opaque (service account logs)",
  "Compliance risk (standing authority)",
];

const delegatedItems = [
  "Verified actor identity (credential)",
  "Time-bounded grant (e.g., 90 days)",
  "Explicit scope and purpose statement",
  "Revocable at any moment",
  "Complete audit trail (who did what, why)",
  "Compliance-ready evidence",
];

export default function TrustGapComparisonSection() {
  return (
    <section id="trust-gap" className="bg-white-solid px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-12 sm:gap-14">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Legacy vs. delegated access
        </h2>

        {/* Comparison Grid */}
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {/* Legacy "Standing Access" Card */}
          <div className="flex flex-col gap-6 rounded-[12px] border-2 border-[#DC2626] bg-[#DC2626]/[0.04] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#DC2626]/10">
                <Image
                  src="/third-party-access/trust-gap-legacy-icon.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="font-dm-serif text-xl font-normal text-[#DC2626] sm:text-[22.4px]">
                Legacy &ldquo;Standing Access&rdquo;
              </h3>
            </div>

            <ul className="flex flex-col gap-2.5">
              {legacyItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-manrope text-[15px] font-normal leading-relaxed text-azure-47 sm:text-[16px] sm:leading-[32px]"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DC2626]/10 text-xs font-bold text-[#DC2626]">
                    ✕
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Delegated Access Card */}
          <div className="flex flex-col gap-6 rounded-[12px] border-2 border-[#16A34A] bg-[#16A34A]/[0.04] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#16A34A]/10">
                <Image
                  src="/third-party-access/trust-gap-delegated-icon.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="font-dm-serif text-xl font-normal text-[#16A34A] sm:text-[22.4px]">
                Delegated Access
              </h3>
            </div>

            <ul className="flex flex-col gap-2.5">
              {delegatedItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-manrope text-[15px] font-normal leading-relaxed text-azure-47 sm:text-[16px] sm:leading-[32px]"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#16A34A]/10 text-xs font-bold text-[#16A34A]">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section Divider */}
        <div className="h-px w-full bg-mystic pt-4" />
      </div>
    </section>
  );
}
