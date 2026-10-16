import Image from "next/image";
import Link from "next/link";

export default function IntegrationsOperateHeroSection() {
  return (
    <section className="relative -mt-20 overflow-hidden bg-[#071426] px-6 pb-20 pt-36 sm:-mt-24 sm:px-10 sm:pt-40 lg:-mt-[116px] lg:min-h-[646px] lg:px-20 lg:pb-24 lg:pt-[180px] xl:px-40">
      {/* Background Image with Dark Linear Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/integrations-operate/img-afdc542d3c8a226b6c9c805459f1037cdf5c5594.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,38,0.90)_0%,rgba(7,20,38,0.95)_100%)]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col items-center text-center">
        {/* Main Heading */}
        <h1 className="max-w-[942px] font-dm-serif text-4xl font-normal leading-tight text-white-solid sm:text-6xl lg:text-[72px] lg:leading-[82.8px]">
          Connect identity, authority,
          <br className="hidden sm:block" />
          {" "}and evidence across your
          <br className="hidden sm:block" />
          {" "}systems.
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-[784px] font-manrope text-base font-normal leading-7 text-[#CBD5E1] sm:text-[17.6px] sm:leading-[30.8px]">
          Explore how Zoiko iD is designed to work alongside enterprise identity providers, applications,
          <br className="hidden md:block" />
          {" "}and developer platforms—connecting authentication signals, scoped authority decisions,
          <br className="hidden md:block" />
          {" "}ongoing trust, and reviewable evidence
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
          <Link
            href="/changelog"
            className="inline-flex h-[51px] items-center gap-2.5 rounded-[6px] bg-[#2563EB] px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid shadow-[0px_8px_20px_0px_rgba(37,99,235,0.3)] transition-colors hover:bg-blue-600"
          >
            <Image
              src="/integrations-operate/icon-364_14.svg"
              alt=""
              width={16}
              height={16}
              className="shrink-0"
            />
            <span>Browse published changes</span>
          </Link>

          <Link
            href="/api-reference"
            className="inline-flex h-[51px] items-center gap-2.5 rounded-[6px] border border-white/20 bg-transparent px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid transition-colors hover:bg-white/10"
          >
            <Image
              src="/integrations-operate/icon-364_19.svg"
              alt=""
              width={16}
              height={16}
              className="shrink-0"
            />
            <span>Explore API Reference</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
