import Image from "next/image";
import Link from "next/link";

export default function SandboxAvailabilityStatusBar() {
  return (
    <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-6 rounded-[14px] border border-[#E2E8F0] bg-white-solid p-[26px_30px] shadow-[0px_10px_30px_0px_rgba(7,20,38,0.06)] lg:flex-row lg:items-center lg:justify-between lg:gap-[24px]">
      {/* Left: Icon Badge */}
      <div className="flex shrink-0 items-center justify-center">
        <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[14px] bg-[#F1F5F9]">
          <Image
            src="/sandbox/icons/icon_334_3056.svg"
            alt=""
            width={30}
            height={30}
          />
        </div>
      </div>

      {/* Middle: Text Container */}
      <div className="flex flex-1 flex-col items-start gap-1">
        <span className="font-manrope text-[15.2px] font-extrabold uppercase leading-[25px] tracking-[0.12em] text-[#22B8D6]">
          Availability
        </span>
        <h3 className="font-dm-serif text-[24px] font-normal leading-[39.6px] text-[#071426]">
          Sandbox availability has not been confirmed.
        </h3>
        <p className="font-manrope text-[15.2px] font-normal leading-[25px] text-[#64748B]">
          Use the documentation to explore intended patterns. If you need an evaluation
          <br className="hidden md:inline" />
          environment, ask about options.
        </p>
      </div>

      {/* Right: Actions */}
      <div className="flex flex-wrap items-center gap-[10px]">
        <Link
          href="#quickstarts"
          className="inline-flex h-[55px] items-center gap-[10px] rounded-[8px] border border-[#2563EB] bg-white-solid px-[24px] py-[14px] font-manrope text-[15.2px] font-bold leading-[25px] text-[#2563EB] transition-colors duration-200 hover:bg-blue-50"
        >
          <Image
            src="/sandbox/icons/icon_334_3069.svg"
            alt=""
            width={15.19}
            height={15.19}
          />
          Read the Quickstarts
        </Link>
        <Link
          href="#contact"
          className="inline-flex h-[55px] items-center gap-[10px] rounded-[8px] border border-[#2563EB] bg-white-solid px-[24px] py-[14px] font-manrope text-[15.2px] font-bold leading-[25px] text-[#2563EB] transition-colors duration-200 hover:bg-blue-50"
        >
          <Image
            src="/sandbox/icons/icon_334_3074.svg"
            alt=""
            width={15.19}
            height={15.19}
          />
          Ask about options
        </Link>
      </div>
    </div>
  );
}
