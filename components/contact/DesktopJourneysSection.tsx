import type { ReactNode } from "react";
import Image from "next/image";

type Journey = {
  id: string;
  title: string;
  image: string;
  alt: string;
  nowrap: boolean;
  body: ReactNode;
};

const br = <br className="max-xl:hidden" />;

const journeys: Journey[] = [
  {
    id: "J01",
    title: "Enterprise evaluator",
    image: "/contact/desktop-journey-01.webp",
    alt: "Enterprise evaluator reviewing a sales conversation",
    nowrap: false,
    body: (
      <>
        Sales card → Talk to Sales. {br}No false booking {br}confirmation.
      </>
    ),
  },
  {
    id: "J02",
    title: "Existing customer",
    image: "/contact/desktop-journey-02.webp",
    alt: "Existing customer seeking help and support",
    nowrap: true,
    body: (
      <>
        Help &amp; Support. Status {br}context kept, no secrets.
      </>
    ),
  },
  {
    id: "J03",
    title: "Developer",
    image: "/contact/desktop-journey-03.webp",
    alt: "Developer reading API documentation",
    nowrap: true,
    body: (
      <>
        API docs or developer help. {br}No assumed public ticketing.
      </>
    ),
  },
  {
    id: "J04",
    title: "Vulnerability reporter",
    image: "/contact/desktop-journey-04.webp",
    alt: "Security researcher reporting a vulnerability",
    nowrap: true,
    body: (
      <>
        Responsible Disclosure with {br}a safe report path.
      </>
    ),
  },
  {
    id: "J05",
    title: "Privacy requester",
    image: "/contact/desktop-journey-05.webp",
    alt: "Privacy requester reading rights instructions",
    nowrap: true,
    body: (
      <>
        Verified rights instructions, {br}not a rights request.
      </>
    ),
  },
  {
    id: "J06",
    title: "General enquirer",
    image: "/contact/desktop-journey-06.webp",
    alt: "General enquirer completing a minimal form",
    nowrap: false,
    body: (
      <>
        Minimal form, validated {br}receipt, accessible {br}confirmation.
      </>
    ),
  },
  {
    id: "J07",
    title: "Keyboard visitor",
    image: "/contact/desktop-journey-07.webp",
    alt: "Keyboard visitor navigating the route selector",
    nowrap: true,
    body: (
      <>
        Route selector to link, focus {br}preserved, no trap.
      </>
    ),
  },
  {
    id: "J08",
    title: "Route disabled",
    image: "/contact/desktop-journey-08.webp",
    alt: "A disabled contact route",
    nowrap: true,
    body: (
      <>
        Hidden, or a clear {br}maintained alternative.
      </>
    ),
  },
  {
    id: "J09",
    title: "Backend unavailable",
    image: "/contact/desktop-journey-09.webp",
    alt: "Backend unavailable error state",
    nowrap: true,
    body: (
      <>
        Safe error. No fabricated {br}success.
      </>
    ),
  },
  {
    id: "J10",
    title: "Route update",
    image: "/contact/desktop-journey-10.webp",
    alt: "Route update going through review and release",
    nowrap: false,
    body: (
      <>
        Owner update, review, {br}staging QA, release, {br}rollback.
      </>
    ),
  },
];

export default function DesktopJourneysSection() {
  return (
    <section
      id="journeys"
      className="hidden w-full flex-col items-start gap-[56px] bg-[#fafbfd] px-[160px] py-[105px] lg:flex"
    >
      <div className="flex w-full max-w-[820px] flex-col gap-[15px]">
        <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
          Ten journeys, including the failure {br}paths
        </h2>
        <p className="max-w-[720px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82] xl:whitespace-nowrap">
          Each journey ends at a real destination or a safe fallback. None ends at a broken link or a false {br}confirmation.
        </p>
      </div>
      <ul className="grid w-full grid-cols-5 items-stretch gap-[24px]">
        {journeys.map((j) => (
          <li
            key={j.id}
            className="flex flex-col gap-[7px] rounded-[14px] border border-solid border-[#d9e1ec] bg-white p-[18px]"
          >
            <div className="relative h-[110px] w-full shrink-0 rounded-[10px]">
              <Image
                src={j.image}
                alt={j.alt}
                fill
                sizes="(min-width: 1024px) 200px, 0px"
                className="rounded-[10px] object-cover"
              />
            </div>
            <p className="pb-[0.8px] font-manrope text-[12px] font-extrabold leading-[19.8px] tracking-[1.2px] text-[#0891b2]">
              {j.id}
            </p>
            <h3
              className={`font-manrope text-[15px] font-bold leading-[20.25px] text-[#0b1b33] ${
                j.nowrap ? "xl:whitespace-nowrap" : ""
              }`}
            >
              {j.title}
            </h3>
            <p
              className={`font-manrope text-[13px] font-normal leading-[21.45px] text-[#5b6b82] ${
                j.nowrap ? "xl:whitespace-nowrap" : ""
              }`}
            >
              {j.body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
