import Image from "next/image";

import { ActionLink } from "@/components/about/shared";
import { LayersIcon, PhoneIcon } from "@/components/home/icons";

export default function OrgHeroSection() {
  return (
    // Negative top margin pulls the hero up behind the floating header;
    // matches the header height at each breakpoint (see Header.tsx).
    <section className="relative -mt-20 overflow-hidden bg-linear-to-b from-azure-9 via-azure-13 to-azure-11 px-6 pb-16 pt-36 sm:-mt-24 sm:px-10 sm:pt-40 lg:-mt-[116px] lg:pt-[180px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 -top-8 h-[1010px] w-[1907px] rounded-[524px] bg-radial from-cyan-49/20 to-cyan-49/0 to-70% blur-[50px]"
      />

      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 xl:flex-row xl:gap-3">
        <div className="flex w-full flex-col items-start gap-5 xl:min-w-[512px] xl:flex-1">
          <h1 className="font-dm-serif text-[2.5rem] font-normal leading-[1.15] text-white-solid sm:text-6xl lg:text-7xl lg:leading-[82.8px]">
            Establish the
            <br />
            organization.
          </h1>

          <p className="max-w-[520px] font-manrope text-lg font-normal leading-8 text-[#CBD5E1]">
            Verify relevant claims. Keep authority bounded and auditable. Scale
            identity across enterprises with transparent delegation.
          </p>

          <div className="flex flex-wrap gap-5 pt-5">
            <ActionLink icon={<LayersIcon size={18} />}>
              Explore the model
            </ActionLink>
            <ActionLink variant="outline" icon={<PhoneIcon size={18} />}>
              Talk to expert
            </ActionLink>
          </div>
        </div>

        <div className="relative aspect-[596/550] w-full max-w-[596px] overflow-hidden rounded-3xl shadow-[0px_20px_48px_0px_rgba(0,0,0,0.15)] xl:shrink-0">
          <Image
            src="/organization-identity/hero-team.webp"
            alt="Team of colleagues standing together with arms crossed"
            fill
            preload
            sizes="(min-width: 640px) 596px, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
