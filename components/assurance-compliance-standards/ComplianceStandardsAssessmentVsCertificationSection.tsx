import Image from "next/image";

interface TermCardProps {
  iconSrc: string;
  title: string;
  description: React.ReactNode;
  warningText: string;
}

const terms: TermCardProps[] = [
  {
    iconSrc: "/assurance-compliance-standards/icon-411_6068.svg",
    title: "Standard",
    description: (
      <>
        A published specification or
        <br />
        framework.
      </>
    ),
    warningText: "Not a claim of compliance",
  },
  {
    iconSrc: "/assurance-compliance-standards/icon-411_6080.svg",
    title: "Alignment",
    description: (
      <>
        Design that follows a
        <br />
        standard, without a formal
        <br />
        result.
      </>
    ),
    warningText: "Not certification",
  },
  {
    iconSrc: "/assurance-compliance-standards/icon-411_6103.svg",
    title: "Certification",
    description: (
      <>
        Issued by a certifying body,
        <br />
        with validity.
      </>
    ),
    warningText: "Requires a verified record",
  },
  {
    iconSrc: "/assurance-compliance-standards/icon-411_6115.svg",
    title: "Report",
    description: (
      <>
        The document itself,
        <br />
        released only when
        <br />
        approved.
      </>
    ),
    warningText: "Access is gated",
  },
];

export default function ComplianceStandardsAssessmentVsCertificationSection() {
  return (
    <section className="bg-[#FFFFFF] px-6 py-16 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-[60px]">
        {/* Section Header */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal text-[#0B1B33] sm:text-4xl lg:text-[52px] lg:leading-[58.9px]">
            Five terms that are often confused
          </h2>
          <p className="max-w-[1000px] pt-[2px] font-manrope text-base font-normal leading-[25.6px] text-[#64748B]">
            <span className="lg:whitespace-nowrap">
              Each term means something different. A design that follows a standard is not the same as a certificate issued for it.
            </span>
          </p>
        </div>

        {/* 4 Cards Container */}
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 overflow-hidden rounded-[20px] border border-[#E2E8F0] bg-[#FFFFFF] md:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-[#E2E8F0]">
            {terms.map((term) => (
              <div
                key={term.title}
                className="flex flex-col justify-between p-6 sm:p-[26px_22px_30px_22px]"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E0F2FE]">
                    <Image
                      src={term.iconSrc}
                      alt=""
                      width={20}
                      height={20}
                      className="shrink-0"
                    />
                  </div>

                  <h3 className="font-manrope text-[17px] font-bold leading-[27.2px] text-[#0B1B33]">
                    {term.title}
                  </h3>

                  <p className="min-h-[48px] font-manrope text-[14px] font-normal leading-[22.4px] text-[#64748B]">
                    {term.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-center rounded-[8px] bg-[#FDECEB] px-2.5 py-2">
                  <span className="whitespace-nowrap font-manrope text-[13px] font-normal leading-[20.8px] text-[#952121]">
                    {term.warningText}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Review Team Banner */}
          <div className="relative h-[220px] w-full overflow-hidden rounded-[20px] bg-slate-100 sm:h-[260px]">
            <Image
              src="/assurance-compliance-standards/img-4421cc3d0db2e6763f2357ef3571f4731afae505.png"
              alt="Team reviewing documents together"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 1120px, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
