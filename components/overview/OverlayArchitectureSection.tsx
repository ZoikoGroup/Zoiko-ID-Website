import Image from "next/image";

const architectureFeatures = [
  {
    title: "Existing IdP stays",
    description: "Okta, Azure AD, Keycloak, etc. Still handles authentication.",
  },
  {
    title: "Policy engines stay",
    description: "Your existing ABAC, RBAC systems. We add context.",
  },
  {
    title: "Apps unchanged",
    description: "No forced refactoring. Integrate via APIs & events.",
  },
  {
    title: "Zoiko iD adds",
    description: "Identity binding, authority, evidence. Optional, incremental integration.",
  },
];

export default function OverlayArchitectureSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-28 xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-16">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl sm:leading-[59.8px]">
          Overlay-first architecture
        </h2>

        {/* Two-Column Content: Diagram & Stack Details */}
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left: Architecture Diagram */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px] shadow-sm">
            <Image
              src="/overview/overlay-architecture.webp"
              alt="Overlay-first architecture diagram"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Right: Architecture Highlights */}
          <div className="flex flex-col gap-6">
            <p className="font-manrope text-base font-normal leading-relaxed text-[#475569] sm:text-[16.8px] sm:leading-[29.4px]">
              <strong className="font-bold text-azure-9">No rip-and-replace.</strong>{" "}
              Your IdP, applications, databases, and policy engines stay in place. Zoiko iD layers on top.
            </p>

            <div className="flex flex-col gap-4">
              {architectureFeatures.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 rounded-lg border border-mystic bg-white-solid p-4 transition-all duration-200 hover:border-scooter-48/40 hover:shadow-sm"
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
                    <Image
                      src="/overview/overlay-bullet.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <h3 className="font-manrope text-[15.2px] font-semibold text-[#475569]">
                      {item.title}
                    </h3>
                    <p className="font-manrope text-[13.6px] font-normal leading-relaxed text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
