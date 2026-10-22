import Image from "next/image";
import Link from "next/link";

const rows: { label: string; value: React.ReactNode }[] = [
  { label: "Entity", value: "Zoiko Tech Inc." },
  { label: "Platform", value: "Zoiko iD" },
  { label: "Relationship", value: <span>Zoiko iD is a Zoiko Tech Inc. <br className="max-xl:hidden" />platform.</span> },
  { label: "Headquarters", value: <span>Sacramento, USA and London, <br className="max-xl:hidden" />UK (see addresses below)</span> },
];

const darkBg =
  "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(11, 27, 49) 0%, rgb(11, 27, 49) 100%)";

export default function DesktopHeroSection() {
  return (
    <section className="relative -mt-[116px] hidden w-full overflow-hidden px-[160px] pb-[105px] pt-[221px] lg:block">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(7,20,38,0.9)] to-[rgba(7,20,38,0.95)]" />
        <Image
          src="/zoiko-tech-inc/desktop-hero-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
      </div>
      <div className="relative flex w-full items-center justify-center gap-[60px]">
        <div className="flex min-w-px flex-1 flex-col items-start gap-[14px]">
          <div className="relative h-[112px] w-[220px] overflow-hidden rounded-[8px] bg-white">
            <Image
              src="/zoiko-tech-inc/desktop-hero-card-visual.webp"
              alt=""
              width={220}
              height={112}
              className="absolute left-0 top-[1.66%] h-[99.04%] w-full"
            />
          </div>
          <p className="w-full pb-[0.77px] pt-[8.86px] font-manrope text-[17.6px] font-normal leading-[29.92px] text-[#cbd5e1]">
            Zoiko iD is a Zoiko Tech Inc. platform, designed around trusted identity, bounded authority and auditable evidence.
          </p>
          <div className="flex h-[77.8px] w-full flex-wrap items-start gap-[14px] pt-[22.8px]">
            <Link
              href="#entity"
              className="flex min-h-[44px] items-center gap-[10px] self-stretch rounded-[8px] bg-[#2563eb] px-[24px] py-[14px] font-manrope text-[15px] font-bold leading-[24px] text-white transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
            >
              Explore Zoiko ID
            </Link>
            <Link
              href="/security-contact"
              className="flex min-h-[44px] items-center gap-[10px] self-stretch rounded-[8px] border border-solid border-[rgba(255,255,255,0.8)] px-[24px] py-[14px] font-manrope text-[15.2px] font-bold leading-[25px] text-white transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="flex w-[453px] shrink-0 flex-col items-start gap-[12px] rounded-[22px] bg-[#f1f5f9] p-[34px]">
          <div className="w-[380px] overflow-clip rounded-[8px] border border-solid border-[#dce3ee] bg-[#f7f8fa]">
            <div className="px-[22px] py-[18px]" style={{ backgroundImage: darkBg }}>
              <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.44px] text-white">
                Entity summary
              </p>
            </div>
            <dl className="py-[6px]">
              {rows.map((r, i) => (
                <div
                  key={r.label}
                  className={`flex items-start px-[22px] pb-[14px] pt-[13px] ${i < rows.length - 1 ? "border-b border-solid border-[#dce3ee]" : ""}`}
                >
                  <dt className="w-[130px] shrink-0 pt-px font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[0.72px] text-[#07111f]">
                    {r.label}
                  </dt>
                  <dd className="min-w-px flex-1 font-manrope text-[14px] font-normal leading-[23.1px] text-[#334155]">
                    {r.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="border-t border-solid border-[#f4e3b5] bg-[#fffbeb] px-[22px] py-[14px] font-manrope text-[12px] font-normal leading-[19.8px] text-[#7c4a03]">
              <span className="xl:whitespace-nowrap">Entity facts are shown only where documented. Legal registry, <br className="max-xl:hidden" />
ownership and leadership details are not stated on this page.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
