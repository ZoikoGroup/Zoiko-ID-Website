import Image from "next/image";
import Link from "next/link";
import {
  ExpertPhoneIcon,
  DocumentCodeIcon,
  CheckmarkCircleWhiteDarkIcon,
  SandboxCubeIcon,
} from "./icons";

export default function CtaBannerSection() {
  return (
    <section className="bg-white px-0 py-0 sm:px-10 sm:py-16 lg:px-16 lg:py-24 xl:px-20">
      <div className="relative mx-auto flex w-full max-w-[1240px] flex-col items-center overflow-hidden rounded-none bg-azure-9 px-6 py-14 text-center shadow-xl sm:rounded-[32px] sm:px-12 sm:py-20 lg:min-h-[440px] lg:justify-center">
        {/* Background Photo */}
        <Image
          src="/solutions-verified-onboarding/svo11.png"
          alt="Team collaborating on trusted onboarding architecture"
          fill
          sizes="(min-width: 1440px) 1240px, 100vw"
          className="object-cover"
        />

        {/* Ambient Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(159deg,rgba(7,20,38,0.95)_0%,rgba(13,31,53,0.92)_75%,rgba(34,184,214,0.12)_100%)]" />

        {/* Content */}
        <div className="relative z-10 flex w-full max-w-[760px] flex-col items-center gap-4 sm:gap-5">
          {/* Mobile Heading with Checkmark Icon */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center justify-center gap-3">
              <CheckmarkCircleWhiteDarkIcon className="size-6 shrink-0 lg:hidden" />
              <h2 className="font-dm-serif text-2xl font-normal leading-tight text-white-solid sm:text-4xl lg:hidden">
                Onboarding built
              </h2>
            </div>
            <h2 className="font-dm-serif text-2xl font-normal leading-tight text-white-solid sm:text-4xl lg:hidden">
              on trust you can
              <br />
              explain.
            </h2>

            {/* Desktop Heading */}
            <h2 className="hidden font-dm-serif text-3xl font-normal leading-tight text-white-solid sm:text-4xl lg:block lg:text-[50px] lg:leading-[58px]">
              Onboarding built on trust you can
              <br />
              explain.
            </h2>
          </div>

          <p className="max-w-[620px] font-manrope text-[12px] font-normal leading-relaxed text-slate-300 sm:text-base">
            Verified claims, reviewable decisions, and continuous
            monitoring—without treating verification as automatic approval.
          </p>

          {/* Action Buttons: Stacked full-width on mobile, row on desktop */}
          <div className="flex w-full flex-col items-center gap-2.5 pt-2 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 sm:pt-3">
            <Link
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-azure-48 px-7 py-3 font-manrope text-[13.5px] font-bold text-white-solid shadow-xs transition-colors duration-200 hover:bg-azure-53 sm:w-auto sm:rounded-md sm:py-3.5 sm:text-[15px]"
            >
              <ExpertPhoneIcon className="size-4 text-white sm:size-[18px]" />
              Talk to an expert
            </Link>

            <Link
              href="#docs"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#0c1829]/60 px-7 py-3 font-manrope text-[13.5px] font-bold text-white-solid outline-1 -outline-offset-1 outline-white/20 transition-colors duration-200 hover:bg-white/10 sm:w-auto sm:rounded-md sm:bg-transparent sm:py-3.5 sm:text-[15px] sm:outline-white/30"
            >
              <DocumentCodeIcon className="size-4 text-white sm:size-[18px]" />
              View API docs
            </Link>

            {/* Request sandbox button on mobile */}
            <Link
              href="#sandbox"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#0c1829]/60 px-7 py-3 font-manrope text-[13.5px] font-bold text-white-solid outline-1 -outline-offset-1 outline-white/20 transition-colors duration-200 hover:bg-white/10 sm:w-auto sm:rounded-md sm:bg-transparent sm:py-3.5 sm:text-[15px] sm:outline-white/30 lg:hidden"
            >
              <SandboxCubeIcon className="size-4 text-white" />
              Request sandbox
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
