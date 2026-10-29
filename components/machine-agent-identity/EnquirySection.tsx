import Image from "next/image";

/* ===== Shared content ===== */

const formRows = [
  { label: "Name", hint: "Required" },
  { label: "Work email", hint: "Required; checked for format" },
  { label: "Organization", hint: "Required" },
  { label: "Use case", hint: "Required; describe briefly" },
  { label: "Privacy acknowledgement", hint: "Required; links to the Privacy Notice" },
];

/* ===== Desktop layout (>= lg) ===== */

function DesktopEnquiry() {
  return (
    <section className="w-full bg-white px-[160px] py-[105px]">
      <div className="flex w-full flex-col gap-[60px]">
        <div className="flex w-full flex-col gap-[15px]">
          <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#071121]">
            Talk about your machine and agent identity needs
          </h2>
          <p className="w-full max-w-[720px] pt-px font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
            Share your use case and the systems involved, and a qualified team will reply through the approved route. Submitting does not promise a response time, a booking or a trial.
          </p>
        </div>
        <div className="flex w-full items-stretch gap-[36px]">
          <div className="relative min-h-[500px] min-w-0 flex-1 overflow-hidden rounded-[24px]">
            <Image
              src="/machine-agent-identity/desktop-enquiry-office.webp"
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[60.9%_50%]"
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-[15px]">
            <div className="flex w-full flex-col rounded-[24px] border border-dashed border-[#94a3b8] bg-white p-[36px]">
              {formRows.map((r, i) => (
                <div
                  key={r.label}
                  className={`flex w-full items-start gap-[18px] pb-[16px] pt-[15px] ${
                    i < formRows.length - 1 ? "border-b border-solid border-[#d9e1ec]" : ""
                  }`}
                >
                  <p className="w-[190px] shrink-0 pb-[0.8px] font-manrope text-[14px] font-bold leading-[23.8px] whitespace-nowrap text-[#071121]">
                    {r.label}
                  </p>
                  <p className="min-w-0 flex-1 pb-[0.8px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">
                    {r.hint}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex w-full items-start gap-[14px] rounded-[18px] border border-solid border-[#fcd34d] bg-[#fef3c7] px-[24px] py-[20px]">
              <div className="flex size-[20px] shrink-0 items-center justify-center pt-[2px]">
                <Image src="/machine-agent-identity/desktop-icon-alert-1.svg" width={20} height={20} alt="" />
              </div>
              <p className="min-w-0 font-manrope text-[14px] font-normal leading-[23.8px] text-[#78350f] xl:whitespace-nowrap">
                <strong className="font-bold">Form not yet live.</strong>{" "}
                No submit control appears until the sales route and secure<br className="max-xl:hidden" />{" "}
                backend are approved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Mobile layout (< lg) ===== */

function MobileEnquiry() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[50px]">
        <div className="relative h-[500px] w-full overflow-hidden rounded-[24px]">
          <Image
            src="/machine-agent-identity/mobile-enquiry-office.webp"
            alt=""
            fill
            sizes="(max-width: 560px) 100vw, 560px"
            className="object-cover"
          />
        </div>
        <div className="flex w-full flex-col items-start gap-[14.8px] pt-[7.31px]">
          <div className="flex items-center gap-[12px]">
            <div className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
            <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] whitespace-nowrap text-[#22b8d6]">
              18 · Enquiry
            </p>
          </div>
          <h2 className="w-full pb-[0.745px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#071121]">
            Talk about your machine
            <br />
            and agent identity needs
          </h2>
          <p className="w-full max-w-[720px] pt-[1.2px] font-manrope text-[18px] font-normal leading-[30.6px] whitespace-nowrap text-[#5b6b82]">
            Share your use case and the systems
            <br />
            involved, and a qualified team will reply
            <br />
            through the approved route. Submitting
            <br />
            does not promise a response time, a
            <br />
            booking or a trial.
          </p>
          <div className="flex w-full flex-col rounded-[24px] border border-dashed border-[#94a3b8] bg-white px-[24px] pb-[37.2px] pt-[41.19px]">
            {formRows.map((r, i) => (
              <div
                key={r.label}
                className={`flex w-full flex-col gap-[17px] pb-[16px] pt-[15px] ${
                  i < formRows.length - 1 ? "border-b border-solid border-[#d9e1ec]" : ""
                }`}
              >
                <p className="w-full pb-[0.8px] font-manrope text-[14px] font-bold leading-[23.8px] text-[#071121]">
                  {r.label}
                </p>
                <p className="w-full pb-[0.8px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">
                  {r.hint}
                </p>
              </div>
            ))}
          </div>
          <div className="flex w-full items-start gap-[14px] rounded-[18px] border border-solid border-[#fcd34d] bg-[#fef3c7] px-[24px] py-[20px]">
            <div className="flex size-[20px] shrink-0 items-center justify-center pt-[2px]">
              <Image src="/machine-agent-identity/mobile-icon-alert-1.svg" width={20} height={20} alt="" />
            </div>
            <p className="min-w-0 font-manrope text-[14px] font-normal leading-[23.8px] whitespace-nowrap text-[#78350f]">
              <strong className="font-bold">Form not yet live.</strong>{" "}
              No submit control
              <br />
              appears until the sales route and secure
              <br />
              backend are approved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function EnquirySection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopEnquiry />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobileEnquiry />
      </div>
    </>
  );
}
