import Image from "next/image";
import Link from "next/link";

/* ===== Desktop layout (>= lg) ===== */


function DesktopHero() {
  return (
    <section
      className="relative -mt-[116px] flex w-full flex-col items-center justify-center gap-[64px] overflow-clip px-[160px] pb-[80px] pt-[196px]"
      style={{
        backgroundImage:
          "linear-gradient(91.92740907902439deg, rgb(7, 20, 38) 1.0218%, rgb(13, 31, 53) 49.98%, rgb(10, 26, 46) 100.98%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[-4.55%_-22.47%_-44.51%_-9.97%] rounded-[523.6px] blur-[50px]"
        style={{
          backgroundImage:
            "radial-gradient(1401.9px 761.6px at 50% 50%, rgba(34,184,214,0.2) 0%, rgba(34,184,214,0) 70%)",
        }}
      />
      <div className="relative flex w-full max-w-[1280px] items-center justify-between">
        <div className="flex w-[634px] min-w-[512px] shrink-0 flex-col items-start gap-[19.4px]">
          <h1 className="font-dm-serif text-[72px] font-normal leading-[82.8px] text-white">
            Trust changes. <br className="max-xl:hidden" />
            Authority must <br className="max-xl:hidden" />
            respond.
          </h1>
          <p className="max-w-[520px] font-manrope text-[17.6px] font-normal leading-[30.8px] text-[#d7e0ee]">
            Connect identity, delegated authority and current trust signals so access can be reassessed, restricted or revoked—with a record of why.
          </p>
          <div className="flex w-[582px] max-w-full flex-col items-start gap-[12px]">
            <div className="flex w-full items-start gap-[12px] rounded-[8px] bg-[rgba(228,243,248,0.04)] px-[12px] py-[8px]">
              <div className="flex size-[18px] shrink-0 items-center justify-center pt-[3px]">
                <Image src="/continuous-trust/desktop-icon-info.svg" width={18} height={18} alt="" />
              </div>
              <p className="font-manrope text-[14px] font-normal leading-[23.8px] text-[#22b8d6] xl:whitespace-nowrap">
                Illustrative governance model; feature availability depends on approved product <br className="max-xl:hidden" />
                scope.
              </p>
            </div>
            <div className="flex w-full items-start gap-[12px] rounded-[8px] bg-[rgba(228,243,248,0.04)] px-[12px] py-[8px]">
              <div className="flex size-[18px] shrink-0 items-center justify-center pt-[3px]">
                <Image src="/continuous-trust/desktop-icon-clock.svg" width={18} height={18} alt="" />
              </div>
              <p className="font-manrope text-[14px] font-normal leading-[23.8px] text-[#22b8d6] xl:whitespace-nowrap">
                A trust signal is evidence used in context, not a permanent guarantee.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-wrap items-start gap-[20px] pt-[21.29px]">
            <Link
              href="/authority-explainers"
              className="inline-flex items-center gap-[10px] rounded-[6px] bg-[#2563eb] px-[28px] py-[14px] font-manrope text-[15px] font-bold leading-[24px] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22b8d6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
            >
              Explore delegated authority
            </Link>
          </div>
        </div>
        <div className="relative flex min-w-px flex-1 flex-col items-start">
          <div className="grid h-[496px] w-full grid-cols-2 grid-rows-[260px_220px] gap-[16px]">
            <div className="relative col-span-2 row-1 rounded-[18px]">
              <Image src="/continuous-trust/desktop-hero-whiteboard.webp" alt="" fill sizes="646px" className="rounded-[18px] object-cover" />
            </div>
            <div className="relative col-1 row-2 rounded-[18px]">
              <Image src="/continuous-trust/desktop-hero-laptop.webp" alt="" fill sizes="315px" className="rounded-[18px] object-cover" />
            </div>
            <div className="relative col-2 row-2 rounded-[18px]">
              <Image src="/continuous-trust/desktop-hero-monitor.webp" alt="" fill sizes="315px" className="rounded-[18px] object-cover" />
            </div>
          </div>
          <div className="absolute bottom-[198.65px] left-[141px] flex max-w-[300px] items-center gap-[12px] rounded-[14px] bg-white px-[18px] py-[14px] drop-shadow-[0px_14px_15px_rgba(11,27,51,0.18)]">
            <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8]">
              <Image src="/continuous-trust/desktop-icon-refresh.svg" width={20} height={20} alt="" />
            </div>
            <div className="whitespace-nowrap">
              <p className="font-manrope text-[14px] font-bold leading-[23.8px] text-[#071121]">Reassess, then decide</p>
              <p className="font-manrope text-[13px] font-normal leading-[22.1px] text-[#5b6b82]">Each decision records its reason.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Mobile layout (< lg) — block 1 ===== */
function MobileBreadcrumb() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="h-[77.19px] w-full border-b border-solid border-[#d9e1ec] bg-white lg:hidden"
    >
      <ol className="mx-auto flex w-full max-w-[560px] flex-wrap items-start gap-x-[6.8px] px-[22px] pt-[15.45px] font-manrope text-[13px] font-normal leading-[22.1px] text-[#5b6b82]">
        <li>Home</li>
        <li aria-hidden="true">›</li>
        <li>Authority &amp; Trust</li>
        <li aria-hidden="true">›</li>
        <li aria-current="page" className="font-bold text-[#071121]">
          Continuous Trust &amp;
        </li>
        <li aria-hidden="true" className="h-0 basis-full" />
        <li className="font-bold text-[#071121]">Revocation</li>
      </ol>
    </nav>
  );
}

/* ===== Mobile layout (< lg) — block 2 ===== */


function M2IconBox({ src }: { src: string }) {
  return (
    <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8]">
      <Image src={src} width={20} height={20} alt="" />
    </div>
  );
}



