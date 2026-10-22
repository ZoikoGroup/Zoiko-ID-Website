import Image from "next/image";

const steps = [
  {
    icon: "/careers/desktop-icon-search-1.svg",
    title: "Read the role",
    body: "The full role page, with its disclosures.",
    badgeIcon: "/careers/desktop-icon-clock-2.svg",
    badge: "Available once published",
  },
  {
    icon: "/careers/desktop-icon-send.svg",
    title: "Apply via the role link",
    body: "An official, verified destination for that role.",
    badgeIcon: "/careers/desktop-icon-clock-2.svg",
    badge: "Available once published",
  },
  {
    icon: "/careers/desktop-icon-globe-1.svg",
    title: "Leave the site clearly",
    body: "External applications are announced before you go.",
    badgeIcon: "/careers/desktop-icon-info-1.svg",
    badge: "Destination pending verification",
  },
  {
    icon: "/careers/desktop-icon-inbox.svg",
    title: "Confirmation from the provider",
    body: "Receipt is issued by the application system, not by this page.",
    badgeIcon: "/careers/desktop-icon-info-1.svg",
    badge: "Owned by the provider",
  },
];

export default function DesktopApplyingSection() {
  return (
    <section
      id="apply"
      className="hidden w-full bg-[#f8fafc] px-[160px] py-[105px] lg:block"
    >
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] items-start gap-x-[90px]">
        <div className="relative flex flex-col items-start gap-[14.7px]">
          <div className="w-full pt-[2.535px]">
            <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] tracking-[-0.26px] text-[#0b1b33]">
              How applying will <br className="max-xl:hidden" />
              work, once a role is <br className="max-xl:hidden" />
              live
            </h2>
          </div>
          <div className="w-full max-w-[700px]">
            <p className="font-manrope text-[18px] font-normal leading-[29.7px] text-[#5b6b82]">
              Applications go to the approved destination for each role. Zoiko iD does not run its own applicant database, and no application is accepted through this page.
            </p>
          </div>
          <div className="relative w-full pl-[12px] pt-[25.31px]">
            <div
              aria-hidden="true"
              className="absolute bottom-[91.48px] left-[34px] top-[46.96px] w-[2px]"
            >
              <Image
                src="/careers/desktop-divider-vertical.png"
                alt=""
                fill
                sizes="2px"
                className="object-cover"
              />
            </div>
            <ol className="relative m-0 list-none p-0">
              {steps.map((s, i) => (
                <li
                  key={s.title}
                  className={`flex items-start gap-[24px] ${i < steps.length - 1 ? "pb-[34px]" : ""}`}
                >
                  <div className="relative flex size-[44px] shrink-0 items-center justify-center rounded-[22px] border-2 border-solid border-[#1d4ed8] bg-white">
                    <Image src={s.icon} width={20} height={20} alt="" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col items-start gap-[5px] pb-[5.48px] pt-[8px]">
                    <h3 className="font-manrope text-[18px] font-bold leading-[24.3px] text-[#0b1b33]">
                      {s.title}
                    </h3>
                    <p className="font-manrope text-[14px] font-normal leading-[23.1px] text-[#5b6b82]">
                      {s.body}
                    </p>
                    <div className="flex h-[24.8px] items-center gap-[6px]">
                      <Image
                        src={s.badgeIcon}
                        width={14}
                        height={14}
                        alt=""
                        className="mt-[2.5px]"
                      />
                      <span className="font-manrope text-[12px] font-bold leading-[19.8px] text-[#92400e]">
                        {s.badge}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="flex flex-col items-start gap-[22px]">
          <div className="relative h-[420px] w-full rounded-[22px]">
            <Image
              src="/careers/desktop-application-form.webp"
              alt="Person completing an online application form"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="rounded-[22px] object-cover"
            />
          </div>
          <div className="flex w-full items-start gap-[14px] rounded-[16px] bg-[#f4f7fb] p-[22px]">
            <div className="flex h-[26px] w-[24px] shrink-0 items-start pt-[2px]">
              <Image src="/careers/desktop-icon-shield-1.svg" width={24} height={24} alt="" />
            </div>
            <p className="font-manrope text-[14px] leading-[23.1px] text-[#334155] xl:whitespace-nowrap">
              <strong className="font-bold">If an application link is broken,</strong>
              <span className="font-normal">
                {" "}you see a recoverable message and a
              </span>{" "}
              <br className="max-xl:hidden" />
              <span className="font-normal">
                verified general contact route. Your details are never sent through an
              </span>{" "}
              <br className="max-xl:hidden" />
              <span className="font-normal">unsecured fallback.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
