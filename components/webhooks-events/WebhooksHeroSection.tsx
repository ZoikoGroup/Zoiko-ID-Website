import Link from "next/link";

export default function WebhooksHeroSection() {
  return (
    <section className="relative overflow-hidden bg-azure-9 px-6 py-24 sm:px-10 lg:py-32">
      {/* Background image & gradient overlay matching Figma node 364:2 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/webhooks-events/hero-bg.webp')",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-azure-9/90 via-azure-9/85 to-azure-9"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col items-center text-center gap-8">
        <h1 className="max-w-[942px] font-dm-serif text-4xl font-normal leading-tight text-white-solid sm:text-5xl md:text-6xl lg:text-[68px] lg:leading-[1.12]">
          Respond to identity and authority changes with governed events.
        </h1>

        <p className="max-w-[784px] font-manrope text-base font-normal leading-relaxed text-geyser sm:text-lg sm:leading-8">
          Connect identity systems and applications to event-driven trust workflows.
          Learn how changes to identities, delegated authority and trust signals can
          be represented as notifications—while policy decisions and audit evidence
          remain governed by their authoritative systems.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="#enquiry"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-azure-48 px-7 py-3.5 text-center font-manrope text-base font-bold leading-5 text-white-solid shadow-[0px_8px_20px_0px_rgba(37,99,235,0.35)] transition-all duration-200 hover:bg-blue-600 hover:shadow-[0px_10px_24px_0px_rgba(37,99,235,0.45)]"
          >
            Talk to an identity expert
          </Link>
          <Link
            href="/apis-integrations"
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-400/40 bg-white/5 px-7 py-3.5 text-center font-manrope text-base font-bold leading-5 text-white-solid backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:border-slate-300"
          >
            Explore API Reference
          </Link>
        </div>
      </div>
    </section>
  );
}
