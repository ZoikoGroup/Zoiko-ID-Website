import Link from "next/link";
import Eyebrow from "./MobileEyebrow";

const fields = [
  ["Actor reference", "[actor-id]"],
  ["Authority source", "[mandate-ref]"],
  ["Policy version", "[policy-version]"],
  ["Context", "[context-summary]"],
  ["Decision time", "[timestamp]"],
  ["Later change", "[change-ref, if any]"],
];

export default function EvidencePrivacySection() {
  return (
    <section id="evidence" className="w-full bg-[#f1f5f9] px-[22px] pb-[60px] pt-[120px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[24px]">
        <div className="flex flex-col gap-[28px]">
          <div className="flex flex-col gap-[12px]">
            <Eyebrow>Evidence and privacy</Eyebrow>
            <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
              Explain a decision, without
              <br />
              exposing data
            </h2>
            <p className="max-w-[820px] pb-[6px] pt-[2px] font-manrope text-[16px] leading-[25.6px] text-[color:#64748b]">
              Evidence explains the actor, the authority source, the policy version, the context, the decision time and any later change. The example below is synthetic and uses placeholders only.
            </p>
            <p className="w-fit max-w-full rounded-[8px] bg-[#ede9fe] py-[8px] pl-[12px] pr-[49.28px] font-manrope text-[13px] leading-[20.8px] text-[color:#5b21b6]">
              Synthetic example · placeholders only · not a real record
            </p>
          </div>
          <div className="w-full overflow-clip rounded-[18px] border border-solid border-[#e2e8f0] bg-white">
            <div className="flex items-center justify-between gap-[12px] border-b border-solid border-[#e2e8f0] bg-[#f1f5f9] px-[22px] py-[16px]">
              <h3 className="font-manrope text-[16px] font-bold leading-[25.6px] text-[#2563eb]">
                Decision record
                <br />
                (synthetic)
              </h3>
              <span className="shrink-0 rounded-full bg-[#ede9fe] px-[11px] py-[5px] font-manrope text-[11px] font-extrabold uppercase leading-[17.6px] tracking-[0.88px] text-[color:#5b21b6]">
                Illustrative
              </span>
            </div>
            <dl>
              {fields.map(([label, value], i) => (
                <div
                  key={label}
                  className={`px-[22px] py-[14px] ${i < fields.length - 1 ? "border-b border-solid border-[#e2e8f0]" : ""}`}
                >
                  <dt className="font-manrope text-[14px] font-bold leading-[22.4px] text-[#2563eb]">{label}</dt>
                  <dd className="font-['Courier_New'] text-[13px] leading-[20.8px] text-[color:#64748b]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <p className="font-manrope text-[14px] leading-[22.4px] text-[color:#64748b]">
          <Link
            href="/trust-center"
            className="mr-[19px] rounded-sm text-[15px] font-bold leading-[24px] text-[color:#2563eb] outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
          >
            Evidence &amp; Audit →
          </Link>
          No customer evidence, secrets or fingerprintable identifiers appear here.
        </p>
      </div>
    </section>
  );
}
