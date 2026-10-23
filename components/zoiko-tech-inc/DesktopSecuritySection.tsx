import Image from "next/image";

const CARDS = [
  { title: "Security", body: "Zoiko iD security principles.", scope: "Scope: Zoiko iD security" },
  { title: "Privacy", body: "Privacy principles and data handling.", scope: "Scope: Zoiko iD privacy" },
  { title: "Trust Center", body: "Approved assurance materials.", scope: "Scope: as published" },
  { title: "Compliance & Standards", body: "Standards posture, with scope.", scope: "Scope: per standard" },
];

export default function DesktopSecuritySection() {
  return (
    <section id="security" className="hidden w-full bg-[#f7f8fa] lg:block">
      <div className="flex w-full flex-col items-start gap-[60px] px-[160px] py-[105px]">
        <div className="flex w-full flex-col items-start gap-[48px]">
          <h2 className="font-dm-serif text-[52px] font-normal leading-[58.6px] text-[#07111f]">
            Designed to complement existing estates <br />
            Review by topic, not by company badge
          </h2>
          <p className="max-w-[819px] pt-[2px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82]">
            The Zoiko iD approach is described as complementary to existing identity estates. It keeps clear boundaries between authentication, authorization and evidence. This page does not describe customer migrations, deployments or specific protocol support.
          </p>
        </div>
        <div className="flex w-full items-center gap-[48px]">
          <div className="relative h-[463px] w-[478px] shrink-0 overflow-hidden rounded-[32px]">
            <div className="absolute left-[-12.56%] top-0 h-full w-[172.58%]">
              <Image
                src="/zoiko-tech-inc/desktop-platform-security.webp"
                alt="Zoiko iD platform security"
                fill
                sizes="825px"
                className="object-fill"
              />
            </div>
          </div>
          <ul className="grid h-[422px] min-w-0 flex-1 grid-cols-2 grid-rows-[186px_191px] gap-[20px]">
            {CARDS.map((c) => (
              <li
                key={c.title}
                className="flex flex-col items-start rounded-[8px] border border-[#dce3ee] bg-white p-[26px]"
              >
                <h3 className="font-manrope text-[17px] font-bold leading-[28px] text-[#07111f]">{c.title}</h3>
                <p className="mt-[7px] w-full font-manrope text-[14px] font-normal leading-[23.1px] text-[#5b6b82]">{c.body}</p>
                <div className="mt-auto w-full rounded-[6px] bg-[#f7f8fa] px-[10px] py-[8px]">
                  <p className="whitespace-nowrap font-manrope text-[12px] font-normal leading-[19.8px] text-[#07111f]">{c.scope}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
