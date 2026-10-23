import Image from "next/image";

export default function DesktopRoleListEmptyStateSection() {
  return (
    <div className="flex h-[39.95px] w-full items-center justify-center gap-[2px] pt-[14px]">
      <Image src="/careers/desktop-icon-empty.svg" width={18} height={18} alt="" className="shrink-0" />
      <p className="w-[543.174px] max-w-full text-center font-manrope text-[15px] font-normal leading-[24.75px] text-[#5b6b82]">
        No published roles to show. Clearing filters is not needed while the list is empty.
      </p>
    </div>
  );
}
