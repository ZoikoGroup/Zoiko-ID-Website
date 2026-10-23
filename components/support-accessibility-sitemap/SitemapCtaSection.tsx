import Image from "next/image";
import Link from "next/link";

export default function SitemapCtaSection() {
  return (
    <section className="bg-white-solid px-4 py-12 sm:px-8 lg:px-[105px] lg:py-16">
      <div className="relative mx-auto w-full max-w-[1250px] overflow-hidden rounded-[24px] px-6 py-20 shadow-2xl sm:rounded-[32px] sm:px-12 lg:px-20 lg:py-[130px] bg-[#071426]">
        {/* Background Team Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/support-accessibility-sitemap/sitemap-cta-bg.webp"
            alt="Zoiko iD Support Team"
            fill
            sizes="(max-width: 1250px) 100vw, 1250px"
            className="object-cover object-[center_32%]"
            priority
          />
        </div>

        {/* Navy/Blue Semi-Transparent Overlay Tint matching Figma */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-[#071426]/72 via-[#0D1F35]/60 to-[#0A1E38]/48"
        />

        {/* Signature Cyan Radial Ambient Glow on the Right matching Figma */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-1/2 -translate-y-1/2 z-[2] h-[680px] w-[625px] rounded-full bg-[radial-gradient(circle_at_70%_50%,rgba(34,184,214,0.45)_0%,rgba(34,184,214,0.18)_50%,transparent_75%)] blur-[50px]"
        />

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-[700px] flex-col items-center gap-4 text-center">
          <h2 className="font-dm-serif text-4xl font-normal leading-tight text-white-solid sm:text-5xl lg:text-[52px] lg:leading-[59.8px] drop-shadow-sm">
            Need help finding
            <br />
            something?
          </h2>

          <p className="max-w-[600px] font-manrope text-base font-normal leading-relaxed text-[#E2E8F0] sm:text-[16px] sm:leading-[25.6px] drop-shadow-xs">
            Visit Help &amp; Support for self-service guidance and specialist handoffs.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-5 sm:gap-5">
            <Link
              href="#support-accessibility"
              className="inline-flex items-center justify-center rounded-[6px] bg-[#2563EB] px-7 py-3.5 font-manrope text-[15px] font-bold text-white-solid shadow-[0px_8px_20px_0px_rgba(37,99,235,0.35)] transition-all duration-200 hover:bg-blue-600 hover:shadow-[0px_10px_24px_0px_rgba(37,99,235,0.45)] hover:-translate-y-0.5"
            >
              Visit Help &amp; Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
