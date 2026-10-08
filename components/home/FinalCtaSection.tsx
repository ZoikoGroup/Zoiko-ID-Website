import Image from "next/image";

import { ButtonLink } from "./shared";

export default function FinalCtaSection() {
  return (
    <section className="bg-white-solid px-6 py-12 sm:px-10 lg:px-24">
      <div className="relative mx-auto flex w-full max-w-[1250px] flex-col items-center gap-6 overflow-hidden rounded-[32px] bg-azure-9 px-6 py-20 text-center sm:px-12 lg:min-h-[477px] lg:justify-center">
        <Image
          src="/home/final-cta.webp"
          alt=""
          fill
          sizes="(min-width: 1440px) 1250px, 100vw"
          className="object-cover"
        />

        <h2 className="relative max-w-[1100px] font-dm-serif text-4xl font-normal leading-tight text-white-solid sm:text-5xl sm:leading-[59.8px]">
          Ready to transform your identity infrastructure?
        </h2>

        <p className="relative max-w-[600px] font-manrope text-base font-normal leading-7 text-white-solid/96">
          Join enterprises that are building trust beyond login with Zoiko iD.
          Start your free trial today, no credit card required.
        </p>

        <div className="relative flex flex-wrap justify-center gap-4 pt-6">
          <ButtonLink>Start free trial</ButtonLink>
          <ButtonLink variant="secondary">Schedule demo</ButtonLink>
        </div>
      </div>
    </section>
  );
}
