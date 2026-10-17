import Image from "next/image";

interface ChallengeRow {
  id: string;
  icon: string;
  challenge: string;
  control: string;
  owner: string;
  proofRoute: string;
}

const ROWS: ChallengeRow[] = [
  {
    id: "challenge-1",
    icon: "/security/icon-411_20559.svg",
    challenge: "Identity impersonation",
    control: "Verified identity before any authority\nis evaluated",
    owner: "Identity system\nand Security",
    proofRoute: "Pending route\nregistry",
  },
  {
    id: "challenge-2",
    icon: "/security/icon-411_20574.svg",
    challenge: "Excessive delegation",
    control: "Grants bounded by action, resource,\npurpose and expiry",
    owner: "Product and\nSecurity",
    proofRoute: "Pending route\nregistry",
  },
  {
    id: "challenge-3",
    icon: "/security/icon-411_20589.svg",
    challenge: "Stale grants",
    control: "Re-evaluation when authority or\ntrust context changes",
    owner: "Security source",
    proofRoute: "Pending route\nregistry",
  },
  {
    id: "challenge-4",
    icon: "/security/icon-411_20603.svg",
    challenge: "Missing decision context",
    control: "Decision evidence stored with its\nbasis and policy context",
    owner: "Evidence owner",
    proofRoute: "Pending route\nregistry",
  },
];

export default function SecurityVerifiedSummarySection() {
  return (
    <section className="relative w-full py-[95px] px-6 sm:px-12 lg:px-20 xl:px-[160px] overflow-hidden bg-[#071426]">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/security/img-6c49757c688e5e9169fb137aaf968fc8768503a5.png"
          alt="Security background"
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(7, 20, 38, 0.9) 0%, rgba(7, 20, 38, 0.95) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1120px] mx-auto flex flex-col gap-[60px]">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.13] text-[#FFFFFF]">
            Each challenge has a different owner
          </h2>
          <div className="max-w-[820px]">
            <p className="font-manrope text-[16px] leading-[25.6px] text-[#FFFFFF]/80 whitespace-pre-line">
              Impersonation, excessive delegation, stale grants and missing decision context need different controls and{"\n"}different owners. No control here is a guarantee.
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="w-full bg-[#FFFFFF] rounded-[18px] border border-[#E2E8F0] overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[768px]">
              <thead>
                <tr className="bg-[#F1F5F9] border-b border-[#E2E8F0]">
                  <th className="py-[18px] px-5 font-manrope font-bold text-[15px] leading-[24px] text-[#0B1B33] w-[267px] whitespace-nowrap">
                    Security challenge
                  </th>
                  <th className="py-[18px] px-5 font-manrope font-bold text-[15px] leading-[24px] text-[#0B1B33] w-[398px]">
                    Architectural control
                  </th>
                  <th className="py-[18px] px-5 font-manrope font-bold text-[15px] leading-[24px] text-[#0B1B33] w-[235px]">
                    Owner
                  </th>
                  <th className="py-[18px] px-5 font-manrope font-bold text-[15px] leading-[24px] text-[#0B1B33] w-[217px]">
                    Approved proof route
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {ROWS.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/60 transition-colors">
                    {/* Challenge Column */}
                    <td className="py-[22px] px-5 align-top whitespace-nowrap">
                      <div className="flex items-center gap-2.5">
                        <div className="shrink-0">
                          <Image
                            src={row.icon}
                            alt=""
                            width={20}
                            height={20}
                            className="w-5 h-5"
                          />
                        </div>
                        <span className="font-manrope font-bold text-[15px] leading-[24px] text-[#0B1B33] whitespace-nowrap">
                          {row.challenge}
                        </span>
                      </div>
                    </td>

                    {/* Control Column */}
                    <td className="py-[22px] px-5 align-top">
                      <span className="font-manrope text-[15px] leading-[24px] text-[#64748B] whitespace-pre-line">
                        {row.control}
                      </span>
                    </td>

                    {/* Owner Column */}
                    <td className="py-[22px] px-5 align-top">
                      <span className="font-manrope text-[15px] leading-[24px] text-[#64748B] whitespace-pre-line">
                        {row.owner}
                      </span>
                    </td>

                    {/* Approved Proof Route Column */}
                    <td className="py-[22px] px-5 align-top">
                      <span className="font-manrope text-[15px] leading-[24px] text-[#64748B] whitespace-pre-line">
                        {row.proofRoute}
                      </span>
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
