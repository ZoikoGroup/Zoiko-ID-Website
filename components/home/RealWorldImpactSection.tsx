import Image from "next/image";

import { Section, SectionHeader } from "./shared";

const caseStudies = [
  {
    company: "TechCorp",
    sector: "Enterprise Software (5000+ employees)",
    logo: "/home/techcorp-logo.webp",
    quote:
      "Zoiko iD unified identity governance across 50+ applications and eliminated manual access provisioning. We reduced onboarding time by 60% and improved security posture.",
    stats: [
      { value: "60%", label: "Onboarding Reduction" },
      { value: "100%", label: "Audit Coverage" },
    ],
  },
  {
    company: "SecureFlow",
    sector: "Financial Services (2000+ employees, global)",
    logo: "/home/secureflow-logo.webp",
    quote:
      "Continuous trust evaluation and immutable evidence gave us confidence for global scale. Compliance audits became straightforward with complete decision visibility.",
    stats: [
      { value: "50+", label: "Countries Supported" },
      { value: "99.99%", label: "Uptime Delivered" },
    ],
  },
];

export default function RealWorldImpactSection() {
  return (
    <Section>
      <SectionHeader
        title="Real-world impact"
        subtitle="How enterprises solved identity challenges with Zoiko iD"
      />

      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        {caseStudies.map((study) => (
          <figure
            key={study.company}
            className="flex flex-col justify-between gap-8 rounded-2xl bg-linear-53 from-grey-98 to-grey-96 p-8 outline-1 -outline-offset-1 outline-grey-91 sm:p-12"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-5 border-b-2 border-cyan-49/20 pb-6">
                <Image
                  src={study.logo}
                  alt={`${study.company} logo`}
                  width={64}
                  height={64}
                  className="size-16 shrink-0 rounded-full border border-grey-91"
                />
                <figcaption className="flex flex-col gap-1">
                  <span className="font-dm-serif text-xl font-normal leading-6 text-azure-9">
                    {study.company}
                  </span>
                  <span className="font-manrope text-sm font-normal leading-6 text-azure-47">
                    {study.sector}
                  </span>
                </figcaption>
              </div>

              <blockquote className="font-manrope text-base font-normal leading-7 text-azure-35">
                &quot;{study.quote}&quot;
              </blockquote>
            </div>

            <dl className="grid grid-cols-2 gap-4 pt-4">
              {study.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-1 rounded-2xl bg-white px-2 py-4"
                >
                  <dt className="order-2 text-center font-manrope text-xs font-normal uppercase leading-5 tracking-wide text-azure-47">
                    {stat.label}
                  </dt>
                  <dd className="order-1 text-center font-manrope text-2xl font-bold leading-10 text-azure-53">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </figure>
        ))}
      </div>
    </Section>
  );
}
