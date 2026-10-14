import Image from "next/image";

const adoptionPatterns = [
  {
    image: "/third-party-access/adoption-consulting.webp",
    title: "Consulting & Audits",
    description:
      "Third-party auditors, consultants, tax advisors need temporary, scoped access to specific data. Time-limited, auto-revoke at project end. Compliance teams love the audit trail.",
  },
  {
    image: "/third-party-access/adoption-saas.webp",
    title: "SaaS Integrations",
    description:
      'Your CRM, HR, payroll platforms need API access to your data warehouse. Delegated access with clear scope (e.g., "read payroll, write to consolidation DB"). Easy to revoke if vendor contract ends.',
  },
  {
    image: "/third-party-access/adoption-incident.webp",
    title: "Incident Response",
    description:
      "When breach occurs, grant forensics team access to logs, databases (limited scope, fixed time). Revoke everything at once. Evidence preserved for post-mortem.",
  },
];

export default function EnterpriseAdoptionSection() {
  return (
    <section id="enterprise-adoption" className="bg-white-solid px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-12 sm:gap-14">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Enterprise adoption patterns
        </h2>

        {/* 3 Adoption Cards */}
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3 lg:gap-8">
          {adoptionPatterns.map((pattern) => (
            <div
              key={pattern.title}
              className="flex flex-col overflow-hidden rounded-[12px] border border-mystic bg-white-solid shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Card Image */}
              <div className="relative h-[190px] w-full overflow-hidden bg-azure-9">
                <Image
                  src={pattern.image}
                  alt={pattern.title}
                  fill
                  sizes="(min-width: 1024px) 380px, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
                <h3 className="font-dm-serif text-xl font-normal text-azure-9 sm:text-[22.4px]">
                  {pattern.title}
                </h3>
                <p className="font-manrope text-[14.5px] font-normal leading-relaxed text-azure-47 sm:text-[15.2px] sm:leading-[26px]">
                  {pattern.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-mystic pt-2" />
      </div>
    </section>
  );
}
