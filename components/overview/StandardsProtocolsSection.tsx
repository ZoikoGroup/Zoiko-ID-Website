import Image from "next/image";

interface ProtocolRow {
  protocol: string;
  role: string;
  status: "AVAILABLE" | "PLANNED";
  details: string;
}

const protocolsData: ProtocolRow[] = [
  {
    protocol: "OAuth 2.0",
    role: "Authentication layer integration",
    status: "AVAILABLE",
    details: "Authorization Code, PKCE flows",
  },
  {
    protocol: "OIDC",
    role: "Identity federation",
    status: "AVAILABLE",
    details: "ID tokens, userinfo endpoint",
  },
  {
    protocol: "SAML 2.0",
    role: "Enterprise SSO",
    status: "AVAILABLE",
    details: "Assertions, metadata publishing",
  },
  {
    protocol: "mTLS",
    role: "Service-to-service identity",
    status: "AVAILABLE",
    details: "X.509 certificates, key pinning",
  },
  {
    protocol: "JWT",
    role: "Token format & verification",
    status: "AVAILABLE",
    details: "HS256, RS256, ES256 algorithms",
  },
  {
    protocol: "SCIM 2.0",
    role: "Identity provisioning",
    status: "PLANNED",
    details: "User/group sync",
  },
  {
    protocol: "CloudEvents",
    role: "Event streaming",
    status: "AVAILABLE",
    details: "Webhooks, async events",
  },
  {
    protocol: "OpenTelemetry",
    role: "Observability signals",
    status: "PLANNED",
    details: "Traces, metrics, logs",
  },
];

export default function StandardsProtocolsSection() {
  return (
    <section className="relative overflow-hidden bg-[#071426] px-6 py-20 sm:px-10 lg:px-20 lg:py-28 xl:px-40">
      {/* Background Image Layer with Dark Overlay */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/overview/standards-bg.webp"
          alt=""
          fill
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-[#071426]/60" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col items-center gap-10 lg:gap-12">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-4xl font-normal leading-tight text-white-solid sm:text-5xl sm:leading-[59.8px]">
          Standards and protocols
        </h2>

        {/* Table Card */}
        <div className="w-full overflow-hidden rounded-[16px] border border-mystic bg-white-solid shadow-[0px_20px_48px_0px_rgba(0,0,0,0.25)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left font-manrope">
              {/* Table Header: Title Case like Figma */}
              <thead>
                <tr className="border-b border-mystic bg-[linear-gradient(167deg,rgba(34,184,214,0.08)_0%,rgba(37,99,235,0.04)_100%)]">
                  <th className="px-6 py-4 font-manrope text-[14.4px] font-bold text-azure-9">
                    Protocol / Standard
                  </th>
                  <th className="px-6 py-4 font-manrope text-[14.4px] font-bold text-azure-9">
                    Integration Role
                  </th>
                  <th className="px-6 py-4 font-manrope text-[14.4px] font-bold text-azure-9">
                    Status
                  </th>
                  <th className="px-6 py-4 font-manrope text-[14.4px] font-bold text-azure-9">
                    Details
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-mystic/80 bg-white-solid">
                {protocolsData.map((row, idx) => {
                  const isAvailable = row.status === "AVAILABLE";

                  return (
                    <tr
                      key={idx}
                      className="transition-colors duration-150 hover:bg-slate-50/70"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-manrope text-[14.4px] font-bold text-[#475569]">
                        {row.protocol}
                      </td>
                      <td className="px-6 py-4 font-manrope text-[14.4px] font-normal text-[#475569]">
                        {row.role}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {isAvailable ? (
                          <span className="inline-flex items-center gap-1.5 rounded-[4px] bg-[#16A34A]/15 px-2.5 py-1 font-manrope text-xs font-bold uppercase tracking-wide text-[#16A34A]">
                            <Image
                              src="/overview/status-active-badge.svg"
                              alt=""
                              width={12}
                              height={12}
                              className="h-3 w-3 shrink-0"
                            />
                            AVAILABLE
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 rounded-[4px] bg-[#F59E0B]/15 px-2.5 py-1 font-manrope text-xs font-bold uppercase tracking-wide text-[#F59E0B]">
                            <Image
                              src="/overview/status-planned-badge.svg"
                              alt=""
                              width={12}
                              height={12}
                              className="h-3 w-3 shrink-0"
                            />
                            PLANNED
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 font-manrope text-[14.4px] font-normal text-[#475569]">
                        {row.details}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
