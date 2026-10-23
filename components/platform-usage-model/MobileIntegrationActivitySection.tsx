import Image from "next/image";

const topics = [
  {
    icon: "/platform-usage-model/mobile-icon-api-integration.svg",
    title: "API integration",
    body: "How applications request decisions and services.",
  },
  {
    icon: "/platform-usage-model/mobile-icon-federation.svg",
    title: "Federation",
    body: "How existing identity providers connect.",
  },
  {
    icon: "/platform-usage-model/mobile-icon-authority.svg",
    title: "Credential flows",
    body: "How credentials are issued, presented and checked.",
  },
];

export default function MobileIntegrationActivitySection() {
  return (
    <section id="topics" className="px-[22px] py-[60px] lg:hidden">
      <div className="mx-auto w-full max-w-[560px]">
        <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[#2563eb]">
          Integration and activity
        </p>
        <h2 className="font-manrope text-[28px] font-extrabold leading-[33px] tracking-[-0.28px] text-[#2563eb]">
          Design topics, with deep links to documentation
        </h2>
        <p className="font-manrope max-w-[780px] pt-[12px] text-[15px] leading-[24px] text-[#64748b]">
          Support status comes from the governed capability registry. Endpoint examples are not shown on this page.
        </p>
        <ul className="flex list-none flex-col gap-[20px] pt-[44px]">
          {topics.map((t) => (
            <li
              key={t.title}
              className="flex flex-col gap-[10px] overflow-clip rounded-[22px] border border-solid border-[#e2e8f0] bg-white p-[30px]"
            >
              <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e0f2fe]">
                <Image src={t.icon} width={20} height={20} alt="" />
              </div>
              <p className="font-manrope pb-[6px] text-[16px] font-bold leading-[25.6px] text-[#2563eb]">
                {t.title}
              </p>
              <p className="font-manrope text-[14px] leading-[22.4px] text-[#64748b]">{t.body}</p>
              <div className="rounded-[10px] bg-[#f5f7fa] px-[12px] pb-[9.19px] pt-[8px]">
                <p className="font-manrope text-[12px] leading-[19.2px] text-[#2563eb]">
                  Status: confirm in registry
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
