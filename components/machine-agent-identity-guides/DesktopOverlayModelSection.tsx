import Image from "next/image";

const items = [
  ["overlay-identity-provider.svg", "Existing identity provider", "Continues to authenticate people and services.", "Your system"],
  ["icon-service.svg", "Workload platform", "Runs the services and jobs that act.", "Your system"],
  ["overlay-policy-point.svg", "Policy point", "Evaluates the request against current rules.", "Intended design"],
  ["overlay-downstream-services.svg", "Downstream services", "Receive only requests that are in bounds.", "Your system"],
];

export default function OverlayModelSection() {
  return (
    <section className="w-full bg-white py-[105px] px-[160px]">
      <div className="mx-auto flex w-full flex-col gap-[60px]">
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-[52px] font-normal leading-[57.9px] text-[#07111f]">Overlay, not replacement</h2>
          <p className="max-w-[820px] pt-[1.3px] font-manrope text-[16px] leading-[25.6px] text-[#64748b]">
            A conceptual map of how an existing identity provider, a workload platform, a policy point and downstream services relate. It names no providers and claims no protocol support.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <ul className="flex items-stretch overflow-hidden rounded-[18px] border border-[#e2e8f0] bg-white">
            {items.map(([icon, title, desc, tag], i) => (
              <li
                key={title}
                className={`flex min-w-0 flex-1 flex-col items-start gap-[5px] px-[22px] py-[26px] ${i < items.length - 1 ? "border-r border-[#e2e8f0]" : ""}`}
              >
                <div className="flex w-[44px] items-center justify-center rounded-[12px] bg-[#e0f2fe] py-[11px]">
                  <Image src={`/machine-agent-identity-guides/desktop-${icon}`} alt="" width={22} height={22} className="size-[22px]" />
                </div>
                <h3 className="w-full pt-[7px] font-manrope text-[17px] font-bold leading-[27.2px] text-[#07111f]">{title}</h3>
                <p className="w-full pb-[7.8px] font-manrope text-[13px] leading-[20.8px] text-[#64748b]">{desc}</p>
                <span className="mt-auto rounded-full bg-[#f1f5f9] px-[10px] pb-[4.2px] pt-[3px] font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[0.72px] text-[#07111f]">
                  {tag}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex items-start gap-[14px] rounded-br-[12px] rounded-tr-[12px] border-l-4 border-[#f59e0b] bg-[#fffbeb] px-[22px] py-[18px]">
            <div className="flex h-[26px] w-6 shrink-0 flex-col pt-[2px]">
              <Image src="/machine-agent-identity-guides/desktop-callout-warning.svg" alt="" width={24} height={24} className="size-6" />
            </div>
            <p className="font-manrope text-[15px] leading-6 text-[#07111f]">
              <strong className="font-bold">No protocol or provider claim.</strong>
              <span className="font-normal">{" Automatic federation and specific protocol support are not asserted here. Exact interfaces come from the API Reference and Integrations pages, once approved."}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
