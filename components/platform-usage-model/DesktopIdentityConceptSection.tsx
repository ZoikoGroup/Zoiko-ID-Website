import Image from "next/image";

export default function DesktopIdentityConceptSection() {
  return (
    <article className="relative flex h-[408px] flex-col items-start gap-[10px] overflow-hidden rounded-[22px] bg-[#071426] p-[30px]">
      <div className="relative h-[164px] w-full shrink-0">
        <div className="absolute -left-[30px] -right-[30px] -top-[30px] h-[180px] overflow-hidden">
          <div className="absolute left-0 top-[-26.27%] h-[203.19%] w-full">
            <Image src="/platform-usage-model/desktop-concept-identity.webp" alt="" fill sizes="550px" className="object-cover" />
          </div>
        </div>
      </div>
      <div className="relative flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[rgba(34,184,214,0.18)]">
        <Image src="/platform-usage-model/desktop-icon-identity.svg" alt="" width={20} height={20} />
      </div>
      <h3 className="relative top-[-1px] h-[34.25px] w-full font-manrope text-[21px] font-extrabold leading-[26.25px] text-white">Identity</h3>
      <p className="w-full font-manrope text-[14px] leading-[22.4px] text-[#94a3b8]">Establish the actor: who or what is acting.</p>
      <div className="flex w-full flex-col justify-end pt-[2px]">
        <div className="w-full rounded-[10px] bg-[rgba(255,255,255,0.08)] px-[12px] pb-[9.19px] pt-[8px]">
          <p className="font-manrope text-[12px] leading-[19.2px] text-[#e2e8f0]">Concept, not a billing unit</p>
        </div>
      </div>
    </article>
  );
}
