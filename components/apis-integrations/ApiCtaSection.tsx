import Image from "next/image";

import { ActionLink } from "@/components/about/shared";
import { MailIcon, PhoneIcon } from "@/components/home/icons";

export default function ApiCtaSection() {
  return (
    <section className="bg-white-solid px-6 py-12 sm:px-10 lg:px-24">
      <div className="relative mx-auto flex w-full max-w-[1250px] flex-col items-center gap-5 overflow-hidden rounded-[32px] bg-azure-9 px-6 py-20 text-center sm:px-12 lg:min-h-[545px] lg:justify-center">
        <Image
          src="/apis-integrations/final-cta-bg.webp"
          alt=""
          fill
          sizes="(min-width: 1440px) 1250px, 100vw"
          className="object-cover"
        />

        <h2 className="relative max-w-[880px] font-dm-serif text-4xl font-normal leading-tight text-white-solid sm:text-5xl sm:leading-[72px]">
          Ready to integrate identity with your infrastructure?
        </h2>

        <p className="relative max-w-[660px] font-manrope text-base font-normal leading-7 text-white-solid/96">
          Connect with our identity experts to map your first integration and
          define your trust layer architecture.
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
