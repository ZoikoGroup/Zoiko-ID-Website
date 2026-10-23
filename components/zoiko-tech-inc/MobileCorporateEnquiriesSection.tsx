const enquiries = [
  { title: "Product sales", body: "Evaluation of the Zoiko iD platform." },
  { title: "Corporate enquiry", body: "General questions about Zoiko Tech Inc." },
  { title: "Security and privacy", body: "Security or privacy matters, routed separately." },
  { title: "Careers", body: "Applicant enquiries. No open roles are implied." },
  { title: "Media or partnerships", body: "Press and partnership enquiries." },
];

export default function MobileCorporateEnquiriesSection() {
  return (
    <section id="teams" className="lg:hidden w-full bg-[#f7f8fa] px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[12px]">
        <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0891b2]">
          Corporate enquiries
        </p>
        <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
          Need to reach the right team?
        </h2>
        <p className="max-w-[680px] pt-[1px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82]">
          <span>Select your enquiry type and use the approved<br />
contact route. Destinations marked pending are<br />
not yet verified, so they do not link anywhere.</span>
        </p>
        <ul className="flex w-full flex-col gap-[24px] border-t-2 border-solid border-[#2563eb] pt-[28px]">
          {enquiries.map((e) => (
            <li key={e.title} className="flex flex-col gap-[6px] pr-[20px] pt-[25px]">
              <h3 className="font-manrope text-[15px] font-bold leading-[24.75px] text-[#2563eb]">{e.title}</h3>
              <p className="font-manrope text-[13px] font-normal leading-[21.45px] text-[#5b6b82]">{e.body}</p>
              <p className="pt-[5px] font-manrope text-[12px] font-bold leading-[19.8px] text-[#92400e]">
                Route pending registry
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
