import Image from "next/image";

const fields = [
  { label: "Public title", value: "Privacy Notice", plain: true, size: "" },
  { label: "Legal entity and scope", value: "Pending Legal", plain: false, size: "text-[14px]" },
  { label: "Effective date", value: "Pending Legal approval", plain: false, size: "text-[14px]" },
  { label: "Last updated", value: "Shown separately, once approved", plain: false, size: "text-[13.7px]" },
  { label: "Canonical URL", value: "Pending route registry", plain: false, size: "text-[13.3px]" },
  { label: "Version", value: "Pending", plain: false, size: "text-[14px]" },
];

export default function DesktopDocumentControlSection() {
  return (
    <section
      id="document-control"
      className="flex w-full scroll-mt-[120px] flex-col items-start border-b border-solid border-[#d9e1ec] bg-white px-[160px] py-[105px]"
    >
      <div className="flex w-full items-start justify-center gap-[90px]">
        <div className="sticky top-[132px] flex w-[260px] shrink-0 flex-col items-start gap-[14.01px]">
          <div className="flex w-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8] py-[13px]">
            <Image src="/privacy-notice/desktop-icon-doc.svg" width={24} height={24} alt="" />
          </div>
          <p className="w-full font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.68px] text-[#5b6b82]">
            Document control
          </p>
        </div>
        <div className="flex min-w-0 max-w-[820px] flex-1 flex-col items-start gap-[24px]">
          <div className="flex w-full flex-col items-start gap-[48px]">
            <div className="flex w-full flex-col items-start gap-[5px]">
              <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
                Document control and identity
              </h2>
              <p className="w-full pt-[16px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
                This notice describes how Zoiko iD’s privacy information is to be presented. It is a publication{" "}
                <br className="max-xl:hidden" />
                specification, not the operative notice and not a statement of processing activity.
              </p>
            </div>
            <div className="relative h-[301.01px] w-full overflow-hidden rounded-[20px]">
              <Image
                src="/privacy-notice/desktop-hero-documents.webp"
                alt="Documents laid out on a desk"
                fill
                sizes="770px"
                className="object-cover"
                style={{ objectPosition: "center 35%" }}
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-[5px]">
            <dl className="grid w-full auto-rows-[90.98px] grid-cols-2 items-stretch gap-[14px]">
              {fields.map((f) => (
                <div
                  key={f.label}
                  className="flex flex-col items-start gap-[8px] rounded-[12px] border border-solid border-[#d9e1ec] bg-white px-[18px] pb-[16px] pt-[15px]"
                >
                  <dt className="w-full pb-[0.8px] font-manrope text-[14px] font-bold leading-[23.8px] text-[#0b1b33]">
                    {f.label}
                  </dt>
                  <dd
                    className={
                      f.plain
                        ? "font-manrope text-[14px] font-normal leading-[23.8px] whitespace-nowrap text-[#5b6b82]"
                        : `flex h-[20px] items-center rounded-[6px] bg-[#eef2f7] px-[8px] font-manrope font-normal leading-[23.8px] whitespace-nowrap text-[#5b6b82] ${f.size}`
                    }
                  >
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="flex w-full items-start gap-[16px] rounded-[16px] border border-solid border-[#fca5a5] bg-[#fef2f2] px-[30px] py-[26px]">
              <div className="flex size-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#fee2e2]">
                <Image src="/privacy-notice/desktop-icon-alert.svg" width={24} height={24} alt="" />
              </div>
              <p className="pr-[16.44px] font-manrope text-[15px] leading-[25.5px] text-[#7f1d1d] xl:whitespace-nowrap">
                <strong className="font-bold">Blocked until approved.</strong>
                <span className="font-normal">
                  {" No effective date, entity, retention period or contact is shown until its "}
                </span>
                <br className="max-xl:hidden" />
                <span className="font-normal">governing source is supplied and approved.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
