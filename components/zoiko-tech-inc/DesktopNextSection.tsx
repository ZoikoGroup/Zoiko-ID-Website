import Image from "next/image";

const cards = [
  { title: "About Zoiko iD", body: <span>The product narrative and <br className="max-xl:hidden" />proposition.</span>, src: "/zoiko-tech-inc/desktop-next-about.webp", alt: "About Zoiko iD" },
  { title: "Careers", body: <span>Roles, if and when they are <br className="max-xl:hidden" />published.</span>, src: "/zoiko-tech-inc/desktop-next-careers.webp", alt: "Careers at Zoiko" },
  { title: "Contact", body: "The routed contact options above.", src: "/zoiko-tech-inc/desktop-next-contact.webp", alt: "Contact Zoiko" },
  { title: "Trust Center", body: <span>Approved assurance materials, by <br className="max-xl:hidden" />topic.</span>, src: "/zoiko-tech-inc/desktop-next-trust-center.webp", alt: "Zoiko Trust Center" },
];

export default function DesktopNextSection() {
  return (
    <section id="next" className="hidden w-full flex-col gap-[60px] border-t border-solid border-[#dce3ee] bg-white px-[160px] pb-[105px] pt-[104px] lg:flex">
      <h2 className="font-dm-serif pb-[0.55px] text-[52px] font-normal leading-[58.6px] text-[#07111f]">Where to go next</h2>
      <div className="flex w-full flex-col gap-[28px]">
        <ul className="flex w-full items-stretch gap-[18px]">
          {cards.map((c) => (
            <li key={c.title} className="flex min-w-px flex-1 flex-col overflow-hidden rounded-[8px] border border-solid border-[#dce3ee] bg-white">
              <div className="relative h-[140px] w-full shrink-0">
                <Image src={c.src} alt={c.alt} fill sizes="25vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col items-start gap-[5px] p-[22px]">
                <h3 className="font-manrope text-[17px] font-bold leading-[28px] text-[#07111f]">{c.title}</h3>
                <p className="font-manrope w-full text-[14px] font-normal leading-[23.1px] text-[#5b6b82]">{c.body}</p>
                <p className="font-manrope mt-auto w-full pt-[24px] text-[12px] font-bold leading-[19.8px] text-[#92400e]">Route pending registry</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="font-manrope w-full border-l-4 border-solid border-[#07111f] bg-[rgba(34,184,214,0.1)] px-[24px] py-[20px] text-[15px] font-normal leading-[24.75px] text-[#07111f]">
          <span className="xl:whitespace-nowrap">Reserved facts are not shown on this page: company history, leadership, size, ownership, certifications and customer counts. They appear only once an <br className="max-xl:hidden" />
approved source exists.</span>
        </p>
      </div>
    </section>
  );
}
