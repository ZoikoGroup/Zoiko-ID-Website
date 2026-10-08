import Image from "next/image";

import { Section, SectionHeader } from "@/components/home/shared";

import { BulletList, SplitRow } from "./shared";

const requirements = [
  "Verified credentials and organization context",
  "Delegated authority and purpose/scope",
  "Current trust signals and time limits",
  "Revocation and audit-ready evidence",
];

export default function IdentityNecessarySection() {
  return (
    <Section>
      <SectionHeader
        title="Identity is necessary. It is no longer sufficient."
        widthClass="max-w-[708px]"
      />

      <SplitRow>
        <div className="flex flex-1 flex-col items-start gap-5 pb-4">
          <p className="font-manrope text-base font-medium leading-7 text-azure-35">
            Authentication can establish that a person or workload controls an
            identity. But high-value digital actions increasingly require:
          </p>

          <BulletList items={requirements} />

          <p className="font-manrope text-base font-normal leading-7 text-azure-35">
            Zoiko iD exists to make that trust chain explicit, programmable,
            interoperable, and reviewable.
          </p>
        </div>

        <div className="relative aspect-[536/360] w-full overflow-hidden rounded-2xl lg:flex-1">
          <Image
            src="/about-us/identity-necessary.webp"
            alt="Smiling team of colleagues standing together"
            fill
            sizes="(min-width: 1024px) 536px, 90vw"
            className="object-cover"
          />
        </div>
      </SplitRow>
    </Section>
  );
}
