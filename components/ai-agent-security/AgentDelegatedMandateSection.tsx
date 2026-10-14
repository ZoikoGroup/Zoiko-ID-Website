export default function AgentDelegatedMandateSection() {
  return (
    <section id="delegated-mandate" className="bg-white-solid px-6 py-20 sm:px-10 lg:px-[160px] lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-10 lg:gap-10">
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          The delegated mandate
        </h2>

        <div className="grid w-full grid-cols-1 items-start gap-6 lg:grid-cols-12">
          {/* Left Column: What is in a mandate? */}
          <div className="flex flex-col rounded-xl border border-mystic bg-white-solid p-8 shadow-[0px_1px_3px_0px_rgba(15,23,42,0.03)] lg:col-span-5">
            <h3 className="mb-5 font-dm-serif text-[22.4px] font-normal leading-snug text-azure-9 text-left">
              What is in a mandate?
            </h3>

            <ul className="flex flex-col gap-3 pl-5 font-manrope text-[14.5px] leading-relaxed text-[#64748B] list-disc text-left">
              <li>
                <strong className="font-bold text-[#64748B]">Agent Identity</strong> — Who is being granted authority
              </li>
              <li>
                <strong className="font-bold text-[#64748B]">Sponsor</strong> — Who granted the authority and is
                <br />
                accountable
              </li>
              <li>
                <strong className="font-bold text-[#64748B]">Scope</strong> — Which resources and actions are allowed
              </li>
              <li>
                <strong className="font-bold text-[#64748B]">Purpose</strong> — Why the agent needs this authority
              </li>
              <li>
                <strong className="font-bold text-[#64748B]">Time Bounds</strong> — How long the mandate is valid
              </li>
              <li>
                <strong className="font-bold text-[#64748B]">Revocation Status</strong> — Is this mandate currently active
              </li>
              <li>
                <strong className="font-bold text-[#64748B]">Audit Reference</strong> — Who signed off and when
              </li>
            </ul>
          </div>

          {/* Right Column: Example Mandate */}
          <div className="flex flex-col rounded-xl border border-[#22B8D6] bg-[#22B8D6]/[0.05] p-8 shadow-[0px_1px_3px_0px_rgba(15,23,42,0.03)] lg:col-span-7">
            <h3 className="mb-5 font-dm-serif text-[22.4px] font-normal leading-snug text-azure-9 text-left">
              Example Mandate (Illustrative):
            </h3>

            <ul className="flex flex-col gap-3 pl-5 font-manrope text-[14.5px] leading-relaxed text-[#64748B] list-disc text-left">
              <li>
                <strong className="font-bold text-[#64748B]">Agent Identity:</strong> &quot;invoice-processor-v2&quot; (service account)
              </li>
              <li>
                <strong className="font-bold text-[#64748B]">Sponsor:</strong> Sarah Chen (Finance Manager)
              </li>
              <li>
                <strong className="font-bold text-[#64748B]">Scope:</strong> Read invoices from S3 bucket, send to payment system,
                <br />
                update ledger
              </li>
              <li>
                <strong className="font-bold text-[#64748B]">Purpose:</strong> Automated monthly invoice processing for vendor
                <br />
                payments
              </li>
              <li>
                <strong className="font-bold text-[#64748B]">Time :</strong> Time: Valid Jan 1 – Dec 31, 2026
              </li>
              <li>
                <strong className="font-bold text-[#64748B]">Status:</strong> Active (can be revoked anytime by sponsor or org policy)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
