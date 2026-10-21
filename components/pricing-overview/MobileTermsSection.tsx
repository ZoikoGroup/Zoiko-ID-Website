const owners = [
  { title: "Trust Center", desc: "Security and compliance evidence, with its scope." },
  { title: "Privacy", desc: "Privacy architecture and data handling." },
  { title: "Legal terms", desc: "Notices and contractual information." },
];

export default function MobileTermsSection() {
  return (
    <section id="section-08" className="w-full scroll-mt-20 px-[11px] py-[60px]">
      <div className="mx-auto w-full max-w-[560px] border-b border-solid border-[#e2e8f0] pb-[90px]">
        <p className="font-dm-serif text-[64px] font-normal leading-[64px] text-[#e0f2fe]">08</p>
        <h2 className="font-dm-serif text-[30px] font-normal leading-[34.5px] text-[#2563eb]">
          Material terms come from their owners
        </h2>
        <p className="mt-[21.75px] max-w-[720px] pb-[34px] font-manrope text-[17px] font-normal leading-[28px] text-[#64748b]">
          Public claims here are high level. Detailed security evidence, privacy terms and contractual material are held by their owning destinations.
        </p>
        <ul className="w-full border-t-2 border-solid border-[#2563eb]">
          {owners.map((o) => (
            <li key={o.title} className="flex flex-col gap-[5px] pr-[24px] pt-[23px]">
              <span className="font-manrope text-[17px] font-bold leading-[28px] text-[#2563eb]">{o.title}</span>
              <span className="font-manrope text-[14px] font-normal leading-[23.1px] text-[#64748b]">{o.desc}</span>
              <span className="pb-[0.8px] pt-[6px] font-manrope text-[12px] font-bold leading-[19.8px] text-[#92400e]">
                Route pending registry
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
