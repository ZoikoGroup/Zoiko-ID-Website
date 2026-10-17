import Link from "next/link";

export default function TrustCenterHero() {
  return (
    <section
      className="relative -mt-20 overflow-hidden px-6 pb-20 pt-36 sm:-mt-24 sm:px-10 sm:pt-40 lg:-mt-[116px] lg:flex lg:min-h-[664px] lg:items-center lg:px-20 lg:pb-24 lg:pt-[180px] xl:px-40"
      style={{
        backgroundColor: "#0F1B2E",
        backgroundImage: "url('/trust-center/hero-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative mx-auto flex w-full max-w-[840px] flex-col items-center gap-5 text-center">
        <h1 className="font-dm-serif text-[40px] font-normal leading-[1.08] text-white-solid sm:text-6xl lg:text-7xl lg:leading-[64.4px]">
          Review the evidence behind Zoiko iD&rsquo;s trust architecture.
        </h1>

        <p className="max-w-[540px] pt-2 font-manrope text-base leading-7 text-[#CBD5E1]">
          Explore approved information about identity security, delegated
          authority, privacy, governance, and assurance. Request additional
          documentation when access conditions apply.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-5 sm:gap-5">
          <Link
            href="#trust-topics"
            className="inline-flex items-center rounded-md bg-azure-48 px-7 py-3.5 font-manrope text-base font-bold text-white-solid shadow-[0px_8px_20px_0px_rgba(37,99,235,0.30)] transition-colors hover:bg-[#1D4ED8]"
          >
            Explore trust topics
          </Link>
          <Link
            href="#"
            className="inline-flex items-center rounded-md border border-white-solid px-7 py-3.5 font-manrope text-base font-bold text-white-solid transition-colors hover:bg-white-solid/10"
          >
            Talk to an identity expert
          </Link>
        </div>
      </div>
    </section>
  );
}
