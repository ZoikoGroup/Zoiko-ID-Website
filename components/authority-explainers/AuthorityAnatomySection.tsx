import Image from "next/image";

interface DimensionItem {
  num: number;
  title: string;
  desc: string;
}

const dimensions: DimensionItem[] = [
  { num: 1, title: "Delegator", desc: " — who gives the authority" },
  { num: 2, title: "Delegate", desc: " — who receives it" },
  { num: 3, title: "Represented organization", desc: " — on whose behalf, if any" },
  { num: 4, title: "Purpose", desc: " — why the authority is granted" },
  { num: 5, title: "Resource and action", desc: " — what may be done, and to what" },
  { num: 6, title: "Scope and constraints", desc: " — limits on the grant" },
  { num: 7, title: "Time window", desc: " — when it starts and ends" },
  { num: 8, title: "Source and issuer", desc: " — where the grant comes from" },
  { num: 9, title: "Revocation and expiry", desc: " — how it ends early" },
  { num: 10, title: "Policy context", desc: " — rules that apply when it is used" },
];

const tableRows = [
  { dimension: "Delegator", meaning: "The party whose authority is passed on" },
  { dimension: "Scope", meaning: "What the authority covers, and what it does not" },
  { dimension: "Time", meaning: "The period in which it can be used" },
  { dimension: "Revocation", meaning: "How and when the authority can be withdrawn" },
];

export default function AuthorityAnatomySection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-14 lg:gap-16">
        {/* Heading */}
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#0B1B33] sm:text-5xl lg:text-[52px] lg:leading-[51.92px]">
            What a bounded delegation must specify
          </h2>
          <p className="max-w-[780px] font-manrope text-base font-normal leading-[25.6px] text-[#64748B]">
            These are conceptual model dimensions. They are not a confirmed API schema, and no product field names are implied.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
          {/* Left Column: Ordered 10 dimensions */}
          <div className="flex w-full flex-1 flex-col gap-2.5">
            {dimensions.map((d) => (
              <div
                key={d.num}
                className="flex items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white-solid px-4 py-3 shadow-xs transition-colors hover:border-slate-300 sm:px-4.5 sm:py-3.5"
              >
                <div className="flex size-7 shrink-0 items-center justify-center rounded-md bg-[#2563EB] font-manrope text-xs font-extrabold text-white-solid">
                  {d.num}
                </div>
                <div className="font-manrope text-sm leading-[22.4px]">
                  <strong className="font-bold text-[#0B1B33]">{d.title}</strong>
                  <span className="text-[#334155]">{d.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Image + Summary Table */}
          <div className="flex w-full flex-1 flex-col gap-6">
            {/* Documents Image */}
            <div className="relative h-[280px] w-full overflow-hidden rounded-[20px] bg-[#F1F5F9] shadow-sm sm:h-[320px]">
              <Image
                src="/authority-explainers/anatomy-documents.webp"
                alt="Documents on a desk"
                fill
                sizes="(min-width: 1024px) 535px, 100vw"
                className="object-cover"
              />
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-[14px] border border-[#E2E8F0] bg-white-solid shadow-sm">
              <table className="w-full text-left font-manrope text-sm">
                <thead>
                  <tr className="border-b border-[#E2E8F0] bg-[#F1F5F9]">
                    <th className="w-[36%] px-4 py-3 font-bold text-[#0B1B33]">
                      Dimension
                    </th>
                    <th className="px-4 py-3 font-bold text-[#0B1B33]">
                      Plain-language meaning
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0]">
                  {tableRows.map((row) => (
                    <tr key={row.dimension} className="transition-colors hover:bg-slate-50/60">
                      <td className="px-4 py-3 font-bold text-[#0B1B33]">
                        {row.dimension}
                      </td>
                      <td className="px-4 py-3 font-normal text-[#334155]">
                        {row.meaning}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
