export default function SecurityFormNoticeSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#071426] py-16 sm:py-20 lg:py-[105px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(7, 20, 38, 0.91) 0%, rgba(7, 20, 38, 0.96) 100%), url('/security-contact/form-bg.png')",
      }}
    >
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-[160px]">
        <div className="flex flex-col gap-[60px]">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="font-[family-name:var(--font-dm-serif-display-family)] text-3xl sm:text-4xl lg:text-[52px] font-normal lg:leading-[57.8px] text-white">
              <span className="block whitespace-nowrap">The form is shown only when it is</span>
              <span className="block">live</span>
            </h2>
            <div className="max-w-[850px]">
              <p className="font-[family-name:var(--font-manrope-family)] text-[16px] font-normal leading-[25.6px] text-white/90">
                No form is rendered on this layout. The fields below describe what the approved intake will ask, so you can prepare.<br className="hidden sm:inline" />
                Each field carries a validation rule and a disclosure limit.
              </p>
            </div>
          </div>

          {/* Dashed Border Warning & Fields Card */}
          <div className="flex flex-col gap-[26px] rounded-[22px] border border-dashed border-[#94A3B8] bg-white p-6 sm:p-8 lg:p-10 shadow-xl">
            {/* Top Bar inside Card */}
            <div className="flex flex-wrap items-center justify-between gap-[14px]">
              <span className="font-[family-name:var(--font-manrope-family)] text-[14px] font-normal leading-[22.4px] text-[#64748B]">
                No Submit control appears until a secure intake is approved and tested.
              </span>
              <div className="rounded-full border border-dashed border-[#94A3B8] bg-[#F1F5F9] px-[11px] py-[5px]">
                <span className="font-[family-name:var(--font-manrope-family)] text-[11px] font-extrabold uppercase tracking-[0.08em] leading-[17.6px] text-[#334155]">
                  Form not available
                </span>
              </div>
            </div>

            {/* Grid Table of Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 rounded-[16px] border border-[#E2E8F0] overflow-hidden">
              {/* Row 1 */}
              <div className="flex flex-col gap-[3.5px] border-b border-[#E2E8F0] md:border-r p-[17px_22px]">
                <span className="font-[family-name:var(--font-manrope-family)] text-[13px] font-bold uppercase tracking-[0.06em] leading-[20.8px] text-[#0B1B33]">
                  Enquiry type
                </span>
                <span className="font-[family-name:var(--font-manrope-family)] text-[14px] font-normal leading-[22.4px] text-[#64748B]">
                  Preselected from your intent. Required and fixed on receipt.
                </span>
              </div>
              <div className="flex flex-col gap-[3.5px] border-b border-[#E2E8F0] p-[17px_22px]">
                <span className="font-[family-name:var(--font-manrope-family)] text-[13px] font-bold uppercase tracking-[0.06em] leading-[20.8px] text-[#0B1B33]">
                  Work email
                </span>
                <span className="font-[family-name:var(--font-manrope-family)] text-[14px] font-normal leading-[22.4px] text-[#64748B]">
                  Required where a reply is supported. Syntax check only.
                </span>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col gap-[3.5px] border-b border-[#E2E8F0] md:border-r p-[17px_22px]">
                <span className="font-[family-name:var(--font-manrope-family)] text-[13px] font-bold uppercase tracking-[0.06em] leading-[20.8px] text-[#0B1B33]">
                  Full name
                </span>
                <span className="font-[family-name:var(--font-manrope-family)] text-[14px] font-normal leading-[22.4px] text-[#64748B]">
                  Optional unless the owning team requires it.
                </span>
              </div>
              <div className="flex flex-col gap-[3.5px] border-b border-[#E2E8F0] p-[17px_22px]">
                <span className="font-[family-name:var(--font-manrope-family)] text-[13px] font-bold uppercase tracking-[0.06em] leading-[20.8px] text-[#0B1B33]">
                  Organization
                </span>
                <span className="font-[family-name:var(--font-manrope-family)] text-[14px] font-normal leading-[22.4px] text-[#64748B]">
                  Optional. Not used to verify your organization.
                </span>
              </div>

              {/* Row 3 */}
              <div className="flex flex-col gap-[3.5px] border-b border-[#E2E8F0] md:border-r p-[17px_22px]">
                <span className="font-[family-name:var(--font-manrope-family)] text-[13px] font-bold uppercase tracking-[0.06em] leading-[20.8px] text-[#0B1B33]">
                  Existing customer?
                </span>
                <span className="font-[family-name:var(--font-manrope-family)] text-[14px] font-normal leading-[22.4px] text-[#64748B]">
                  Yes, No or Prefer not to say.
                </span>
              </div>
              <div className="flex flex-col gap-[3.5px] border-b border-[#E2E8F0] p-[17px_22px]">
                <span className="font-[family-name:var(--font-manrope-family)] text-[13px] font-bold uppercase tracking-[0.06em] leading-[20.8px] text-[#0B1B33]">
                  Affected area
                </span>
                <span className="font-[family-name:var(--font-manrope-family)] text-[13.5px] lg:text-[14px] font-normal leading-[22.4px] text-[#64748B] tracking-[-0.015em]">
                  <span className="block whitespace-nowrap">Optional: authentication, delegated authority, credentials, agent identity, API</span>
                  <span className="block">or integration, other.</span>
                </span>
              </div>

              {/* Row 4 */}
              <div className="flex flex-col gap-[3.5px] border-b border-[#E2E8F0] md:border-r p-[17px_22px]">
                <span className="font-[family-name:var(--font-manrope-family)] text-[13px] font-bold uppercase tracking-[0.06em] leading-[20.8px] text-[#0B1B33]">
                  Concern summary
                </span>
                <span className="font-[family-name:var(--font-manrope-family)] text-[14px] font-normal leading-[22.4px] text-[#64748B]">
                  Required, 30–1000 characters. No secrets or exploit details.
                </span>
              </div>
              <div className="flex flex-col gap-[3.5px] border-b border-[#E2E8F0] p-[17px_22px]">
                <span className="font-[family-name:var(--font-manrope-family)] text-[13px] font-bold uppercase tracking-[0.06em] leading-[20.8px] text-[#0B1B33]">
                  Observed time
                </span>
                <span className="font-[family-name:var(--font-manrope-family)] text-[14px] font-normal leading-[22.4px] text-[#64748B]">
                  Optional, with your timezone shown.
                </span>
              </div>

              {/* Row 5 */}
              <div className="flex flex-col gap-[3.5px] border-b border-[#E2E8F0] md:border-r p-[17px_22px]">
                <span className="font-[family-name:var(--font-manrope-family)] text-[13px] font-bold uppercase tracking-[0.06em] leading-[20.8px] text-[#0B1B33]">
                  Contact preference
                </span>
                <span className="font-[family-name:var(--font-manrope-family)] text-[14px] font-normal leading-[22.4px] text-[#64748B]">
                  Approved email or secure portal only.
                </span>
              </div>
              <div className="flex flex-col gap-[4px] border-b border-[#E2E8F0] p-[17px_22px]">
                <span className="font-[family-name:var(--font-manrope-family)] text-[13px] font-bold uppercase tracking-[0.06em] leading-[20.8px] text-[#0B1B33]">
                  Attachment
                </span>
                <span className="font-[family-name:var(--font-manrope-family)] text-[14px] font-normal leading-[22.4px] text-[#64748B]">
                  Off by default. Enabled only after Security and Privacy authorization.
                </span>
                <div className="pt-[6px]">
                  <span className="inline-flex items-center rounded-[6px] bg-[#FFFBEB] px-2 py-[4px] font-[family-name:var(--font-manrope-family)] text-[12px] font-normal leading-[19.2px] text-[#92400E]">
                    Disabled
                  </span>
                </div>
              </div>

              {/* Row 6 */}
              <div className="flex flex-col gap-[3.5px] md:border-r border-[#E2E8F0] p-[17px_22px]">
                <span className="font-[family-name:var(--font-manrope-family)] text-[13px] font-bold uppercase tracking-[0.06em] leading-[20.8px] text-[#0B1B33]">
                  Acknowledgement
                </span>
                <span className="font-[family-name:var(--font-manrope-family)] text-[14px] font-normal leading-[22.4px] text-[#64748B]">
                  Privacy notice acknowledged. No pre-ticked marketing consent.
                </span>
              </div>
              <div className="flex flex-col gap-[3.5px] p-[17px_22px]">
                <span className="font-[family-name:var(--font-manrope-family)] text-[13px] font-bold uppercase tracking-[0.06em] leading-[20.8px] text-[#0B1B33]">
                  Submit
                </span>
                <span className="font-[family-name:var(--font-manrope-family)] text-[14px] font-normal leading-[22.4px] text-[#64748B]">
                  One action. Retries do not create duplicate cases.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
