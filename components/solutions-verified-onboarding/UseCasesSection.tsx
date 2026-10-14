import Image from "next/image";
import {
  BriefcaseDocIcon,
  NetworkShareIcon,
  ShieldBadgeIcon,
  LightbulbHeaderIcon,
} from "./icons";

interface UseCase {
  title: string;
  description: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
}

const useCases: UseCase[] = [
  {
    title: "Enterprise Onboarding",
    description:
      "Verify customer companies before granting account access. Confirm business registry status, leadership identity, and corporate email.",
    image: "/solutions-verified-onboarding/svo8.png",
    icon: BriefcaseDocIcon,
  },
  {
    title: "Partner Verification",
    description:
      "Onboard resellers, integrators, or affiliates. Verify identity and company before granting API access or partner portal.",
    image: "/solutions-verified-onboarding/svo9.png",
    icon: NetworkShareIcon,
  },
  {
    title: "Compliance Onboarding",
    description:
      "Satisfy KYC/AML and regulatory requirements. Verify identities and organizations before payment or data access.",
    image: "/solutions-verified-onboarding/svo10.png",
    icon: ShieldBadgeIcon,
  },
];

export default function UseCasesSection() {
  return (
    <section className="bg-white px-5 py-12 sm:px-10 lg:px-16 lg:py-24 xl:px-20">
      <div className="mx-auto max-w-[1140px]">
        {/* Section Heading */}
        <div className="mb-8 flex flex-col items-center text-center lg:mb-14">
          <LightbulbHeaderIcon className="mb-3 size-6 text-azure-9 lg:hidden" />
          <h2 className="font-dm-serif text-2xl font-normal tracking-tight text-azure-9 sm:text-4xl lg:text-[44px]">
            <span className="lg:hidden">
              Verified
              <br />
              onboarding use cases
            </span>
            <span className="hidden lg:inline">Verified onboarding use cases</span>
          </h2>
        </div>

        {/* 3 Use Case Cards Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-8">
          {useCases.map((item, index) => {
            const Icon = item.icon;
            // On mobile screenshot, card 1 shows the workshop/post-it photo
            return (
              <div
                key={item.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-200 hover:border-slate-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.07)]"
              >
                {/* Top Image Banner: Always show on desktop; on mobile card 1 has photo */}
                <div
                  className={`relative aspect-[800/533] w-full overflow-hidden bg-slate-100 ${
                    index === 0 ? "block" : "hidden lg:block"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 360px, 100vw"
                    className="object-cover"
                  />
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-5 sm:p-7">
                  {/* Clean Icon Box */}
                  <div className="mb-3.5 flex size-11 items-center justify-center rounded-xl bg-linear-to-b from-[#22B8D6] to-[#1E69EC] text-white shadow-xs lg:bg-azure-48 lg:bg-none">
                    <Icon className="size-5.5 text-white" />
                  </div>

                  <h3 className="font-manrope text-[15px] font-bold text-azure-9 sm:text-[17px]">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 font-manrope text-[11.5px] leading-relaxed text-azure-47 sm:mt-2 sm:text-[13.5px]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
