import Image from "next/image";

const pills = [
  { icon: "/solutions-ai-solutions/pill-credential.svg", label: "Credential" },
  { icon: "/solutions-ai-solutions/pill-verified.svg", label: "Verified" },
  { icon: "/solutions-ai-solutions/pill-keybound.svg", label: "Key-Bound" },
  { icon: "/solutions-ai-solutions/pill-encrypted.svg", label: "Encrypted" },
  { icon: "/solutions-ai-solutions/pill-timelimited.svg", label: "Time-Limited" },
  { icon: "/solutions-ai-solutions/pill-revocable.svg", label: "Revocable" },
];

const points = [
  {
    bold: "Identity alone",
    text: ' proves "you are who you claim." It does NOT grant permission.',
  },
  {
    bold: "Authority (mandate)",
    text: " grants permission. It is separate from identity.",
  },
  {
    bold: "Combining both",
    text: ' enables true accountability: "This agent (identity) did this action (authority) at this time (evidence)."',
  },
  {
    bold: "No confusion:",
    text: " Being authenticated does not mean being authorized. Ever.",
  },
];

export default function IdentityBindingSection() {
  return (
    <section className="bg-[#F1F5F9] px-6 py-20 sm:px-10 lg:px-[160px] lg:py-[105px]">
      <div className="mx-auto w-full max-w-[1120px]">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center text-center gap-3">
          <h2 className="font-dm-serif text-3xl font-normal leading-[1.2] text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[71.3px]">
            Identity binding for AI agents
          </h2>
          <p className="max-w-[760px] font-manrope text-base font-normal leading-[28px] text-[#64748B]">
            Every AI agent gets a verifiable identity that can be cryptographically linked to its actions.
          </p>
        </div>

        {/* 6 Pills */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
          {pills.map((pill) => (
            <div
              key={pill.label}
              className="flex items-center gap-2.5 rounded-[12px] border border-[#E2E8F0] bg-white px-5 py-3.5 shadow-sm transition-all duration-200 hover:border-cyan-400"
            >
              <Image
                src={pill.icon}
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 shrink-0"
              />
              <span className="font-manrope text-[13.6px] font-semibold text-[#071426]">
                {pill.label}
              </span>
            </div>
          ))}
        </div>

        {/* 2-Column Graphic + Content */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[497px_1fr]">
          <div className="relative h-[400px] w-full overflow-hidden rounded-[12px] bg-slate-200 shadow-sm">
            <Image
              src="/solutions-ai-solutions/identity-binding.webp"
              alt="Identity binding diagram"
              fill
              sizes="(min-width: 1024px) 497px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center rounded-[12px] border border-[#E2E8F0] bg-white p-8 lg:p-10 shadow-sm">
            <h3 className="mb-6 font-dm-serif text-2xl font-normal leading-[1.2] text-[#071426] sm:text-[22.4px]">
              Identity, not permission
            </h3>

            <div className="flex flex-col gap-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-[#22B8D6]" />
                  <p className="font-manrope text-[16px] leading-[28.8px] text-[#64748B]">
                    <strong className="font-bold text-[#071426]">{point.bold}</strong>
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
