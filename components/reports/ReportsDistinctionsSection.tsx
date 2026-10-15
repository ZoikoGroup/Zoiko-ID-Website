import Image from "next/image";

interface DistinctionItem {
  title: string;
  icon: string;
  description: string;
  covers: string;
}

const distinctions: DistinctionItem[] = [
  {
    title: "Audit Reports",
    icon: "/reports/distinction-audit-reports.svg",
    description:
      "Independent assessments of controls, processes, and systems during a specific period. Historical and scoped.",
    covers: "Past state, specific period, narrowly defined scope",
  },
  {
    title: "Certifications",
    icon: "/reports/distinction-certifications.svg",
    description:
      "Current, ongoing validations against standards. Real-time or periodic re-assessment with continuous controls.",
    covers: "Current state, continuous, standards-based",
  },
  {
    title: "Compliance Reviews",
    icon: "/reports/distinction-compliance.svg",
    description:
      "Assessment against specific regulations (GDPR, HIPAA, SOX). May be customer-conducted or third-party verified.",
    covers: "Regulatory alignment, control readiness",
  },
  {
    title: "Security Assessments",
    icon: "/reports/distinction-security.svg",
    description:
      "Penetration testing, vulnerability scanning, or red team exercises. Time-bound findings and remediation tracking.",
    covers: "Vulnerabilities, threat posture, fixes",
  },
];

export default function ReportsDistinctionsSection() {
  return (
    <section className="bg-[#F8FAFC] px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 lg:gap-14">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-3xl font-normal text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Assurance artifact distinctions
        </h2>

        {/* 4 Cards Grid */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {distinctions.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[360px] flex-col justify-between rounded-[12px] border border-[#E2E8F0] bg-white-solid p-7 shadow-xs transition-shadow duration-200 hover:shadow-md"
            >
              <div className="flex flex-col gap-4">
                {/* Gradient Icon Badge */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[12px] bg-[linear-gradient(135deg,#22B8D6_0%,#2563EB_100%)] shadow-sm">
                  <Image
                    src={item.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="brightness-0 invert"
                  />
                </div>

                {/* Title */}
                <h3 className="font-dm-serif text-[18px] font-normal leading-snug text-[#071426]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-manrope text-[15.2px] font-normal leading-[26.6px] text-[#64748B]">
                  {item.description}
                </p>
              </div>

              {/* Covers Footer */}
              <div className="pt-4 font-manrope text-[13.6px] leading-[23.8px] text-[#64748B]">
                <span className="font-bold">Covers:</span>{" "}
                <span className="font-normal">{item.covers}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
