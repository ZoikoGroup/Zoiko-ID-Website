import Image from "next/image";

export default function TenantVsOrgSection() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px]">
      <Image
        src="/b2b-saas/Section - 5. STATISTICS (Light Background).webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-[56px]">
        <h2 className="text-center font-dm-serif text-4xl font-normal leading-tight text-white-solid sm:text-5xl lg:text-[52px] lg:leading-[59.8px]">
          Tenant boundary vs. organization identity
        </h2>

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          {/* Tenant Card */}
          <article className="flex flex-col gap-4 rounded-xl border-2 border-cyan-49 bg-white-solid p-8 shadow-sm">
            <div className="flex size-10 items-center justify-center">
              <Image
                src="/b2b-saas/icons/stat-icon-1.svg"
                alt=""
                width={32}
                height={32}
                className="size-8"
              />
            </div>
            <h3 className="font-dm-serif text-2xl font-normal text-azure-9">
              Tenant
            </h3>
            <p className="font-manrope text-base font-normal leading-7 text-azure-47">
              An application data and administrative boundary. Every
              <br className="hidden sm:inline" />
              customer SaaS instance has one.
            </p>
          </article>

          {/* Organization Identity Card */}
          <article className="flex flex-col gap-4 rounded-xl border-2 border-cyan-49 bg-white-solid p-8 shadow-sm">
            <div className="flex size-10 items-center justify-center">
              <Image
                src="/b2b-saas/icons/stat-icon-2.svg"
                alt=""
                width={32}
                height={32}
                className="size-8"
              />
            </div>
            <h3 className="font-dm-serif text-2xl font-normal text-azure-9">
              Organization Identity
            </h3>
            <p className="font-manrope text-base font-normal leading-7 text-azure-47">
              Represents the legal entity, partner, or actor within a
              <br className="hidden sm:inline" />
              tenant. May have multiple orgs per tenant.
            </p>
          </article>
        </div>

        {/* Key Principle Banner */}
        <div className="w-full max-w-[1120px] rounded-xl border border-mystic bg-[rgba(255,255,255,0.08)] p-6 text-left backdrop-blur-xs">
          <p className="font-manrope text-base font-normal leading-7 text-white-solid">
            <strong className="font-bold text-white-solid">
              Key principle:
            </strong>{" "}
            A deployment may relate tenants to organization identities, but they
            are not interchangeable. This separation enables
            <br />
            isolated data, multi-organization access within a single tenant, and distinct
            governance per organization.
          </p>
        </div>
      </div>
    </section>
  );
}
