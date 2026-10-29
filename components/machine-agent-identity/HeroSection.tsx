import Image from "next/image";
import Link from "next/link";

/* ===== Desktop layout (>= lg) ===== */

const iconBoxD = "flex size-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[rgba(34,184,214,0.18)]";

function DesktopHero() {
  return (
    <section className="relative -mt-[116px] flex min-h-[838px] w-full flex-col items-start justify-center gap-[32px] overflow-hidden px-[160px] pb-[105px] pt-[221px]">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(7,20,38,0.9)] to-[rgba(7,20,38,0.95)]" />
        <Image
          src="/machine-agent-identity/desktop-hero-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative flex w-[634px] min-w-[512px] shrink-0 flex-col items-start gap-[19.4px]">
        <h1 className="w-[980px] font-dm-serif text-[72px] font-normal leading-[82.8px] text-white">
          Machine and agent identity <br className="max-xl:hidden" />
          with accountable authority.
        </h1>
        <p className="w-full font-manrope text-[17.6px] font-normal leading-[30.8px] text-[#c9d3e3] xl:whitespace-nowrap">
          Services, workloads, machines and AI agents need identifiable <br className="max-xl:hidden" />
          principals, bounded permission and explainable decisions—not <br className="max-xl:hidden" />
          only credentials.
        </p>
      </div>

      <ul className="relative flex w-full shrink-0 list-none items-start justify-center rounded-[24px] border-b border-solid border-[#d9e1ec] bg-white p-0">
        <li className="flex h-[169px] min-w-px flex-[1_0_0] items-center gap-[14px] border-r border-solid border-[#d9e1ec] px-[26px] py-[47px]">
          <div className={iconBoxD}>
            <Image src="/machine-agent-identity/desktop-icon-hand.svg" alt="" width={24} height={24} />
          </div>
          <div className="flex shrink-0 flex-col items-start gap-[2.75px] whitespace-nowrap pb-[1.19px]">
            <p className="font-manrope text-[15px] font-bold leading-[25.5px] text-[#071121]">Skip to main content</p>
            <p className="font-manrope text-[13px] font-normal leading-[22.1px] text-[#5b6b82]">First stop on the keyboard</p>
          </div>
        </li>
        <li className="flex h-[169px] min-w-px flex-[1_0_0] items-center gap-[16px] border-r border-solid border-[#d9e1ec] px-[26px] py-[47px]">
          <div className={iconBoxD}>
            <Image src="/machine-agent-identity/desktop-icon-layers.svg" alt="" width={24} height={24} />
          </div>
          <div className="flex shrink-0 flex-col items-start gap-[2.75px] pb-[1.19px]">
            <p className="whitespace-nowrap font-manrope text-[15px] font-bold leading-[25.5px] text-[#071121]">Global header</p>
            <p className="w-[154px] font-manrope text-[13px] font-normal leading-[22.1px] text-[#5b6b82]">Approved menu, Escape closes it</p>
          </div>
        </li>
        <li className="flex h-[169px] min-w-px flex-[1_0_0] items-center gap-[16px] border-r border-solid border-[#d9e1ec] px-[26px] py-[47px]">
          <div className={iconBoxD}>
            <Image src="/machine-agent-identity/desktop-icon-shield.svg" alt="" width={24} height={24} />
          </div>
          <div className="flex shrink-0 flex-col items-start gap-[3px] pb-[1.19px]">
            <p className="whitespace-nowrap font-manrope text-[15px] font-bold leading-[25.5px] text-[#071121]">Breadcrumb</p>
            <p className="w-[138px] font-manrope text-[13px] font-normal leading-[22.1px] text-[#5b6b82]">Machine &amp; Agent Identity</p>
          </div>
        </li>
        <li className="flex h-[169px] min-w-px flex-[1_0_0] items-center gap-[16px] px-[26px] py-[47px]">
          <div className={iconBoxD}>
            <Image src="/machine-agent-identity/desktop-icon-eye.svg" alt="" width={24} height={24} />
          </div>
          <div className="flex shrink-0 flex-col items-start gap-[3px] pb-[1.19px]">
            <p className="whitespace-nowrap font-manrope text-[15px] font-bold leading-[25.5px] text-[#071121]">Visible focus</p>
            <p className="whitespace-nowrap font-manrope text-[13px] font-normal leading-[22.1px] text-[#5b6b82]">On every control</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

/* ===== Mobile layout (< lg) ===== */

const iconBoxM = "flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8]";

function MobileHero() {
  return (
    <>
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="flex w-full items-start gap-[8px] whitespace-nowrap border-b border-solid border-[#d9e1ec] bg-white px-[22px] pb-[16.09px] pt-[15px] font-manrope text-[13px] leading-[22.1px]"
      >
        <span className="font-normal text-[#5b6b82]">Home</span>
        <span className="font-normal text-[#5b6b82]">›</span>
        <span className="font-normal text-[#5b6b82]">Authority &amp; Trust</span>
        <span className="font-normal text-[#5b6b82]">›</span>
        <span className="font-bold text-[#071121]" aria-current="page">
          Machine &amp; Agent Identity
        </span>
      </nav>

      <div className="flex w-full flex-col items-center pb-[60px]">
        {/* Accessibility strip */}
        <div className="w-full border-b border-solid border-[#d9e1ec] px-[22px] py-[60px]">
          <ul className="mx-auto flex w-full max-w-[560px] list-none flex-col items-start justify-center border-b border-solid border-[#d9e1ec] p-0">
            <li className="flex h-[100.69px] w-full items-center gap-[14px] border-r border-solid border-[#d9e1ec] p-[24px]">
              <div className={iconBoxM}>
                <Image src="/machine-agent-identity/mobile-icon-hand.svg" alt="" width={20} height={20} />
              </div>
              <div className="flex shrink-0 flex-col items-start gap-[3px] whitespace-nowrap pb-[1.19px]">
                <p className="font-manrope text-[15px] font-bold leading-[25.5px] text-[#071121]">Skip to main content</p>
                <p className="font-manrope text-[13px] font-normal leading-[22.1px] text-[#5b6b82]">First stop on the keyboard</p>
              </div>
            </li>
            <li className="flex h-[100.69px] w-full items-center gap-[14px] border-r border-solid border-[#d9e1ec] p-[24px]">
              <div className={iconBoxM}>
                <Image src="/machine-agent-identity/mobile-icon-layers.svg" alt="" width={20} height={20} />
              </div>
              <div className="flex shrink-0 flex-col items-start gap-[3px] whitespace-nowrap pb-[1.19px]">
                <p className="font-manrope text-[15px] font-bold leading-[25.5px] text-[#071121]">Global header</p>
                <p className="font-manrope text-[13px] font-normal leading-[22.1px] text-[#5b6b82]">Approved menu; Escape closes it</p>
              </div>
            </li>
            <li className="flex h-[127.88px] w-full items-center gap-[14px] border-r border-solid border-[#d9e1ec] p-[24px]">
              <div className={iconBoxM}>
                <Image src="/machine-agent-identity/mobile-icon-shield.svg" alt="" width={20} height={20} />
              </div>
              <div className="flex shrink-0 flex-col items-start gap-[2.8px] whitespace-nowrap pb-[1.19px] pr-[26.42px]">
                <p className="font-manrope text-[15px] font-bold leading-[25.5px] text-[#071121]">Breadcrumb</p>
                <p className="font-manrope text-[13px] font-normal leading-[22.1px] text-[#5b6b82]">
                  Home › Authority &amp; Trust › Machine &amp;
                  <br />
                  Agent Identity
                </p>
              </div>
            </li>
            <li className="flex h-[100.69px] w-full items-center gap-[14px] p-[24px]">
              <div className={iconBoxM}>
                <Image src="/machine-agent-identity/mobile-icon-eye.svg" alt="" width={20} height={20} />
              </div>
              <div className="flex shrink-0 flex-col items-start gap-[3px] whitespace-nowrap pb-[1.19px]">
                <p className="font-manrope text-[15px] font-bold leading-[25.5px] text-[#071121]">Visible focus</p>
                <p className="font-manrope text-[13px] font-normal leading-[22.1px] text-[#5b6b82]">On every control</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Hero */}
        <div className="w-full border-b border-solid border-[#d9e1ec] px-[22px] py-[60px]">
          <div className="mx-auto flex w-full max-w-[560px] flex-col items-center gap-[50px]">
            <div className="flex w-full flex-col items-start gap-[14.9px] pb-[32px] pt-[7.32px]">
              <div className="flex items-center gap-[12px]">
                <div className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
                <p className="whitespace-nowrap font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6]">
                  ZOIKO iD / AUTHORITY &amp; TRUST
                </p>
              </div>
              <h1 className="w-full pb-[0.685px] font-dm-serif text-[42px] font-normal leading-[43.68px] text-[#071121]">
                Machine and agent
                <br />
                identity with
                <br />
                accountable
                <br />
                authority.
              </h1>
              <p className="w-full max-w-[620px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
                Services, workloads, machines and AI
                <br />
                agents need identifiable principals,
                <br />
                bounded permission and explainable
                <br />
                decisions—not only credentials.
              </p>
              <div className="flex w-full flex-col items-start justify-center gap-[16px] pt-[17.1px]">
                <span
                  aria-disabled="true"
                  className="flex h-[83px] min-h-[48px] items-center whitespace-nowrap rounded-[999px] border border-solid border-[#cbd5e1] bg-[#e2e8f0] py-[15px] pl-[26px] pr-[84.08px] font-manrope text-[15px] font-bold leading-[25.5px] text-[#64748b]"
                >
                  <span>
                    Talk to an identity expert (not yet
                    <br />
                    available)
                  </span>
                </span>
                <Link
                  href="/authority-explainers"
                  className="flex h-[57.5px] min-h-[48px] items-center whitespace-nowrap rounded-[999px] border border-solid border-[#071121] px-[26px] py-[15px] font-manrope text-[15px] font-bold leading-[25.5px] text-[#071121] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22b8d6]"
                >
                  Explore delegated authority
                </Link>
              </div>
              <p className="w-full whitespace-nowrap pb-[0.69px] pt-[4px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">
                The expert route is not yet connected. The explainer
                <br />
                below describes the model in the meantime.
              </p>
              <div className="flex w-full items-start gap-[12px] pt-[9.1px]">
                <div className="flex size-[18px] shrink-0 items-center justify-center pt-[3px]">
                  <Image src="/machine-agent-identity/mobile-icon-info.svg" alt="" width={18} height={18} />
                </div>
                <p className="whitespace-nowrap font-manrope text-[14px] font-normal leading-[23.8px] text-[#334155]">
                  Examples describe a proposed trust architecture;
                  <br />
                  verify current feature support with the Zoiko iD
                  <br />
                  team.
                </p>
              </div>
            </div>

            <div className="relative w-full">
              <div className="grid h-[496px] w-full grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] grid-rows-[240px_240px] gap-[16px]">
                <div className="relative col-start-1 row-start-1 overflow-hidden rounded-[20px]">
                  <Image src="/machine-agent-identity/mobile-hero-ai.webp" alt="" fill sizes="(max-width: 560px) 60vw, 320px" className="object-cover" />
                </div>
                <div className="relative col-start-2 row-start-1 overflow-hidden rounded-[20px]">
                  <Image src="/machine-agent-identity/mobile-hero-servers.webp" alt="" fill sizes="(max-width: 560px) 40vw, 240px" className="object-cover" />
                </div>
                <div className="relative col-start-1 row-start-2 overflow-hidden rounded-[20px]">
                  <Image src="/machine-agent-identity/mobile-hero-circuit.webp" alt="" fill sizes="(max-width: 560px) 60vw, 320px" className="object-cover" />
                </div>
              </div>
              <div className="absolute bottom-[23.99px] left-[24px] flex max-w-[300px] items-center gap-[12px] rounded-[14px] bg-white px-[18px] py-[16px] drop-shadow-[0px_14px_15px_rgba(11,27,51,0.18)]">
                <div className={iconBoxM}>
                  <Image src="/machine-agent-identity/mobile-icon-bot.svg" alt="" width={20} height={20} />
                </div>
                <div className="w-[210px] shrink-0 whitespace-nowrap">
                  <p className="font-manrope text-[14px] font-bold leading-[23.8px] text-[#071121]">
                    An agent does not grant itself
                    <br />
                    permission
                  </p>
                  <p className="mt-[6px] font-manrope text-[13px] font-normal leading-[22.1px] text-[#5b6b82]">Every mandate has a sponsor.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function HeroSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopHero />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobileHero />
      </div>
    </>
  );
}
