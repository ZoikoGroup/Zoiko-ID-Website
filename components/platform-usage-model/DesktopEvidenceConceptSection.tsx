import Image from "next/image";

export default function DesktopEvidenceConceptSection() {
  return (
    <article className="relative col-span-2 flex h-[312.5px] items-center gap-[30px] overflow-hidden rounded-[22px] border border-[#e2e8f0] bg-white p-[30px]">
      <div className="relative h-[249px] min-h-[160px] w-[446px] shrink-0 overflow-hidden rounded-[12px]">
        <Image
          src="/platform-usage-model/desktop-concept-evidence.webp"
          alt="Decision evidence trail"
          fill
          sizes="446px"
          className="rounded-[12px] object-cover"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col items-start">
        <div className="flex size-[42px] items-center justify-center rounded-[12px] bg-[#e0f2fe]">
          <Image src="/platform-usage-model/desktop-icon-evidence.svg" alt="" width={20} height={20} />
        </div>
        <h3 className="mt-[11px] font-manrope text-[21px] font-extrabold leading-[26.25px] text-[#07111f]">Evidence</h3>
        <p className="mt-[9px] max-w-[582px] font-manrope text-[14px] leading-[22.4px] text-[#64748b]">
          Record decision provenance, subject to access and privacy controls. Evidence is not presented as surveillance or as unlimited storage.
        </p>
        <div className="rounded-[10px] bg-[#f5f7fa] px-[12px] py-[6px]">
          <p className="font-manrope text-[12px] leading-[19.2px] text-[#07111f]">Concept, not a billing unit</p>
        </div>
      </div>
    </article>
  );
}
