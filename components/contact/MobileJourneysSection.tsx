import Image from "next/image";
import type { ReactNode } from "react";

type Journey = {
  id: string;
  title: string;
  body: ReactNode;
  alt: string;
};

const journeys: Journey[] = [
  {
    id: "J01",
    title: "Enterprise evaluator",
    body: (
      <>
        Sales card → Talk to Sales. No false booking
        <br />
        confirmation.
      </>
    ),
    alt: "Enterprise evaluator journey",
  },
  {
    id: "J02",
    title: "Existing customer",
    body: "Help & Support. Status context kept, no secrets.",
    alt: "Existing customer journey",
  },
  {
    id: "J03",
    title: "Developer",
    body: (
      <>
        API docs or developer help. No assumed public
        <br />
        ticketing.
      </>
    ),
    alt: "Developer journey",
  },
  {
    id: "J04",
    title: "Vulnerability reporter",
    body: "Responsible Disclosure with a safe report path.",
    alt: "Vulnerability reporter journey",
  },
  {
    id: "J05",
    title: "Privacy requester",
    body: "Verified rights instructions, not a rights request.",
    alt: "Privacy requester journey",
  },
  {
    id: "J06",
    title: "General enquirer",
    body: (
      <>
        Minimal form, validated receipt, accessible
        <br />
        confirmation.
      </>
    ),
    alt: "General enquirer journey",
  },
  {
    id: "J07",
    title: "Keyboard visitor",
    body: "Route selector to link, focus preserved, no trap.",
    alt: "Keyboard visitor journey",
  },
  {
    id: "J08",
    title: "Route disabled",
    body: "Hidden, or a clear maintained alternative.",
    alt: "Route disabled journey",
  },
  {
    id: "J09",
    title: "Backend unavailable",
    body: "Safe error. No fabricated success.",
    alt: "Backend unavailable journey",
  },
  {
    id: "J10",
    title: "Route update",
    body: "Owner update, review, staging QA, release, rollback.",
    alt: "Route update journey",
  },
];

function JourneyCard({ j, index }: { j: Journey; index: number }) {
  const n = String(index + 1).padStart(2, "0");
  return (
    <li className="flex w-full flex-col rounded-[14px] border border-solid border-[#d9e1ec] bg-white p-[18px]">
      <div className="relative h-[110px] w-full overflow-hidden rounded-[10px]">
        <Image
          src={`/contact/mobile-journey-${n}.webp`}
          alt={j.alt}
          width={600}
          height={400}
          sizes="(max-width: 1023px) 524px, 0px"
          className="absolute left-0 top-[-34%] h-[168%] w-full max-w-none"
        />
      </div>
      <p className="mt-[7px] whitespace-nowrap pb-[0.8px] font-manrope text-[12px] font-extrabold leading-[19.8px] tracking-[1.2px] text-[#0891b2]">
        {j.id}
      </p>
      <h3 className="mt-[7.2px] whitespace-nowrap font-manrope text-[15px] font-bold leading-[20.25px] text-[#0b1b33]">
        {j.title}
      </h3>
      <p className="mt-[9px] whitespace-nowrap font-manrope text-[13px] font-normal leading-[21.45px] text-[#5b6b82]">
        {j.body}
      </p>
    </li>
  );
}

export default function MobileJourneysSection() {
  return (
    <section
      id="journeys"
      className="flex w-full flex-col border-b border-solid border-[#d9e1ec] bg-[#fafbfd] px-[22px] py-[60px]"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[36px]">
        <div className="flex w-full flex-col gap-[14.9px]">
          <div className="flex h-[19.8px] items-center gap-[12px]">
            <span className="h-[2px] w-[28px] shrink-0 bg-[#0891b2]" />
            <span className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0b1b33]">
              12
            </span>
            <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0891b2]">
              Critical user journeys
            </p>
          </div>
          <h2 className="pb-[0.75px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33] [word-break:break-word]">
            Ten journeys, including
            <br />
            the failure paths
          </h2>
          <p className="max-w-[720px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82] [word-break:break-word]">
            Each journey ends at a real destination or a
            <br />
            safe fallback. None ends at a broken link or a
            <br />
            false confirmation.
          </p>
        </div>

        <ul className="flex w-full flex-col gap-[24px]">
          {journeys.map((j, i) => (
            <JourneyCard key={j.id} j={j} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
