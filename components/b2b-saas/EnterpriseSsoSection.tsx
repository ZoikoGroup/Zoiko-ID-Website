import Image from "next/image";

const ssoFeatures = [
  {
    title: "No user migration",
    description: "Keep existing IdP, no data extraction",
    icon: "/b2b-saas/icons/sso-icon-1.svg",
  },
  {
    title: "SAML, OAuth, OIDC",
    description: "Supports all enterprise protocols",
    icon: "/b2b-saas/icons/sso-icon-2.svg",
  },
  {
    title: "Org & role context passed",
    description: "Identity + org claims inform decisions",
    icon: "/b2b-saas/icons/sso-icon-3.svg",
  },
];

export default function EnterpriseSsoSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-[60px]">
        <h2 className="text-center font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl lg:text-[52px] lg:leading-[59.8px]">
          Enterprise SSO &amp; federation
        </h2>

        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-[60px]">
          {/* Left Column Image */}
          <div className="relative h-[320px] w-full overflow-hidden rounded-xl sm:h-[400px]">
            <Image
              src="/b2b-saas/enterprise-sso.webp"
              alt="Enterprise SSO and federation"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </div>

          {/* Right Column Content */}
          <div className="flex flex-col gap-5">
            <h3 className="font-dm-serif text-2xl font-normal leading-8 text-azure-9 sm:text-[22.4px]">
              Connect to existing IdP
            </h3>

            <p className="font-manrope text-base font-normal leading-7 text-[#475569]">
              Your customer&apos;s identity provider (Okta, Azure AD, Ping) remains
              <br className="hidden sm:inline" />
              the source of truth. Zoiko iD receives authenticated identity
              <br className="hidden sm:inline" />
              context and federation signals.
            </p>

            <div className="flex flex-col gap-4 rounded-xl border border-grey-91 bg-white-solid p-6 sm:p-7">
              {ssoFeatures.map((item) => (
                <div key={item.title} className="flex items-start gap-3.5">
                  <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center">
                    <Image
                      src={item.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="size-5"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-manrope text-[15.2px] font-semibold text-[#475569]">
                      {item.title}
                    </h4>
                    <p className="font-manrope text-[13.6px] font-normal leading-5 text-azure-47">
                      {item.description}
                    </p>
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
