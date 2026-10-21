import Image from "next/image";

const checks = [
  { title: "Which non-human actors exist in your estate today", body: "Inventory them before choosing a model." },
  { title: "Who sponsors each actor, and who answers for it", body: "Name a person, not a team alias." },
  { title: "What each actor needs, and nothing more", body: "Write the bounds before granting any access." },
];

export default function BeforeYouActSection() {
  return (
    <section className="w-full bg-[#f1f5f9] py-[105px]">
      <div className="mx-auto flex w-full items-center gap-[28px] px-[160px]">
        <div className="relative h-[420px] min-w-px flex-1 overflow-hidden rounded-[20px]">
          <Image
            src="/machine-agent-identity-guides/desktop-before-you-act.webp"
            alt=""
            fill
            sizes="(min-width: 1440px) 546px, 45vw"
            className="rounded-[20px] object-cover"
          />
        </div>
        <div className="flex min-w-px flex-1 flex-col gap-[12px]">
          <h2 className="font-dm-serif text-[52px] font-normal leading-[57.9px] text-[#07111f]">
            Before you act on any of this
          </h2>
          <p className="max-w-[820px] pt-[1.29px] font-manrope text-[16px] font-normal leading-[25.6px] text-[#64748b]">
            Concepts here are a starting point. Before you design around them, confirm the following with the people who own each system.
          </p>
          <ul className="flex flex-col gap-[18px] pt-[12px]">
            {checks.map((c) => (
              <li key={c.title} className="flex items-start gap-[14px] rounded-[16px] border border-solid border-[#e2e8f0] bg-white p-[22px]">
                <div className="flex h-[24px] w-[22px] shrink-0 flex-col items-start pt-[2px]">
                  <Image src="/machine-agent-identity-guides/desktop-icon-checklist.svg" alt="" width={22} height={22} className="size-[22px]" />
                </div>
                <div className="flex flex-col gap-[6.4px] font-manrope">
                  <p className="text-[15px] font-normal leading-[24px] text-[#07111f]">{c.title}</p>
                  <p className="text-[13px] font-normal leading-[20.8px] text-[#64748b]">{c.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
