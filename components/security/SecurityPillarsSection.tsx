import Image from "next/image";

interface PillarCard {
  imageSrc: string;
  imageAlt: string;
  iconSrc: string;
  title: string;
  description: string;
}

const PILLARS: PillarCard[] = [
  {
    imageSrc: "/security/img-e72819a2c3a3374cdd5b3e9d42854ed80e039d2e.png",
    imageAlt: "Identity verification concept",
    iconSrc: "/security/icon-411_20421.svg",
    title: "Identity",
    description: "Who is acting. Authentication and verified\nidentity for people, organizations, services and agents.",
  },
  {
    imageSrc: "/security/img-aa5deed69bcc7d5a622ec042adee00c35a1f7846.png",
    imageAlt: "Authority boundaries concept",
    iconSrc: "/security/icon-411_20434.svg",
    title: "Authority",
    description: "What that actor may do: bounded by grantor, action, resource, purpose, policy, expiry and revocation.",
  },
  {
    imageSrc: "/security/img-4541d0246dad46af3b4e7ff82e06f8c6af60d487.png",
    imageAlt: "Evidence and audit record concept",
    iconSrc: "/security/icon-411_20447.svg",
    title: "Evidence",
    description: "What was decided and why, with the actor, decision basis, policy context and relevant changes available for review.",
  },
];

export default function SecurityPillarsSection() {
  return (
    <section className="w-full bg-[#F1F5F9] py-[105px] px-6 sm:px-12 lg:px-20 xl:px-[160px]">
      <div className="max-w-[1120px] mx-auto flex flex-col gap-[60px]">
        {/* Section Header */}
        <div className="flex flex-col gap-[11px]">
          <h2 className="font-dm-serif text-[36px] sm:text-[44px] lg:text-[52px] leading-[58.9px] text-[#0B1B33]">
            Identity, authority and evidence work<br className="hidden sm:inline" /> together
          </h2>
          <div className="w-full max-w-[820px] pt-[1.9px]">
            <p className="font-manrope text-[16px] leading-[25.6px] text-[#64748B] whitespace-pre-line">
              Each pillar answers a different question. Keeping them separate prevents a successful sign-in from being read{"\n"}as permission.
            </p>
          </div>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[18px] p-[30px_30px_24px] flex flex-col justify-between min-h-[439px] shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image Header */}
              <div className="relative w-full h-[169px] rounded-[12px] overflow-hidden shrink-0">
                <Image
                  src={pillar.imageSrc}
                  alt={pillar.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-col gap-[9px] mt-auto pt-5">
                <div className="w-[52px] h-[52px] rounded-[14px] bg-[#E0F2FE] flex items-center justify-center shrink-0">
                  <Image
                    src={pillar.iconSrc}
                    alt=""
                    width={26}
                    height={26}
                    className="w-[26px] h-[26px]"
                  />
                </div>

                <h3 className="font-dm-serif text-[24px] leading-[30px] text-[#0B1B33]">
                  {pillar.title}
                </h3>

                <p className="font-manrope text-[15px] leading-[24px] text-[#64748B] whitespace-pre-line">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
