import Image from "next/image";

interface DistinctionItem {
  icon: string;
  title: string;
  description: string;
}

const distinctions: DistinctionItem[] = [
  {
    icon: "/integrations-operate/icon-334_4455.svg",
    title: "Federation",
    description: "Carries an identity assertion. Does not grant permission.",
  },
  {
    icon: "/integrations-operate/icon-334_4462.svg",
    title: "Identity verification",
    description: "Establishes the identity a credential refers to.",
  },
  {
    icon: "/integrations-operate/icon-334_4469.svg",
    title: "Access governance",
    description: "Defines scoped, time-bound authority and its revocation.",
  },
];

export default function IntegrationsOperateFederationSection() {
  return (
    <section className="bg-[#F1F5F9] px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-10 lg:gap-12">
        {/* Section Heading & Subtitle - 2 Columns */}
        <div className="grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[62.4px]">
            Federation and
            <br />
            identity provider
            <br />
            interoperability
          </h2>

          <p className="font-manrope text-base font-normal leading-7 text-[#64748B] sm:text-[16.8px] sm:leading-[28.56px]">
            Three distinct questions need three distinct answers. Federation
            <br className="hidden sm:block" />
            {" "}carries an identity assertion from your provider. Identity
            <br className="hidden sm:block" />
            {" "}verification establishes who a person or organization is. Access
            <br className="hidden sm:block" />
            {" "}governance decides what that identity may do, and for how long.
          </p>
        </div>

        {/* 2 Columns: Distinctions List (Left) + Graphic Illustration (Right) */}
        <div className="grid w-full grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: 3 Cards */}
          <div className="flex flex-col justify-between gap-4 lg:col-span-6 xl:col-span-6">
            {distinctions.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-center gap-1.5 rounded-[10px] border border-[#E2E8F0] bg-white-solid p-5 shadow-xs sm:px-6 sm:py-5"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={item.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="shrink-0"
                  />
                  <h3 className="font-manrope text-[16px] font-bold leading-6 text-[#071426]">
                    {item.title}
                  </h3>
                </div>
                <p className="font-manrope text-[14px] font-normal leading-[23px] text-[#64748B]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Abstract Network Image */}
          <div className="relative min-h-[300px] w-full overflow-hidden rounded-[12px] border border-[#E2E8F0] shadow-md sm:min-h-[380px] lg:col-span-6 lg:min-h-[420px] xl:col-span-6">
            <Image
              src="/integrations-operate/img-eb525fd2646ba38c95801f2c08e950576e93ac65.png"
              alt="Laptop displaying application dashboard"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom Callout Box */}
        <div className="w-full rounded-[10px] border-l-4 border-[#F59E0B] bg-[#FFFBEB] p-5 sm:p-6">
          <p className="font-manrope text-base font-normal leading-7 text-[#475569]">
            <strong className="font-bold text-[#071426]">Protocol names are not guarantees.</strong>{" "}
            A standard listed here (for example OIDC or SAML) describes a design direction. It does not
            confirm exact interoperability with a specific vendor product or tenant configuration.
          </p>
        </div>
      </div>
    </section>
  );
}
