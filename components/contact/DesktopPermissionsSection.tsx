import type { ReactNode } from "react";
import Image from "next/image";

const cards: { icon: string; title: ReactNode; body: ReactNode; pb: boolean }[] = [
  {
    icon: "user",
    title: "Anonymous visitors",
    body: (
      <>
        Access approved public <br className="max-xl:hidden" />
        routing and submit an <br className="max-xl:hidden" />
        approved general enquiry. <br className="max-xl:hidden" />
        No account privileges.
      </>
    ),
    pb: true,
  },
  {
    icon: "scale",
    title: (
      <>
        Routing <br className="max-xl:hidden" />
        administrators
      </>
    ),
    body: (
      <>
        Update only approved <br className="max-xl:hidden" />
        registry records, with change audit, publisher review and rollback.
      </>
    ),
    pb: false,
  },
  {
    icon: "shield",
    title: "Specialist queues",
    body: (
      <>
        Security, Privacy, Sales and <br className="max-xl:hidden" />
        Support own their data. <br className="max-xl:hidden" />
        General users cannot inspect it.
      </>
    ),
    pb: true,
  },
  {
    icon: "lock",
    title: "Abuse prevention",
    body: (
      <>
        Privacy-respecting, <br className="max-xl:hidden" />
        accessible rate limiting and <br className="max-xl:hidden" />
        bot protection, with a manual alternative.
      </>
    ),
    pb: true,
  },
];

const notes = [
  "No user-provided content in URLs, browser analytics, log labels or third-party telemetry.",
  "No claims of end-to-end encryption, exact retention days or 24/7 response unless approved controls exist.",
];

export default function DesktopPermissionsSection() {
  return (
    <section
      id="permissions"
      className="hidden w-full bg-[#fafbfd] px-[160px] py-[105px] lg:block"
    >
      <div className="flex flex-col items-start gap-[60px]">
        <div className="flex w-full max-w-[820px] flex-col gap-[15px]">
          <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33] [word-break:break-word]">
            Access by role, and specialist queues stay private
          </h2>
          <p className="w-full max-w-[720px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82] [word-break:break-word] xl:whitespace-nowrap">
            Nothing on this page grants account privileges. Specialist submissions remain with their{" "}
            <br className="max-xl:hidden" />
            owners.
          </p>
        </div>
        <div className="flex w-full flex-col gap-[24px]">
          <div className="flex items-stretch justify-center gap-[24px]">
            {cards.map((c, i) => (
              <div
                key={i}
                className={`flex min-w-px flex-1 flex-col items-start gap-[11.1px] rounded-[16px] border border-solid border-[#d9e1ec] bg-white px-[32px] pt-[32px] ${
                  c.pb ? "pb-[56.29px]" : "pb-[32px]"
                }`}
              >
                <div className="flex h-[53.8px] w-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8] py-[0.9px]">
                  <Image
                    src={`/contact/desktop-icon-${c.icon}.svg`}
                    alt=""
                    width={24}
                    height={24}
                  />
                </div>
                <div className="w-full pb-[6px]">
                  <h3 className="w-full font-manrope text-[18px] font-bold leading-[24.3px] text-[#0b1b33] [word-break:break-word]">
                    {c.title}
                  </h3>
                </div>
                <div className="w-full pb-[0.875px]">
                  <p className="w-full font-manrope text-[15px] font-normal leading-[24.75px] text-[#5b6b82] [word-break:break-word]">
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <ul className="flex w-full max-w-[900px] flex-col gap-[12px]">
            {notes.map((t) => (
              <li
                key={t}
                className="flex h-[24.75px] items-center gap-[12px] pb-[1.75px]"
              >
                <Image
                  src="/contact/desktop-icon-x-1.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="shrink-0"
                />
                <span className="font-manrope text-[15px] font-normal leading-[24.75px] text-[#334155] xl:whitespace-nowrap">
                  {t}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
