import Image from "next/image";

const items = [
  { title: "Identity estate", body: "How existing identity providers and directories connect." },
  { title: "Security requirements", body: "Controls your security team will need to review." },
  { title: "Evidence retention", body: "How long decision records are kept, and who can see them." },
  { title: "Enterprise provisioning", body: "How accounts and roles are created and maintained." },
  { title: "Privacy and data handling", body: "What personal data is processed, and under which notices." },
];

export default function MobileEvaluationConsiderationsSection() {
  return (
    <section id="section-05" className="w-full px-[11px]">
      <div className="mx-auto w-full max-w-[560px] border-b border-solid border-[#e2e8f0] pb-[90px]">
        <p className="mb-[-8.7px] font-dm-serif font-normal text-[64px] leading-[64px] text-[#e0f2fe]">05</p>
        <h2 className="mb-[-8.7px] pb-[0.75px] font-dm-serif font-normal text-[30px] leading-[34.5px] text-[#2563eb]">
          Considerations that shape an evaluation
        </h2>
        <div className="mb-[-8.7px] max-w-[720px] pt-[21.745px]">
          <p className="font-manrope font-normal text-[17px] leading-[28px] text-[#64748b]">
            These dependencies affect a proposal. This page does not promise any cloud provider, region, service level or data residency.
          </p>
        </div>
        <div className="flex w-full items-center justify-center gap-[50px] pt-[42.7px]">
          <div className="relative h-[300px] min-w-px flex-[1_0_0] overflow-hidden rounded-[4px]">
            <Image
              src="/pricing-overview/mobile-identity-estate.webp"
              alt="Identity estate and enterprise systems"
              fill
              sizes="(min-width: 560px) 255px, 160px"
              className="object-cover"
            />
          </div>
          <ul className="flex min-w-px flex-[1_0_0] flex-col items-start">
            {items.map((i) => (
              <li
                key={i.title}
                className="relative flex w-full flex-col items-start gap-[3.1px] border-b border-solid border-[#e2e8f0] pb-[14px] pl-[28px] pt-[13px]"
              >
                <span aria-hidden="true" className="absolute left-0 top-[22px] size-[8px] rounded-[4px] bg-[#22b8d6]" />
                <p className="font-manrope font-normal text-[15px] leading-[24.75px] text-[#334155]">{i.title}</p>
                <p className="w-full font-manrope font-normal text-[13px] leading-[21.45px] text-[#64748b]">{i.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
