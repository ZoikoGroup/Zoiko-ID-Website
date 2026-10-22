import React from "react";
import Image from "next/image";

const states: { title: string; body: React.ReactNode }[] = [
  { title: "Pristine", body: "Empty fields and no errors shown." },
  {
    title: "Field error",
    body: (
      <>
        Error beside the field and in a summary. Focus
        <br />
        moves to the summary.
      </>
    ),
  },
  { title: "Transmitting", body: "Submit disabled, with progress announced." },
  {
    title: "Accepted",
    body: (
      <>
        Shown only after durable server receipt, with a
        <br />
        safe reference.
      </>
    ),
  },
  {
    title: "Failed or unknown",
    body: (
      <>
        No success message. Status is checked before
        <br />
        any retry; the draft is kept.
      </>
    ),
  },
  { title: "Rate limited", body: "Neutral message. No internal defence detail." },
  {
    title: "Route unavailable",
    body: (
      <>
        Hidden, or an approved alternate is shown.
        <br />
        Never a broken link.
      </>
    ),
  },
  { title: "Backend offline", body: "Safe error with the approved alternative route." },
];

export default function MobileFormRouteStatesSection() {
  return (
    <section
      id="states"
      className="flex w-full flex-col items-start border-b border-solid border-[#d9e1ec] bg-[#fafbfd] px-[22px] py-[60px]"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[36px]">
        <div className="flex w-full max-w-[820px] flex-col gap-[14.9px]">
          <div className="flex h-[19.8px] items-center gap-[12px]">
            <span className="h-[2px] w-[28px] bg-[#0891b2]" />
            <span className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0b1b33]">
              06
            </span>
            <span className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0891b2]">
              Form and route states
            </span>
          </div>
          <h2 className="font-dm-serif pb-[0.745px] text-[32px] font-normal leading-[35.84px] text-[#0b1b33] [word-break:break-word]">
            No state claims success it
            <br />
            has not earned
          </h2>
          <p className="font-manrope max-w-[720px] text-[17px] font-normal leading-[28px] text-[#5b6b82] [word-break:break-word]">
            A receipt is shown only after the server
            <br />
            confirms durable acceptance. A timeout is
            <br />
            never shown as success.
          </p>
        </div>

        <ul className="flex w-full flex-col gap-[24px]">
          {states.map((s) => (
            <li
              key={s.title}
              className="flex w-full flex-col gap-[5px] rounded-[14px] border border-solid border-[#d9e1ec] bg-white p-[24px]"
            >
              <h3 className="font-manrope pb-[6px] text-[18px] font-bold leading-[24.3px] text-[#0b1b33]">
                {s.title}
              </h3>
              <p className="font-manrope text-[14px] font-normal leading-[23.1px] text-[#5b6b82] [word-break:break-word]">
                {s.body}
              </p>
            </li>
          ))}
        </ul>

        <div className="flex w-full flex-col items-center gap-[40px] pt-[36px]">
          <div className="flex w-full flex-col overflow-hidden rounded-[18px] border border-solid border-[#d9e1ec] bg-white">
            <div className="flex w-full items-center justify-between gap-[16px] bg-[#f2f5fa] px-[26px] py-[16px]">
              <span className="font-manrope whitespace-nowrap rounded-[999px] bg-[#e8ecf3] px-[12px] py-[5.5px] text-[11px] font-extrabold uppercase leading-[18.15px] tracking-[0.88px] text-[#3b4a63]">
                State preview
              </span>
              <span className="font-manrope whitespace-nowrap text-[13px] font-normal leading-[21.45px] text-[#5b6b82]">
                Not a real receipt
              </span>
            </div>
            <div className="relative h-[220px] w-full">
              <Image
                src="/contact/mobile-states-confirmation.webp"
                alt="Preview of the enquiry confirmation state"
                fill
                sizes="(max-width: 560px) 100vw, 560px"
                className="object-cover"
              />
            </div>
            <div className="flex w-full flex-col gap-[9.085px] p-[32px]">
              <h3 className="font-dm-serif text-[30px] font-normal leading-[36px] text-[#0b1b33]">
                Your enquiry has been
                <br />
                received.
              </h3>
              <p className="font-manrope text-[16px] font-normal leading-[26.4px] text-[#334155]">
                Thank you. The details you submitted
                <br />
                have been received for review. A
                <br />
                response or meeting is not confirmed
                <br />
                by this receipt.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-[9.1px]">
            <div className="flex h-[19.8px] items-center gap-[12px]">
              <span className="h-[2px] w-[28px] bg-[#0891b2]" />
              <span className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0891b2]">
                Confirmation
              </span>
            </div>
            <h2 className="font-dm-serif pt-[6.9px] text-[30px] font-normal leading-[36px] text-[#0b1b33]">
              What a receipt means, and
              <br />
              what it does not
            </h2>
            <p className="font-manrope max-w-[720px] text-[17px] font-normal leading-[28px] text-[#5b6b82] [word-break:break-word]">
              A receipt confirms that your details were
              <br />
              received for review. It is not a confirmed
              <br />
              meeting, a sales response, a quote or an
              <br />
              accepted offer. Any reference shown is
              <br />
              opaque and contains none of your details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
