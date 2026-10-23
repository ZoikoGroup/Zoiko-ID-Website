const rows: [string, string, string][] = [
  ["Sales and evaluation", "Talk to Sales, then Enterprise", "General contact used as a demo booking"],
  ["Live technical fault", "Help & Support or authorized account support", "Public generic contact"],
  ["Security vulnerability", "Responsible Disclosure", "General form"],
  ["Security account issue", "Security Contact or authorized support", "Press or commercial route"],
  ["Privacy or rights", "Privacy Notice or approved rights process", "General contact without rights verification"],
  ["Developer integration", "Developer Overview, documentation or supported help", "Unverified public support email"],
  ["Press and partners", "Approved route, if verified", "Invented mailbox or unapproved channel"],
];

const th =
  "border-b border-solid border-[#d9e1ec] bg-[#0b1b33] px-[20px] py-[15.5px] text-left align-top font-manrope text-[13px] font-bold leading-[21.45px] whitespace-nowrap text-white";

export default function DesktopIntentsTableSection() {
  return (
    <div className="w-full overflow-auto rounded-[14px] border border-solid border-[#d9e1ec] bg-white">
      <table className="w-full min-w-[900px] table-fixed border-collapse">
        <colgroup>
          <col style={{ width: "22.12%" }} />
          <col style={{ width: "43.7%" }} />
          <col style={{ width: "34.18%" }} />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" className={th}>Intent</th>
            <th scope="col" className={th}>Destination precedence</th>
            <th scope="col" className={th}>Forbidden fallback</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([intent, dest, fallback], i) => {
            const b = i < rows.length - 1 ? "border-b border-solid border-[#d9e1ec] " : "";
            const td = `${b}px-[20px] py-[16px] align-top font-manrope text-[15px] leading-[24.75px] whitespace-nowrap `;
            return (
              <tr key={intent}>
                <th scope="row" className={`${td}text-left font-bold text-[#0b1b33]`}>{intent}</th>
                <td className={`${td}font-normal text-[#334155]`}>{dest}</td>
                <td className={`${td}font-normal text-[#334155]`}>{fallback}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
