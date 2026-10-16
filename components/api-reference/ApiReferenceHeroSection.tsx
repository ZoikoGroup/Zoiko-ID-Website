import Image from "next/image";
import Link from "next/link";

export default function ApiReferenceHeroSection() {
  return (
    <section className="relative -mt-20 overflow-hidden bg-[linear-gradient(93deg,#071426_0%,#0D1F35_50%,#0A1A2E_100%)] px-6 pb-20 pt-36 sm:-mt-24 sm:px-10 sm:pt-40 lg:-mt-[116px] lg:min-h-[644px] lg:px-20 lg:pb-20 lg:pt-[180px] xl:px-40">
      {/* Background Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 -top-7 h-[960px] w-[1907px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,184,214,0.2)_0%,rgba(34,184,214,0)_70%)] blur-[50px]"
      />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16">
        {/* Left Column: Heading, Subtitle & Action Buttons */}
        <div className="flex w-full flex-1 flex-col items-start gap-[19.4px] lg:max-w-[560px]">
          <h1 className="font-dm-serif text-4xl font-normal leading-tight text-white-solid sm:text-6xl lg:text-[72px] lg:leading-[82.8px]">
            Explore the
            <br />
            complete
            <br />
            Zoiko iD API.
          </h1>

          <p className="max-w-[466px] font-manrope text-base font-normal leading-7 text-[#CBD5E1] sm:text-[17.6px] sm:leading-[30.8px]">
            Find every documented request, response, authentication, and error contract for the identity, authority, evidence and policy APIs. Each endpoint is versioned, status-controlled, and source-governed.
          </p>

          <div className="flex flex-wrap items-center gap-5 pt-[21.3px]">
            <Link
              href="#search-filter"
              className="inline-flex h-[51px] items-center gap-2.5 rounded-[6px] bg-[#2563EB] px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid transition-colors duration-200 hover:bg-blue-600 shadow-[0px_8px_20px_0px_rgba(37,99,235,0.3)]"
            >
              <Image
                src="/api-reference/icon-340_271.svg"
                alt=""
                width={18}
                height={18}
              />
              Browse APIs
            </Link>

            <Link
              href="#openapi"
              className="inline-flex h-[51px] items-center gap-2.5 rounded-[6px] border border-white-solid bg-transparent px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid transition-colors duration-200 hover:bg-white-solid/10"
            >
              <Image
                src="/api-reference/icon-340_276.svg"
                alt=""
                width={18}
                height={18}
              />
              OpenAPI spec
            </Link>
          </div>
        </div>

        {/* Right Column: Hero Graphic Preview */}
        <div className="relative flex w-full flex-1 items-center justify-center lg:justify-end">
          <div className="relative h-[340px] w-full max-w-[517px] overflow-hidden rounded-[24px] bg-white/[0.002] shadow-[0px_20px_48px_0px_rgba(0,0,0,0.15)] sm:h-[434px] lg:-translate-x-[100px]">
            <Image
              src="/api-reference/rendered-340_280.png"
              alt="Enterprise identity infrastructure"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 517px, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
