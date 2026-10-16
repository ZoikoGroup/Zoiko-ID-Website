import Image from "next/image";
import Link from "next/link";

interface DirectAnswerCard {
  image: string;
  icon: string;
  title: string;
  descLine1: string;
  descLine2: string;
}

const cards: DirectAnswerCard[] = [
  {
    image: "/integrations-operate/img-03157c1420efad2823a85b43671201216ba4c03c.png",
    icon: "/integrations-operate/icon-334_4201.svg",
    title: "Identity interfaces",
    descLine1: "Federation and standards- based sign-in alongside your existing identity",
    descLine2: "provider.",
  },
  {
    image: "/integrations-operate/img-0b1f4332602f2486da29b1d94d442217465ebcc6.png",
    icon: "/integrations-operate/icon-334_4214.svg",
    title: "Authority interfaces",
    descLine1: "Scoped, time-bound decisions that applications and policy consumers can",
    descLine2: "request.",
  },
  {
    image: "/integrations-operate/img-389f3d9154f950bf2e5277803b961362f8bcb4b9.png",
    icon: "/integrations-operate/icon-334_4226.svg",
    title: "Evidence interfaces",
    descLine1: "Reviewable records explaining who acted,",
    descLine2: "under what authority, and when.",
  },
];

export default function IntegrationsOperateDirectAnswerSection() {
  return (
    <section className="bg-white-solid px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-[60px]">
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col items-center gap-5 text-center">
          <h2 className="font-dm-serif text-3xl font-normal text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[62.4px]">
            What are Zoiko iD integrations?
          </h2>

          <p className="max-w-[777px] font-manrope text-base font-normal leading-7 text-[#64748B] sm:text-[16.8px] sm:leading-[28.56px]">
            Zoiko iD integrations are designed interoperability patterns that connect Zoiko iD&apos;s identity, authority,
            <br className="hidden md:block" />
            {" "}and evidence functions with systems you already run. They are governed concepts, not a turnkey
            <br className="hidden md:block" />
            {" "}connector promise: each named interface carries its own source-dependent implementation status.
          </p>
        </div>

        {/* 3 Cards Row */}
        <div className="grid w-full grid-cols-1 gap-7 md:grid-cols-3">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col overflow-hidden rounded-[12px] border border-[#E2E8F0] bg-white-solid shadow-xs transition-shadow duration-200 hover:shadow-lg"
            >
              {/* Card Photo - Flush edge-to-edge */}
              <div className="relative h-[170px] w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-7">
                {/* Icon Badge */}
                <div className="flex size-[52px] h-[54px] items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,rgba(34,184,214,0.18)_0%,rgba(37,99,235,0.14)_100%)]">
                  <Image
                    src={card.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="shrink-0"
                  />
                </div>

                {/* Card Title */}
                <h3 className="mt-4 font-manrope text-[16.3px] font-bold leading-[27.7px] text-[#071426]">
                  {card.title}
                </h3>

                {/* Card Description with exact line break */}
                <p className="mt-2 font-manrope text-[14.9px] font-normal leading-[25.3px] text-[#64748B]">
                  {card.descLine1}
                  <br className="hidden sm:block" />
                  {" "}{card.descLine2}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Box */}
        <div className="w-full rounded-[12px] border-l-4 border-[#F59E0B] bg-[#FFFBEB] p-6 sm:px-7 sm:py-6">
          <p className="font-manrope text-base font-normal leading-[27.2px] text-[#475569]">
            <strong className="font-bold text-[#071426]">Implementation status varies.</strong>{" "}
            Each interface is listed with its own source-approved status. Architecture categories on this page do not mean a product-specific connector is released.{" "}
            <Link
              href="/overview"
              className="font-medium text-[#2563EB] underline hover:text-blue-700"
            >
              Read the Architecture overview
            </Link>
            {" · "}
            <Link
              href="/overview"
              className="font-medium text-[#2563EB] underline hover:text-blue-700"
            >
              Read the Platform overview
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
