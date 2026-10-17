import Image from "next/image";

export default function SecurityAuthnVsAuthzSection() {
  return (
    <section className="w-full bg-[#F1F5F9] py-[105px] px-6 sm:px-12 lg:px-20 xl:px-[160px]">
      <div className="max-w-[1120px] mx-auto flex flex-col gap-[60px]">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.13] text-[#0B1B33]">
            Signing in does not authorize a sensitive<br className="hidden sm:inline" /> action
          </h2>
          <div className="max-w-[780px] pt-[2px]">
            <p className="font-manrope text-[16px] leading-[25.6px] text-[#64748B]">
              Two decisions for the same signed-in person. The policy engine implementation is not verified here; the{"\n"}examples show the decision order only.
            </p>
          </div>
        </div>

        {/* 2 Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 pt-[24.5px]">
          {/* Card 1: Authenticated, not authorized */}
          <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[18px] p-[30px] pb-10 flex flex-col gap-[14px] shadow-sm">
            {/* Image */}
            <div className="relative w-full h-[160px] rounded-[12px] overflow-hidden">
              <Image
                src="/security/img-87798d5fb02b77aac7383607c86a88535df322e0.png"
                alt="Person at a laptop"
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <div className="pt-0.5 pb-2">
              <h3 className="font-dm-serif text-[24px] leading-[30px] text-[#0B1B33]">
                Authenticated, not authorized
              </h3>
            </div>

            {/* Result Badge */}
            <div className="self-start">
              <span className="inline-flex items-center px-3 py-1.5 rounded-[8px] bg-[#FEE2E2] font-manrope font-extrabold text-[13px] leading-[20.8px] text-[#991B1B]">
                Result: action not permitted
              </span>
            </div>

            {/* Ordered List */}
            <ol className="list-decimal pl-5 pt-2.5 flex flex-col gap-2 font-manrope text-[15px] leading-[24px] text-[#64748B]">
              <li>
                <span>The actor is verified.</span>
              </li>
              <li>
                <span>No mandate covers this resource.</span>
              </li>
              <li>
                <span>The request is denied and the reason is recorded.</span>
              </li>
            </ol>
          </div>

          {/* Card 2: Authenticated and authorized */}
          <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[18px] p-[30px] flex flex-col gap-[11px] shadow-sm">
            {/* Image */}
            <div className="relative w-full h-[160px] rounded-[12px] overflow-hidden">
              <Image
                src="/security/img-a88f7163a00725eda46e67d7abf7c79f9e58286b.png"
                alt="Team reviewing a decision"
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <div className="pt-1 pb-2">
              <h3 className="font-dm-serif text-[24px] leading-[30px] text-[#0B1B33]">
                Authenticated and authorized
              </h3>
            </div>

            {/* Result Badge */}
            <div className="self-start">
              <span className="inline-flex items-center px-3 py-1.5 rounded-[8px] bg-[#DCFCE7] font-manrope font-extrabold text-[13px] leading-[20.8px] text-[#166534]">
                Result: permitted, within scope
              </span>
            </div>

            {/* Ordered List */}
            <ol className="list-decimal pl-5 pt-3 flex flex-col gap-2 font-manrope text-[15px] leading-[24px] text-[#64748B]">
              <li>
                <span>The actor is verified.</span>
              </li>
              <li>
                <span>A current mandate covers this action, resource and purpose.</span>
              </li>
              <li>
                <span>Policy and context are checked again at decision time.</span>
              </li>
            </ol>

            {/* Qualifier Note */}
            <div className="pt-4">
              <p className="font-manrope text-[13px] leading-[20.8px] text-[#64748B]">
                Qualifier: the specific policy engine and its behavior are not claimed here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
