import Image from "next/image";
import Link from "next/link";

interface MetricCard {
  number: string;
  title: string;
  description: string;
}

const metricCards: MetricCard[] = [
  {
    number: "01",
    title: "Actor",
    description: "Who or what is acting",
  },
  {
    number: "02",
    title: "Mandate",
    description: "Bounded authority",
  },
  {
    number: "03",
    title: "Policy",
    description: "Rules applied live",
  },
  {
    number: "04",
    title: "Decision",
    description: "Outcome for the request",
  },
  {
    number: "05",
    title: "Evidence",
    description: "Reviewable record",
  },
];

export default function EnterpriseHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#071324] text-white">
      {/* Background Image (ee1.png) */}
      <div className="absolute inset-0">
        <Image
          src="/Enterprise-02-enterprise/ee1.png"
          alt="Enterprise engineers and security architects collaborating"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        {/* Dark Blue Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071324]/85 via-[#071324]/80 to-[#071324]/95" />
      </div>

      {/* Desktop Main Container (hidden on mobile, visible on sm+) */}
      <div className="relative z-10 mx-auto hidden max-w-[1240px] flex-col items-center px-6 pt-28 pb-16 sm:flex sm:px-8 sm:pt-32 sm:pb-20 lg:px-12 lg:pt-36 lg:pb-24">
        {/* Title */}
        <h1 className="max-w-[900px] text-center font-dm-serif text-4xl leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[54px] lg:leading-[1.15]">
          Identity, authority and evidence for enterprise systems.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-[720px] text-center font-manrope text-sm leading-relaxed text-slate-300 sm:text-base sm:leading-relaxed">
          Zoiko iD is designed to help enterprises establish who or what is
          acting, evaluate bounded authority, respond to changing trust
          signals and preserve reviewable evidence across existing identity
          and application estates. Supported integrations and deployment
          patterns must be confirmed for your environment.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/talk-to-sales"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-[#2563eb] px-6 text-center font-manrope text-sm font-semibold text-white shadow-[0px_4px_14px_rgba(37,99,235,0.4)] transition hover:bg-blue-600"
          >
            Talk to an identity expert
          </Link>
          <Link
            href="/overview"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-600/80 bg-[#0c1829]/60 px-6 text-center font-manrope text-sm font-semibold text-slate-200 backdrop-blur-sm transition hover:border-slate-400 hover:text-white"
          >
            Explore platform
          </Link>
        </div>

        {/* Glass Cards Row (01 to 05) */}
        <div className="mt-16 w-full max-w-[1040px] rounded-2xl border border-white/10 bg-[#0a182e]/55 p-2 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.37)] sm:p-3">
          <div className="grid grid-cols-2 divide-y divide-white/10 sm:grid-cols-5 sm:divide-x sm:divide-y-0">
            {metricCards.map((card) => (
              <div
                key={card.number}
                className="flex flex-col justify-center px-4 py-3 sm:px-4 sm:py-3.5"
              >
                <span className="font-mono text-[11px] font-semibold text-sky-400">
                  {card.number}
                </span>
                <h3 className="mt-1 font-manrope text-sm font-bold text-white">
                  {card.title}
                </h3>
                <p className="mt-0.5 font-manrope text-[11px] leading-snug text-slate-300">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Container (strictly visible only on mobile: sm:hidden) */}
      <div className="relative z-10 flex flex-col px-5 pt-20 pb-12 sm:hidden">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 font-manrope text-[11px] text-slate-400">
          <Link href="/" className="hover:text-slate-200">Home</Link>
          <span className="text-slate-600">&rsaquo;</span>
          <Link href="/pricing-overview" className="hover:text-slate-200">Pricing &amp; Enterprise</Link>
          <span className="text-slate-600">&rsaquo;</span>
          <span className="font-semibold text-white">Enterprise</span>
        </nav>

        {/* Category Pill with horizontal line */}
        <div className="mb-3 flex items-center gap-2">
          <span className="h-[2px] w-4 bg-[#0ea5e9]" />
          <span className="font-mono text-[10px] font-bold tracking-wider text-[#38bdf8] uppercase">
            Enterprise Identity &amp; Delegated Authority
          </span>
        </div>

        {/* Mobile Heading */}
        <h1 className="font-dm-serif text-[32px] leading-[1.14] tracking-tight text-white">
          Identity, authority and evidence for enterprise systems.
        </h1>

        {/* Mobile First Paragraph */}
        <p className="mt-4 font-manrope text-[13px] leading-relaxed text-slate-300">
          Zoiko iD is designed to help enterprises establish who or what is acting, evaluate bounded authority, respond to changing trust signals and preserve reviewable evidence across existing identity and application estates. Supported integrations and deployment patterns must be confirmed for your environment.
        </p>

        {/* Mobile Second Paragraph */}
        <p className="mt-4 font-manrope text-[13px] leading-relaxed text-slate-300">
          Zoiko iD is designed to help enterprises establish who or what is acting, evaluate bounded delegated authority, respond to changing trust signals and preserve reviewable evidence alongside existing identity and application estates. Authentication confirms identity; authority decides what an actor may do. Supported integrations are confirmed for each environment.
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col gap-3">
          <Link
            href="/talk-to-sales"
            className="flex h-11 w-full items-center justify-center rounded-lg bg-[#0ea5e9] text-center font-manrope text-sm font-semibold text-white shadow-lg transition hover:bg-[#0284c7]"
          >
            Talk to an identity expert
          </Link>
          <Link
            href="/overview"
            className="flex h-11 w-full items-center justify-center rounded-lg border border-slate-700 bg-[#0b1626]/80 text-center font-manrope text-sm font-semibold text-slate-200 backdrop-blur-sm transition hover:border-slate-500 hover:text-white"
          >
            Explore platform
          </Link>
        </div>

        {/* Pending Route Note */}
        <div className="mt-4 text-left">
          <span className="font-manrope text-[11px] text-slate-400">
            View developer docs &rarr; <span className="text-slate-500">(route pending)</span>
          </span>
        </div>

        {/* Mobile 01-05 Metric Cards Stack */}
        <div className="mt-10 flex flex-col divide-y divide-white/10 border-t border-white/10 pt-2">
          {metricCards.map((card) => (
            <div key={card.number} className="flex flex-col py-4 first:pt-2">
              <span className="font-mono text-[11px] font-bold text-sky-400">
                {card.number}
              </span>
              <h3 className="mt-1 font-manrope text-sm font-bold text-white">
                {card.title}
              </h3>
              <p className="mt-0.5 font-manrope text-xs leading-relaxed text-slate-300">
                {card.number === "03" ? "Rules applied now" : card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Conceptual Trust Chain Note Footer */}
        <div className="mt-6 border-t border-white/10 pt-4">
          <p className="font-manrope text-[11px] leading-relaxed text-slate-400">
            Conceptual trust chain. A text equivalent is in the first section of the design below. Not a product screenshot.
          </p>
        </div>
      </div>
    </section>
  );
}
