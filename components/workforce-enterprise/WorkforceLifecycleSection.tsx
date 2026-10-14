import Image from "next/image";
import type { ReactNode } from "react";

interface LifecycleCard {
  icon: string;
  title: ReactNode;
  description: ReactNode;
}

const lifecycleSteps: LifecycleCard[] = [
  {
    icon: "/workforce-enterprise/lifecycle-onboard.svg",
    title: "1. Onboard",
    description: (
      <>
        Employee hired.
        <br />
        Provisioned in IdP
        <br />
        and HRIS. Awaiting
        <br />
        role assignment.
      </>
    ),
  },
  {
    icon: "/workforce-enterprise/lifecycle-assign-role.svg",
    title: "2. Assign Role",
    description: (
      <>
        Manager assigns
        <br />
        role. Access policies
        <br />
        activated. Context
        <br />
        established.
      </>
    ),
  },
  {
    icon: "/workforce-enterprise/lifecycle-active-access.svg",
    title: "3. Active Access",
    description: (
      <>
        Employee performs
        <br />
        authorized actions.
        <br />
        Decisions audited.
        <br />
        Continuous monitoring.
      </>
    ),
  },
  {
    icon: "/workforce-enterprise/lifecycle-role-change.svg",
    title: "4. Role Change",
    description: (
      <>
        Promotion or
        <br />
        transfer. New role
        <br />
        activated. Old access
        <br />
        revoked immediately.
      </>
    ),
  },
  {
    icon: "/workforce-enterprise/lifecycle-leave.svg",
    title: (
      <>
        5. Leave /
        <br />
        Suspend
      </>
    ),
    description: (
      <>
        Planned time off or
        <br />
        leave. Access paused. Automatically
        <br />
        resumed or revoked.
      </>
    ),
  },
];

export default function WorkforceLifecycleSection() {
  return (
    <section id="workforce-lifecycle" className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12 lg:gap-[60px]">
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Workforce lifecycle & trust model
        </h2>

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {lifecycleSteps.map((step, idx) => (
            <div
              key={idx}
              className="flex min-h-[265px] flex-col items-center rounded-xl border border-mystic bg-white-solid p-6 text-center shadow-[0px_1px_3px_0px_rgba(15,23,42,0.03)] transition-all duration-200 hover:shadow-md"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center">
                <Image
                  src={step.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </div>

              <h4 className="mb-3 font-manrope text-[16.8px] font-bold leading-snug text-azure-9">
                {step.title}
              </h4>

              <p className="font-manrope text-[14.4px] font-normal leading-[25.2px] text-azure-47">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
