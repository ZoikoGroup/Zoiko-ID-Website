const record = [
  ["Actor reference", "[actor-id]"],
  ["Authority source", "[mandate-ref]"],
  ["Policy version", "[policy-version]"],
  ["Context", "[context-summary]"],
  ["Decision time", "[timestamp]"],
  ["Later change", "[change-ref, if any]"],
];

export default function EvidenceSection() {
  return (
    <section className="w-full bg-[#071426] py-[105px] px-[160px]">
      <div className="mx-auto flex w-full items-center justify-center gap-7">
        <div className="flex min-w-0 flex-1 flex-col items-start gap-[11.5px]">
          <h2 className="font-dm-serif text-[52px] font-normal leading-[57.9px] text-white">
            Explain a decision, without exposing data
          </h2>
          <p className="max-w-[820px] pb-[6.5px] pt-[2.5px] font-manrope text-[16px] leading-[25.6px] text-white">
            Evidence explains the actor, the authority source, the policy version, the context, the decision time and any later change. The example below is synthetic and uses placeholders only.
          </p>
          <span className="rounded-[8px] bg-[#ede9fe] px-3 py-2 font-manrope text-[13px] leading-[20.8px] text-[#5b21b6]">
            Synthetic example · placeholders only · not a real record
          </span>
        </div>
        <div className="min-w-0 flex-1 overflow-hidden rounded-[18px] border border-[#e2e8f0] bg-white">
          <div className="flex items-center justify-between gap-4 border-b border-[#e2e8f0] bg-[#f1f5f9] px-[22px] py-4">
            <h3 className="font-manrope text-[16px] font-bold leading-[25.6px] text-[#07111f]">Decision record (synthetic)</h3>
            <span className="rounded-full bg-[#ede9fe] px-[11px] py-[5px] font-manrope text-[11px] font-extrabold uppercase leading-[17.6px] tracking-[0.88px] text-[#5b21b6]">
              Illustrative
            </span>
          </div>
          <dl>
            {record.map(([k, v], i) => (
              <div
                key={k}
                className={`flex items-end px-[22px] pb-[14px] pt-[13px] ${i < record.length - 1 ? "border-b border-[#e2e8f0]" : ""}`}
              >
                <dt className="w-[200px] shrink-0 font-manrope text-[14px] font-bold leading-[22.4px] text-[#07111f]">{k}</dt>
                <dd className="min-w-0 flex-1 pb-[2.4px] font-['Courier_New'] text-[13px] leading-[20.8px] text-[#64748b]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
