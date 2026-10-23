import Image from "next/image";

function InfoCard({
  icon,
  title,
  desc,
  badge,
}: {
  icon: string;
  title: string;
  desc: React.ReactNode;
  badge: string;
}) {
  return (
    <div className="relative flex h-[235.17px] min-w-px flex-1 flex-col items-start rounded-[16px] border border-solid border-[#d9e1ec] bg-white p-[24px]">
      <div className="flex size-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8]">
        <Image src={icon} width={24} height={24} alt="" />
      </div>
      <h3 className="mt-[9px] font-manrope text-[18px] font-bold leading-[25.2px] text-[#0b1b33] xl:whitespace-nowrap">
        {title}
      </h3>
      <p className="mt-[10px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82] xl:whitespace-nowrap">
        {desc}
      </p>
      <span className="mt-auto whitespace-nowrap rounded-[999px] bg-[#fef3c7] px-[12px] pb-[5.89px] pt-[5.5px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#92400e]">
        {badge}
      </span>
    </div>
  );
}

export default function DesktopCookiesSection() {
  return (
    <section
      id="cookies"
      className="w-full scroll-mt-[120px] border-b border-solid border-[#d9e1ec] bg-white px-[160px] py-[105px]"
    >
      <div className="flex items-start justify-center gap-[90px]">
        <div className="sticky top-0 flex w-[260px] shrink-0 flex-col items-start gap-[14px]">
          <div className="flex size-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8]">
            <Image src="/privacy-notice/desktop-icon-cog.svg" width={24} height={24} alt="" />
          </div>
          <p className="w-full font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.68px] text-[#5b6b82]">
            Cookies
          </p>
        </div>
        <div className="flex w-[770px] max-w-[820px] shrink-0 flex-col items-start gap-[5px]">
          <div className="flex w-full flex-col items-start gap-[5px]">
            <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
              Cookies and tracking
            </h2>
            <p className="w-full pt-[16px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
              The Cookie Notice explains the cookies in use. Cookie Settings is where preferences are <br className="max-xl:hidden" />
              managed. This section links to both and does not list cookies itself.
            </p>
          </div>
          <div className="grid w-full grid-cols-3 items-stretch gap-[18px] pt-[24px]">
              <InfoCard icon="/privacy-notice/desktop-icon-doc.svg" title="Cookie Notice" desc="Separate notice." badge="Route pending" />
              <InfoCard icon="/privacy-notice/desktop-icon-cog.svg" title="Cookie Settings" desc={<>Preference action, shown only <br className="max-xl:hidden" />when live.</>} badge="Action only" />
          </div>
        </div>
      </div>
    </section>
  );
}
