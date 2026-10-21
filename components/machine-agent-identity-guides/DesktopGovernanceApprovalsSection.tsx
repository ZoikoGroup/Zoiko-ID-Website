import Image from "next/image";

const rows = [
  ["Editorial", "Drafts concept explanations and structure", "Create technical truth to fill a gap"],
  ["Product", "Confirms intended positioning", "Approve an implementation claim alone"],
  ["Engineering and Security", "Verifies protocol, implementation and secret-handling statements", "Approve legal or personal-data wording"],
  ["Legal and Privacy", "Approves regulatory and personal-data implications", "Approve technical behaviour"],
  ["SEO", "Owns canonical routes and structured data", "Change a claim's meaning"],
  ["Accessibility and QA", "Signs off interaction and assistive-technology coverage", "Waive a failed test"],
];

export default function GovernanceApprovalsSection() {
  return (
    <section id="governance-approvals" className="relative w-full px-[160px] overflow-hidden bg-[#071426] py-[95px]">
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/machine-agent-identity-guides/desktop-governance-bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(7,20,38,0.9)] to-[rgba(7,20,38,0.95)]" />
      </div>
      <div className="relative mx-auto w-full">
        <div className="flex flex-col gap-[60px]">
          <div className="flex flex-col gap-[12px]">
            <h2 className="font-dm-serif font-normal text-[52px] leading-[57.8px] text-white">
              Who approves what before a guide is published
            </h2>
            <p className="max-w-[980px] pt-[1.3px] font-manrope text-[16px] leading-[25.6px] text-white">
              No single writer decides a technical claim. Each kind of statement has its own approver. A missing approval blocks publication rather than being filled in by guesswork.
            </p>
          </div>
          <div className="overflow-x-auto rounded-[18px] border border-[#e2e8f0] bg-white">
            <table className="w-full min-w-[900px] table-fixed border-collapse text-left font-manrope text-[15px] leading-[24px]">
              <colgroup>
                <col className="w-[26%]" />
                <col className="w-[45%]" />
                <col className="w-[29%]" />
              </colgroup>
              <thead>
                <tr className="bg-[#071426] text-white">
                  <th scope="col" className="border-b border-[#e2e8f0] px-[20px] py-[16px] font-bold">Role</th>
                  <th scope="col" className="border-b border-[#e2e8f0] px-[20px] py-[16px] font-bold">Approves</th>
                  <th scope="col" className="border-b border-[#e2e8f0] px-[20px] py-[16px] font-bold">Cannot do alone</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([role, approves, cannot], i) => {
                  const last = i === rows.length - 1;
                  const cell = last
                    ? "px-[20px] pb-[17px] pt-[16px]"
                    : "border-b border-[#e2e8f0] px-[20px] py-[16px]";
                  return (
                    <tr key={role}>
                      <th scope="row" className={`${cell} font-bold text-[#07111f]`}>{role}</th>
                      <td className={`${cell} font-normal text-[#334155]`}>{approves}</td>
                      <td className={`${cell} font-normal text-[#334155]`}>{cannot}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
