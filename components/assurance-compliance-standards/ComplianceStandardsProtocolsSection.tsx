import Image from "next/image";

interface ProtocolRow {
  protocol: string;
  role: React.ReactNode;
  status: string;
}

const protocolRows: ProtocolRow[] = [
  {
    protocol: "OAuth 2.0",
    role: (
      <>
        Delegated token
        <br />
        issuance
      </>
    ),
    status: "NOT PUBLICLY CONFIRMED",
  },
  {
    protocol: "OpenID Connect",
    role: (
      <>
        Federated sign-
        <br />
        in
      </>
    ),
    status: "NOT PUBLICLY CONFIRMED",
  },
  {
    protocol: "SAML",
    role: (
      <>
        Enterprise
        <br />
        federation
      </>
    ),
    status: "NOT PUBLICLY CONFIRMED",
  },
  {
    protocol: "SCIM",
    role: (
      <>
        Directory
        <br />
        provisioning
      </>
    ),
    status: "NOT PUBLICLY CONFIRMED",
  },
  {
    protocol: "Security-event frameworks",
    role: (
      <>
        Signals about
        <br />
        trust changes
      </>
    ),
    status: "NOT PUBLICLY CONFIRMED",
  },
];

export default function ComplianceStandardsProtocolsSection() {
  return (
    <section className="bg-[#FFFFFF] px-6 py-16 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-[60px] lg:flex-row lg:items-start">
        {/* Left Column: Heading, Subtitle, and Table */}
        <div className="flex w-full flex-1 flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal text-[#0B1B33] sm:text-4xl lg:text-[52px] lg:leading-[58.9px]">
            Protocol subjects, with their status
          </h2>

          <p className="max-w-[560px] pt-[1.8px] font-manrope text-base font-normal leading-[25.6px] text-[#64748B]">
            The protocols below are subjects of the standards taxonomy. None is
            <br className="hidden md:block" />
            {" "}listed as a confirmed production capability on this page.
          </p>

          {/* Table Container */}
          <div className="mt-3.5 overflow-hidden rounded-[8px] border border-[#E2E8F0] bg-[#FFFFFF]">
            <table className="w-full text-left font-manrope">
              <thead>
                <tr className="border-b border-[#E2E8F0] bg-[#F1F5F9]">
                  <th className="px-[18px] py-4 text-[14px] font-bold text-[#0B1B33]">
                    Protocol
                  </th>
                  <th className="px-[18px] py-4 text-[14px] font-bold text-[#0B1B33]">
                    Role in the
                    <br />
                    design
                  </th>
                  <th className="px-[18px] py-4 text-[14px] font-bold text-[#0B1B33]">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {protocolRows.map((row) => (
                  <tr key={row.protocol} className="transition-colors hover:bg-slate-50/50">
                    <td className="px-[18px] py-4 text-[14px] font-bold text-[#0B1B33]">
                      {row.protocol}
                    </td>
                    <td className="px-[18px] py-4 text-[14px] font-normal leading-[22.4px] text-[#334155]">
                      {row.role}
                    </td>
                    <td className="px-[18px] py-4">
                      <span className="inline-flex items-center rounded-full border border-dashed border-[#94A3B8] bg-[#F1F5F9] px-3 py-1 font-manrope text-[11px] font-extrabold uppercase leading-[17.6px] tracking-[0.08em] text-[#334155]">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Server racks in a data center Image */}
        <div className="relative h-[380px] w-full shrink-0 overflow-hidden rounded-[20px] bg-slate-100 sm:h-[450px] lg:h-[540px] lg:w-[480px]">
          <Image
            src="/assurance-compliance-standards/img-018903334e67497d5c548faebf26d2386915c40c.png"
            alt="Server racks in a data center"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 480px, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
