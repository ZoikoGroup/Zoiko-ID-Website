import type { ReactNode } from "react";

const items: { q: string; a: ReactNode }[] = [
  {
    q: "Where should I report a security issue?",
    a: "Vulnerabilities go to Responsible Disclosure. Other security questions go to Security Contact. Neither uses the general form.",
  },
  {
    q: "How do I get developer help?",
    a: "Start with the developer documentation. Support routes are shown only where they are verified.",
  },
  {
    q: "Can I send confidential information?",
    a: (
      <>
        No. Do not send passwords, tokens, keys, identification numbers or <br className="max-xl:hidden" />
        confidential configurations through any route here.
      </>
    ),
  },
  {
    q: "How do I contact sales?",
    a: (
      <>
        Choose Sales in the routes above. It is the route for evaluating Zoiko iD <br className="max-xl:hidden" />
        for your organization.
      </>
    ),
  },
  {
    q: "Does the page offer urgent support?",
    a: (
      <>
        No. This page is not an emergency channel. For a live service event, <br className="max-xl:hidden" />
        check Availability / Status and follow your own escalation process.
      </>
    ),
  },
];

export default function DesktopIntentsFaqSection() {
  return (
    <ul className="grid w-full grid-cols-2 items-stretch gap-[24px]">
      {items.map((it) => (
        <li
          key={it.q}
          className="flex flex-col gap-[5px] rounded-[14px] border border-solid border-[#d9e1ec] bg-white px-[28px] pb-[28px] pt-[27px]"
        >
          <h3 className="pb-[1px] font-manrope text-[17px] font-bold leading-[22.95px] text-[#0b1b33]">{it.q}</h3>
          <p className="pb-[0.5px] font-manrope text-[15px] font-normal leading-[24.75px] text-[#5b6b82]">{it.a}</p>
        </li>
      ))}
    </ul>
  );
}
