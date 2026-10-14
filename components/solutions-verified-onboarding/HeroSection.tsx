import Image from "next/image";
import Link from "next/link";
import { ExploreFlowIcon, ExpertPhoneIcon, EyebrowShieldCheckIcon } from "./icons";

export default function HeroSection() {
  return (
    <section className="relative -mt-20 overflow-hidden bg-linear-to-b from-azure-9 via-azure-13 to-azure-11 px-6 pb-16 pt-32 sm:-mt-24 sm:px-10 sm:pt-40 lg:-mt-[116px] lg:min-h-[660px] lg:px-16 lg:pb-20 lg:pt-[175px] xl:px-20">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-16 h-[800px] w-[1400px] rounded-[524px] bg-[radial-gradient(ellipse_at_top_left,rgba(34,184,214,0.18)_0%,rgba(10,21,32,0)_70%)] blur-[60px]"
      />

      <div className="relative mx-auto flex w-full max-w-[1240px] flex-col items-center justify-between gap-8 lg:flex-row lg:gap-14">
        {/* Left column: Typography & CTA buttons */}
        <div className="flex w-full max-w-[580px] flex-col items-start gap-5 sm:gap-6">
          {/* Mobile Eyebrow Badge */}
          <div className="flex items-start gap-2.5 lg:hidden">
            <EyebrowShieldCheckIcon className="mt-0.5 size-4 shrink-0 text-[#22B8D6]" />
            <span className="font-manrope text-[11px] font-bold uppercase leading-[1.3] tracking-[0.14em] text-[#22B8D6]">
              SOLUTIONS / VERIFIED
              <br />
              ONBOARDING
            </span>
          </div>

          <h1 className="font-dm-serif text-[38px] font-normal leading-[1.12] text-white-solid sm:text-5xl lg:text-[70px] lg:leading-[78px]">
            {/* Mobile heading break */}
            <span className="lg:hidden">
              Onboarding built
              <br />
              on explainable
              <br />
              trust.
            </span>
            {/* Desktop heading break */}
            <span className="hidden lg:inline">
              Onboarding
              <br />
              built on
              <br />
              explainable
              <br />
              trust.
            </span>
          </h1>

          <p className="max-w-[490px] font-manrope text-[15px] font-normal leading-[24px] text-geyser sm:text-[17px] sm:leading-[29px]">
            Verified claims, bounded access, reviewable decisions. Verification
            is a contextual input to authorization—never a substitute for it.
          </p>

          <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row sm:gap-4">
            <Link
              href="#explore"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-[10px] bg-[#2563EB] px-6 py-3.5 font-manrope text-[15px] font-semibold text-white-solid transition-colors duration-200 hover:bg-blue-600 sm:w-auto lg:rounded-md lg:bg-azure-48 lg:font-bold lg:hover:bg-azure-53"
            >
              <ExploreFlowIcon className="size-[18px] text-white" />
              Explore flow
            </Link>
            <Link
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-[10px] border border-white/20 bg-transparent px-6 py-3.5 font-manrope text-[15px] font-semibold text-white-solid transition-colors duration-200 hover:bg-white/10 sm:w-auto lg:rounded-md lg:border-0 lg:font-bold lg:outline-1 lg:-outline-offset-1 lg:outline-white/30"
            >
              <ExpertPhoneIcon className="size-[18px] text-white" />
              <span className="lg:hidden">Talk to expert</span>
              <span className="hidden lg:inline">Talk to an expert</span>
            </Link>
          </div>
        </div>

        {/* Mobile Hero image: woman at whiteboard with sticky notes */}
        <div className="relative aspect-[3/4] w-full max-w-[340px] overflow-hidden rounded-[24px] border border-white/10 shadow-[0px_20px_48px_0px_rgba(0,0,0,0.3)] sm:max-w-[420px] lg:hidden">
          <Image
            src="/solutions-verified-onboarding/mobile_version1.jpg"
            alt="Team collaborating at whiteboard during verified onboarding"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 340px"
            className="object-cover object-center"
          />
        </div>

        {/* Desktop Hero image: Business professionals shaking hands */}
        <div className="relative hidden aspect-[1600/1018] w-full max-w-[560px] shrink-0 overflow-hidden rounded-[26px] border border-white/10 shadow-[0px_20px_48px_0px_rgba(0,0,0,0.3)] lg:block">
          <Image
            src="/solutions-verified-onboarding/svo1.png"
            alt="Business professionals shaking hands during onboarding"
            fill
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
