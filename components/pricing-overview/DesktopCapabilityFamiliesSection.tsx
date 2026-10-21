const left = [
  { title: "Authentication & SSO", body: "Sign-in and federation alongside your existing identity provider." },
  { title: "Identity verification and credentials", body: "Verification of claims and the issuing of credentials." },
  { title: "Delegated authority and authorization", body: "Bounded permission to act for another party." },
];
const right = [
  { title: "Machine and AI-agent identity", body: "Identity and sponsorship for non-human actors." },
  { title: "Continuous trust and revocation", body: "Re-evaluating access as context changes." },
  { title: "Evidence and enterprise integration", body: "Decision evidence and integration with enterprise systems." },
];

function Column({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ul className="flex flex-col pt-[39px]">
      {items.map((i) => (
        <li
          key={i.title}
          className="relative flex flex-col items-start gap-[3.75px] border-b border-solid border-[#e2e8f0] pb-[14px] pl-[28px] pt-[13px]"
        >
          <span className="absolute left-0 top-[22px] size-[8px] rounded-[4px] bg-[#22b8d6]" />
          <h3 className="font-manrope font-normal text-[15px] leading-[24.75px] text-[#334155]">{i.title}</h3>
          <p className="w-full font-manrope font-normal text-[13px] leading-[21.45px] text-[#64748b]">{i.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default function DesktopCapabilityFamiliesSection() {
  return (
    <section
      id="section-02"
      className="flex w-full flex-col items-start border-b border-solid border-[#e2e8f0] pb-[105px]"
    >
      <div className="flex w-full flex-col items-start gap-[36px]">
        <div className="flex w-full flex-col items-start">
          <p className="font-dm-serif font-normal text-[96px] leading-[96px] text-[#e0f2fe]">02</p>
          <h2 className="pb-[0.89px] font-dm-serif font-normal text-[52px] leading-[57.9px] text-[#07111f]">
            Capability families
          </h2>
          <p className="max-w-[720px] font-manrope font-normal text-[17px] leading-[28px] text-[#64748b]">
            Six capability areas, each linking to source-controlled product material. Naming an area does
            not confirm that it is included in any proposal.
          </p>
        </div>
        <div className="grid min-h-[295px] w-full grid-cols-2 items-start gap-x-[50px]">
          <Column items={left} />
          <Column items={right} />
        </div>
      </div>
    </section>
  );
}
