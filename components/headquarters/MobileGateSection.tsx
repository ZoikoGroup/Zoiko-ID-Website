import type { ReactNode } from "react";
import Image from "next/image";

const gates: { title: ReactNode; body: ReactNode }[] = [
  {
    title: (
      <>
        Corporate
        <br />
        /
        <br />
        Legal
      </>
    ),
    body: (
      <>
        Approve
        <br />
        address
        <br />
        and
        <br />
        entity
        <br />
        name.
      </>
    ),
  },
  {
    title: (
      <>
        Web /
        <br />
        SEO
      </>
    ),
    body: (
      <>
        Resolve
        <br />
        the
        <br />
        canonical
        <br />
        path
        <br />
        and
        <br />
        breadcrumb.
      </>
    ),
  },
  {
    title: (
      <>
        Security
        <br />
        /
        <br />
        Privacy
      </>
    ),
    body: (
      <>
        Approve
        <br />
        any
        <br />
        map,
        <br />
        link or
        <br />
        tracking.
      </>
    ),
  },
  {
    title: (
      <>
        Accessibility
        <br />/ QA
      </>
    ),
    body: (
      <>
        Keyboard,
        <br />
        screen-
        <br />
        reader,
        <br />
        zoom
        <br />
        and
        <br />
        print
        <br />
        tests.
      </>
    ),
  },
];

export default function MobileGateSection() {
  return (
    <section className="lg:hidden w-full bg-[#0b1b33] px-[22px] pb-[120px] pt-[67.31px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[16.8px]">
        <div className="flex items-center gap-[12px]">
          <div className="h-[2px] w-[28px] bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6] whitespace-nowrap">
            16 · Publication gate
          </p>
        </div>
        <h2 className="w-full pb-[0.745px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-white">
          Publication is held until
          <br />
          the gates clear
        </h2>
        <ul className="grid w-full grid-cols-4 items-stretch gap-[12.5px] pt-[7.2px]">
          {gates.map((g, i) => (
            <li
              key={i}
              className="flex min-w-0 flex-col rounded-[14px] border border-solid border-[#fca5a5] bg-white px-[18px] pb-[16px] pt-[15.09px] font-manrope text-[13px] leading-[22.1px] text-[#7f1d1d] whitespace-nowrap"
            >
              <h3 className="font-bold">{g.title}</h3>
              <p className="font-normal">{g.body}</p>
            </li>
          ))}
        </ul>
        <div className="relative flex w-full items-start gap-[18px] rounded-[22px] border border-solid border-[rgba(252,165,165,0.4)] bg-[rgba(254,226,226,0.08)] px-[34px] pb-[30px] pt-[43.2px] backdrop-blur-[24px]">
          <div className="flex size-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#fee2e2]">
            <Image
              src="/headquarters/mobile-icon-alert-1.svg"
              width={24}
              height={24}
              alt=""
            />
          </div>
          <p className="pr-[1.17px] font-manrope text-[15px] leading-[25.5px] text-[#fee2e2] whitespace-nowrap">
            <span className="font-bold">
              Build allowed. Publication
              <br />
              prohibited.
            </span>
            <span className="font-normal">
              {" "}
              The Headquarters
              <br />
              page is prepared for approval
              <br />
              and not locked. It must not be
              <br />
              published until the gates above
              <br />
              are signed off.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
