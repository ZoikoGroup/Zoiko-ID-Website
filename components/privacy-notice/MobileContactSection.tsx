import Image from "next/image";

function InfoCard({
  icon,
  title,
  desc,
  badge,
}: {
  icon: string;
  title: string;
  desc: string;
  badge: string;
}) {
  return (
    <div className="relative h-[211.38px] w-full rounded-[16px] border border-solid border-[#d9e1ec] bg-white">
      <div className="absolute left-[24px] top-[24px] flex size-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8]">
        <Image src={icon} width={24} height={24} alt="" />
      </div>
      <h3 className="absolute left-[24px] right-[24px] top-[83px] whitespace-nowrap font-manrope text-[18px] font-bold leading-[25.2px] text-[#0b1b33]">
        {title}
      </h3>
      <p className="absolute left-[24px] right-[24px] top-[118.19px] whitespace-nowrap font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">
        {desc}
      </p>
      <span className="absolute bottom-[24px] left-[24px] whitespace-nowrap rounded-[999px] bg-[#fef3c7] px-[12px] pb-[5.89px] pt-[5.5px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#92400e]">
        {badge}
      </span>
    </div>
  );
}

const CARDS = [
  {
    icon: "/privacy-notice/mobile-icon-mail.svg",
    title: "Privacy enquiries",
    desc: "Approved route only.",
  },
  {
    icon: "/privacy-notice/mobile-icon-hand.svg",
    title: "Rights requests",
    desc: "Verified route, with identity checks.",
  },
  {
    icon: "/privacy-notice/mobile-icon-scale.svg",
    title: "Authority escalation",
    desc: "Per applicable jurisdiction.",
  },
];

export default function MobileContactSection() {
  return (
    <section
      id="contact"
      className="w-full scroll-mt-[120px] border-b border-solid border-[#d9e1ec] bg-[#f5f7fa] px-[22px] py-[60px]"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[36.01px]">
        <div className="flex w-full flex-col items-start gap-[14.01px] rounded-[14px] border border-solid border-[#d9e1ec] bg-white p-[22px]">
          <p className="w-full font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.68px] text-[#5b6b82]">
            Contact
          </p>
          <div className="flex w-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8] py-[13px]">
            <Image src="/privacy-notice/mobile-icon-mail.svg" width={24} height={24} alt="" />
          </div>
        </div>
        <div className="flex w-full max-w-[820px] flex-col items-start gap-[4.9px]">
          <p className="w-full font-dm-serif text-[14px] font-normal leading-[23.8px] tracking-[1.68px] text-[#0891b2]">
            14
          </p>
          <h2 className="w-full pb-[21.845px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33]">
            Privacy contact and<br />
            complaints
          </h2>
          <div className="relative h-[200px] w-full overflow-hidden rounded-[20px]">
            <Image
              src="/privacy-notice/mobile-contact-meeting.webp"
              alt="Team meeting discussing privacy enquiries"
              fill
              sizes="(max-width: 560px) 100vw, 560px"
              className="object-cover"
            />
          </div>
          <p className="w-full pt-[29.1px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
            Privacy enquiries, rights requests and<br />
            escalation to a supervisory authority are<br />
            routed to approved destinations. No<br />
            contact address, data protection officer or<br />
            response time is shown until verified.
          </p>
          <div className="flex w-full flex-col items-start gap-[18px] pt-[29.1px]">
            {CARDS.map((c) => (
              <InfoCard key={c.title} {...c} badge="Pending Legal" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
