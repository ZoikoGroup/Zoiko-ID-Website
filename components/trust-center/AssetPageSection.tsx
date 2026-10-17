import Image from "next/image";

import { Section, SectionHeading, StatusPill } from "./shared";

const fields = [
  { label: "Owner and version", value: "Named, with supersession history" },
  { label: "Timeframe and scope", value: "Shown only from a verified registry" },
  { label: "Limitations", value: "Stated next to the asset" },
  { label: "Currentness", value: "Last verified date and state" },
  { label: "Permitted action", value: "View, or request, depending on access" },
];

export default function AssetPageSection() {
  return (
    <Section tone="grey">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-9">
          <SectionHeading
            title="What each asset page will show"
            description="Every asset page states its owner, version, timeframe, scope and limitations. Expired or withdrawn material cannot be downloaded, and a successor is linked only when approved."
          />

          <div className="flex flex-col gap-5">
            <dl className="overflow-hidden rounded-2xl border border-grey-91 bg-white-solid">
              {fields.map((field) => (
                <div
                  key={field.label}
                  className="flex flex-col gap-1 border-b border-grey-91 px-5 py-3.5 last:border-b-0 sm:flex-row sm:gap-0"
                >
                  <dt className="font-manrope text-[15px] font-bold leading-6 text-[#0F172A] sm:w-[200px] sm:shrink-0">
                    {field.label}
                  </dt>
                  <dd className="font-manrope text-[15px] leading-6 text-azure-47">{field.value}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap gap-2.5">
              <StatusPill variant="withdrawn">Withdrawn: no download</StatusPill>
              <StatusPill variant="superseded">Superseded: successor link if approved</StatusPill>
            </div>
          </div>
        </div>

        <div className="relative h-[300px] w-full overflow-hidden rounded-[20px] sm:h-[380px] lg:h-[440px]">
          <Image
            src="/trust-center/asset-page.webp"
            alt="Two colleagues reviewing an asset page on a laptop"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
