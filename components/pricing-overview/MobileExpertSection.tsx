import Link from "next/link";

export default function MobileExpertSection() {
  return (
    <section id="section-09" className="w-full scroll-mt-20 px-[11px] py-[60px]">
      <div className="mx-auto w-full max-w-[560px] border-b border-solid border-[#e2e8f0] pb-[90px]">
        <p className="font-dm-serif text-[64px] font-normal leading-[64px] text-[#e0f2fe]">09</p>
        <h2 className="font-dm-serif text-[30px] font-normal leading-[34.5px] text-[#2563eb]">
          Talk to an identity expert
        </h2>
        <p className="max-w-[720px] pb-[29px] pt-[22px] font-manrope text-[17px] font-normal leading-[28px] text-[#64748b]">
          This is the single route to a commercial conversation on this page. A form appears here only once it has been separately approved and connected to the sales intake.
        </p>
        <span className="inline-flex items-center rounded-[999px] border border-dashed border-[#94a3b8] bg-[#f1f5f9] px-[11px] py-[4.5px] font-manrope text-[11px] font-extrabold uppercase leading-[18.15px] tracking-[0.88px] text-[#334155]">
          Form not yet enabled
        </span>
        <p className="pt-[22px] font-manrope text-[14px] font-normal leading-[23.1px] text-[#64748b]">
          The approved fields are Name, Work email, Organization, Inquiry category, optional scope notes, a privacy notice link, and a separate, optional marketing consent. No submit control is shown here.
        </p>
        <div className="flex flex-wrap items-center gap-y-[14px] pt-[35px]">
          <Link
            href="/security-contact"
            className="inline-flex min-h-[48px] items-center rounded-[999px] border border-solid border-[#2563eb] bg-[#2563eb] px-[26px] py-[15px] font-manrope text-[15px] font-bold leading-[24.75px] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22b8d6] focus-visible:ring-offset-2"
          >
            Talk to an identity expert
          </Link>
        </div>
      </div>
    </section>
  );
}
