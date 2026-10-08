import Image from "next/image";

import { CtaButtons } from "./shared";

export default function AboutCtaSection() {
  return (
    <section className="bg-white-solid px-6 py-12 sm:px-10 lg:px-24">
      <div className="relative mx-auto flex w-full max-w-[1250px] flex-col items-center gap-5 overflow-hidden rounded-[32px] bg-azure-9 px-6 py-20 text-center sm:px-12 lg:min-h-[543px] lg:justify-center">
        <Image
          src="/about-us/final-cta-bg.webp"
          alt=""
          fill
          sizes="(min-width: 1440px) 1250px, 100vw"
          className="object-cover"
        />

        <h2 className="relative max-w-[640px] font-dm-serif text-4xl font-normal leading-tight text-white-solid sm:text-5xl sm:leading-[59.8px]">
          Build trust into the action <br className="hidden sm:block" />
          not just the login.
        </h2>

        <p className="relative max-w-[600px] font-manrope text-base font-normal leading-7 text-white-solid/96">
          If your architecture needs to connect identity, credentials,
          delegated authority, non-human identities, continuous trust,
          revocation, and evidence, explore the Zoiko iD platform or speak with
          an identity expert.
        </p>

        <div className="relative">
          <CtaButtons expertFirst />
        </div>
      </div>
    </section>
  );
}
