import type { ReactNode } from "react";
import Image from "next/image";

const BR = <br className="max-xl:hidden" />;

const checks: { id: string; text: ReactNode; row: 1 | 2 | 3 | 4 }[] = [
  { id: "CT-01", row: 1, text: <>Registry keys {BR}drive links</> },
  { id: "CT-04", row: 1, text: <>General form {BR}publish-gated</> },
  { id: "CT-05", row: 1, text: <>No credential {BR}collection</> },
  { id: "CT-06", row: 1, text: <>One visible H1</> },
  { id: "CT-10", row: 2, text: <>Descriptive {BR}link names</> },
  { id: "CT-12", row: 2, text: <>Errors tied to {BR}fields</> },
  { id: "CT-15", row: 2, text: <>CSRF and {BR}abuse {BR}protection</> },
  { id: "CT-16", row: 2, text: <>No input in {BR}analytics</> },
  { id: "CT-17", row: 3, text: <>Backend- {BR}confirmed {BR}receipts</> },
  { id: "CT-18", row: 3, text: <>Duplicates {BR}avoided</> },
  { id: "CT-24", row: 3, text: <>Owner-verified {BR}mailboxes</> },
  { id: "CT-26", row: 3, text: <>No walk-in {BR}hours inferred</> },
  { id: "CT-27", row: 4, text: <>No SLA claims</> },
  { id: "CT-28", row: 4, text: <>Security {BR}routed {BR}separately</> },
  { id: "CT-29", row: 4, text: <>Privacy rights {BR}separate</> },
  { id: "CT-40", row: 4, text: <>Specialist {BR}sign-off</> },
];

export default function DesktopRegistrySection() {
  return (
    <section id="registry" className="flex w-full flex-col items-start gap-[56px] bg-[#f8fafc] px-[160px] py-[105px]">
      <div className="flex w-full items-center justify-center gap-[80px]">
        <div className="flex min-w-px flex-1 flex-col items-start gap-[15px]">
          <h2 className="font-dm-serif w-full text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
            Forty normative checks
          </h2>
          <p className="font-manrope max-w-[720px] w-full text-[17px] font-normal leading-[28px] text-[#5b6b82]">
            Each check is verified by QA with owner sign-off before publication. A sample is shown here; the full register is held by the content registry.
          </p>
          <div className="relative h-[363.66px] min-h-[292px] w-full shrink-0 overflow-hidden rounded-[18px]">
            <Image
              src="/contact/desktop-acceptance-documents.webp"
              alt="Acceptance documents under review"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <ul className="grid h-[485.56px] min-w-px flex-1 grid-cols-4 grid-rows-[96.31px_117.75px_117.75px_117.75px] gap-[12px]">
          {checks.map((c) => (
            <li
              key={c.id}
              className="flex h-full flex-col items-start gap-[1.5px] rounded-[10px] border border-solid border-[#d9e1ec] bg-white px-[16px] py-[14px]"
            >
              <span className="font-manrope w-full text-[13px] font-bold leading-[21.45px] text-[#0e7490]">{c.id}</span>
              <span className="font-manrope text-[13px] font-normal leading-[21.45px] text-[#334155] xl:whitespace-nowrap">
                {c.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
