import Image from "next/image";

// Ordered by visual position (row-major, 2 columns).
const states = [
  { title: "Ready", text: "Form available; nothing sent.", single: true },
  { title: "Unknown outcome", text: "Status checked before any retry.", single: true },
  { title: "Submitting", text: "In progress; duplicate clicks prevented." },
  { title: "Received", text: "Server confirmed receipt. No meeting promised." },
  { title: "Duplicate", text: "Original receipt shown; no second enquiry." },
  { title: "Invalid", text: "Errors beside each field, with a summary." },
  { title: "Unavailable", text: "Approved alternate contact route shown." },
  { title: "Rate limited", text: "Try again later; no retry time invented.", single: true },
];

export default function DesktopSubmissionStatesSection() {
  return (
    <section
      id="submission-states"
      className="hidden w-full items-center gap-[48px] bg-white px-[160px] py-[105px] lg:flex"
    >
      <div className="flex min-w-0 flex-1 flex-col items-start gap-[48px]">
        <div className="flex w-full flex-col gap-[12px]">
          <h2 className="font-dm-serif text-[52px] font-normal leading-[57.2px] text-[#07111f]">
            Every outcome is described honestly
          </h2>
          <p className="max-w-[620px] font-manrope text-[15px] font-normal leading-[24px] text-[#64748b]">
            A submission is shown as received only after the server confirms it. A timeout is never shown as success.
          </p>
        </div>
        <ul className="grid h-[452px] w-full grid-cols-2 grid-rows-[repeat(4,99.39px)] gap-[12px]">
          {states.map((s) => (
            <li
              key={s.title}
              className={`flex flex-col items-start self-start rounded-[14px] border border-solid border-[#d9e2ee] bg-white px-[16px] ${
                s.single ? "gap-[2px] pb-[37.59px] pt-[15px]" : "gap-[1.895px] py-[16px]"
              }`}
            >
              <h3 className="pb-[0.8px] font-manrope text-[13px] font-bold leading-[20.8px] text-[#07111f]">
                {s.title}
              </h3>
              <p className="font-manrope text-[13px] font-normal leading-[20.8px] text-[#64748b]">
                {s.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative flex min-w-0 flex-1 flex-col items-start overflow-clip rounded-[24px] border border-solid border-[#d9e2ee] bg-white">
        <div className="flex w-full items-center justify-between gap-4 bg-[#eef4fb] px-[26px] py-[18px]">
          <span className="flex items-center rounded-full border border-dashed border-[#94a3b8] bg-white px-[11px] py-[5px] font-manrope text-[11px] font-extrabold uppercase leading-[17.6px] tracking-[0.88px] whitespace-nowrap text-[#334155]">
            State preview
          </span>
          <span className="font-manrope text-[12px] font-normal leading-[19.2px] whitespace-nowrap text-[#64748b]">
            Not a real receipt
          </span>
        </div>
        <div className="relative h-[200px] w-full overflow-hidden">
          <div className="absolute left-0 h-[177.22%] w-full" style={{ top: "-14.34%" }}>
            <Image
              src="/talk-to-sales/desktop-confirmation-preview.webp"
              alt=""
              fill
              sizes="535px"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-[12px] px-[30px] py-[34px]">
          <h3 className="font-dm-serif text-[24px] font-normal leading-[30px] text-[#07111f]">
            Your enquiry has been received.
          </h3>
          <p className="font-manrope text-[15px] font-normal leading-[24px] text-[#334155]">
            Thank you. The details you submitted have been received for review. A response or meeting is not confirmed by this receipt.
          </p>
        </div>
      </div>
    </section>
  );
}
