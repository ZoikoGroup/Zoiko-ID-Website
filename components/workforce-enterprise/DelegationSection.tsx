import Image from "next/image";

interface DelegationFeature {
  icon: string;
  title: string;
  description: string;
}

const delegationFeatures: DelegationFeature[] = [
  {
    icon: "/workforce-enterprise/delegation-scope.svg",
    title: "Scope",
    description: "Exactly which actions they can approve",
  },
  {
    icon: "/workforce-enterprise/delegation-time-limit.svg",
    title: "Time Limit",
    description: "Days, weeks, or until explicitly revoked",
  },
  {
    icon: "/workforce-enterprise/delegation-audit-trail.svg",
    title: "Audit Trail",
    description: "Every delegated action logged with mandate reference",
  },
];

export default function DelegationSection() {
  return (
    <section id="delegation" className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12 lg:gap-[60px]">
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Delegation & least privilege
        </h2>

        <div className="flex w-full flex-col items-center justify-between gap-12 lg:flex-row lg:gap-14">
          {/* Left Column: Copy & Feature List */}
          <div className="flex w-full max-w-[620px] flex-col">
            <h3 className="mb-3 font-dm-serif text-2xl font-normal leading-snug text-azure-9 sm:text-[22.4px]">
              Bounded Delegation
            </h3>

            <p className="mb-8 font-manrope text-base font-normal leading-7 text-[#475569]">
              A manager can delegate approval authority, access requests, or
              <br />
              time-limited permissions to a team member. Every delegation
              <br />
              includes:
            </p>

            <div className="flex flex-col gap-4 rounded-xl border border-mystic bg-white-solid p-6 shadow-[0px_1px_3px_0px_rgba(15,23,42,0.03)] sm:p-7">
              {delegationFeatures.map((feat) => (
                <div key={feat.title} className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center">
                    <Image
                      src={feat.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="h-5 w-5"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-manrope text-[15.2px] font-semibold leading-normal text-[#475569]">
                      {feat.title}
                    </span>
                    <span className="font-manrope text-[13.6px] font-normal leading-normal text-azure-47">
                      {feat.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Graphic */}
          <div className="relative aspect-[600/400] w-full max-w-[580px] shrink-0 overflow-hidden rounded-xl border border-mystic shadow-[0px_4px_20px_0px_rgba(15,23,42,0.06)] lg:h-[400px] lg:-translate-x-[25px]">
            <Image
              src="/workforce-enterprise/delegation-graphic.png"
              alt="Bounded delegation architecture"
              fill
              sizes="(min-width: 1024px) 580px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
