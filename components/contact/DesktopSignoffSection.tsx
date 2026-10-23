import type { ReactNode } from "react";

type Owner = { title: ReactNode; lines: string[]; col: string; row: string };

const owners: Owner[] = [
  {
    title: (
      <>
        Corporate and <br className="max-xl:hidden" />
        Product
      </>
    ),
    lines: ["Narrative, brand", "and route", "taxonomy"],
    col: "col-start-1",
    row: "row-start-1",
  },
  {
    title: (
      <>
        Sales, <br className="max-xl:hidden" />
        Support, <br className="max-xl:hidden" />
        DevRel
      </>
    ),
    lines: ["Destination", "ownership and", "capacity"],
    col: "col-start-2",
    row: "row-start-1",
  },
  {
    title: "Security",
    lines: ["Disclosure routing", "and form threat", "review"],
    col: "col-start-3",
    row: "row-start-1",
  },
  {
    title: (
      <>
        Privacy and <br className="max-xl:hidden" />
        Legal
      </>
    ),
    lines: ["Collection,", "retention, notices", "and rights"],
    col: "col-start-1",
    row: "row-start-2",
  },
  {
    title: "Engineering",
    lines: ["Form contract,", "route registry,", "deployment"],
    col: "col-start-2",
    row: "row-start-2",
  },
  {
    title: (
      <>
        Accessibility <br className="max-xl:hidden" />
        and QA
      </>
    ),
    lines: ["WCAG 2.2 AA and", "acceptance matrix"],
    col: "col-start-3",
    row: "row-start-2",
  },
];

export default function DesktopSignoffSection() {
  return (
    <section
      id="signoff"
      className="flex w-full flex-col items-start gap-[56px] bg-[#f8fafc] px-[160px] py-[105px]"
    >
      <div className="flex w-full items-center justify-center gap-[80px]">
        <div className="flex min-w-px flex-1 flex-col items-start gap-[15px]">
          <h2 className="w-full max-w-[539px] font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
            Each function approves its own facts
          </h2>
          <div className="w-full max-w-[720px] pb-[21px]">
            <p className="font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82]">
              Unconfirmed items stay as placeholders, and the page fails closed{" "}
              <br className="max-xl:hidden" />
              until they are verified.
            </p>
          </div>
          <div className="w-full rounded-[16px] bg-[#0b1b33] px-[36px] py-[32px]">
            <p className="font-manrope text-[15px] font-bold leading-[24.75px] text-white xl:whitespace-nowrap">
              <span>Decision log.</span>
              <span className="font-normal text-[#c9d3e3]">
                {" "}
                Actual email addresses, telephone numbers, current{" "}
              </span>
              <br className="max-xl:hidden" />
              <span className="font-normal text-[#c9d3e3]">
                hours, ticket capabilities and canonical paths remain unresolved.{" "}
              </span>
              <br className="max-xl:hidden" />
              <span className="font-normal text-[#c9d3e3]">
                The page may be built with placeholders, but publication must fail{" "}
              </span>
              <br className="max-xl:hidden" />
              <span className="font-normal text-[#c9d3e3]">
                closed until each is verified.
              </span>
            </p>
          </div>
        </div>

        <ul className="grid h-[414.09px] min-w-px flex-1 grid-cols-3 grid-rows-[207.42px_182.67px] gap-x-[24px] gap-y-[24px]">
          {owners.map((o, i) => (
            <li
              key={i}
              className={`${o.col} ${o.row} flex flex-col items-start gap-[4.4px] self-stretch rounded-[14px] border border-solid border-[#d9e1ec] bg-white px-[24px] py-[22.875px]`}
            >
              <h3 className="pb-[0.625px] font-manrope text-[15px] font-bold leading-[24.75px] text-[#0b1b33]">
                {o.title}
              </h3>
              {o.lines.map((l) => (
                <p
                  key={l}
                  className="font-manrope text-[13px] font-normal leading-[21.45px] text-[#5b6b82] xl:whitespace-nowrap"
                >
                  {l}
                </p>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
