import Image from "next/image";

const rows = [
  {
    owner: "Identity provider",
    icon: "/enterprise/mobile-icon-authentication.svg",
    title: "Authentication",
    role: "Alongside, as an overlay",
    not: "Automatic compatibility with every vendor",
  },
  {
    owner: "Applications",
    icon: "/enterprise/mobile-icon-business-actions.svg",
    title: "Business actions",
    role: "Requests decisions and enforces them",
    not: "Replacement of application logic",
  },
  {
    owner: "Policy decision",
    icon: "/enterprise/mobile-icon-rule-evaluation.svg",
    title: "Rule evaluation",
    role: "Bounded decision inputs and context",
    not: "Universal production engine guarantees",
  },
  {
    owner: "Evidence owner",
    icon: "/enterprise/mobile-icon-authoritative-record.svg",
    title: "Authoritative record",
    role: "Provenance and decision context",
    not: "Immutable or legally sufficient logs",
  },
];

export default function MobileArchitecturalCoexistenceSection() {
  return (
    <section
      id="existing-systems"
      className="flex w-full flex-col bg-[#f1f5f9] px-[22px] py-[60px] lg:hidden"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[13.4px]">
        <div className="flex h-[19.19px] w-full items-center gap-[10px]">
          <span aria-hidden="true" className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[#2563eb]">
            Architectural coexistence
          </p>
        </div>
        <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
          Your existing systems stay authoritative for what they own
        </h2>
        <p className="max-w-[760px] font-manrope text-[16px] leading-[25.6px] text-[#64748b]">
          Existing identity providers, directories and applications continue to own the functions
          they already run. Zoiko iD is designed to sit alongside them as an overlay, with explicit
          boundaries.
        </p>
        <div className="relative w-full overflow-clip rounded-[18px] border border-solid border-[#e2e8f0] pt-[26.59px]">
          {rows.map((r, i) => (
            <div
              key={r.owner}
              className={`bg-white ${i < rows.length - 1 ? "border-b border-solid border-[#e2e8f0]" : ""}`}
            >
              <div className="border-b border-solid border-[#e2e8f0] bg-[#f1f5f9] px-[22px] pb-[21.89px] pt-[21.5px]">
                <p className="font-manrope text-[14px] font-extrabold leading-[22.4px] text-[#2563eb]">
                  {r.owner}
                </p>
              </div>
              <div className="flex items-center gap-[12px] border-b border-solid border-[#e2e8f0] p-[22px]">
                <Image src={r.icon} width={22} height={22} alt="" className="shrink-0" />
                <p className="font-manrope text-[15px] font-extrabold leading-[24px] text-[#2563eb]">
                  {r.title}
                </p>
              </div>
              <div className="border-b border-solid border-[#e2e8f0] bg-[#f0fdfa] px-[22px] pb-[21.89px] pt-[21.5px]">
                <p className="font-manrope text-[14px] leading-[22.4px] text-[#334155]">{r.role}</p>
              </div>
              <div className="pt-[8px]">
                <div className="border-b border-solid border-[#e2e8f0] p-[22px]">
                  <p className="font-manrope text-[13px] leading-[20.8px] text-[#991b1b]">{r.not}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="pt-[7.99px] font-manrope text-[14px] leading-[22.4px] text-[#64748b]">
          Support for a specific identity provider, protocol or application is confirmed for your
          environment. No universal compatibility is claimed.
        </p>
      </div>
    </section>
  );
}
