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

export default function DesktopTransfersSection() {
  return (
    <section
      id="transfers"
      className="w-full scroll-mt-[120px] border-b border-solid border-[#d9e1ec] bg-[#f8fafc] px-[160px] py-[105px]"
    >
      <div className="flex items-start justify-center gap-[90px]">
        <div className="sticky top-0 flex w-[260px] shrink-0 flex-col items-start gap-[14px]">
          <div className="flex size-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8]">
            <Image src="/privacy-notice/desktop-icon-globe.svg" width={24} height={24} alt="" />
          </div>
          <p className="w-full font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.68px] text-[#5b6b82]">
            Transfers
          </p>
        </div>
        <div className="flex w-[770px] max-w-[820px] shrink-0 flex-col items-start gap-[48px]">
          <div className="flex w-full flex-col items-start gap-[5px]">
            <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
              International transfers
            </h2>
            <p className="w-full pt-[16px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
              Countries, receiving entities and safeguards are shown only from the legal registry. Where a <br className="max-xl:hidden" />
              transfer detail is not established, it is omitted and the launch is held if the law requires it.
            </p>
          </div>
          <div className="flex w-full flex-col items-start">
            <div className="relative h-[301px] w-full overflow-hidden rounded-[20px]">
              <Image
                src="/privacy-notice/desktop-transfers-network.webp"
                alt=""
                fill
                sizes="770px"
                className="object-cover object-bottom"
              />
            </div>
            <div className="flex w-full items-stretch gap-[18px] pt-[24px]">
              <InfoCard icon="/privacy-notice/desktop-icon-globe.svg" title="Destination" desc="Country or region, verified." badge="Pending Legal" />
              <InfoCard icon="/privacy-notice/desktop-icon-shield.svg" title="Safeguard" desc={<>Mechanism named only when <br className="max-xl:hidden" />approved.</>} badge="Pending Legal" />
              <InfoCard icon="/privacy-notice/desktop-icon-building.svg" title="Receiving entity" desc={<>Entity identified from the <br className="max-xl:hidden" />registry.</>} badge="Pending Legal" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
