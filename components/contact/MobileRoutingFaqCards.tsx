import React from "react";

const items: { q: React.ReactNode; a: React.ReactNode }[] = [
  {
    q: (<>Where should I report a security<br />issue?</>),
    a: (<>Vulnerabilities go to Responsible<br />Disclosure. Other security questions go to<br />Security Contact. Neither uses the general<br />form.</>),
  },
  {
    q: "How do I get developer help?",
    a: (<>Start with the developer documentation.<br />Support routes are shown only where they<br />are verified.</>),
  },
  {
    q: (<>Can I send confidential<br />information?</>),
    a: (<>No. Do not send passwords, tokens, keys,<br />identification numbers or confidential<br />configurations through any route here.</>),
  },
  {
    q: "How do I contact sales?",
    a: (<>Choose Sales in the routes above. It is the<br />route for evaluating Zoiko iD for your<br />organization.</>),
  },
  {
    q: (<>Does the page offer urgent<br />support?</>),
    a: (<>No. This page is not an emergency<br />channel. For a live service event, check<br />Availability / Status and follow your own<br />escalation process.</>),
  },
];

export default function MobileRoutingFaqCards() {
  return (
    <ul className="flex w-full flex-col gap-[24px]">
      {items.map((it, i) => (
        <li
          key={i}
          className="flex w-full flex-col gap-[5px] rounded-[14px] border border-solid border-[#d9e1ec] bg-white px-[28px] pb-[28px] pt-[27px]"
        >
          <h3 className="font-manrope pb-[0.9px] text-[17px] font-bold leading-[22.95px] text-[#0b1b33] [word-break:break-word]">
            {it.q}
          </h3>
          <p className="font-manrope text-[15px] font-normal leading-[24.75px] text-[#5b6b82] [word-break:break-word]">
            {it.a}
          </p>
        </li>
      ))}
    </ul>
  );
}
