import Image from "next/image";

const useCases = [
  {
    image: "/solutions-ai-solutions/usecase-financial.webp",
    title: "Financial Processing",
    description:
      "AI bot approves invoices up to $10k, flags large amounts. Mandate defines limits. Every approval logged. Sponsor can revoke if bot goes rogue.",
  },
  {
    image: "/solutions-ai-solutions/usecase-support.webp",
    title: "Customer Support",
    description:
      "AI agent resolves tickets, issues refunds up to $500. Authorized by Support Manager. Escalates complex cases. Full audit trail for disputes.",
  },
  {
    image: "/solutions-ai-solutions/usecase-data.webp",
    title: "Data Operations",
    description:
      "AI pipeline exports data from warehouse to analytics platform. Mandate limits which datasets, refresh frequency, and time windows.",
  },
];

export default function UseCasesSection() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-[160px] lg:py-[105px]">
      <div className="mx-auto w-full max-w-[1120px]">
        <h2 className="mb-14 text-center font-dm-serif text-3xl font-normal leading-[1.2] text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[71.3px]">
          AI-powered use cases
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="flex flex-col overflow-hidden rounded-[12px] border border-[#E2E8F0] bg-white shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="relative h-[220px] w-full overflow-hidden bg-slate-100">
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  fill
                  sizes="(min-width: 1024px) 350px, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-8">
                <h3 className="mb-4 font-dm-serif text-[19.2px] leading-[26.3px] text-[#071426]">
                  {useCase.title}
                </h3>

                <p className="font-manrope text-[16px] leading-[28px] text-[#64748B]">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
