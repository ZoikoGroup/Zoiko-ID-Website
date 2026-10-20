import Image from "next/image";

export default function SecurityStatusBox() {
  const photoStrip = [
    {
      image: "/security-contact/photo-strip-circuit.png",
      alt: "Abstract circuit board",
      icon: "/security-contact/strip-icon-monitored.svg",
      text: "Monitored components",
    },
    {
      image: "/security-contact/photo-strip-dashboard.png",
      alt: "Analytics dashboard on a screen",
      icon: "/security-contact/strip-icon-timestamps.svg",
      text: "Timestamps shown",
    },
    {
      image: "/security-contact/photo-strip-support.png",
      alt: "Support team at work",
      icon: "/security-contact/strip-icon-support.svg",
      text: "Support routes",
    },
    {
      image: "/security-contact/photo-strip-whiteboard.png",
      alt: "Team planning at a whiteboard",
      icon: "/security-contact/strip-icon-maintenance.svg",
      text: "Planned maintenance",
    },
  ];

  const restrictedItems = [
    {
      icon: "/security-contact/warning-badge-passwords.svg",
      text: "Passwords",
    },
    {
      icon: "/security-contact/warning-badge-apikeys.svg",
      text: "API keys and tokens",
    },
    {
      icon: "/security-contact/warning-badge-privatekeys.svg",
      text: "Private keys",
    },
    {
      icon: "/security-contact/warning-badge-exploits.svg",
      text: "Exploit code or payloads",
    },
  ];

  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-6 pb-12 sm:px-12 sm:pb-16 lg:px-[160px] lg:pb-[48px]">
        <div className="mx-auto max-w-[1120px]">
          {/* Top Photo Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-t-[20px] shadow-sm">
            {photoStrip.map((item, idx) => (
              <div key={idx} className="relative h-[197px] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                  className="object-cover"
                />
                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 flex items-center gap-2 px-[18px] pb-[14px] pt-[23.5px]">
                  <Image
                    src={item.icon}
                    alt=""
                    width={18}
                    height={18}
                    className="shrink-0 drop-shadow"
                  />
                  <span className="font-[family-name:var(--font-manrope-family)] text-[14px] font-bold leading-[22.4px] text-white drop-shadow">
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Warning Status Box */}
          <div className="flex flex-col gap-7 rounded-b-[22px] border border-t-0 border-[#E2E8F0] bg-white p-6 sm:p-9 lg:p-[36px_40px] shadow-[0px_18px_44px_0px_rgba(7,20,38,0.07)]">
            {/* Top row: Warning icon + text */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-[26px]">
              <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[16px] bg-[#FFFBEB]">
                <Image
                  src="/security-contact/warning-icon.svg"
                  alt="Warning notice"
                  width={30}
                  height={30}
                />
              </div>

              <div className="flex flex-col gap-[6px] max-w-[833px]">
                <h3 className="font-[family-name:var(--font-dm-serif-display-family)] text-[22px] sm:text-[24px] font-normal leading-[30px] text-[#0B1B33]">
                  Do not send passwords, tokens, private keys, personal records or exploit payloads through ordinary contact fields.
                </h3>
                <p className="font-[family-name:var(--font-manrope-family)] text-[15px] font-normal leading-[24px] text-[#64748B]">
                  This page is not an emergency line. For an active incident affecting your operations, use the routes below and follow your own escalation process.
                </p>
              </div>
            </div>

            {/* Bottom Row: 4 Restricted badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px] pt-1">
              {restrictedItems.map((badge, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-[10px] rounded-[12px] bg-[#FEF2F2] px-4 py-[15.5px]"
                >
                  <Image
                    src={badge.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="shrink-0"
                  />
                  <span className="font-[family-name:var(--font-manrope-family)] text-[14px] font-normal leading-[22.4px] text-[#7F1D1D] whitespace-nowrap">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
