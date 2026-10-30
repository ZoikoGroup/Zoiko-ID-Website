import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";

export default function DocsHero() {
  return (
    <section
      className="relative -mt-20 overflow-hidden px-6 pt-36 sm:-mt-24 sm:px-10 sm:pt-40 lg:-mt-[116px] lg:px-20 lg:pt-[196px] xl:px-40"
      style={{ backgroundImage: "linear-gradient(180deg, #071426 0%, #0C2541 55%, #0A1E36 100%)" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[1100px] w-[1900px] -translate-x-1/2 rounded-full blur-[50px]"
        style={{ background: "radial-gradient(closest-side, rgba(34,184,214,0.18), rgba(34,184,214,0) 70%)" }}
      />

      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-16">
        <div className="flex max-w-[983px] flex-col items-center gap-5 text-center">
          <h1 className="font-dm-serif text-[44px] font-normal leading-[1.1] text-white-solid sm:text-6xl lg:text-7xl lg:leading-[82.8px]">
            Developer documentation
          </h1>
          <p className="max-w-[690px] font-manrope text-base leading-7 text-[#C3CEDD] sm:text-lg sm:leading-8">
            Explore quickstarts, reference material and integration guidance for Zoiko iD. Each resource shows
            its verified availability beside it, so you know what is live today.
          </p>

          <div className="pt-4">
            <Link
              href="#prerequisites"
              className="inline-flex items-center gap-2.5 rounded-md bg-azure-53 px-7 py-3.5 font-manrope text-base font-bold text-white-solid transition-colors hover:bg-azure-48"
            >
              Start here
              <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>

          <p className="flex items-start gap-1.5 font-manrope text-sm leading-6 text-white-solid/60">
            <Info className="mt-1 size-4 shrink-0 text-cyan-49" strokeWidth={1.75} aria-hidden="true" />
            This documentation is guidance. It does not label unreleased capabilities as live.
          </p>
        </div>

        <div className="relative h-[240px] w-full overflow-hidden rounded-t-3xl sm:h-[320px] lg:h-[419px]">
          <Image
            src="/docs/Office workspace with desks.png"
            alt="Developers reviewing code on a laptop around a table"
            fill
            priority
            sizes="(min-width: 1280px) 1120px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
