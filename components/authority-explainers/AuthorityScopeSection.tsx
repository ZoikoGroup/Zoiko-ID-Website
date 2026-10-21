import Image from "next/image";

interface ScopeItem {
  icon: string;
  text: string;
}

const scopeItems: ScopeItem[] = [
  {
    icon: "/authority-explainers/scope-icon-1.svg",
    text: "Create or change a delegated grant",
  },
  {
    icon: "/authority-explainers/scope-icon-2.svg",
    text: "Revoke a grant",
  },
  {
    icon: "/authority-explainers/scope-icon-3.svg",
    text: "Collect consent",
  },
  {
    icon: "/authority-explainers/scope-icon-4.svg",
    text: "Give legal advice on powers of attorney",
  },
  {
    icon: "/authority-explainers/scope-icon-5.svg",
    text: "Document API behaviour (see API Reference)",
  },
  {
    icon: "/authority-explainers/scope-icon-6.svg",
    text: "Show policy syntax or sample policies",
  },
  {
    icon: "/authority-explainers/scope-icon-7.svg",
    text: "Claim certification or conformance",
  },
  {
    icon: "/authority-explainers/scope-icon-8.svg",
    text: "Show an operational audit console",
  },
];

export default function AuthorityScopeSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-14 lg:gap-16">
        {/* Heading */}
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#0B1B33] sm:text-5xl lg:text-[52px] lg:leading-[51.92px]">
            Boundaries of the page
          </h2>
          <p className="max-w-[780px] font-manrope text-base font-normal leading-[25.6px] text-[#64748B]">
            These functions belong to other destinations or to no public destination at all.
          </p>
        </div>

        {/* 2-Column Layout: Left Image, Right Grid of 8 items */}
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-12">
          {/* Left Preview Image */}
          <div className="relative h-[360px] w-full max-w-[499px] shrink-0 overflow-hidden rounded-[24px] bg-[#F1F5F9] shadow-sm sm:h-[429px] sm:rounded-[32px]">
            <Image
              src="/authority-explainers/scope-boundaries-preview.webp"
              alt="Boundaries preview"
              fill
              sizes="(min-width: 1024px) 499px, 100vw"
              className="object-cover"
            />
          </div>

          {/* Right: 4x2 Grid */}
          <div className="grid w-full flex-1 grid-cols-1 gap-3.5 sm:grid-cols-2">
            {scopeItems.map((item) => (
              <div
                key={item.text}
                className="flex min-h-[82px] items-center gap-3 rounded-[14px] border border-[#E2E8F0] bg-white-solid p-4 shadow-2xs transition-colors hover:border-slate-300"
              >
                <div className="flex size-7 shrink-0 items-center justify-center">
                  <Image
                    src={item.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="size-5"
                  />
                </div>
                <span className="font-manrope text-sm font-normal leading-snug text-[#334155]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
