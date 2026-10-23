const items = [
  { title: "Use case", body: "The business problem you are solving." },
  { title: "Expected actor types", body: "Which people, services and agents you expect." },
  { title: "Company context", body: "Your sector and the teams involved." },
  { title: "Implementation stage", body: "Early evaluation, pilot planning or rollout planning." },
  { title: "Environment complexity (optional)", body: "A rough description, not a full inventory." },
  { title: "Questions for the team", body: "Anything the evaluation team should address." },
];

export default function DesktopPrepareSection() {
  return (
    <section
      id="section-07"
      className="flex w-full flex-col items-start gap-[36px] border-b border-solid border-[#e2e8f0] pb-[105px]"
    >
      <div className="flex w-full flex-col items-start">
        <p className="font-dm-serif text-[96px] font-normal leading-[96px] text-[#e0f2fe]">07</p>
        <h2 className="w-full pb-[0.835px] font-dm-serif text-[52px] font-normal leading-[57.9px] text-[#07111f]">
          Questions to prepare before you contact us
        </h2>
        <p className="max-w-[720px] font-manrope text-[17px] font-normal leading-[28px] text-[#64748b]">
          Do not include secrets, credentials, regulated records or identifiable customer data.
        </p>
      </div>
      <ul className="grid w-full grid-cols-2 gap-x-[50px]">
        {items.map((i) => (
          <li
            key={i.title}
            className="relative flex flex-col items-start gap-[3.75px] border-b border-solid border-[#e2e8f0] pb-[14px] pl-[28px] pt-[13px]"
          >
            <span aria-hidden className="absolute left-0 top-[22px] size-[8px] rounded-[4px] bg-[#22b8d6]" />
            <p className="font-manrope text-[15px] font-normal leading-[24.75px] text-[#334155]">{i.title}</p>
            <p className="w-full font-manrope text-[13px] font-normal leading-[21.45px] text-[#64748b]">{i.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
