import React from "react";

const rows: { intent: string; dest: React.ReactNode; forbidden: React.ReactNode }[] = [
  {
    intent: "Sales and evaluation",
    dest: (<>Talk to Sales,<br />then<br />Enterprise</>),
    forbidden: (<>General<br />contact<br />used as a<br />demo<br />booking</>),
  },
  {
    intent: "Live technical fault",
    dest: (<>{`Help &`}<br />Support or<br />authorized<br />account<br />support</>),
    forbidden: (<>Public<br />generic<br />contact</>),
  },
  {
    intent: "Security vulnerability",
    dest: (<>Responsible<br />Disclosure</>),
    forbidden: (<>General<br />form</>),
  },
  {
    intent: "Security account issue",
    dest: (<>Security<br />Contact or<br />authorized<br />support</>),
    forbidden: (<>Press or<br />commercial<br />route</>),
  },
  {
    intent: "Privacy or rights",
    dest: (<>Privacy Notice<br />or approved<br />rights process</>),
    forbidden: (<>General<br />contact<br />without<br />rights<br />verification</>),
  },
  {
    intent: "Developer integration",
    dest: (<>Developer<br />Overview,<br />documentation<br />or supported<br />help</>),
    forbidden: (<>Unverified<br />public<br />support<br />email</>),
  },
  {
    intent: "Press and partners",
    dest: (<>Approved<br />route, if<br />verified</>),
    forbidden: (<>Invented<br />mailbox or<br />unapproved<br />channel</>),
  },
];

export default function MobileRoutingTable() {
  const head =
    "font-manrope whitespace-nowrap border-b border-solid border-[#d9e1ec] bg-[#eef2f7] px-[20px] py-[15.5px] text-left align-top text-[13px] font-bold leading-[21.45px] text-[#0b1b33]";
  return (
    <div className="w-full overflow-x-auto rounded-[14px] border border-solid border-[#d9e1ec] bg-white">
      <table className="w-full min-w-[461px] table-fixed border-separate border-spacing-0">
        <colgroup>
          <col style={{ width: "44.12%" }} />
          <col style={{ width: "30.02%" }} />
          <col style={{ width: "25.86%" }} />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" className={head}>Intent</th>
            <th scope="col" className={head}>Destination<br />precedence</th>
            <th scope="col" className={head}>Forbidden<br />fallback</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => {
            const b = i === rows.length - 1 ? "" : "border-b border-solid border-[#d9e1ec]";
            const cell = `font-manrope whitespace-nowrap px-[20px] py-[16px] align-top text-[15px] leading-[24.75px] ${b}`;
            return (
              <tr key={r.intent}>
                <th scope="row" className={`${cell} text-left font-bold text-[#0b1b33]`}>{r.intent}</th>
                <td className={`${cell} font-normal text-[#334155]`}>{r.dest}</td>
                <td className={`${cell} font-normal text-[#334155]`}>{r.forbidden}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
