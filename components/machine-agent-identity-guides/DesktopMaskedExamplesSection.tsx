import Image from "next/image";

const rows = [
  ["Agent reference", "agt-XXXX-masked"],
  ["Sponsor reference", "sps-XXXX-masked"],
  ["Workload reference", "wkl-XXXX-masked"],
  ["Secret value", "[not shown]"],
  ["Tenant", "[not shown]"],
];

export default function MaskedExamplesSection() {
  return (
    <section id="masked-examples" className="w-full px-[160px] bg-[#071426] py-[105px]">
      <div className="mx-auto w-full">
        <div className="flex items-center justify-center gap-[50px]">
          <div className="flex min-w-0 flex-1 flex-col gap-[11.5px]">
            <h2 className="font-dm-serif font-normal text-[52px] leading-[51.92px] text-white">
              Teaching examples use masked, synthetic values
            </h2>
            <p className="max-w-[820px] pb-[12.5px] pt-[1.8px] font-manrope text-[16px] leading-[25.6px] text-white">
              Examples show the shape of a record without exposing a real identity, tenant or secret. Every identifier below is a placeholder.
            </p>
            <div className="flex items-start gap-[14px] rounded-br-[12px] rounded-tr-[12px] border-l-4 border-[#f59e0b] bg-[#fffbeb] px-[22px] py-[18px]">
              <div className="flex h-[26px] w-[24px] shrink-0 flex-col pt-[2px]">
                <Image src="/machine-agent-identity-guides/desktop-callout-warning.svg" width={24} height={24} alt="" />
              </div>
              <p className="font-manrope text-[15px] leading-[24px] text-[#07111f]">
                <strong className="font-bold">Never copy a real value into an example.</strong>
                <span className="font-normal"> Real identifiers, tokens and customer records are excluded from every guide.</span>
              </p>
            </div>
          </div>
          <div className="min-w-0 flex-1 overflow-hidden rounded-[18px] border border-[#e2e8f0] bg-white">
            <div className="border-b border-[#e2e8f0] bg-[#071426] px-[20px] py-[14px] font-manrope text-[13px] font-extrabold uppercase leading-[20.8px] tracking-[0.78px] text-white">
              Masked example, synthetic
            </div>
            <dl>
              {rows.map(([label, value], i) => (
                <div
                  key={label}
                  className={`flex items-end px-[20px] pb-[14px] pt-[13px] ${i < rows.length - 1 ? "border-b border-[#e2e8f0]" : ""}`}
                >
                  <dt className="w-[180px] shrink-0 font-manrope text-[14px] font-bold leading-[22.4px] text-[#07111f]">{label}</dt>
                  <dd className="min-w-0 flex-1 pb-[2.39px] font-['Courier_New'] text-[13px] leading-[20.8px] text-[#64748b]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
