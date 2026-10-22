function NodeCard({ label, name }: { label: string; name: string }) {
  return (
    <div className="flex w-full flex-col gap-[0.89px] rounded-[8px] border border-solid border-[#dce3ee] bg-white px-[26px] pb-[26px] pt-[28.5px]">
      <p className="font-manrope text-[13px] font-normal leading-[21.45px] text-[#5b6b82]">{label}</p>
      <p className="font-dm-serif text-[22px] font-normal leading-[36.3px] text-[#2563eb]">{name}</p>
    </div>
  );
}

export default function MobileRelationshipSection() {
  return (
    <section className="lg:hidden w-full bg-[#f7f8fa] px-[11px] pb-[101px] pt-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[70px]">
        <div className="flex flex-col gap-[12px]">
          <p className="pb-[0.8px] font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0891b2]">
            Relationship
          </p>
          <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
            <span>One corporate entity, one<br />
platform</span>
          </h2>
          <p className="max-w-[680px] pt-[1.075px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82]">
            <span>The relationship is shown as a two-node map.<br />
We do not show subsidiaries, a group chart or<br />
an ownership tree, because none is documented<br />
in the sources used here.</span>
          </p>
          <div className="flex flex-col items-center gap-[28.4px] pt-[18px]">
            <NodeCard label="Corporate entity" name="Zoiko Tech Inc." />
            <div aria-hidden="true" className="flex h-[27px] w-[43px] items-center justify-center">
              <span className="rotate-90 whitespace-nowrap font-manrope text-[26px] font-extrabold leading-[42.9px] text-[#0891b2]">
                →
              </span>
            </div>
            <NodeCard label="Product platform" name="Zoiko iD" />
          </div>
          <div className="w-full rounded-[8px] border border-solid border-[#dce3ee] bg-white px-[18px] pb-[16.185px] pt-[21.095px]">
            <p className="font-manrope text-[14px] font-normal leading-[23.1px] text-[#5b6b82]">
              <span className="whitespace-nowrap">Text equivalent: Zoiko Tech Inc. is the corporate<br />
entity. Zoiko iD is the product platform that Zoiko<br />
Tech Inc. describes publicly.</span>
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-[7px] rounded-[8px] border border-solid border-[#dce3ee] bg-white px-[30px] pb-[30px] pt-[29px]">
          <p className="pb-[0.8px] font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0891b2]">
            Corporate boundary
          </p>
          <h3 className="pt-[3px] font-dm-serif text-[24px] font-normal leading-[30px] text-[#2563eb]">
            <span>Company information stays<br />
here. Product detail lives on<br />
Zoiko iD.</span>
          </h3>
          <p className="font-manrope text-[16px] leading-[26.4px] text-[#334155]">
            <span>For how the platform works, what it covers,<br />
and how it is governed, go to the Zoiko iD<br />
pages. Company-level statements on this<br />
page do not override product-specific<br />
technology, security, commercial or legal<br />
sources.</span>
          </p>
          <p className="pt-[11px] font-manrope text-[13px] font-normal leading-[21.45px] text-[#5b6b82]">
            Source: Zoiko iD public footer and About Zoiko iD.
          </p>
        </div>
      </div>
    </section>
  );
}
