import Image from "next/image";

interface SecurityCard {
  icon: string;
  title: string;
  description: string;
}

const securityCards: SecurityCard[] = [
  {
    icon: "/api-reference/icon-320_448.svg",
    title: "TLS 1.3",
    description: "All endpoints use TLS 1.3 Encryption. No unencrypted traffic.",
  },
  {
    icon: "/api-reference/icon-320_456.svg",
    title: "Bearer tokens",
    description: "Use OAuth 2.0 bearer tokens. Include in Authorization header.",
  },
  {
    icon: "/api-reference/icon-320_464.svg",
    title: "mTLS optional",
    description: "Service-to-service? Use mutual TLS for extra security.",
  },
  {
    icon: "/api-reference/icon-320_472.svg",
    title: "CORS enabled",
    description: "Browser-safe. CORS headers on approved origins.",
  },
];

export default function ApiReferenceSecuritySection() {
  return (
    <section className="relative overflow-hidden bg-[#030712] px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      {/* Background Image Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <Image
          src="/api-reference/security-bg.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col items-center gap-[60px]">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-3xl font-normal text-white-solid sm:text-4xl lg:text-[52px] lg:leading-[71.3px]">
          Security and authentication
        </h2>

        <div className="flex w-full flex-col gap-10">
          {/* 4 Security Cards */}
          <div className="grid w-full grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {securityCards.map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-start rounded-[12px] border border-[#E2E8F0] bg-white-solid p-7 pt-9 shadow-xs transition-shadow duration-200 hover:shadow-lg sm:min-h-[253px]"
              >
                <div className="pb-4 pt-0.5">
                  <Image
                    src={card.icon}
                    alt=""
                    width={32}
                    height={32}
                  />
                </div>

                <h3 className="pb-3 font-manrope text-[16.8px] font-bold leading-[22.95px] text-[#071426]">
                  {card.title}
                </h3>

                <p className="font-manrope text-[14.4px] font-normal leading-[25.2px] text-[#64748B]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Alert Banner */}
          <div className="flex w-full flex-col items-start gap-4 rounded-[12px] border border-[rgba(220,38,38,0.3)] bg-white-solid p-7 shadow-xs sm:flex-row sm:items-center">
            <div className="shrink-0">
              <Image
                src="/api-reference/icon-320_481.svg"
                alt="Alert"
                width={28}
                height={28}
              />
            </div>

            <div className="flex flex-col gap-1">
              <h4 className="font-manrope text-[15.2px] font-semibold leading-[26.6px] text-[#DC2626]">
                Never expose secrets
              </h4>
              <p className="font-manrope text-[14.4px] font-normal leading-[25.2px] text-[#475569]">
                Never paste API keys, tokens, or credentials into public forms, logs, or screenshots. Rotate immediately if exposed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
