import Image from "next/image";

const statusItems = [
  {
    title: "Pending Invitation",
    description: "Invited but not yet accepted",
    icon: "/customer-user-access/icons/org-pending.svg",
  },
  {
    title: "Active Member",
    description: "Accepted and approved",
    icon: "/customer-user-access/icons/org-active.svg",
  },
  {
    title: "Revoked / Expired",
    description: "Access removed or time-limited ended",
    icon: "/customer-user-access/icons/org-revoked.svg",
  },
];

export default function OrganizationContextSection() {
  return (
    <section className="bg-grey-96 px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-[60px]">
        <h2 className="text-center font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl lg:text-[52px] lg:leading-[59.8px]">
          Organizations &amp; context switching
        </h2>

        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-[60px]">
          <div className="relative h-[320px] w-full overflow-hidden rounded-xl sm:h-[400px]">
            <Image
              src="/customer-user-access/organization-context.webp"
              alt="Organizations and context switching"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="font-dm-serif text-2xl font-normal leading-8 text-azure-9 sm:text-[22.4px]">
              Membership ≠ Permission
            </h3>

            <p className="font-manrope text-base font-normal leading-7 text-[#475569]">
              An individual may belong to one or more customer organizations,
              but membership alone is not blanket permission to access all
              resources.
            </p>

            <div className="flex flex-col gap-4 rounded-xl border border-grey-91 bg-white-solid p-6 sm:p-7">
              {statusItems.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center">
                    <Image
                      src={item.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="size-5"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-manrope text-[15.2px] font-semibold text-[#475569]">
                      {item.title}
                    </h4>
                    <p className="font-manrope text-[13.6px] font-normal leading-5 text-azure-47">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
