import Image from "next/image";

const steps = [
  { icon: "lifecycle-discover", title: ["Discover or", "establish"], desc: ["The actor is", "registered"] },
  { icon: "lifecycle-authenticate", title: ["Authenticate"], desc: ["Presented identity", "is checked"] },
  { icon: "lifecycle-evaluate-policy", title: ["Evaluate", "policy"], desc: ["Rules applied to", "the request"] },
  { icon: "lifecycle-use-scope", title: ["Use allowed", "scope"], desc: ["Only in-bounds", "actions"] },
  { icon: "lifecycle-monitor", title: ["Monitor", "context"], desc: ["Changes are", "noticed"] },
  { icon: "lifecycle-retire", title: ["Disable and", "retire"], desc: ["Access is ended"] },
];

function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((l, i) => (
        <span key={l}>
          {i > 0 && <br />}
          {l}
        </span>
      ))}
    </>
  );
}

export default function LifecycleSection() {
  return (
    <section id="lifecycle" className="bg-[#f1f5f9] px-[22px] py-[60px] font-manrope">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-3">
        <div className="flex items-center gap-[10px]">
          <span aria-hidden="true" className="h-[2px] w-[28px] bg-[#22b8d6]" />
          <span className="text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[color:#2563eb]">Non-human identity lifecycle</span>
        </div>
        <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">From discovery to retirement</h2>
        <p className="max-w-[820px] pt-[2px] text-[16px] leading-[25.6px] text-[#64748b]">
          A conceptual sequence of text steps. No credential rotation period or expiry default is implied.
        </p>

        <ol className="grid w-full grid-cols-3 gap-y-[26px] pb-[24px] pt-[28px]">
          {steps.map((s) => (
            <li key={s.icon} className="flex flex-col items-center gap-[5.1px] self-start px-2 text-center">
              <span className="flex size-[54px] items-center justify-center rounded-full border-[3px] border-solid border-[#2563eb] bg-white">
                <Image src={`/machine-agent-identity-guides/mobile-${s.icon}.svg`} alt="" width={22} height={22} />
              </span>
              <h3 className="pt-[6.9px] text-[14px] font-bold leading-[22.4px] text-[#2563eb]">
                <Lines lines={s.title} />
              </h3>
              <p className="text-[12px] leading-[19.2px] text-[#64748b]">
                <Lines lines={s.desc} />
              </p>
            </li>
          ))}
        </ol>

        <div className="flex w-full items-start gap-[14px] rounded-r-[12px] border-l-4 border-solid border-[#f59e0b] bg-[#fffbeb] px-[22px] py-[18px]">
          <div className="flex h-[26px] w-6 shrink-0 items-start pt-[2px]">
            <Image src="/machine-agent-identity-guides/mobile-callout-warning.svg" alt="" width={24} height={24} />
          </div>
          <p className="text-[15px] leading-6 text-[#2563eb]">
            <strong className="font-bold">Secrets are handled outside this guide.</strong> No secret value, key material or rotation schedule is shown. Specific mechanisms are described only in approved technical documentation.
          </p>
        </div>
      </div>
    </section>
  );
}
