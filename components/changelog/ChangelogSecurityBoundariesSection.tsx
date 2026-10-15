import Image from "next/image";
import Link from "next/link";

const securityLinks = [
  {
    icon: "/changelog/icons/icon_334_6905.svg",
    title: "Security advisories",
    description: "Authoritative security disclosures and remediation guidance.",
    href: "#security-advisories",
  },
  {
    icon: "/changelog/icons/icon_334_6914.svg",
    title: "Availability and status",
    description: "Current operational state of Zoiko iD services.",
    href: "#status",
  },
  {
    icon: "/changelog/icons/icon_334_6923.svg",
    title: "Documentation",
    description: "Authoritative product and technical reference.",
    href: "#docs",
  },
];

export default function ChangelogSecurityBoundariesSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-[160px] lg:py-[105px]">
      <div className="mx-auto max-w-[1120px] flex flex-col gap-[40px]">
        {/* Top 2 Columns Grid */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.15fr)] lg:gap-[60px]">
          {/* Left Column: Heading, Subtitle, Links */}
          <div className="flex flex-col items-start gap-[20px]">
            <h2 className="font-dm-serif text-3xl font-normal leading-[1.15] text-[#071426] sm:text-4xl lg:text-[46px] lg:leading-[52.9px]">
              Security and status
              <br />
              are reported
              <br />
              elsewhere
            </h2>

            <p className="font-manrope text-[15px] font-normal leading-[25px] text-[#64748B] sm:text-[16px] sm:leading-[26.4px]">
              This changelog covers governed product and developer changes.
              <br className="hidden sm:inline" />
              It is not a live status page, an incident log, or a security advisory
              <br className="hidden sm:inline" />
              feed. Each of those has its own authoritative source.
            </p>

            {/* 3 Links */}
            <div className="flex w-full flex-col gap-[14px] pt-1">
              {securityLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="flex w-full items-start gap-[14px] rounded-[10px] border border-[#E2E8F0] bg-white-solid p-[16px_18px] transition-colors duration-200 hover:border-[#2563EB]/40 hover:bg-slate-50/50"
                >
                  <div className="flex shrink-0 items-center justify-center pt-0.5">
                    <Image
                      src={link.icon}
                      alt=""
                      width={22}
                      height={22}
                      className="shrink-0"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-manrope text-[16px] font-bold leading-[26.4px] text-[#071426]">
                      {link.title}
                    </h4>
                    <p className="font-manrope text-[14.7px] font-normal leading-[24.29px] text-[#64748B]">
                      {link.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative h-[320px] w-full overflow-hidden rounded-[12px] sm:h-[440px] lg:h-[500px]">
            <Image
              src="/changelog/security-lock-63b063.png"
              alt="Abstract security lock illustration"
              fill
              sizes="(min-width: 1024px) 570px, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Bottom Callout Banner */}
        <div className="flex flex-col items-start justify-between gap-[20px] rounded-[12px] border border-[#22B8D6] bg-[rgba(34,184,214,0.03)] p-6 sm:p-[28px] md:flex-row md:items-center">
          <div className="flex items-start gap-[20px]">
            <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,rgba(34,184,214,0.18)_0%,rgba(34,184,214,0.15)_100%)]">
              <Image
                src="/changelog/icons/icon_334_6936.svg"
                alt=""
                width={34}
                height={34}
                className="shrink-0"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-dm-serif text-[22.4px] font-normal leading-[38px] text-[#071426]">
                Change notifications
              </h3>
              <p className="font-manrope text-[14.7px] font-normal leading-[24.29px] text-[#64748B]">
                Notification subscriptions are not available on this page yet. This section
                <br className="hidden sm:inline" />
                appears only after an approved subscription and consent process is in place.
              </p>
            </div>
          </div>

          <div className="inline-flex shrink-0 items-center gap-[6px] rounded-full bg-[#E2E8F0] px-[12px] py-[6px]">
            <Image
              src="/changelog/icons/icon_334_6945.svg"
              alt=""
              width={11}
              height={11}
              className="shrink-0"
            />
            <span className="font-manrope text-[11px] font-extrabold uppercase tracking-wider text-[#334155]">
              Not yet available
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
