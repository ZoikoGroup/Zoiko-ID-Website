import Image from "next/image";
import type { ReactNode } from "react";

const rows: { label: string; body: ReactNode }[] = [
  {
    label: "Suggested title",
    body: (
      <>
        Contact Zoiko iD | <br />
        Corporate Enquiries <br />
        and Support Routes <br />
        (confirm against the <br />
        content registry)
      </>
    ),
  },
  {
    label: "Meta description",
    body: (
      <>
        Find the right Zoiko <br />
        iD contact route for <br />
        enterprise, developer, <br />
        security, privacy and <br />
        corporate enquiries.
      </>
    ),
  },
  {
    label: "Indexing",
    body: (
      <>
        Index only if the page <br />
        offers useful, current <br />
        contact routing. No <br />
        thin pages or false <br />
        FAQ schema.
      </>
    ),
  },
  {
    label: "Structured data",
    body: (
      <>
        Organization or <br />
        ContactPoint, only for <br />
        verified operational <br />
        channels. No <br />
        invented telephone <br />
        numbers.
      </>
    ),
  },
  {
    label: "Canonical",
    body: (
      <>
        Taken from the route <br />
        registry, with one H1 <br />
        and descriptive H2 <br />
        groups.
      </>
    ),
  },
];

export default function MobileSeoContentSection() {
  return (
    <section
      id="seo"
      className="flex w-full flex-col items-start gap-[36px] border-b border-solid border-[#d9e1ec] bg-[#fafbfd] px-[22px] py-[60px] lg:hidden"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[36px]">
        <div className="flex w-full max-w-[820px] flex-col gap-[14.9px]">
          <div className="flex items-center gap-[12px]">
            <span className="h-[2px] w-[26.28px] shrink-0 bg-[#0891b2]" />
            <span className="w-[17.2px] shrink-0 font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0b1b33]">
              10
            </span>
            <span className="whitespace-nowrap font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0891b2]">
              SEO, AEO and content <br />
              governance
            </span>
          </div>
          <h2 className="font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33] [word-break:break-word]">
            Metadata that matches real <br />
            availability
          </h2>
          <p className="max-w-[720px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82] [word-break:break-word]">
            Structured data is added only for verified <br />
            operational channels, and every FAQ <br />
            matches the routes that exist.
          </p>
        </div>

        <div className="w-full overflow-auto rounded-[14px] border border-solid border-[#d9e1ec] bg-white">
          <table className="w-full border-collapse text-left">
            <tbody>
              {rows.map((r, i) => {
                const b = i === rows.length - 1 ? "" : "border-b border-solid border-[#d9e1ec]";
                return (
                  <tr key={r.label}>
                    <th
                      scope="row"
                      className={`w-[159.19px] whitespace-nowrap px-[20px] pb-[16px] pt-[15.5px] align-top font-manrope text-[15px] font-bold leading-[24.75px] text-[#0b1b33] ${b}`}
                    >
                      {r.label}
                    </th>
                    <td
                      className={`w-[184.81px] whitespace-nowrap px-[20px] py-[16px] align-top font-manrope text-[15px] font-normal leading-[24.75px] text-[#334155] ${b}`}
                    >
                      {r.body}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="relative h-[260px] w-full overflow-hidden rounded-[18px]">
          <Image
            src="/contact/mobile-journeys-network.webp"
            alt=""
            fill
            sizes="(max-width: 560px) 100vw, 560px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
