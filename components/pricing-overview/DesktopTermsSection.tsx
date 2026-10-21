const owners = [
  { title: "Trust Center", body: "Security and compliance evidence, with its scope." },
  { title: "Privacy", body: "Privacy architecture and data handling." },
  { title: "Legal terms", body: "Notices and contractual information." },
];

export default function DesktopTermsSection() {
  return (
    <section
      id="section-08"
      className="flex w-full flex-col items-start gap-[36px] border-b border-solid border-[#e2e8f0] pb-[90px]"
    >
      <div className="flex w-full flex-col items-start">
        <p className="font-dm-serif text-[96px] font-normal leading-[96px] text-[#e0f2fe]">08</p>
        <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[57.9px] text-[#07111f]">
          Material terms come from their owners
        </h2>
        <p className="max-w-[720px] font-manrope text-[17px] font-normal leading-[28px] text-[#64748b]">
          Public claims here are high level. Detailed security evidence, privacy terms and contractual material are held by their owning destinations.
        </p>
      </div>
      <ul className="flex w-full items-start border-t-2 border-solid border-[#07111f]">
        {owners.map((o) => (
          <li key={o.title} className="flex min-w-px flex-1 flex-col items-start gap-[5px] pr-[24px] pt-[23px]">
            <h3 className="w-full font-manrope text-[17px] font-bold leading-[28px] text-[#07111f]">{o.title}</h3>
            <p className="w-full font-manrope text-[14px] font-normal leading-[23.1px] text-[#64748b]">{o.body}</p>
            <p className="w-full pt-[6px] font-manrope text-[12px] font-bold leading-[19.8px] text-[#92400e]">
              Route pending registry
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
