import Image from "next/image";
import Link from "next/link";

export default function SecurityFinalCta() {
  const pills = [
    {
      icon: "/security-contact/cta-pill-trust.svg",
      text: "Trust Center",
    },
    {
      icon: "/security-contact/cta-pill-disclosure.svg",
      text: "Responsible Disclosure",
    },
    {
      icon: "/security-contact/cta-pill-advisories.svg",
      text: "Security Advisories",
    },
  ];

  return (
    <section className="relative w-full bg-white px-6 py-12 sm:px-12 lg:px-[105px]">
      <div className="relative mx-auto max-w-[1250px] overflow-hidden rounded-[32px] p-8 sm:p-14 lg:p-[80px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{ backgroundImage: "url('/security-contact/cta-bg.png')" }}
        />
        {/* Figma Luminous Navy to Cyan-Blue Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(159deg, rgba(7, 20, 38, 0.88) 0%, rgba(13, 31, 53, 0.78) 50%, rgba(34, 184, 214, 0.32) 100%)",
          }}
        />

        {/* Ambient Cyan Glow on the right side */}
        <div
          className="absolute -right-16 -top-16 -bottom-16 w-3/4 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 50%, rgba(34, 184, 214, 0.28) 0%, rgba(34, 184, 214, 0.08) 55%, transparent 75%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-[860px] flex-col items-center gap-5 text-center">
          <h2 className="font-[family-name:var(--font-dm-serif-display-family)] text-3xl sm:text-4xl lg:text-[52px] font-normal lg:leading-[57.8px] text-white">
            Start with the route that<br />
            matches your question.
          </h2>

          <p className="font-[family-name:var(--font-manrope-family)] text-[16px] font-normal leading-[25.6px] text-[#CBD5E1]">
            Vulnerabilities go to Responsible Disclosure. Advisories,<br className="hidden sm:inline" />
            service condition and evidence each have their own page.<br className="hidden sm:inline" />
            Enterprise discussion follows once your question is routed.
          </p>

          {/* 3 Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 py-[10px]">
            {pills.map((pill, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 rounded-full border border-white/20 px-[14px] py-[7.5px]"
              >
                <Image
                  src={pill.icon}
                  alt=""
                  width={18}
                  height={18}
                  className="shrink-0"
                />
                <span className="font-[family-name:var(--font-manrope-family)] text-[14px] font-normal leading-[22.4px] text-[#E2E8F0]">
                  {pill.text}
                </span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6 sm:pt-10">
            <Link
              href="/security-advisories"
              className="inline-flex items-center justify-center rounded-[6px] bg-[#2563EB] px-[26px] py-[14.5px] font-[family-name:var(--font-manrope-family)] text-[15px] font-bold leading-[24px] text-white shadow-sm transition-colors hover:bg-[#1d4ed8]"
            >
              View Security Advisories
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-[6px] border border-white px-[26px] py-[13.5px] font-[family-name:var(--font-manrope-family)] text-[15px] font-bold leading-[24px] text-white transition-colors hover:bg-white/10"
            >
              Talk to an identity expert
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
