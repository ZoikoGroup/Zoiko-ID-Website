import Image from "next/image";
import Link from "next/link";

export default function IntegrationsOperateFinalCtaSection() {
  return (
    <section className="bg-white-solid px-6 py-12 sm:px-10 lg:px-20 xl:px-[105px]">
      <div className="relative mx-auto w-full max-w-[1250px] overflow-hidden rounded-[32px] bg-[linear-gradient(160deg,#071426_0%,#0D1F35_50%,rgba(34,184,214,0.1)_100%)] px-6 py-16 sm:px-12 sm:py-20 lg:p-20">
        {/* Background Image Overlay with 20% opacity */}
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <Image
            src="/integrations-operate/img-5f752a499698d468f9f23016c8ca09c238c7c82c.png"
            alt=""
            fill
            className="object-cover"
            sizes="(min-width: 1250px) 1250px, 100vw"
          />
        </div>

        {/* Top-Right Radial Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-0 h-[565px] w-[625px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,184,214,0.12)_0%,rgba(34,184,214,0)_70%)] blur-[60px]"
        />

        {/* CTA Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[860px] flex-col items-center gap-5 text-center">
          <h2 className="font-dm-serif text-3xl font-normal text-white-solid sm:text-4xl lg:text-[52px] lg:leading-[71.3px]">
            Talk to an identity expert about your integration.
          </h2>

          <p className="font-manrope text-base font-normal leading-7 text-[#CBD5E1] sm:text-[17.6px] sm:leading-[30.8px]">
            Bring your identity estate, your applications, and your constraints. An expert will
            <br className="hidden sm:block" />
            {" "}confirm which interfaces are available for your environment and what evaluation
            <br className="hidden sm:block" />
            {" "}options exist.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-5 sm:pt-10">
            <Link
              href="#expert"
              className="inline-flex h-[51px] items-center gap-2.5 rounded-[6px] bg-[#2563EB] px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid shadow-[0px_8px_20px_0px_rgba(37,99,235,0.3)] transition-colors hover:bg-blue-600"
            >
              <Image
                src="/integrations-operate/icon-364_209.svg"
                alt=""
                width={18}
                height={18}
                className="shrink-0"
              />
              <span>Talk to an identity expert</span>
            </Link>

            <Link
              href="/api-reference"
              className="inline-flex h-[51px] items-center gap-2.5 rounded-[6px] border border-white-solid bg-transparent px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid transition-colors hover:bg-white-solid/10"
            >
              <Image
                src="/integrations-operate/icon-364_214.svg"
                alt=""
                width={18}
                height={18}
                className="shrink-0"
              />
              <span>View API Reference</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
