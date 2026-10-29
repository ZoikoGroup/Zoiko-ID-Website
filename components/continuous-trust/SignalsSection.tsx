import Image from "next/image";
import type { ReactNode } from "react";

/* ===== Desktop layout (>= lg) ===== */


type dChip = { label: string; cls: string };



const dStateChips: dChip[] = [
  { label: "Current", cls: "border-[#86efac] bg-[#f0fdf4] text-[#166534]" },
  { label: "Stale", cls: "border-[#fcd34d] bg-[#fffbeb] text-[#92400e]" },
  { label: "Unknown", cls: "border-[#cbd5e1] bg-[#f8fafc] text-[#334155]" },
  { label: "Unavailable", cls: "border-[#fca5a5] bg-[#fef2f2] text-[#991b1b]" },
];



const dCards: { icon: string; title: string; body: ReactNode; footer: ReactNode }[] = [
  {
    icon: "/continuous-trust/desktop-icon-pulse.svg",
    title: "Signal category",
    body: "The kind of context observed, with its provenance.",
    footer: (
      <div className="flex flex-wrap items-start gap-[8px] pb-[9px] pt-[5px]">
        {dStateChips.map((c) => (
          <span
            key={c.label}
            className={`rounded-full border border-solid px-[12px] py-[6px] font-manrope text-[12px] font-extrabold leading-[20.4px] ${c.cls}`}
          >
            {c.label}
          </span>
        ))}
      </div>
    ),
  },
  {
    icon: "/continuous-trust/desktop-icon-clock-1.svg",
    title: "Observed at",
    body: "A stale signal is never treated as confirmation of current trust.",
    footer: (
      <div className="flex flex-wrap items-start pb-[9px] pt-[5px]">
        <span className="rounded-full border border-solid border-[#fcd34d] bg-[#fffbeb] px-[12px] py-[6px] font-manrope text-[12px] font-extrabold leading-[20.4px] text-[#92400e]">
          Needs re-check
        </span>
      </div>
    ),
  },
  {
    icon: "/continuous-trust/desktop-icon-eye.svg",
    title: "Provenance",
    body: "Which source reported the observation, and whether that source is approved.",
    footer: (
      <span className="inline-flex rounded-full bg-[#fef3c7] px-[12px] py-[5.5px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#92400e]">
        Source list pending
      </span>
    ),
  },
  {
    icon: "/continuous-trust/desktop-icon-search.svg",
    title: "Context, not score",
    body: (
      <>
        Factors are shown together, so a reviewer can see exactly what <br className="max-xl:hidden" />
        contributed.
      </>
    ),
    footer: (
      <span className="inline-flex rounded-full bg-[#ede9fe] px-[10px] py-[5px] font-manrope text-[11px] font-extrabold uppercase leading-[18.7px] tracking-[0.88px] text-[#6d28d9]">
        Illustrative
      </span>
    ),
  },
];



