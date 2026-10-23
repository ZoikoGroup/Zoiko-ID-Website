import Image from "next/image";

const items = [
  { title: "Identity estate", body: "How existing identity providers and directories connect." },
  { title: "Security requirements", body: "Controls your security team will need to review." },
  { title: "Evidence retention", body: "How long decision records are kept, and who can see them." },
  { title: "Enterprise provisioning", body: "How accounts and roles are created and maintained." },
  { title: "Privacy and data handling", body: "What personal data is processed, and under which notices." },
];

export default function DesktopConsiderationsSection() {
  return (
    <section
      id="section-05"
      className="flex w-full flex-col items-start gap-[36px] border-b border-solid border-[#e2e8f0] pb-[105px]"
    >
      <div className="flex w-full flex-col items-start">
        <p className="w-full font-dm-serif font-normal text-[96px] leading-[96px] text-[#e0f2fe]">05</p>
        <h2 className="w-full font-dm-serif font-normal text-[52px] leading-[57.9px] text-[#07111f]">
          Considerations that shape an evaluation
        </h2>
        <p className="max-w-[720px] font-manrope font-normal text-[17px] leading-[28px] text-[#64748b]">
          These dependencies affect a proposal. This page does not promise any cloud provider, region, service level or data residency.
        </p>
      </div>
      <div className="flex w-full items-center justify-center gap-[50px]">
        <div className="relative h-[300px] min-w-px flex-1 rounded-[4px]">
          <Image
            src="/pricing-overview/desktop-identity-estate.webp"
            alt="Identity estate overview"
            fill
            sizes="(min-width: 1440px) 360px, 35vw"
            className="rounded-[4px] object-cover"
          />
        </div>
        <ul className="flex min-w-px flex-1 flex-col items-start">
          {items.map((it) => (
            <li
              key={it.title}
              className="relative flex w-full flex-col items-start gap-[3.75px] border-b border-solid border-[#e2e8f0] pb-[14px] pl-[28px] pt-[13px]"
            >
              <span aria-hidden className="absolute left-0 top-[22px] size-[8px] rounded-[4px] bg-[#22b8d6]" />
              <p className="font-manrope font-normal text-[15px] leading-[24.75px] text-[#334155]">{it.title}</p>
              <p className="w-full font-manrope font-normal text-[13px] leading-[21.45px] text-[#64748b]">{it.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
