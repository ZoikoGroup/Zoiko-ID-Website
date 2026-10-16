import Image from "next/image";

interface B2bCard {
  icon: string;
  title: string;
  description: string;
  isDashed?: boolean;
}

const b2bCards: B2bCard[] = [
  {
    icon: "/integrations-operate/icon-334_4625.svg",
    title: "Actor",
    description: "The person or service that authenticated.",
  },
  {
    icon: "/integrations-operate/icon-334_4634.svg",
    title: "Customer tenant",
    description:
      "The administrative boundary that holds\nthe customer's configuration.",
    isDashed: true,
  },
  {
    icon: "/integrations-operate/icon-334_4643.svg",
    title: "Represented organization",
    description:
      "The organization on whose behalf an actor\nacts, only where a mandate exists.",
  },
];

export default function IntegrationsOperateB2bSection() {
  return (
    <section className="bg-[#F1F5F9] px-4 py-16 sm:px-8 lg:px-12 lg:py-[95px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-[23px]">
        {/* Top Banner Image: Team Huddle */}
        <div className="relative h-[260px] w-full overflow-hidden rounded-[12px]">
          <Image
            src="/integrations-operate/img-8e710475536107105c0baf8564132e4be870ce18.png"
            alt="Team meeting around a table"
            fill
            sizes="(min-width: 1120px) 1120px, 100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Section Heading & Subtitle */}
        <div className="flex flex-col items-center pt-[2px] text-center">
          <h2 className="font-dm-serif text-3xl font-normal text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[62.4px]">
            Integrate organization and B2B context
          </h2>

          <p className="mt-[23px] max-w-[860px] font-manrope text-base font-normal leading-7 text-[#64748B] sm:text-[16.8px] sm:leading-[28.56px]">
            Tenant, affiliation, and mandate are separate concepts. None of them is inferred from an email domain or a
            <br className="hidden sm:block" />
            {" "}successful identity match.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid w-full grid-cols-1 gap-5 pt-[2px] md:grid-cols-3">
          {b2bCards.map((card, idx) => (
            <div
              key={idx}
              className={`flex flex-col gap-[7.2px] rounded-[12px] bg-white-solid p-6 pb-[26px] shadow-xs ${
                card.isDashed
                  ? "border-2 border-dashed border-[#22B8D6]"
                  : "border border-[#E2E8F0]"
              }`}
            >
              <div className="flex size-[52px] items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,rgba(34,184,214,0.18)_0%,rgba(37,99,235,0.14)_100%)]">
                <Image
                  src={card.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="shrink-0"
                />
              </div>

              <h3 className="mt-1 font-manrope text-[16.3px] font-bold leading-7 text-[#071426]">
                {card.title}
              </h3>

              <p className="whitespace-pre-line font-manrope text-[14.4px] font-normal leading-6 text-[#64748B]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Callout Box (Buttery White with 2 lines only) */}
        <div className="w-full rounded-[12px] border-l-4 border-[#F59E0B] bg-[#FFFBEB] px-[26px] pt-[26px] pb-[22px]">
          <p className="font-manrope text-base font-normal leading-[27.2px] text-[#475569]">
            <strong className="font-bold text-[#071426]">Not inferred.</strong>{" "}
            Tenant membership and mandates are never assumed from email domain matches or identity matches alone. They
            <br className="hidden sm:block" />
            {" "}require explicit, authorized records.
          </p>
        </div>
      </div>
    </section>
  );
}
