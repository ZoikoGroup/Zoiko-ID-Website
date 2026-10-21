const items = [
  { title: "Authentication & SSO", body: "Sign-in and federation alongside your existing identity provider." },
  { title: "Identity verification and credentials", body: "Verification of claims and the issuing of credentials." },
  { title: "Delegated authority and authorization", body: "Bounded permission to act for another party." },
  { title: "Machine and AI-agent identity", body: "Identity and sponsorship for non-human actors." },
  { title: "Continuous trust and revocation", body: "Re-evaluating access as context changes." },
  { title: "Evidence and enterprise integration", body: "Decision evidence and integration with enterprise systems." },
];

export default function MobileCapabilitySection() {
  return (
    <section id="section-02" className="w-full scroll-mt-[80px] px-[11px] pt-[90px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start border-b border-solid border-[#e2e8f0] pb-[90px]">
        <p className="font-dm-serif -mb-[9px] w-full text-[64px] font-normal leading-[64px] text-[#e0f2fe]">02</p>
        <h2 className="font-dm-serif -mb-[9px] w-full text-[30px] font-normal leading-[34.5px] text-[#2563eb]">
          Capability families
        </h2>
        <div className="-mb-[9px] w-full max-w-[720px] pt-[22.07px]">
          <p className="font-manrope text-[17px] font-normal leading-[28px] text-[#64748b]">
            Six capability areas, each linking to source-controlled product material. Naming an area does not confirm that it is included in any proposal.
          </p>
        </div>
        <ul className="flex w-full flex-col pt-[39px]">
          {items.map((it) => (
            <li
              key={it.title}
              className="relative flex w-full flex-col items-start gap-[3.75px] border-b border-solid border-[#e2e8f0] pb-[14px] pl-[28px] pt-[13px]"
            >
              <span aria-hidden="true" className="absolute left-0 top-[22px] size-[8px] rounded-[4px] bg-[#22b8d6]" />
              <h3 className="font-manrope text-[15px] font-normal leading-[24.75px] text-[#334155]">{it.title}</h3>
              <p className="font-manrope w-full text-[13px] font-normal leading-[21.45px] text-[#64748b]">{it.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
