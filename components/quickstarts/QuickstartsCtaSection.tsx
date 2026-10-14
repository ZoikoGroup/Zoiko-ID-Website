import Image from "next/image";
import Link from "next/link";

export default function QuickstartsCtaSection() {
  return (
    <section className="bg-white-solid px-6 py-12 sm:px-10 sm:py-16 lg:px-20 lg:py-20 xl:px-40">
      <div className="relative mx-auto flex w-full max-w-[1250px] flex-col items-center justify-center overflow-hidden rounded-[32px] bg-[#071426] px-6 py-16 text-center sm:px-12 sm:py-20 lg:p-20">
        {/* Background photo with subtle opacity matching Figma node 292:1278 */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/quickstarts/final-cta-bg.webp')",
          }}
          aria-hidden="true"
        />

        {/* Linear Gradient Layer from Figma */}
        <div
          className="absolute inset-0 bg-[linear-gradient(159deg,rgba(7,20,38,0.92)_0%,rgba(13,31,53,0.88)_75%,rgba(34,184,214,0.22)_100%)]"
          aria-hidden="true"
        />

        {/* Cyan Glow Accent from Figma */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-10 h-[522px] w-[625px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,184,214,0.30)_0%,rgba(34,184,214,0)_70%)] blur-[60px]"
        />

        {/* Content */}
        <div className="relative z-10 flex max-w-[700px] flex-col items-center gap-4">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-white-solid sm:text-5xl lg:text-[52px]">
            Ready to build?
          </h2>

          <p className="font-manrope text-base font-normal leading-relaxed text-[#CBD5E1] sm:text-[17.6px] sm:leading-[30.8px]">
            Pick a quickstart above and follow along. If you hit any blockers, we&apos;re here to help.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6 sm:gap-5">
            <Link
              href="#quickstart-chooser"
              className="inline-flex items-center gap-2.5 rounded-[6px] bg-azure-48 px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid shadow-[0px_8px_20px_0px_rgba(37,99,235,0.3)] transition-colors duration-200 hover:bg-blue-600"
            >
              <Image
                src="/quickstarts/cta-back-icon.svg"
                alt=""
                width={18}
                height={18}
                className="shrink-0"
              />
              Back to quickstarts
            </Link>

            <Link
              href="/apis-integrations"
              className="inline-flex items-center gap-2.5 rounded-[6px] border border-white-solid px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid transition-colors duration-200 hover:bg-white-solid/10"
            >
              <Image
                src="/quickstarts/cta-docs-icon.svg"
                alt=""
                width={18}
                height={18}
                className="shrink-0"
              />
              Full Docs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
