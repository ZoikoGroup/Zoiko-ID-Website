import Image from "next/image";
import Eyebrow from "./MobileEyebrow";

const rows: { concept: string; asks: string; not: string }[] = [
  { concept: "Actor identity", asks: "Who or|what is|this|actor?", not: "Whether|the actor|may act|now" },
  { concept: "Authentication", asks: "Did the|presented|identity|check|pass?", not: "Whether|a|requested|action is|permitted" },
  { concept: "Policy and|authority", asks: "Is this|action|permitted,|in this|scope,|now?", not: "Why a|past|decision|was|made" },
  { concept: "Evidence", asks: "Why and|when was|a|decision|made?", not: "Whether|the|authority|is still|current" },
];

function Lines({ text }: { text: string }) {
  return (
    <>
      {text.split("|").map((line, i, arr) => (
        <span key={i}>
          {line}
          {i < arr.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}

const th =
  "border-b border-solid border-[#e2e8f0] bg-[#f1f5f9] px-[20px] py-[18px] text-left align-top font-manrope text-[15px] font-bold leading-[24px] whitespace-nowrap text-[#2563eb]";
const td =
  "px-[20px] py-[18px] align-top font-manrope text-[15px] leading-[24px] whitespace-nowrap text-[color:#334155]";

export default function IdentityVersusAuthoritySection() {
  return (
    <section id="identity-vs-authority" className="w-full bg-[#f1f5f9] px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[12px]">
        <Eyebrow>Identity versus authority</Eyebrow>
        <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
          Four questions, four
          <br />
          different answers
        </h2>
        <p className="max-w-[820px] pt-[2.01px] font-manrope text-[16px] leading-[25.6px] text-[color:#64748b]">
          Identity, authentication, authority and evidence each answer a different question. Authentication alone does not make an agent safe to act.
        </p>
        <div className="w-full max-w-[347px] overflow-x-auto overflow-y-clip rounded-[18px] border border-solid border-[#e2e8f0] bg-white pb-[16px] pt-[28px]">
          <table className="w-[358.44px] table-fixed border-separate border-spacing-0">
            <colgroup>
              <col className="w-[145px]" />
              <col className="w-[106.72px]" />
              <col className="w-[106.72px]" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" className={th}>
                  Concept
                </th>
                <th scope="col" className={th}>
                  <Lines text="Question|it|answers" />
                </th>
                <th scope="col" className={th}>
                  <Lines text="What it|does not|answer" />
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => {
                const b = i < rows.length - 1 ? "border-b border-solid border-[#e2e8f0]" : "";
                return (
                  <tr key={r.concept}>
                    <th
                      scope="row"
                      className={`${b} px-[20px] py-[18px] text-left align-top font-manrope text-[15px] font-bold leading-[24px] whitespace-nowrap text-[#2563eb]`}
                    >
                      <Lines text={r.concept} />
                    </th>
                    <td className={`${b} ${td}`}>
                      <Lines text={r.asks} />
                    </td>
                    <td className={`${b} ${td}`}>
                      <Lines text={r.not} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex items-start gap-[14px] rounded-br-[12px] rounded-tr-[12px] border-l-4 border-solid border-[#2563eb] bg-[#eff6ff] px-[22px] py-[18px]">
          <div className="flex h-[26px] w-[24px] shrink-0 flex-col items-start pt-[2px]">
            <Image src="/machine-agent-identity-guides/mobile-callout-info.svg" alt="" width={24} height={24} />
          </div>
          <p className="font-manrope text-[15px] leading-[24px] text-[#2563eb]">
            <strong className="font-bold">Authentication alone does not ensure agent-safe behavior.</strong> A correct identity check still needs a bounded mandate and a current policy decision.
          </p>
        </div>
      </div>
    </section>
  );
}
