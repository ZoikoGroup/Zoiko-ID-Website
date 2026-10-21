import Image from "next/image";

const actors = [
  { name: "Service", icon: "icon-service", img: "actor-service", desc: "A named software component that offers a function to others.", concern: "Concern: who is calling", example: "Example: a reporting service", alt: "A service component" },
  { name: "Workload", icon: "icon-workload", img: "actor-workload", desc: "A running unit of work, such as a job or container, with its own context.", concern: "Concern: context changes", example: "Example: a batch job", alt: "A running workload" },
  { name: "Machine", icon: "icon-machine", img: "actor-machine", desc: "A device or physical process acting in the world.", concern: "Concern: physical safety", example: "Example: a sensor gateway", alt: "A machine or device" },
  { name: "AI agent", icon: "icon-ai-agent", img: "actor-ai-agent", desc: "An actor that initiates or coordinates actions toward a goal.", concern: "Concern: scope of action", example: "Example: a task assistant", alt: "An AI agent" },
];

const chip = "rounded-[8px] bg-[#ede9fe] px-[10px] pb-[6.19px] pt-[5px] text-[12px] font-extrabold leading-[19.2px] text-[color:#5b21b6]";

export default function ActorTaxonomySection() {
  return (
    <section id="actor-types" className="px-[22px] py-[60px] font-manrope">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-3">
        <div className="flex items-center gap-[10px]">
          <span aria-hidden="true" className="h-[2px] w-[28px] bg-[#22b8d6]" />
          <span className="text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[color:#2563eb]">Actor taxonomy</span>
        </div>
        <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">Four kinds of non-human actor</h2>
        <p className="max-w-[820px] pt-[1.39px] text-[16px] leading-[25.6px] text-[#64748b]">
          These are educational categories, not runtime object types. An actor can fall into more than one category, and no category automatically carries delegated authority.
        </p>

        <ul className="flex w-full flex-col gap-[18px] pt-[28px]">
          {actors.map((a) => (
            <li key={a.name} className="overflow-hidden rounded-[18px] border border-solid border-[#e2e8f0] bg-white">
              <div className="relative h-[150px] w-full">
                <Image src={`/machine-agent-identity-guides/mobile-${a.img}.webp`} alt={a.alt} fill sizes="(max-width: 560px) 100vw, 560px" className="object-cover" />
              </div>
              <div className="flex flex-col items-start gap-2 p-[22px]">
                <div className="mb-3 flex size-[44px] items-center justify-center rounded-[12px] bg-[#e0f2fe]">
                  <Image src={`/machine-agent-identity-guides/mobile-${a.icon}.svg`} alt="" width={22} height={22} />
                </div>
                <h3 className="pb-[6px] text-[17px] font-bold leading-[27.2px] text-[#2563eb]">{a.name}</h3>
                <p className="text-[14px] leading-[22.4px] text-[#64748b]">{a.desc}</p>
                <span className={chip}>{a.concern}</span>
                <span className={`${chip} mt-1`}>{a.example}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="w-full rounded-r-[12px] border-y border-l-4 border-r border-solid border-[#f59e0b] bg-white px-5 pb-4 pt-7 text-[14px] leading-[22.4px] text-[#2563eb]">
          <p>
            <strong className="font-bold">Overlap disclaimer.</strong> A service can run as a workload, and an agent can call services. Each category describes a role, not a guarantee of what the actor may do.
          </p>
        </div>

        <p className="rounded-[8px] bg-[#ede9fe] pb-2 pl-3 pr-[48.56px] pt-[10px] text-[13px] leading-[20.8px] text-[color:#5b21b6]">
          Conceptual examples. Not product or deployment descriptions.
        </p>
      </div>
    </section>
  );
}
