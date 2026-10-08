export default function WhatIsZoikoSection() {
  return (
    <section className="bg-white-solid px-6 py-12 sm:px-10 lg:px-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8 rounded-2xl bg-cyan-500/5 px-6 pb-12 pt-10 outline-1 -outline-offset-1 outline-cyan-500/40 sm:px-8 lg:min-h-96 lg:justify-center lg:gap-10">
        <h2 className="text-center font-dm-serif text-4xl font-normal text-azure-9 sm:text-5xl">
          What is Zoiko iD?
        </h2>

        <div className="flex max-w-[860px] flex-col gap-3.5 text-center font-manrope text-base font-normal leading-7 text-azure-35">
          <p>
            Zoiko iD is programmable identity infrastructure that helps
            applications and enterprises authenticate people and workloads,
            verify credentials and organizations, authorize actions, govern
            delegated authority, respond to trust signals, and preserve
            audit-ready evidence.
          </p>
          <p>
            In practical terms: Zoiko iD is designed to help a system answer
            four connected questions: Who or what is acting? What may they do?
            Why is that authority valid now? Can the decision be explained
            later?
          </p>
        </div>
      </div>
    </section>
  );
}
