import Image from "next/image";

interface IntegrationCard {
  title: string;
  description: string;
  badge: string;
  icon: string;
  isHighlight?: boolean;
}

const integrationCards: IntegrationCard[] = [
  {
    title: "Identity provider",
    description: "Supplies authenticated attributes under your agreement.",
    badge: "Your organization",
    icon: "/trust-assurance-privacy/integration-icon-1.svg",
  },
  {
    title: "Customer application",
    description: "Requests decisions and enforces them in its own runtime.",
    badge: "Your organization",
    icon: "/trust-assurance-privacy/integration-icon-2.svg",
  },
  {
    title: "Zoiko iD policy and evidence",
    description: "Evaluates policy and produces the decision record.",
    badge: "Proposed platform",
    icon: "/trust-assurance-privacy/integration-icon-3.svg",
    isHighlight: true,
  },
  {
    title: "Developer APIs",
    description: "Documented interfaces to the integrations above.",
    badge: "Engineering",
    icon: "/trust-assurance-privacy/integration-icon-4.svg",
  },
];

const matrixRows = [
  {
    role: "Data supplier",
    owner: "Identity provider or application",
    approval: "Per your agreement",
    destination: "Source system",
  },
  {
    role: "Controller / processor status",
    owner: "To be confirmed",
    approval: "Legal",
    destination: "Privacy Notice, once approved",
  },
  {
    role: "Approver of policy",
    owner: "Your administrators",
    approval: "Per your governance",
    destination: "Decision record",
  },
  {
    role: "Audit destination",
    owner: "Owning service",
    approval: "Security",
    destination: "Evidence & Audit",
  },
];

export default function PrivacyIntegrationSection() {
  return (
    <section className="bg-[#F8FAFC] px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-36">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-12 sm:gap-14">
        {/* Section Heading */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#0B1B33] sm:text-5xl lg:text-[52px] lg:leading-[57.8px]">
            Who supplies, approves and records data
          </h2>
          <p className="max-w-[850px] font-manrope text-base font-normal leading-relaxed text-[#64748B]">
            Your identity provider, your applications and Zoiko iD each keep
            their own responsibilities. Controller and processor roles are to be
            confirmed per processing activity. Nothing here infers a
            subprocessor or a data location.
          </p>
        </div>

        {/* 4 Cards Connected Pipeline Container */}
        <div className="grid grid-cols-1 divide-y divide-[#E2E8F0] overflow-hidden rounded-[20px] border border-[#CBD5E1] bg-white shadow-xs md:grid-cols-4 md:divide-x md:divide-y-0">
          {integrationCards.map((card) => (
            <div
              key={card.title}
              className={`flex flex-col justify-between p-6 transition-colors duration-200 ${
                card.isHighlight ? "bg-[#071426]" : "bg-white"
              }`}
            >
              <div className="flex flex-col">
                {/* Icon at Top */}
                <div
                  className={`mb-5 flex size-10 items-center justify-center rounded-[12px] ${
                    card.isHighlight ? "bg-[#22B8D6]/15" : "bg-[#E0F2FE]"
                  }`}
                >
                  <Image
                    src={card.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="size-5 shrink-0"
                  />
                </div>

                {/* Title */}
                <h3
                  className={`mb-2 font-manrope text-[17px] font-bold ${
                    card.isHighlight ? "text-white" : "text-[#071426]"
                  }`}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p
                  className={`font-manrope text-[14px] leading-relaxed ${
                    card.isHighlight ? "text-[#94A3B8]" : "text-[#64748B]"
                  }`}
                >
                  {card.description}
                </p>
              </div>

              {/* Badge at Bottom */}
              <div className="mt-8">
                <span
                  className={`inline-block rounded-full px-3 py-1 font-manrope text-[11px] font-extrabold uppercase tracking-wider ${
                    card.isHighlight
                      ? "bg-white/12 text-white"
                      : "bg-[#F1F5F9] text-[#071426]"
                  }`}
                >
                  {card.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Responsibility Matrix Table */}
        <div className="overflow-hidden rounded-[16px] border border-[#CBD5E1] bg-white shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E2E8F0] bg-[#F8FAFC]">
                  <th className="px-6 py-4 font-manrope text-[13px] font-extrabold uppercase tracking-wider text-[#475569]">
                    Role
                  </th>
                  <th className="px-6 py-4 font-manrope text-[13px] font-extrabold uppercase tracking-wider text-[#475569]">
                    Owner
                  </th>
                  <th className="px-6 py-4 font-manrope text-[13px] font-extrabold uppercase tracking-wider text-[#475569]">
                    Approval
                  </th>
                  <th className="px-6 py-4 font-manrope text-[13px] font-extrabold uppercase tracking-wider text-[#475569]">
                    Audit destination
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9]">
                {matrixRows.map((row) => (
                  <tr
                    key={row.role}
                    className="transition-colors duration-150 hover:bg-[#F8FAFC]"
                  >
                    <td className="px-6 py-4.5 font-manrope text-[14.5px] font-bold text-[#071426]">
                      {row.role}
                    </td>
                    <td className="px-6 py-4.5 font-manrope text-[14px] text-[#475569]">
                      {row.owner}
                    </td>
                    <td className="px-6 py-4.5 font-manrope text-[14px] text-[#475569]">
                      {row.approval}
                    </td>
                    <td className="px-6 py-4.5 font-manrope text-[14px] font-medium text-[#2563EB]">
                      {row.destination}
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
