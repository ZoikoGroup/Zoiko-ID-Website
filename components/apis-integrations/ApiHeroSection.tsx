import Image from "next/image";

import { ActionLink } from "@/components/about/shared";
import { HierarchyIcon, PhoneIcon } from "@/components/home/icons";

export default function ApiHeroSection() {
  return (
    // Negative top margin pulls the hero up behind the floating header;
    // matches the header height at each breakpoint (see Header.tsx).
    <section className="relative -mt-20 flex min-h-[560px] items-center justify-center overflow-hidden bg-azure-9 px-6 pb-20 pt-36 sm:-mt-24 sm:px-10 sm:pt-40 lg:-mt-[116px] lg:min-h-[664px] lg:pt-[180px]">
      <Image
        src="/apis-integrations/hero-bg.webp"
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative flex w-full max-w-[1048px] flex-col items-center gap-5 text-center">
        <h1 className="font-dm-serif text-[2.25rem] font-normal leading-[1.05] text-white-solid sm:text-6xl lg:text-7xl lg:leading-[64.4px]">
          Connect identity, authority, and evidence to the systems you already
          use.
        </h1>

        <p className="max-w-[640px] pt-2 font-manrope text-base font-normal leading-7 text-[#CBD5E1]">
          Explore standards-oriented identity integration, policy and
          delegated-authority interfaces, event-driven trust signals, and
          developer pathways designed to work alongside existing enterprise
          infrastructure. Capabilities and availability depend on the approved
          product release and integration profile.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 pt-5">
          <ActionLink icon={<HierarchyIcon size={18} />}>
            Explore Paths
          </ActionLink>
          <ActionLink variant="outline" icon={<PhoneIcon size={18} />}>
            Talk to expert
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
