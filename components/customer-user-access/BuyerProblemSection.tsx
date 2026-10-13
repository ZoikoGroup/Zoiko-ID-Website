import Image from "next/image";

const cards = [
  {
    title: "Consumer Sign-In",
    description:
      "Individual customers create accounts and sign in. You control authentication method and session lifecycle.",
    image: "/customer-user-access/consumer-signin.webp",
  },
  {
    title: "Customer Org Access",
    description:
      "Members of customer organizations access org-specific resources. Membership is not automatic permission.",
    image: "/customer-user-access/customer-org-access.webp",
  },
  {
    title: "Delegated Third- Party",
    description:
      "Partners or agents act on behalf of a customer with scoped, bounded authority. Explicit mandate required.",
    image: "/customer-user-access/delegated-third-party.webp",
  },
  {
    title: "Machine-Assisted Action",
    description:
      "AI agents or workflows perform actions on behalf of customers. Scoped purpose and revocation required.",
    image: "/customer-user-access/machine-assisted-action.webp",
  },
];

export default function BuyerProblemSection() {
  return (
    <section
      id="buyer-problems"
      className="bg-[#F8FAFC] px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px]"
    >
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-[60px]">
        <h2 className="text-center font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl lg:text-[52px] lg:leading-[59.8px]">
          Choose what you need to govern
        </h2>

        <div className="grid w-full grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex min-h-[495px] flex-col overflow-hidden rounded-xl border border-grey-91 bg-white-solid transition-shadow duration-200 hover:shadow-md"
            >
              <div className="relative h-[220px] w-full shrink-0 overflow-hidden bg-grey-91">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-8">
                <h3 className="pb-3 font-dm-serif text-[19.2px] font-normal leading-6 text-azure-9">
                  {card.title}
                </h3>
                <p className="font-manrope text-base font-normal leading-7 text-azure-47">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
