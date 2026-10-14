const mandateItems = [
  {
    num: "1",
    title: "Scope Definition",
    description:
      'Which resources? Which actions? Example: "Read invoices from S3, write to ledger, max $100k/day."',
  },
  {
    num: "2",
    title: "Purpose Statement",
    description:
      'Why does the agent need this? Example: "Process monthly vendor payments."',
  },
  {
    num: "3",
    title: "Time Bounds",
    description:
      'Valid from–through. Example: "Jan 1 – Dec 31, 2026. No auto-renewal."',
  },
  {
    num: "4",
    title: "Sponsor Sign-Off",
    description:
      'Who authorized this? Example: "CFO signature, date, approval chain."',
  },
  {
    num: "5",
    title: "Stored & Immutable",
    description:
      "Mandate recorded in system. Cannot be changed. Only revoked or allowed to expire.",
  },
];

export default function DelegatedAuthoritySection() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-[160px] lg:py-[105px]">
      <div className="mx-auto w-full max-w-[1120px]">
        <h2 className="mb-14 text-center font-dm-serif text-3xl font-normal leading-[1.2] text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[71.3px]">
          Delegated authority (the mandate)
        </h2>

        {/* Big Card with 5 Rows */}
        <div className="flex flex-col rounded-[12px] border border-[#E2E8F0] bg-white p-8 lg:p-12 shadow-sm">
          {mandateItems.map((item, index) => (
            <div
              key={item.num}
              className={`flex items-start gap-5 py-6 ${
                index !== mandateItems.length - 1 ? "border-b border-[#F1F5F9]" : ""
              }`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#22B8D6] to-[#2563EB] shadow-sm">
                <span className="font-manrope text-xl font-bold text-white">
                  {item.num}
                </span>
              </div>

              <div className="flex flex-col gap-1.5 pt-0.5">
                <h4 className="font-manrope text-[16.8px] font-bold leading-snug text-[#071426]">
                  {item.title}
                </h4>
                <p className="font-manrope text-[15.2px] font-normal leading-[26.6px] text-[#64748B]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 rounded-[12px] border border-[#22B8D6]/40 bg-gradient-to-r from-[#F8FAFC] via-[#F0F9FF] to-[#F8FAFC] p-7 shadow-sm">
          <p className="font-manrope text-[16px] font-bold leading-[28px] text-[#475569]">
            <span className="text-[#071426]">Mandate ≠ Permission:</span> A mandate is the GRANT of authority. Permission is the DECISION to allow an action. They are separate concerns evaluated at request time.
          </p>
        </div>
      </div>
    </section>
  );
}
