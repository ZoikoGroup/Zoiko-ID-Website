import Image from "next/image";

const eventTypes = [
  { event: "credential.issued", description: "New credential created" },
  { event: "credential.revoked", description: "Credential withdrawn" },
  { event: "mandate.created", description: "Delegation granted" },
  { event: "mandate.expired", description: "Time boundary reached" },
  { event: "mandate.revoked", description: "Delegator withdrew" },
  { event: "policy.updated", description: "Organization rule changed" },
  { event: "decision.allowed", description: "Action approved" },
  { event: "decision.denied", description: "Action blocked" },
];

export default function EventsWebhooksSection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center">
        {/* Section Heading with exact 60px bottom margin matching Figma */}
        <h2 className="mb-10 text-center font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl sm:leading-[59.8px] lg:mb-[60px]">
          Events and webhooks
        </h2>

        {/* Two-Column Layout */}
        <div className="grid w-full grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left: Events Photo Image (Stretches to match right column height with rounded corners) */}
          <div className="relative min-h-[380px] w-full overflow-hidden rounded-[14px] lg:min-h-full">
            <Image
              src="/overview/events-webhooks.webp"
              alt="Team collaborating on identity events and webhooks"
              fill
              sizes="(max-width: 1024px) 100vw, 536px"
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Right: Description, Event Types Bullet List, and Signed Delivery Banner */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="font-dm-serif text-2xl font-normal text-azure-9 sm:text-[32px] sm:leading-snug">
                Subscribe to identity changes
              </h3>
              <p className="font-manrope text-[15px] font-normal leading-relaxed text-[#475569] sm:text-[15.5px]">
                When credentials are issued, revoked, or expire—or mandates change, policies update—Zoiko iD streams events to your webhook endpoint in real time.
              </p>
            </div>

            {/* Event Types Box (Clean bulleted list as in Figma) */}
            <div className="rounded-[12px] border border-[#E2E8F0] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] sm:p-7">
              <h4 className="mb-4 font-manrope text-[15px] font-semibold text-[#0F172A]">
                Event Types
              </h4>
              <ul className="flex flex-col gap-2.5 font-manrope text-[14px]">
                {eventTypes.map((item, idx) => (
                  <li key={idx} className="flex items-baseline gap-2">
                    <span className="text-[#94A3B8]">•</span>
                    <span className="font-mono text-[13.5px] font-medium text-[#1E293B]">
                      {item.event}
                    </span>
                    <span className="text-[#64748B]">
                      — {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Signed Delivery Banner */}
            <div className="flex items-start gap-3.5 rounded-[10px] bg-[#F0FDF4] p-4 sm:px-5 sm:py-4">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
                <Image
                  src="/overview/events-signed-delivery.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <h4 className="font-manrope text-[15px] font-semibold text-[#14532D]">
                  Signed delivery
                </h4>
                <p className="font-manrope text-[13.5px] font-normal leading-relaxed text-[#475569]">
                  HMAC-SHA256 signature. Verify webhook authenticity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
