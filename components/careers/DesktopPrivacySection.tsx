import Image from "next/image";

const items = [
  { icon: "/careers/desktop-icon-x.svg", text: "Does not collect your name, email or CV." },
  { icon: "/careers/desktop-icon-x.svg", text: "Does not add you to a talent community or alert list." },
  { icon: "/careers/desktop-icon-lock-1.svg", text: "Applicant privacy notice: pending legal approval." },
];

export default function DesktopPrivacySection() {
  return (
    <section
      id="privacy"
      className="relative flex min-h-[440px] w-full items-center overflow-clip px-[160px] py-[105px]"
    >
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/careers/desktop-candidate-privacy.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-[0_0_-0.35px_0] bg-gradient-to-r from-[rgba(11,27,51,0.96)] via-[rgba(11,27,51,0.7)] via-[55%] to-[rgba(11,27,51,0.35)]" />
      </div>

      <div className="relative flex w-[613px] max-w-[760px] shrink-0 flex-col items-start gap-[15.2px] py-[80px]">
        <h2 className="pt-[1.92px] font-dm-serif text-[52px] font-normal leading-[58.24px] tracking-[-0.26px] text-white xl:whitespace-nowrap">
          How applicant information <br className="max-xl:hidden" />
          is handled
        </h2>
        <p className="pb-[0.585px] font-manrope text-[16px] font-normal leading-[26.4px] text-[#c9d3e3] xl:whitespace-nowrap">
          Applications are made through the approved route for each role, with its privacy{" "}
          <br className="max-xl:hidden" />
          notice. This page does not state retention periods, transfers or processors.
        </p>
        <ul className="flex w-full flex-col gap-[12px] pt-[8.8px]">
          {items.map((item) => (
            <li key={item.text} className="flex h-[24.75px] items-center gap-[12px]">
              <Image src={item.icon} alt="" width={20} height={20} className="size-[20px] shrink-0" />
              <span className="font-manrope text-[15px] font-normal leading-[24.75px] text-[#e2e8f0]">
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
