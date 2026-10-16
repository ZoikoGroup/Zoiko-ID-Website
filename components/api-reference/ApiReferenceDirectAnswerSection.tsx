import Image from "next/image";

interface DirectAnswerCard {
  icon: string;
  title: string;
  description: string;
  extraPaddingBottom?: string;
}

const cards: DirectAnswerCard[] = [
  {
    icon: "/api-reference/icon-320_42.svg",
    title: "Endpoint\nCatalog",
    description: "All REST, gRPC, webhook\nendpoints with method, \npath, and version",
  },
  {
    icon: "/api-reference/icon-320_51.svg",
    title: "Auth &\nAuthorization",
    description: "OAuth 2.0, OIDC, mTLS, \nJWT requirements per\nendpoint",
    extraPaddingBottom: "lg:pb-[53.21px]",
  },
  {
    icon: "/api-reference/icon-320_60.svg",
    title: "Schemas &\nExamples",
    description: "Request/response payloads with tested, synthetic\nexamples",
    extraPaddingBottom: "lg:pb-[53.21px]",
  },
  {
    icon: "/api-reference/icon-320_69.svg",
    title: "Error\nCodes",
    description: "HTTP status codes and \nwhat they mean. Recovery\nguidance.",
    extraPaddingBottom: "lg:pb-[51px]",
  },
];

export default function ApiReferenceDirectAnswerSection() {
  return (
    <section className="bg-white-solid px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-[19.4px]">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-3xl font-normal text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[71.3px]">
          What you&apos;ll find here
        </h2>

        {/* Section Subtitle */}
        <p className="max-w-[860px] text-center font-manrope text-base font-normal leading-7 text-[#64748B] sm:text-[16.8px] sm:leading-[29.4px]">
          Complete, versioned, source-governed API documentation. Every endpoint includes authentication
          <br className="hidden sm:inline" />
          {" "}requirements, authorization models, request/response schemas, error handling, rate limits, and tested
          <br className="hidden sm:inline" />
          {" "}examples.
        </p>

        {/* 4 Cards */}
        <div className="grid w-full grid-cols-1 gap-7 pt-[20.6px] sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center rounded-[12px] border border-[#E2E8F0] bg-white-solid p-7 text-center shadow-xs transition-shadow duration-200 hover:shadow-md ${
                card.extraPaddingBottom || ""
              }`}
            >
              <div className="flex items-center justify-center pb-3 pt-[3px]">
                <Image
                  src={card.icon}
                  alt=""
                  width={40}
                  height={40}
                />
              </div>

              <h3 className="whitespace-pre-line font-manrope text-[16.8px] font-bold leading-[22.95px] text-[#071426]">
                {card.title}
              </h3>

              <p className="whitespace-pre-line pt-3 font-manrope text-[14.4px] font-normal leading-[25.2px] text-[#64748B]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
