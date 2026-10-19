import Image from "next/image";

const regionPoints = [
  {
    icon: "/trust-assurance-privacy/region-icon-1.svg",
    text: "Regional information appears only when sourced from an approved disclosure.",
  },
  {
    icon: "/trust-assurance-privacy/region-icon-2.svg",
    text: "Applicability depends on geography and effective date.",
  },
  {
    icon: "/trust-assurance-privacy/region-icon-3.svg",
    text: "Subprocessor lists come from the Privacy Notice, not this page.",
  },
];

export default function PrivacyRegionSection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-36">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Left Side: Graphic / Network Image */}
        <div className="relative w-full max-w-[535px] shrink-0 overflow-hidden rounded-[20px] border border-[#E2E8F0] bg-slate-50 shadow-sm">
          <div className="relative aspect-[535/404] w-full">
            <Image
              src="/trust-assurance-privacy/region-network.webp"
              alt="Global network of connected nodes"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 535px"
            />
          </div>
        </div>

        {/* Right Side: Architecture & Residency Content */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#0B1B33] sm:text-4xl lg:text-[44px] lg:leading-[50px]">
              Architecture does not decide where data lives
            </h2>
            <p className="font-manrope text-base font-normal leading-relaxed text-[#64748B]">
              Where data is stored or transferred is set by reviewed privacy
              records, not by this diagram. No residency, transfer mechanism or
              vendor list is stated on this page.
            </p>
          </div>

          {/* Points with SVGs */}
          <div className="flex flex-col gap-4 pt-2">
            {regionPoints.map((point) => (
              <div key={point.text} className="flex items-center gap-3.5">
                <Image
                  src={point.icon}
                  alt=""
                  width={22}
                  height={22}
                  className="size-5.5 shrink-0"
                />
                <p className="font-manrope text-[15px] leading-relaxed text-[#334155]">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
