import React from "react";
import Image from "next/image";

interface CookieNoticePrivacyQuestionsSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const privacyRoutes = [
  {
    image: "/Legal-Privacy-cookie-notice/cn7.png",
    alt: "Reading privacy policy documentation on laptop screen",
    title: "Read the Privacy Notice",
    description: "Separate notice for personal data.",
  },
  {
    image: "/Legal-Privacy-cookie-notice/cn8.png",
    alt: "Submitting verified privacy requests on office desk",
    title: "Privacy requests",
    description: "Specialist pathway, with no invented contact.",
  },
];

export default function CookieNoticePrivacyQuestionsSection({
  view = "all",
}: CookieNoticePrivacyQuestionsSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="relative w-full bg-white border-t border-[#edf2f7]">
      {/* DESKTOP VERSION */}
      {showDesktop && (
        <div className="hidden sm:block w-full px-6 py-20 lg:px-[120px] lg:py-24">
          <div className="mx-auto w-full max-w-[1140px]">
            {/* Header */}
            <div className="w-full">
              <h2 className="font-['DM_Serif_Display'] text-[32px] sm:text-[36px] lg:text-[40px] font-normal leading-tight tracking-tight text-[#0b1b33]">
                Privacy questions go to the Privacy Notice
              </h2>
              <p className="mt-3 max-w-[560px] font-['Manrope'] text-[13.5px] lg:text-[14px] font-normal leading-[1.6] text-[#5b6b82]">
                Rights requests and privacy questions have their own specialist route. This notice
                does not replace it.
              </p>
            </div>

            {/* 2 Horizontal Cards Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {privacyRoutes.map((route) => (
                <div
                  key={route.title}
                  className="flex items-center overflow-hidden rounded-[20px] border border-[#e2e8f0] bg-white shadow-sm transition hover:shadow-md hover:border-slate-300"
                >
                  {/* Left Image */}
                  <div className="relative h-[160px] w-[180px] lg:w-[210px] shrink-0">
                    <Image
                      src={route.image}
                      alt={route.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 210px"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="flex flex-col justify-between p-5 lg:p-6 min-h-[160px]">
                    <div>
                      <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                        {route.title}
                      </h3>
                      <p className="mt-1 font-['Manrope'] text-[12.5px] text-[#64748b]">
                        {route.description}
                      </p>
                    </div>

                    <div className="mt-4">
                      <span className="inline-block rounded-full bg-[#fef3c7] px-3 py-1 font-['Manrope'] text-[10.5px] font-bold tracking-wider text-[#b45309]">
                        ROUTE PENDING
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MOBILE VERSION */}
      {showMobile && (
        <div className="sm:hidden w-full px-5 py-12 bg-[#f8fafc]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-[2px] w-[20px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.14em] text-[#00bcd4]">
              13 · PRIVACY AND CONTACT
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-['DM_Serif_Display'] text-[32px] font-normal leading-[1.15] text-[#0b1b33]">
            Privacy questions go to<br />the Privacy Notice
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 font-['Manrope'] text-[13.5px] leading-relaxed text-[#5b6b82]">
            Rights requests and privacy questions have their own specialist
            route. This notice does not replace it.
          </p>

          <div className="mt-8 flex flex-col gap-5">
            {/* Card 1 */}
            <div className="overflow-hidden rounded-[20px] border border-[#e2e8f0] bg-white shadow-sm">
              <div className="relative h-[170px] w-full">
                <Image
                  src="/Legal-Privacy-cookie-notice/cn16.jpg"
                  alt="Code on screen"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                  Read the Privacy Notice
                </h3>
                <p className="mt-1 font-['Manrope'] text-[12.5px] text-[#64748b]">
                  Separate notice for personal data.
                </p>
                <div className="mt-4">
                  <span className="inline-block rounded-full bg-[#fef3c7] px-4 py-1.5 font-['Manrope'] text-[10.5px] font-bold tracking-wider text-[#b45309]">
                    ROUTE PENDING
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="overflow-hidden rounded-[20px] border border-[#e2e8f0] bg-white shadow-sm">
              <div className="relative h-[170px] w-full">
                <Image
                  src="/legal-privacy-terms-of-use/mobile-gate-meeting-5dd32a.png"
                  alt="Privacy meeting in conference room"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                  Privacy requests
                </h3>
                <p className="mt-1 font-['Manrope'] text-[12.5px] text-[#64748b]">
                  Specialist pathway, with no invented contact.
                </p>
                <div className="mt-4">
                  <span className="inline-block rounded-full bg-[#fef3c7] px-4 py-1.5 font-['Manrope'] text-[10.5px] font-bold tracking-wider text-[#b45309]">
                    ROUTE PENDING
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
