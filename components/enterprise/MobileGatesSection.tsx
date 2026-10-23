import Image from "next/image";

const gates = [
  { title: "Discover", text: "Read how the architecture fits." },
  { title: "Scope", text: "Choose the identity classes in view." },
  { title: "Validate", text: "Review architecture, API and trust material." },
  { title: "Govern", text: "Agree controls with security and privacy." },
  { title: "Operate", text: "Plan ongoing ownership and change." },
];

export default function MobileGatesSection() {
  return (
    <section id="gates" className="lg:hidden px-[11px] pt-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[14px]">
        <div className="relative h-[19.19px] w-full">
          <span aria-hidden="true" className="absolute left-0 top-1/2 h-[2px] w-[28px] -translate-y-1/2 bg-[#22b8d6]" />
          <p className="absolute left-[38px] top-1/2 -translate-y-1/2 whitespace-nowrap font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[#2563eb]">
            Enterprise adoption
          </p>
        </div>
        <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb] [word-break:break-word]">
          Five conceptual gates
        </h2>
        <p className="max-w-[760px] font-manrope text-[16px] font-normal leading-[25.6px] text-[#64748b]">
          These gates describe how an evaluation is usually structured. Each has an owner, and none commits you to a timeline or a deployment.
        </p>
        <ol className="flex w-full flex-col border-t border-[#e2e8f0] pt-[16.01px]">
          {gates.map((g) => (
            <li key={g.title} className="flex flex-col gap-[4.09px] border-b border-[#e2e8f0] py-[20px] pl-[64px]">
              <p className="font-manrope text-[16px] font-bold leading-[25.6px] text-[#2563eb]">{g.title}</p>
              <p className="font-manrope text-[14px] font-normal leading-[22.4px] text-[#64748b]">{g.text}</p>
            </li>
          ))}
        </ol>
        <div className="relative h-[280px] w-full overflow-hidden rounded-[18px]">
          <Image
            src="/enterprise/mobile-enquiry-meeting.webp"
            alt="Enterprise team in an evaluation meeting"
            fill
            sizes="(max-width: 560px) 100vw, 560px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
