export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[19.19px] w-full items-center gap-[10px]">
      <span aria-hidden="true" className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
      <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[color:#2563eb]">
        {children}
      </p>
    </div>
  );
}
