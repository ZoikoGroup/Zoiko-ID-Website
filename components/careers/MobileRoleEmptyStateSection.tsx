import Image from "next/image";

export default function MobileRoleEmptyStateSection() {
  return (
    <section className="lg:hidden px-[22px] pb-[60px] pt-[14.7px]">
      <div className="relative mx-auto h-[64.79px] w-full max-w-[560px]">
        <div className="absolute left-[calc(50%-167.45px)] top-[calc(50%+7.65px)] h-[18px] w-[11.109px] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-[19.14%_0]">
            <Image src="/careers/mobile-icon-empty.svg" alt="" fill className="object-contain" />
          </div>
        </div>
        <p
          role="status"
          className="absolute left-[calc(50%+10.55px)] top-[calc(50%+6.77px)] -translate-x-1/2 -translate-y-1/2 text-center font-manrope text-[15px] font-normal leading-[24.75px] text-[#5b6b82] whitespace-nowrap"
        >
          No published roles to show. Clearing filters is not<br />
          needed while the list is empty.
        </p>
      </div>
    </section>
  );
}
