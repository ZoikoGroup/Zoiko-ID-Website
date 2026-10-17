import Image from "next/image";

export default function AvailabilityHandoffsSection() {
  const handoffs = [
    {
      title: "Trust Center",
      description: "Evidence and assurance records.",
      image: "/availability-status/handoff-trust-center.webp",
      icon: "/availability-status/icon-shield.svg",
      tag: "Route pending registry",
    },
    {
      title: "Security Advisories",
      description: "Security issues and their scope.",
      image: "/availability-status/handoff-security-contact.webp",
      icon: "/availability-status/icon-alert.svg",
      tag: "Route pending registry",
    },
    {
      title: "Responsible Disclosure",
      description: "Report a suspected vulnerability.",
      image: "/availability-status/handoff-help-support.webp",
      icon: "/availability-status/icon-flag.svg",
      tag: "Route pending registry",
    },
    {
      title: "Help and Support",
      description: "Account-specific tickets.",
      image: "/availability-status/handoff-developer-forum.webp",
      icon: "/availability-status/icon-forum.svg",
      tag: "Route pending registry",
    },
  ];

  return (
    <section className="bg-[#f1f5f9] px-6 py-16 sm:px-10 lg:px-20 lg:py-24 xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-10 lg:gap-12">
        {/* Section Heading */}
        <div>
          <h2 className="font-dm-serif text-3xl font-normal leading-[1.1] text-[#0b1b33] sm:text-5xl lg:text-[52px] lg:leading-[55px]">
            Different questions go to different owners
          </h2>
        </div>

        {/* 4 Handoff Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {handoffs.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[18px] border border-[#e2e8f0] bg-white-solid shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <div className="relative aspect-[265/120] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 265px"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-3 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e0f2fe]">
                  <Image
                    src={item.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                </div>

                <h3 className="font-manrope text-[17px] font-bold leading-tight text-[#0b1b33]">
                  {item.title}
                </h3>

                <p className="font-manrope text-[13px] leading-[21px] text-[#64748b]">
                  {item.description}
                </p>

                <div className="mt-1 inline-flex w-fit items-center rounded-lg bg-[#f1f5f9] px-2.5 py-1 font-manrope text-[12px] font-normal text-[#0b1b33]">
                  {item.tag}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote Bar */}
        <p className="mt-2 text-center font-manrope text-[14px] font-bold leading-[22px] text-[#0b1b33]">
          Incident reports are not sales enquiries. Do not send incident details
          through the enterprise enquiry form. Account-specific help goes to the
          Help and Support route.
        </p>
      </div>
    </section>
  );
}
