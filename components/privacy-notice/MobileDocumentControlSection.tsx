import Image from "next/image";

const rows = [
  { label: "Public title", value: "Privacy Notice", plain: true, size: "text-[14px]" },
  { label: "Legal entity and scope", value: "Pending Legal", size: "text-[14px]" },
  { label: "Effective date", value: "Pending Legal approval", size: "text-[14px]" },
  { label: "Last updated", value: "Shown separately, once approved", size: "text-[13.7px]" },
  { label: "Canonical URL", value: "Pending route registry", size: "text-[13.3px]" },
  { label: "Version", value: "Pending", size: "text-[14px]" },
];

export default function MobileDocumentControlSection() {
  return (
    <section
      id="document-control"
      className="w-full scroll-mt-[120px] border-b border-solid border-[#d9e1ec] bg-white px-[22px] py-[60px]"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col justify-center gap-[36px]">
        <div className="flex w-full flex-col gap-[14px] rounded-[14px] border border-solid border-[#d9e1ec] bg-white p-[22px]">
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.68px] text-[#5b6b82]">
            Document control
          </p>
          <div className="flex w-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8] py-[13px]">
            <Image src="/privacy-notice/mobile-icon-doc.svg" width={24} height={24} alt="" />
          </div>
        </div>
        <div className="flex w-full max-w-[820px] flex-col gap-[4.9px]">
          <p className="font-dm-serif text-[14px] font-normal leading-[23.8px] tracking-[1.68px] text-[#0891b2]">01</p>
          <h2 className="pb-[21.845px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33]">
            Document control and
            <br />
            identity
          </h2>
          <div className="relative h-[200px] w-full overflow-hidden rounded-[20px]">
            <Image
              src="/privacy-notice/mobile-identity-documents.webp"
              alt="Identity and policy documents"
              fill
              sizes="(max-width: 560px) 100vw, 560px"
              className="object-cover"
            />
          </div>
          <p className="pt-[29.1px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
            This notice describes how Zoiko iD’s
            <br />
            privacy information is to be presented. It is
            <br />
            a publication specification, not the
            <br />
            operative notice and not a statement of
            <br />
            processing activity.
          </p>
          <dl className="flex w-full flex-col gap-[14px] py-[25.1px]">
            {rows.map((r) => (
              <div
                key={r.label}
                className="flex w-full flex-col gap-[10px] rounded-[12px] border border-solid border-[#d9e1ec] bg-white px-[18px] pb-[19.18px] pt-[15px]"
              >
                <dt className="pb-[0.8px] font-manrope text-[14px] font-bold leading-[23.8px] text-[#0b1b33]">
                  {r.label}
                </dt>
                {r.plain ? (
                  <dd className="whitespace-nowrap font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">
                    {r.value}
                  </dd>
                ) : (
                  <dd
                    className={`flex h-[20px] w-fit items-center whitespace-nowrap rounded-[6px] bg-[#eef2f7] px-[8px] font-manrope font-normal leading-[23.8px] text-[#5b6b82] ${r.size}`}
                  >
                    {r.value}
                  </dd>
                )}
              </div>
            ))}
          </dl>
          <div className="flex w-full items-start gap-[16px] rounded-[16px] border border-solid border-[#fca5a5] bg-[#fef2f2] p-[22px]">
            <div className="flex size-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#fee2e2]">
              <Image src="/privacy-notice/mobile-icon-alert.svg" width={24} height={24} alt="" />
            </div>
            <p className="min-w-0 whitespace-nowrap pr-[8.87px] font-manrope text-[15px] font-normal leading-[25.5px] text-[#7f1d1d]">
              <strong className="font-bold">Blocked until approved.</strong> No
              <br />
              effective date, entity, retention
              <br />
              period or contact is shown until its
              <br />
              governing source is supplied and
              <br />
              approved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
