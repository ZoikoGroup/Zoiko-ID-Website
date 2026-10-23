import Image from "next/image";
import Link from "next/link";

const steps: {
  n: string;
  rowH: string;
  circleTop: string;
  line?: string;
  textTop: string;
  textPy: string;
  gap: string;
  title: string;
  titleNowrap: boolean;
  body: React.ReactNode;
}[] = [
  {
    n: "1",
    rowH: "h-[118px]",
    circleTop: "top-[22px]",
    line: "top-[66px] bottom-[-0.48px]",
    textTop: "top-[21px]",
    textPy: "py-[8px]",
    gap: "gap-[1.39px]",
    title: "Choose the reason",
    titleNowrap: true,
    body: "Select the category that matches your question.",
  },
  {
    n: "2",
    rowH: "h-[115px]",
    circleTop: "top-0",
    line: "top-[44px] bottom-[0.42px]",
    textTop: "top-[-1px]",
    textPy: "py-[9px]",
    gap: "gap-[1.435px]",
    title: "Follow the specialist route",
    titleNowrap: true,
    body: (
      <>
        Each category opens a destination owned by the team that{" "}
        <br className="max-xl:hidden" />
        handles it.
      </>
    ),
  },
  {
    n: "3",
    rowH: "h-[116px]",
    circleTop: "top-0",
    line: "top-[44px] bottom-[-0.48px]",
    textTop: "top-[-1px]",
    textPy: "py-[10px]",
    gap: "gap-[1.39px]",
    title: "Security and privacy never use the general form",
    titleNowrap: false,
    body: "High-risk requests go to their own routes.",
  },
  {
    n: "4",
    rowH: "h-[123px]",
    circleTop: "top-0",
    textTop: "top-[-1px]",
    textPy: "py-[10px]",
    gap: "gap-[1.435px]",
    title: "Receipt only after the server confirms",
    titleNowrap: false,
    body: (
      <>
        A confirmation appears only when the request is durably{" "}
        <br className="max-xl:hidden" />
        accepted.
      </>
    ),
  },
];

export default function DesktopHeroSection() {
  return (
    <section className="relative hidden w-full overflow-hidden bg-[#071426] px-[160px] pb-[105px] pt-[221px] lg:block -mt-[116px] min-h-[971px]">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(7,20,38,0.9)] to-[rgba(7,20,38,0.95)]" />
        <Image
          src="/contact/desktop-hero-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative flex w-full items-center justify-center gap-[60px]">
        <div className="flex min-w-px flex-1 flex-col items-start gap-[14px]">
          <h1 className="w-full max-w-[644px] pb-[0.69px] pt-[4.9px] font-dm-serif text-[72px] font-normal leading-[82.8px] text-white">
            Reach the right <br className="max-xl:hidden" />
            Zoiko iD team.
          </h1>
          <p className="w-full pb-[0.77px] pt-[8.86px] font-manrope text-[17.6px] font-normal leading-[29.92px] text-[#cbd5e1]">
            Choose the reason you are contacting us so your request reaches{" "}
            <br className="max-xl:hidden" />
            the appropriate team. For identity-platform evaluation, technical help,{" "}
            <br className="max-xl:hidden" />
            security matters and privacy enquiries, use the dedicated routes{" "}
            <br className="max-xl:hidden" />
            listed below. We will not ask you to include passwords, secret keys{" "}
            <br className="max-xl:hidden" />
            or unnecessary personal data.
          </p>
          <div className="flex min-h-[77.8px] w-full flex-wrap items-start gap-[14px] pt-[22.8px]">
            <Link
              href="#routes"
              className="flex min-h-[44px] items-center gap-[10px] self-stretch rounded-[8px] bg-[#2563eb] px-[24px] py-[14px] font-manrope text-[15px] font-bold leading-[24px] whitespace-nowrap text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
            >
              Choose an enquiry type
            </Link>
            <Link
              href="/identity-guides"
              className="flex min-h-[44px] items-center gap-[10px] self-stretch rounded-[8px] border border-solid border-[rgba(255,255,255,0.8)] px-[24px] py-[14px] font-manrope text-[15.2px] font-bold leading-[25px] whitespace-nowrap text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
            >
              Explore Help &amp; Support
            </Link>
          </div>
        </div>

        <div className="flex w-[453px] shrink-0 flex-col items-start gap-[12px] rounded-[22px] bg-[#f1f5f9] p-[34px]">
          <div className="flex h-[571px] w-full flex-col items-start rounded-[18px] border border-solid border-[#d9e1ec] bg-white p-[36px]">
            <h2 className="w-full font-manrope text-[12px] font-bold uppercase leading-[16.2px] tracking-[1.68px] text-[#5b6b82]">
              How your enquiry is routed
            </h2>
            <ol className="w-full">
              {steps.map((s) => (
                <li key={s.n} className={`relative w-full shrink-0 ${s.rowH}`}>
                  <span
                    className={`absolute left-0 flex size-[44px] items-center justify-center rounded-full bg-[#0b1b33] font-manrope text-[15px] font-extrabold leading-[24.75px] text-white ${s.circleTop}`}
                  >
                    {s.n}
                  </span>
                  {s.line && (
                    <span
                      aria-hidden
                      className={`absolute left-[21px] w-[2px] bg-[#d9e1ec] ${s.line}`}
                    />
                  )}
                  <div
                    className={`absolute left-[60px] right-0 flex flex-col items-start ${s.gap} ${s.textPy} ${s.textTop}`}
                  >
                    <h3
                      className={`w-full font-manrope text-[16px] font-bold leading-[26.4px] text-[#0b1b33] ${s.titleNowrap ? "whitespace-nowrap" : ""}`}
                    >
                      {s.title}
                    </h3>
                    <p
                      className={`w-full font-manrope text-[14px] font-normal leading-[23.1px] text-[#5b6b82]`}
                    >
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
