import Image from "next/image";

export default function AuthorityDenialSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-14 lg:gap-16">
        {/* Heading */}
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#0B1B33] sm:text-5xl lg:text-[52px] lg:leading-[51.92px]">
            A request outside its scope is refused
          </h2>
          <p className="max-w-[820px] font-manrope text-base font-normal leading-[25.6px] text-[#64748B]">
            Example: a delegate may read one resource but asks to change it. The decision must check the action, the resource and current context separately. The delegate&apos;s identity alone is not enough.
          </p>
        </div>

        {/* 2 Scope Cards (Within vs Outside) */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {/* Within Scope Card */}
          <div className="flex flex-col gap-5 rounded-[18px] border border-[#E2E8F0] border-t-4 border-t-[#16A34A] bg-white-solid p-7 shadow-sm">
            <h3 className="font-manrope text-[17px] font-bold leading-6 text-[#0B1B33]">
              Within scope (illustrative)
            </h3>
            <ul className="flex flex-col gap-3 font-manrope text-sm leading-[22.4px] text-[#334155]">
              <li className="flex items-center gap-2.5">
                <Image
                  src="/authority-explainers/denial-check-1.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="size-[18px] shrink-0"
                />
                <span>Action: read</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Image
                  src="/authority-explainers/denial-check-2.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="size-[18px] shrink-0"
                />
                <span>Resource: the named record</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Image
                  src="/authority-explainers/denial-check-3.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="size-[18px] shrink-0"
                />
                <span>Context: within the time window</span>
              </li>
            </ul>
          </div>

          {/* Outside Scope Card */}
          <div className="flex flex-col gap-5 rounded-[18px] border border-[#E2E8F0] border-t-4 border-t-[#DC2626] bg-white-solid p-7 shadow-sm">
            <h3 className="font-manrope text-[17px] font-bold leading-6 text-[#0B1B33]">
              Outside scope (illustrative)
            </h3>
            <ul className="flex flex-col gap-3 font-manrope text-sm leading-[22.4px] text-[#334155]">
              <li className="flex items-center gap-2.5">
                <Image
                  src="/authority-explainers/denial-cross-1.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="size-[18px] shrink-0"
                />
                <span>Action: update, not granted</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Image
                  src="/authority-explainers/denial-cross-2.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="size-[18px] shrink-0"
                />
                <span>Decision: denied, with neutral reason</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Image
                  src="/authority-explainers/denial-cross-3.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="size-[18px] shrink-0"
                />
                <span>Identity alone: insufficient</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Abstract Data Visualization Banner */}
        <div className="relative h-[240px] w-full overflow-hidden rounded-[20px] bg-[#F1F5F9] shadow-sm sm:h-[330px]">
          <Image
            src="/authority-explainers/denial-data-viz.webp"
            alt="Abstract data visualization"
            fill
            sizes="(min-width: 1024px) 1120px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
