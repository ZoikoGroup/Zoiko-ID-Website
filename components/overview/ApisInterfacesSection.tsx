import Image from "next/image";
import Link from "next/link";

const apiInterfaces = [
  {
    icon: "/overview/api-auth-fed.svg",
    title: "Authentication & Federation",
    description:
      "Issue credentials, verify identity, integrate with IdP. OAuth 2.0, OIDC, SAML, mTLS.",
    href: "/apis-integrations",
  },
  {
    icon: "/overview/api-credentials.svg",
    title: "Credentials & Verification",
    description:
      "Create, revoke, and verify credentials. Manage certificate lifecycle. Check revocation status.",
    href: "/apis-integrations",
  },
  {
    icon: "/overview/api-delegated.svg",
    title: "Delegated Authority & Decision",
    description:
      "Create mandates, check scope, evaluate policy. Bind identity to bounded authority.",
    href: "/apis-integrations",
  },
  {
    icon: "/overview/api-service-agent.svg",
    title: "Service & Agent Identity",
    description:
      "Enroll services, issue agent credentials. Manage non-human principals.",
    href: "/ai-agent-security",
  },
  {
    icon: "/overview/api-signals.svg",
    title: "Signals & Revocation",
    description:
      "Stream trust signal changes, policy updates, and revocation events in real time.",
    href: "/apis-integrations",
  },
  {
    icon: "/overview/api-evidence.svg",
    title: "Evidence & Events",
    description:
      "Query audit trail, export compliance evidence, subscribe to authorization events.",
    href: "/apis-integrations",
  },
];

export default function ApisInterfacesSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-28 xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-16">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl sm:leading-[59.8px]">
          APIs and policy interfaces
        </h2>

        {/* 6 Cards Grid (3x2) */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {apiInterfaces.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between rounded-xl border border-mystic bg-white-solid p-7 transition-all duration-300 hover:-translate-y-1 hover:border-scooter-48/40 hover:shadow-[0px_16px_32px_0px_rgba(7,20,38,0.06)]"
            >
              <div className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-scooter-48/10 p-2.5">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
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

              <div className="mt-6 pt-4 border-t border-mystic/60">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 font-manrope text-sm font-semibold text-scooter-48 transition-colors duration-200 group-hover:text-cyan-600"
                >
                  View API docs
                  <Image
                    src="/overview/link-arrow-cyan.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
