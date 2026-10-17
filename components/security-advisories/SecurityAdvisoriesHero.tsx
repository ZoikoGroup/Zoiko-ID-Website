import Link from "next/link";
import Image from "next/image";
import { Search, FileText } from "lucide-react";

const content = {
  title: "Security Advisories",
  description:
    "Security advisories are source-reviewed notices about security issues, affected product scope, available actions and subsequent changes. Each advisory shows its scope, what is not yet established, and the date of its latest revision. An advisory is not the same as a service-status incident or a vulnerability submission.",
  buttons: [
    {
      text: "View advisories",
      href: "#",
      primary: true,
      icon: Search,
    },
    {
      text: "Security contact",
      href: "#",
      primary: false,
      icon: FileText,
    },
  ],
  image: {
    src: "/security/1.png",
    alt: "Security professionals reviewing documents in an office",
  },
};

export default function SecurityAdvisoriesHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#071426] via-[#0D1F35] to-[#0A1A2E] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="flex flex-col">
            <h1 className="text-[42px] font-bold leading-[1.1] tracking-[-0.03em] text-white sm:text-[52px] lg:text-[60px]">
              {content.title}
            </h1>

            <p className="mt-6 text-[15px] leading-[1.8] text-[#CBD5E1] sm:text-[16px]">
              {content.description}
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              {content.buttons.map((btn, index) => {
                const IconComponent = btn.icon;
                return btn.primary ? (
                  <Link
                    key={index}
                    href={btn.href}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-6 py-3.5 text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.3)] transition-opacity hover:opacity-90"
                  >
                    <IconComponent className="h-4 w-4" aria-hidden="true" />
                    {btn.text}
                  </Link>
                ) : (
                  <Link
                    key={index}
                    href={btn.href}
                    className="inline-flex items-center gap-2 rounded-lg border border-[#1E3A8A] bg-[#0A1A2E]/60 px-6 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1E293B]"
                  >
                    <IconComponent
                      className="h-4 w-4 text-[#93C5FD]"
                      aria-hidden="true"
                    />
                    {btn.text}
                  </Link>
                );
              })}
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
