import Image from "next/image";
import Link from "next/link";

const PATHS = [
  { title: "Technical documentation", text: "Developer Overview and API Reference.", icon: "documentation", href: "/api-reference" },
  { title: "Assurance", text: "Trust Center and Security information.", icon: "assurance", href: "/trust-center" },
  { title: "Existing user support", text: "Help & Support for account assistance.", icon: "user-support", href: "/identity-guides" },
  { title: "Security issue", text: "Security Contact or Responsible Disclosure.", icon: "security-issue", href: "/security-contact" },
];

export default function MobileAlternatePathsSection() {
  return (
    <section id="alternate-paths" className="w-full bg-[#eef4fb] px-[22px] pb-[60px] pt-[120px] lg:hidden">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[12px]">
        <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[#1d4ed8]">
          Need something else?
        </p>
        <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
          Alternate paths for other questions
        </h2>
        <ul className="flex flex-col gap-[16px] pt-[28px]">
          {PATHS.map((p) => (
            <li key={p.title}>
              <Link
                href={p.href}
                className="flex flex-col items-start gap-[8px] rounded-[18px] bg-[#eef4fb] p-[24px] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]"
              >
                <span className="flex size-[42px] items-center justify-center rounded-[21px] bg-[#ddf6fb]">
                  <Image src={`/talk-to-sales/mobile-icon-${p.icon}.svg`} width={20} height={20} alt="" />
                </span>
                <span className="pb-[6px] font-manrope text-[16px] font-bold leading-[25.6px] text-[#2563eb]">{p.title}</span>
                <span className="font-manrope text-[14px] font-normal leading-[22.4px] text-[#64748b]">{p.text}</span>
                <span className="font-manrope text-[14px] font-bold leading-[22.4px] text-[#1d4ed8]">Open →</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
