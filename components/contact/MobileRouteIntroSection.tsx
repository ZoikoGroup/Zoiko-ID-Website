export default function MobileRouteIntroSection() {
  return (
    <div className="flex w-full max-w-[820px] flex-col items-start gap-[14.9px]">
      <div className="flex h-[19.8px] w-full items-center gap-[12px]">
        <span aria-hidden="true" className="h-[2px] w-[28px] shrink-0 bg-[#0891b2]" />
        <span className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0b1b33]">
          02
        </span>
        <span className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0891b2]">
          Choose an enquiry type
        </span>
      </div>
      <h2 className="w-full pb-[0.745px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33] [word-break:break-word]">
        Eight routes, each with a<br />
        clear purpose
      </h2>
      <p className="w-full max-w-[720px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82] [word-break:break-word]">
        Each route states what it is for and what it is<br />
        not for. A route marked pending has no<br />
        verified destination yet, so it does not link<br />
        anywhere.
      </p>
    </div>
  );
}
