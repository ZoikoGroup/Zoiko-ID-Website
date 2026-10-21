import Image from "next/image";

interface RolePath {
  role: string;
  image: string;
  steps: string[];
}

const paths: RolePath[] = [
  {
    role: "Enterprise architect",
    image: "/authority-explainers/path-product-eng.webp",
    steps: [
      "Read the concept boundaries",
      "Read the authority anatomy",
      "Read the lifecycle",
      "Follow to Architecture Guides",
    ],
  },
  {
    role: "IAM or security lead",
    image: "/authority-explainers/path-security-platform.webp",
    steps: [
      "Read the denial example",
      "Read continuous trust",
      "Read evidence and privacy",
      "Follow to Trust resources",
    ],
  },
  {
    role: "Developer",
    image: "/authority-explainers/path-risk-compliance.webp",
    steps: [
      "Read the concept boundaries",
      "Read the authority anatomy",
      "Follow to API Reference",
    ],
  },
];

export default function AuthorityPathsSection() {
  return (
    <section id="paths-section" className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-14 lg:gap-16">
        {/* Heading */}
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#0B1B33] sm:text-5xl lg:text-[52px] lg:leading-[51.92px]">
            Choose the route that matches your role
          </h2>
          <p className="max-w-[780px] font-manrope text-base font-normal leading-[25.6px] text-[#64748B]">
            Each path lists the order of reading. Destinations marked pending are not yet approved, so they do not link anywhere.
          </p>
        </div>

        {/* 3 Role Path Cards */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {paths.map((p) => (
            <div
              key={p.role}
              className="flex flex-col overflow-hidden rounded-[18px] border border-[#E2E8F0] bg-white-solid shadow-sm transition-all duration-200 hover:shadow-md"
            >
              {/* Image banner */}
              <div className="relative h-[150px] w-full shrink-0 overflow-hidden bg-[#F1F5F9]">
                <Image
                  src={p.image}
                  alt={p.role}
                  fill
                  sizes="(min-width: 1024px) 357px, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col gap-4 p-[22px]">
                <h3 className="font-manrope text-[17px] font-bold leading-[27.2px] text-[#0B1B33]">
                  {p.role}
                </h3>

                <ol className="flex flex-col gap-2.5">
                  {p.steps.map((step, idx) => (
                    <li
                      key={step}
                      className="flex items-center gap-2.5 font-manrope text-sm leading-[22.4px] text-[#334155]"
                    >
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#F1F5F9] text-xs font-bold text-[#0B1B33]">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
