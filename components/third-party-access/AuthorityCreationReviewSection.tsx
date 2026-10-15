import Image from "next/image";

const delegationSteps = [
  {
    step: "1",
    title: "Identify recipient:",
    description:
      "Name, email, external org. Verify you're granting to the right party.",
  },
  {
    step: "2",
    title: "Define scope:",
    description: "Resources, actions, volume, time. Be explicit.",
  },
  {
    step: "3",
    title: "Add purpose:",
    description:
      'Why does this party need access? Example: "Q4 security audit."',
  },
  {
    step: "4",
    title: "Set expiry:",
    description: "Fixed end date. No perpetual access. No auto-renewal.",
  },
  {
    step: "5",
    title: "Delegator sign-off:",
    description:
      "Authorized person confirms and digitally signs. Audit trail records who approved.",
  },
];

export default function AuthorityCreationReviewSection() {
  return (
    <section id="authority-creation" className="bg-white-solid px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-12 sm:gap-14">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Authority creation and review
        </h2>

        {/* 2-Column Showcase */}
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: Graphic */}
          <div className="relative flex items-center justify-center overflow-hidden rounded-[12px] border border-mystic bg-white-solid shadow-sm">
            <Image
              src="/third-party-access/authority-creation-review.webp"
              alt="Authority creation and review interface"
              width={560}
              height={400}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Right: Five steps to delegation card */}
          <div className="flex flex-col gap-6 rounded-[12px] border border-mystic bg-white-solid p-6 sm:p-8">
            <h3 className="font-dm-serif text-2xl font-normal text-azure-9 sm:text-[22.4px]">
              Five steps to delegation
            </h3>

            <ol className="flex flex-col gap-4">
              {delegationSteps.map((s) => (
                <li key={s.step} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-49/15 font-manrope text-xs font-bold text-cyan-49">
                    {s.step}
                  </span>
                  <p className="font-manrope text-[14.5px] leading-relaxed text-azure-47 sm:text-[15.2px] sm:leading-[25px]">
                    <strong className="font-bold text-azure-9">
                      {s.title}
                    </strong>{" "}
                    {s.description}
                  </p>
                </li>
              ))}
            </ol>

            {/* Result Banner */}
            <div className="rounded-[4px] border-l-4 border-cyan-49 bg-[#F1F5F9] p-4 sm:p-5">
              <p className="font-manrope text-[14px] leading-relaxed text-azure-47 sm:text-[14.4px] sm:leading-[25.2px]">
                <strong className="font-bold text-azure-9">Result:</strong>{" "}
                Immutable mandate recorded. Recipient gets credential. System
                ready to evaluate their actions.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-mystic pt-2" />
      </div>
    </section>
  );
}
