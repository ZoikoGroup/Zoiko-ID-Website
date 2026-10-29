import Image from "next/image";
import type { ReactNode } from "react";

/* ===== Desktop layout (>= lg) ===== */


const dITEMS: { q: string; a: ReactNode }[] = [
  {
    q: "What changes trust?",
    a: "New observations about the actor or its context, such as a changed source or a sponsor’s status, can change the trust assessment.",
  },
  {
    q: "What can be revoked?",
    a: "Credentials, sessions and delegated grants, each with its own rules and scope.",
  },
  {
    q: "Who authorizes a change?",
    a: (
      <>
        The sponsor or issuer for their own grants, and an authorized <br className="max-xl:hidden" />
        reviewer for referred decisions.
      </>
    ),
  },
  {
    q: "How fast does revocation take effect?",
    a: "That depends on the credential, the session and the integration. No latency is promised on this page.",
  },
];



function DesktopAnswers() {
  return (
    <section className="flex w-full flex-col items-start gap-[60px] bg-[#f4f6fa] px-[160px] py-[105px]">
      <div className="flex w-full flex-col gap-[15px]">
        <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#071121]">Direct answers</h2>
        <p className="max-w-[720px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] xl:whitespace-nowrap">
          These answers describe the model. They make no promise about timing, coverage or live{" "}
          <br className="max-xl:hidden" />
          capability, which depend on the approved product scope.
        </p>
      </div>
      <ul className="m-0 grid w-full list-none grid-cols-2 items-stretch gap-[24px] p-0">
        {dITEMS.map((it) => (
          <li
            key={it.q}
            className="flex min-h-[153px] items-start gap-[26px] rounded-[20px] border border-[#d9e1ec] bg-white px-[24px] pb-[24px] pt-[23px]"
          >
            <div className="mt-[1px] flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8]">
              <Image src="/continuous-trust/desktop-icon-info-2.svg" width={20} height={20} alt="" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-[6.9px]">
              <h3 className="m-0 font-manrope text-[18px] font-bold leading-[25.2px] text-[#071121]">{it.q}</h3>
              <p className="m-0 pb-[0.69px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">
                {it.a}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ===== Mobile layout (< lg) ===== */


const mFaqs: { title: React.ReactNode; body: React.ReactNode; h: string; gap: string }[] = [
  {
    title: "What changes trust?",
    body: (
      <>
        New observations about the actor or
        <br />
        its context, such as a changed
        <br />
        source or a sponsor’s status, can
        <br />
        change the trust assessment.
      </>
    ),
    h: "min-h-[178.38px]",
    gap: "gap-[6.685px]",
  },
  {
    title: "What can be revoked?",
    body: (
      <>
        Credentials, sessions and delegated
        <br />
        grants, each with its own rules and
        <br />
        scope.
      </>
    ),
    h: "min-h-[154.58px]",
    gap: "gap-[6.795px]",
  },
  {
    title: (
      <>
        Who authorizes a
        <br />
        change?
      </>
    ),
    body: (
      <>
        The sponsor or issuer for their own
        <br />
        grants, and an authorized reviewer
        <br />
        for referred decisions.
      </>
    ),
    h: "min-h-[179.77px]",
    gap: "gap-[6.79px]",
  },
  {
    title: (
      <>
        How fast does revocation
        <br />
        take effect?
      </>
    ),
    body: (
      <>
        That depends on the credential, the
        <br />
        session and the integration. No
        <br />
        latency is promised on this page.
      </>
    ),
    h: "min-h-[179.77px]",
    gap: "gap-[6.795px]",
  },
];



function MobileQuestions() {
  return (
    <section className="w-full border-b border-[#d9e1ec] bg-[#f4f6fa] px-[22px] pb-[60px] pt-[67.31px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[14.9px]">
        <div className="flex items-center gap-[12px]">
          <div className="h-[2px] w-[28px] bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] whitespace-nowrap text-[#22b8d6]">
            15 · Questions
          </p>
        </div>
        <h2 className="font-dm-serif pb-[0.83px] text-[32px] font-normal leading-[35.84px] text-[#071121]">
          Direct answers
        </h2>
        <p className="font-manrope w-full max-w-[720px] text-[18px] font-normal leading-[30.6px] text-[#5b6b82] whitespace-nowrap">
          These answers describe the model. They
          <br />
          make no promise about timing, coverage
          <br />
          or live capability, which depend on the
          <br />
          approved product scope.
        </p>
        <div className="flex w-full flex-col gap-[24px] pt-[17.1px]">
          {mFaqs.map((f, i) => (
            <article
              key={i}
              className={`relative flex w-full items-start rounded-[20px] border border-[#d9e1ec] bg-white px-[24px] pt-[23px] ${f.h}`}
            >
              <div className="absolute left-[24px] top-[24px] flex size-[42px] items-center justify-center rounded-[12px] bg-[#e4f3f8]">
                <Image src="/continuous-trust/mobile-icon-info-2.svg" width={20} height={20} alt="" />
              </div>
              <div className={`ml-[68px] flex min-w-0 flex-1 flex-col ${f.gap}`}>
                <h3 className="font-manrope text-[18px] font-bold leading-[25.2px] text-[#071121]">
                  {f.title}
                </h3>
                <p className="font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82] whitespace-nowrap">
                  {f.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AnswersSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopAnswers />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobileQuestions />
      </div>
    </>
  );
}
