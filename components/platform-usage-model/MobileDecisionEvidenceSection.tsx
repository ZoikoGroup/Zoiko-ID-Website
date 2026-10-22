const nodes = [
  { pos: "left-1/2 top-0 -translate-x-1/2", title: "1 · Identify", body: "Establish the actor" },
  { pos: "right-0 top-1/2 -translate-y-1/2", title: "2 · Authority", body: "Scope the action" },
  { pos: "bottom-0 left-1/2 -translate-x-1/2", title: "3 · Policy", body: "Apply current rules" },
  { pos: "left-0 top-1/2 -translate-y-1/2", title: "5 · Evidence", body: "Keep a governed record" },
];

const stages = [
  { title: "1 · Identify", body: "Establish the actor." },
  { title: "2 · Establish authority", body: "Scope the permitted action." },
  { title: "3 · Evaluate policy", body: "Apply current rules." },
  { title: "4 · Respond to change", body: "Re-evaluate on new signals." },
  { title: "5 · Preserve evidence", body: "Keep a governed record." },
];

export default function MobileDecisionEvidenceSection() {
  return (
    <section id="stages" className="px-[22px] pb-[60px] pt-[33px] lg:hidden">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-center gap-[81px]">
        <div
          className="relative size-[276px] shrink-0"
          role="img"
          aria-label="Decision and evidence lifecycle: identify, authority, policy, evidence"
        >
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#cbd5e1]" />
          <div className="absolute inset-0 flex items-center justify-center p-[72px]">
            <div className="flex flex-col items-center gap-[1.84px] pb-[0.52px] text-center">
              <p className="font-manrope w-[104px] text-[9.6px] font-bold leading-[15.36px] text-[#2563eb]">
                Decision and evidence lifecycle
              </p>
              <p className="font-manrope w-[130px] text-[7.8px] leading-[12.48px] text-[#64748b]">
                Conceptual · no timing or retention claim
              </p>
            </div>
          </div>
          {nodes.map((n) => (
            <div
              key={n.title}
              className={`absolute flex size-[79.2px] flex-col items-center justify-center rounded-full border border-solid border-[#e2e8f0] bg-white px-[9.2px] text-center drop-shadow-[0px_10px_15px_rgba(7,20,38,0.06)] ${n.pos}`}
            >
              <p className="font-manrope whitespace-nowrap text-[9px] font-bold leading-[14.4px] text-[#2563eb]">
                {n.title}
              </p>
              <p className="font-manrope pt-[3.155px] text-[7.2px] leading-[11.52px] text-[#64748b]">
                {n.body}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full">
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[#2563eb]">
            Lifecycle
          </p>
          <h2 className="font-manrope text-[28px] font-extrabold leading-[33px] tracking-[-0.28px] text-[#2563eb]">
            Five stages, read in order
          </h2>
          <ol className="flex list-none flex-col gap-[14px] pt-[22px]">
            {stages.map((s) => (
              <li
                key={s.title}
                className="flex flex-col gap-[2.5px] rounded-[16px] border border-solid border-[#e2e8f0] bg-white px-[22px] py-[18px]"
              >
                <p className="font-manrope text-[15px] font-bold leading-[24px] text-[#2563eb]">{s.title}</p>
                <p className="font-manrope pb-[0.8px] text-[13px] leading-[20.8px] text-[#64748b]">{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="font-manrope pt-[18px] text-[14px] leading-[22.4px] text-[#64748b]">
            Authentication is not authority, and evidence is not surveillance. No real-time speed, retention duration or cryptographic property is claimed.
          </p>
        </div>
      </div>
    </section>
  );
}