const m2T = "font-manrope text-[15px] font-bold leading-[25.5px] text-[#071121] whitespace-nowrap";


const m2S = "font-manrope text-[13px] font-normal leading-[22.1px] text-[#5b6b82] whitespace-nowrap";



function MobileSkipStrip() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] bg-white px-[22px] py-[60px] lg:hidden">
      <div className="mx-auto w-full max-w-[560px]">
        <ul className="flex w-full flex-col items-start justify-center border-b border-solid border-[#d9e1ec]">
          <li className="flex min-h-[100.69px] w-full items-center gap-[14px] border-r border-solid border-[#d9e1ec] p-[24px]">
            <M2IconBox src="/continuous-trust/mobile-icon-hand.svg" />
            <div className="flex flex-col gap-[3px] pb-[1.19px]">
              <p className={m2T}>Skip to main content</p>
              <p className={m2S}>First stop on the keyboard</p>
            </div>
          </li>
          <li className="flex min-h-[100.69px] w-full items-center gap-[14px] border-r border-solid border-[#d9e1ec] p-[24px]">
            <M2IconBox src="/continuous-trust/mobile-icon-layers.svg" />
            <div className="flex flex-col gap-[3px] pb-[1.19px]">
              <p className={m2T}>Global navigation</p>
              <p className={m2S}>Approved header and menu</p>
            </div>
          </li>
          <li className="flex min-h-[127.88px] w-full items-center gap-[14px] border-r border-solid border-[#d9e1ec] p-[24px]">
            <M2IconBox src="/continuous-trust/mobile-icon-shield.svg" />
            <div className="flex flex-col gap-[2.8px] pb-[1.19px] pr-[13.42px]">
              <p className={m2T}>Authority &amp; Trust</p>
              <p className={m2S}>Breadcrumb: Home › Authority &amp; Trust ›</p>
              <p className={m2S}>Continuous Trust &amp; Revocation</p>
            </div>
          </li>
          <li className="flex min-h-[100.69px] w-full items-center gap-[14px] p-[24px]">
            <M2IconBox src="/continuous-trust/mobile-icon-eye.svg" />
            <div className="flex flex-col gap-[3px] pb-[1.19px]">
              <p className={m2T}>Visible focus</p>
              <p className={m2S}>On every control</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

/* ===== Mobile layout (< lg) — block 3 ===== */


const m3BULLETS: { icon: string; text: React.ReactNode }[] = [
  {
    icon: "/continuous-trust/mobile-icon-info.svg",
    text: (
      <>
        Illustrative governance model; feature availability
        <br />
        depends on approved product scope.
      </>
    ),
  },
  {
    icon: "/continuous-trust/mobile-icon-clock.svg",
    text: (
      <>
        A trust signal is evidence used in context, not a
        <br />
        permanent guarantee.
      </>
    ),
  },
];



