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

export default function MobileCookiesSection() {
  return (
    <section
      id="cookies"
      className="w-full scroll-mt-[120px] border-b border-solid border-[#d9e1ec] bg-white px-[22px] py-[60px]"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[36px]">
        <div className="flex w-full flex-col items-start gap-[14px] rounded-[14px] border border-solid border-[#d9e1ec] bg-white p-[22px]">
          <p className="w-full font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.68px] text-[#5b6b82]">
            Cookies
          </p>
          <div className="flex w-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8] py-[13px]">
            <Image src="/privacy-notice/mobile-icon-cog.svg" width={24} height={24} alt="" />
          </div>
        </div>
        <div className="flex w-full max-w-[820px] flex-col items-start gap-[5px]">
          <p className="w-full font-dm-serif text-[14px] font-normal leading-[23.8px] tracking-[1.68px] text-[#0891b2]">
            11
          </p>
          <h2 className="w-full pb-[0.83px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33]">
            Cookies and tracking
          </h2>
          <p className="w-full pt-[20.39px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
            The Cookie Notice explains the cookies in<br />
            use. Cookie Settings is where preferences<br />
            are managed. This section links to both<br />
            and does not list cookies itself.
          </p>
          <div className="flex w-full flex-col items-start gap-[17.99px] pt-[29px]">
            <InfoCard
              icon="/privacy-notice/mobile-icon-doc.svg"
              title="Cookie Notice"
              desc="Separate notice."
              badge="Route pending"
            />
            <InfoCard
              icon="/privacy-notice/mobile-icon-cog.svg"
              title="Cookie Settings"
              desc="Preference action, shown only when live."
              badge="Action only"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
