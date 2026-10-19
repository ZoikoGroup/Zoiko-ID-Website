interface ActorRow {
  actorClass: string;
  identityContext: string;
  intendedAuthority: string;
  minimizationConcern: string;
  evidenceScope: string;
}

const actorRows: ActorRow[] = [
  {
    actorClass: "Person",
    identityContext: "Verified individual",
    intendedAuthority: "Own permissions, within grants",
    minimizationConcern: "Personal attributes limited to need",
    evidenceScope: "Actions the person took",
  },
  {
    actorClass: "Organization",
    identityContext: "Explicit affiliation record",
    intendedAuthority: "Represented actions, under mandate",
    minimizationConcern: "Organizational, not personal, detail",
    evidenceScope: "Mandate lifecycle",
  },
  {
    actorClass: "Service account",
    identityContext: "Workload identity with a sponsor",
    intendedAuthority: "Narrow, named role",
    minimizationConcern: "Avoid carrying person data",
    evidenceScope: "Service actions and sponsor",
  },
  {
    actorClass: "Machine",
    identityContext: "Device or process identity",
    intendedAuthority: "Bounded duty, bounded time",
    minimizationConcern: "Device data limited to function",
    evidenceScope: "Operational events",
  },
  {
    actorClass: "AI agent",
    identityContext: "Principal linked to a sponsor",
    intendedAuthority: "Only under explicit mandate",
    minimizationConcern: "Unrelated personal data not exposed",
    evidenceScope: "Sponsor and mandate context",
  },
];

export default function PrivacyActorsSection() {
  return (
    <section
      className="relative overflow-hidden px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-36"
      style={{
        backgroundColor: "#071426",
        backgroundImage: `linear-gradient(160deg, rgba(7, 20, 38, 0.95) 0%, rgba(13, 31, 53, 0.92) 100%), url('/trust-assurance-privacy/actors-bg.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative mx-auto flex w-full max-w-[1240px] flex-col gap-12 sm:gap-14">
        {/* Section Heading */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-white sm:text-5xl lg:text-[52px] lg:leading-[57.8px]">
            Different actors, different privacy considerations
          </h2>
          <p className="max-w-[850px] font-manrope text-base font-normal leading-relaxed text-[#94A3B8]">
            Machine and agent identities can be linked to a responsible human or
            organization. Being an agent does not remove or grant any
            data-subject right.
          </p>
        </div>

        {/* Responsive Table Card */}
        <div className="overflow-hidden rounded-[20px] border border-[#CBD5E1] bg-white shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E2E8F0] bg-[#F1F5F9]">
                  <th className="px-6 py-4.5 font-manrope text-[12px] sm:text-[13px] font-extrabold uppercase tracking-wider text-[#071426]">
                    Actor class
                  </th>
                  <th className="px-6 py-4.5 font-manrope text-[12px] sm:text-[13px] font-extrabold uppercase tracking-wider text-[#071426]">
                    Identity context
                  </th>
                  <th className="px-6 py-4.5 font-manrope text-[12px] sm:text-[13px] font-extrabold uppercase tracking-wider text-[#071426]">
                    Intended authority
                  </th>
                  <th className="px-6 py-4.5 font-manrope text-[12px] sm:text-[13px] font-extrabold uppercase tracking-wider text-[#071426]">
                    Minimization concern
                  </th>
                  <th className="px-6 py-4.5 font-manrope text-[12px] sm:text-[13px] font-extrabold uppercase tracking-wider text-[#071426]">
                    Evidence scope
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] bg-white">
                {actorRows.map((row) => (
                  <tr
                    key={row.actorClass}
                    className="transition-colors duration-150 hover:bg-[#F8FAFC]"
                  >
                    <td className="px-6 py-5 font-manrope text-[14.5px] sm:text-[15px] font-bold text-[#071426] whitespace-nowrap">
                      {row.actorClass}
                    </td>
                    <td className="px-6 py-5 font-manrope text-[14px] text-[#334155] leading-relaxed">
                      {row.identityContext}
                    </td>
                    <td className="px-6 py-5 font-manrope text-[14px] text-[#334155] leading-relaxed">
                      {row.intendedAuthority}
                    </td>
                    <td className="px-6 py-5 font-manrope text-[14px] text-[#334155] leading-relaxed">
                      {row.minimizationConcern}
                    </td>
                    <td className="px-6 py-5 font-manrope text-[14px] text-[#334155] leading-relaxed">
                      {row.evidenceScope}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