const m3IMAGES = [
  { src: "/continuous-trust/mobile-hero-colleagues.webp", cls: "col-start-1 row-start-1", sizes: "(max-width: 560px) 60vw, 330px" },
  { src: "/continuous-trust/mobile-hero-lock.webp", cls: "col-start-2 row-start-1", sizes: "(max-width: 560px) 40vw, 250px" },
  { src: "/continuous-trust/mobile-hero-data.webp", cls: "col-start-1 row-start-2", sizes: "(max-width: 560px) 60vw, 330px" },
];



function MobileHero() {
  return (
    <section
      id="main-content"
      className="w-full scroll-mt-[120px] border-b border-solid border-[#d9e1ec] bg-white px-[22px] py-[60px] lg:hidden"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[50px]">
        <div className="flex w-full flex-col gap-[14.6px] pt-[7.31px]">
          <div className="flex items-center gap-[12px]">
            <span className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
            <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6] whitespace-nowrap">
              ZOIKO iD / AUTHORITY &amp; TRUST
            </p>
          </div>
          <h1 className="font-dm-serif text-[42px] font-normal leading-[43.68px] text-[#071121]">
            Trust changes.
            <br />
            Authority must
            <br />
            respond.
          </h1>
          <p className="w-full max-w-[620px] pt-[0.79px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
            Connect identity, delegated authority and
            <br />
            current trust signals so access can be
            <br />
            reassessed, restricted or revoked—with a
            <br />
            record of why.
          </p>
          <ul className="flex w-full flex-col gap-[12px] pt-[9.39px]">
            {m3BULLETS.map((b) => (
              <li key={b.icon} className="flex w-full items-start gap-[12px]">
                <span className="flex size-[18px] shrink-0 items-center justify-center pt-[3px]">
                  <Image src={b.icon} width={18} height={18} alt="" />
                </span>
                <p className="font-manrope text-[14px] font-normal leading-[23.8px] text-[#334155] whitespace-nowrap">
                  {b.text}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex w-full flex-col items-start justify-center gap-[16px] pt-[17.4px] whitespace-nowrap">
            <span
              aria-disabled="true"
              className="flex min-h-[48px] cursor-not-allowed items-center rounded-[999px] border border-solid border-[#cbd5e1] bg-[#e2e8f0] px-[26px] py-[15px] font-manrope text-[15px] font-bold leading-[25.5px] text-[#64748b] whitespace-nowrap"
            >
              <span>
                Discuss enterprise requirements (not yet
                <br />
                available)
              </span>
            </span>
            <Link
              href="/authority-explainers"
              className="flex min-h-[48px] items-center rounded-[999px] border border-solid border-[#071121] px-[26px] py-[15px] font-manrope text-[15px] font-bold leading-[25.5px] text-[#071121] whitespace-nowrap transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22b8d6] focus-visible:ring-offset-2"
            >
              Explore delegated authority
            </Link>
          </div>
        </div>

        <div className="relative w-full">
          <div className="grid h-[496px] w-full grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] grid-rows-[240px_240px] gap-[16px]">
            {m3IMAGES.map((img) => (
              <div key={img.src} className={`relative overflow-hidden rounded-[20px] ${img.cls}`}>
                <Image src={img.src} alt="" fill sizes={img.sizes} className="object-cover" />
              </div>
            ))}
          </div>
          <div className="absolute bottom-[24px] left-[24px] flex max-w-[300px] items-center gap-[12px] rounded-[14px] bg-white px-[18px] py-[14px] drop-shadow-[0px_14px_15px_rgba(11,27,51,0.18)]">
            <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8]">
              <Image src="/continuous-trust/mobile-icon-refresh.svg" width={20} height={20} alt="" />
            </div>
            <div className="whitespace-nowrap">
              <p className="font-manrope text-[14px] font-bold leading-[23.8px] text-[#071121]">
                Reassess, then decide
              </p>
              <p className="font-manrope text-[13px] font-normal leading-[22.1px] text-[#5b6b82]">
                Each decision records its reason.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HeroSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopHero />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobileBreadcrumb />
        <MobileSkipStrip />
        <MobileHero />
      </div>
    </>
  );
}
