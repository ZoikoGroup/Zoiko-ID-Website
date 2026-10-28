import Image from "next/image";

const points = [
  "Identity for people, organizations, services, machines and AI agents.",
  "Delegated authority with bounded scope and time.",
  "Evidence that supports review of important decisions.",
];

export default function DesktopWhoWeAreSection() {
  return (
    <section className="flex flex-col items-start border-b border-solid border-[#d9e1ec] bg-[#f4f6fa] px-[160px] py-[105px]">
      <div className="flex w-full items-center justify-center gap-[80px]">
        <div className="relative h-[540px] min-w-px flex-1 rounded-[24px]">
          <Image
            src="/headquarters/desktop-who-we-are.webp"
            alt="Colleagues at work in a Zoiko Tech Inc. working space"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="rounded-[24px] object-cover"
          />
        </div>
        <div className="flex min-w-px flex-1 flex-col items-start gap-[36px]">
          <div className="flex w-full flex-col items-start gap-[17px]">
            <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33] [word-break:break-word]">
              The company behind a platform for identity and authority
            </h2>
            <p className="w-full pb-[0.78px] font-manrope text-[17px] font-normal leading-[28.9px] text-[#5b6b82] [word-break:break-word]">
              Zoiko iD is a Zoiko Tech Inc. platform. It is focused on three things:<br className="max-xl:hidden" />{" "}
              establishing who or what is acting, governing what that actor may do, and keeping reviewable evidence of decisions.
            </p>
          </div>
          <ul className="flex w-full flex-col items-start gap-[14px]">
            {points.map((t) => (
              <li key={t} className="flex w-full items-start gap-[14px]">
                <span className="flex size-[22px] shrink-0 items-center justify-center pt-[3px]">
                  <Image src="/headquarters/desktop-icon-check.svg" alt="" width={20} height={20} />
                </span>
                <span className="font-manrope text-[15px] font-normal leading-[25.5px] text-[#334155] xl:whitespace-nowrap">
                  {t}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
