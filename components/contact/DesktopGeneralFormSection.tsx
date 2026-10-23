import Image from "next/image";

const BR = <br className="max-xl:hidden" />;

const gate = [
  "A verified recipient and owner for each category",
  "An approved route and privacy notice",
  "Security review of the processing",
  "Consent, retention and monitoring in place",
  "Accessibility testing and failure handling signed off",
];

const fields: { label: string; spec: React.ReactNode }[] = [
  { label: "Enquiry type", spec: <>Required. Error: Choose a {BR}reason for contacting us.</> },
  { label: "Full name", spec: <>Required; 1–120 characters; {BR}international characters allowed.</> },
  { label: "Reply email", spec: <>Required; checked on the {BR}server; never echoed in {BR}analytics.</> },
  { label: "Organization", spec: <>Optional; length-bound. {BR}Individuals are not asked for {BR}one.</> },
  { label: "Subject", spec: "Required; 5–160 characters." },
  { label: "Message", spec: <>Required; 20–4000 characters. {BR}Warns against passwords and {BR}tokens.</> },
  { label: "Consent", spec: <>Only if Legal requires it. Never a {BR}default marketing opt-in.</> },
  { label: "Marketing opt-in", spec: <>Optional and unchecked. {BR}Cannot block an enquiry.</> },
];

export default function DesktopGeneralFormSection() {
  return (
    <section
      id="form"
      className="flex w-full flex-col gap-[60px] bg-[#f8fafc] px-[160px] py-[105px]"
    >
      <div className="flex w-full items-center justify-center gap-[80px]">
        <div className="flex min-w-0 flex-1 flex-col gap-[32px]">
          <div className="flex flex-col gap-[15px]">
            <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
              The general form is {BR}
              gated
            </h2>
            <p className="max-w-[720px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82]">
              The general enquiry form is not shown on this page. It can be {BR}
              published only once every item below is verified.
            </p>
          </div>
          <div className="flex flex-col gap-[11.75px] rounded-[14px] border border-[#fdba74] bg-[#fff7ed] px-[28px] pb-[28px] pt-[44px] text-[#7c2d12] xl:whitespace-nowrap">
            <h3 className="font-manrope text-[15px] font-bold leading-[24.75px]">Publication gate</h3>
            <ul className="flex list-disc flex-col gap-[4px] pl-[40px] font-manrope text-[14px] font-normal leading-[23.1px]">
              {gate.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        </div>

        <dl className="flex min-w-0 flex-1 flex-col rounded-[18px] border border-dashed border-[#94a3b8] bg-white p-[40px]">
          {fields.map((f, i) => (
            <div
              key={f.label}
              className={`flex items-start gap-[20px] pb-[16px] pt-[15px] ${
                i < fields.length - 1 ? "border-b border-[#d9e1ec]" : ""
              }`}
            >
              <dt className="w-[200px] shrink-0 font-manrope text-[15px] font-bold leading-[24.75px] text-[#0b1b33] xl:whitespace-nowrap">
                {f.label}
              </dt>
              <dd className="min-w-0 flex-1 font-manrope text-[15px] font-normal leading-[24.75px] text-[#5b6b82]">
                {f.spec}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative h-[380px] w-full overflow-hidden rounded-[18px]">
        <Image
          src="/contact/desktop-states-office.webp"
          alt=""
          fill
          sizes="(min-width: 1024px) 1120px, 100vw"
          className="object-cover"
          style={{ objectPosition: "50% 83.5%" }}
        />
      </div>
    </section>
  );
}
