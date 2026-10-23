import Image from "next/image";

const criteria = [
  { term: "Authenticate", text: " — who is this?" },
  { term: "Authorize", text: " — may this action happen?" },
  { term: "Prove the mandate", text: " — on whose behalf, and why?" },
];

export default function MobileDecisionCriteriaSection() {
  return (
    <section id="decision-criteria" className="w-full px-[22px] py-[60px] lg:hidden">
      <div className="mx-auto w-full max-w-[560px]">
        <div className="flex w-full flex-col items-center gap-[50px] border-b border-solid border-[#e2e8f0] pb-[90px] pt-[89px]">
          <div className="flex w-full flex-col items-start">
            <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.44px] text-[#2563eb]">
              Decision criteria
            </p>
            <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
              Authenticate is not authorize, and neither proves a mandate
            </h2>
            <p className="pt-[13.39px] font-manrope text-[16px] leading-[25.6px] text-[#64748b]">
              Enterprises often ask one system to answer three different questions. Keeping them
              separate prevents a successful sign-in from being read as permission to act.
            </p>
            <ul className="flex w-full flex-col gap-[9.5px] pt-[17.99px]">
              {criteria.map((c) => (
                <li
                  key={c.term}
                  className="relative pl-[22px] font-manrope text-[15px] leading-[24px] text-[#334155]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-[9.5px] size-[8px] rounded-[2px] bg-[#22b8d6]"
                  />
                  <strong className="font-bold text-[#2563eb]">{c.term}</strong>
                  {c.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[240px] w-full overflow-hidden rounded-[18px]">
            <Image
              src="/enterprise/mobile-architecture-whiteboard.webp"
              alt=""
              fill
              sizes="(max-width: 560px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-[49px] py-[90px]">
          <div className="relative h-[240px] w-full overflow-hidden rounded-[18px]">
            <Image
              src="/enterprise/mobile-decision-visual.webp"
              alt=""
              fill
              sizes="(max-width: 560px) 100vw, 560px"
              className="object-cover"
            />
          </div>
          <div className="flex w-full flex-col items-start">
            <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.44px] text-[#2563eb]">
              How a decision is made and explained
            </p>
            <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
              Five distinct nodes, each with its own owner
            </h2>
            <p className="pb-[22px] pt-[14px] font-manrope text-[16px] leading-[25.6px] text-[#64748b]">
              Actor and organization, mandate, policy, decision and reviewable evidence. Each node
              has its own limits, so none can stand in for another.
            </p>
            <div className="w-full rounded-[10px] bg-[#f1f5f9] px-[18px] py-[14px]">
              <p className="font-manrope text-[14px] leading-[22.4px] text-[#2563eb]">
                <strong className="font-bold">Text equivalent.</strong>
                <span className="font-normal">
                  {" "}
                  An actor (person, service or AI agent acting for an organization) makes a request;
                  a mandate states who granted authority, purpose, resources and timeframe; policy is
                  evaluated against current context; a decision is produced for this request;
                  reviewable evidence records the basis and is shown only to authorized reviewers.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
