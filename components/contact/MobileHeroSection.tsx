import Image from "next/image";
import Link from "next/link";

const steps: {
  n: string;
  wrap: string;
  circle: string;
  line?: string;
  textTop: string;
  gap: string;
  title: React.ReactNode;
  body: React.ReactNode;
}[] = [
  {
    n: "1",
    wrap: "h-[118.58px]",
    circle: "top-[22px]",
    line: "top-[66px]",
    textTop: "top-[21px]",
    gap: "gap-[1.435px]",
    title: "Choose the reason",
    body: (
      <>
        Select the category that matches
        <br />
        your question.
      </>
    ),
  },
  {
    n: "2",
    wrap: "h-[119.67px]",
    circle: "top-0",
    line: "top-[44px]",
    textTop: "top-[-1px]",
    gap: "gap-[1.485px]",
    title: "Follow the specialist route",
    body: (
      <>
        Each category opens a
        <br />
        destination owned by the team
        <br />
        that handles it.
      </>
    ),
  },
  {
    n: "3",
    wrap: "h-[122.97px]",
    circle: "top-0",
    line: "top-[44px]",
    textTop: "top-[-0.81px]",
    gap: "gap-[1.63px]",
    title: (
      <>
        Security and privacy never
        <br />
        use the general form
      </>
    ),
    body: (
      <>
        High-risk requests go to their own
        <br />
        routes.
      </>
    ),
  },
  {
    n: "4",
    wrap: "h-[100.97px]",
    circle: "top-0",
    textTop: "top-[-0.81px]",
    gap: "gap-[1.63px]",
    title: (
      <>
        Receipt only after the
        <br />
        server confirms
      </>
    ),
    body: (
      <>
        A confirmation appears only when
        <br />
        the request is durably accepted.
      </>
    ),
  },
];

const photos = [
  { src: "/contact/mobile-flow-whiteboard.webp", alt: "Whiteboard with a routing diagram" },
  { src: "/contact/mobile-flow-laptop.webp", alt: "Laptop showing an enquiry" },
  { src: "/contact/mobile-route-office.webp", alt: "Office where enquiries are handled" },
  { src: "/contact/mobile-flow-meeting.webp", alt: "Team meeting about a request" },
];

export default function MobileHeroSection() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] bg-[#fafbfd] px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[56px]">
        <div className="flex w-full flex-col items-center gap-[39.99px]">
          <div className="flex w-full flex-col items-start gap-[14.8px]">
            <div className="flex h-[19.8px] w-full items-center gap-[12px]">
              <span className="h-[2px] w-[28px] shrink-0 bg-[#0891b2]" />
              <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0891b2]">
                Company / Contact
              </p>
            </div>
            <h1 className="w-full font-dm-serif text-[42px] font-normal leading-[43.68px] text-[#0b1b33] [word-break:break-word]">
              Reach the right
              <br />
              Zoiko iD team.
            </h1>
            <div className="w-full max-w-[640px] pb-[13.19px] pt-[8.35px]">
              <p className="w-full font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82] [word-break:break-word]">
                Choose the reason you are contacting us so
                <br />
                your request reaches the appropriate team.
                <br />
                For identity-platform evaluation, technical
                <br />
                help, security matters and privacy enquiries,
                <br />
                use the dedicated routes listed below. We will
                <br />
                not ask you to include passwords, secret keys
                <br />
                or unnecessary personal data.
              </p>
            </div>
            <div className="w-full max-w-[640px] border-l-[3px] border-solid border-[#0891b2] pb-[4.275px] pl-[18px] pt-[2.895px]">
              <p className="whitespace-nowrap font-manrope text-[16px] leading-[26.4px] text-[#334155] [word-break:break-word]">
                Your enquiry type decides the next route.
                <br />
                Specialist routes come first. No response
                <br />
                time is promised on this page.
              </p>
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-[14px] pt-[21.21px]">
              <Link
                href="#routes"
                className="flex h-[56.75px] min-h-[48px] w-[252.05px] items-center rounded-[8px] border border-solid border-transparent bg-[#0b1b33] pl-[26px] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0891b2]"
              >
                <span className="w-[172.125px] whitespace-nowrap font-manrope text-[15px] font-bold leading-[24.75px] text-white">
                  Choose an enquiry type
                </span>
                <Image
                  src="/contact/mobile-icon-arrow.svg"
                  width={18}
                  height={18}
                  alt=""
                  className="ml-[8px] size-[18px] shrink-0"
                />
              </Link>
              <Link
                href="/security-contact"
                className="flex min-h-[48px] items-center rounded-[8px] border border-solid border-[#0b1b33] px-[26px] py-[15px] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0891b2]"
              >
                <span className="whitespace-nowrap font-manrope text-[15px] font-bold leading-[24.75px] text-[#0b1b33]">
                  Explore Help &amp; Support
                </span>
              </Link>
            </div>
            <div className="w-full pt-[7.2px]">
              <p className="w-full font-manrope text-[13px] font-normal leading-[21.45px] text-[#5b6b82] [word-break:break-word]">
                A general enquiry form appears only once it is approved
                <br />
                and verified.
              </p>
            </div>
          </div>

          <div className="relative flex w-full flex-col items-start rounded-[18px] border border-solid border-[#d9e1ec] bg-white p-[36px]">
            <p className="w-full font-manrope text-[12px] font-bold uppercase leading-[16.2px] tracking-[1.68px] text-[#5b6b82] [word-break:break-word]">
              How your enquiry is routed
            </p>
            {steps.map((s) => (
              <div key={s.n} className={`relative w-full shrink-0 ${s.wrap}`}>
                <div
                  className={`absolute left-0 flex size-[44px] items-center justify-center rounded-[22px] bg-[#0b1b33] ${s.circle}`}
                >
                  <span className="font-manrope text-[15px] font-extrabold leading-[24.75px] text-white">
                    {s.n}
                  </span>
                </div>
                {s.line && (
                  <div
                    className={`absolute bottom-0 left-[21px] w-[2px] bg-[#d9e1ec] ${s.line}`}
                  />
                )}
                <div
                  className={`absolute left-[60px] right-0 flex flex-col items-start ${s.gap} ${s.textTop}`}
                >
                  <p className="whitespace-nowrap font-manrope text-[16px] font-bold leading-[26.4px] text-[#0b1b33] [word-break:break-word]">
                    {s.title}
                  </p>
                  <p className="w-full font-manrope text-[14px] font-normal leading-[23.1px] text-[#5b6b82] [word-break:break-word]">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-[24px]">
          {photos.map((p) => (
            <div key={p.src} className="relative h-[200px] w-full shrink-0 overflow-hidden rounded-[14px]">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 1023px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
