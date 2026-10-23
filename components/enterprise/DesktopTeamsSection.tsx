import Image from "next/image";

const roles = [
  { icon: "cio", title: "CIO / CTO", body: "Architecture and coexistence with your estate.", cta: "Architecture → talk to an expert" },
  { icon: "ciso", title: "CISO / IAM", body: "Controls for delegation, revocation and trust.", cta: "Security → authority model" },
  { icon: "architect", title: "Architect", body: "Federation, APIs, organization and machine boundaries.", cta: "Architecture → developers" },
  { icon: "ai-lead", title: "AI lead", body: "Sponsorship and bounded action for agents.", cta: "Agent identity → limits → evidence" },
  { icon: "procurement", title: "Procurement", body: "Owner, documentation and the evaluation route.", cta: "Corporate details → sales" },
];

export default function DesktopTeamsSection() {
  return (
    <section
      id="teams"
      className="hidden lg:flex w-full flex-col gap-[60px] bg-[#071426] px-[160px] py-[105px]"
    >
      <h2 className="font-dm-serif font-normal text-[52px] leading-[57.9px] text-white">
        Start from the question your team owns
      </h2>
      <div className="flex flex-col gap-[14px]">
        <ul className="grid h-[420px] grid-cols-3 grid-rows-[205.56px_183.17px]">
          {roles.map((r, i) => {
            const divider = i !== 2;
            return (
              <li key={r.title} className="self-start pr-[30px]">
                <div
                  className={`flex flex-col gap-[6px] pt-[30px] pr-[30px] ${i < 3 ? "pb-[23.48px]" : "pb-[1.09px]"} ${divider ? "border-r border-solid border-[rgba(255,255,255,0.1)]" : ""}`}
                >
                  <div className="flex w-[46px] items-center justify-center rounded-[12px] bg-[rgba(34,184,214,0.14)] py-[12px]">
                    <Image src={`/enterprise/desktop-icon-role-${r.icon}.svg`} width={22} height={22} alt="" />
                  </div>
                  <h3 className="pt-[8px] font-manrope font-bold text-[17px] leading-[27.2px] text-white">{r.title}</h3>
                  <p className="pb-[7.5px] font-manrope text-[14px] leading-[22.4px] text-[#94a3b8]">{r.body}</p>
                  <p className="font-manrope font-bold text-[14px] leading-[22.4px] text-[#22b8d6]">{r.cta}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="relative h-[432px] w-full overflow-hidden rounded-[18px]">
          <Image
            src="/enterprise/desktop-enterprise-adoption.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "50% 92%" }}
          />
        </div>
      </div>
    </section>
  );
}
