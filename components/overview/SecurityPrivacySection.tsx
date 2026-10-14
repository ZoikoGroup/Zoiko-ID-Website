import Image from "next/image";

const securityFeatures = [
  {
    icon: "/overview/sec-storage.svg",
    title: "Secure credential storage",
    description:
      "Secrets never logged. HSM-backed. AES-256 encryption at rest. Encrypted in transit (TLS 1.3).",
  },
  {
    icon: "/overview/sec-rotation.svg",
    title: "Secret rotation",
    description:
      "Automatic key rotation policies. Manual rotation on-demand. Zero-downtime secret swaps.",
  },
  {
    icon: "/overview/sec-least-privilege.svg",
    title: "Least privilege",
    description:
      "Narrow service scopes. Tenant-bound object access. No cross-tenant data access.",
  },
  {
    icon: "/overview/sec-data-isolation.svg",
    title: "Data isolation",
    description:
      "Multi-tenant, single-tenant options. Audit logs never mix. Compliance-ready isolation.",
  },
];

export default function SecurityPrivacySection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-28 xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-14">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl sm:leading-[59.8px]">
          Security and privacy by design
        </h2>

        {/* 4 Security Pillars Grid */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {securityFeatures.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-4 rounded-xl border border-mystic bg-white-solid p-7 transition-all duration-200 hover:border-scooter-48/40 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-scooter-48/10 p-2.5">
                <Image
                  src={item.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="h-full w-full object-contain"
                />
              </div>

              <h3 className="font-manrope text-[16.8px] font-bold text-azure-9">
                {item.title}
              </h3>

              <p className="font-manrope text-sm font-normal leading-relaxed text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Red Warning Banner */}
        <div className="flex w-full items-start gap-4 rounded-xl border border-red-300/60 bg-[linear-gradient(174deg,rgba(220,38,38,0.05)_0%,rgba(220,38,38,0.02)_100%)] p-6 sm:p-7">
          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center">
            <Image
              src="/overview/sec-warning-triangle.svg"
              alt=""
              width={28}
              height={28}
              className="object-contain"
            />
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="font-manrope text-[15.2px] font-semibold text-red-600">
              Never paste secrets into public forms
            </h4>
            <p className="font-manrope text-sm font-normal leading-relaxed text-[#475569]">
              Use API keys, environment variables, or secure vaults. Tokens sent to us are rotated immediately by our system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
