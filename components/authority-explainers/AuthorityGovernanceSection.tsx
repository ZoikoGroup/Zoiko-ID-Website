import Image from "next/image";

interface GovernanceCard {
  icon: string;
  title: string;
  desc: string;
  badge: string;
}

const govCards: GovernanceCard[] = [
  {
    icon: "/authority-explainers/gov-icon-owner.svg",
    title: "Accountable owner",
    desc: "Named in the content registry for each explainer.",
    badge: "Owner: pending assignment",
  },
  {
    icon: "/authority-explainers/gov-icon-review.svg",
    title: "Technical review",
    desc: "Product and architecture confirm each concept and boundary.",
    badge: "Reviewer: pending assignment",
  },
  {
    icon: "/authority-explainers/gov-icon-evidence.svg",
    title: "Review date",
    desc: "Shown only once a review is recorded and approved.",
    badge: "Last reviewed: not yet recorded",
  },
];

export default function AuthorityGovernanceSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-14 lg:gap-16">
        {/* Heading */}
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#0B1B33] sm:text-5xl lg:text-[52px] lg:leading-[51.92px]">
            How this explainer stays accurate
          </h2>
          <p className="max-w-[780px] font-manrope text-base font-normal leading-[25.6px] text-[#64748B]">
            Every explainer is tied to a named owner, a review record and the sources its claims rest on. Changes are versioned, not overwritten.
          </p>
        </div>

        {/* 3 Governance Cards */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {govCards.map((c) => (
            <div
              key={c.title}
              className="flex flex-col justify-between rounded-[16px] border border-[#E2E8F0] bg-white-solid p-6 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="flex flex-col gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#E0F2FE]">
                  <Image
                    src={c.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="size-5"
                  />
                </div>
                <h3 className="pt-1 font-manrope text-[17px] font-bold leading-6 text-[#0B1B33]">
                  {c.title}
                </h3>
                <p className="font-manrope text-sm font-normal leading-[22.4px] text-[#64748B]">
                  {c.desc}
                </p>
              </div>

              <div className="mt-6 rounded-lg bg-[#F1F5F9] px-2.5 py-2">
                <span className="font-manrope text-[13px] font-normal leading-[20.8px] text-[#0B1B33]">
                  {c.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
