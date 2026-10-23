import Image from "next/image";

export default function DesktopPrincipalClassesSection() {
  return (
    <article className="relative flex h-[513.33px] w-[360px] shrink-0 flex-col items-start gap-[10px] overflow-hidden rounded-[22px] border border-[#e2e8f0] bg-white px-[30px] pb-[131.03px] pt-[30px]">
      <div className="relative h-[184px] w-full shrink-0">
        <div className="absolute -left-[30px] -right-[30px] -top-[30px] h-[200px]">
          <Image src="/platform-usage-model/desktop-principal-classes.webp" alt="" fill sizes="360px" className="object-cover" />
        </div>
      </div>
      <div className="flex w-full items-center rounded-full bg-[#ede9fe] px-[11px] py-[5px]">
        <span className="font-manrope text-[11px] font-extrabold uppercase leading-[17.6px] tracking-[0.88px] text-[#5b21b6]">Principal classes</span>
      </div>
      <h3 className="w-full pb-[6px] pt-[5.3px] font-manrope text-[16px] font-bold leading-[25.6px] text-[#07111f]">People · organizations · services · machines · AI agents</h3>
      <p className="w-full font-manrope text-[14px] leading-[22.4px] text-[#64748b]">Conceptual classes. No implicit per-seat rate, universal tenancy or unbounded sponsorship.</p>
    </article>
  );
}
