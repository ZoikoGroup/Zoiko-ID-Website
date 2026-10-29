import Image from "next/image";
import type { ReactNode } from "react";

/* ===== Desktop layout (>= lg) ===== */


const dCards: { title: string; image: string; body: ReactNode; question: string }[] = [
  {
    title: "Identity",
    image: "/continuous-trust/desktop-model-identity.webp",
    body: (
      <>
        Identifies the actor: a person, organization, <br className="max-xl:hidden" />
        service, machine or AI agent.
      </>
    ),
    question: "Who is acting?",
  },
  {
    title: "Authority",
    image: "/continuous-trust/desktop-model-authority.webp",
    body: (
      <>
        Bounds what the actor may do, for whom, for <br className="max-xl:hidden" />
        how long and on which resource.
      </>
    ),
    question: "What may they do?",
  },
  {
    title: "Evidence",
    image: "/continuous-trust/desktop-model-evidence.webp",
    body: (
      <>
        Explains the decision, with its source, time, <br className="max-xl:hidden" />
        actor and governing policy version.
      </>
    ),
    question: "Why was it decided?",
  },
];



function DesktopModel() {
  return (
    <section className="flex w-full flex-col items-start gap-[60px] bg-[#f4f6fa] px-[160px] py-[105px]">
      <div className="flex w-full flex-col items-start gap-[15px]">
        <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#07111f]">
          Identity, authority and evidence
        </h2>
        <p className="max-w-[720px] pt-[1.1px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] xl:whitespace-nowrap">
          Each word names a different job. Identity identifies the actor, authority bounds what that <br className="max-xl:hidden" />
          actor may do, and evidence explains a decision afterwards. Keeping them apart is what <br className="max-xl:hidden" />
          makes revocation possible.
        </p>
      </div>
      <div className="grid w-full grid-cols-3 items-stretch gap-[32px]">
        {dCards.map((c) => (
          <article
            key={c.title}
            className="flex flex-col items-center gap-[15.9px] rounded-[16px] border border-solid border-[#cfdaec] bg-white p-[32px]"
          >
            <div className="relative h-[218px] w-full rounded-[16px] border-4 border-solid border-white">
              <Image src={c.image} alt="" fill sizes="347px" className="rounded-[16px] object-cover" />
            </div>
            <div className="flex flex-col items-center gap-[16px]">
              <h3 className="pt-[8px] text-center font-manrope text-[20px] font-bold leading-[28px] text-[#071121]">
                {c.title}
              </h3>
              <p className="max-w-[300px] text-center font-manrope text-[15px] font-normal leading-[25.5px] text-[#5b6b82] xl:whitespace-nowrap">
                {c.body}
              </p>
              <p className="text-center font-manrope text-[14px] font-bold leading-[23.8px] text-[#22b8d6]">
                {c.question}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ===== Mobile layout (< lg) ===== */


const mITEMS: { img: string; title: string; desc: React.ReactNode; q: string }[] = [
  {
    img: "/continuous-trust/mobile-model-identity.webp",
    title: "Identity",
    desc: (
      <>
        Identifies the actor: a person, organization,
        <br />
        service, machine or AI agent.
      </>
    ),
    q: "Who is acting?",
  },
  {
    img: "/continuous-trust/mobile-model-authority.webp",
    title: "Authority",
    desc: (
      <>
        Bounds what the actor may do, for whom, for
        <br />
        how long and on which resource.
      </>
    ),
    q: "What may they do?",
  },
  {
    img: "/continuous-trust/mobile-model-evidence.webp",
    title: "Evidence",
    desc: (
      <>
        Explains the decision, with its source, time,
        <br />
        actor and governing policy version.
      </>
    ),
    q: "Why was it decided?",
  },
];



function MobileModel() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] bg-[#f4f6fa] px-[22px] pb-[60px] pt-[67.31px] lg:hidden">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[14.8px]">
        <div className="flex items-center gap-[12px]">
          <span className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6] whitespace-nowrap">
            03 · The model
          </p>
        </div>
        <h2 className="pb-[0.745px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#071121]">
          Identity, authority and
          <br />
          evidence
        </h2>
        <p className="w-full max-w-[720px] pt-[1.2px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] whitespace-nowrap">
          Each word names a different job. Identity
          <br />
          identifies the actor, authority bounds what
          <br />
          that actor may do, and evidence explains a
          <br />
          decision afterwards. Keeping them apart is
          <br />
          what makes revocation possible.
        </p>
        <ul className="flex w-full flex-col gap-[32px] pt-[17.2px]">
          {mITEMS.map((it) => (
            <li key={it.title} className="flex w-full flex-col items-center gap-[15.9px]">
              <div className="relative size-[200px] shrink-0 overflow-hidden rounded-full border-[6px] border-solid border-white shadow-[0px_18px_40px_0px_rgba(11,27,51,0.16)]">
                <Image src={it.img} alt="" fill sizes="200px" className="object-cover" />
              </div>
              <h3 className="pt-[8px] text-center font-manrope text-[20px] font-bold leading-[28px] text-[#071121]">
                {it.title}
              </h3>
              <p className="max-w-[300px] text-center font-manrope text-[15px] font-normal leading-[25.5px] text-[#5b6b82] whitespace-nowrap">
                {it.desc}
              </p>
              <p className="text-center font-manrope text-[14px] font-bold leading-[23.8px] text-[#22b8d6] whitespace-nowrap">
                {it.q}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function ModelSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopModel />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobileModel />
      </div>
    </>
  );
}
