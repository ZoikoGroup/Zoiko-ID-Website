const items = [
  { title: "Use case", hint: "The business problem you are solving." },
  { title: "Company context", hint: "Your sector and the teams involved." },
  { title: "Environment complexity (optional)", hint: "A rough description, not a full inventory." },
  { title: "Expected actor types", hint: "Which people, services and agents you expect." },
  { title: "Implementation stage", hint: "Early evaluation, pilot planning or rollout planning." },
  { title: "Questions for the team", hint: "Anything the evaluation team should address." },
];

export default function MobilePrepareSection() {
  return (
    <section id="section-07" className="w-full scroll-mt-20 px-[11px] py-[60px]">
      <div className="mx-auto w-full max-w-[560px] border-b border-solid border-[#e2e8f0] pb-[90px]">
        <p className="font-dm-serif text-[64px] font-normal leading-[64px] text-[#e0f2fe]">07</p>
        <h2 className="font-dm-serif text-[30px] font-normal leading-[34.5px] text-[#2563eb]">
          Questions to prepare before you contact us
        </h2>
        <p className="mt-[21.7px] max-w-[720px] font-manrope text-[17px] font-normal leading-[28px] text-[#64748b]">
          Do not include secrets, credentials, regulated records or identifiable customer data.
        </p>
        <ul className="mt-[38.7px] w-full">
          {items.map((item) => (
            <li
              key={item.title}
              className="relative flex flex-col gap-[3.75px] border-b border-solid border-[#e2e8f0] pb-[14px] pl-[28px] pt-[13px]"
            >
              <span aria-hidden="true" className="absolute left-0 top-[22px] size-[8px] rounded-[4px] bg-[#22b8d6]" />
              <span className="font-manrope text-[15px] font-normal leading-[24.75px] text-[#334155]">{item.title}</span>
              <span className="font-manrope text-[13px] font-normal leading-[21.45px] text-[#64748b]">{item.hint}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
