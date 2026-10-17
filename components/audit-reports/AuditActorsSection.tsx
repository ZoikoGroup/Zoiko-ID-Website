import Image from "next/image";

interface ActorRow {
  name: string;
  image: string;
  context: string;
  authority: string;
  minimization: string;
  evidence: string;
}

const actors: ActorRow[] = [
  {
    name: "Person",
    image: "/audit-reports/actor-person.webp",
    context: "Verified individual",
    authority: "Own permissions, within grants",
    minimization: "Personal attributes limited to need",
    evidence: "Actions the person took",
  },
  {
    name: "Organization",
    image: "/audit-reports/actor-org.webp",
    context: "Explicit affiliation record",
    authority: "Represented actions, under mandate",
    minimization: "Organizational, not personal, detail",
    evidence: "Mandate lifecycle",
  },
  {
    name: "Service account",
    image: "/audit-reports/actor-service.webp",
    context: "Workload identity with a sponsor",
    authority: "Narrow, named role",
    minimization: "Avoid carrying person data",
    evidence: "Service actions and sponsor",
  },
  {
    name: "Machine",
    image: "/audit-reports/actor-machine.webp",
    context: "Device or process identity",
    authority: "Bounded duty, bounded time",
    minimization: "Device data limited to function",
    evidence: "Operational events",
  },
  {
    name: "AI agent",
    image: "/audit-reports/actor-ai-agent.webp",
    context: "Principal linked to a sponsor",
    authority: "Only under explicit mandate",
    minimization: "Unrelated personal data not exposed",
    evidence: "Sponsor and mandate context",
  },
];

export default function AuditActorsSection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1230px] flex-col gap-12 sm:gap-14">
        {/* Section Heading */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#0B1B33] sm:text-5xl lg:text-[52px] lg:leading-[52px]">
            Different actors, different privacy considerations
          </h2>
          <p className="max-w-[820px] font-manrope text-base font-normal leading-relaxed text-[#64748B]">
            Machine and agent identities can be linked to a responsible human or
            organization. Being an agent does not remove or grant any
            data-subject right.
          </p>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto rounded-[18px] border border-[#E2E8F0] shadow-sm">
          <table className="w-full min-w-[960px] border-collapse text-left">
            <thead>
              <tr className="bg-[#071426] text-white">
                <th className="w-[260px] border-r border-[#E2E8F0]/20 px-6 py-5 font-manrope text-[14px] font-extrabold uppercase tracking-[0.0464em]">
                  Actor class
                </th>
                <th className="border-r border-[#E2E8F0]/20 px-6 py-5 font-manrope text-[14px] font-extrabold uppercase tracking-[0.0464em]">
                  Identity context
                </th>
                <th className="border-r border-[#E2E8F0]/20 px-6 py-5 font-manrope text-[14px] font-extrabold uppercase tracking-[0.0464em]">
                  Intended authority
                </th>
                <th className="border-r border-[#E2E8F0]/20 px-6 py-5 font-manrope text-[14px] font-extrabold uppercase tracking-[0.0464em]">
                  Minimization concern
                </th>
                <th className="px-6 py-5 font-manrope text-[14px] font-extrabold uppercase tracking-[0.0464em]">
                  Evidence scope
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] bg-white">
              {actors.map((actor, idx) => (
                <tr
                  key={actor.name}
                  className="transition-colors duration-150 hover:bg-[#F8FAFC]"
                >
                  {/* Actor Class Cell with Image */}
                  <td className="w-[260px] border-r border-[#E2E8F0] px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="relative size-14 shrink-0 overflow-hidden rounded-[12px] bg-[#F1F5F9] shadow-inner">
                        <Image
                          src={actor.image}
                          alt={actor.name}
                          width={56}
                          height={56}
                          className="size-full object-cover"
                        />
                      </div>
                      <span className="font-manrope text-[14px] font-bold text-[#0B1B33]">
                        {actor.name}
                      </span>
                    </div>
                  </td>

                  {/* Identity Context */}
                  <td className="border-r border-[#E2E8F0] px-6 py-5 font-manrope text-[14px] leading-relaxed text-[#64748B]">
                    {actor.context}
                  </td>

                  {/* Intended Authority */}
                  <td className="border-r border-[#E2E8F0] px-6 py-5 font-manrope text-[14px] leading-relaxed text-[#64748B]">
                    {actor.authority}
                  </td>

                  {/* Minimization Concern */}
                  <td className="border-r border-[#E2E8F0] px-6 py-5 font-manrope text-[14px] leading-relaxed text-[#64748B]">
                    {actor.minimization}
                  </td>

                  {/* Evidence Scope */}
                  <td className="px-6 py-5 font-manrope text-[14px] leading-relaxed text-[#64748B]">
                    {actor.evidence}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
