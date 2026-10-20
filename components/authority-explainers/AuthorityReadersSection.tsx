import Image from "next/image";

interface ReaderCard {
  role: string;
  question: string;
  badge: string;
  image: string;
}

const readers: ReaderCard[] = [
  {
    role: "Enterprise architect",
    question: "How does delegated authority differ from authentication and authorization?",
    badge: "Plain-English chain",
    image: "/authority-explainers/reader-team-planning.webp",
  },
  {
    role: "IAM or security lead",
    question: "How is privilege bounded, and how is it withdrawn?",
    badge: "Expiry and revocation",
    image: "/authority-explainers/reader-professional-portrait.webp",
  },
  {
    role: "AI systems architect",
    question: "Can an agent act for a person or an organization?",
    badge: "Sponsor and limits",
    image: "/authority-explainers/reader-ai-architect.webp",
  },
  {
    role: "Developer",
    question: "How do I implement the pattern?",
    badge: "Routes to documentation",
    image: "/authority-explainers/reader-developer-code.webp",
  },
  {
    role: "Risk, privacy or audit",
    question: "What can be evidenced, and by whom?",
    badge: "Provenance and limits",
    image: "/authority-explainers/reader-risk-audit.webp",
  },
  {
    role: "Economic buyer",
    question: "Why does this matter to the business?",
    badge: "Use-case context",
    image: "/authority-explainers/reader-economic-buyer.webp",
  },
];

export default function AuthorityReadersSection() {
  return (
    <section id="readers-section" className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-14 lg:gap-16">
        {/* Heading */}
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#0B1B33] sm:text-5xl lg:text-[52px] lg:leading-[51.92px]">
            Six readers, six questions
          </h2>
          <p className="max-w-[780px] font-manrope text-base font-normal leading-[25.6px] text-[#64748B]">
            Each reader arrives with a different decision in mind. The explainers are written so each reader can find their answer without reading everything.
          </p>
        </div>

        {/* 6 Reader Cards Grid */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {readers.map((item) => (
            <div
              key={item.role}
              className="flex h-[322px] flex-col overflow-hidden rounded-[18px] border border-[#E2E8F0] bg-white-solid shadow-sm transition-all duration-200 hover:shadow-md"
            >
              {/* Card Image */}
              <div className="relative h-[150px] w-full shrink-0 overflow-hidden bg-[#F1F5F9]">
                <Image
                  src={item.image}
                  alt={item.role}
                  fill
                  sizes="(min-width: 1024px) 357px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col justify-between p-[22px]">
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-manrope text-[17px] font-bold leading-[27.2px] text-[#0B1B33]">
                    {item.role}
                  </h3>
                  <p className="font-manrope text-sm font-normal leading-[22.4px] text-[#64748B]">
                    {item.question}
                  </p>
                </div>

                <div className="self-start">
                  <span className="inline-block rounded-lg bg-[#EDE9FE] px-2.5 py-1 font-manrope text-xs font-extrabold leading-[19.2px] text-[#5B21B6]">
                    {item.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
