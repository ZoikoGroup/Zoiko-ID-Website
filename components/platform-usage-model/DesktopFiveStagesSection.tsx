import Image from "next/image";

const stages = [
  { title: "1 · Identify", body: "Establish the actor." },
  { title: "2 · Establish authority", body: "Scope the permitted action." },
  { title: "3 · Evaluate policy", body: "Apply current rules." },
  { title: "4 · Respond to change", body: "Re-evaluate on new signals." },
  { title: "5 · Preserve evidence", body: "Keep a governed record." },
];

export default function DesktopFiveStagesSection() {
  return (
    <section
      id="stages"
      className="hidden lg:grid grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] items-center gap-x-[50px] bg-[#f8fafc] px-[160px] py-[105px]"
    >
      <div className="relative h-[492px] w-full max-w-[460px] rounded-[32px]">
        <Image
          src="/platform-usage-model/desktop-five-stages-ring.webp"
          alt=""
          fill
          sizes="460px"
          className="rounded-[32px] object-cover"
        />
      </div>
      <div className="flex w-full flex-col items-start">
        <h2 className="font-dm-serif font-normal text-[52px] leading-[58.8px] tracking-[-0.38px] text-[#07111f]">
          Five stages, read in order
        </h2>
        <ol className="flex w-full list-none flex-col gap-[14px] pt-[22px]">
          {stages.map((s) => (
            <li
              key={s.title}
              className="flex w-full flex-col gap-[2.5px] rounded-[16px] border border-solid border-[#e2e8f0] bg-white px-[22px] py-[18px]"
            >
              <span className="font-manrope text-[15px] font-bold leading-[24px] text-[#07111f]">
                {s.title}
              </span>
              <span className="pb-[0.8px] font-manrope text-[13px] leading-[20.8px] text-[#64748b]">
                {s.body}
              </span>
            </li>
          ))}
        </ol>
        <p className="w-full pt-[18px] font-manrope text-[14px] leading-[22.4px] text-[#64748b]">
          Authentication is not authority, and evidence is not surveillance. No real-time speed, retention duration or cryptographic property is claimed.
        </p>
      </div>
    </section>
  );
}
