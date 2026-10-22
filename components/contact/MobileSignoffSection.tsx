import Image from "next/image";

const teams = [
  { title: "Corporate and Product", desc: "Narrative, brand and route taxonomy" },
  { title: "Sales, Support, DevRel", desc: "Destination ownership and capacity" },
  { title: "Security", desc: "Disclosure routing and form threat review" },
  { title: "Privacy and Legal", desc: "Collection, retention, notices and rights" },
  { title: "Engineering", desc: "Form contract, route registry, deployment" },
  { title: "Accessibility and QA", desc: "WCAG 2.2 AA and acceptance matrix" },
];

const photos = [
  "/contact/mobile-route-team.webp",
  "/contact/mobile-flow-meeting.webp",
  "/contact/mobile-cta-portrait.webp",
  "/contact/mobile-flow-laptop.webp",
];

export default function MobileSignoffSection() {
  return (
    <section
      id="signoff"
      className="w-full border-b border-solid border-[#d9e1ec] bg-[#f2f5fa] px-[22px] py-[60px] lg:hidden"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[56px]">
        <div className="flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[14.9px]">
            <div className="flex min-h-[39.59px] items-center gap-3">
              <span aria-hidden="true" className="h-[2px] w-[22.75px] shrink-0 bg-[#0891b2]" />
              <span className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0b1b33]">
                15
              </span>
              <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0891b2] whitespace-nowrap">
                Cross-functional sign-off and
                <br />
                handoff
              </p>
            </div>
            <h2 className="font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33] [word-break:break-word]">
              Each function approves its
              <br />
              own facts
            </h2>
            <p className="max-w-[720px] pb-[21.1px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82] [word-break:break-word]">
              Unconfirmed items stay as placeholders, and
              <br />
              the page fails closed until they are verified.
            </p>
            <div className="rounded-[16px] bg-[#0b1b33] p-[24px]">
              <p className="font-manrope text-[15px] font-normal leading-[24.75px] text-[#c9d3e3] whitespace-nowrap [word-break:break-word]">
                <strong className="font-bold text-white">Decision log.</strong> Actual email addresses,
                <br />
                telephone numbers, current hours, ticket
                <br />
                capabilities and canonical paths remain
                <br />
                unresolved. The page may be built with
                <br />
                placeholders, but publication must fail closed
                <br />
                until each is verified.
              </p>
            </div>
          </div>
          <ul className="flex flex-col gap-[24px]">
            {teams.map((t) => (
              <li
                key={t.title}
                className="flex flex-col gap-[6.5px] rounded-[14px] border border-solid border-[#d9e1ec] bg-white px-[24px] pb-[25.89px] pt-[23px]"
              >
                <h3 className="font-manrope text-[15px] font-bold leading-[24.75px] text-[#0b1b33]">{t.title}</h3>
                <p className="font-manrope text-[13px] font-normal leading-[21.45px] text-[#5b6b82] whitespace-nowrap">
                  {t.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-[24px]">
          {photos.map((src) => (
            <div key={src} className="relative h-[200px] w-full overflow-hidden rounded-[14px]">
              <Image src={src} alt="" fill sizes="(max-width: 560px) 100vw, 560px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
