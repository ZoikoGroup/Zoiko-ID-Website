import { Pill, Section, SectionHeading } from "@/components/docs/shared";

export default function MarketingConsentSection() {
  return (
    <Section id="consent" tone="grey">
      <SectionHeading
        title="No marketing box is ticked for you"
        description="The privacy notice applies to this enquiry. Marketing communications are a separate, unticked choice, and declining them does not affect your enquiry."
      />

      <label
        htmlFor="marketing-consent"
        className="mt-12 flex cursor-pointer items-start gap-4 rounded-2xl border border-[#E2E8F0] bg-white-solid p-6"
      >
        <input
          id="marketing-consent"
          name="marketing"
          type="checkbox"
          className="mt-0.5 size-5 shrink-0 cursor-pointer rounded-sm border-2 border-[#94A3B8] accent-azure-48"
        />
        <span className="flex flex-col gap-1">
          <span className="font-manrope text-lg font-bold leading-6 text-[#0F172A]">
            Marketing communications (optional, unticked)
          </span>
          <span className="font-manrope text-sm leading-6 text-[#5B6B82]">
            You can choose this separately from your enquiry.
          </span>
        </span>
      </label>

      <div className="pt-8">
        <Pill>Privacy notice link pending verification</Pill>
      </div>
    </Section>
  );
}
