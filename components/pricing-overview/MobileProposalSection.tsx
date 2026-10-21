import Image from "next/image";

const rows = [
  { icon: "actor-classes", title: "Actor classes", body: "Which people, organizations, services, machines and agents are in scope." },
  { icon: "products-capabilities", title: "Products and capabilities", body: "Which Zoiko iD capabilities you want to evaluate." },
  { icon: "integration-pattern", title: "Integration pattern", body: "How the platform would sit beside your existing systems." },
  { icon: "security-deployment", title: "Security and deployment needs", body: "Security requirements, evidence retention and deployment considerations." },
];

export default function MobileProposalSection() {
  return (
    <section id="section-01" className="w-full scroll-mt-[80px] px-[11px] pt-[115px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start border-b border-solid border-[#e2e8f0] pb-[90px]">
        <p className="font-dm-serif -mb-[9px] w-full text-[64px] font-normal leading-[64px] text-[#e0f2fe]">01</p>
        <h2 className="font-dm-serif -mb-[9px] w-full text-[30px] font-normal leading-[34.5px] text-[#2563eb]">
          What determines a proposal?
        </h2>
        <div className="-mb-[9px] w-full max-w-[720px] pt-[22.07px]">
          <p className="font-manrope text-[17px] font-normal leading-[28px] text-[#64748b]">
            These are evaluation inputs, the questions a sales conversation will explore. They are not approved billing meters, and listing one does not mean it will be charged.
          </p>
        </div>
        <div className="relative -mb-[9px] h-[269px] w-full overflow-hidden">
          <Image
            src="/pricing-overview/mobile-proposal-inputs.webp"
            alt=""
            fill
            sizes="(max-width: 560px) 100vw, 560px"
            className="object-cover"
          />
        </div>
        <ul className="-mb-[9px] flex w-full flex-col pt-[43px]">
          {rows.map((r) => (
            <li
              key={r.title}
              className="relative flex min-h-[166.69px] w-full items-start border-t border-solid border-[#e2e8f0]"
            >
              <div className="absolute left-0 top-[22px] flex size-[44px] items-center justify-center rounded-[22px] bg-[#e0f2fe]">
                <Image src={`/pricing-overview/mobile-icon-${r.icon}.svg`} width={20} height={20} alt="" />
              </div>
              <div className="flex w-full flex-col items-start gap-[4.9px] pl-[58px] pt-[21px]">
                <h3 className="font-manrope w-full text-[17px] font-bold leading-[28px] text-[#2563eb]">{r.title}</h3>
                <p className="font-manrope w-full pb-[5.725px] text-[15px] font-normal leading-[24.75px] text-[#64748b]">
                  {r.body}
                </p>
                <span className="font-manrope inline-flex rounded-[999px] bg-[#ede9fe] px-[11px] pb-[4.64px] pt-[4.5px] text-[11px] font-extrabold uppercase leading-[18.15px] tracking-[0.88px] text-[#5b21b6]">
                  Evaluation input
                </span>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex w-full flex-col items-center gap-[49.195px] pt-[43px]">
          <div className="relative h-[340px] w-full overflow-hidden rounded-[4px]">
            <Image
              src="/pricing-overview/mobile-evaluation-factors.webp"
              alt=""
              fill
              sizes="(max-width: 560px) 100vw, 560px"
              className="object-cover"
            />
          </div>
          <div className="w-full max-w-[720px] pb-[0.585px]">
            <p className="font-manrope text-[16px] font-normal leading-[26.4px] text-[#64748b]">
              Each factor is a question for evaluation. No unit, quantity or charge is implied by naming it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
