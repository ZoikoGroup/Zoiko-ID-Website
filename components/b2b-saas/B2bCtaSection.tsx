import Image from "next/image";
import Link from "next/link";

export default function B2bCtaSection() {
  return (
    <section id="final-cta" className="bg-white-solid px-6 py-12 sm:px-10 lg:px-24">
      <div className="relative mx-auto flex w-full max-w-[1250px] flex-col items-center overflow-hidden rounded-[32px] bg-azure-9 px-6 py-20 text-center sm:px-12 lg:min-h-[460px] lg:justify-center">
        <Image
          src="/b2b-saas/final-cta-bg.webp"
          alt=""
          fill
          sizes="(min-width: 1440px) 1250px, 100vw"
          className="object-cover"
        />

        {/* Gradient Overlay matching Figma */}
        <div className="absolute inset-0 bg-[linear-gradient(159deg,rgba(7,20,38,0.92)_0%,rgba(13,31,53,0.88)_75%,rgba(34,184,214,0.08)_100%)]" />

        <div className="relative flex w-full max-w-[880px] flex-col items-center gap-6">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-white-solid sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
            Bring organization identity into your platform.
          </h2>

          <p className="max-w-[700px] font-manrope text-base font-normal leading-7 text-white-solid/95">
            Design multi-organization B2B access around clear identity, membership, authority,
            <br />
            and policy boundaries with auditable decisions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <Link
              href="#talk-expert"
              className="inline-flex items-center gap-2.5 rounded-md bg-azure-48 px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid transition-colors duration-200 hover:bg-azure-53"
            >
              <Image
                src="/b2b-saas/icons/cta-btn-1.svg"
                alt=""
                width={18}
                height={18}
                className="brightness-0 invert"
              />
              Talk to an expert
            </Link>
            <Link
              href="/apis-integrations"
              className="inline-flex items-center gap-2.5 rounded-md px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid outline-1 -outline-offset-1 outline-white-solid transition-colors duration-200 hover:bg-white-solid/10"
            >
              <Image
                src="/b2b-saas/icons/cta-btn-2.svg"
                alt=""
                width={18}
                height={18}
                className="brightness-0 invert"
              />
              View documentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
