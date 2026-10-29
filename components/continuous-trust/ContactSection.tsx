import Image from "next/image";

/* ===== Desktop layout (>= lg) ===== */


const dFIELDS: [string, string][] = [
  ["Name", "Required"],
  ["Work email", "Required; checked for format"],
  ["Organization", "Required"],
  ["What you need", "Required; choose a topic, then describe it briefly"],
  ["Privacy acknowledgement", "Required; links to the Privacy Notice"],
];



function DesktopContact() {
  return (
    <section
      id="contact"
      className="flex w-full scroll-mt-[120px] flex-col items-start bg-white px-[160px] py-[105px]"
    >
      <div className="flex w-full items-center gap-[70px]">
        <div className="relative h-[777px] w-[477.273px] shrink-0 overflow-hidden rounded-[24px]">
          <Image
            src="/continuous-trust/desktop-contact-office.webp"
            alt=""
            fill
            sizes="478px"
            className="rounded-[24px] object-cover"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col items-start gap-[36px]">
          <div className="flex w-full flex-col gap-[15px]">
            <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#071121]">
              Discuss your identity, <br className="max-xl:hidden" />
              authority and revocation needs
            </h2>
            <p className="max-w-[720px] pt-[0.9px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
              Tell us what you need to decide, and a qualified team will reply through the approved route. Submitting
              this form does not promise a reply time, and it does not create an account.
            </p>
          </div>
          <div className="flex w-full flex-col gap-[15px]">
            <dl className="m-0 flex w-full flex-col rounded-[24px] border border-dashed border-[#94a3b8] bg-white px-[36px] py-[24px]">
              {dFIELDS.map(([label, hint], i) => (
                <div
                  key={label}
                  className={`flex w-full items-start gap-[16px] pb-[16px] pt-[15px] ${
                    i < dFIELDS.length - 1 ? "border-b border-[#d9e1ec]" : ""
                  }`}
                >
                  <dt className="w-[180px] shrink-0 pb-[0.8px] font-manrope text-[14px] font-bold leading-[23.8px] whitespace-nowrap text-[#071121]">
                    {label}
                  </dt>
                  <dd className="m-0 min-w-px flex-1 pb-[0.8px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">
                    {hint}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="flex w-full items-start gap-[12px] rounded-[16px] border border-[#fcd34d] bg-[#fef3c7] px-[20px] py-[18px]">
              <div className="flex size-[20px] shrink-0 items-center justify-center pt-[2px]">
                <Image src="/continuous-trust/desktop-icon-alert-1.svg" width={20} height={20} alt="" />
              </div>
              <p className="m-0 font-manrope text-[14px] font-normal leading-[23.8px] text-[#78350f] xl:whitespace-nowrap">
                <strong className="font-bold">Form not yet live.</strong> No submit control appears until the
                enterprise destination <br className="max-xl:hidden" />
                and secure backend are approved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Mobile layout (< lg) ===== */


const mFields: { label: string; hint: React.ReactNode }[] = [
  { label: "Name", hint: "Required" },
  { label: "Work email", hint: "Required; checked for format" },
  { label: "Organization", hint: "Required" },
  {
    label: "What you need",
    hint: (
      <>
        Required; choose a topic, then describe it
        <br />
        briefly
      </>
    ),
  },
  { label: "Privacy acknowledgement", hint: "Required; links to the Privacy Notice" },
];



function MobileContactEnquiry() {
  return (
    <section
      id="contact"
      className="scroll-mt-[120px] border-b border-solid border-[#d9e1ec] bg-white px-[22px] py-[60px] lg:hidden"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[50px]">
        <div className="relative h-[500px] w-full overflow-hidden rounded-[24px]">
          <Image
            src="/continuous-trust/mobile-contact-office.webp"
            alt=""
            fill
            sizes="(max-width: 560px) 100vw, 560px"
            className="object-cover"
          />
        </div>
        <div className="flex w-full flex-col gap-[14.7px] pt-[7.31px]">
          <div className="flex items-center gap-[12px]">
            <div className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
            <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6] whitespace-nowrap">
              16 · Enterprise enquiry
            </p>
          </div>
          <h2 className="pb-[0.65px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#071121]">
            Discuss your identity,
            <br />
            authority and revocation
            <br />
            needs
          </h2>
          <p className="max-w-[720px] pt-[1.31px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] whitespace-nowrap">
            Tell us what you need to decide, and a
            <br />
            qualified team will reply through the
            <br />
            approved route. Submitting this form does
            <br />
            not promise a reply time, and it does not
            <br />
            create an account.
          </p>
          <div className="flex w-full flex-col rounded-[24px] border border-dashed border-[#94a3b8] bg-white px-[24px] py-[41.3px]">
            {mFields.map((f, i) => (
              <div
                key={f.label}
                className={`flex flex-col gap-[15px] pb-[16px] pt-[15px] ${
                  i < mFields.length - 1 ? "border-b border-solid border-[#d9e1ec]" : ""
                }`}
              >
                <p className="pb-[0.8px] font-manrope text-[14px] font-bold leading-[23.8px] text-[#071121]">
                  {f.label}
                </p>
                <p className="pb-[0.8px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">
                  {f.hint}
                </p>
              </div>
            ))}
          </div>
          <div className="flex w-full items-start gap-[12px] rounded-[16px] border border-solid border-[#fcd34d] bg-[#fef3c7] px-[20px] py-[18px]">
            <div className="flex size-[20px] shrink-0 items-center justify-center pt-[2px]">
              <Image
                src="/continuous-trust/mobile-icon-alert-1.svg"
                alt=""
                width={20}
                height={20}
                className="size-[20px]"
              />
            </div>
            <p className="font-manrope text-[14px] leading-[23.8px] text-[#78350f] whitespace-nowrap">
              <span className="font-bold">Form not yet live.</span>
              <span className="font-normal">{` No submit control`}</span>
              <br />
              <span className="font-normal">appears until the enterprise destination and</span>
              <br />
              <span className="font-normal">secure backend are approved.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopContact />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobileContactEnquiry />
      </div>
    </>
  );
}
