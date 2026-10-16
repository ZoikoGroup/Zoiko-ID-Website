const securityCards = [
  {
    title: "Origin verification",
    description: "Verify each notification's origin before reading its contents.",
    badge: "Security approval pending",
  },
  {
    title: "Secret handling",
    description: "Keep verification secrets in a secret manager. Never publish them in examples or logs.",
    badge: "Engineering gated",
  },
  {
    title: "Key rotation",
    description: "Rotation procedures are documented once the approved contract is published.",
    badge: "Engineering gated",
  },
  {
    title: "Encrypted transport",
    description: "Design requirement: deliver only to encrypted endpoints. Not a verified product claim.",
    badge: "Design requirement",
  },
  {
    title: "Replay resistance",
    description: "Design requirement: reject stale notifications. Tolerance is set by the contract.",
    badge: "Design requirement",
  },
  {
    title: "Tenant boundary",
    description: "Subscriptions are authorized server-side. Possessing an endpoint is not authority.",
    badge: "Server-side enforced",
  },
];

export default function WebhooksSecuritySection() {
  return (
    <section className="bg-[#0b1b33] px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 sm:gap-14">
        {/* Header */}
        <div>
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-white-solid sm:text-4xl md:text-[46px]">
            A governed technical boundary
          </h2>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {securityCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col justify-between rounded-xl border border-[#1e3a66] bg-[#0f2140] p-6 shadow-sm transition-colors duration-200 hover:border-blue-500/50"
            >
              <div className="flex flex-col gap-2.5 pb-6">
                <h3 className="font-manrope text-base font-bold text-white-solid sm:text-[17px]">
                  {card.title}
                </h3>
                <p className="font-manrope text-sm font-normal leading-relaxed text-slate-400">
                  {card.description}
                </p>
              </div>

              <div>
                <span className="inline-flex items-center rounded-full bg-[#1e3a66] px-3 py-1 font-manrope text-xs font-bold text-slate-200">
                  {card.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Red Warning Banner */}
        <div className="flex items-center rounded-lg border-l-4 border-red-500 bg-red-950/30 px-5 py-4">
          <p className="font-manrope text-sm font-normal leading-relaxed text-red-200 sm:text-[15px]">
            Never place a secret in a public example, support request, or analytics
            event.
          </p>
        </div>
      </div>
    </section>
  );
}
