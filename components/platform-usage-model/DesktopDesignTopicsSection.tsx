import Image from "next/image";
import Link from "next/link";

const topics = [
  {
    title: "API integration",
    body: "How applications request decisions and services.",
    icon: "/platform-usage-model/desktop-icon-api-integration.svg",
    href: "/apis-integrations",
  },
  {
    title: "Federation",
    body: "How existing identity providers connect.",
    icon: "/platform-usage-model/desktop-icon-federation.svg",
    href: "/architecture-guides",
  },
  {
    title: "Credential flows",
    body: "How credentials are issued, presented and checked.",
    icon: "/platform-usage-model/desktop-icon-authority.svg",
    href: "/identity-guides",
  },
];

export default function DesktopDesignTopicsSection() {
  return (
    <section
      id="topics"
      className="hidden lg:flex flex-col items-start gap-[60px] bg-[#071426] px-[160px] py-[105px]"
    >
      <div className="flex w-full flex-col items-start">
        <h2 className="max-w-[715px] font-dm-serif font-normal text-[52px] leading-[58.8px] tracking-[-0.38px] text-white">
          Design topics, with deep links to documentation
        </h2>
        <p className="max-w-[780px] pt-[12px] font-manrope text-[15px] leading-[24px] text-white">
          Support status comes from the governed capability registry. Endpoint examples are not shown on this page.
        </p>
      </div>
      <ul className="grid w-full grid-cols-3 gap-[20px]">
        {topics.map((t) => (
          <li key={t.title}>
            <Link
              href={t.href}
              className="flex h-[209px] flex-col items-start gap-[10px] overflow-clip rounded-[22px] border border-solid border-[#e2e8f0] bg-white p-[30px] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
            >
              <span className="flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e0f2fe]">
                <Image src={t.icon} width={20} height={20} alt="" />
              </span>
              <span className="w-full pb-[6px] font-manrope text-[16px] font-bold leading-[25.6px] text-[#07111f]">
                {t.title}
              </span>
              <span className="w-full font-manrope text-[14px] leading-[22.4px] text-[#64748b]">
                {t.body}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
