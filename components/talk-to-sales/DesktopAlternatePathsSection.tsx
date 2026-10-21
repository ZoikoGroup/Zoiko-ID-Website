import Image from "next/image";
import Link from "next/link";

const paths = [
  {
    icon: "/talk-to-sales/desktop-icon-documentation.svg",
    title: "Technical documentation",
    text: "Developer Overview and API Reference.",
    href: "/api-reference",
  },
  {
    icon: "/talk-to-sales/desktop-icon-assurance.svg",
    title: "Assurance",
    text: "Trust Center and Security information.",
    href: "/trust-center",
  },
  {
    icon: "/talk-to-sales/desktop-icon-user-support.svg",
    title: "Existing user support",
    text: "Help & Support for account assistance.",
    href: "/identity-guides",
  },
  {
    icon: "/talk-to-sales/desktop-icon-security-issue.svg",
    title: "Security issue",
    text: "Security Contact or Responsible Disclosure.",
    href: "/security-contact",
  },
];

export default function DesktopAlternatePathsSection() {
  return (
    <section
      id="alternate-paths"
      className="hidden w-full flex-col gap-[60px] bg-white px-[160px] pb-[105px] pt-[104px] lg:flex"
    >
      <h2 className="font-dm-serif text-[52px] font-normal leading-[57.2px] text-[#07111f]">
        Alternate paths for other questions
      </h2>
      <ul className="flex w-full items-start justify-center gap-[16px]">
        {paths.map((p) => (
          <li key={p.title} className="min-w-px flex-1 self-stretch">
            <div className="flex h-full flex-col items-start gap-[8px] rounded-[18px] bg-[#f8fafc] p-[24px]">
              <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[21px] bg-[#ddf6fb]">
                <Image src={p.icon} width={20} height={20} alt="" />
              </div>
              <h3 className="pb-[6px] font-manrope text-[16px] font-bold leading-[25.6px] text-[#07111f]">
                {p.title}
              </h3>
              <p className="font-manrope text-[14px] font-normal leading-[22.4px] text-[#64748b]">
                {p.text}
              </p>
              <Link
                href={p.href}
                className="font-manrope text-[14px] font-bold leading-[22.4px] text-[#1d4ed8] transition-transform hover:-translate-y-0.5 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2"
              >
                Open →
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
