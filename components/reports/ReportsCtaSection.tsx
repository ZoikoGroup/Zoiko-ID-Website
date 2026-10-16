import Image from "next/image";
import Link from "next/link";

export default function ReportsCtaSection() {
  return (
    <section className="bg-white-solid px-4 py-12 sm:px-8 lg:px-[105px] lg:py-16">
      <div
        className="relative mx-auto w-full max-w-[1250px] overflow-hidden rounded-[24px] px-6 py-20 shadow-2xl sm:rounded-[32px] sm:px-12 lg:px-20 lg:py-[130px]"
        style={{
          backgroundImage: `linear-gradient(159deg, rgba(7, 20, 38, 0.88) 0%, rgba(13, 31, 53, 0.82) 45%, rgba(10, 30, 56, 0.72) 75%, rgba(34, 184, 214, 0.16) 100%), url('/reports/cta-bg.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >

        {/* Radial Ambient Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-[625px] w-[625px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,184,214,0.12)_0%,rgba(34,184,214,0)_70%)] blur-[60px]"
        />

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-[700px] flex-col items-center gap-5 text-center">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-white-solid sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
            Ready to review assurance evidence?
          </h2>

          <p className="max-w-[600px] font-manrope text-base font-normal leading-relaxed text-white-solid/95 sm:text-[16.8px] sm:leading-[27.7px]">
            Browse publicly available reports above, request access to
            restricted documents, or contact our trust team with questions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 sm:gap-5">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-[6px] bg-[#2563EB] px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid shadow-[0px_8px_20px_0px_rgba(37,99,235,0.30)] transition-all duration-200 hover:bg-blue-600 hover:shadow-[0px_10px_24px_0px_rgba(37,99,235,0.40)]"
            >
              <Image
                src="/reports/cta-contact-trust.svg"
                alt=""
                width={18}
                height={18}
                className="brightness-0 invert"
              />
              Contact trust team
            </Link>

            <Link
              href="#request-access"
              className="inline-flex items-center gap-2.5 rounded-[6px] border border-white-solid bg-transparent px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid transition-all duration-200 hover:bg-white-solid/10"
            >
              <Image
                src="/reports/cta-request-access.svg"
                alt=""
                width={18}
                height={18}
                className="brightness-0 invert"
              />
              Request report access
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
