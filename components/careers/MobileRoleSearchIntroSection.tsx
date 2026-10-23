export default function MobileRoleSearchIntroSection() {
  return (
    <section id="role-search" className="lg:hidden px-[22px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[14.7px]">
        <div className="relative flex h-[19.8px] w-full items-center">
          <span className="absolute left-0 top-1/2 h-[2px] w-[36px] -translate-y-1/2 bg-[#22b8d6]" />
          <p className="ml-[48px] font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[2.16px] text-[#1d4ed8] whitespace-nowrap">
            Role search and filters
          </p>
        </div>
        <div className="w-full pb-[0.83px] pt-[2.3px]">
          <h2 className="font-dm-serif text-[32px] font-normal leading-[35.84px] tracking-[-0.16px] text-[#0b1b33]">
            How the role list will work
          </h2>
        </div>
        <div className="w-full max-w-[700px]">
          <p className="font-manrope text-[18px] font-normal leading-[29.7px] text-[#5b6b82]">
            Filters appear only when there are enough<br />
            published roles to make them useful. The<br />
            controls below show their no-roles state.
          </p>
        </div>
      </div>
    </section>
  );
}
