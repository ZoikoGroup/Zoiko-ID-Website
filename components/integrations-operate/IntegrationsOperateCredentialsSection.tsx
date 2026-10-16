import Image from "next/image";
import Link from "next/link";

interface RoleCard {
  icon: string;
  iconWidth: number;
  iconHeight: number;
  title: string;
  description: string;
}

const roleCards: RoleCard[] = [
  {
    icon: "/integrations-operate/icon-334_4711.svg",
    iconWidth: 37,
    iconHeight: 33,
    title: "Issuer",
    description: "Issues the credential\nand maintains its\nstatus.",
  },
  {
    icon: "/integrations-operate/icon-334_4726.svg",
    iconWidth: 35,
    iconHeight: 33,
    title: "Holder",
    description: "Stores and presents\nthe credential.",
  },
  {
    icon: "/integrations-operate/icon-334_4740.svg",
    iconWidth: 37,
    iconHeight: 37,
    title: "Verifier",
    description: "Checks status and\nprovenance of what\nwas presented.",
  },
];

export default function IntegrationsOperateCredentialsSection() {
  return (
    <section className="bg-[#F1F5F9] px-4 py-16 sm:px-8 lg:px-12 lg:py-[95px]">
      <div className="mx-auto flex w-full max-w-[1040px] flex-col items-center gap-[23px]">
        {/* Top Banner Image: Abstract data visualization */}
        <div className="relative h-[260px] w-full overflow-hidden rounded-[12px]">
          <Image
            src="/integrations-operate/img-67b62df1bdd6442c33197a2b73bd40b922560771.png"
            alt="Data on screen and mobile device"
            fill
            sizes="(min-width: 1040px) 1040px, 100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Section Heading & Subtitle */}
        <div className="flex flex-col items-center pt-[2px] text-center">
          <h2 className="font-dm-serif text-3xl font-normal text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[62.4px]">
            Credential and verification paths
          </h2>

          <p className="mt-[23px] max-w-[860px] font-manrope text-base font-normal leading-7 text-[#64748B] sm:text-[16.8px] sm:leading-[28.56px]">
            Issuer, holder, and verifier play separate roles. A verifier checks the credential it receives. Whether the holder
            <br className="hidden sm:block" />
            {" "}may act is a separate decision.
          </p>
        </div>

        {/* 3 Role Cards + Connecting Arrows */}
        <div className="flex w-full flex-col items-center justify-between gap-4 pt-[2px] md:flex-row md:gap-0">
          {/* Card 1: Issuer */}
          <div className="flex h-auto w-full flex-col items-center justify-center rounded-[12px] border border-[#E2E8F0] bg-white-solid p-6 text-center shadow-xs md:h-[223px] md:w-[288px]">
            <div className="flex h-[44px] items-center justify-center">
              <Image
                src={roleCards[0].icon}
                alt=""
                width={roleCards[0].iconWidth}
                height={roleCards[0].iconHeight}
                className="shrink-0"
              />
            </div>
            <h3 className="mt-4 font-manrope text-[16.3px] font-bold leading-7 text-[#071426]">
              {roleCards[0].title}
            </h3>
            <p className="mt-1 whitespace-pre-line font-manrope text-[13.6px] font-normal leading-[23.1px] text-[#64748B]">
              {roleCards[0].description}
            </p>
          </div>

          {/* Arrow 1 */}
          <div className="hidden items-center justify-center md:flex md:w-[88px]">
            <Image
              src="/integrations-operate/icon-334_4721.svg"
              alt=""
              width={19}
              height={19}
              className="shrink-0"
            />
          </div>

          {/* Card 2: Holder */}
          <div className="flex h-auto w-full flex-col items-center justify-center rounded-[12px] border border-[#E2E8F0] bg-white-solid p-6 text-center shadow-xs md:h-[223px] md:w-[288px]">
            <div className="flex h-[44px] items-center justify-center">
              <Image
                src={roleCards[1].icon}
                alt=""
                width={roleCards[1].iconWidth}
                height={roleCards[1].iconHeight}
                className="shrink-0"
              />
            </div>
            <h3 className="mt-4 font-manrope text-[16.3px] font-bold leading-7 text-[#071426]">
              {roleCards[1].title}
            </h3>
            <p className="mt-1 whitespace-pre-line font-manrope text-[13.6px] font-normal leading-[23.1px] text-[#64748B]">
              {roleCards[1].description}
            </p>
          </div>

          {/* Arrow 2 */}
          <div className="hidden items-center justify-center md:flex md:w-[88px]">
            <Image
              src="/integrations-operate/icon-334_4735.svg"
              alt=""
              width={19}
              height={19}
              className="shrink-0"
            />
          </div>

          {/* Card 3: Verifier */}
          <div className="flex h-auto w-full flex-col items-center justify-center rounded-[12px] border border-[#E2E8F0] bg-white-solid p-6 text-center shadow-xs md:h-[223px] md:w-[288px]">
            <div className="flex h-[44px] items-center justify-center">
              <Image
                src={roleCards[2].icon}
                alt=""
                width={roleCards[2].iconWidth}
                height={roleCards[2].iconHeight}
                className="shrink-0"
              />
            </div>
            <h3 className="mt-4 font-manrope text-[16.3px] font-bold leading-7 text-[#071426]">
              {roleCards[2].title}
            </h3>
            <p className="mt-1 whitespace-pre-line font-manrope text-[13.6px] font-normal leading-[23.1px] text-[#64748B]">
              {roleCards[2].description}
            </p>
          </div>
        </div>

        {/* 2 Bottom Cards */}
        <div className="grid w-full grid-cols-1 gap-7 pt-[2px] md:grid-cols-2">
          {/* Card Left: Credential correctness ≠ authority */}
          <div className="flex flex-col gap-1 rounded-[10px] border border-[#E2E8F0] bg-white-solid p-5 shadow-xs sm:px-5 sm:py-[18px]">
            <div className="flex size-[26px] items-center">
              <Image
                src="/integrations-operate/icon-334_4766.svg"
                alt=""
                width={21}
                height={23}
                className="shrink-0"
              />
            </div>
            <h4 className="mt-1 font-manrope text-base font-bold text-[#071426]">
              Credential correctness ≠ authority
            </h4>
            <p className="font-manrope text-[14.4px] font-normal leading-[24px] text-[#64748B]">
              A valid credential proves a claim. It does not decide whether an action is allowed now.
            </p>
          </div>

          {/* Card Right: Related pages */}
          <div className="flex flex-col gap-1 rounded-[10px] border border-[#E2E8F0] bg-white-solid p-5 shadow-xs sm:px-5 sm:py-[18px]">
            <div className="flex size-[26px] items-center">
              <Image
                src="/integrations-operate/icon-334_4773.svg"
                alt=""
                width={16}
                height={16}
                className="shrink-0"
              />
            </div>
            <h4 className="mt-1 font-manrope text-base font-bold text-[#071426]">
              Related pages
            </h4>
            <p className="font-manrope text-base font-normal leading-[27.2px]">
              <Link
                href="/authentication-sso"
                className="text-[#2563EB] underline hover:text-blue-700"
              >
                Credentials
              </Link>
              <span className="text-[#475569]"> · </span>
              <Link
                href="/authentication-sso"
                className="text-[#2563EB] underline hover:text-blue-700"
              >
                Identity Verification
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
