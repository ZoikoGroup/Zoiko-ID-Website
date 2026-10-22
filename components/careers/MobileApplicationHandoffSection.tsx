import Image from "next/image";
import type { ReactNode } from "react";

const steps: { icon: string; title: string; text: ReactNode; badgeIcon: string; badge: string; nowrap?: boolean }[] = [
  { icon: "search-1", title: "Read the role", text: "The full role page, with its disclosures.", badgeIcon: "clock-2", badge: "Available once published" },
  { icon: "send", title: "Apply via the role link", text: "An official, verified destination for that role.", badgeIcon: "clock-2", badge: "Available once published" },
  { icon: "globe-1", title: "Leave the site clearly", text: <>External applications are announced<br />before you go.</>, badgeIcon: "info-3", badge: "Destination pending verification" },
  { icon: "inbox", title: "Confirmation from the provider", text: <>Receipt is issued by the application<br />system, not by this page.</>, badgeIcon: "info-3", badge: "Owned by the provider", nowrap: true },
];

export default function MobileApplicationHandoffSection() {
  return (
    <section id="apply" className="bg-[#f4f7fb] px-[22px] py-[60px] lg:hidden">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[60px]">
        <div className="flex w-full flex-col items-start gap-[15px]">
          <div className="flex h-[19.8px] w-full items-center gap-[12px]">
            <span className="h-[2px] w-[36px] bg-[#22b8d6]" />
            <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[2.16px] text-[#1d4ed8]">
              Application handoff
            </p>
          </div>
          <h2 className="w-full pb-[0.745px] pt-[1.915px] font-dm-serif text-[32px] font-normal leading-[35.84px] tracking-[-0.16px] text-[#0b1b33]">
            How applying will work,<br />once a role is live
          </h2>
          <p className="w-full max-w-[700px] pb-[0.715px] font-manrope text-[18px] font-normal leading-[29.7px] text-[#5b6b82]">
            Applications go to the approved destination<br />for each role. Zoiko iD does not run its own<br />applicant database, and no application is<br />accepted through this page.
          </p>

          <ol className="relative flex w-full flex-col items-start pl-[12px] pt-[25px]">
            <span aria-hidden="true" className="absolute bottom-[10px] left-[33px] top-[35px] w-[2px]">
              <Image src="/careers/mobile-divider-vertical.png" alt="" fill sizes="2px" className="object-cover" />
            </span>
            {steps.map((s, i) => (
              <li key={s.title} className={`flex w-full items-start gap-[24px] ${i < steps.length - 1 ? "pb-[34px]" : ""}`}>
                <span className="relative z-10 flex size-[44px] shrink-0 items-center justify-center rounded-full border-2 border-[#1d4ed8] bg-white">
                  <Image src={`/careers/mobile-icon-${s.icon}.svg`} width={20} height={20} alt="" />
                </span>
                <div className="flex min-w-px flex-1 flex-col items-start gap-[5px] pb-[5.48px] pt-[8px]">
                  <h3 className={`w-full font-manrope text-[18px] font-bold leading-[24.3px] text-[#0b1b33] ${s.nowrap ? "whitespace-nowrap" : ""}`}>
                    {s.title}
                  </h3>
                  <p className="w-full font-manrope text-[14px] font-normal leading-[23.1px] text-[#5b6b82]">{s.text}</p>
                  <div className="flex h-[24.8px] items-center gap-[6px]">
                    <Image src={`/careers/mobile-icon-${s.badgeIcon}.svg`} width={14} height={14} alt="" className="mt-[5px] shrink-0" />
                    <span className="mt-[3px] font-manrope text-[12px] font-bold leading-[19.8px] text-[#92400e]">{s.badge}</span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex w-full flex-col items-start gap-[22px]">
          <div className="relative h-[420px] w-full overflow-hidden rounded-[22px]">
            <Image
              src="/careers/mobile-application-form.webp"
              alt="Application form on a screen"
              fill
              sizes="(max-width: 560px) 100vw, 560px"
              className="object-cover"
            />
          </div>
          <div className="flex w-full items-start gap-[14px] rounded-[16px] bg-[#f4f7fb] p-[22px]">
            <span className="flex h-[26px] w-[24px] shrink-0 items-start pt-[2px]">
              <Image src="/careers/mobile-icon-shield-2.svg" width={24} height={24} alt="" />
            </span>
            <p className="whitespace-nowrap font-manrope text-[14px] font-normal leading-[23.1px] text-[#334155]">
              <strong className="font-bold">If an application link is broken,</strong> you see<br />
              a recoverable message and a verified<br />
              general contact route. Your details are<br />
              never sent through an unsecured fallback.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
