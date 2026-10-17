import Image from "next/image";
import Link from "next/link";

import { Section, SectionHeading } from "./shared";

const rows = [
  { label: "Personal data categories", value: "Defined in the Privacy Notice" },
  { label: "Legal bases", value: "Set by Legal, not shown here" },
  { label: "Retention", value: "Stated only from reviewed records" },
  { label: "Rights requests", value: "Routed to Privacy operations" },
];

export default function PrivacySummarySection() {
  return (
    <Section>
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="relative h-[300px] w-full overflow-hidden rounded-[20px] sm:h-[380px] lg:h-[440px]">
          <Image
            src="/trust-center/privacy-summary.webp"
            alt="Two colleagues reviewing documents at a desk"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-9">
          <SectionHeading
            title="Summarized here, governed elsewhere"
            description="Privacy architecture is described on the Privacy page. Formal privacy terms, rights routes and jurisdiction-specific statements are owned by Legal and appear in the Privacy Notice only."
          />

          <div className="flex flex-col gap-3">
            <dl className="overflow-hidden rounded-2xl border border-grey-91 bg-white-solid">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col gap-1 border-b border-grey-91 px-5 py-3.5 last:border-b-0 sm:flex-row sm:gap-0"
                >
                  <dt className="font-manrope text-base font-bold leading-6 text-[#0F172A] sm:w-[220px] sm:shrink-0">
                    {row.label}
                  </dt>
                  <dd className="font-manrope text-base leading-6 text-azure-47">{row.value}</dd>
                </div>
              ))}
            </dl>

            <p className="flex flex-wrap items-baseline gap-x-1.5 pt-2">
              <Link href="#" className="font-manrope text-base font-bold leading-6 text-azure-48 hover:underline">
                Open Privacy &rarr;
              </Link>
              <span className="font-manrope text-xs leading-5 text-azure-47">
                &middot; Privacy Notice route pending approval
              </span>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
