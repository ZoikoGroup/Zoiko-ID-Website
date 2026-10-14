import { DarkCredentialBadgeIcon } from "./icons";

const delegationSteps = [
  {
    number: "1",
    title: "Scope Definition",
    description:
      "Which resources? (e.g., Account 12345, Patient Records with Consent). What actions? (e.g., Read, Approve, Modify). Explicit boundaries set.",
  },
  {
    number: "2",
    title: "Purpose Statement",
    description:
      "Why does the actor need this? (e.g., 'Process monthly invoices', 'Treat patient during appointment'). Business justification documented and audit-logged.",
  },
  {
    number: "3",
    title: "Time Bounds",
    description:
      "Valid from–through dates. No indefinite access. Expiry enforced automatically. Extensions require re-approval, never automatic renewal.",
  },
  {
    number: "4",
    title: "Delegation Record",
    description:
      "Documented in a signed mandate. Immutable. Includes actor identity, sponsor, scope, purpose, time, and approval chain.",
  },
];

export default function ScopedAuthoritySection() {
  return (
    <section className="bg-[#f0f4f9] px-5 py-12 sm:px-10 lg:px-16 lg:py-24 xl:px-20">
      <div className="mx-auto max-w-[980px]">
        {/* Mobile Section Heading with Badge Icon */}
        <div className="mb-6 flex items-center gap-3 sm:hidden">
          <DarkCredentialBadgeIcon className="size-6 shrink-0 text-[#071426]" />
          <h2 className="font-dm-serif text-[26px] font-normal leading-[1.15] text-azure-9">
            Scoped authority
            <br />
            &amp; delegation
          </h2>
        </div>

        {/* Desktop Section Heading */}
        <h2 className="mb-10 hidden text-center font-dm-serif text-3xl font-normal tracking-tight text-azure-9 sm:block sm:text-4xl lg:mb-12 lg:text-[44px]">
          Scoped authority &amp; delegation
        </h2>

        {/* Big White Card Container */}
        <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_2px_14px_rgba(0,0,0,0.03)] sm:p-8 lg:p-10">
          {delegationSteps.map((step, idx) => (
            <div
              key={step.number}
              className={`flex items-start gap-3.5 sm:gap-5 ${
                idx === 0
                  ? "pb-5 sm:pb-6"
                  : idx === delegationSteps.length - 1
                    ? "pt-5 sm:pt-6"
                    : "py-5 sm:py-6"
              }`}
            >
              {/* Number Circle Badge with gradient */}
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-linear-to-b from-[#22B8D6] to-[#1E69EC] font-manrope text-xs font-bold text-white shadow-xs sm:size-10 sm:text-base">
                {step.number}
              </div>

              {/* Text content */}
              <div>
                <h3 className="font-manrope text-[13.5px] font-bold text-azure-9 sm:text-base">
                  {step.title}
                </h3>
                <p className="mt-1 font-manrope text-[11.5px] leading-relaxed text-azure-47 sm:text-[13px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout: Light Cyan/Blue bordered card */}
        <div className="mt-5 rounded-2xl border border-sky-300 bg-[#f0f7fd] p-4.5 sm:mt-8 sm:p-5">
          <p className="font-manrope text-[11.5px] leading-relaxed text-azure-9 sm:text-[13px]">
            <strong className="font-bold text-azure-9">
              No Implicit Authority:
            </strong>{" "}
            <span className="text-azure-47">
              Role title (e.g., &quot;Senior Analyst&quot;) does not
              automatically grant access. Authority must be explicitly delegated,
              documented, and time-limited.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
