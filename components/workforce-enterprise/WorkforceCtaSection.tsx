import Image from "next/image";
import Link from "next/link";

export default function WorkforceCtaSection() {
  return (
    <section id="final-cta" className="bg-white-solid px-6 py-12 sm:px-10 lg:px-20 lg:py-16">
      <div className="relative mx-auto flex w-full max-w-[1250px] flex-col items-center overflow-hidden rounded-[32px] bg-[#071426] px-6 py-14 text-center sm:px-12 sm:py-16 lg:p-20">
        {/* Background Graphic */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/workforce-enterprise/final-cta-bg.png"
            alt=""
            fill
            sizes="(min-width: 1280px) 1250px, 100vw"
            className="object-cover object-center opacity-55"
          />
        </div>

        {/* Gradient Overlay for Text Readability & Figma Blue Shade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(159deg,rgba(7,20,38,0.94)_0%,rgba(13,31,53,0.8)_50%,rgba(13,31,53,0.5)_80%,rgba(34,184,214,0.18)_100%)]"
        />

        {/* Figma Radial Blur Accent on the right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 z-[2] h-[665px] w-[625px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,184,214,0.2)_0%,rgba(34,184,214,0)_70%)] blur-[60px]"
        />

        <div className="relative z-10 flex w-full max-w-[960px] flex-col items-center">
          <h2 className="mb-5 font-dm-serif text-3xl font-normal leading-tight text-white-solid sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
            Connect identity, authority, and audit
            <br />
            in one platform.
          </h2>

          <p className="mb-10 max-w-[760px] font-manrope text-base font-normal leading-7 text-[#CBD5E1] sm:text-[17.6px] sm:leading-[30.8px]">
            Discuss your workforce and enterprise access challenges with our identity architects.
            <br />
            We will understand your infrastructure and recommend an integration path.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-md bg-azure-48 px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid transition-colors duration-200 hover:bg-azure-53"
            >
              <Image
                src="/workforce-enterprise/cta-expert-icon.svg"
                alt=""
                width={18}
                height={18}
                className="brightness-0 invert"
              />
              Talk to an expert
            </Link>
            <Link
              href="#specs"
              className="inline-flex items-center gap-2.5 rounded-md px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid outline-1 -outline-offset-1 outline-white-solid transition-colors duration-200 hover:bg-white-solid/10"
            >
              <Image
                src="/workforce-enterprise/cta-specs-icon.svg"
                alt=""
                width={18}
                height={18}
                className="brightness-0 invert"
              />
              View technical specs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
