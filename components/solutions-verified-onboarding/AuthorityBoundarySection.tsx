import Image from "next/image";
import {
  CheckCircleGreenIcon,
  AuthorityLockHeaderIcon,
  EyebrowShieldCheckIcon,
} from "./icons";

const checklistItems = [
  {
    title: "Verification as evidence",
    description: "Input to the access decision",
  },
  {
    title: "Org policy decides access",
    description: "Role, scope, time limits",
  },
  {
    title: "Continuous trust re-evaluation",
    description: "Expiry, revocation, status changes",
  },
];

export default function AuthorityBoundarySection() {
  return (
    <section className="bg-white px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-24 xl:px-20">
      <div className="mx-auto max-w-[1080px]">
        {/* Section Heading */}
        <h2 className="mb-8 text-center font-dm-serif text-[28px] font-normal leading-[1.18] tracking-tight text-azure-9 sm:text-4xl lg:mb-14 lg:text-[44px]">
          {/* Mobile Heading */}
          <span className="lg:hidden">
            <span className="inline-flex items-center justify-center gap-2.5">
              <AuthorityLockHeaderIcon className="size-[22px] shrink-0 text-azure-9" />
              <span>Authority &amp;</span>
            </span>
            <br />
            <span>access boundary</span>
          </span>

          {/* Desktop Heading */}
          <span className="hidden lg:inline">Authority &amp; access boundary</span>
        </h2>

        {/* Mobile Stream Photo (mobile_version2.jpg) */}
        <div className="relative mx-auto mb-6 aspect-[4/3] w-full max-w-[380px] overflow-hidden rounded-[20px] shadow-[0_4px_16px_rgba(0,0,0,0.06)] lg:hidden">
          <Image
            src="/solutions-verified-onboarding/mobile_version2.jpg"
            alt="Spring water stream flowing from wooden pipe"
            fill
            sizes="(max-width: 1024px) 100vw, 380px"
            className="object-cover"
          />
        </div>

        {/* 2-Column Row on Desktop */}
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-10">
          {/* Left Column: Subheading & Checklist Card */}
          <div>
            {/* Mobile Subheading with Cyan Shield Badge */}
            <div className="mb-3.5 flex items-center gap-2 lg:hidden">
              <EyebrowShieldCheckIcon className="size-4 shrink-0 text-[#22B8D6]" />
              <h3 className="font-manrope text-[14px] font-bold text-azure-9">
                Verified claims inform, but don&apos;t grant, access
              </h3>
            </div>

            {/* Desktop Subheading */}
            <h3 className="mb-4 hidden font-dm-serif text-lg font-normal text-azure-9 sm:text-[20px] lg:block">
              Verified claims inform, but don&apos;t grant, access
            </h3>

            <div className="flex flex-col gap-4 rounded-[18px] border border-slate-200/80 bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] sm:gap-5 sm:rounded-2xl sm:p-7">
              {checklistItems.map((item) => (
                <div key={item.title} className="flex items-start gap-3.5">
                  <CheckCircleGreenIcon className="mt-0.5 size-5 shrink-0" />
                  <div>
                    <h4 className="font-manrope text-[14.5px] font-bold text-azure-9 sm:text-[15px]">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 font-manrope text-xs text-azure-47 sm:text-[13px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Signing / Document Image (Desktop only) */}
          <div className="relative hidden aspect-[800/533] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.06)] lg:block">
            <Image
              src="/solutions-verified-onboarding/svo4.png"
              alt="Professional filling out compliance and access documentation"
              fill
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom Never vs Always Callout */}
        <div className="mt-6 rounded-[16px] border border-red-300 bg-white p-4 shadow-xs sm:mt-8 sm:rounded-xl sm:p-5">
          <div className="font-manrope text-xs font-bold text-red-600 sm:text-[13px]">
            ❌ Never: &quot;Verified ✓ = Approved ✓ = Access Granted ✓&quot;
          </div>
          <div className="mt-1 font-manrope text-xs leading-relaxed text-azure-47 sm:text-[13px]">
            <strong className="font-bold text-emerald-600">Always:</strong>{" "}
            Verification → evidence → review → explicit decision → scoped access
            with expiry
          </div>
        </div>
      </div>
    </section>
  );
}
