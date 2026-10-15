import Image from "next/image";

const governancePrinciples = [
  {
    icon: "/third-party-access/gov-no-standing.svg",
    title: "No Standing Access",
  },
  {
    icon: "/third-party-access/gov-time-bounded.svg",
    title: "Time-Bounded",
  },
  {
    icon: "/third-party-access/gov-explicit-scope.svg",
    title: "Explicit Scope",
  },
  {
    icon: "/third-party-access/gov-verified-identity.svg",
    title: "Verified Identity",
  },
  {
    icon: "/third-party-access/gov-documented-purpose.svg",
    title: "Documented Purpose",
  },
  {
    icon: "/third-party-access/gov-auditable-evidence.svg",
    title: "Auditable Evidence",
  },
];

export default function GovernancePrinciplesSection() {
  return (
    <section id="governance" className="bg-white-solid px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-12 sm:gap-14">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Governance principles
        </h2>

        {/* 6 Principles Grid */}
        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-6 lg:gap-6">
          {governancePrinciples.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center justify-center gap-3 rounded-[12px] border border-mystic bg-[#F8FAFC] p-5 text-center shadow-xs transition-shadow hover:shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-49/10">
                <Image
                  src={item.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7"
                />
              </div>

              <span className="font-manrope text-[14px] font-semibold leading-tight text-azure-9 sm:text-[14.4px]">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        {/* The Principle Callout */}
        <div className="w-full rounded-[12px] border border-mystic bg-[#F8FAFC] p-6 text-center sm:p-7">
          <p className="font-manrope text-[15px] leading-relaxed text-[#475569] sm:text-[16px] sm:leading-[28px]">
            <strong className="font-bold text-[#334155]">The principle:</strong>{" "}
            Third-party access is always temporary, always scoped, always
            approved, always logged. No assumptions. No &ldquo;just trust
            them.&rdquo; Explicit mandate, continuous verification, immediate
            revocation.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-mystic pt-2" />
      </div>
    </section>
  );
}
