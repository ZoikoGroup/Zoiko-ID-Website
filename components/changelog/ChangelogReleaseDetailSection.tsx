import Image from "next/image";

const pills = [
  { icon: "/changelog/icons/icon_334_6698.svg", label: "What changed" },
  { icon: "/changelog/icons/icon_334_6703.svg", label: "What it affects" },
  { icon: "/changelog/icons/icon_334_6708.svg", label: "Action needed" },
  { icon: "/changelog/icons/icon_334_6713.svg", label: "Where to go next" },
];

const anatomyItems = [
  {
    icon: "/changelog/icons/icon_334_6725.svg",
    title: "Stable release ID",
    description: (
      <>
        Permanent identifier for linking and citation, e.g.{" "}
        <code className="rounded-[4px] bg-[#F1F5F9] px-[6px] py-[2px] font-mono text-[13.6px] text-[#071426]">
          release_id
        </code>
        .
      </>
    ),
  },
  {
    icon: "/changelog/icons/icon_334_6737.svg",
    title: "Publication date",
    description:
      "When the entry was published, shown in UTC and your locale. Kept separate from any effective date.",
  },
  {
    icon: "/changelog/icons/icon_334_6746.svg",
    title: "Effective date",
    description:
      "Shown only when the source confirms it. Never substituted with the publication date.",
  },
  {
    icon: "/changelog/icons/icon_334_6755.svg",
    title: "Change type and impact",
    description:
      "Assigned from a governed list. Impact is shown as text, not color alone.",
  },
  {
    icon: "/changelog/icons/icon_334_6764.svg",
    title: "Affected components and versions",
    description:
      "Only confirmed versions or ranges. Unknown compatibility is labeled as unknown.",
  },
  {
    icon: "/changelog/icons/icon_334_6773.svg",
    title: "Required action",
    description: "Numbered steps, or a statement that no action is indicated.",
  },
  {
    icon: "/changelog/icons/icon_334_6782.svg",
    title: "Documentation links",
    description: (
      <>
        Approved, verified destinations for migration and reference
        <br />
        guidance.
      </>
    ),
  },
  {
    icon: "/changelog/icons/icon_334_6791.svg",
    title: "Revision note",
    description:
      "If corrected, the revision date and reason appear on the entry.",
  },
];

export default function ChangelogReleaseDetailSection() {
  return (
    <section className="bg-[#F1F5F9] px-6 py-20 sm:px-10 lg:px-[160px] lg:py-[105px]">
      <div className="mx-auto max-w-[1120px] flex flex-col gap-[34px]">
        {/* Top Part: Text + Image */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-[60px]">
          {/* Left Column: Heading, Subtitle, Pills */}
          <div className="flex flex-col items-start gap-[18px]">
            <h2 className="font-dm-serif text-3xl font-normal leading-[1.15] text-[#071426] sm:text-4xl lg:text-[46px] lg:leading-[52.9px]">
              What each entry tells
              <br />
              you
            </h2>

            <p className="font-manrope text-[15px] font-normal leading-[25px] text-[#64748B] sm:text-[16px] sm:leading-[26.4px]">
              Every published entry follows the same structure, so you can scan
              <br />
              one and understand the rest. Entries answer four questions: what
              <br />
              changed, what it affects, whether you must act, and where to go
              <br />
              next.
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-[12px] pt-1">
              {pills.map((pill) => (
                <div
                  key={pill.label}
                  className="flex items-center gap-[10px] rounded-full border border-[#E2E8F0] bg-white-solid px-[16px] py-[8px]"
                >
                  <Image
                    src={pill.icon}
                    alt=""
                    width={18}
                    height={18}
                    className="shrink-0"
                  />
                  <span className="font-manrope text-[14px] font-semibold leading-[20px] text-[#071426]">
                    {pill.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative h-[260px] w-full overflow-hidden rounded-[12px] sm:h-[300px]">
            <Image
              src="/changelog/analytics-charts-6e1c45.png"
              alt="Analytics charts on a laptop"
              fill
              sizes="(min-width: 1024px) 500px, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Illustrative Banner */}
        <div className="inline-flex self-start items-center gap-[8px] rounded-full bg-[#FEF3C7] px-[14px] py-[6px]">
          <Image
            src="/changelog/icons/icon_334_6719.svg"
            alt=""
            width={12}
            height={12}
            className="shrink-0"
          />
          <span className="font-manrope text-[12px] font-bold uppercase tracking-[0.05em] text-[#92400E]">
            Illustrative structure only. Not a release.
          </span>
        </div>

        {/* 8 Anatomy Cards Grid */}
        <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2">
          {anatomyItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-[14px] rounded-[10px] border border-[#E2E8F0] bg-white-solid p-[18px_20px]"
            >
              <div className="flex shrink-0 items-center justify-center pt-0.5">
                <Image
                  src={item.icon}
                  alt=""
                  width={22}
                  height={22}
                  className="shrink-0"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-manrope text-[16px] font-bold leading-[26.4px] text-[#071426]">
                  {item.title}
                </h4>
                <p className="font-manrope text-[14.7px] font-normal leading-[24.29px] text-[#64748B]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
