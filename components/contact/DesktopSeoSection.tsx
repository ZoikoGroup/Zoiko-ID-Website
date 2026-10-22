import Image from "next/image";

const rows: [string, string][] = [
  ["Suggested title", "Contact Zoiko iD | Corporate Enquiries and Support Routes (confirm against the content registry)"],
  ["Meta description", "Find the right Zoiko iD contact route for enterprise, developer, security, privacy and corporate enquiries."],
  ["Indexing", "Index only if the page offers useful, current contact routing. No thin pages or false FAQ schema."],
  ["Structured data", "Organization or ContactPoint, only for verified operational channels. No invented telephone numbers."],
  ["Canonical", "Taken from the route registry, with one H1 and descriptive H2 groups."],
];

export default function DesktopSeoSection() {
  return (
    <section
      id="seo"
      className="hidden w-full bg-[#fafbfd] px-[160px] py-[105px] lg:block"
    >
      <div className="flex flex-col items-start gap-[56px]">
        <div className="flex w-full max-w-[820px] flex-col gap-[15px]">
          <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33] [word-break:break-word]">
            Metadata that matches real availability
          </h2>
          <p className="w-full max-w-[720px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82] [word-break:break-word] xl:whitespace-nowrap">
            Structured data is added only for verified operational channels, and every FAQ matches the{" "}
            <br className="max-xl:hidden" />
            routes that exist.
          </p>
        </div>
        <div className="w-full overflow-auto rounded-[14px] border border-solid border-[#d9e1ec] bg-white">
          <table className="w-full border-collapse text-left">
            <colgroup>
              <col style={{ width: "18%" }} />
              <col style={{ width: "82%" }} />
            </colgroup>
            <tbody>
              {rows.map(([k, v], i) => {
                const last = i === rows.length - 1;
                const b = last ? "" : "border-b border-solid border-[#d9e1ec]";
                return (
                  <tr key={k}>
                    <th
                      scope="row"
                      className={`px-[20px] py-[16px] align-top font-manrope text-[15px] font-bold leading-[24.75px] text-[#0b1b33] xl:whitespace-nowrap ${b}`}
                    >
                      {k}
                    </th>
                    <td
                      className={`px-[20px] py-[16px] align-top font-manrope text-[15px] font-normal leading-[24.75px] text-[#334155] xl:whitespace-nowrap ${b}`}
                    >
                      {v}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="relative h-[380px] w-full overflow-hidden rounded-[18px]">
          <Image
            src="/contact/desktop-journeys-network.webp"
            alt=""
            fill
            sizes="(min-width: 1024px) calc(100vw - 320px), 0px"
            className="object-cover"
            style={{ objectPosition: "50% 31.2%" }}
          />
        </div>
      </div>
    </section>
  );
}
