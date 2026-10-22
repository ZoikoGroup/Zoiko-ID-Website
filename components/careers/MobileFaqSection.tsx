"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";

const NW = "min-[380px]:whitespace-nowrap";

const FAQS: { id: string; icon: string; q: ReactNode; a: ReactNode }[] = [
  {
    id: "openings",
    icon: "/careers/mobile-icon-search-3.svg",
    q: (
      <>
        Where can I see current
        <br />
        openings?
      </>
    ),
    a: (
      <>
        On this page, once roles are
        <br />
        published. Right now there are
        <br />
        none listed.
      </>
    ),
  },
  {
    id: "apply",
    icon: "/careers/mobile-icon-send-1.svg",
    q: "How do I apply?",
    a: (
      <>
        Through the apply link on a
        <br />
        published role, which goes to its
        <br />
        official destination.
      </>
    ),
  },
  {
    id: "remote",
    icon: "/careers/mobile-icon-globe-2.svg",
    q: "Are positions remote?",
    a: (
      <>
        Work location and mode are
        <br />
        shown on each role where
        <br />
        confirmed. We state no general
        <br />
        remote policy here.
      </>
    ),
  },
  {
    id: "information",
    icon: "/careers/mobile-icon-doc.svg",
    q: (
      <>
        What information is
        <br />
        needed?
      </>
    ),
    a: (
      <>
        Each role lists what it asks for.
        <br />
        Please do not send passwords,
        <br />
        tokens or identification
        <br />
        numbers.
      </>
    ),
  },
  {
    id: "community",
    icon: "/careers/mobile-icon-mail.svg",
    q: (
      <>
        Can I join a talent
        <br />
        community?
      </>
    ),
    a: (
      <>
        No such community is offered.
        <br />
        This page does not collect
        <br />
        details for future opportunities.
      </>
    ),
  },
  {
    id: "office",
    icon: "/careers/mobile-icon-building.svg",
    q: (
      <>
        Does an office address
        <br />
        mean I can work there?
      </>
    ),
    a: (
      <>
        No. Corporate addresses are
        <br />
        not work locations. Work
        <br />
        location is shown per role.
      </>
    ),
  },
];

export default function MobileFaqSection() {
  // The design shows every answer visible; each can be collapsed.
  const [closed, setClosed] = useState<Record<string, boolean>>({});

  return (
    <section id="faq" className="bg-white px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[16.9px]">
        <div className="relative flex h-[19.8px] items-center">
          <span aria-hidden className="h-[2px] w-[36px] bg-[#22b8d6]" />
          <p className="ml-[12px] font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[2.16px] text-[#1d4ed8]">
            Questions
          </p>
        </div>
        <h2 className="pb-[0.75px] font-dm-serif text-[32px] font-normal leading-[35.84px] tracking-[-0.16px] text-[#0b1b33]">
          Careers questions,
          <br />
          answered carefully
        </h2>
        <ul className="flex flex-col gap-[20px] pt-[33.09px]">
          {FAQS.map((f) => {
            const open = !closed[f.id];
            return (
              <li
                key={f.id}
                className="rounded-[18px] border border-solid border-[#dce3ee] bg-white"
              >
                <div className="flex items-start gap-[18px] p-[30px]">
                  <div className="flex size-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8]">
                    <Image src={f.icon} width={26} height={26} alt="" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="m-0">
                      <button
                        type="button"
                        aria-expanded={open}
                        aria-controls={`faq-${f.id}`}
                        onClick={() =>
                          setClosed((c) => ({ ...c, [f.id]: open }))
                        }
                        className={`block rounded-[4px] text-left font-manrope text-[18px] font-bold leading-[24.3px] text-[#0b1b33] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 ${NW}`}
                      >
                        {f.q}
                      </button>
                    </h3>
                    <div
                      id={`faq-${f.id}`}
                      role="region"
                      hidden={!open}
                      className={`mt-[4.76px] font-manrope text-[15px] font-normal leading-[24.75px] text-[#5b6b82] ${NW}`}
                    >
                      {f.a}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
