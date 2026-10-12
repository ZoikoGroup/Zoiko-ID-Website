import Image from "next/image";

import { ActionLink } from "@/components/about/shared";
import { KeyIcon, PhoneIcon } from "@/components/home/icons";

export default function AuthHeroSection() {
  return (
    // Negative top margin pulls the hero up behind the floating header;
    // matches the header height at each breakpoint (see Header.tsx).
    <section className="relative -mt-20 flex min-h-[560px] items-center justify-center overflow-hidden bg-azure-9 px-6 pb-20 pt-36 sm:-mt-24 sm:px-10 sm:pt-40 lg:-mt-[116px] lg:min-h-[664px] lg:pt-[180px]">
      <Image
        src="/authentication-sso/hero-bg.webp"
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative flex w-full max-w-[694px] flex-col items-center gap-5 text-center">
        <h1 className="font-dm-serif text-[2.5rem] font-normal leading-[1.05] text-white-solid sm:text-6xl lg:text-7xl lg:leading-[64.4px]">
          Connect enterprise sign-in to governed access.
        </h1>

        <p className="max-w-[577px] pt-2 font-manrope text-base font-normal leading-7 text-[#CBD5E1]">
          Zoiko iD brings authentication context, federation, credentials,
          authority and auditable decisions into one programmable trust layer.
          Keep your existing identity systems and examine how identity evidence
          can inform access policy.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 pt-5">
          <ActionLink icon={<KeyIcon size={18} />}>Explore methods</ActionLink>
          <ActionLink variant="outline" icon={<PhoneIcon size={18} />}>
            Talk to expert
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
