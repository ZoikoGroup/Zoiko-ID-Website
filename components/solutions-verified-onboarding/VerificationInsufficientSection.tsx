import { CrossCircleIcon } from "./icons";

interface InsufficientItem {
  titleLine1: string;
  titleLine2: string;
  description: string;
}

const items: InsufficientItem[] = [
  {
    titleLine1: "Verification ≠",
    titleLine2: "Authentication",
    description:
      "Proof that John Smith is a real person doesn't prove that the person logging in right now is John Smith. Authentication requires live identity check.",
  },
  {
    titleLine1: "Verification ≠",
    titleLine2: "Authorization",
    description:
      "Proof that a company exists doesn't grant its employees access to your resources. Authorization requires separate policy evaluation.",
  },
  {
    titleLine1: "Verification ≠",
    titleLine2: "Approval",
    description:
      "Successful verification is evidence, not permission. A person or team must review and explicitly approve access to your system.",
  },
];

export default function VerificationInsufficientSection() {
  return (
    <section className="bg-[#f3f6fa] px-6 py-14 sm:px-10 lg:bg-white lg:px-16 lg:py-24 xl:px-20">
      <div className="mx-auto max-w-[1240px]">
        {/* Mobile-only Exclamation Circle Icon */}
        <div className="mb-3.5 flex justify-center lg:hidden">
          <div className="flex size-9 items-center justify-center rounded-full bg-[#071426] text-white shadow-sm">
            <span className="font-dm-serif text-[20px] font-bold leading-none">!</span>
          </div>
        </div>

        {/* Section Heading */}
        <h2 className="mb-8 text-center font-dm-serif text-[28px] font-normal leading-[1.18] tracking-tight text-azure-9 sm:text-4xl lg:mb-16 lg:text-[44px]">
          <span className="lg:hidden">
            Verification alone
            <br />
            is insufficient
          </span>
          <span className="hidden lg:inline">Verification alone is insufficient</span>
        </h2>

        {/* 3 Distinction Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-7">
          {items.map((item) => (
            <div
              key={item.titleLine2}
              className="flex flex-col justify-start rounded-[18px] border border-slate-200/80 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-200 hover:border-slate-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] lg:rounded-2xl lg:p-8"
            >
              {/* Mobile-only Top Red Circle Icon */}
              <CrossCircleIcon className="mb-3.5 size-6 shrink-0 lg:hidden" />

              {/* Mobile-only Title with red cross symbol */}
              <div className="lg:hidden">
                <div className="flex items-center gap-1.5 font-manrope text-[15px] font-bold leading-snug text-azure-9">
                  <span className="text-sm font-black leading-none text-red-600">✕</span>
                  <span>{item.titleLine1}</span>
                </div>
                <div className="font-manrope text-[15px] font-bold leading-snug text-azure-9">
                  {item.titleLine2}
                </div>
              </div>

              {/* Desktop Title & Icon */}
              <div className="hidden items-start gap-3.5 lg:flex">
                <CrossCircleIcon className="mt-0.5 size-6 shrink-0" />
                <h3 className="font-manrope text-[15px] font-bold leading-snug text-azure-9 sm:text-[16px]">
                  {item.titleLine1}
                  <span className="block">{item.titleLine2}</span>
                </h3>
              </div>

              <p className="mt-3.5 font-manrope text-[13.5px] leading-relaxed text-azure-47 sm:text-[14px] lg:mt-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
