import Image from "next/image";

const ELEMENTS = [
  { title: "Agent principal", desc: "The identity that acts." },
  { title: "Sponsor", desc: "The human or organization accountable for it." },
  { title: "Task mandate", desc: "The task the agent is allowed to perform." },
  { title: "Resource and tool bounds", desc: "The resources and tools that may be used." },
  { title: "Duration", desc: "The period in which the mandate applies." },
  { title: "Accountable owner", desc: "The person who answers for outcomes." },
];

export default function AgentSponsorshipSection() {
  return (
    <section
      id="agent-sponsorship"
      className="w-full bg-white py-[105px] px-[160px]"
    >
      <div className="mx-auto flex w-full items-center gap-[50px] pb-[12px]">
        <div className="flex min-w-0 flex-1 flex-col gap-[48px]">
          <div className="flex flex-col gap-[12px]">
            <h2 className="font-dm-serif text-[52px] font-normal leading-[57.9px] text-[#07111f]">
              An agent acts for someone, within limits
            </h2>
            <p className="max-w-[820px] pt-[2.5px] font-manrope text-[16px] font-normal leading-[25.6px] text-[#64748b]">
              Six elements define an agent&apos;s authority. Each one is a design concept. Where enforcement is not verified, this guide says “design concept”, not “currently enforces”.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-[14px]">
            {ELEMENTS.map((e) => (
              <li
                key={e.title}
                className="flex flex-col gap-[3.7px] rounded-[14px] border border-[#e2e8f0] bg-white p-[18px]"
              >
                <h3 className="font-manrope text-[14px] font-bold leading-[22.4px] text-[#07111f]">
                  {e.title}
                </h3>
                <p className="font-manrope text-[14px] font-normal leading-[22.4px] text-[#64748b]">
                  {e.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-[460px] min-w-0 flex-1">
          <Image
            src="/machine-agent-identity-guides/desktop-sponsorship-review.webp"
            alt="A sponsor reviewing the bounds of an AI agent's task mandate"
            fill
            sizes="(min-width: 1440px) 535px, 45vw"
            className="rounded-[20px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
