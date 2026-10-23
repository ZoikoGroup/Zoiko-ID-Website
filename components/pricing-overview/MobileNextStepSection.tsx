import Link from "next/link";

export default function MobileNextStepSection() {
  return (
    <section className="w-full bg-[#2563eb] px-[22px] pb-[105px] pt-[104px]">
      <div className="mx-auto w-full max-w-[560px]">
        <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#22b8d6]">
          Next step
        </p>
        <h2 className="max-w-[900px] font-dm-serif text-[30px] font-normal leading-[34.5px] text-white">
          Discuss an identity infrastructure evaluation.
        </h2>
        <div className="flex flex-col items-start gap-[40px] pt-[24.8px]">
          <p className="max-w-[620px] font-manrope text-[16px] font-normal leading-[26.4px] text-[#cbd5e1]">
            Describe your use case, and our team will confirm what applies to your scope. Submitting an inquiry creates no contractual commitment or offer.
          </p>
          <div className="flex flex-col items-start gap-[14px]">
            <Link
              href="/security-contact"
              className="inline-flex min-h-[48px] items-center rounded-[999px] border border-solid border-[#2563eb] bg-[#2563eb] px-[26px] py-[15px] font-manrope text-[15px] font-bold leading-[24.75px] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2563eb]"
            >
              Talk to an identity expert
            </Link>
            <Link
              href="/apis-integrations"
              className="inline-flex min-h-[48px] items-center rounded-[999px] border border-solid border-white px-[26px] py-[15px] font-manrope text-[15px] font-bold leading-[24.75px] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2563eb]"
            >
              Explore the platform
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
