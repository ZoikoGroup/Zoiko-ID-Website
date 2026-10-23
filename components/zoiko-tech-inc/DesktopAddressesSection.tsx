import Image from "next/image";

const HQS = [
  {
    img: "/zoiko-tech-inc/desktop-hq-us.webp",
    alt: "Zoiko global headquarters, Sacramento",
    label: "United States · Global headquarters",
    address: "1401 21st Street, Suite R Sacramento, CA 95811, USA",
  },
  {
    img: "/zoiko-tech-inc/desktop-hq-uk.webp",
    alt: "Zoiko European headquarters, London",
    label: "United Kingdom · European headquarters",
    address: "167–169 Great Portland Street, 5th Floor, London W1W 5PF, UK",
  },
];

export default function DesktopAddressesSection() {
  return (
    <section id="addresses" className="hidden w-full border-y border-[#dce3ee] bg-white lg:block">
      <div className="flex w-full flex-col items-start gap-[60px] px-[160px] py-[105px]">
        <div className="flex w-full flex-col items-start gap-[11px]">
          <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.6px] text-[#07111f]">
            Two documented addresses
          </h2>
          <p className="max-w-[680px] pt-[2px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82]">
            <span className="xl:whitespace-nowrap">These are documented headquarters addresses. They are not walk-in offices, and no <br className="max-xl:hidden" />
visiting hours, local services or regional availability is implied.</span>
          </p>
        </div>
        <ul className="flex w-full items-stretch justify-center gap-[24px]">
          {HQS.map((h) => (
            <li
              key={h.label}
              className="flex min-w-px flex-1 flex-col items-start overflow-hidden rounded-[8px] border border-[#dce3ee] bg-white"
            >
              <div className="relative h-[200px] w-full shrink-0">
                <Image src={h.img} alt={h.alt} fill sizes="560px" className="object-cover" />
              </div>
              <div className="flex w-full flex-col items-start gap-[12.4px] px-[26px] pb-[26px] pt-[30px]">
                <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.44px] text-[#0891b2]">
                  {h.label}
                </p>
                <address className="w-full font-manrope text-[16px] font-normal not-italic leading-[27.2px] text-[#07111f]">
                  {h.address}
                </address>
                <p className="w-full pt-[1.6px] font-manrope text-[13px] font-normal leading-[21.45px] text-[#5b6b82]">
                  Documented address. No visiting hours or walk-in service are implied.
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
