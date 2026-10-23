import Image from "next/image";

const items: { icon: string; text: React.ReactNode }[] = [
  {
    icon: "/careers/mobile-icon-x.svg",
    text: (
      <>
        Does not collect your name, email or
        <br />
        CV.
      </>
    ),
  },
  {
    icon: "/careers/mobile-icon-x.svg",
    text: (
      <>
        Does not add you to a talent
        <br />
        community or alert list.
      </>
    ),
  },
  {
    icon: "/careers/mobile-icon-lock-1.svg",
    text: (
      <>
        Applicant privacy notice: pending
        <br />
        legal approval.
      </>
    ),
  },
];

export default function MobileCandidatePrivacySection() {
  return (
    <section id="privacy" className="px-[22px] pt-[60px]">
      <div className="relative mx-auto flex min-h-[440px] w-full max-w-[560px] items-center overflow-clip rounded-[28px]">
        <div className="absolute inset-0">
          <Image
            src="/careers/mobile-candidate-privacy.webp"
            alt=""
            fill
            sizes="(max-width: 600px) 90vw, 560px"
            className="object-cover"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(11,27,51,0.96) 0%, rgba(11,27,51,0.7) 55%, rgba(11,27,51,0.35) 100%)",
          }}
        />
        <div className="relative flex w-full max-w-[760px] flex-col gap-[15.3px] p-[30px]">
          <div className="flex h-[19.8px] items-center gap-[12px]">
            <span className="h-[2px] w-[36px] bg-[#22b8d6]" />
            <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[2.16px] text-[#22b8d6]">
              Candidate privacy
            </p>
          </div>
          <h2 className="pb-[0.65px] pt-[1.53px] font-dm-serif text-[32px] font-normal leading-[35.84px] tracking-[-0.16px] whitespace-nowrap text-white">
            How applicant
            <br />
            information is
            <br />
            handled
          </h2>
          <p className="pb-[0.67px] font-manrope text-[16px] leading-[26.4px] whitespace-nowrap text-[#c9d3e3]">
            Applications are made through the
            <br />
            approved route for each role, with its
            <br />
            privacy notice. This page does not state
            <br />
            retention periods, transfers or
            <br />
            processors.
          </p>
          <ul className="flex flex-col gap-[12px] pt-[8.7px]">
            {items.map((item, i) => (
              <li key={i} className="flex items-center gap-[12px]">
                <Image src={item.icon} width={20} height={20} alt="" className="shrink-0" />
                <span className="font-manrope text-[15px] font-normal leading-[24.75px] whitespace-nowrap text-[#e2e8f0]">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
