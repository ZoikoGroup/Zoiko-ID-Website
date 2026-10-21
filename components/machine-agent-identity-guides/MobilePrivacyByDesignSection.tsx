import Image from "next/image";

const rows = [
  { label: "Agent reference", value: "agt-XXXX-masked" },
  { label: "Sponsor reference", value: "sps-XXXX-masked" },
  { label: "Workload reference", value: "wkl-XXXX-masked" },
  { label: "Secret value", value: "[not shown]" },
  { label: "Tenant", value: "[not shown]" },
];

export default function PrivacyByDesignSection() {
  return (
    <section id="privacy-by-design" className="w-full bg-[#f1f5f9] px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[50px]">
        <div className="flex flex-col gap-[12px]">
          <div className="flex h-[19.19px] items-center gap-[10px]">
            <span className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
            <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[color:#2563eb]">
              Privacy-by-design examples
            </p>
          </div>
          <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
            Teaching examples use masked, synthetic values
          </h2>
          <p className="max-w-[820px] pt-[2px] font-manrope text-[16px] leading-[25.6px] text-[color:#64748b]">
            Examples show the shape of a record without exposing a real identity, tenant or secret. Every identifier below is a placeholder.
          </p>
          <div className="flex items-start gap-[14px] rounded-br-[12px] rounded-tr-[12px] border-l-4 border-solid border-[#f59e0b] bg-[#fffbeb] px-[22px] pb-[18px] pt-[30px]">
            <div className="flex h-[26px] w-[24px] shrink-0 items-start pt-[2px]">
              <Image
                src="/machine-agent-identity-guides/mobile-callout-warning.svg"
                alt=""
                width={24}
                height={24}
              />
            </div>
            <p className="font-manrope text-[15px] font-normal leading-[24px] text-[#2563eb]">
              <strong className="font-bold">Never copy a real value into an example.</strong> Real identifiers, tokens and customer records are excluded from every guide.
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-[18px] border border-solid border-[#e2e8f0] bg-white">
          <div className="border-b border-solid border-[#e2e8f0] bg-[#f1f5f9] px-[20px] py-[14px]">
            <p className="font-manrope text-[13px] font-extrabold uppercase leading-[20.8px] tracking-[0.78px] text-[#2563eb]">
              Masked example, synthetic
            </p>
          </div>
          <dl>
            {rows.map((r, i) => (
              <div
                key={r.label}
                className={`px-[20px] py-[14px] ${i === rows.length - 1 ? "" : "border-b border-solid border-[#e2e8f0]"}`}
              >
                <dt className="font-manrope text-[14px] font-bold leading-[22.4px] text-[#2563eb]">{r.label}</dt>
                <dd className="font-['Courier_New'] text-[13px] leading-[20.8px] text-[color:#64748b]">{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
