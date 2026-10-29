import Image from "next/image";

/* ===== Shared content ===== */

const failureIcons = ["search", "clock", "x", "alert", "user", "refresh"];

const failureTitles = [
  "No results",
  "Expired mandate",
  "Denied",
  "Source unavailable",
  "Session expired",
  "Form not confirmed",
];

/* ===== Desktop layout (>= lg) ===== */

const dFailureBodies: React.ReactNode[] = [
  "Nothing matches. Try a broader term or browse the topics.",
  <>
    The example shows expiry and the renewal route. It cannot show<br className="max-xl:hidden" />{" "}
    allow.
  </>,
  "The reason shown is safe and does not reveal policy detail.",
  "The system says it cannot decide, and offers the support route.",
  "Sign in again. Entries you made are kept.",
  "Nothing is recorded as sent until the server confirms it.",
];

function DesktopFailure() {
  return (
    <section className="flex w-full flex-col items-start gap-[60px] bg-[#f4f6fa] px-[160px] py-[105px]">
      <div className="flex w-full flex-col gap-[15px]">
        <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#071121]">
          What happens when something cannot be decided
        </h2>
        <p className="w-full max-w-[720px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] xl:whitespace-nowrap">
          Each failure is explained in plain language, with a safe next step. A failed or unknown<br className="max-xl:hidden" />{" "}
          result is never reported as success.
        </p>
      </div>
      <ul className="grid w-full grid-cols-2 grid-rows-[130.78px_106.98px_106.98px] gap-[20px]">
        {failureTitles.map((title, i) => (
          <li
            key={title}
            className="flex items-start rounded-[20px] border border-solid border-[#d9e1ec] bg-white px-[24px]"
          >
            <div className="mt-[24px] flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8]">
              <Image
                src={`/machine-agent-identity/desktop-icon-${failureIcons[i]}.svg`}
                width={20}
                height={20}
                alt=""
              />
            </div>
            <div className="ml-[26px] mt-[23px] flex min-w-0 flex-1 flex-col gap-[7px]">
              <h3 className="font-manrope text-[18px] font-bold leading-[25.2px] text-[#071121]">
                {title}
              </h3>
              <p className="pb-[0.8px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">
                {dFailureBodies[i]}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ===== Mobile layout (< lg) ===== */

const mFailureBodies: React.ReactNode[] = [
  <>
    Nothing matches. Try a broader term<br />
    or browse the topics.
  </>,
  <>
    The example shows expiry and the<br />
    renewal route. It cannot show allow.
  </>,
  <>
    The reason shown is safe and does<br />
    not reveal policy detail.
  </>,
  <>
    The system says it cannot decide,<br />
    and offers the support route.
  </>,
  <>
    Sign in again. Entries you made are<br />
    kept.
  </>,
  <>
    Nothing is recorded as sent until the<br />
    server confirms it.
  </>,
];

function MobileFailure() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] bg-[#f4f6fa] px-[22px] pb-[60px] pt-[67.31px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[14.7px]">
        <div className="flex items-center gap-[12px]">
          <div className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] whitespace-nowrap text-[#22b8d6]">
            17 · Failure and recovery
          </p>
        </div>
        <h2 className="w-full pb-[0.65px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#071121]">
          What happens when
          <br />
          something cannot be
          <br />
          decided
        </h2>
        <p className="w-full max-w-[720px] pt-[1.31px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
          Each failure is explained in plain language,
          <br />
          with a safe next step. A failed or unknown
          <br />
          result is never reported as success.
        </p>
        <ul className="flex w-full flex-col gap-[20px] pt-[33.3px]">
          {failureTitles.map((title, i) => (
            <li
              key={title}
              className="flex h-[130.78px] w-full items-start rounded-[20px] border border-solid border-[#d9e1ec] bg-white px-[24px]"
            >
              <div className="mt-[24px] flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8]">
                <Image
                  src={`/machine-agent-identity/mobile-icon-${failureIcons[i]}.svg`}
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
              <div className="ml-[26px] mt-[23px] flex min-w-0 flex-1 flex-col gap-[6.9px]">
                <h3 className="font-manrope text-[18px] font-bold leading-[25.2px] text-[#071121]">
                  {title}
                </h3>
                <p className="pb-[0.69px] font-manrope text-[14px] font-normal leading-[23.8px] whitespace-nowrap text-[#5b6b82]">
                  {mFailureBodies[i]}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function FailureSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopFailure />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobileFailure />
      </div>
    </>
  );
}
