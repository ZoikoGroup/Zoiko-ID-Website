import Image from "next/image";

interface RouteCard {
  title: string;
  description: string;
  image: string;
  icon: string;
}

const routes: RouteCard[] = [
  {
    title: "Read the Privacy Notice",
    description: "Formal legal disclosures, approved by Legal.",
    image: "/trust-assurance-privacy/route-notice.webp",
    icon: "/trust-assurance-privacy/route-icon-1.svg",
  },
  {
    title: "Manage cookie settings",
    description: "Only where preference tooling is implemented.",
    image: "/trust-assurance-privacy/route-cookie.webp",
    icon: "/trust-assurance-privacy/route-icon-2.svg",
  },
  {
    title: "Exercise privacy rights",
    description: "Routed to the governed rights channel.",
    image: "/trust-assurance-privacy/route-rights.webp",
    icon: "/trust-assurance-privacy/route-icon-3.svg",
  },
  {
    title: "Ask a privacy question",
    description: "General questions, separate from rights requests.",
    image: "/trust-assurance-privacy/route-question.webp",
    icon: "/trust-assurance-privacy/route-icon-4.svg",
  },
];

export default function PrivacyRightsRoutesSection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-36">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-12 sm:gap-14">
        {/* Section Heading */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#0B1B33] sm:text-5xl lg:text-[52px] lg:leading-[57.8px]">
            Formal rights go to their owners
          </h2>
          <p className="max-w-[850px] font-manrope text-base font-normal leading-relaxed text-[#64748B]">
            Rights requests are handled by Legal operations through their own
            intake, not through a sales form. Routes below appear only when
            registered; none has a timeline stated here.
          </p>
        </div>

        {/* 4 Route Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {routes.map((route) => (
            <div
              key={route.title}
              className="group flex flex-col justify-between overflow-hidden rounded-[16px] border border-[#E2E8F0] bg-white shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-[162px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={route.image}
                    alt={route.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="mb-3.5 flex size-9 items-center justify-center rounded-[10px] bg-[#E0F2FE]">
                    <Image
                      src={route.icon}
                      alt=""
                      width={18}
                      height={18}
                      className="size-4.5 shrink-0"
                    />
                  </div>

                  <h3 className="mb-2 font-manrope text-[17px] font-bold text-[#071426]">
                    {route.title}
                  </h3>
                  <p className="font-manrope text-[14px] leading-relaxed text-[#64748B]">
                    {route.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Warning Callout Box with Left Accent Border */}
        <div className="rounded-[12px] border border-[#FDE68A] border-l-4 border-l-[#F59E0B] bg-[#FFFBEB] p-5 sm:p-6 shadow-xs">
          <p className="font-manrope text-[14px] font-medium leading-relaxed text-[#071426] sm:text-[15px]">
            Do not send identity documents here. Public forms never collect ID
            documents, credentials or payment data. Verification for rights
            requests is handled by Legal operations.
          </p>
        </div>
      </div>
    </section>
  );
}
