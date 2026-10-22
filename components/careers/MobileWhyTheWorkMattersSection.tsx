import Image from "next/image";
import Link from "next/link";

const items = [
  {
    n: "01",
    title: <>Establish identity</>,
    body: (
      <>
        Who or what is represented, for people,
        <br />
        organizations, services, machines and
        <br />
        AI agents.
      </>
    ),
    cta: "Explore identity",
    href: "/identity-guides",
  },
  {
    n: "02",
    title: (
      <>
        Govern delegated
        <br />
        authority
      </>
    ),
    body: (
      <>
        What an actor may do, on whose
        <br />
        behalf, within which scope and for how
        <br />
        long.
      </>
    ),
    cta: "Explore delegation",
    href: "/authority-explainers",
  },
  {
    n: "03",
    title: (
      <>
        Preserve audit-ready
        <br />
        evidence
      </>
    ),
    body: (
      <>
        A descriptive record of important
        <br />
        decisions. It is not an assurance
        <br />
        guarantee.
      </>
    ),
    cta: "Explore evidence",
    href: "/trust-center",
  },
];

export default function MobileWhyTheWorkMattersSection() {
  return (
    <section id="why-the-work-matters" className="bg-white px-[22px] lg:hidden">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[60px]">
        <div className="flex w-full flex-col items-start gap-[14.8px]">
          <div className="flex h-[19.8px] w-full items-center gap-[12px]">
            <span className="h-[2px] w-[36px] bg-[#22b8d6]" />
            <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[2.16px] text-[#1d4ed8]">
              Why the work matters
            </p>
          </div>
          <h2 className="w-full pb-[0.745px] pt-[2.115px] font-dm-serif text-[32px] font-normal leading-[35.84px] tracking-[-0.16px] text-[#0b1b33]">
            Three questions the
            <br />
            platform answers
          </h2>
          <p className="w-full max-w-[700px] pb-[0.54px] font-manrope text-[18px] font-normal leading-[29.7px] text-[#5b6b82]">
            Each area is a product domain, not a job
            <br />
            requirement or a team description.
          </p>
          <div className="relative h-[361.19px] w-full overflow-hidden rounded-[20px]">
            <Image
              src="/careers/mobile-product-areas.webp"
              alt=""
              fill
              sizes="(max-width: 560px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full pt-[20px]">
          <ul className="w-full border-b border-[#dce3ee]">
            {items.map((it) => (
              <li
                key={it.n}
                className="flex w-full items-start gap-[20px] border-t border-[#dce3ee] py-[34px]"
              >
                <span className="w-[60px] shrink-0 font-dm-serif text-[40px] font-normal leading-[40px] text-[#22b8d6]">
                  {it.n}
                </span>
                <div className="flex min-w-px flex-1 flex-col items-start gap-[8.8px] pb-[1.3px]">
                  <h3 className="w-full font-dm-serif text-[30px] font-normal leading-[36px] text-[#0b1b33]">
                    {it.title}
                  </h3>
                  <p className="w-full font-manrope text-[15px] font-normal leading-[24.75px] text-[#5b6b82]">
                    {it.body}
                  </p>
                  <Link
                    href={it.href}
                    className="inline-flex h-[26.29px] items-center gap-[5px] rounded-sm font-manrope text-[14px] font-bold leading-[23.1px] text-[#1d4ed8] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2"
                  >
                    {it.cta}
                    <Image
                      src="/careers/mobile-icon-arrow-1.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
