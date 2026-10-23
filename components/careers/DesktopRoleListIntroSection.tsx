export default function DesktopRoleListIntroSection() {
  return (
    <div className="flex w-full flex-col gap-[15px]">
      <div className="pt-[2.2px]">
        <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] tracking-[-0.26px] text-[#0b1b33]">
          How the role list will work
        </h2>
      </div>
      <div className="max-w-[700px] pb-[0.535px]">
        <p className="font-manrope text-[18px] font-normal leading-[29.7px] text-[#5b6b82] xl:whitespace-nowrap">
          Filters appear only when there are enough published roles to make them useful. The <br className="max-xl:hidden" />
          controls below show their no-roles state.
        </p>
      </div>
    </div>
  );
}
