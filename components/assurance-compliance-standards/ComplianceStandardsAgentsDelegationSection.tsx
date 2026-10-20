import Image from "next/image";

interface DelegationItem {
  iconSrc: string;
  text: string;
}

const delegationItems: DelegationItem[] = [
  {
    iconSrc: "/assurance-compliance-standards/icon-411_6001.svg",
    text: "Principal: the identity that acts.",
  },
  {
    iconSrc: "/assurance-compliance-standards/icon-411_6007.svg",
    text: "Sponsor: the accountable party.",
  },
  {
    iconSrc: "/assurance-compliance-standards/icon-411_6013.svg",
    text: "Mandate: the bounded grant, with scope and expiry.",
  },
  {
    iconSrc: "/assurance-compliance-standards/icon-411_6019.svg",
    text: "Revocation: withdrawal, with timing confirmed per integration.",
  },
];

export default function ComplianceStandardsAgentsDelegationSection() {
  return (
    <section className="bg-[#FFFFFF] px-6 py-16 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-[70px] lg:flex-row">
        {/* Left: Robotic Arm Image */}
        <div className="relative h-[360px] w-full shrink-0 overflow-hidden rounded-[20px] bg-slate-100 sm:h-[440px] lg:h-[480px] lg:w-[480px]">
          <Image
            src="/assurance-compliance-standards/img-f3ee411508a7a770e54eb1ed08d16b582b6b42fe.png"
            alt="Robotic arm representing machine and AI delegation"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 480px, 100vw"
          />
        </div>

        {/* Right: Content & List */}
        <div className="flex flex-1 flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal text-[#0B1B33] sm:text-4xl lg:text-[52px] lg:leading-[58.9px]">
            Authority is evaluated
            <br />
            separately from identity
          </h2>

          <p className="max-w-[560px] pt-[2.5px] font-manrope text-base font-normal leading-[25.6px] text-[#64748B]">
            A machine or AI agent may be identified without being authorized for
            <br className="hidden md:block" />
            {" "}anything. Mandate, sponsor, scope, expiry and revocation are the controls that govern its actions.
          </p>

          <div className="mt-3.5 flex flex-col gap-3">
            {delegationItems.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-3.5 rounded-[12px] bg-[#FFFFFF] py-1"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                  <Image
                    src={item.iconSrc}
                    alt=""
                    width={20}
                    height={20}
                    className="shrink-0"
                  />
                </div>
                <span className="font-manrope text-[14px] font-normal leading-[22.4px] text-[#334155]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
