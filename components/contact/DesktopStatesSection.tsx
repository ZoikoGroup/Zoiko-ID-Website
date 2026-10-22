import type { ReactNode } from "react";
import Image from "next/image";

const states: { title: string; body: ReactNode }[] = [
  { title: "Pristine", body: "Empty fields and no errors shown." },
  {
    title: "Field error",
    body: (
      <>
        Error beside the field and in a <br className="max-xl:hidden" />
        summary. Focus moves to the <br className="max-xl:hidden" />
        summary.
      </>
    ),
  },
  {
    title: "Transmitting",
    body: (
      <>
        Submit disabled, with progress <br className="max-xl:hidden" />
        announced.
      </>
    ),
  },
  {
    title: "Accepted",
    body: (
      <>
        Shown only after durable server <br className="max-xl:hidden" />
        receipt, with a safe reference.
      </>
    ),
  },
  {
    title: "Failed or unknown",
    body: (
      <>
        No success message. Status is <br className="max-xl:hidden" />
        checked before any retry; the <br className="max-xl:hidden" />
        draft is kept.
      </>
    ),
  },
  {
    title: "Rate limited",
    body: (
      <>
        Neutral message. No internal <br className="max-xl:hidden" />
        defence detail.
      </>
    ),
  },
  {
    title: "Route unavailable",
    body: (
      <>
        Hidden, or an approved alternate <br className="max-xl:hidden" />
        is shown. Never a broken link.
      </>
    ),
  },
  {
    title: "Backend offline",
    body: (
      <>
        Safe error with the approved <br className="max-xl:hidden" />
        alternative route.
      </>
    ),
  },
];

function StatesGrid() {
  return (
    <ul className="grid w-full grid-cols-4 items-stretch gap-[24px]">
      {states.map((s) => (
        <li
          key={s.title}
          className="flex flex-col gap-[5px] rounded-[14px] border border-solid border-[#d9e1ec] bg-white p-[24px]"
        >
          <h3 className="pb-[6px] font-manrope text-[18px] font-bold leading-[24.3px] text-[#0b1b33]">
            {s.title}
          </h3>
          <p className="font-manrope text-[14px] font-normal leading-[23.1px] text-[#5b6b82]">
            {s.body}
          </p>
        </li>
      ))}
    </ul>
  );
}

function ConfirmationPreview() {
  return (
    <div className="flex w-full items-center justify-center gap-[80px] pt-[16px]">
      <div className="relative flex min-w-px flex-[1_0_0] flex-col items-start overflow-clip rounded-[18px] border border-solid border-[#d9e1ec] bg-white">
        <div className="flex w-full items-center justify-between gap-[24px] bg-[#f2f5fa] px-[26px] py-[16px]">
          <span className="flex items-center rounded-[999px] bg-[#e8ecf3] px-[12px] py-[5.5px] font-manrope text-[11px] font-extrabold uppercase leading-[18.15px] tracking-[0.88px] whitespace-nowrap text-[#3b4a63]">
            State preview
          </span>
          <span className="font-manrope text-[13px] font-normal leading-[21.45px] whitespace-nowrap text-[#5b6b82]">
            Not a real receipt
          </span>
        </div>
        <div className="relative h-[220px] w-full shrink-0">
          <Image
            src="/contact/desktop-states-confirmation.webp"
            alt=""
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex w-full flex-col gap-[9px] p-[32px]">
          <h3 className="font-dm-serif text-[30px] font-normal leading-[36px] text-[#0b1b33]">
            Your enquiry has been received.
          </h3>
          <p className="pb-[0.5px] font-manrope text-[16px] leading-[26.4px] text-[#334155]">
            Thank you. The details you submitted have been received for <br className="max-xl:hidden" />
            review. A response or meeting is not confirmed by this receipt.
          </p>
        </div>
      </div>
      <div className="flex min-w-px flex-[1_0_0] flex-col items-start gap-[9px]">
        <h3 className="w-full pt-[7px] font-dm-serif text-[30px] font-normal leading-[36px] text-[#0b1b33]">
          What a receipt means, and what it does not
        </h3>
        <p className="w-full max-w-[720px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82]">
          A receipt confirms that your details were received for review. It is not a confirmed meeting, a sales response, a quote or an accepted offer. Any reference shown is opaque and contains none of your details.
        </p>
      </div>
    </div>
  );
}

export default function DesktopStatesSection() {
  return (
    <section
      id="states"
      className="flex w-full flex-col items-start gap-[60px] bg-[#fafbfd] px-[160px] py-[105px]"
    >
      <div className="flex w-[820px] max-w-[820px] flex-col items-start gap-[15px]">
        <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
          No state claims success it has not <br className="max-xl:hidden" />
          earned
        </h2>
        <p className="w-[720px] max-w-[720px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82] xl:whitespace-nowrap">
          A receipt is shown only after the server confirms durable acceptance. A timeout is never shown <br className="max-xl:hidden" />
          as success.
        </p>
      </div>
      <StatesGrid />
      <ConfirmationPreview />
    </section>
  );
}
