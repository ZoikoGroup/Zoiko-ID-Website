import Image from "next/image";

const revocationCards = [
  {
    image: "/third-party-access/revocation-instant-bg.webp",
    title: "Manual Revocation",
    description:
      "Delegator withdraws mandate immediately. No notice period. Next request: 403 Forbidden. In-flight requests get error on next auth check.",
  },
  {
    image: "/third-party-access/revocation-expiry-bg.webp",
    title: "Automatic Expiry",
    description:
      "Time boundary reached. System automatically expires mandate. Recipient not notified; access simply stops working.",
  },
  {
    image: "/third-party-access/revocation-policy-bg.webp",
    title: "Policy-Driven Revocation",
    description:
      'Principal\'s risk policy triggers. All recipients matching condition are revoked instantly (e.g., "Revoke all external access if breach detected").',
  },
];

export default function RevocationExpirySection() {
  return (
    <section id="revocation" className="bg-white-solid px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-12 sm:gap-14">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Revocation and immediate access denial
        </h2>

        {/* 3 Cards Grid */}
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3 lg:gap-8">
          {revocationCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col overflow-hidden rounded-[12px] border border-mystic bg-white-solid shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Card Header Image */}
              <div className="relative h-[190px] w-full overflow-hidden bg-azure-9">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 1024px) 380px, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Content Body */}
              <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
                <h3 className="font-dm-serif text-xl font-normal text-azure-9 sm:text-[22.4px]">
                  {card.title}
                </h3>
                <p className="font-manrope text-[14.5px] font-normal leading-relaxed text-azure-47 sm:text-[15.2px] sm:leading-[26px]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Audit Trail Callout */}
        <div className="w-full rounded-[12px] border border-mystic bg-[#F8FAFC] p-6 text-center sm:p-7">
          <p className="font-manrope text-[15px] leading-relaxed text-[#475569] sm:text-[16px] sm:leading-[28px]">
            <strong className="font-bold text-[#334155]">Audit trail:</strong>{" "}
            &ldquo;Mandate revoked by [who] at [time] reason [policy_code |
            manual | expiry]&rdquo;. All evidence logged. Regulators can see the
            chain.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-mystic pt-2" />
      </div>
    </section>
  );
}
