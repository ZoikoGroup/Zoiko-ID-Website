import Image from "next/image";

const trustSteps = [
  {
    step: "1",
    icon: "/overview/trust-step-1.svg",
    title: "Principal Identity",
    description: "Actor verified with credential",
  },
  {
    step: "2",
    icon: "/overview/trust-step-2.svg",
    title: "Bounded Mandate",
    description: "Scope, time, & purpose defined",
  },
  {
    step: "3",
    icon: "/overview/trust-step-3.svg",
    title: "Policy Evaluation",
    description: "Context & risk assessment",
  },
  {
    step: "4",
    icon: "/overview/trust-step-4.svg",
    title: "Evidence Logged",
    description: "Immutable audit trail",
  },
  {
    step: "5",
    icon: "/overview/trust-step-5.svg",
    title: "Allow / Deny Decision",
    description: "Real-time access control",
  },
];

export default function TrustFlowSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-28 xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-16">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl sm:leading-[59.8px]">
          How the trust layer works
        </h2>

        {/* 5-Step Flow Row */}
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {trustSteps.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center rounded-xl border border-mystic bg-white-solid p-6 text-center transition-all duration-200 hover:border-scooter-48/40 hover:shadow-[0px_8px_24px_0px_rgba(7,20,38,0.06)]"
            >
              {/* Step Number Badge */}
              <div className="mb-4 flex h-7 w-7 items-center justify-center rounded-full bg-azure-48 text-xs font-bold text-white-solid shadow-sm">
                {item.step}
              </div>

              {/* Icon */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-scooter-48/10 p-2.5">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={36}
                  height={36}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Title & Description */}
              <h3 className="font-manrope text-[15.2px] font-bold text-azure-9">
                {item.title}
              </h3>
              <p className="mt-2 font-manrope text-[13.6px] font-normal leading-relaxed text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Continuous Verification Bottom Callout */}
        <div className="w-full rounded-xl border border-mystic bg-[linear-gradient(165deg,rgba(34,184,214,0.03)_0%,rgba(37,99,235,0.03)_100%)] p-6 sm:p-7">
          <p className="font-manrope text-sm leading-relaxed text-[#475569] sm:text-[15.2px]">
            <strong className="font-bold text-azure-9">Continuous verification:</strong>{" "}
            At every request, the trust layer re-evaluates all signals. If identity expires, mandate changes, policy updates, or a risk signal is detected—the decision updates in real time. No perpetual &ldquo;approved&rdquo; state.
          </p>
        </div>
      </div>
    </section>
  );
}
