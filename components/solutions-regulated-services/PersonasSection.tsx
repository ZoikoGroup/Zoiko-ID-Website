import Image from "next/image";
import {
  DarkPersonasHeaderIcon,
  WhiteUserTieIcon,
  WhiteGearIcon,
  WhiteBriefcaseIcon,
} from "./icons";

const personas = [
  {
    title: "Risk & Compliance",
    description:
      "Understands regulation. Wants immutable audit trail. Can export evidence for auditors. Path: compliance assessment → deployment → audit reporting.",
    image: "/solutions-regulated-services/rs6.png",
    alt: "Risk and compliance officer reviewing regulatory documentation",
    icon: WhiteUserTieIcon,
  },
  {
    title: "Engineering & IAM",
    description:
      "Owns IdP, API layers, policy engine. Wants clear architecture + API docs. Path: API review → integration design → staged rollout.",
    image: "/solutions-regulated-services/rs7.png",
    alt: "Software engineer coding identity and policy integrations",
    icon: WhiteGearIcon,
  },
  {
    title: "Procurement & Executive",
    description:
      "Evaluates vendor fit. Needs pricing, SLAs, legal terms. Path: RFI → compliance questionnaire → procurement process.",
    image: "/solutions-regulated-services/rs8.png",
    alt: "Procurement and executive managers evaluating vendor legal contracts",
    icon: WhiteBriefcaseIcon,
  },
];

export default function PersonasSection() {
  return (
    <section className="bg-white px-5 py-12 sm:px-10 lg:px-16 lg:py-24 xl:px-20">
      <div className="mx-auto max-w-[1140px]">
        {/* Mobile Section Heading with Personas Icon */}
        <div className="mb-8 flex items-center gap-3 sm:hidden">
          <DarkPersonasHeaderIcon className="size-6 shrink-0 text-[#071426]" />
          <h2 className="font-dm-serif text-[26px] font-normal leading-[1.15] text-azure-9">
            Personas &amp;
            <br />
            implementation paths
          </h2>
        </div>

        {/* Desktop Section Heading */}
        <h2 className="mb-12 hidden text-center font-dm-serif text-3xl font-normal tracking-tight text-azure-9 sm:block sm:text-4xl lg:mb-14 lg:text-[44px]">
          Personas &amp; implementation paths
        </h2>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-8">
          {personas.map((item) => {
            const BannerIcon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-200 hover:border-slate-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
              >
                {/* Mobile Gradient Banner with Centered White Icon */}
                <div className="flex h-24 w-full items-center justify-center bg-gradient-to-r from-[#2563EB] to-[#00B4D8] sm:hidden">
                  <BannerIcon className="size-8 text-white" />
                </div>

                {/* Desktop Image Banner (rs6, rs7, rs8) */}
                <div className="relative hidden aspect-[4/3] w-full overflow-hidden bg-slate-100 sm:block">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 360px, 100vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-5 sm:p-7">
                  <h3 className="font-manrope text-[14.5px] font-bold text-azure-9 sm:text-[17px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-manrope text-[12px] leading-relaxed text-azure-47 sm:mt-2.5 sm:text-[13px]">
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
