import Image from "next/image";

const content = {
  title: "Four states of scope, none inferred",
  description:
    "An advisory can name a product or version as affected, not affected, not yet evaluated, or unknown. Your deployment may differ from the general statement.",
  image: {
    src: "/security/9.png",
    alt: "Professional discussing technical scope with a colleague",
  },
  states: [
    {
      badge: "AFFECTED",
      badgeBg: "bg-[#DCFCE7] text-[#166534]",
      description: "Named in the record.",
    },
    {
      badge: "NOT AFFECTED",
      badgeStyle:
        "border border-dashed border-[#CBD5E1] text-[#334155] bg-[#F8FAFC]",
      description: "Named explicitly with its version.",
    },
    {
      badge: "UNDER ASSESSMENT",
      badgeBg: "bg-[#FEF3C7] text-[#92400E]",
      description: "Not yet evaluated.",
    },
    {
      badge: "UNKNOWN",
      badgeStyle:
        "border border-dashed border-[#CBD5E1] text-[#334155] bg-[#F8FAFC]",
      description: "Not established in the record.",
    },
  ],
};

export default function FourStatesOfScope() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F1F5F9] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Left Column - Content & 2x2 States Grid */}
          <div className="flex flex-col">
            <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#0F172A] sm:text-[44px]">
              {content.title}
            </h2>

            <p className="mt-4 text-[16px] leading-[1.7] text-[#475569] sm:text-[17px]">
              {content.description}
            </p>

            {/* 2x2 States Card Container */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              {content.states.map((state, index) => (
                <div key={index} className="flex flex-col justify-between p-3">
                  <div>
                    <span
                      className={`inline-block rounded-md px-2.5 py-1 text-[11px] font-bold tracking-wider ${
                        state.badgeBg || state.badgeStyle
                      }`}
                    >
                      {state.badge}
                    </span>
                    <p className="mt-3 text-[14px] text-[#475569]">
                      {state.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image Card */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-[340px] w-full overflow-hidden rounded-3xl sm:h-[400px] lg:h-[440px]">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
