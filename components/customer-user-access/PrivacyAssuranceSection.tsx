import Image from "next/image";

const assuranceItems = [
  {
    title: "Data Protection",
    description: (
      <>
        End-to-end encryption,
        <br />
        secure sessions, no
        <br />
        plaintext credentials
        <br />
        stored.
      </>
    ),
    icon: "/customer-user-access/icons/privacy-data.svg",
  },
  {
    title: "Privacy Design",
    description: (
      <>
        Minimal data collection, no
        <br />
        cross-tenant leakage, user
        <br />
        consent respected.
      </>
    ),
    icon: "/customer-user-access/icons/privacy-design.svg",
  },
  {
    title: "Audit Trails",
    description: (
      <>
        Immutable logs of all access,
        <br />
        decisions, and changes.
        <br />
        Compliance-ready.
      </>
    ),
    icon: "/customer-user-access/icons/privacy-audit.svg",
  },
  {
    title: "Verified Claims",
    description: (
      <>
        All security, compliance, and
        <br />
        certification claims backed by
        <br />
        evidence.
      </>
    ),
    icon: "/customer-user-access/icons/privacy-claims.svg",
  },
];

export default function PrivacyAssuranceSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-[60px]">
        <h2 className="text-center font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl lg:text-[52px] lg:leading-[59.8px]">
          Privacy, safety &amp; assurance
        </h2>

        <div className="grid w-full grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {assuranceItems.map((item) => (
            <article
              key={item.title}
              className="flex flex-col items-center text-center gap-3 rounded-xl border border-mystic bg-white-solid p-7 pb-12 transition-shadow duration-200 hover:shadow-sm"
            >
              <div className="flex w-full items-center justify-center pt-2.5 pb-0.5">
                <Image
                  src={item.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="size-8"
                />
              </div>

              <h3 className="font-manrope text-[15.2px] font-bold text-azure-9">
                {item.title}
              </h3>

              <p className="font-manrope text-[14.4px] font-normal leading-[25.2px] text-azure-47">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
