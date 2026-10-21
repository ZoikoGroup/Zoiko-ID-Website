import Image from "next/image";
import Eyebrow from "./MobileEyebrow";

const items = [
  ["overlay-identity-provider.svg", "Existing identity provider", "Continues to authenticate people and services.", "Your system"],
  ["icon-service.svg", "Workload platform", "Runs the services and jobs that act.", "Your system"],
  ["overlay-policy-point.svg", "Policy point", "Evaluates the request against current rules.", "Intended design"],
  ["overlay-downstream-services.svg", "Downstream services", "Receive only requests that are in bounds.", "Your system"],
];

export default function EnterpriseIntegrationSection() {
  return (
    <section id="integration" className="w-full px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[12px]">
        <Eyebrow>Enterprise integration</Eyebrow>
        <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">Overlay, not replacement</h2>
        <p className="max-w-[820px] pt-[1.39px] font-manrope text-[16px] leading-[25.6px] text-[color:#64748b]">
          A conceptual map of how an existing identity provider, a workload platform, a policy point and downstream services relate. It names no providers and claims no protocol support.
        </p>
        <ul className="w-full overflow-clip rounded-[18px] border border-solid border-[#e2e8f0] bg-white pt-[28px]">
          {items.map(([icon, title, text, tag]) => (
            <li key={title} className="flex flex-col items-start gap-[5px] border-b border-solid border-[#e2e8f0] px-[22px] py-[26px]">
              <div className="flex w-[44px] items-center justify-center rounded-[12px] bg-[#e0f2fe] py-[11px]">
                <Image src={`/machine-agent-identity-guides/mobile-${icon}`} alt="" width={22} height={22} />
              </div>
              <h3 className="pt-[7px] font-manrope text-[17px] font-bold leading-[27.2px] text-[#2563eb]">{title}</h3>
              <p className="pb-[7.8px] font-manrope text-[13px] leading-[20.8px] text-[color:#64748b]">{text}</p>
              <span className="rounded-full bg-[#f1f5f9] px-[10px] pb-[4.19px] pt-[3px] font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[0.72px] text-[#2563eb]">
                {tag}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex items-start gap-[14px] rounded-br-[12px] rounded-tr-[12px] border-l-4 border-solid border-[#f59e0b] bg-[#fffbeb] pb-[18px] pl-[22px] pr-[22px] pt-[34px]">
          <div className="flex h-[26px] w-[24px] shrink-0 flex-col items-start pt-[2px]">
            <Image src="/machine-agent-identity-guides/mobile-callout-warning.svg" alt="" width={24} height={24} />
          </div>
          <p className="font-manrope text-[15px] leading-[24px] text-[#2563eb]">
            <strong className="font-bold">No protocol or provider claim.</strong> Automatic federation and specific protocol support are not asserted here. Exact interfaces come from the API Reference and Integrations pages, once approved.
          </p>
        </div>
      </div>
    </section>
  );
}
