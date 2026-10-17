import Image from "next/image";

export default function SecurityIntegrationBoundariesSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-[105px] px-6 sm:px-12 lg:px-20 xl:px-[160px]">
      <div className="max-w-[1120px] mx-auto flex flex-col gap-[60px]">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.13] text-[#0B1B33]">
            Designed to complement your existing<br className="hidden sm:inline" /> systems
          </h2>
          <div className="max-w-[860px] pt-[2px]">
            <p className="font-manrope text-[16px] leading-[25.6px] text-[#64748B]">
              Zoiko iD is designed to complement existing identity providers, applications and policies through governed{"\n"}integrations. Each system stays responsible for its own enforcement.
            </p>
          </div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col gap-10">
          {/* Whiteboard Team Image */}
          <div className="relative w-full h-[320px] sm:h-[437px] rounded-[20px] overflow-hidden shadow-sm">
            <Image
              src="/security/img-5e9b930be5994100ff4c3ca5dad0a9ece167453f.png"
              alt="Team planning at a whiteboard"
              fill
              className="object-cover"
            />
          </div>

          {/* 4 Trust Boundaries Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-[20px] border border-[#E2E8F0] overflow-hidden shadow-sm divide-y md:divide-y-0 md:divide-x divide-[#E2E8F0]">
            {/* Column 1: Identity Provider */}
            <div className="bg-[#FFFFFF] p-[30px_24px] flex flex-col justify-between min-h-[300px] gap-6">
              <div className="flex flex-col gap-[6px]">
                <div className="w-[52px] h-[52px] rounded-[14px] bg-[#E0F2FE] flex items-center justify-center mb-2">
                  <Image
                    src="/security/icon-411_20971.svg"
                    alt=""
                    width={26}
                    height={26}
                    className="w-[26px] h-[26px]"
                  />
                </div>
                <h4 className="font-manrope font-bold text-[17px] leading-[27.2px] text-[#0B1B33]">
                  Identity provider
                </h4>
                <p className="font-manrope font-medium text-[15px] leading-[24px] text-[#64748B] whitespace-pre-line">
                  Authenticates the{"\n"}person or service.
                </p>
              </div>
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F1F5F9] font-manrope font-extrabold text-[12px] leading-[19.2px] text-[#0B1B33]">
                  Your IdP
                </span>
              </div>
            </div>

            {/* Column 2: Zoiko iD authority (Dark Pearl Highlight) */}
            <div className="bg-[#071426] p-[30px_24px] flex flex-col justify-between min-h-[300px] gap-6">
              <div className="flex flex-col gap-[6px]">
                <div className="w-[52px] h-[52px] rounded-[14px] bg-[rgba(34,184,214,0.18)] flex items-center justify-center mb-2">
                  <Image
                    src="/security/icon-411_20983.svg"
                    alt=""
                    width={26}
                    height={26}
                    className="w-[26px] h-[26px]"
                  />
                </div>
                <h4 className="font-manrope font-bold text-[17px] leading-[27.2px] text-[#FFFFFF]">
                  Zoiko iD authority
                </h4>
                <p className="font-manrope font-medium text-[15px] leading-[24px] text-[#94A3B8] whitespace-pre-line">
                  Evaluates proposed{"\n"}authority and policy{"\n"}context.
                </p>
              </div>
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/12 font-manrope font-extrabold text-[12px] leading-[19.2px] text-[#FFFFFF]">
                  Proposed runtime
                </span>
              </div>
            </div>

            {/* Column 3: Relying application */}
            <div className="bg-[#FFFFFF] p-[30px_24px] flex flex-col justify-between min-h-[300px] gap-6">
              <div className="flex flex-col gap-[6px]">
                <div className="w-[52px] h-[52px] rounded-[14px] bg-[#E0F2FE] flex items-center justify-center mb-2">
                  <Image
                    src="/security/icon-411_20995.svg"
                    alt=""
                    width={26}
                    height={26}
                    className="w-[26px] h-[26px]"
                  />
                </div>
                <h4 className="font-manrope font-bold text-[17px] leading-[27.2px] text-[#0B1B33]">
                  Relying{"\n"}application
                </h4>
                <p className="font-manrope font-medium text-[15px] leading-[24px] text-[#64748B] whitespace-pre-line">
                  Enforces its own{"\n"}decision before acting.
                </p>
              </div>
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F1F5F9] font-manrope font-extrabold text-[12px] leading-[19.2px] text-[#0B1B33]">
                  Your application
                </span>
              </div>
            </div>

            {/* Column 4: Evidence owner */}
            <div className="bg-[#FFFFFF] p-[30px_24px] flex flex-col justify-between min-h-[300px] gap-6">
              <div className="flex flex-col gap-[6px]">
                <div className="w-[52px] h-[52px] rounded-[14px] bg-[#E0F2FE] flex items-center justify-center mb-2">
                  <Image
                    src="/security/icon-411_21007.svg"
                    alt=""
                    width={26}
                    height={26}
                    className="w-[26px] h-[26px]"
                  />
                </div>
                <h4 className="font-manrope font-bold text-[17px] leading-[27.2px] text-[#0B1B33]">
                  Evidence owner
                </h4>
                <p className="font-manrope font-medium text-[15px] leading-[24px] text-[#64748B] whitespace-pre-line">
                  Holds the authoritative{"\n"}decision record.
                </p>
              </div>
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F1F5F9] font-manrope font-extrabold text-[12px] leading-[19.2px] text-[#0B1B33]">
                  Owning service
                </span>
              </div>
            </div>
          </div>

          {/* Text Version of the Boundary Diagram Box */}
          <div className="p-5 sm:p-6 rounded-[12px] bg-[#F1F5F9] flex flex-col gap-3">
            <h5 className="font-manrope font-bold text-[15px] leading-[24px] text-[#0B1B33]">
              Text version of the boundary diagram
            </h5>
            <ol className="list-decimal pl-5 flex flex-col gap-1.5 font-manrope text-[15px] leading-[24px] text-[#64748B]">
              <li>The identity provider authenticates the actor.</li>
              <li>The Zoiko iD authority layer evaluates proposed authority and policy context.</li>
              <li>The relying application enforces the decision in its own runtime.</li>
              <li>The evidence owner holds the authoritative record.</li>
            </ol>
            <p className="font-manrope text-[13px] leading-[20.8px] text-[#64748B] pt-1">
              Exact runtime contract for Zoiko iD requires engineering sign-off. Integration status is checked against the capability registry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
