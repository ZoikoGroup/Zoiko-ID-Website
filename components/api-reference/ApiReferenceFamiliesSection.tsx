import Image from "next/image";
import Link from "next/link";

interface ApiFamilyCard {
  image: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
  iconId: string;
}

const apiFamilies: ApiFamilyCard[] = [
  {
    image: "/api-reference/api-families-auth.png",
    title: "Authentication & Federation",
    description: "OAuth 2.0, OIDC, SAML, mTLS.\nIssue credentials, verify identity,\nmanage sessions.",
    linkText: "View endpoints",
    href: "#auth-endpoints",
    iconId: "/api-reference/icon-320_162.svg",
  },
  {
    image: "/api-reference/api-families-credentials.png",
    title: "Credentials & Verification",
    description: "Create, revoke, check credentials.\nManage certificate lifecycle. Verify\nrevocation status.",
    linkText: "View endpoints",
    href: "#credentials-endpoints",
    iconId: "/api-reference/icon-320_179.svg",
  },
  {
    image: "/api-reference/api-families-delegation.png",
    title: "Delegated Authority",
    description: "Create mandates, check scope,\nevaluate policy. Bind identity to\nbounded authority.",
    linkText: "View endpoints",
    href: "#delegation-endpoints",
    iconId: "/api-reference/icon-320_196.svg",
  },
  {
    image: "/api-reference/api-families-service-agent.png",
    title: "Service & Agent Identity",
    description: "Enroll services, issue agent\ncredentials. Manage non-human\nprincipals and AI agents.",
    linkText: "View endpoints",
    href: "#service-agent-endpoints",
    iconId: "/api-reference/icon-320_213.svg",
  },
  {
    image: "/api-reference/api-families-signals-events.png",
    title: "Signals & Events",
    description: "Stream credential, mandate, policy\nchange events. Subscribe to real-\ntime updates.",
    linkText: "View events",
    href: "#signals-events",
    iconId: "/api-reference/icon-320_230.svg",
  },
  {
    image: "/api-reference/api-families-evidence-audit.png",
    title: "Evidence & Audit",
    description: "Query audit trail, export\ncompliance evidence, search by\nactor, time range, action.",
    linkText: "View endpoints",
    href: "#evidence-audit-endpoints",
    iconId: "/api-reference/icon-320_248.svg",
  },
];

export default function ApiReferenceFamiliesSection() {
  return (
    <section className="bg-white-solid px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-[60px]">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-3xl font-normal text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[71.3px]">
          API families
        </h2>

        {/* 6 Cards Grid (3 cols x 2 rows) */}
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {apiFamilies.map((family, idx) => (
            <div
              key={idx}
              className="flex min-h-[370px] flex-col overflow-hidden rounded-[12px] border border-[#E2E8F0] bg-white-solid transition-shadow duration-200 hover:shadow-lg"
            >
              {/* Card Header Image */}
              <div className="relative h-[140px] w-full shrink-0 overflow-hidden bg-slate-100">
                <Image
                  src={family.image}
                  alt={family.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 350px, (min-width: 768px) 50vw, 100vw"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-8">
                <div>
                  <h3 className="pb-3 font-dm-serif text-[19.2px] font-normal leading-[26.32px] text-[#071426]">
                    {family.title}
                  </h3>

                  <p className="whitespace-pre-line pb-5 font-manrope text-base font-normal leading-7 text-[#64748B]">
                    {family.description}
                  </p>
                </div>

                <Link
                  href={family.href}
                  className="group inline-flex items-center gap-1.5 font-manrope text-base font-semibold leading-[21.86px] text-[#2563EB] transition-colors hover:text-blue-700"
                >
                  <span>{family.linkText}</span>
                  <Image
                    src={family.iconId}
                    alt=""
                    width={16}
                    height={16}
                    className="transition-transform group-hover:translate-x-0.5"
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
