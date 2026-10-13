import Image from "next/image";

const delegationItems = [
  {
    title: "Explicit Mandate",
    description:
      "Agent has written authorization to act for specific resources and actions only",
    icon: "/customer-user-access/icons/delegation-mandate.svg",
  },
  {
    title: "Scope Bounded",
    description:
      "Authority limited to specific actions, time period, and purpose",
    icon: "/customer-user-access/icons/delegation-scope.svg",
  },
  {
    title: "Revocable Anytime",
    description:
      "Principal can withdraw delegation immediately without friction",
    icon: "/customer-user-access/icons/delegation-revocable.svg",
  },
  {
    title: "Auditable Decision",
    description:
      "Every action logged with mandate reference and decision outcome",
    icon: "/customer-user-access/icons/delegation-auditable.svg",
  },
];

export default function DelegatedAccessSection() {
  return (
    <section className="bg-grey-96 px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-[60px]">
        <h2 className="text-center font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl lg:text-[52px] lg:leading-[59.8px]">
          Delegated &amp; on-behalf-of access
        </h2>

        <div className="flex w-full flex-col gap-6 rounded-xl border border-grey-91 bg-white-solid p-6 sm:p-8">
          <p className="font-manrope text-base leading-7 text-[#475569]">
            <strong className="font-bold">
              A third party or agent must have bounded authority for the
              particular action.
            </strong>{" "}
            Identity or account affiliation alone is insufficient.
          </p>

          <div className="flex flex-col gap-4">
            {delegationItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-start gap-4 rounded-lg bg-[rgba(34,184,214,0.05)] p-4 sm:flex-row sm:items-center"
              >
                <div className="flex size-6 shrink-0 items-center justify-center">
                  <Image
                    src={item.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="size-6"
                  />
                </div>

                <div className="flex flex-col gap-0.5">
                  <h3 className="font-manrope text-base font-semibold leading-7 text-[#475569]">
                    {item.title}
                  </h3>
                  <p className="font-manrope text-[14.4px] font-normal leading-6 text-azure-47">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
