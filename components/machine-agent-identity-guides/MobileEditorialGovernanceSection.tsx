import type { ReactNode } from "react";

const rows: { role: ReactNode; approves: ReactNode; cannot: ReactNode }[] = [
  { role: "Editorial", approves: <>Drafts concept<br />explanations<br />and structure</>, cannot: <>Create<br />technical truth<br />to fill a gap</> },
  { role: "Product", approves: <>Confirms<br />intended<br />positioning</>, cannot: <>Approve an<br />implementation<br />claim alone</> },
  { role: <>Engineering<br />and Security</>, approves: <>Verifies<br />protocol,<br />implementation<br />and secret-<br />handling<br />statements</>, cannot: <>Approve legal<br />or personal-<br />data wording</> },
  { role: <>Legal and<br />Privacy</>, approves: <>Approves<br />regulatory and<br />personal-data<br />implications</>, cannot: <>Approve<br />technical<br />behaviour</> },
  { role: "SEO", approves: <>Owns<br />canonical<br />routes and<br />structured data</>, cannot: <>Change a<br />claim&apos;s<br />meaning</> },
  { role: <>Accessibility<br />and QA</>, approves: <>Signs off<br />interaction and<br />assistive-<br />technology<br />coverage</>, cannot: <>Waive a failed<br />test</> },
];

const cell = "px-[20px] py-[16px] align-top font-manrope text-[15px] leading-[24px] whitespace-nowrap";
const line = "border-b border-solid border-[#e2e8f0]";

export default function EditorialGovernanceSection() {
  return (
    <section id="editorial-governance" className="w-full bg-[#f1f5f9] px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[12px]">
        <div className="flex h-[19.19px] items-center gap-[10px]">
          <span className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[color:#2563eb]">
            Editorial governance
          </p>
        </div>
        <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
          Who approves what before a guide is published
        </h2>
        <p className="max-w-[820px] pt-[1.395px] font-manrope text-[16px] leading-[25.6px] text-[color:#64748b]">
          No single writer decides a technical claim. Each kind of statement has its own approver. A missing approval blocks publication rather than being filled in by guesswork.
        </p>
        <div className="overflow-x-auto rounded-[18px] border border-solid border-[#e2e8f0] bg-white">
          <table className="w-[418px] min-w-[418px] table-fixed border-collapse text-left">
            <caption className="sr-only">Editorial roles, what each approves and what each cannot do alone</caption>
            <colgroup>
              <col style={{ width: "132.22px" }} />
              <col style={{ width: "141.72px" }} />
              <col style={{ width: "142.22px" }} />
            </colgroup>
            <thead>
              <tr className="bg-[#f1f5f9]">
                <th scope="col" className={`${cell} ${line} font-bold text-[#2563eb]`}>Role</th>
                <th scope="col" className={`${cell} ${line} font-bold text-[#2563eb]`}>Approves</th>
                <th scope="col" className={`${cell} ${line} font-bold text-[#2563eb]`}>
                  Cannot do<br />alone
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => {
                const border = i === rows.length - 1 ? "" : line;
                return (
                  <tr key={i}>
                    <th scope="row" className={`${cell} ${border} font-bold text-[#2563eb]`}>{r.role}</th>
                    <td className={`${cell} ${border} font-normal text-[color:#334155]`}>{r.approves}</td>
                    <td className={`${cell} ${border} font-normal text-[color:#334155]`}>{r.cannot}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
