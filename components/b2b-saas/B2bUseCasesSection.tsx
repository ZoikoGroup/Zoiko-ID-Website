import Image from "next/image";

const useCases = [
  {
    title: "Customer Org Access",
    description: (
      <>
        Enterprise customers need admins
        <br />
        and team members to access their
        <br />
        org's data and resources.
        <br />
        Controlled invitation and role-
        <br />
        based access.
      </>
    ),
    image: "/b2b-saas/usecase-customer-org.webp",
    icon: "/b2b-saas/icons/usecase-icon-1.svg",
  },
  {
    title: "B2B Admin Delegation",
    description: (
      <>
        Partner or manager needs to
        <br />
        manage a customer's account on
        <br />
        their behalf. Scoped, auditable,
        <br />
        time-limited authority.
      </>
    ),
    image: "/b2b-saas/usecase-b2b-delegation.webp",
    icon: "/b2b-saas/icons/usecase-icon-2.svg",
  },
  {
    title: "Enterprise Federation",
    description: (
      <>
        Customer's Okta or Azure AD drives
        <br />
        authentication. Zoiko iD adds
        <br />
        organization context and policy
        <br />
        enforcement.
      </>
    ),
    image: "/b2b-saas/usecase-enterprise-federation.webp",
    icon: "/b2b-saas/icons/usecase-icon-3.svg",
  },
];

export default function B2bUseCasesSection() {
  return (
    <section className="bg-grey-96 px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-[60px]">
        <h2 className="text-center font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl lg:text-[52px] lg:leading-[59.8px]">
          Common B2B scenarios
        </h2>

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          {useCases.map((item) => (
            <article
              key={item.title}
              className="flex flex-col overflow-hidden rounded-xl border border-mystic bg-white-solid shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <div className="relative h-[220px] w-full shrink-0 overflow-hidden bg-grey-91">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-8">
                <div className="mb-5 flex size-16 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#22B8D6_0%,#2563EB_100%)]">
                  <Image
                    src={item.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="size-8"
                  />
                </div>

                <h3 className="mb-3 font-dm-serif text-[19.2px] font-normal leading-tight text-azure-9">
                  {item.title}
                </h3>

                <p className="font-manrope text-base font-normal leading-7 text-azure-47">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
