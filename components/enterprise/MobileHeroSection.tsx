import Image from "next/image";
import Link from "next/link";

const chain = [
  { n: "01", title: "Actor", sub: "Who or what is acting" },
  { n: "02", title: "Mandate", sub: "Bounded authority" },
  { n: "03", title: "Policy", sub: "Rules applied now" },
  { n: "04", title: "Decision", sub: "Outcome for this request" },
  { n: "05", title: "Evidence", sub: "Reviewable record" },
];

export default function MobileHeroSection() {
  return (
    <section className="lg:hidden relative w-full overflow-hidden font-manrope">
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/enterprise/mobile-hero-trust-chain.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(118.09436280167341deg, rgba(7, 20, 38, 0.97) 0%, rgba(15, 33, 64, 0.92) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[560px] flex-col items-start px-[22px] pt-[110px]">
        <div className="flex w-full flex-col items-end gap-[70px] pb-[90px]">
          <div className="flex w-full flex-col items-start gap-[14px]">
            <div className="flex min-h-[38.38px] w-full items-center gap-[10px]">
              <span className="h-[2px] w-[25.53px] shrink-0 bg-[#22b8d6]" />
              <p className="text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[#22b8d6]">
                Enterprise identity &amp; delegated
                <br />
                authority
              </p>
            </div>
            <h1 className="w-full font-dm-serif text-[40px] font-normal leading-[43.2px] text-white">
              Identity, authority and evidence for enterprise systems.
            </h1>
            <div className="w-full max-w-[760px] pt-[7.295px]">
              <p className="text-[18px] leading-[28.8px] text-[#cbd5e1]">
                Zoiko iD is designed to help enterprises establish who or what is acting, evaluate bounded authority,
                respond to changing trust signals and preserve reviewable evidence across existing identity and
                application estates. Supported integrations and deployment patterns must be confirmed for your
                environment.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-[18px]">
            <div className="w-full max-w-[640px]">
              <p className="text-[17px] font-normal leading-[27.2px] text-[#e2e8f0]">
                Zoiko iD is designed to help enterprises establish who or what is acting, evaluate bounded delegated
                authority, respond to changing trust signals and preserve reviewable evidence alongside existing
                identity and application estates. Authentication confirms identity; authority decides what an actor
                may do. Supported integrations are confirmed for each environment.
              </p>
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-[14px] pt-[16px]">
              <Link
                href="/security-contact"
                className="flex min-h-[46px] items-center whitespace-nowrap rounded-[8px] border border-[#2563eb] bg-[#22b8d6] px-[24px] py-[14px] text-[15px] font-bold leading-[24px] text-[#071426] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Talk to an identity expert
              </Link>
              <Link
                href="#authentication"
                className="flex min-h-[46px] items-center whitespace-nowrap rounded-[8px] border border-[rgba(255,255,255,0.6)] px-[24px] py-[14px] text-[15px] font-bold leading-[24px] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explore platform
              </Link>
            </div>
            <p className="w-full text-[14px] font-normal leading-[22.4px]">
              <span className="text-[#94a3b8]">View developer docs → </span>
              <span className="text-[#64748b]">(route pending)</span>
            </p>
          </div>
        </div>

        <ol className="-mr-[22px] flex w-[calc(100%+22px)] flex-col border-t border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] px-[22px] backdrop-blur-[24px]">
          {chain.map((c) => (
            <li key={c.n} className="flex flex-col items-start gap-[3px] pb-[41.59px] pr-[22px] pt-[33px]">
              <span className="text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.2px] text-[#22b8d6]">
                {c.n}
              </span>
              <span className="pt-[5px] text-[15px] font-bold leading-[24px] text-white">{c.title}</span>
              <span className="text-[13px] leading-[20.8px] text-[#94a3b8]">{c.sub}</span>
            </li>
          ))}
        </ol>

        <p className="w-full pb-[26.29px] pt-[13.09px] text-[12px] leading-[19.2px] text-[#94a3b8]">
          Conceptual trust chain. A text equivalent is in the first section of the design below. Not a product
          screenshot.
        </p>
      </div>
    </section>
  );
}
