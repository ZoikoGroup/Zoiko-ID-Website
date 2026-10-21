import Image from "next/image";

const factors = [
  {
    icon: "/pricing-overview/desktop-icon-actor-classes.svg",
    title: "Actor classes",
    body: "Which people, organizations, services, machines and agents are in scope.",
  },
  {
    icon: "/pricing-overview/desktop-icon-products-capabilities.svg",
    title: "Products and capabilities",
    body: "Which Zoiko iD capabilities you want to evaluate.",
  },
  {
    icon: "/pricing-overview/desktop-icon-integration-pattern.svg",
    title: "Integration pattern",
    body: "How the platform would sit beside your existing systems.",
  },
  {
    icon: "/pricing-overview/desktop-icon-security-deployment.svg",
    title: "Security and deployment needs",
    body: "Security requirements, evidence retention and deployment considerations.",
  },
];

export default function DesktopProposalSection() {
  return (
    <section
      id="section-01"
      className="flex w-full flex-col items-start gap-[36px] border-b border-solid border-[#e2e8f0] pb-[105px]"
    >
      <div className="flex w-full flex-col items-start">
        <p className="font-dm-serif font-normal text-[96px] leading-[96px] text-[#e0f2fe]">01</p>
        <h2 className="pb-[0.89px] font-dm-serif font-normal text-[52px] leading-[57.9px] text-[#07111f]">
          What determines a proposal?
        </h2>
        <p className="max-w-[720px] font-manrope font-normal text-[17px] leading-[28px] text-[#64748b]">
          These are evaluation inputs, the questions a sales conversation will explore. They are not
          approved billing meters, and listing one does not mean it will be charged.
        </p>
      </div>

      <div className="flex w-full flex-col items-start">
        <div className="relative h-[269px] w-full overflow-hidden rounded-[32px]">
          <Image
            src="/pricing-overview/desktop-proposal-inputs.webp"
            alt=""
            fill
            sizes="770px"
            className="object-cover object-[50%_25.4%]"
          />
        </div>
        <ul className="grid w-full grid-cols-2 gap-x-[50px] pt-[43px]">
          {factors.map((f) => (
            <li
              key={f.title}
              className="relative min-h-[166.69px] border-t border-solid border-[#e2e8f0]"
            >
              <div className="absolute left-0 top-[22px] flex size-[44px] items-center justify-center rounded-[22px] bg-[#e0f2fe]">
                <Image src={f.icon} width={20} height={20} alt="" />
              </div>
              <div className="flex flex-col items-start gap-[4.9px] pl-[58px] pt-[21px]">
                <h3 className="w-full font-manrope font-bold text-[17px] leading-[28px] text-[#07111f]">
                  {f.title}
                </h3>
                <p className="w-full pb-[5.725px] font-manrope font-normal text-[15px] leading-[24.75px] text-[#64748b]">
                  {f.body}
                </p>
                <span className="rounded-[999px] bg-[#ede9fe] px-[11px] pb-[4.64px] pt-[4.5px] font-manrope font-extrabold text-[11px] uppercase leading-[18.15px] tracking-[0.88px] text-[#5b21b6]">
                  Evaluation input
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid w-full grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center gap-x-[50px]">
        <div className="relative h-[340px] w-full">
          <Image
            src="/pricing-overview/desktop-evaluation-factors.webp"
            alt=""
            fill
            sizes="420px"
            className="rounded-[4px] object-cover"
          />
        </div>
        <p className="max-w-[720px] font-manrope font-normal text-[16px] leading-[26.4px] text-[#64748b]">
          Each factor is a question for evaluation. No unit, quantity or charge is implied by naming it.
        </p>
      </div>
    </section>
  );
}
