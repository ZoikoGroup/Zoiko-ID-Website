import Link from "next/link";

export default function DesktopTalkToExpertSection() {
  return (
    <section
      id="section-09"
      className="flex w-full flex-col items-start gap-[36px] border-b border-solid border-[#e2e8f0] pb-[105px]"
    >
      <div className="flex w-full flex-col items-start gap-[16px]">
        <div className="flex w-full flex-col items-start">
          <p className="font-dm-serif text-[96px] font-normal leading-[96px] text-[#e0f2fe]">
            09
          </p>
          <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[57.9px] text-[#07111f]">
            Talk to an identity expert
          </h2>
          <p className="max-w-[720px] font-manrope text-[17px] font-normal leading-[28px] text-[#64748b]">
            This is the single route to a commercial conversation on this page.
            A form appears here only once it has been separately approved and
            connected to the sales intake.
          </p>
        </div>
        <span className="inline-flex items-center rounded-full border border-dashed border-[#94a3b8] bg-[#f1f5f9] px-[11px] pb-[4.64px] pt-[4.5px] font-manrope text-[11px] font-extrabold uppercase leading-[18.15px] tracking-[0.88px] text-[#334155]">
          Form not yet enabled
        </span>
      </div>
      <div className="flex w-full flex-col items-start">
        <p className="w-full font-manrope text-[14px] font-normal leading-[23.1px] text-[#64748b]">
          The approved fields are Name, Work email, Organization, Inquiry
          category, optional scope notes, a privacy notice link, and a
          separate, optional marketing consent. No submit control is shown
          here.
        </p>
        <div className="flex w-full flex-wrap items-center gap-y-[14px] pt-[35px]">
          <Link
            href="/security-contact"
            className="inline-flex min-h-[48px] items-center rounded-full border border-solid border-[#2563eb] bg-[#2563eb] px-[26px] py-[15px] font-manrope text-[15px] font-bold leading-[24.75px] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1d4ed8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
          >
            Talk to an identity expert
          </Link>
        </div>
      </div>
    </section>
  );
}
