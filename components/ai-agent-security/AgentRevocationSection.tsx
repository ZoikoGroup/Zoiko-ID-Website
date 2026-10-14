import Image from "next/image";
import type { ReactNode } from "react";

interface RevocationCard {
  icon: string;
  title: string;
  description: ReactNode;
}

const revocationItems: RevocationCard[] = [
  {
    icon: "/ai-agent-security/revocation-revocation.svg",
    title: "Revocation",
    description: (
      <>
        Sponsor or organization withdraws agent&apos;s mandate immediately. Current sessions are terminated. New requests are denied. No
        <br />
        grace period.
      </>
    ),
  },
  {
    icon: "/ai-agent-security/revocation-expiry.svg",
    title: "Expiry",
    description: (
      <>
        Mandate time boundary reached. Agent no longer has authority. Must request new mandate if work continues. Automatic
        <br />
        enforcement.
      </>
    ),
  },
  {
    icon: "/ai-agent-security/revocation-denied.svg",
    title: "Denied Action",
    description: (
      <>
        Agent requests action outside mandate scope. Decision: deny. Reason logged. Agent can report to sponsor; sponsor can update
        <br />
        mandate if needed.
      </>
    ),
  },
  {
    icon: "/ai-agent-security/revocation-indeterminate.svg",
    title: "Indeterminate",
    description: (
      <>
        Mandate status cannot be verified (service unavailable, corrupted record). Default: deny. Agent can retry later or escalate to
        <br />
        sponsor.
      </>
    ),
  },
];

export default function AgentRevocationSection() {
  return (
    <section id="revocation-denial" className="bg-[#F1F5F9] px-6 py-20 sm:px-10 lg:px-[160px] lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-[60px]">
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Revocation, expiry & denial
        </h2>

        <div className="flex w-full flex-col gap-6">
          {revocationItems.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-5 rounded-xl border border-mystic bg-white-solid p-7 shadow-[0px_1px_3px_0px_rgba(15,23,42,0.03)] transition-all duration-200 hover:shadow-md"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[linear-gradient(135deg,rgba(34,184,214,0.15)_0%,rgba(37,99,235,0.15)_100%)]">
                <Image
                  src={item.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7"
                />
              </div>

              <div className="flex flex-col gap-2 pt-0.5">
                <h4 className="font-manrope text-[16.8px] font-bold leading-snug text-[#071426] text-left">
                  {item.title}
                </h4>
                <p className="font-manrope text-[15.2px] font-normal leading-[26.6px] text-[#64748B] text-left">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
