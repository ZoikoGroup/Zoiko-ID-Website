import Image from "next/image";

interface IntentCard {
  id: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  nextRoute: string;
  limitation: string;
}

export default function SecurityIntentsSection() {
  const intents: IntentCard[] = [
    {
      id: "general-question",
      image: "/security-contact/intent-question.png",
      alt: "Enterprise consultation",
      title: "Ask a security question",
      description: "General security or architecture questions from\nan enterprise.",
      nextRoute: "Next: enterprise enquiry or Trust Center",
      limitation: "No technical support SLA is implied",
    },
    {
      id: "product-vulnerability",
      image: "/security-contact/intent-vulnerability.png",
      alt: "Product vulnerability analysis",
      title: "Report a product vulnerability",
      description: "A suspected flaw in a Zoiko iD product or\nintegration.",
      nextRoute: "Next: Responsible Disclosure",
      limitation: "No exploit payloads in general forms",
    },
    {
      id: "suspected-account",
      image: "/security-contact/intent-account.png",
      alt: "Account security observation",
      title: "Report suspected account",
      description: "You believe a credential, token or account may\nbe misused.",
      nextRoute: "Next: protective guidance, support",
      limitation: "Not a declaration of a platform-wide incident",
    },
    {
      id: "security-advisory",
      image: "/security-contact/intent-advisory.png",
      alt: "Security advisory notice lookup",
      title: "Find a security advisory",
      description: "You are looking for a published notice about a\nsecurity issue.",
      nextRoute: "Next: Security Advisories",
      limitation: "Not an incident filing form",
    },
    {
      id: "service-availability",
      image: "/security-contact/intent-availability.png",
      alt: "Service metrics and uptime analysis",
      title: "Report a service availability issue",
      description: "A service appears to be unavailable or degraded.",
      nextRoute: "Next: Availability / Status",
      limitation: "No live status is shown here",
    },
    {
      id: "privacy-data",
      image: "/security-contact/intent-privacy-64262a.png",
      alt: "Privacy and compliance data documentation",
      title: "Ask about privacy or data",
      description: "Questions about personal data or data-rights\nrequests.",
      nextRoute: "Next: Privacy route",
      limitation: "Do not share excess personal data",
    },
  ];

  return (
    <section id="intents" className="relative w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-12 sm:py-20 lg:px-[160px] lg:py-[105px]">
        <div className="flex flex-col gap-[60px]">
          {/* Section Header */}
          <div className="flex flex-col gap-3">
            <h2 className="font-[family-name:var(--font-dm-serif-display-family)] text-3xl sm:text-4xl lg:text-[52px] font-normal lg:leading-[57.8px] text-[#0B1B33]">
              Six intents, each with its own owner
            </h2>
            <div className="max-w-[820px] pt-[1.3px]">
              <p className="font-[family-name:var(--font-manrope-family)] text-[16px] font-normal leading-[25.6px] text-[#64748B]">
                Select the intent that matches your question. Each one leads to the team that owns that work, so your request
                <br className="hidden sm:inline" />
                reaches the right place.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div
            role="radiogroup"
            aria-label="Security enquiry type"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px]"
          >
            {intents.map((intent) => (
              <div
                key={intent.id}
                className="flex flex-col overflow-hidden rounded-[18px] border border-[#E2E8F0] bg-white transition-all duration-200 hover:shadow-md"
              >
                {/* Image Frame */}
                <div className="relative h-[174px] w-full shrink-0 overflow-hidden">
                  <Image
                    src={intent.image}
                    alt={intent.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
                    className="object-cover"
                  />
                </div>

                {/* Content Box */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="flex flex-col gap-2">
                    <div className="pb-1.5">
                      <h4 className="font-[family-name:var(--font-manrope-family)] text-[17px] font-bold leading-[27.2px] text-[#0B1B33]">
                        {intent.title}
                      </h4>
                    </div>
                    <p className="font-[family-name:var(--font-manrope-family)] text-[14px] font-normal leading-[22.4px] text-[#64748B] whitespace-pre-line">
                      {intent.description}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-col gap-2">
                    <div className="rounded-[8px] bg-[#F1F5F9] px-3 py-[10px]">
                      <span className="font-[family-name:var(--font-manrope-family)] text-[13px] font-normal leading-[20.8px] text-[#0B1B33]">
                        {intent.nextRoute}
                      </span>
                    </div>
                    <div className="rounded-[8px] bg-[#FFFBEB] px-[10px] py-[7px]">
                      <span className="font-[family-name:var(--font-manrope-family)] text-[12px] font-normal leading-[19.2px] text-[#92400E]">
                        {intent.limitation}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
