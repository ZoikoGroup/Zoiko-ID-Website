import type { ReactNode } from "react";
import Image from "next/image";

const cards: { icon: string; title: ReactNode; desc: ReactNode; badge: string }[] = [
  {
    icon: "desktop-icon-mail.svg",
    title: "Privacy enquiries",
    desc: "Approved route only.",
    badge: "Pending Legal",
  },
  {
    icon: "desktop-icon-hand.svg",
    title: "Rights requests",
    desc: (
      <>
        Verified route, with identity <br className="max-xl:hidden" />
        checks.
      </>
    ),
    badge: "Pending Legal",
  },
  {
    icon: "desktop-icon-scale.svg",
    title: "Authority escalation",
    desc: "Per applicable jurisdiction.",
    badge: "Pending Legal",
  },
];

export default function DesktopContactSection() {
  return (
    <section
      id="contact"
      className="hidden w-full scroll-mt-[120px] border-b border-solid border-[#d9e1ec] bg-[#f8fafc] px-[160px] py-[105px] lg:block"
    >
      <div className="flex w-full items-start justify-center gap-[90px]">
        <div className="sticky top-0 flex w-[260px] shrink-0 flex-col items-start gap-[14px]">
          <div className="flex w-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8] py-[13px]">
            <Image src="/privacy-notice/desktop-icon-mail.svg" width={24} height={24} alt="" className="size-[24px]" />
          </div>
          <p className="w-full font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.68px] text-[#5b6b82]">
            Contact
          </p>
        </div>
        <div className="flex w-full min-w-0 max-w-[820px] flex-1 flex-col gap-[32px]">
          <div className="flex w-full flex-col gap-[5px]">
            <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
              Privacy contact and complaints
            </h2>
            <p className="w-full pt-[16px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
              Privacy enquiries, rights requests and escalation to a supervisory authority are routed to <br className="max-xl:hidden" />
              approved destinations. No contact address, data protection officer or response time is shown until verified.
            </p>
          </div>
          <div className="flex w-full flex-col gap-[5px]">
            <div className="relative h-[301px] w-full">
              <Image
                src="/privacy-notice/desktop-contact-meeting.webp"
                alt=""
                fill
                sizes="770px"
                className="rounded-[20px] object-cover"
              />
            </div>
            <ul className="flex w-full items-stretch gap-[18px] pt-[24px]">
              {cards.map((c) => (
                <li
                  key={c.icon}
                  className="flex min-h-[235.17px] min-w-px flex-1 flex-col rounded-[16px] border border-solid border-[#d9e1ec] bg-white p-[24px]"
                >
                  <div className="flex size-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8]">
                    <Image src={`/privacy-notice/${c.icon}`} width={24} height={24} alt="" className="size-[24px]" />
                  </div>
                  <h3 className="mt-[9px] font-manrope text-[18px] font-bold leading-[25.2px] text-[#0b1b33] xl:whitespace-nowrap">
                    {c.title}
                  </h3>
                  <p className="mt-[10px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82] xl:whitespace-nowrap">
                    {c.desc}
                  </p>
                  <span className="mt-auto self-start whitespace-nowrap rounded-[999px] bg-[#fef3c7] px-[12px] pb-[5.89px] pt-[5.5px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#92400e]">
                    {c.badge}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
