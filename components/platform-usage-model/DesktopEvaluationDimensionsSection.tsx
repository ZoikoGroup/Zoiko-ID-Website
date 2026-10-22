const dimensions = [
  { title: "Actor classes", text: "Which principals are in scope" },
  { title: "Workflows", text: "Which access and review flows" },
  { title: "Integrations", text: "Existing providers and applications" },
  { title: "Organizational context", text: "Business units or partners" },
  { title: "Review and evidence", text: "Audit, risk and privacy needs" },
];

export default function DesktopEvaluationDimensionsSection() {
  return (
    <article className="flex h-[512.97px] min-w-0 flex-1 flex-col items-start gap-[10px] overflow-hidden rounded-[22px] border border-[#e2e8f0] bg-white p-[30px]">
      <div className="flex w-full items-center rounded-full bg-[#e0f2fe] px-[11px] py-[5px]">
        <span className="font-manrope text-[11px] font-extrabold uppercase leading-[17.6px] tracking-[0.88px] text-[#0e7490]">Evaluation dimensions</span>
      </div>
      <h3 className="w-full pb-[8px] pt-[9px] font-manrope text-[21px] font-extrabold leading-[26.25px] text-[#07111f]">Questions to discuss, not units to buy</h3>
      <p className="w-full font-manrope text-[14px] leading-[22.4px] text-[#64748b]">
        Selecting a question changes only which resources are suggested. Each is an evaluation question, not a confirmed pricing unit.
      </p>
      <div className="w-full pt-[18px]">
        <ul className="grid h-[238.78px] w-full grid-cols-2 grid-rows-[71.59px_71.59px_71.59px] gap-[12px]">
          {dimensions.map((d) => (
            <li key={d.title} className="flex flex-col items-start gap-[1px] self-start rounded-[12px] bg-[#f5f7fa] p-[14px]">
              <span className="w-full pb-[0.8px] font-manrope text-[13px] font-bold leading-[20.8px] text-[#07111f]">{d.title}</span>
              <span className="font-manrope text-[13px] leading-[20.8px] text-[#334155]">{d.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full rounded-[10px] bg-[#f5f7fa] px-[12px] pb-[9.19px] pt-[8px]">
        <p className="font-manrope text-[12px] leading-[19.2px] text-[#07111f]">Evaluation question — not confirmed pricing unit</p>
      </div>
    </article>
  );
}
