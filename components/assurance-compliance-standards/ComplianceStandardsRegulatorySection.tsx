import Image from "next/image";
import Link from "next/link";

interface RegulatoryItem {
  iconSrc: string;
  text: React.ReactNode;
}

const regulatoryItems: RegulatoryItem[] = [
  {
    iconSrc: "/assurance-compliance-standards/icon-411_6037.svg",
    text: "Jurisdiction is named for each applicability statement.",
  },
  {
    iconSrc: "/assurance-compliance-standards/icon-411_6043.svg",
    text: (
      <>
        Legal wording is owned by counsel and published in the Privacy
        <br />
        Notice.
      </>
    ),
  },
  {
    iconSrc: "/assurance-compliance-standards/icon-411_6049.svg",
    text: "No universal regional approval is stated on this page.",
  },
];

export default function ComplianceStandardsRegulatorySection() {
  return (
    <section className="bg-[#F1F5F9] px-6 py-16 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-[70px] lg:flex-row">
        {/* Left: Content, Cards, and Privacy Link */}
        <div className="flex flex-1 flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal text-[#0B1B33] sm:text-4xl lg:text-[52px] lg:leading-[58.9px]">
            Applicability is scoped, never assumed
          </h2>

          <p className="max-w-[560px] pt-[2.6px] font-manrope text-base font-normal leading-[25.6px] text-[#64748B]">
            Whether a regulation applies depends on the entity, the activity and the jurisdiction. Product capability does not establish that a regulation is satisfied.
          </p>

          <div className="mt-3.5 flex flex-col gap-3">
            {regulatoryItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3.5 rounded-[12px] bg-[#FFFFFF] px-[18px] py-4 shadow-sm"
              >
                <div className="flex h-[22px] w-[22px] shrink-0 items-center justify-center">
                  <Image
                    src={item.iconSrc}
                    alt=""
                    width={22}
                    height={22}
                    className="shrink-0"
                  />
                </div>
                <span className="font-manrope text-[14px] font-normal leading-[22.4px] text-[#334155]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-3">
            <Link
              href="/privacy"
              className="inline-flex items-center font-manrope text-[15px] font-bold leading-[24px] text-[#2563EB] transition-colors hover:text-blue-700"
            >
              Open Privacy →
            </Link>
          </div>
        </div>

        {/* Right: Global Network Image */}
        <div className="relative h-[360px] w-full shrink-0 overflow-hidden rounded-[20px] bg-slate-100 sm:h-[440px] lg:h-[480px] lg:w-[480px]">
          <Image
            src="/assurance-compliance-standards/img-2c67d1b5f103f12f8f50c7d2992a0850a8ae3284.png"
            alt="Global network of connected nodes representing jurisdictions"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 480px, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
