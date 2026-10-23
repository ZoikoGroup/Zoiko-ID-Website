import Image from "next/image";

const dimensions = [
  { title: "Actor classes", body: "Which principals are in scope", cls: "p-[14px]", w: "" },
  { title: "Workflows", body: "Which access and review flows", cls: "p-[14px]", w: "" },
  { title: "Integrations", body: "Existing providers and applications", cls: "px-[14px] pb-[35.495px] pt-[13px]", w: "" },
  { title: "Organizational context", body: "Business units or partners", cls: "p-[14px]", w: "" },
  { title: "Review and evidence", body: "Audit, risk and privacy needs", cls: "p-[14px]", w: "" },
];

export default function MobileEvaluationDimensionsSection() {
  return (
    <section className="px-[11px] pb-[11px] pt-px lg:hidden">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[20px]">
        <div className="relative flex min-h-[665.22px] flex-col gap-[10px] overflow-clip rounded-[22px] border border-solid border-[#e2e8f0] bg-white p-[30px]">
          <div className="flex w-full items-center rounded-full bg-[#e0f2fe] px-[11px] py-[5px]">
            <p className="font-manrope text-[11px] font-extrabold uppercase leading-[17.6px] tracking-[0.88px] text-[#0e7490]">
              Evaluation dimensions
            </p>
          </div>
          <h2 className="font-manrope pb-[8px] pt-[9.125px] text-[21px] font-extrabold leading-[26.25px] text-[#2563eb]">
            Questions to discuss, not units to buy
          </h2>
          <p className="font-manrope text-[14px] leading-[22.4px] text-[#64748b]">
            Selecting a question changes only which resources are suggested. Each is an evaluation question, not a confirmed pricing unit.
          </p>
          <ul className="grid list-none grid-cols-2 items-start gap-[12px] pt-[18px]">
            {dimensions.map((d) => (
              <li
                key={d.title}
                className={`flex flex-col gap-[0.9px] rounded-[12px] bg-[#f5f7fa] ${d.cls}`}
              >
                <p className="font-manrope pb-[0.8px] text-[13px] font-bold leading-[20.8px] text-[#2563eb]">
                  {d.title}
                </p>
                <p className="font-manrope text-[13px] leading-[20.8px] text-[#334155]">{d.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-auto rounded-[10px] bg-[#f5f7fa] px-[12px] pb-[9.19px] pt-[8px]">
            <p className="font-manrope text-[12px] leading-[19.2px] text-[#2563eb]">
              Evaluation question — not confirmed pricing unit
            </p>
          </div>
        </div>

        <div className="relative flex flex-col gap-[10px] overflow-clip rounded-[22px] border border-solid border-[#e2e8f0] bg-white p-[30px]">
          <div className="h-[184px] w-full shrink-0">
            <div className="absolute inset-x-0 top-0 h-[200px]">
              <Image
                src="/platform-usage-model/mobile-principal-classes.webp"
                alt=""
                fill
                sizes="(max-width: 560px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex w-full items-center rounded-full bg-[#ede9fe] px-[11px] py-[5px]">
            <p className="font-manrope text-[11px] font-extrabold uppercase leading-[17.6px] tracking-[0.88px] text-[#5b21b6]">
              Principal classes
            </p>
          </div>
          <p className="font-manrope pb-[6px] pt-[5.295px] text-[16px] font-bold leading-[25.6px] text-[#2563eb]">
            People · organizations · services · machines · AI agents
          </p>
          <p className="font-manrope text-[14px] leading-[22.4px] text-[#64748b]">
            Conceptual classes. No implicit per-seat rate, universal tenancy or unbounded sponsorship.
          </p>
        </div>
      </div>
    </section>
  );
}
