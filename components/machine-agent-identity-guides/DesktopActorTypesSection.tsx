import Image from "next/image";

const ACTORS = [
  { title: "Service", desc: "A named software component that offers a function to others.", concern: "Concern: who is calling", example: "Example: a reporting service", img: "actor-service", icon: "icon-service" },
  { title: "Workload", desc: "A running unit of work, such as a job or container, with its own context.", concern: "Concern: context changes", example: "Example: a batch job", img: "actor-workload", icon: "icon-workload" },
  { title: "Machine", desc: "A device or physical process acting in the world.", concern: "Concern: physical safety", example: "Example: a sensor gateway", img: "actor-machine", icon: "icon-machine" },
  { title: "AI agent", desc: "An actor that initiates or coordinates actions toward a goal.", concern: "Concern: scope of action", example: "Example: a task assistant", img: "actor-ai-agent", icon: "icon-ai-agent" },
];

const chip =
  "rounded-[8px] bg-[rgba(100,116,139,0.15)] px-[10px] pb-[6.19px] pt-[5px] font-manrope text-[12px] font-extrabold leading-[19.2px] text-[#64748b]";

export default function ActorTypesSection() {
  return (
    <section
      id="actor-types"
      className="w-full bg-white py-[105px] px-[160px]"
    >
      <div className="mx-auto flex w-full flex-col gap-[60px]">
        <div className="flex flex-col gap-[12px]">
          <h2 className="font-dm-serif text-[52px] font-normal leading-[57.9px] text-[#07111f]">
            Four kinds of non-human actor
          </h2>
          <p className="max-w-[820px] pt-[1.3px] font-manrope text-[16px] font-normal leading-[25.6px] text-[#64748b]">
            These are educational categories, not runtime object types. An actor can fall into more than one category, and no category automatically carries delegated authority.
          </p>
        </div>
        <div className="flex flex-col gap-[12px]">
          <ul className="grid grid-cols-4 items-stretch gap-[18px]">
            {ACTORS.map((a) => (
              <li
                key={a.title}
                className="flex flex-col overflow-hidden rounded-[18px] border border-[#e2e8f0] bg-white"
              >
                <div className="relative h-[150px] w-full shrink-0">
                  <Image
                    src={`/machine-agent-identity-guides/desktop-${a.img}.webp`}
                    alt=""
                    fill
                    sizes="(min-width: 1440px) 267px, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-[8px] p-[22px]">
                  <div className="flex flex-col gap-[8px]">
                    <div className="pb-[12px]">
                      <div className="flex size-[44px] items-center justify-center rounded-[12px] bg-[#e0f2fe]">
                        <Image
                          src={`/machine-agent-identity-guides/desktop-${a.icon}.svg`}
                          alt=""
                          width={22}
                          height={22}
                        />
                      </div>
                    </div>
                    <h3 className="pb-[6px] font-manrope text-[17px] font-bold leading-[27.2px] text-[#07111f]">
                      {a.title}
                    </h3>
                    <p className="font-manrope text-[14px] font-normal leading-[22.4px] text-[#64748b]">
                      {a.desc}
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-[8px] pt-[22px]">
                    <span className={chip}>{a.concern}</span>
                    <span className={`${chip} mt-[4px]`}>{a.example}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="rounded-br-[12px] rounded-tr-[12px] border border-l-4 border-[#f59e0b] bg-white px-[20px] py-[15.7px]">
            <p className="font-manrope text-[14px] leading-[22.4px] text-[#07111f]">
              <strong className="font-bold">Overlap disclaimer.</strong>
              <span className="font-normal"> A service can run as a workload, and an agent can call services. Each category describes a role, not a guarantee of what the actor may do.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
