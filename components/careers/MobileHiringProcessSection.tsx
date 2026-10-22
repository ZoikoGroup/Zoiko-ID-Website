import Image from "next/image";

function ListItem({
  icon,
  children,
  color,
}: {
  icon: string;
  children: React.ReactNode;
  color: string;
}) {
  return (
    <li className="flex items-start gap-[14px]">
      <Image src={icon} width={20} height={20} alt="" className="mt-[2px] shrink-0" />
      <span
        className={`font-manrope text-[15px] font-normal leading-[24.75px] whitespace-nowrap ${color}`}
      >
        {children}
      </span>
    </li>
  );
}

function ImagePair({ a, b, altA, altB }: { a: string; b: string; altA: string; altB: string }) {
  return (
    <div className="mt-auto flex items-start gap-[12px] pt-[28px]">
      {[
        [a, altA],
        [b, altB],
      ].map(([src, alt]) => (
        <div key={src} className="relative h-[170px] min-w-px flex-1 overflow-hidden rounded-[14px]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 600px) 45vw, 260px"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default function MobileHiringProcessSection() {
  return (
    <section id="hiring" className="px-[22px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[28px]">
        <div className="flex min-h-[652.75px] flex-col rounded-[22px] bg-[#f4f7fb] p-[28px]">
          <div className="flex h-[52.9px] w-[52px] items-center justify-center rounded-[14px] bg-[#e4f3f8] pb-[0.9px]">
            <Image src="/careers/mobile-icon-review.svg" width={26} height={26} alt="" />
          </div>
          <h2 className="mt-[17px] pb-[10px] font-dm-serif text-[30px] font-normal leading-[36px] text-[#0b1b33]">
            Hiring process
          </h2>
          <p className="mt-[7px] font-manrope text-[15px] font-normal leading-[24.75px] whitespace-nowrap text-[#5b6b82]">
            We do not publish a general timeline.
            <br />
            Where a role has approved steps, they are
            <br />
            shown on that role. No response time or
            <br />
            time-to-hire figure is given here.
          </p>
          <ul className="mt-[18px] flex flex-col gap-[14px] pt-[6px]">
            <ListItem icon="/careers/mobile-icon-flag.svg" color="text-[#334155]">
              Role-specific steps: shown once a role
              <br />
              is published.
            </ListItem>
            <ListItem icon="/careers/mobile-icon-user.svg" color="text-[#334155]">
              Named contacts: not published here.
            </ListItem>
            <ListItem icon="/careers/mobile-icon-review-1.svg" color="text-[#334155]">
              Assessments: described on the role, if
              <br />
              used.
            </ListItem>
          </ul>
          <ImagePair
            a="/careers/mobile-hiring-whiteboard.webp"
            b="/careers/mobile-hiring-meeting.webp"
            altA="Candidates and interviewers working at a whiteboard"
            altB="A hiring meeting in progress"
          />
        </div>

        <div
          id="accessibility"
          className="flex min-h-[752.25px] flex-col rounded-[22px] bg-[#0b1b33] p-[28px]"
        >
          <div className="flex h-[53.2px] w-[52px] items-center justify-center rounded-[14px] bg-[rgba(34,184,214,0.16)] pb-[1.2px]">
            <Image src="/careers/mobile-icon-eye-1.svg" width={26} height={26} alt="" />
          </div>
          <h2 className="mt-[16.8px] pb-[10px] font-dm-serif text-[30px] font-normal leading-[36px] text-white">
            Accessibility and
            <br />
            accommodations
          </h2>
          <p className="mt-[16.75px] font-manrope text-[15px] font-normal leading-[24.75px] whitespace-nowrap text-[#a9b8ce]">
            This site follows WCAG 2.2 AA. If you need
            <br />
            an accommodation during any step, an
            <br />
            approved channel will be published here.
          </p>
          <ul className="mt-[19.25px] flex flex-col gap-[14px] pt-[6px]">
            <ListItem icon="/careers/mobile-icon-key-1.svg" color="text-[#d7e0ee]">
              Keyboard: every control reachable
              <br />
              and visibly focused.
            </ListItem>
            <ListItem icon="/careers/mobile-icon-eye-2.svg" color="text-[#d7e0ee]">
              Screen readers: headings, labels and
              <br />
              results announced.
            </ListItem>
            <ListItem icon="/careers/mobile-icon-search-2.svg" color="text-[#d7e0ee]">
              Zoom and reflow: usable at 200% and
              <br />
              320 CSS px.
            </ListItem>
            <ListItem icon="/careers/mobile-icon-hand.svg" color="text-[#d7e0ee]">
              Accommodation channel: pending
              <br />
              verification.
            </ListItem>
          </ul>
          <ImagePair
            a="/careers/mobile-accessibility-portrait.webp"
            b="/careers/mobile-accessibility-developer.webp"
            altA="Portrait of a candidate"
            altB="A developer at work"
          />
        </div>
      </div>
    </section>
  );
}
