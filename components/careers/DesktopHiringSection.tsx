import Image from "next/image";

const hiringItems = [
  { icon: "/careers/desktop-icon-flag.svg", text: "Role-specific steps: shown once a role is published." },
  { icon: "/careers/desktop-icon-user.svg", text: "Named contacts: not published here." },
  { icon: "/careers/desktop-icon-review-1.svg", text: "Assessments: described on the role, if used." },
];

const a11yItems = [
  { icon: "/careers/desktop-icon-key-1.svg", text: "Keyboard: every control reachable and visibly focused." },
  { icon: "/careers/desktop-icon-eye-2.svg", text: "Screen readers: headings, labels and results announced." },
  { icon: "/careers/desktop-icon-search-2.svg", text: "Zoom and reflow: usable at 200% and 320 CSS px." },
  { icon: "/careers/desktop-icon-hand.svg", text: "Accommodation channel: pending verification." },
];

function Items({
  items,
  color,
  top,
}: {
  items: { icon: string; text: string }[];
  color: string;
  top: string;
}) {
  return (
    <ul
      className={`absolute left-[50px] right-[50px] m-0 flex list-none flex-col gap-[14px] p-0 pt-[6px] ${top}`}
    >
      {items.map((it) => (
        <li key={it.text} className="flex h-[24.75px] items-center gap-[14px] pb-[1.75px]">
          <Image src={it.icon} width={20} height={20} alt="" className="shrink-0" />
          <span
            className={`font-manrope text-[15px] font-normal leading-[24.75px] xl:whitespace-nowrap ${color}`}
          >
            {it.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Pair({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  return (
    <div className="absolute bottom-[50px] left-[50px] right-[50px] flex items-start justify-center gap-[12px]">
      {images.map((img) => (
        <div key={img.src} className="relative h-[170px] min-w-px flex-1 rounded-[14px]">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(min-width: 1024px) 20vw, 50vw"
            className="rounded-[14px] object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default function DesktopHiringSection() {
  return (
    <section
      id="hiring"
      className="hidden w-full items-start justify-center gap-[28px] bg-white px-[160px] py-[105px] lg:flex"
    >
      <div className="relative h-[636.5px] min-w-px flex-1 rounded-[22px] bg-[#f8fafc]">
        <div className="absolute left-[50px] top-[50px] flex h-[53.2px] w-[52px] items-center justify-center rounded-[14px] bg-[#e4f3f8] pb-[1.2px]">
          <Image src="/careers/desktop-icon-review.svg" width={26} height={26} alt="" />
        </div>
        <h2 className="absolute left-[50px] right-[50px] top-[120px] pb-[10px] font-dm-serif text-[30px] font-normal leading-[36px] text-[#0b1b33]">
          Hiring process
        </h2>
        <p className="absolute left-[50px] right-[50px] top-[182.75px] font-manrope text-[15px] font-normal leading-[24.75px] text-[#5b6b82] xl:whitespace-nowrap">
          We do not publish a general timeline. Where a role has approved <br className="max-xl:hidden" />
          steps, they are shown on that role. No response time or time-to- <br className="max-xl:hidden" />
          hire figure is given here.
        </p>
        <Items items={hiringItems} color="text-[#334155]" top="top-[276.25px]" />
        <Pair
          images={[
            { src: "/careers/desktop-hiring-whiteboard.webp", alt: "Team planning at a whiteboard" },
            { src: "/careers/desktop-hiring-meeting.webp", alt: "Colleagues in a meeting" },
          ]}
        />
      </div>

      <div className="relative h-[636.5px] min-w-px flex-1 rounded-[22px] bg-[#0b1b33]">
        <div className="absolute left-[50px] top-[50px] flex h-[53.1px] w-[52px] items-center justify-center rounded-[14px] bg-[rgba(34,184,214,0.16)] pb-[1.1px]">
          <Image src="/careers/desktop-icon-eye-1.svg" width={26} height={26} alt="" />
        </div>
        <h2 className="absolute left-[50px] right-[50px] top-[120px] pb-[10px] font-dm-serif text-[30px] font-normal leading-[36px] text-white">
          <span className="block max-w-[466px] xl:whitespace-nowrap">Accessibility and accommodations</span>
        </h2>
        <p className="absolute left-[50px] right-[50px] top-[182.88px] pb-[0.625px] font-manrope text-[15px] font-normal leading-[24.75px] text-[#a9b8ce] xl:whitespace-nowrap">
          This site follows WCAG 2.2 AA. If you need an accommodation <br className="max-xl:hidden" />
          during any step, an approved channel will be published here.
        </p>
        <Items items={a11yItems} color="text-[#d7e0ee]" top="top-[251.5px]" />
        <Pair
          images={[
            { src: "/careers/desktop-accessibility-portrait.webp", alt: "Portrait of a team member" },
            { src: "/careers/desktop-accessibility-developer.webp", alt: "Developer working at a computer" },
          ]}
        />
      </div>
    </section>
  );
}
