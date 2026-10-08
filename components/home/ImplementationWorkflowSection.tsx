import Image from "next/image";

import { SectionHeader } from "./shared";
import { StepNumber } from "./TrustLifecycleSection";

const steps = [
  { title: "Connect", description: "Federate with your existing IdP" },
  { title: "Configure", description: "Define policies and authority rules" },
  { title: "Integrate", description: "Consume decisions via APIs" },
  { title: "Monitor", description: "Track signals and compliance" },
];

export default function ImplementationWorkflowSection() {
  return (
    <section className="relative overflow-hidden bg-azure-9 px-6 py-20 sm:px-10 lg:py-28">
      <Image
        src="/home/implementation-workflow.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col items-center gap-14 lg:gap-20">
        <SectionHeader
          dark
          title="Typical implementation workflow"
          subtitle="Get up and running in days, not months"
        />

        <ol className="grid w-full grid-cols-1 gap-10 rounded-2xl border border-dashed border-cyan-49/40 bg-grey-98 px-8 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => (
            <li key={step.title} className="flex flex-col items-center gap-2">
              <StepNumber number={index + 1} className="mb-3 size-12 text-lg" />
              <h3 className="text-center font-dm-serif text-base font-normal leading-6 text-azure-9">
                {step.title}
              </h3>
              <p className="text-center font-manrope text-sm font-normal leading-6 text-azure-35">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
