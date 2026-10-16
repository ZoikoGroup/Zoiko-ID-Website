import Image from "next/image";

const content = {
  title: "What every advisory page must answer",
  description:
    "The template below lists the fields a published advisory fills in. Values shown are placeholders, not an advisory.",
  templateBadges: [
    "TEMPLATE - NO ADVISORY SHOWN",
    "ADVISORY ID: ASSIGNED ON PUBLICATION",
  ],
  advisoryTitle: "Advisory title",
  advisorySubtitle: "Approved title, reviewed for accuracy.",
  sections: [
    {
      left: {
        title: "SUMMARY",
        description: "Plain-language issue and relevance.",
      },
      right: {
        title: "SEVERITY OR PRIORITY",
        description: "Source-approved, or unspecified.",
        badge: "Not yet established",
      },
    },
    {
      left: {
        title: "AFFECTED PRODUCTS AND VERSIONS",
        description: "Structured per product and version.",
        badge: "Under assessment",
      },
      right: {
        title: "PUBLISHED AND UPDATED",
        description: "Absolute time with timezone.",
      },
    },
    {
      left: {
        title: "IMPACT AND EXPLOITATION",
        description: "Approved factual disclosure only.",
        badge: "Not published",
      },
      right: {
        title: "RECOMMENDED ACTION",
        description: "Approved steps, with ownership.",
        badge: "Not yet approved",
      },
    },
    {
      left: {
        title: "MITIGATION STATUS",
        description: "Known, guidance available, revised or superseded.",
      },
      right: {
        title: "RELATED RECORDS",
        description: "Changelog, status or documentation links, if traceable.",
      },
    },
  ],
  bottomCards: [
    {
      image: "/security/10.png",
      alt: "Laptop displaying code on a desk",
      title: "Revision history",
      description:
        "Every substantive change is recorded with its date and reason. Earlier versions stay available, and corrections are labelled.",
    },
    {
      image: "/security/11.png",
      alt: "Professionals collaborating in an office environment",
      title: "Who approves",
      description:
        "Security response owns the facts. Legal, Privacy and Communications review wording before publication.",
    },
  ],
};

export default function AdvisoryPageTemplate() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#0F172A] sm:text-[44px]">
            {content.title}
          </h2>
          <p className="mt-3 text-[16px] leading-[1.7] text-[#475569] sm:text-[17px]">
            {content.description}
          </p>
        </div>

        {/* Template Main Box */}
        <div className="mt-12 flex flex-col rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:p-8 lg:p-10">
          {/* Top Badges */}
          <div className="flex flex-wrap items-center gap-3">
            {content.templateBadges.map((badge, index) => (
              <span
                key={index}
                className="rounded-full border border-dashed border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-1 text-[11px] font-semibold tracking-wider text-[#475569]"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Advisory Title Section */}
          <div className="mt-6 border-b border-[#E2E8F0] pb-6">
            <h3 className="text-[24px] font-bold text-[#0F172A] sm:text-[28px]">
              {content.advisoryTitle}
            </h3>
            <p className="mt-1 text-[14px] text-[#64748B]">
              {content.advisorySubtitle}
            </p>
          </div>

          {/* Grid Rows */}
          <div className="mt-6 flex flex-col divide-y divide-[#E2E8F0] rounded-2xl border border-[#E2E8F0]">
            {content.sections.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-1 divide-y divide-[#E2E8F0] lg:grid-cols-2 lg:divide-x lg:divide-y-0"
              >
                {/* Left Column */}
                <div className="p-6">
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#64748B]">
                    {row.left.title}
                  </span>
                  <p className="mt-2 text-[14px] text-[#0F172A]">
                    {row.left.description}
                  </p>
                  {row.left.badge && (
                    <div className="mt-3 inline-block rounded-md border border-dashed border-[#CBD5E1] bg-[#F8FAFC] px-2.5 py-1 text-[11px] font-semibold text-[#475569]">
                      {row.left.badge}
                    </div>
                  )}
                </div>

                {/* Right Column */}
                <div className="p-6">
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#64748B]">
                    {row.right.title}
                  </span>
                  <p className="mt-2 text-[14px] text-[#0F172A]">
                    {row.right.description}
                  </p>
                  {row.right.badge && (
                    <div className="mt-3 inline-block rounded-md border border-dashed border-[#CBD5E1] bg-[#F8FAFC] px-2.5 py-1 text-[11px] font-semibold text-[#475569]">
                      {row.right.badge}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom 2 Cards Grid with Images on the Left */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {content.bottomCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] sm:p-8 gap-6"
            >
              {/* Left Image */}
              <div className="relative h-[160px] w-full sm:w-[45%] shrink-0 overflow-hidden rounded-2xl">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 1024px) 20vw, 100vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Right Content */}
              <div className="flex flex-col flex-1">
                <h3 className="text-[20px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  {card.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#475569]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
