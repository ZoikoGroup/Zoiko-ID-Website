import Image from "next/image";

export default function SecurityRouteMapSection() {
  const destinations = [
    {
      name: "Vulnerabilities",
      icon: "/security-contact/routemap-vulnerabilities.svg",
    },
    {
      name: "Advisories",
      icon: "/security-contact/routemap-advisories.svg",
    },
    {
      name: "Status",
      icon: "/security-contact/routemap-status.svg",
    },
    {
      name: "Trust Center",
      icon: "/security-contact/routemap-trust.svg",
    },
    {
      name: "Privacy",
      icon: "/security-contact/routemap-privacy.svg",
    },
    {
      name: "Support",
      icon: "/security-contact/routemap-support.svg",
    },
  ];

  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-12 sm:py-20 lg:px-[160px] lg:py-[105px]">
        <div className="grid grid-cols-1 items-center gap-[50px] lg:grid-cols-[533px_minmax(0,1fr)]">
          {/* Left Column: Router Diagram */}
          <div className="flex flex-col gap-12 max-w-[533px]">
            <div className="flex flex-col gap-3">
              <h2 className="font-[family-name:var(--font-dm-serif-display-family)] text-3xl sm:text-4xl lg:text-[52px] font-normal lg:leading-[57.8px] text-[#0B1B33] max-w-[451px]">
                One entry point,<br />
                six destinations
              </h2>
              <div className="pt-[1.8px]">
                <p className="max-w-[480px] font-[family-name:var(--font-manrope-family)] text-[16px] font-normal leading-[25.6px] text-[#64748B]">
                  This page does not hold your case. It sends you to the owner.<br className="hidden sm:inline" />
                  Each spoke below is a separate system with its own rules and<br className="hidden sm:inline" />
                  records.
                </p>
              </div>
            </div>

            {/* Hub and Spokes Container */}
            <div className="flex flex-col items-center gap-[26px] rounded-[22px] border border-[#E2E8F0] bg-white p-6 sm:p-[34px]">
              {/* Central Hub */}
              <div className="flex w-full max-w-[465px] flex-col items-center justify-center gap-[3px] rounded-[18px] bg-[#071426] px-6 py-[22px]">
                <span className="font-[family-name:var(--font-dm-serif-display-family)] text-[20px] font-normal leading-[32px] text-white">
                  Security contact
                </span>
                <span className="font-[family-name:var(--font-manrope-family)] text-[13px] font-normal leading-[20.8px] text-[#94A3B8]">
                  Intent router
                </span>
              </div>

              {/* 6 Destination Spokes */}
              <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-3">
                {destinations.map((dest, idx) => (
                  <div
                    key={idx}
                    className="flex h-[52.4px] items-center gap-[10px] rounded-[12px] border border-[#E2E8F0] px-[14px]"
                  >
                    <Image
                      src={dest.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="shrink-0"
                    />
                    <span className="font-[family-name:var(--font-manrope-family)] text-[14px] font-bold leading-[22.4px] text-[#0B1B33]">
                      {dest.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Global Network Visual */}
          <div className="relative h-[320px] w-full overflow-hidden rounded-[20px] sm:h-[380px] lg:h-[420px] shadow-sm">
            <Image
              src="/security-contact/route-network.png"
              alt="Global network of connected nodes"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
