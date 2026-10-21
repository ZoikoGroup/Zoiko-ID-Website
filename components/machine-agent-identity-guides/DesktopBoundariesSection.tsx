import Image from "next/image";

const boundaries = [
  { icon: "boundary-credentials.svg", title: "Does not issue credentials", body: "Credential issuance is covered in the technical documentation." },
  { icon: "boundary-mandates.svg", title: "Does not create mandates", body: "No grant is created or changed from this page." },
  { icon: "boundary-legal.svg", title: "Does not give legal advice", body: "Regulatory and legal questions go to counsel and the Privacy Notice." },
  { icon: "boundary-availability.svg", title: "Does not publish availability", body: "Which integrations are live is stated only in approved status records." },
  { icon: "icon-verified.svg", title: "Does not certify conformance", body: "No certification or compliance statement is made here." },
  { icon: "boundary-deployment.svg", title: "Does not describe your deployment", body: "Diagrams are reference patterns, not your topology." },
];

export default function BoundariesSection() {
  return (
    <section className="w-full bg-white py-[105px]">
      <div className="mx-auto flex w-full flex-col gap-[60px] px-[160px]">
        <div className="flex flex-col gap-[12px]">
          <h2 className="font-dm-serif text-[52px] font-normal leading-[57.9px] text-[#07111f]">
            Boundaries of this guide
          </h2>
          <p className="max-w-[820px] pt-[2px] font-manrope text-[16px] font-normal leading-[25.6px] text-[#64748b]">
            A short list of what belongs elsewhere. Each item links to the page that owns it, rather than being answered here.
          </p>
        </div>
        <ul className="grid grid-cols-3 gap-[18px]">
          {boundaries.map((b) => (
            <li key={b.title} className="flex flex-col gap-[8px] rounded-[16px] border border-solid border-[#e2e8f0] bg-white p-[22px]">
              <div className="flex h-[56px] w-[44px] flex-col items-start pb-[12px]">
                <div className="flex size-[44px] items-center justify-center rounded-[12px] bg-[#e0f2fe]">
                  <Image src={`/machine-agent-identity-guides/desktop-${b.icon}`} alt="" width={22} height={22} className="size-[22px]" />
                </div>
              </div>
              <h3 className="pb-[6px] font-manrope text-[17px] font-bold leading-[27.2px] text-[#07111f]">{b.title}</h3>
              <p className="max-w-[320px] font-manrope text-[14px] font-normal leading-[22.4px] text-[#64748b]">{b.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
