import Image from "next/image";

const faqs = [
  { q: "Are Zoiko iD prices public?", a: "Not in this layout. Public prices, units and plans are shown only when formally published. Otherwise, scope is discussed with sales." },
  { q: "What affects a proposal?", a: "Actor classes, products and capabilities, integration pattern, identity, authority and evidence scope, security and deployment needs, and service obligations." },
  { q: "Is there a free plan?", a: "No free plan is stated in any published source. Ask sales about your evaluation options." },
  { q: "Can we evaluate machine and agent identity?", a: "These are part of the capability families above. Which parts apply to your evaluation is confirmed in the conversation with sales." },
  { q: "Does requesting a conversation create a commitment?", a: "No. An inquiry is not a contract, an offer or an acceptance of one. It means the request was received." },
  { q: "What if my region or capability is unsupported?", a: "We will tell you plainly what is and is not available for your scope. Regional and capability availability is confirmed before any commitment." },
];

export default function MobileFaqSection() {
  return (
    <section id="section-10" className="w-full scroll-mt-20 px-[11px] py-[60px]">
      <div className="mx-auto w-full max-w-[560px]">
        <p className="font-dm-serif text-[64px] font-normal leading-[64px] text-[#e0f2fe]">10</p>
        <h2 className="font-dm-serif text-[30px] font-normal leading-[34.5px] text-[#2563eb]">
          Questions and answers
        </h2>
        <div className="relative mt-[6px] h-[283px] w-full overflow-hidden">
          <Image
            src="/pricing-overview/mobile-pricing-public.webp"
            alt=""
            fill
            sizes="(max-width: 560px) 100vw, 560px"
            className="object-cover"
          />
        </div>
        <dl className="grid grid-cols-2 items-start gap-x-[60px] pt-[39px]">
          {faqs.map((f) => (
            <div
              key={f.q}
              className="flex flex-col gap-[9px] border-t border-solid border-[#e2e8f0] pb-[22px] pt-[21px]"
            >
              <dt className="font-manrope text-[17px] font-bold leading-[28px] text-[#2563eb]">{f.q}</dt>
              <dd className="font-manrope text-[15px] font-normal leading-[24.75px] text-[#64748b]">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
