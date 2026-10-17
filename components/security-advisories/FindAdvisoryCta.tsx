import Link from "next/link";
import Image from "next/image";
import { Shield, FileText, Search, MessageSquare } from "lucide-react";

const content = {
  title:
    "Find the advisory that applies to you,\nor contact the security team.",
  description:
    "Security actions come first. Enterprise discussion is available once your immediate question is answered.",
  buttons: [
    {
      text: "Security contact",
      href: "#",
      icon: Shield,
    },
    {
      text: "Trust Center",
      href: "#",
      icon: FileText,
    },
    {
      text: "View advisories",
      href: "#",
      icon: Search,
    },
    {
      text: "Talk to an identity expert",
      href: "#",
      icon: MessageSquare,
    },
  ],
  backgroundImage: {
    src: "/security/17.png",
    alt: "Modern office interior background",
  },
};

export default function FindAdvisoryCta() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Main Card Container */}
        <div className="relative overflow-hidden rounded-[32px] p-8 sm:p-14 lg:p-20 text-center shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
          {/* Background Image */}
          <Image
            src={content.backgroundImage.src}
            alt={content.backgroundImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Cyan/Blue Gradient Overlay - keeps image visible while preserving readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071426]/85 via-[#0D1F35]/75 to-[#22B8D6]/20" />

          {/* Content Wrapper */}
          <div className="relative z-10 mx-auto max-w-3xl">
            {/* Title */}
            <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-[46px] lg:text-[52px] whitespace-pre-line">
              {content.title}
            </h2>

            {/* Description */}
            <p className="mt-6 text-[15px] leading-[1.7] text-[#93C5FD] sm:text-[16px]">
              {content.description}
            </p>

            {/* Top Pill Buttons (Security contact & Trust Center) */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {content.buttons.slice(0, 2).map((btn, index) => {
                const IconComponent = btn.icon;
                return (
                  <Link
                    key={index}
                    href={btn.href}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-5 py-2.5 text-[13px] font-semibold text-white backdrop-blur-md transition-colors hover:bg-black/40"
                  >
                    <IconComponent
                      className="h-4 w-4 text-[#38BDF8]"
                      aria-hidden="true"
                    />
                    {btn.text}
                  </Link>
                );
              })}
            </div>

            {/* Bottom Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={content.buttons[2].href}
                className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-7 py-4 text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.4)] transition-opacity hover:opacity-90"
              >
                {content.buttons[2].text}
              </Link>
              <Link
                href={content.buttons[3].href}
                className="inline-flex items-center rounded-xl border border-white/20 bg-black/30 px-7 py-4 text-[14px] font-semibold text-white backdrop-blur-md transition-colors hover:bg-black/50"
              >
                {content.buttons[3].text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
