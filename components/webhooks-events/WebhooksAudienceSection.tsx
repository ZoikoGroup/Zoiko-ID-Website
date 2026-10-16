import Image from "next/image";

const roles = [
  {
    image: "/webhooks-events/role-app-developer.webp",
    alt: "Application developer coding on a laptop",
    title: "Application developer",
    description: "Decides how to handle a notification safely in code.",
    job: "Job: design a consumer that re-checks before acting.",
  },
  {
    image: "/webhooks-events/role-platform-engineer.webp",
    alt: "Platform team analyzing infrastructure metrics",
    title: "Platform engineer",
    description: "Plans throughput, retries and reconciliation for production.",
    job: "Job: confirm the published delivery contract.",
  },
  {
    image: "/webhooks-events/role-security-engineer.webp",
    alt: "Security lock illustration and verification controls",
    title: "Security engineer",
    description: "Reviews origin verification, secrets and tenant boundaries.",
    job: "Job: approve the security controls before go-live.",
  },
  {
    image: "/webhooks-events/role-enterprise-architect.webp",
    alt: "Enterprise architect in modern office workspace",
    title: "Enterprise architect",
    description: "Assesses how events fit alongside an existing identity estate.",
    job: "Job: decide whether an overlay design fits.",
  },
];

export default function WebhooksAudienceSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-12 sm:gap-14">
        {/* Section Header */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl md:text-[46px]">
            Four roles, four jobs
          </h2>
          <p className="max-w-[800px] font-manrope text-base font-normal leading-relaxed text-azure-47">
            Each role uses this page for a different decision. None of these roles
            is granted access by reading it.
          </p>
        </div>

        {/* Roles 4-card grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role) => (
            <article
              key={role.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-grey-91 bg-white-solid shadow-xs transition-shadow duration-200 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={role.image}
                  alt={role.alt}
                  fill
                  sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex flex-col gap-2 pb-4">
                  <h3 className="font-manrope text-base font-bold text-azure-9 sm:text-[17px]">
                    {role.title}
                  </h3>
                  <p className="font-manrope text-sm font-normal leading-relaxed text-azure-47">
                    {role.description}
                  </p>
                </div>

                <div className="mt-auto rounded-lg bg-grey-96 p-3 font-manrope text-[13px] font-medium leading-snug text-azure-9">
                  {role.job}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
