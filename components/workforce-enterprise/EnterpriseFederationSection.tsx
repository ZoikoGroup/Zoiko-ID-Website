import Image from "next/image";

interface FederationFeature {
  icon: string;
  title: string;
  description: string;
}

const federationFeatures: FederationFeature[] = [
  {
    icon: "/workforce-enterprise/federation-saml.svg",
    title: "SAML, OIDC, OAuth",
    description: "All enterprise protocols supported",
  },
  {
    icon: "/workforce-enterprise/federation-scim.svg",
    title: "Directory Sync",
    description: "SCIM provisioning for users and groups",
  },
  {
    icon: "/workforce-enterprise/federation-role-passing.svg",
    title: "Role & Attribute Passing",
    description: "HRIS role, department, and custom attributes",
  },
];

export default function EnterpriseFederationSection() {
  return (
    <section id="enterprise-federation" className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12 lg:gap-[60px]">
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Enterprise federation & overlay
        </h2>

        <div className="flex w-full flex-col items-center justify-between gap-12 lg:flex-row lg:gap-14">
          {/* Left Column: Graphic */}
          <div className="relative aspect-[600/400] w-full max-w-[580px] shrink-0 overflow-hidden rounded-xl border border-mystic shadow-[0px_4px_20px_0px_rgba(15,23,42,0.06)] lg:h-[400px] lg:translate-x-[35px]">
            <Image
              src="/workforce-enterprise/federation-graphic.png"
              alt="Enterprise federation architecture"
              fill
              sizes="(min-width: 1024px) 580px, 100vw"
              className="object-cover"
            />
          </div>

          {/* Right Column: Copy & Feature List */}
          <div className="flex w-full max-w-[620px] flex-col">
            <h3 className="mb-3 font-dm-serif text-2xl font-normal leading-snug text-azure-9 sm:text-[22.4px]">
              Your IdP remains the source of truth
            </h3>

            <p className="mb-8 font-manrope text-base font-normal leading-7 text-[#475569]">
              No user migration. No credential replacement. Employees
              <br />
              authenticate via Okta, Azure AD, Ping, or your own IdP. Zoiko iD
              <br />
              receives authenticated identity and organization context, adds
              <br />
              authority evaluation and audit evidence.
            </p>

            <div className="flex flex-col gap-4 rounded-xl border border-mystic bg-white-solid p-6 shadow-[0px_1px_3px_0px_rgba(15,23,42,0.03)] sm:p-7">
              {federationFeatures.map((feat) => (
                <div key={feat.title} className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center">
                    <Image
                      src={feat.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="h-5 w-5"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-manrope text-[15.2px] font-semibold leading-normal text-[#475569]">
                      {feat.title}
                    </span>
                    <span className="font-manrope text-[13.6px] font-normal leading-normal text-azure-47">
                      {feat.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
