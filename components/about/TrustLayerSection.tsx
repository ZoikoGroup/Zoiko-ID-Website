import Image from "next/image";

import { Section, SectionHeader } from "@/components/home/shared";

import { BulletList, SplitRow } from "./shared";

const startingPoints = [
  "Delegated third-party access",
  "Non-human identity (agents, services, machines)",
  "Credential verification & organization trust",
  "Centralized authorization & policy",
];

export default function TrustLayerSection() {
  return (
    <Section>
      <SectionHeader
        title="Add a trust layer without rebuilding your identity estate."
        widthClass="max-w-[800px]"
      />

      <SplitRow>
        <div className="relative aspect-[536/360] w-full overflow-hidden rounded-2xl lg:flex-1">
          <Image
            src="/about-us/overlay-first-adoption.webp"
            alt="Colleagues talking together in an office"
            fill
            sizes="(min-width: 1024px) 536px, 90vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col items-start gap-4 pb-4">
          <h3 className="font-dm-serif text-3xl font-normal text-azure-9">
            Overlay-first adoption
          </h3>

          <p className="font-manrope text-base font-normal leading-7 text-azure-35">
            Zoiko iD is designed to integrate with existing identity providers,
            directories, verification services, applications, API gateways, and
            relying parties.
          </p>

          <p className="pt-2 font-manrope text-base font-semibold text-azure-9">
            Start with one problem
          </p>

          <BulletList items={startingPoints} className="gap-2" />

          <p className="pt-1 font-manrope text-base font-bold leading-7 text-azure-35">
            Then expand without changing the core trust model or forcing
            migration.
          </p>
        </div>
      </SplitRow>
    </Section>
  );
}
