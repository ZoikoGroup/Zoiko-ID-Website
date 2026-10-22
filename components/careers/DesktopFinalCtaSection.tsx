import Image from "next/image";
import Link from "next/link";

const links = [
  {
    href: "/about-us",
    icon: "/careers/desktop-icon-book.svg",
    title: "About Zoiko iD",
    desc: "The product narrative and proposition.",
  },
  {
    href: "/zoiko-tech-inc",
    icon: "/careers/desktop-icon-building.svg",
    title: "Zoiko Tech Inc.",
    desc: "The corporate entity behind the platform.",
  },
  {
    href: "/security-contact",
    icon: "/careers/desktop-icon-mail.svg",
    title: "Contact",
    desc: "Routed contact options. Route pending verification.",
  },
];

const glow = `url("data:image/svg+xml;utf8,<svg viewBox='0 0 625 1064.1' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(42.597 0 0 78.295 312.5 532.06)'><stop stop-color='rgba(34,184,214,0.12)' offset='0'/><stop stop-color='rgba(34,184,214,0)' offset='0.7'/></radialGradient></defs></svg>")`;

export default function DesktopFinalCtaSection() {
  return (
    <section className="flex w-full flex-col items-center bg-white px-[105px] py-[48px]">
      <div className="relative flex w-full max-w-[1250px] flex-col items-center gap-[48px] overflow-clip rounded-[32px] px-[80px] py-[130px]">
        <div aria-hidden className="absolute inset-0 rounded-[32px]">
          <div
            className="absolute inset-0 rounded-[32px]"
            style={{
              backgroundImage:
                "linear-gradient(115.02340550186418deg, rgb(7, 20, 38) 1.8504%, rgb(13, 31, 53) 67.305%, rgba(34, 184, 214, 0.1) 132.76%)",
            }}
          />
          <Image
            src="/careers/desktop-final-cta-bg.webp"
            alt=""
            fill
            sizes="1250px"
            className="rounded-[32px] object-cover opacity-20"
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-[0_-20%_-40%_70%] rounded-[346.74px] blur-[60px]"
          style={{ backgroundImage: glow }}
        />

        <div className="relative flex w-full items-center justify-between">
          <div className="flex w-[567.273px] shrink-0 flex-col items-start gap-[15px]">
            <h2 className="w-full pt-[2.11px] font-dm-serif text-[52px] font-normal leading-[58.24px] tracking-[-0.26px] text-white">
              Learn the platform, then <br className="max-xl:hidden" />
              see what is open.
            </h2>
            <p className="w-full font-manrope text-[17px] font-normal leading-[28px] text-[#c9d3e3]">
              Start with the platform to understand the identity, delegated-authority and evidence
              work. Corporate details are on the company pages.
            </p>
          </div>

          <ul className="flex w-[472.727px] shrink-0 flex-col items-stretch gap-[14px]">
            {links.map((l) => (
              <li key={l.title} className="flex">
                <Link
                  href={l.href}
                  className="flex w-full items-center gap-[16px] rounded-[18px] border border-solid border-[rgba(255,255,255,0.16)] bg-[rgba(255,255,255,0.07)] p-[24px] backdrop-blur-[24px] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[rgba(255,255,255,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22b8d6]"
                >
                  <Image src={l.icon} alt="" width={24} height={24} className="size-[24px] shrink-0" />
                  <span className="flex flex-col">
                    <span className="font-manrope text-[17px] font-bold leading-[22.95px] text-white">
                      {l.title}
                    </span>
                    <span className="font-manrope text-[14px] font-normal leading-[23.1px] text-[#a9b8ce]">
                      {l.desc}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex w-full max-w-[1120px] items-center gap-[24px] rounded-[18px] border border-solid border-[#dce3ee] px-[40px] py-[34px]">
          <div className="flex size-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8]">
            <Image src="/careers/desktop-icon-bulb.svg" alt="" width={26} height={26} className="size-[26px]" />
          </div>
          <p className="font-manrope text-[17px] font-normal leading-[28px] text-[#cfdaec] xl:whitespace-nowrap">
            <span className="font-bold text-white">Interested before a role exists?</span>
            {" Read how the platform works and what problems it addresses. We do not keep speculative "}
            <br className="max-xl:hidden" />
            lists or collect details for future roles.
          </p>
        </div>
      </div>
    </section>
  );
}
