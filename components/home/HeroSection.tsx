import Image from "next/image";

import { ButtonLink } from "./shared";

export default function HeroSection() {
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
          <h1 className="font-dm-serif text-[2.5rem] font-normal leading-[1.1] text-white-solid sm:text-6xl lg:text-7xl lg:leading-[79.2px]">
            Identity
            <br />
            infrastructure
            <br />
            for every actor
          </h1>

          <p className="max-w-[520px] font-manrope text-base font-normal leading-7 text-white-solid/96">
            Authenticate identity. Verify credentials. Prove delegated
            authority. Make continuous access decisions. Preserve auditable
            evidence through one programmable trust layer.
          </p>

          <div className="flex flex-wrap gap-4 pt-5">
            <ButtonLink>Try now</ButtonLink>
            <ButtonLink variant="secondary">View docs</ButtonLink>
          </div>
        </div>

        <div className="relative aspect-[596/550] w-full max-w-[596px] overflow-hidden rounded-3xl shadow-[0px_20px_48px_0px_rgba(0,0,0,0.15)] xl:shrink-0">
          <Image
            src="/home/identity-infrastructure-team.webp"
            alt="Team of professionals standing on a modern bridge"
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
