import Image from "next/image";

const STEPS = [
  { title: "Discover or establish", desc: "The actor is registered", icon: "lifecycle-discover" },
  { title: "Authenticate", desc: "Presented identity is checked", icon: "lifecycle-authenticate" },
  { title: "Evaluate policy", desc: "Rules applied to the request", icon: "lifecycle-evaluate-policy" },
  { title: "Use allowed scope", desc: "Only in-bounds actions", icon: "lifecycle-use-scope" },
  { title: "Monitor context", desc: "Changes are noticed", icon: "lifecycle-monitor" },
  { title: "Disable and retire", desc: "Access is ended", icon: "lifecycle-retire" },
];

export default function LifecycleSection() {
  return (
    <section
      id="lifecycle"
      className="w-full bg-white py-[105px] px-[160px]"
    >
      <div className="mx-auto flex w-full flex-col gap-[60px]">
        <div className="flex flex-col gap-[12px]">
          <h2 className="font-dm-serif text-[52px] font-normal leading-[57.9px] text-[#07111f]">
            From discovery to retirement
          </h2>
          <p className="max-w-[820px] pt-[2px] font-manrope text-[16px] font-normal leading-[25.6px] text-[#64748b]">
            A conceptual sequence of text steps. No credential rotation period or expiry default is implied.
          </p>
        </div>
        <div className="flex flex-col gap-[12px]">
          <div className="relative pb-[24px] pt-[28px]">
            <div
              aria-hidden="true"
              className="absolute left-[8%] right-[8%] top-[53.5px] h-[3px] bg-gradient-to-r from-[#22b8d6] to-[#2563eb]"
            />
            <ol className="relative grid grid-cols-6">
              {STEPS.map((s) => (
                <li key={s.title} className="flex flex-col items-center gap-[5px] px-[8px] text-center">
                  <div className="flex size-[54px] shrink-0 items-center justify-center rounded-full border-[3px] border-[#2563eb] bg-white">
                    <Image
                      src={`/machine-agent-identity-guides/desktop-${s.icon}.svg`}
                      alt=""
                      width={22}
                      height={22}
                    />
                  </div>
                  <h3 className="w-full pt-[7px] font-manrope text-[14px] font-bold leading-[22.4px] text-[#07111f]">
                    {s.title}
                  </h3>
                  <p className="w-full font-manrope text-[12px] font-normal leading-[19.2px] text-[#64748b]">
                    {s.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex items-start gap-[14px] rounded-br-[12px] rounded-tr-[12px] border-l-4 border-[#f59e0b] bg-[#fffbeb] px-[22px] py-[18px]">
            <div className="flex h-[26px] w-[24px] shrink-0 items-start pt-[2px]">
              <Image
                src="/machine-agent-identity-guides/desktop-callout-warning.svg"
                alt=""
                width={24}
                height={24}
              />
            </div>
            <p className="font-manrope text-[15px] leading-[24px] text-[#07111f]">
              <strong className="font-bold">Secrets are handled outside this guide.</strong>
              <span className="font-normal"> No secret value, key material or rotation schedule is shown. Specific mechanisms are described only in approved technical documentation.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
