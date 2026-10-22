import Image from "next/image";
import Link from "next/link";

const darkBg =
  "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(11, 27, 49) 0%, rgb(11, 27, 49) 100%)";

const nodeCard =
  "flex flex-col items-center justify-center gap-[16px] rounded-[8px] border border-solid border-[#dce3ee] bg-white px-[26px] pb-[25.99px] pt-[28.5px]";

export default function DesktopEntitySection() {
  return (
    <section
      id="entity"
      className="hidden w-full flex-col items-center justify-center gap-[60px] bg-[#f7f8fa] px-[160px] py-[105px] lg:flex"
    >
      <div className="flex w-full items-center gap-[48px]">
        <div className="flex min-w-0 flex-1 flex-col items-start gap-[10.8px]">
          <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.6px] text-[#07111f]">
            One corporate entity, one platform
          </h2>
          <p className="w-full max-w-[680px] pt-[2.25px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82]">
            <span>The relationship is shown as a two-node map. We do not show <br className="max-xl:hidden" />
subsidiaries, a group chart or an ownership tree, because none is documented in the sources used here.</span>
          </p>
          <div className="flex w-full items-center justify-between pt-[19.2px]">
            <div className={`${nodeCard} w-[213px]`}>
              <p className="whitespace-nowrap font-manrope text-[13px] font-normal leading-[21.45px] text-[#5b6b82]">
                Corporate entity
              </p>
              <div className="relative h-[79px] w-full overflow-hidden">
                <Image
                  src="/zoiko-tech-inc/desktop-hero-card-visual.webp"
                  alt=""
                  width={160}
                  height={80}
                  className="absolute left-0 top-[1.31%] h-[101.34%] w-full"
                />
              </div>
            </div>
            <span
              aria-hidden
              className="w-[26px] font-manrope text-[26px] font-extrabold leading-[42.9px] text-[#0891b2]"
            >
              →
            </span>
            <div className={`${nodeCard} h-[174px] w-[214px]`}>
              <p className="whitespace-nowrap font-manrope text-[13px] font-normal leading-[21.45px] text-[#5b6b82]">
                Product platform
              </p>
              <div className="relative h-[37px] w-full">
                <Image
                  src="/zoiko-tech-inc/desktop-entity-logo.webp"
                  alt="Zoiko iD logo"
                  fill
                  sizes="162px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <p className="w-full rounded-[8px] border border-solid border-[#dce3ee] bg-white px-[18px] pb-[16.14px] pt-[22.25px] font-manrope text-[14px] font-normal leading-[23.1px] text-[#5b6b82]">
            Text equivalent: Zoiko Tech Inc. is the corporate entity. Zoiko iD is the product platform that Zoiko Tech Inc. describes publicly.
          </p>
        </div>

        <div className="flex w-[560px] shrink-0 flex-col items-start gap-[7.1px] rounded-[8px] border border-solid border-[#dce3ee] bg-white px-[30px] pb-[30px] pt-[29px]">
          <div className="relative h-[228px] w-full">
            <Image
              src="/zoiko-tech-inc/desktop-company-info.webp"
              alt="Zoiko Tech Inc. company information"
              fill
              sizes="496px"
              className="object-cover"
            />
          </div>
          <h3 className="w-full border-b border-solid border-[rgba(100,116,139,0.15)] pb-[8px] pt-[2.9px] font-dm-serif text-[24px] font-normal leading-[30px] text-[#07111f]">
            Company information stays here. Product detail lives on Zoiko iD.
          </h3>
          <p className="w-full font-manrope text-[14px] font-normal leading-[26.4px] text-[#334155]">
            For how the platform works, what it covers, and how it is governed, go to the Zoiko iD pages. Company-level statements on this page do not override product-specific technology, security, commercial or legal sources.
          </p>
          <p className="w-full pt-[10.9px] font-manrope text-[13px] font-normal leading-[21.45px] text-[#5b6b82]">
            Source: Zoiko iD public footer and About Zoiko iD.
          </p>
        </div>
      </div>

      <div
        className="grid w-full grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] items-center gap-x-[50px] rounded-[32px] px-[44px] py-[40px]"
        style={{ backgroundImage: darkBg }}
      >
        <div className="flex flex-col items-start gap-[12px]">
          <p className="w-full pb-[0.8px] font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#67e8f9]">
            Product portfolio boundary
          </p>
          <h3 className="w-full font-dm-serif text-[30px] font-normal leading-[37.5px] text-white">
            <span>Only the verified Zoiko iD <br className="max-xl:hidden" />
proposition is described here.</span>
          </h3>
        </div>
        <div className="flex flex-col items-start gap-[24px]">
          <p className="w-full font-manrope text-[17px] font-normal leading-[28px] text-[#e2e8f0]">
            <span>Zoiko iD: identity infrastructure for people, organizations, services, <br className="max-xl:hidden" />
machines and AI agents — with governed delegated authority and <br className="max-xl:hidden" />
evidence.</span>
          </p>
          <div className="flex w-full flex-wrap items-center gap-y-[14px]">
            <Link
              href="/identity-guides"
              className="flex min-h-[46px] items-center rounded-[6px] border border-solid border-[#2563eb] bg-white px-[24px] py-[14px] font-manrope text-[15px] font-bold leading-[24.75px] text-[#07111f] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1b31]"
            >
              Explore Zoiko iD
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
