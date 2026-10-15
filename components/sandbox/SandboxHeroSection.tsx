import Image from "next/image";
import Link from "next/link";
import SandboxAvailabilityStatusBar from "./SandboxAvailabilityStatusBar";

export default function SandboxHeroSection() {
  return (
    <section className="relative bg-[#071426]">
      {/* Background Graphic with Figma multi-layer fill: image + gradient overlay */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/sandbox/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,38,0.9)_0%,rgba(7,20,38,0.95)_100%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-[1120px] px-6 pt-16 sm:px-10 lg:px-0 lg:pt-[105px] lg:pb-[90px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,513px)] lg:gap-[60px]">
          {/* Left Column */}
          <div className="flex flex-col items-start">
            <h1 className="font-dm-serif text-4xl font-normal leading-[1.15] text-white-solid sm:text-5xl lg:text-[72px] lg:leading-[82.8px]">
              Evaluate identity
              <br />
              and delegated
              <br />
              authority in a
              <br />
              controlled
              <br />
              environment.
            </h1>

            <p
              className="mt-[14px] font-manrope text-[16px] font-normal leading-[26.4px] sm:text-[17.6px] sm:leading-[29.92px]"
              style={{ color: "#CBD5E1" }}
            >
              A Zoiko iD sandbox is an intended, isolated evaluation context
              <br />
              for testing supported identity and authorization integrations
              <br />
              without implying production entitlement. Availability must be
              <br />
              independently confirmed.
            </p>

            <div className="mt-[23px] flex flex-wrap items-center gap-[14px]">
              <Link
                href="#quickstarts"
                className="inline-flex h-[53px] items-center gap-[10px] rounded-[8px] bg-[#2563EB] px-[24px] py-[14px] font-manrope text-[15.2px] font-bold leading-[25px] text-white-solid shadow-[0px_8px_20px_0px_rgba(37,99,235,0.30)] transition-colors duration-200 hover:bg-blue-700"
              >
                <Image
                  src="/sandbox/icons/icon_334_2693.svg"
                  alt=""
                  width={15.19}
                  height={15.19}
                  className="shrink-0"
                />
                Explore Quickstarts
              </Link>
              <Link
                href="#api-reference"
                className="inline-flex h-[53px] items-center gap-[10px] rounded-[8px] border border-white-solid/80 bg-transparent px-[24px] py-[14px] font-manrope text-[15.2px] font-bold leading-[25px] text-white-solid transition-colors duration-200 hover:bg-white-solid/10"
              >
                <Image
                  src="/sandbox/icons/icon_334_2700.svg"
                  alt=""
                  width={15.19}
                  height={15.19}
                  className="shrink-0"
                />
                Open API Reference
              </Link>
            </div>
          </div>

          {/* Right Column: Figure + Isolated test context badge */}
          <div className="relative mx-auto w-full max-w-[513px]">
            <div className="relative h-[300px] w-full overflow-hidden rounded-[12px] sm:h-[380px] lg:h-[420px]">
              <Image
                src="/sandbox/hero-laptop.png"
                alt="Printed notes and a laptop on a desk"
                fill
                priority
                sizes="(min-width: 1024px) 513px, 100vw"
                className="object-cover object-center"
              />
            </div>

            {/* Badge matching Figma: positioned at bottom-right corner of laptop */}
            <div className="absolute -bottom-6 right-0 z-10 flex items-center gap-[12px] rounded-[12px] bg-white-solid px-[20px] py-[16px] shadow-[0px_20px_40px_0px_rgba(0,0,0,0.25)] sm:-right-4 lg:-right-8">
              <div className="flex shrink-0 items-center justify-center">
                <Image
                  src="/sandbox/icons/icon_334_2705.svg"
                  alt=""
                  width={26}
                  height={26}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-manrope text-[14.7px] font-bold leading-[24.29px] text-[#071426]">
                  Isolated test context
                </span>
                <span className="font-manrope text-[12.8px] font-medium leading-[21.12px] text-[#64748B]">
                  Synthetic data only
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Availability Status Bar straddling the dark/white boundary */}
      {/* 50% over dark hero section, 50% hanging into pure white section below */}
      <div className="relative z-20 mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-0 translate-y-1/2">
        <SandboxAvailabilityStatusBar />
      </div>
    </section>
  );
}
