import Image from "next/image";

const rows = [
  ["Actor identity", "Who or what is this actor?", "Whether the actor may act now"],
  ["Authentication", "Did the presented identity check pass?", "Whether a requested action is permitted"],
  ["Policy and authority", "Is this action permitted, in this scope, now?", "Why a past decision was made"],
  ["Evidence", "Why and when was a decision made?", "Whether the authority is still current"],
];

export default function IdentityAuthorityTableSection() {
  return (
    <section className="w-full bg-[#f1f5f9] py-[105px] px-[160px]">
      <div className="mx-auto flex w-full flex-col gap-[60px]">
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-[52px] font-normal leading-[57.9px] text-[#07111f]">
            Four questions, four different answers
          </h2>
          <p className="max-w-[820px] pt-[1.3px] font-manrope text-[16px] leading-[25.6px] text-[#64748b]">
            Identity, authentication, authority and evidence each answer a different question. Authentication alone does not make an agent safe to act.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="overflow-hidden rounded-[18px] border border-[#e2e8f0] bg-white">
            <table className="w-full table-fixed border-collapse text-left">
              <colgroup>
                <col className="w-[24%]" />
                <col className="w-[39.2%]" />
                <col className="w-[36.8%]" />
              </colgroup>
              <thead>
                <tr className="bg-[#071426]">
                  {["Concept", "Question it answers", "What it does not answer"].map((h) => (
                    <th
                      key={h}
                      scope="col"
                      className="border-b border-[#e2e8f0] px-5 py-[18px] font-manrope text-[15px] font-bold leading-6 text-white"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map(([a, b, c], i) => {
                  const last = i === rows.length - 1;
                  const cell = last ? "px-5 pb-[19px] pt-[18px]" : "border-b border-[#e2e8f0] px-5 py-[18px]";
                  return (
                    <tr key={a}>
                      <th scope="row" className={`${cell} align-top font-manrope text-[15px] font-bold leading-6 text-[#07111f]`}>
                        {a}
                      </th>
                      <td className={`${cell} align-top font-manrope text-[15px] font-normal leading-6 text-[#334155]`}>{b}</td>
                      <td className={`${cell} align-top font-manrope text-[15px] font-normal leading-6 text-[#334155]`}>{c}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="flex items-start gap-[14px] rounded-br-[12px] rounded-tr-[12px] border-l-4 border-[#2563eb] bg-[#eff6ff] px-[22px] py-[18px]">
            <div className="flex h-[26px] w-6 shrink-0 flex-col pt-[2px]">
              <Image src="/machine-agent-identity-guides/desktop-callout-info.svg" alt="" width={24} height={24} className="size-6" />
            </div>
            <p className="font-manrope text-[15px] leading-6 text-[#07111f]">
              <strong className="font-bold">Authentication alone does not ensure agent-safe behavior.</strong>
              <span className="font-normal">{" A correct identity check still needs a bounded mandate and a current policy decision."}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
