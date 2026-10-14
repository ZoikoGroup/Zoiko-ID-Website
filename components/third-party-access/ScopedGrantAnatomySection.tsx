import Image from "next/image";

const scopeItems = [
  {
    number: "1",
    title: "Resource Boundary",
    description:
      'Which resources? Example: "Project X data in S3 bucket." Not all company data.',
  },
  {
    number: "2",
    title: "Action Limit",
    description:
      'Which actions? Example: "Read and download. Cannot delete or modify."',
  },
  {
    number: "3",
    title: "Volume Cap",
    description:
      'How much? Example: "Max 10 GB per day. Cannot bulk export."',
  },
  {
    number: "4",
    title: "Time Window",
    description:
      'When? Example: "January 1–31, 2026 only. Not renewable."',
  },
  {
    number: "5",
    title: "Purpose Statement",
    description:
      'Why? Example: "Quarterly audit of vendor invoices. No other use."',
  },
];

export default function ScopedGrantAnatomySection() {
  return (
    <section className="relative overflow-hidden bg-azure-9 px-6 py-20 sm:px-10 sm:py-24 lg:px-20 lg:py-[105px]">
      {/* Background Graphic */}
      <Image
        src="/third-party-access/scope-anatomy-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-[#071426]/75" />

      <div className="relative mx-auto flex w-full max-w-[1144px] flex-col items-center gap-12 sm:gap-14">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-tight text-white-solid sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Scope anatomy: What can the recipient do?
        </h2>

        {/* White Scope Card */}
        <div className="w-full rounded-[12px] border border-mystic bg-white-solid p-6 shadow-xl sm:p-10 lg:px-12 lg:py-14">
          <div className="flex flex-col divide-y divide-mystic">
            {scopeItems.map((item) => (
              <div
                key={item.number}
                className="flex flex-col gap-2 py-5 first:pt-0 last:pb-0 sm:gap-2.5 sm:py-6"
              >
                <h3 className="font-manrope text-base font-bold text-azure-9 sm:text-[16.8px]">
                  {item.number}. {item.title}
                </h3>
                <p className="font-manrope text-[14.5px] font-normal leading-relaxed text-azure-47 sm:text-[15.2px] sm:leading-[26.6px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scope vs Permission Callout */}
        <div className="w-full rounded-[12px] border border-white/40 bg-white/15 p-6 backdrop-blur-md sm:p-7">
          <p className="font-manrope text-base leading-relaxed text-white-solid sm:text-[16px] sm:leading-[28px]">
            <strong className="font-bold text-white-solid">
              Scope is NOT permission:
            </strong>{" "}
            <span className="font-normal text-white-solid/90">
              Scope defines the boundary. Permission is the decision made at
              request time by policy engine. The recipient cannot act outside
              scope, and policy can further restrict inside scope.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
