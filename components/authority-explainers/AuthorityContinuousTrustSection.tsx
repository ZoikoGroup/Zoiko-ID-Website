import Image from "next/image";

interface TrustFactor {
  title: string;
  desc: string;
}

const factors: TrustFactor[] = [
  {
    title: "Expiry",
    desc: "Authority ends at the stated time.",
  },
  {
    title: "Revoked authority",
    desc: "Withdrawn where the mechanism permits.",
  },
  {
    title: "Outdated evidence",
    desc: "Records of the past, not current permission.",
  },
  {
    title: "Re-evaluation",
    desc: "A fresh check against current context.",
  },
];

export default function AuthorityContinuousTrustSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center justify-between gap-12 lg:flex-row lg:items-center lg:gap-14">
        {/* Left Column: Text & 2x2 Cards */}
        <div className="flex w-full flex-1 flex-col gap-7">
          <div className="flex flex-col gap-3">
            <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#0B1B33] sm:text-5xl lg:text-[52px] lg:leading-[57.9px]">
              Authority can become stale
            </h2>
            <p className="font-manrope text-base font-normal leading-[25.6px] text-[#64748B]">
              A change in role, organization context, policy, device or security signal, or simply time, can require re-evaluation. The actual triggers depend on the approved implementation.
            </p>
          </div>

          {/* 2x2 Factors Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {factors.map((f) => (
              <div
                key={f.title}
                className="flex flex-col gap-1.5 rounded-[14px] border border-[#E2E8F0] bg-white-solid p-4.5 shadow-xs"
              >
                <h3 className="font-manrope text-sm font-bold text-[#0B1B33]">
                  {f.title}
                </h3>
                <p className="font-manrope text-xs font-normal leading-5 text-[#64748B]">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Callout box */}
          <div className="rounded-[14px] border border-[#E2E8F0] bg-white-solid px-5 py-4 shadow-xs">
            <span className="font-manrope text-sm font-bold text-[#0B1B33]">
              Historical evidence ≠ current permission.
            </span>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative h-[360px] w-full flex-1 overflow-hidden rounded-[20px] bg-[#F1F5F9] shadow-sm sm:h-[440px]">
          <Image
            src="/authority-explainers/trust-analytics-charts.webp"
            alt="Analytics charts on a laptop"
            fill
            sizes="(min-width: 1024px) 535px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
