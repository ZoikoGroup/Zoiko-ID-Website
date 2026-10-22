import Image from "next/image";

const pill =
  "h-[47.09px] w-full rounded-[999px] border border-dashed border-[#dce3ee] bg-white pl-[44px] pr-[12px] font-manrope text-[14px] font-normal leading-[23.1px] text-[#94a3b8] placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8] disabled:cursor-default";

function Icon({ src }: { src: string }) {
  return (
    <span className="pointer-events-none absolute left-[18px] top-1/2 size-[16px] -translate-y-1/2">
      <Image src={src} width={16} height={16} alt="" />
    </span>
  );
}

const selects = [
  { label: "Team", icon: "/careers/mobile-icon-layers-1.svg", w: "w-[98.23px]" },
  { label: "Location", icon: "/careers/mobile-icon-pin.svg", w: "w-[116.94px]" },
  { label: "Employment type", icon: "/careers/mobile-icon-clock.svg", w: "w-[172.17px]" },
];

export default function MobileRoleFiltersSection() {
  return (
    <section className="lg:hidden px-[22px] pt-[14.7px]">
      <div className="mx-auto w-full max-w-[560px]">
        <form
          role="search"
          aria-label="Role search and filters"
          className="flex flex-wrap gap-[12px] pt-[25.3px]"
        >
          <label className="relative block w-[142.59px]">
            <span className="sr-only">Search roles</span>
            <Icon src="/careers/mobile-icon-search.svg" />
            <input type="search" disabled placeholder="Search roles" className={pill} />
          </label>
          {selects.map((s) => (
            <label key={s.label} className={`relative block ${s.w}`}>
              <span className="sr-only">{s.label}</span>
              <Icon src={s.icon} />
              <select disabled defaultValue="" className={`${pill} appearance-none`}>
                <option value="">{s.label}</option>
              </select>
            </label>
          ))}
        </form>
      </div>
    </section>
  );
}
