import Image from "next/image";
import Link from "next/link";

export default function ChangelogHeroSection() {
  return (
    <section className="relative bg-[#071426] px-6 py-16 sm:px-10 lg:px-[160px] lg:py-[95px]">
      {/* Background with overlay */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/changelog/hero-bg-2b87d1.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,38,0.9)_0%,rgba(7,20,38,0.95)_100%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-[1120px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,500px)] lg:gap-[60px]">
          {/* Left Column */}
          <div className="flex flex-col items-start gap-[14px]">
            <h1 className="font-dm-serif text-4xl font-normal leading-[1.15] text-white-solid sm:text-5xl lg:text-[72px] lg:leading-[82.8px]">
              Zoiko iD
              <br />
              changelog
            </h1>

            <p
              className="font-manrope text-[16px] font-normal leading-[26.4px] sm:text-[17.6px] sm:leading-[29.92px]"
              style={{ color: "#CBD5E1" }}
            >
              Explore published Zoiko iD product and developer changes,
              <br className="hidden sm:inline" />
              including affected integration areas, version context, and
              <br className="hidden sm:inline" />
              links to authoritative documentation. Each entry should
              <br className="hidden sm:inline" />
              make clear what changed and whether action is required.
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-[16px] pt-[4px]">
              <Link
                href="#browse-changes"
                className="inline-flex h-[54px] items-center gap-[10px] rounded-[6px] bg-[#2563EB] px-[26px] font-manrope text-[15.2px] font-bold leading-[25.84px] text-white-solid transition-colors duration-200 hover:bg-blue-700"
              >
                <Image
                  src="/changelog/icons/icon_340_1444.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="shrink-0 brightness-0 invert"
                />
                Browse published changes
              </Link>

              <Link
                href="#api-reference"
                className="inline-flex h-[56px] items-center gap-[10px] rounded-[6px] border border-white-solid bg-transparent px-[26px] font-manrope text-[15.2px] font-bold leading-[25.84px] text-white-solid transition-colors duration-200 hover:bg-white-solid/10"
              >
                <Image
                  src="/changelog/icons/icon_340_1449.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="shrink-0 brightness-0 invert"
                />
                Explore API Reference
              </Link>
            </div>
          </div>

          {/* Right Column: Figure */}
          <div className="relative mx-auto w-full max-w-[500px]">
            <div className="relative h-[300px] w-full overflow-hidden rounded-[12px] sm:h-[380px] lg:h-[420px]">
              <Image
                src="/changelog/hero-laptop-ddde0f.png"
                alt="Printed notes and a laptop on a desk"
                fill
                priority
                sizes="(min-width: 1024px) 500px, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
