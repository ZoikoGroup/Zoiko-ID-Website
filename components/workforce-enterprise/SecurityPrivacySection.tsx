import Image from "next/image";
import type { ReactNode } from "react";

interface SecurityCard {
  icon: string;
  title: string;
  description: ReactNode;
}

const securityCards: SecurityCard[] = [
  {
    icon: "/workforce-enterprise/security-data-isolation.svg",
    title: "Data Isolation",
    description: (
      <>
        Per-tenant isolation. No
        <br />
        cross-org data leakage.
        <br />
        Access controls enforced
        <br />
        at database level.
      </>
    ),
  },
  {
    icon: "/workforce-enterprise/security-privacy-first.svg",
    title: "Privacy First",
    description: (
      <>
        Minimal PII collection.
        <br />
        Credentials never logged.
        <br />
        Data subject rights
        <br />
        supported.
      </>
    ),
  },
  {
    icon: "/workforce-enterprise/security-least-privilege.svg",
    title: "Least Privilege",
    description: (
      <>
        Every access grant explicit
        <br />
        and scoped. No implicit
        <br />
        permissions. Time-limited
        <br />
        by default.
      </>
    ),
  },
  {
    icon: "/workforce-enterprise/security-verified-claims.svg",
    title: "Verified Claims",
    description: (
      <>
        Security, compliance,
        <br />
        certifications backed by
        <br />
        evidence and attestation.
      </>
    ),
  },
];

export default function SecurityPrivacySection() {
  return (
    <section id="security-privacy" className="bg-[#F1F5F9] px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12 lg:gap-[60px]">
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Enterprise security, privacy & assurance
        </h2>

        <div className="grid w-full grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {securityCards.map((card) => (
            <div
              key={card.title}
              className="flex min-h-[250px] flex-col items-center justify-center rounded-xl border border-mystic bg-white-solid p-7 text-center shadow-[0px_1px_3px_0px_rgba(15,23,42,0.03)] transition-all duration-200 hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center">
                <Image
                  src={card.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </div>

              <h4 className="mb-2 font-manrope text-[15.2px] font-bold leading-snug text-azure-9">
                {card.title}
              </h4>

              <p className="font-manrope text-[14.4px] font-normal leading-[25.2px] text-azure-47">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
