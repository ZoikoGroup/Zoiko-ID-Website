import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const content = {
  title: "Actions come only from approved guidance",
  description:
    "When an advisory has approved guidance, it appears above the revision history, with its owner. Until then, the panel directs you to the Security contact and to official updates.",
  checkpoints: [
    "Read the scope before acting.",
    "Follow only approved remediation steps.",
    "Contact the Security contact route if your scope is unclear.",
  ],
  image: {
    src: "/security/12.png",
    alt: "Two professionals discussing technical details at a workstation",
  },
};

export default function ActionsApprovedGuidance() {
  return (
    <section className="relative w-full overflow-hidden bg-[#071426] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text & Checkpoints */}
          <div className="flex flex-col">
            <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-[44px]">
              {content.title}
            </h2>

            <p className="mt-4 text-[15px] leading-[1.7] text-[#94A3B8] sm:text-[16px]">
              {content.description}
            </p>

            {/* Checkpoint Pills */}
            <div className="mt-8 flex flex-col space-y-3">
              {content.checkpoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3.5 rounded-2xl border border-[#1E293B] bg-[#FFFFFF0F] px-5 py-4 text-[14px] text-white shadow-sm"
                >
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 text-[#38BDF8]"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image Card */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-[340px] w-full overflow-hidden rounded-3xl border border-[#1E293B] sm:h-[400px] lg:h-[440px]">
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
