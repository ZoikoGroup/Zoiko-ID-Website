import Image from "next/image";
import {
  CheckCircleGreenIcon,
  ArchitectureScreenHeaderIcon,
  ApiFirstNodeIcon,
} from "./icons";

const apiFeatures = [
  {
    title: "REST API",
    description: "Start verification, check status, submit remediation",
  },
  {
    title: "Webhooks",
    description: "Real-time notifications on status change",
  },
  {
    title: "SDKs",
    description: "JavaScript, Python, Node, p8/branca available",
  },
];

export default function ArchitectureSection() {
  return (
    <section className="bg-white px-5 py-12 sm:px-10 lg:px-16 lg:py-24 xl:px-20">
      <div className="mx-auto max-w-[1080px]">
        {/* Section Heading */}
        <div className="mb-8 flex flex-col items-center text-center lg:mb-14">
          <ArchitectureScreenHeaderIcon className="mb-3 size-6 text-azure-9 lg:hidden" />
          <h2 className="font-dm-serif text-2xl font-normal tracking-tight text-azure-9 sm:text-4xl lg:text-[44px]">
            <span className="lg:hidden">
              Architecture &amp;
              <br />
              integration
            </span>
            <span className="hidden lg:inline">Architecture &amp; integration</span>
          </h2>
        </div>

        {/* 2-Column Row */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left Column: API First Integration */}
          <div>
            <div className="mb-3.5 flex items-center gap-2">
              <ApiFirstNodeIcon className="size-4 shrink-0 text-[#22B8D6] lg:hidden" />
              <h3 className="font-dm-serif text-[17px] font-normal text-azure-9 sm:text-[20px]">
                API first integration
              </h3>
            </div>

            <div className="flex flex-col gap-4.5 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] sm:p-7">
              {apiFeatures.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircleGreenIcon className="mt-0.5 size-4.5 shrink-0" />
                  <div>
                    <h4 className="font-manrope text-[13.5px] font-bold text-azure-9 sm:text-[15px]">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 font-manrope text-[11.5px] leading-relaxed text-azure-47 sm:text-[13px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Code Presentation Image (Desktop Only) */}
          <div className="relative hidden aspect-[800/533] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.06)] lg:block">
            <Image
              src="/solutions-verified-onboarding/svo6.png"
              alt="Engineers reviewing integration code architecture"
              fill
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom No Invented Endpoints Callout */}
        <div className="mt-6 rounded-2xl border border-red-300/90 bg-white p-4.5 shadow-xs sm:mt-8 sm:p-5">
          <p className="font-manrope text-[11.5px] leading-relaxed text-azure-47 sm:text-[13px]">
            <strong className="font-bold text-red-600">
              No invented endpoints.
            </strong>{" "}
            Available APIs and SDKs shown here reflect released and tested
            implementations. Planned capabilities marked &apos;Planned&apos; — do
            not assume availability. Check live documentation for current status
            and tested regions.
          </p>
        </div>
      </div>
    </section>
  );
}
