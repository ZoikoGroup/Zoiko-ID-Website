import Image from "next/image";

const gates = [
  { title: "Discover", text: "Read how the architecture fits." },
  { title: "Scope", text: "Choose the identity classes in view." },
  { title: "Validate", text: "Review architecture, API and trust material." },
  { title: "Govern", text: "Agree controls with security and privacy." },
  { title: "Operate", text: "Plan ongoing ownership and change." },
];

export default function DesktopFiveConceptualGatesSection() {
  return (
    <section id="gates" className="w-full bg-white px-[160px] py-[105px]">
      <div className="flex flex-col gap-[60px]">
        <div className="flex flex-col gap-[13px]">
          <h2 className="pt-[0.7px] font-dm-serif text-[52px] font-normal leading-[57.9px] text-[#07111f]">
            Five conceptual gates
          </h2>
          <p className="max-w-[760px] font-manrope text-[16px] leading-[25.6px] text-[#64748b]">
            These gates describe how an evaluation is usually structured. Each has an owner, and none commits you to a timeline or a deployment.
          </p>
        </div>
        <div className="flex items-start gap-[48px]">
          <ol className="m-0 w-[476px] shrink-0 list-none p-0">
            {gates.map((g, i) => (
              <li
                key={g.title}
                className={`flex flex-col gap-[4.1px] py-[20px] pl-[36px] ${
                  i < gates.length - 1 ? "border-b border-solid border-[#e2e8f0]" : ""
                }`}
              >
                <span className="whitespace-nowrap font-manrope text-[16px] font-bold leading-[25.6px] text-[#07111f]">
                  <span className="inline-block w-[24px]">{i + 1}.</span>
                  {g.title}
                </span>
                <span className="px-[24px] font-manrope text-[14px] leading-[22.4px] text-[#64748b]">
                  {g.text}
                </span>
              </li>
            ))}
          </ol>
          <div className="relative h-[469px] min-w-px flex-1 rounded-[18px]">
            <Image
              src="/enterprise/desktop-enquiry-meeting.webp"
              alt="People meeting to evaluate enterprise identity"
              fill
              sizes="(min-width: 1024px) 50vw, 0px"
              className="rounded-[18px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
