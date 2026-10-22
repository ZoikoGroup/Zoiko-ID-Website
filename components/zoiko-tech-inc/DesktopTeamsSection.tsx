const teams = [
  { title: "Product sales", body: "Evaluation of the Zoiko iD platform.", pb: "pb-[21.43px]", bodyMax: "" },
  { title: "Corporate enquiry", body: "General questions about Zoiko Tech Inc.", pb: "", bodyMax: "max-w-[165px]" },
  { title: "Security and privacy", body: "Security or privacy matters, routed separately.", pb: "", bodyMax: "" },
  { title: "Careers", body: <span className="xl:whitespace-nowrap">Applicant enquiries. No <br className="max-xl:hidden" />open roles are implied.</span>, pb: "", bodyMax: "" },
  { title: "Media or partnerships", body: "Press and partnership enquiries.", pb: "pb-[21.43px]", bodyMax: "" },
];

export default function DesktopTeamsSection() {
  return (
    <section id="teams" className="hidden w-full flex-col gap-[60px] bg-[#0b1b33] px-[160px] py-[105px] lg:flex">
      <div className="flex w-full flex-col gap-[11px]">
        <h2 className="font-dm-serif pb-[0.55px] text-[52px] font-normal leading-[58.6px] text-white">
          Need to reach the right team?
        </h2>
        <p className="font-manrope max-w-[680px] pt-[2.025px] text-[17px] font-normal leading-[28px] text-white">
          <span className="xl:whitespace-nowrap">Select your enquiry type and use the approved contact route. Destinations marked <br className="max-xl:hidden" />
pending are not yet verified, so they do not link anywhere.</span>
        </p>
      </div>
      <ul className="flex w-full items-start border-t-2 border-solid border-white">
        {teams.map((t) => (
          <li key={t.title} className={`flex min-w-px flex-1 flex-col items-start gap-[6px] pr-[20px] pt-[25px] ${t.pb}`}>
            <h3 className="font-manrope w-full pb-[0.75px] text-[15px] font-bold leading-[24.75px] text-white">{t.title}</h3>
            <p className={`font-manrope w-full text-[13px] font-normal leading-[21.45px] text-white ${t.bodyMax}`}>{t.body}</p>
            <p className="font-manrope w-full pb-[0.8px] pt-[5px] text-[12px] font-bold leading-[19.8px] text-[#22b8d6]">Route pending registry</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
