import type { ReactNode } from "react";
import Image from "next/image";

const tests: { id: string; text: ReactNode }[] = [
  {
    id: "AT-02",
    text: (
      <>
        A security reporter reaches Responsible
        <br />
        Disclosure without seeing a general form.
      </>
    ),
  },
  {
    id: "AT-03",
    text: (
      <>
        A privacy requester reaches approved
        <br />
        rights instructions. The form is not
        <br />
        described as fulfilling a legal request.
      </>
    ),
  },
  {
    id: "AT-04",
    text: (
      <>
        An unknown route disables safe
        <br />
        publication. No 404 and no invented
        <br />
        mailbox.
      </>
    ),
  },
  {
    id: "AT-06",
    text: (
      <>
        A server rejection is never reported as a
        <br />
        successful submission.
      </>
    ),
  },
  {
    id: "AT-07",
    text: (
      <>
        A duplicate retry does not create multiple
        <br />
        submissions.
      </>
    ),
  },
  {
    id: "AT-09",
    text: (
      <>
        No personal values appear in analytics,
        <br />
        unauthorised logs or URLs.
      </>
    ),
  },
  {
    id: "AT-10",
    text: (
      <>
        Mobile 320px and 400% reflow show no
        <br />
        clipping.
      </>
    ),
  },
  {
    id: "AT-15",
    text: (
      <>
        The corporate route is not an implied
        <br />
        emergency-support channel.
      </>
    ),
  },
  {
    id: "AT-18",
    text: (
      <>
        Consent is unbundled and defaults to the
        <br />
        safe choice.
      </>
    ),
  },
  {
    id: "AT-19",
    text: (
      <>
        Screen readers announce errors and
        <br />
        success based on real outcomes.
      </>
    ),
  },
];

export default function MobileAcceptanceTestingSection() {
  return (
    <section
      id="acceptance"
      className="w-full border-b border-solid border-[#d9e1ec] bg-[#fafbfd] px-[22px] py-[60px] lg:hidden"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[36px]">
        <div className="flex max-w-[820px] flex-col gap-[14.9px]">
          <div className="flex h-[39.59px] items-center gap-[12px]">
            <span className="h-[2px] w-[19.73px] shrink-0 bg-[#0891b2]" />
            <span className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0b1b33]">
              14
            </span>
            <span className="whitespace-nowrap font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0891b2]">
              Acceptance testing and
              <br />
              publication blockers
            </span>
          </div>
          <h2 className="pb-[0.75px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33] [word-break:break-word]">
            Failing one test holds
            <br />
            publication
          </h2>
          <p className="max-w-[720px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82] [word-break:break-word]">
            Twenty acceptance tests must pass before
            <br />
            release. A sample is shown below.
          </p>
        </div>
        <ul className="flex flex-col gap-[12px]">
          {tests.map((t) => (
            <li
              key={t.id}
              className="flex items-start gap-[12px] rounded-[10px] border border-solid border-[#d9e1ec] bg-white px-[18px] py-[16px]"
            >
              <span className="w-[37.09px] shrink-0 whitespace-nowrap font-manrope text-[14px] font-bold leading-[23.1px] text-[#0e7490]">
                {t.id}
              </span>
              <span className="whitespace-nowrap font-manrope text-[14px] font-normal leading-[23.1px] text-[#334155]">
                {t.text}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex items-start gap-[20px] rounded-[16px] border border-solid border-[#fca5a5] bg-[#fef2f2] px-[24px] pb-[24px] pt-[28px]">
          <div className="flex size-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[#fee2e2]">
            <Image src="/contact/mobile-icon-alert.svg" width={24} height={24} alt="" />
          </div>
          <p className="whitespace-nowrap font-manrope text-[15px] font-normal leading-[24.75px] text-[#7f1d1d]">
            <strong className="font-bold">Release blocker.</strong> Do not publish
            <br />
            the corporate contact form or
            <br />
            operational details until recipient
            <br />
            ownership, approved route or
            <br />
            URL, legal notice, security
            <br />
            processing, accessibility testing,
            <br />
            consent, retention policy,
            <br />
            monitoring and failure handling
            <br />
            are verified and signed off.
          </p>
        </div>
        <div className="relative h-[260px] w-full overflow-hidden rounded-[18px]">
          <Image
            src="/contact/mobile-owners-developer.webp"
            alt=""
            fill
            sizes="(max-width: 560px) 100vw, 560px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
