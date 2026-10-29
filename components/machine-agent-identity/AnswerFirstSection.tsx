import Image from "next/image";
import type { ReactNode } from "react";

/* ===== Shared content ===== */

const cardTitles = ["Identity", "Authority", "Evidence"] as const;

/* ===== Desktop layout (>= lg) ===== */

const dCards: { eyebrow: string; body: ReactNode }[] = [
  {
    eyebrow: "Who or what?",
    body: (
      <>
        Identifies the actor and its owner. Identity alone <br className="max-xl:hidden" />
        never grants permission.
      </>
    ),
  },
  {
    eyebrow: "What may it do?",
    body: (
      <>
        Bounds the actions, resources, purpose and time <br className="max-xl:hidden" />
        that the sponsor has approved.
      </>
    ),
  },
  {
    eyebrow: "Why was it decided?",
    body: (
      <>
        Explains each decision to authorized reviewers, <br className="max-xl:hidden" />
        minimizing sensitive detail.
      </>
    ),
  },
];

function DesktopAnswerFirst() {
  return (
    <section className="flex w-full flex-col items-start gap-[60px] bg-white px-[160px] py-[105px]">
      <div className="flex w-full flex-col items-start gap-[15px]">
        <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#07111f]">
          Three parts, each answering one question
        </h2>
        <p className="pt-[1.1px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] xl:whitespace-nowrap">
          Identity says who or what is acting. Authority says what it may do. Evidence explains a <br className="max-xl:hidden" />
          decision to a reviewer afterwards. Each card below states its job and links to the canonical <br className="max-xl:hidden" />
          guide for it.
        </p>
      </div>
      <div className="flex w-full items-stretch justify-center gap-[24px]">
        {dCards.map((c, i) => (
          <article
            key={c.eyebrow}
            className="relative flex min-w-px flex-[1_0_0] flex-col items-start overflow-clip rounded-[22px] border border-solid border-[#d9e1ec] bg-white"
          >
            <div className="relative h-[150px] w-full shrink-0 overflow-hidden">
              {i === 0 ? (
                <>
                  <Image
                    src="/machine-agent-identity/desktop-answer-who-thumb.webp"
                    alt=""
                    fill
                    sizes="360px"
                    className="object-cover"
                  />
                  <div className="absolute left-0 top-[-18px] h-[218px] w-full rounded-[16px] border-4 border-solid border-white">
                    <Image
                      src="/machine-agent-identity/desktop-answer-who.webp"
                      alt=""
                      fill
                      sizes="360px"
                      className="rounded-[16px] object-cover"
                    />
                  </div>
                </>
              ) : (
                <Image
                  src={
                    i === 1
                      ? "/machine-agent-identity/desktop-answer-authority.webp"
                      : "/machine-agent-identity/desktop-answer-evidence.webp"
                  }
                  alt=""
                  fill
                  sizes="360px"
                  className="object-cover"
                />
              )}
            </div>
            <div className="flex min-h-[165.17px] w-full flex-col items-start px-[24px] pt-[24px]">
              <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] whitespace-nowrap text-[#0e7490]">
                {c.eyebrow}
              </p>
              <h3 className="mt-[8px] h-[33.19px] font-manrope text-[18px] font-bold leading-[25.2px] whitespace-nowrap text-[#071121]">
                {cardTitles[i]}
              </h3>
              <p className="mt-[6.9px] pb-[0.69px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82] xl:whitespace-nowrap">
                {c.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ===== Mobile layout (< lg) ===== */

const mCards: { eyebrow: ReactNode; image: string; body: ReactNode }[] = [
  {
    eyebrow: (
      <>
        Who
        <br />
        or
        <br />
        what?
      </>
    ),
    image: "/machine-agent-identity/mobile-answer-who.webp",
    body: (
      <>
        Identifies
        <br />
        the
        <br />
        actor
        <br />
        and its
        <br />
        owner.
        <br />
        Identity
        <br />
        alone
        <br />
        never
        <br />
        grants
        <br />
        permission.
      </>
    ),
  },
  {
    eyebrow: (
      <>
        What
        <br />
        may it
        <br />
        do?
      </>
    ),
    image: "/machine-agent-identity/mobile-answer-authority.webp",
    body: (
      <>
        Bounds
        <br />
        the
        <br />
        actions,
        <br />
        resources,
        <br />
        purpose
        <br />
        and
        <br />
        time
        <br />
        that the
        <br />
        sponsor
        <br />
        has
        <br />
        approved.
      </>
    ),
  },
  {
    eyebrow: (
      <>
        Why
        <br />
        was it
        <br />
        decided?
      </>
    ),
    image: "/machine-agent-identity/mobile-answer-evidence.webp",
    body: (
      <>
        Explains
        <br />
        each
        <br />
        decision
        <br />
        to
        <br />
        authorized
        <br />
        reviewers,
        <br />
        minimizing
        <br />
        sensitive
        <br />
        detail.
      </>
    ),
  },
];

function MobileAnswerFirst() {
  return (
    <section className="flex w-full flex-col items-start gap-[14.9px] border-b border-solid border-[#d9e1ec] px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[14.9px]">
        <div className="flex items-center gap-[12px] pr-[70.97px]">
          <div className="h-[2px] w-[27.03px] shrink-0 bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] whitespace-nowrap text-[#22b8d6]">
            04 · Identity, authority and
            <br />
            evidence
          </p>
        </div>
        <h2 className="w-full pb-[0.745px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#071121]">
          Three parts, each
          <br />
          answering one question
        </h2>
        <p className="w-full max-w-[720px] pt-[1.1px] font-manrope text-[18px] font-normal leading-[30.6px] whitespace-nowrap text-[#5b6b82]">
          Identity says who or what is acting.
          <br />
          Authority says what it may do. Evidence
          <br />
          explains a decision to a reviewer
          <br />
          afterwards. Each card below states its job
          <br />
          and links to the canonical guide for it.
        </p>
        <div className="flex w-full items-stretch justify-center gap-[24px] pt-[33.1px]">
          {mCards.map((c, i) => (
            <article
              key={cardTitles[i]}
              className="relative flex min-w-px flex-[1_0_0] flex-col items-start overflow-clip rounded-[22px] border border-solid border-[#d9e1ec] bg-white"
            >
              <div className="relative h-[150px] w-full shrink-0 overflow-hidden">
                <Image src={c.image} alt="" fill sizes="(max-width: 560px) 30vw, 180px" className="object-cover" />
              </div>
              <div className="flex w-full flex-col items-start px-[24px] pt-[23.39px]">
                <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] whitespace-nowrap text-[#0e7490]">
                  {c.eyebrow}
                </p>
                <h3 className="mt-[8.58px] h-[33.19px] font-manrope text-[18px] font-bold leading-[25.2px] whitespace-nowrap text-[#071121]">
                  {cardTitles[i]}
                </h3>
                <p className="mt-[7.09px] pb-[0.885px] font-manrope text-[14px] font-normal leading-[23.8px] whitespace-nowrap text-[#5b6b82]">
                  {c.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AnswerFirstSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopAnswerFirst />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobileAnswerFirst />
      </div>
    </>
  );
}
