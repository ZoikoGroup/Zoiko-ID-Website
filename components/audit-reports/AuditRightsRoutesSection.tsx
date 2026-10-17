import Image from "next/image";

interface RouteItem {
  title: string;
  description: string;
  image: string;
  icon: string;
}

const routes: RouteItem[] = [
  {
    title: "Read the Privacy Notice",
    description: "Formal legal disclosures, approved by Legal.",
    image: "/audit-reports/route-notice.webp",
    icon: "/audit-reports/route-icon-1.svg",
  },
  {
    title: "Manage cookie settings",
    description: "Only where preference tooling is implemented.",
    image: "/audit-reports/route-cookie.webp",
    icon: "/audit-reports/route-icon-2.svg",
  },
  {
    title: "Exercise privacy rights",
    description: "Routed to the governed rights channel.",
    image: "/audit-reports/route-rights.webp",
    icon: "/audit-reports/route-icon-3.svg",
  },
  {
    title: "Ask a privacy question",
    description: "General questions, separate from rights requests.",
    image: "/audit-reports/route-question.webp",
    icon: "/audit-reports/route-icon-4.svg",
  },
];

export default function AuditRightsRoutesSection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1230px] flex-col gap-12 sm:gap-14">
        {/* Section Heading */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#0B1B33] sm:text-5xl lg:text-[52px] lg:leading-[52px]">
            Formal rights go to their owners
          </h2>
          <p className="max-w-[820px] font-manrope text-base font-normal leading-relaxed text-[#64748B]">
            Rights requests are handled by Legal operations through their own
            intake, not through a sales form. Routes below appear only when
            registered; none has a timeline stated here.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {routes.map((route) => (
            <div
              key={route.title}
              className="group flex flex-col overflow-hidden rounded-[18px] border border-[#E2E8F0] bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-[130px] w-full overflow-hidden bg-slate-100">
                <Image
                  src={route.image}
                  alt={route.title}
                  fill
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Body */}
              <div className="flex flex-col p-5">
                {/* Icon */}
                <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-[#E0F2FE]">
                  <Image
                    src={route.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="size-5"
                  />
                </div>

                {/* Title */}
                <h3 className="mb-1.5 font-manrope text-[17px] font-bold leading-snug text-[#0B1B33]">
                  {route.title}
                </h3>

                {/* Description */}
                <p className="font-manrope text-[14px] leading-relaxed text-[#64748B]">
                  {route.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Warning Callout Banner */}
        <div className="rounded-r-[12px] border-l-4 border-[#F59E0B] bg-[#FFFBEB] px-5 py-4">
          <p className="font-manrope text-[14px] leading-relaxed">
            <span className="font-bold text-[#0B1B33]">
              Do not send identity documents here.
            </span>
            <span className="font-normal text-[#334155]">
              {" "}Public forms never collect ID documents, credentials or payment
              data. Verification for rights requests is handled by Legal
              operations.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
