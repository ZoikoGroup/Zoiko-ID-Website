import Image from "next/image";

const steps = [
  {
    step: "1",
    title: "Producer",
    description: "The owning system records a change.",
    role: "Owning service",
  },
  {
    step: "2",
    title: "Verification",
    description: "The subscriber checks that a notification is authentic before trusting it.",
    role: "Subscriber",
  },
  {
    step: "3",
    title: "Dispatch",
    description: "A notification is sent to subscribed endpoints. Timing is not guaranteed.",
    role: "Platform",
  },
  {
    step: "4",
    title: "Subscriber",
    description: "Your system receives and records the notification.",
    role: "Your system",
  },
  {
    step: "5",
    title: "Application action",
    description: "Your application re-checks current authority and decides what to do.",
    role: "Your system",
  },
  {
    step: "6",
    title: "Evidence",
    description: "The owning system keeps the authoritative record.",
    role: "Owning service",
  },
];

export default function WebhooksLifecycleSection() {
  return (
    <section className="bg-grey-98 px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 sm:gap-14">
        {/* Header */}
        <div>
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl md:text-[46px]">
            Who does what
          </h2>
        </div>

        {/* Feature Image Banner */}
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl bg-slate-200 shadow-xs sm:aspect-[24/8]">
          <Image
            src="/webhooks-events/lifecycle-who-does-what.webp"
            alt="Developer testing code on a monitor"
            fill
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
          />
        </div>

        {/* 6-step lifecycle cards / column flow */}
        <div className="grid grid-cols-1 gap-6 border-t border-grey-91 pt-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {steps.map((item) => (
            <div
              key={item.step}
              className="flex flex-col justify-between rounded-xl bg-white-solid p-5 shadow-xs lg:bg-transparent lg:p-0 lg:shadow-none"
            >
              <div className="flex flex-col gap-3">
                <span className="font-dm-serif text-3xl font-normal text-azure-48 sm:text-[34px]">
                  {item.step}
                </span>
                <h3 className="font-manrope text-base font-bold text-azure-9">
                  {item.title}
                </h3>
                <p className="font-manrope text-sm font-normal leading-relaxed text-azure-47">
                  {item.description}
                </p>
              </div>

              <div className="mt-5">
                <span className="inline-flex items-center rounded-full bg-slate-200 px-3 py-1 font-manrope text-xs font-bold text-azure-9">
                  {item.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
