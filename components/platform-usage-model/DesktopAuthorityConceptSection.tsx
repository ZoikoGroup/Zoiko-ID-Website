import Image from "next/image";

export default function DesktopAuthorityConceptSection() {
  return (
    <article className="relative flex h-[408px] flex-col items-start gap-[10px] overflow-hidden rounded-[22px] border border-[#e2e8f0] bg-white p-[30px]">
      <div className="relative h-[164px] w-full shrink-0">
        <div className="absolute -left-[30px] -right-[30px] -top-[30px] h-[180px] overflow-hidden">
          <div className="absolute left-0 top-[-50.35%] h-[262.2%] w-full">
            <Image src="/platform-usage-model/desktop-concept-authority.webp" alt="" fill sizes="550px" className="object-cover" />
          </div>
        </div>
      </div>
      <div className="relative flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e0f2fe]">
        <Image src="/platform-usage-model/desktop-icon-authority.svg" alt="" width={20} height={20} />
      </div>
      <h3 className="relative top-[-1px] h-[34.25px] w-full font-manrope text-[21px] font-extrabold leading-[26.25px] text-[#07111f]">Authority</h3>
      <p className="w-full font-manrope text-[14px] leading-[22.4px] text-[#64748b]">Scope the permitted action, and its representation.</p>
      <div className="w-full rounded-[10px] bg-[#f5f7fa] px-[12px] pb-[9.19px] pt-[8px]">
        <p className="font-manrope text-[12px] leading-[19.2px] text-[#07111f]">Concept, not a billing unit</p>
      </div>
    </article>
  );
}
