import Image from "next/image";
import Link from "next/link";

export default function EnterpriseCtaSection() {
  return (
    <section className="w-full bg-[#071324] py-16 sm:bg-white sm:py-20 lg:py-24">
      {/* Desktop Layout (hidden on mobile, visible on sm+) */}
      <div className="mx-auto hidden max-w-[1180px] px-6 sm:block sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[24px] px-8 py-20 text-center text-white shadow-2xl sm:px-14 sm:py-24 lg:px-20 lg:py-28">
          {/* Background Image (ee7.png) */}
          <Image
            src="/Enterprise-02-enterprise/ee7.png"
            alt="Enterprise technology operations center with architects collaborating"
            fill
            sizes="(min-width: 1200px) 1140px, 100vw"
            className="object-cover object-center"
          />

          {/* Dark Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071324]/90 via-[#071324]/80 to-[#071324]/90" />

          {/* Foreground Content */}
          <div className="relative z-10 mx-auto flex max-w-[760px] flex-col items-center">
            <h2 className="font-dm-serif text-3xl font-normal leading-[1.18] tracking-tight text-white sm:text-4xl lg:text-[46px]">
              Talk to an identity expert about your enterprise evaluation.
            </h2>

            <p className="mt-5 max-w-[620px] font-manrope text-xs leading-relaxed text-slate-300 sm:text-sm sm:leading-relaxed">
              Share your architecture and what you need to decide. An expert will confirm
              what is supported for your environment. Submitting a request does not book a
              meeting or create an offer.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/talk-to-sales"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-[#2563eb] px-6 text-center font-manrope text-sm font-semibold text-white shadow-[0px_4px_14px_rgba(37,99,235,0.4)] transition hover:bg-blue-600"
              >
                Talk to an identity expert
              </Link>
              <Link
                href="/overview"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-600/80 bg-[#0c1829]/60 px-6 text-center font-manrope text-sm font-semibold text-slate-200 backdrop-blur-sm transition hover:border-slate-400 hover:text-white"
              >
                Explore platform
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout (strictly visible on mobile: sm:hidden) */}
      <div className="flex flex-col px-5 sm:hidden">
        {/* Category Pill with horizontal line */}
        <div className="mb-3 flex items-center gap-2">
          <span className="h-[2px] w-4 bg-[#0ea5e9]" />
          <span className="font-mono text-[10px] font-bold tracking-wider text-[#0ea5e9] uppercase">
            NEXT STEP
          </span>
        </div>

        {/* Mobile Heading */}
        <h2 className="font-dm-serif text-[28px] leading-[1.18] tracking-tight text-white">
          Talk to an identity expert about your enterprise evaluation.
        </h2>

        {/* Mobile Description */}
        <p className="mt-4 font-manrope text-[13px] leading-relaxed text-slate-300">
          Share your architecture and what you need to decide. An expert will confirm what is supported for your environment. Submitting a request does not book a meeting or create an offer.
        </p>

        {/* Action Buttons (stacked vertically) */}
        <div className="mt-6 flex flex-col items-start gap-3">
          <Link
            href="/talk-to-sales"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-[#22b8d6] px-5 text-center font-manrope text-xs font-bold text-[#071324] shadow-md transition hover:bg-[#1ea7c2]"
          >
            Talk to an identity expert
          </Link>
          <Link
            href="/overview"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-700/80 bg-[#0f1d32]/60 px-5 text-center font-manrope text-xs font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
          >
            Explore platform
          </Link>
        </div>

        {/* Mobile Bottom Image (ee12.jpg 3D cubes) */}
        <div className="relative mt-8 aspect-square w-full overflow-hidden rounded-2xl shadow-xl">
          <Image
            src="/Enterprise-02-enterprise/ee12.jpg"
            alt="Abstract 3D interconnected network structure representing enterprise identity topology"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
