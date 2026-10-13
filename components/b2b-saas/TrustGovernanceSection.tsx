import Image from "next/image";

const governanceCards = [
  {
    title: "Data Isolation",
    description:
      "Every tenant's organization data is isolated. No cross-tenant access or data leakage.",
    icon: "/b2b-saas/icons/gov-1.svg",
  },
  {
    title: "Privacy by Design",
    description:
      "Minimize data collection. Respect user rights. Support data subject requests.",
    icon: "/b2b-saas/icons/gov-2.svg",
  },
  {
    title: "Least Privilege",
    description:
      "Every grant is explicit. No default permissions. Scoped to resource, action, time and purpose.",
    icon: "/b2b-saas/icons/gov-3.svg",
  },
  {
    title: "Auditable Changes",
    description:
      "Every membership, role, and policy change is logged. Immutable record for compliance.",
    icon: "/b2b-saas/icons/gov-4.svg",
  },
  {
    title: "Separation of Duties",
    description:
      "Invite, approve, revoke—different roles can't unilaterally control access.",
    icon: "/b2b-saas/icons/gov-5.svg",
  },
  {
    title: "Evidence & Proof",
    description:
      "Every decision carries evidence: who decided, when, with what policy, and why.",
    icon: "/b2b-saas/icons/gov-6.svg",
  },
];

export default function TrustGovernanceSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-[60px]">
        <h2 className="text-center font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl lg:text-[52px] lg:leading-[59.8px]">
          Trust, privacy &amp; governance
        </h2>

        <div className="flex w-full flex-col gap-6">
          {governanceCards.map((item) => (
            <article
              key={item.title}
              className="flex flex-col items-start gap-5 rounded-xl border border-mystic bg-white-solid p-7 shadow-xs transition-shadow duration-200 hover:shadow-sm sm:flex-row sm:items-center"
            >
              <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-cyan-49/20 bg-[linear-gradient(135deg,rgba(34,184,214,0.15)_0%,rgba(37,99,235,0.15)_100%)]">
                <Image
                  src={item.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="size-7"
                />
              </div>

              <div className="flex flex-1 flex-col gap-2 sm:gap-[11px]">
                <h3 className="font-manrope text-[16px] font-bold text-azure-9">
                  {item.title}
                </h3>
                <p className="font-manrope text-[14.4px] font-normal leading-6 text-[#64748B]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
