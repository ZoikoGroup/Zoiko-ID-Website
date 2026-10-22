import Image from "next/image";

const controls = [
  { label: "Search roles", icon: "/careers/desktop-icon-search.svg", pad: "p-[16px]", width: "w-[81.104px]", search: true },
  { label: "Team", icon: "/careers/desktop-icon-layers-2.svg", pad: "px-[18px] py-[16px]", width: "w-[35.19px]" },
  { label: "Location", icon: "/careers/desktop-icon-pin.svg", pad: "px-[15px] py-[16px]", width: "w-[57.102px]" },
  { label: "Employment type", icon: "/careers/desktop-icon-clock.svg", pad: "px-[14px] py-[16px]", width: "w-[113.131px]" },
];

export default function DesktopRoleListFiltersSection() {
  return (
    <div className="flex h-[58px] w-full flex-wrap items-start gap-[12px]" role="group" aria-label="Role filters (no published roles)">
      {controls.map((c) => (
        <div
          key={c.label}
          className={`flex h-[58px] items-center gap-[10px] rounded-[16px] border border-dashed border-[#dce3ee] bg-white ${c.pad}`}
        >
          <Image src={c.icon} width={16} height={16} alt="" className="shrink-0" />
          {c.search ? (
            <>
              <label htmlFor="role-search" className="sr-only">Search roles</label>
              <input
                id="role-search"
                type="search"
                disabled
                placeholder={c.label}
                className={`font-manrope ${c.width} bg-transparent text-[14px] font-normal leading-[23.1px] text-[#64748b] outline-none placeholder:text-[#64748b]`}
              />
            </>
          ) : (
            <>
              <label htmlFor={`role-filter-${c.label}`} className="sr-only">{c.label}</label>
              <select
                id={`role-filter-${c.label}`}
                disabled
                className={`font-manrope ${c.width} appearance-none bg-transparent text-[14px] font-normal leading-[23.1px] text-[#64748b] outline-none`}
              >
                <option>{c.label}</option>
              </select>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
