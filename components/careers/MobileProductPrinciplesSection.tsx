import Image from "next/image";

const cards = [
  { icon: "/careers/mobile-icon-key.svg", title: "Bounded authority", body: "Permissions are scoped, not implied." },
  { icon: "/careers/mobile-icon-doc.svg", title: "Verifiable evidence", body: "Decisions can be reviewed later." },
  { icon: "/careers/mobile-icon-lock.svg", title: "Privacy by design", body: "Collect only what a decision needs." },
  { icon: "/careers/mobile-icon-bot.svg", title: "Accountable AI", body: "Agents act under a named sponsor." },
  { icon: "/careers/mobile-icon-eye.svg", title: "Accessible experiences", body: "Built to WCAG 2.2 AA from the start." },
];

export default function MobileProductPrinciplesSection() {
  return (
    <section id="product-principles" className="bg-white px-[22px] py-[60px] lg:hidden">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[14.7px]">
        <div className="flex h-[19.8px] w-full items-center gap-[12px]">
          <span className="h-[2px] w-[36px] bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[2.16px] text-[#1d4ed8]">
            Product principles
          </p>
        </div>
        <h2 className="w-full pb-[0.745px] pt-[2.215px] font-dm-serif text-[32px] font-normal leading-[35.84px] tracking-[-0.16px] text-[#0b1b33]">
          How we describe good
          <br />
          work here
        </h2>
        <p className="w-full max-w-[700px] font-manrope text-[18px] font-normal leading-[29.7px] text-[#5b6b82]">
          Product principles, clearly labelled as such.
          <br />
          Employee benefits and working practices
          <br />
          are confirmed separately.
        </p>
        <ul className="flex w-full flex-col gap-[16px] pt-[35.3px]">
          {cards.map((c) => (
            <li
              key={c.title}
              className="flex w-full flex-col items-start gap-[11px] rounded-[18px] border border-[#dce3ee] bg-white px-[22px] py-[28px]"
            >
              <div className="flex size-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8]">
                <Image src={c.icon} width={26} height={26} alt="" />
              </div>
              <h3 className="w-full pb-[0.94px] font-manrope text-[17px] font-bold leading-[22.95px] text-[#0b1b33]">
                {c.title}
              </h3>
              <p className="w-full font-manrope text-[14px] font-normal leading-[23.1px] text-[#5b6b82]">
                {c.body}
              </p>
            </li>
          ))}
        </ul>
        <div className="flex w-full items-start gap-[10px] pt-[6px]">
          <Image
            src="/careers/mobile-icon-info-1.svg"
            width={10}
            height={10}
            alt=""
            className="mt-[6.8px] shrink-0"
          />
          <p className="whitespace-nowrap font-manrope text-[14px] font-normal leading-[23.1px] text-[#5b6b82]">
            Principles are product commitments as described;
            <br />
            they are not claims about any employment term.
          </p>
        </div>
      </div>
    </section>
  );
}
