import Image from "next/image";

const STATES = [
  { title: "Ready", text: "Form available; nothing sent." },
  { title: "Invalid", text: "Errors beside each field, with a summary." },
  { title: "Submitting", text: "In progress; duplicate clicks prevented." },
  { title: "Received", text: "Server confirmed receipt. No meeting promised." },
  { title: "Duplicate", text: "Original receipt shown; no second enquiry." },
  { title: "Unknown outcome", text: "Status checked before any retry." },
  { title: "Rate limited", text: "Try again later; no retry time invented." },
  { title: "Unavailable", text: "Approved alternate contact route shown." },
];

export default function MobileSubmissionStatesSection() {
  return (
    <section id="submission-states" className="w-full px-[11px] pt-[60px] lg:hidden">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[70px]">
        <div className="flex flex-col gap-[12px]">
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[#1d4ed8]">
            Submission states
          </p>
          <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
            Every outcome is described honestly
          </h2>
          <p className="max-w-[620px] font-manrope text-[15px] font-normal leading-[24px] text-[#64748b]">
            A submission is shown as received only after the server confirms it. A timeout is never shown as success.
          </p>
          <ul className="flex flex-col gap-[12px] pt-[18px]">
            {STATES.map((s) => (
              <li
                key={s.title}
                className="flex flex-col gap-[2px] rounded-[14px] border border-[#d9e2ee] bg-white p-[16px]"
              >
                <p className="pb-[0.8px] font-manrope text-[13px] font-bold leading-[20.8px] text-[#2563eb]">{s.title}</p>
                <p className="font-manrope text-[13px] font-normal leading-[20.8px] text-[#64748b]">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-clip rounded-[24px] border border-[#d9e2ee] bg-white">
          <div className="flex items-center justify-between gap-4 bg-[#eef4fb] px-[26px] py-[18px]">
            <span className="whitespace-nowrap rounded-full border border-dashed border-[#94a3b8] bg-white px-[11px] py-[5px] font-manrope text-[11px] font-extrabold uppercase leading-[17.6px] tracking-[0.88px] text-[#334155]">
              State preview
            </span>
            <span className="whitespace-nowrap font-manrope text-[12px] font-normal leading-[19.2px] text-[#64748b]">
              Not a real receipt
            </span>
          </div>
          <div className="relative h-[200px] w-full overflow-hidden">
            <Image
              src="/talk-to-sales/mobile-confirmation-preview.webp"
              alt=""
              fill
              sizes="(max-width: 560px) 100vw, 560px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-[12px] px-[30px] py-[34px]">
            <h3 className="font-dm-serif text-[24px] font-normal leading-[30px] text-[#2563eb]">
              Your enquiry has been received.
            </h3>
            <p className="font-manrope text-[15px] font-normal leading-[24px] text-[#334155]">
              Thank you. The details you submitted have been received for review. A response or meeting is not confirmed by this receipt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