function DesktopSignals() {
  return (
    <section className="flex w-full flex-col items-start gap-[60px] bg-white px-[160px] py-[105px]">
      <div className="flex w-full flex-col items-start gap-[15px]">
        <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#07111f]">
          Signals inform a decision; they do not replace it
        </h2>
        <p className="max-w-[720px] pt-[1.1px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] xl:whitespace-nowrap">
          A signal is an observation about context, such as a changed device, a new location or a <br className="max-xl:hidden" />
          sponsor’s status. Each signal carries its source, the time it was observed and how current <br className="max-xl:hidden" />
          it is. No single composite score is used to decide.
        </p>
      </div>
      <div className="grid w-full grid-cols-2 items-stretch gap-[24px]">
        {dCards.map((c) => (
          <article
            key={c.title}
            className="flex items-start gap-[32px] rounded-[22px] border border-solid border-[#d9e1ec] bg-white p-[24px]"
          >
            <div className="flex size-[56px] shrink-0 items-center justify-center rounded-[16px] bg-[#e4f3f8]">
              <Image src={c.icon} width={26} height={26} alt="" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col items-start gap-[7px]">
              <h3 className="font-manrope text-[18px] font-bold leading-[25.2px] text-[#071121]">{c.title}</h3>
              <p className="font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">{c.body}</p>
              {c.footer}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ===== Mobile layout (< lg) ===== */


const mPill = "rounded-[999px] border border-solid px-[12px] py-[6px]";


const mPillText =
  "font-manrope font-extrabold text-[12px] leading-[20.4px] whitespace-nowrap";



function MIllustrative() {
  return (
    <span className="inline-flex self-start rounded-[999px] bg-[#ede9fe] px-[10px] py-[5px] font-manrope text-[11px] font-extrabold uppercase leading-[18.7px] tracking-[0.88px] whitespace-nowrap text-[#6d28d9]">
      Illustrative
    </span>
  );
}



function MCard({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex w-full flex-col items-start gap-[15px] rounded-[22px] border border-solid border-[#d9e1ec] bg-white p-[24px]">
      <div className="flex size-[56px] shrink-0 items-center justify-center rounded-[16px] bg-[#e4f3f8]">
        <Image src={icon} width={26} height={26} alt="" />
      </div>
      <div className="flex w-full flex-col items-start gap-[6.9px]">
        <h3 className="w-full font-manrope text-[18px] font-bold leading-[25.2px] text-[#071121]">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
}



function MobileTrustSignals() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] bg-white px-[22px] pb-[60px] pt-[67.31px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[14.8px]">
        <div className="flex items-center gap-[12px]">
          <div className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] whitespace-nowrap text-[#22b8d6]">
            04 · Trust signals and context
          </p>
        </div>
        <h2 className="w-full pb-[0.745px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#071121]">
          Signals inform a decision;
          <br />
          they do not replace it
        </h2>
        <p className="w-full max-w-[720px] pt-[0.68px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] whitespace-nowrap">
          A signal is an observation about context,
          <br />
          such as a changed device, a new location
          <br />
          or a sponsor’s status. Each signal carries
          <br />
          its source, the time it was observed and
          <br />
          how current it is. No single composite
          <br />
          score is used to decide.
        </p>
        <div className="flex w-full flex-col items-start gap-[24px] pt-[17.2px]">
          <MCard icon="/continuous-trust/mobile-icon-pulse.svg" title="Signal category">
            <p className="w-full pb-[0.695px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">
              The kind of context observed, with its
              <br />
              provenance.
            </p>
            <div className="flex w-full flex-wrap gap-[10px] pb-[9.1px] pt-[5.1px]">
              <span className={`${mPill} border-[#86efac] bg-[#f0fdf4] ${mPillText} text-[#166534]`}>Current</span>
              <span className={`${mPill} border-[#fcd34d] bg-[#fffbeb] ${mPillText} text-[#92400e]`}>Stale</span>
              <span className={`${mPill} border-[#cbd5e1] bg-[#f8fafc] ${mPillText} text-[#334155]`}>Unknown</span>
              <span className={`${mPill} border-[#fca5a5] bg-[#fef2f2] ${mPillText} text-[#991b1b]`}>Unavailable</span>
            </div>
            <MIllustrative />
          </MCard>
          <MCard icon="/continuous-trust/mobile-icon-clock-1.svg" title="Observed at">
            <p className="w-full pb-[0.695px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82] whitespace-nowrap">
              A stale signal is never treated as confirmation
              <br />
              of current trust.
            </p>
            <div className="flex w-full flex-wrap items-start gap-y-[8px] pb-[9.1px] pt-[5.1px]">
              <span className={`${mPill} border-[#fcd34d] bg-[#fffbeb] ${mPillText} text-[#92400e]`}>Needs re-check</span>
            </div>
            <MIllustrative />
          </MCard>
          <MCard icon="/continuous-trust/mobile-icon-eye-1.svg" title="Provenance">
            <p className="w-full pb-[5.795px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82] whitespace-nowrap">
              Which source reported the observation, and
              <br />
              whether that source is approved.
            </p>
            <span className="inline-flex self-start rounded-[999px] bg-[#fef3c7] px-[12px] pb-[5.89px] pt-[5.5px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] whitespace-nowrap text-[#92400e]">
              Source list pending
            </span>
          </MCard>
          <MCard icon="/continuous-trust/mobile-icon-search.svg" title="Context, not score">
            <p className="w-full pb-[5.795px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82] whitespace-nowrap">
              Factors are shown together, so a reviewer can
              <br />
              see exactly what contributed.
            </p>
            <MIllustrative />
          </MCard>
        </div>
      </div>
    </section>
  );
}

export default function SignalsSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopSignals />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobileTrustSignals />
      </div>
    </>
  );
}
