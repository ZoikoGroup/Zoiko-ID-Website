import Image from "next/image";

const consumerSteps = [
  {
    step: "1",
    title: "Receive without trusting",
    description: "Accept the notification, then verify it before reading its contents.",
  },
  {
    step: "2",
    title: "Deduplicate",
    description: "Record processed identifiers so a repeat does not trigger a second action.",
  },
  {
    step: "3",
    title: "Re-check current state",
    description: "Query the owning service before any consequential change.",
  },
  {
    step: "4",
    title: "Act within your own policy",
    description: "Your application decides the outcome under its own rules.",
  },
  {
    step: "5",
    title: "Keep your own record",
    description: "Log the identifier and outcome, and point back to the owner's evidence.",
  },
];

export default function WebhooksConsumerStepsSection() {
  return (
    <section className="bg-grey-98 px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-14">
        {/* Left Column: Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-200 shadow-xs lg:w-1/2 lg:aspect-square">
          <Image
            src="/webhooks-events/consumer-steps-code.webp"
            alt="Source code on a monitor illustrating consumer design"
            fill
            sizes="(min-width: 1024px) 550px, 100vw"
            className="object-cover"
          />
        </div>

        {/* Right Column: Steps */}
        <div className="flex w-full flex-col gap-8 lg:w-1/2">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl md:text-[46px] md:leading-[1.15]">
            Five design steps, no code required
          </h2>

          <div className="flex flex-col gap-6">
            {consumerSteps.map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-4 pb-4 border-b border-grey-91/70 last:border-b-0"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-azure-9 font-manrope text-base font-extrabold text-white-solid shadow-xs">
                  {item.step}
                </div>
                <div className="flex flex-col gap-1 pt-0.5">
                  <h3 className="font-manrope text-base font-bold text-azure-9 sm:text-[17px]">
                    {item.title}
                  </h3>
                  <p className="font-manrope text-sm font-normal leading-relaxed text-azure-47 sm:text-[15px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
