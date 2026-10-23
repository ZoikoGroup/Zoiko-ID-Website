import type { ReactNode } from "react";
import Image from "next/image";

const BR = <br className="max-xl:hidden" />;

const tests: { id: string; text: ReactNode; nowrap?: boolean }[] = [
  { id: "AT-02", nowrap: true, text: <>A security reporter reaches Responsible Disclosure without seeing a {BR}general form.</> },
  { id: "AT-03", nowrap: true, text: <>A privacy requester reaches approved rights instructions. The form is not {BR}described as fulfilling a legal request.</> },
  { id: "AT-04", nowrap: true, text: <>An unknown route disables safe publication. No 404 and no invented {BR}mailbox.</> },
  { id: "AT-06", text: <>A server rejection is never reported as a successful submission.</> },
  { id: "AT-07", text: <>A duplicate retry does not create multiple submissions.</> },
  { id: "AT-09", text: <>No personal values appear in analytics, unauthorised logs or URLs.</> },
  { id: "AT-10", text: <>Mobile 320px and 400% reflow show no clipping.</> },
  { id: "AT-15", text: <>The corporate route is not an implied emergency-support channel.</> },
  { id: "AT-18", text: <>Consent is unbundled and defaults to the safe choice.</> },
  { id: "AT-19", text: <>Screen readers announce errors and success based on real outcomes.</> },
];

export default function DesktopAcceptanceSection() {
  return (
    <section id="acceptance" className="flex w-full flex-col items-start gap-[40px] bg-[#fafbfd] px-[160px] py-[105px]">
      <div className="flex w-full max-w-[820px] flex-col items-start gap-[15px]">
        <h2 className="font-dm-serif w-full text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
          Failing one test holds publication
        </h2>
        <p className="font-manrope max-w-[720px] text-[17px] font-normal leading-[28px] text-[#5b6b82]">
          Twenty acceptance tests must pass before release. A sample is shown below.
        </p>
      </div>
      <ul className="grid w-full grid-cols-2 items-stretch gap-[12px] pt-[16px]">
        {tests.map((t) => (
          <li
            key={t.id}
            className="flex gap-[12px] rounded-[10px] border border-solid border-[#d9e1ec] bg-white px-[18px] py-[16px]"
          >
            <span className="font-manrope w-[37.09px] shrink-0 text-[14px] font-bold leading-[23.1px] text-[#0e7490]">{t.id}</span>
            <span
              className={`font-manrope min-w-0 text-[14px] font-normal leading-[23.1px] text-[#334155] ${t.nowrap ? "xl:whitespace-nowrap" : ""}`}
            >
              {t.text}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex w-full items-start gap-[20px] rounded-[16px] border border-solid border-[#fca5a5] bg-[#fef2f2] px-[34px] py-[30px]">
        <div className="flex size-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[#fee2e2]">
          <Image src="/contact/desktop-icon-alert.svg" width={24} height={24} alt="" />
        </div>
        <p className="font-manrope min-w-0 text-[15px] font-normal leading-[24.75px] text-[#7f1d1d] xl:whitespace-nowrap">
          <strong className="font-bold">Release blocker.</strong>
          {` Do not publish the corporate contact form or operational details until recipient ownership, approved route or URL, legal notice, `}
          <br className="max-xl:hidden" />
          security processing, accessibility testing, consent, retention policy, monitoring and failure handling are verified and signed off.
        </p>
      </div>
      <div className="relative h-[396px] w-full overflow-hidden rounded-[18px]">
        <Image
          src="/contact/desktop-owners-developer.webp"
          alt="Owners and developers reviewing release readiness"
          fill
          sizes="(min-width: 1024px) 1120px, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
