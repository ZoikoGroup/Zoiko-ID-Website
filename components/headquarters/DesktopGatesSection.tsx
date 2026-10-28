import type { ReactNode } from "react";
import Image from "next/image";

const gates: { title: string; body: ReactNode }[] = [
  { title: "Corporate / Legal", body: "Approve address and entity name." },
  {
    title: "Web / SEO",
    body: (
      <>
        Resolve the canonical path and <br className="max-xl:hidden" />
        breadcrumb.
      </>
    ),
  },
  { title: "Security / Privacy", body: "Approve any map, link or tracking." },
  {
    title: "Accessibility / QA",
    body: (
      <>
        Keyboard, screen-reader, zoom and <br className="max-xl:hidden" />
        print tests.
      </>
    ),
  },
];

export default function DesktopGatesSection() {
  return (
    <section className="flex w-full flex-col gap-[60px] bg-[#0b1b33] px-[160px] pb-[105px] pt-[112.32px]">
      <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-white">
        Publication is held until the gates clear
      </h2>
      <div className="flex w-full flex-col gap-[17px]">
        <ul className="flex w-full items-stretch gap-[14px]">
          {gates.map((g) => (
            <li
              key={g.title}
              className="flex min-w-px flex-1 flex-col rounded-[14px] border border-solid border-[#fca5a5] bg-white px-[18px] pb-[16.14px] pt-[15px] font-manrope text-[13px] leading-[22.1px] text-[#7f1d1d]"
            >
              <h3 className="font-bold">{g.title}</h3>
              <p className="font-normal xl:whitespace-nowrap">{g.body}</p>
            </li>
          ))}
        </ul>
        <div className="flex w-full items-start gap-[18px] rounded-[22px] border border-solid border-[rgba(252,165,165,0.4)] bg-[rgba(254,226,226,0.08)] px-[34px] py-[30px] backdrop-blur-[24px]">
          <span className="flex size-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#fee2e2]">
            <Image src="/headquarters/desktop-icon-alert-1.svg" width={24} height={24} alt="" className="size-[24px]" />
          </span>
          <p className="pr-[22.64px] font-manrope text-[15px] font-normal leading-[25.5px] text-[#fee2e2] xl:whitespace-nowrap">
            <strong className="font-bold">Build allowed. Publication prohibited.</strong>
            {" The Headquarters page is prepared for approval and not locked. It must not be published until the gates"}{" "}
            <br className="max-xl:hidden" />
            above are signed off.
          </p>
        </div>
      </div>
    </section>
  );
}
