import Image from "next/image";

import { ActionLink } from "@/components/about/shared";
import { MailIcon, PhoneIcon } from "@/components/home/icons";

export default function AuthCtaSection() {
  return (
    <section className="bg-white-solid px-6 py-12 sm:px-10 lg:px-24">
      <div className="relative mx-auto flex w-full max-w-[1250px] flex-col items-center gap-5 overflow-hidden rounded-[32px] bg-azure-9 px-6 py-20 text-center sm:px-12 lg:min-h-[523px] lg:justify-center">
        <Image
          src="/authentication-sso/final-cta-bg.webp"
          alt=""
          fill
          sizes="(min-width: 1440px) 1250px, 100vw"
          className="object-cover"
        />

        <h2 className="relative max-w-[820px] font-dm-serif text-4xl font-normal leading-tight text-white-solid sm:text-5xl sm:leading-[59.8px]">
          Ready to Connect authentication to governed access?
        </h2>

        <p className="relative max-w-[680px] font-manrope text-base font-normal leading-7 text-white-solid/96">
          Bring authentication context into your identity and access control
          infrastructure with Zoiko iD.
        </p>

        <div className="relative flex flex-wrap items-center justify-center gap-5 pt-4">
          <ActionLink icon={<PhoneIcon size={16} />}>
            Talk to an expert
          </ActionLink>
          <ActionLink variant="outline" icon={<MailIcon size={16} />}>
            View API docs
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
