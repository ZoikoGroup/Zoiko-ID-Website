import Image from "next/image";

const resources = [
  { title: "About Zoiko iD", body: "The product narrative and proposition.", src: "/zoiko-tech-inc/mobile-next-about.webp", alt: "About Zoiko iD" },
  { title: "Careers", body: "Roles, if and when they are published.", src: "/zoiko-tech-inc/mobile-next-careers.webp", alt: "Careers at Zoiko" },
  { title: "Contact", body: "The routed contact options above.", src: "/zoiko-tech-inc/mobile-next-contact.webp", alt: "Contact Zoiko" },
  { title: "Trust Center", body: "Approved assurance materials, by topic.", src: "/zoiko-tech-inc/mobile-next-trust-center.webp", alt: "Zoiko Trust Center" },
];

export default function MobileCompanyResourcesSection() {
  return (
    <section id="next" className="lg:hidden w-full border-t border-solid border-[#dce3ee] bg-white px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[12px]">
        <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0891b2]">
          Company resources
        </p>
        <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
          Where to go next
        </h2>
        <ul className="flex w-full flex-col gap-[18px] pb-[18px] pt-[28px]">
          {resources.map((r) => (
            <li key={r.title} className="overflow-hidden rounded-[8px] border border-solid border-[#dce3ee] bg-white">
              <div className="relative h-[140px] w-full">
                <Image src={r.src} alt={r.alt} fill sizes="(max-width: 560px) 100vw, 560px" className="object-cover" />
              </div>
              <div className="flex flex-col gap-[5px] p-[22px]">
                <h3 className="font-manrope text-[17px] font-bold leading-[28px] text-[#2563eb]">{r.title}</h3>
                <p className="font-manrope text-[14px] font-normal leading-[23.1px] text-[#5b6b82]">{r.body}</p>
                <p className="font-manrope text-[12px] font-bold leading-[19.8px] text-[#92400e]">Route pending registry</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="w-full border-l-4 border-solid border-[#2563eb] bg-white px-[24px] py-[20px]">
          <p className="font-manrope text-[15px] font-normal leading-[24.75px] text-[#2563eb]">
            <span className="whitespace-nowrap">Reserved facts are not shown on this page:<br />
company history, leadership, size, ownership,<br />
certifications and customer counts. They<br />
appear only once an approved source exists.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
