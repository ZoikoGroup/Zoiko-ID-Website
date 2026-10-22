import Image from "next/image";

const rows = [
  {
    layer: "Identity provider",
    icon: "/enterprise/desktop-icon-authentication.svg",
    owns: "Authentication",
    role: "Alongside, as an overlay",
    notClaimed: "Automatic compatibility with every vendor",
  },
  {
    layer: "Applications",
    icon: "/enterprise/desktop-icon-business-actions.svg",
    owns: "Business actions",
    role: "Requests decisions and enforces them",
    notClaimed: "Replacement of application logic",
  },
  {
    layer: "Policy decision",
    icon: "/enterprise/desktop-icon-rule-evaluation.svg",
    owns: "Rule evaluation",
    role: "Bounded decision inputs and context",
    notClaimed: "Universal production engine guarantees",
  },
  {
    layer: "Evidence owner",
    icon: "/enterprise/desktop-icon-authoritative-record.svg",
    owns: "Authoritative record",
    role: "Provenance and decision context",
    notClaimed: "Immutable or legally sufficient logs",
  },
];

const cols = "grid grid-cols-[240px_307px_308px_minmax(0,1fr)]";
const headBg = {
  backgroundImage:
    "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(11, 27, 49) 0%, rgb(11, 27, 49) 100%)",
};

export default function DesktopExistingSystemsSection() {
  return (
    <section
      id="existing-systems"
      className="hidden lg:flex w-full flex-col gap-[60px] bg-[#f1f5f9] px-[160px] py-[105px]"
    >
      <div className="flex flex-col gap-[13px]">
        <h2 className="font-dm-serif font-normal text-[52px] leading-[57.9px] text-[#07111f] max-w-[840px]">
          Your existing systems stay authoritative for what they own
        </h2>
        <p className="font-manrope text-[16px] leading-[25.6px] text-[#64748b] max-w-[760px]">
          Existing identity providers, directories and applications continue to own the functions they already run. Zoiko iD is designed to sit alongside them as an overlay, with explicit boundaries.
        </p>
      </div>

      <div role="table" className="overflow-clip rounded-[18px] border border-solid border-[#e2e8f0]">
        <div role="row" className={`${cols} bg-[#f1f5f9]`}>
          {["Layer", "Owns", "Zoiko iD role", "Not claimed"].map((h, i) => (
            <div
              key={h}
              role="columnheader"
              style={headBg}
              className={`px-[22px] py-[14px] font-manrope font-extrabold text-[13px] leading-[20.8px] tracking-[0.78px] uppercase text-white ${i < 3 ? "border-r border-solid border-[#e2e8f0]" : ""}`}
            >
              {h}
            </div>
          ))}
        </div>
        {rows.map((r, idx) => {
          const last = idx === rows.length - 1;
          return (
            <div
              key={r.layer}
              role="row"
              className={`${cols} min-h-[73px] bg-white ${last ? "" : "border-b border-solid border-[#e2e8f0]"}`}
            >
              <div role="rowheader" className="flex items-center border-r border-solid border-[#e2e8f0] bg-white px-[22px] py-[21.5px] font-manrope font-extrabold text-[14px] leading-[22.4px] text-[#07111f]">
                {r.layer}
              </div>
              <div role="cell" className="flex items-center gap-[12px] border-r border-solid border-[#e2e8f0] px-[22px] py-[21.5px]">
                <Image src={r.icon} width={22} height={22} alt="" className="shrink-0" />
                <span className="font-manrope font-extrabold text-[15px] leading-[24px] text-[#07111f]">{r.owns}</span>
              </div>
              <div role="cell" className="flex items-center border-r border-solid border-[#e2e8f0] bg-[#f0fdfa] px-[22px] py-[21.5px] font-manrope text-[14px] leading-[22.4px] text-[#334155]">
                {r.role}
              </div>
              <div role="cell" className="flex items-center p-[22px] font-manrope text-[13px] leading-[20.8px] text-[#991b1b]">
                {r.notClaimed}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
