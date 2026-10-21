import Image from "next/image";

interface LifecycleStep {
  num: number;
  icon: string;
  title: string;
  desc: string;
}

const steps: LifecycleStep[] = [
  {
    num: 1,
    icon: "/authority-explainers/lifecycle-icon-1.svg",
    title: "Establish actor",
    desc: "Who is acting",
  },
  {
    num: 2,
    icon: "/authority-explainers/lifecycle-icon-2.svg",
    title: "Establish source",
    desc: "Where authority comes from",
  },
  {
    num: 3,
    icon: "/authority-explainers/lifecycle-icon-3.svg",
    title: "Scope mandate",
    desc: "What it covers",
  },
  {
    num: 4,
    icon: "/authority-explainers/lifecycle-icon-4.svg",
    title: "Evaluate action",
    desc: "Is this request in bounds",
  },
  {
    num: 5,
    icon: "/authority-explainers/lifecycle-icon-5.svg",
    title: "Handle change",
    desc: "Re-evaluate or revoke",
  },
  {
    num: 6,
    icon: "/authority-explainers/lifecycle-icon-6.svg",
    title: "Preserve evidence",
    desc: "Keep what is needed",
  },
];

export default function AuthorityLifecycleSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-14 lg:gap-16">
        {/* Heading */}
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <h2 className="max-w-[914px] font-dm-serif text-3xl font-normal leading-tight text-[#0B1B33] sm:text-5xl lg:text-[52px] lg:leading-[57.9px]">
            How delegated authority begins, changes and ends
          </h2>
          <p className="max-w-[780px] font-manrope text-base font-normal leading-[25.6px] text-[#64748B]">
            A teaching sequence. It is a conceptual model, not a description of any running system.
          </p>
        </div>

        {/* 6 Steps Diagram */}
        <div className="relative w-full py-7">
          {/* Connecting gradient line (visible on lg+) */}
          <div
            aria-hidden="true"
            className="absolute left-10 right-10 top-[60px] hidden h-[3px] bg-[linear-gradient(90deg,#22B8D6_0%,#2563EB_100%)] lg:block"
          />

          <div className="grid w-full grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6 lg:gap-4">
            {steps.map((s) => (
              <div key={s.num} className="relative z-10 flex flex-col items-center gap-3 text-center">
                {/* Step Circle with Icon */}
                <div className="flex size-14 items-center justify-center rounded-2xl border-2 border-white-solid bg-[#F1F5F9] shadow-md transition-transform duration-150 hover:scale-105">
                  <Image
                    src={s.icon}
                    alt=""
                    width={22}
                    height={22}
                    className="size-[22px] text-[#0B1B33]"
                  />
                </div>

                {/* Step title & subtitle */}
                <div className="flex flex-col gap-1">
                  <span className="font-manrope text-sm font-bold text-[#0B1B33]">
                    {s.title}
                  </span>
                  <span className="font-manrope text-xs font-normal text-[#64748B]">
                    {s.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buttery Yellow Warning Banner */}
        <div className="flex w-full items-start gap-3.5 rounded-r-xl border-l-4 border-[#F59E0B] bg-[#FFFBEB] p-5 shadow-xs">
          <div className="flex size-6 shrink-0 items-center justify-center pt-0.5">
            <Image
              src="/authority-explainers/lifecycle-icon-7.svg"
              alt=""
              width={22}
              height={22}
              className="size-[22px]"
            />
          </div>
          <p className="font-manrope text-sm font-bold leading-6 text-[#0B1B33] sm:text-[15px]">
            Unknown currency is not current permission.{" "}
            <span className="font-normal text-[#0B1B33]">
              If the status of an authority is not confirmed, this page does not treat it as an active grant.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
