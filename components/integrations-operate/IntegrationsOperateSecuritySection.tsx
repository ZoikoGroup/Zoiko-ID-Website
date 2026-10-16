import Image from "next/image";

interface SecurityCheckItem {
  icon: string;
  title: string;
  description: string;
}

const securityItems: SecurityCheckItem[] = [
  {
    icon: "/integrations-operate/icon-334_5018.svg",
    title: "Delegated scopes.",
    description: "Each integration requests only the scope it needs.",
  },
  {
    icon: "/integrations-operate/icon-334_5023.svg",
    title: "Token handling.",
    description: "Tokens are never placed in URLs, logs, or public examples.",
  },
  {
    icon: "/integrations-operate/icon-334_5028.svg",
    title: "Tenant isolation.",
    description:
      "Tenant boundaries are enforced server-side, not by client interface.",
  },
  {
    icon: "/integrations-operate/icon-334_5033.svg",
    title: "Audit logs.",
    description: "Consequential changes are recorded for review.",
  },
  {
    icon: "/integrations-operate/icon-334_5038.svg",
    title: "Secret rotation.",
    description:
      "Integration secrets can be rotated without exposing their values.",
  },
  {
    icon: "/integrations-operate/icon-334_5043.svg",
    title: "Data minimization.",
    description:
      "Integrations receive only the attributes their purpose requires.",
  },
];

export default function IntegrationsOperateSecuritySection() {
  return (
    <section className="bg-white-solid px-4 py-16 sm:px-8 lg:px-12 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-[35px]">
        {/* 2-Column Header: Text Left + Team Photo Right */}
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: Heading and Subtitle */}
          <div className="flex flex-col text-left">
            <h2 className="font-dm-serif text-3xl font-normal text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[62.4px]">
              Security, consent,
              <br />
              and privacy
            </h2>

            <p className="mt-5 max-w-[570px] font-manrope text-base font-normal leading-7 text-[#64748B] sm:text-[16.8px] sm:leading-[28.56px]">
              Integration security is designed in from the start. The checklist below describes the control areas our design reviews cover. Specific certifications, encryption modes, geographies, and retention periods are stated only where approved documentation confirms them.
            </p>
          </div>

          {/* Right: Team in Front of Futuristic Screens Photo */}
          <div className="relative h-[240px] w-full overflow-hidden rounded-[12px] sm:h-[300px]">
            <Image
              src="/integrations-operate/img-d0d1529ae8e1056ae07333f3b5c01fc76419d50b.png"
              alt="Security team at futuristic monitors"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* 6 Checklist Items (2-column grid) */}
        <div className="grid w-full grid-cols-1 gap-3.5 md:grid-cols-2">
          {securityItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-[10px] border border-[#E2E8F0] bg-white-solid px-5 py-4.5 shadow-xs"
            >
              <div className="mt-1 flex size-[22px] shrink-0 items-center justify-center">
                <Image
                  src={item.icon}
                  alt=""
                  width={22}
                  height={22}
                  className="shrink-0"
                />
              </div>

              <p className="font-manrope text-base font-normal leading-[27.2px] text-[#475569]">
                <strong className="font-bold text-[#071426]">{item.title}</strong>{" "}
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
