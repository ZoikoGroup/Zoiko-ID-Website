import Image from "next/image";

import {
  BankIcon,
  BoltIcon,
  FileCabinetIcon,
  LandmarkIcon,
  MedicalIcon,
  ShieldFilledIcon,
} from "./icons";
import { IconTile, Section, SectionHeader } from "./shared";

const industries = [
  {
    title: "Financial Services",
    description:
      "Compliance with KYC/AML, SOX, PCI-DSS, and regulatory requirements.",
    image: "/home/financial-services.webp",
    icon: <BankIcon size={24} />,
  },
  {
    title: "Healthcare",
    description:
      "HIPAA-ready with patient privacy, audit trails, and access logging.",
    image: "/home/healthcare.webp",
    icon: <MedicalIcon size={24} />,
  },
  {
    title: "Government",
    description:
      "FedRAMP compliant with classified data handling and federal requirements.",
    image: "/home/government.webp",
    icon: <LandmarkIcon size={24} />,
  },
  {
    title: "Legal & Compliance",
    description:
      "Chain of custody, immutable evidence, and litigation-ready audit trails.",
    image: "/home/legal-compliance.webp",
    icon: <FileCabinetIcon size={24} />,
  },
  {
    title: "Defense & Aerospace",
    description:
      "Defense-grade security with clearance management and facility access.",
    image: "/home/defense-aerospace.webp",
    icon: <ShieldFilledIcon size={24} />,
  },
  {
    title: "Energy & Utilities",
    description: "Critical infrastructure protection with NERC CIP compliance.",
    image: "/home/energy-utilities.webp",
    icon: <BoltIcon size={24} />,
  },
];

export default function IndustrySolutionsSection() {
  return (
    <Section background="grey">
      <SectionHeader
        title="Industry-specific solutions"
        subtitle="Tailored for regulated and critical industries"
      />

      <div className="flex w-full flex-col gap-6">
        {industries.map((industry) => (
          <article
            key={industry.title}
            className="flex flex-col gap-8 rounded-2xl bg-white-solid p-6 outline-1 -outline-offset-1 outline-grey-91 sm:p-10 lg:flex-row lg:items-center lg:gap-12 lg:p-16"
          >
            <div className="relative aspect-[453/283] w-full overflow-hidden rounded-xl lg:w-[453px] lg:shrink-0">
              <Image
                src={industry.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 453px, 90vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col items-start gap-4 lg:max-w-[280px]">
              <IconTile className="size-14 bg-sky-100">{industry.icon}</IconTile>
              <h3 className="font-dm-serif text-lg font-normal leading-6 text-azure-9">
                {industry.title}
              </h3>
              <p className="font-manrope text-sm font-normal leading-6 text-azure-35">
                {industry.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
