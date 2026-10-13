import Image from "next/image";

const stages = [
  {
    title: "1. Invite",
    description: (
      <>
        Organization initiates
        <br />
        invitation. Email or
        <br />
        link sent to
        <br />
        candidate.
      </>
    ),
    icon: "/b2b-saas/icons/lifecycle-1.svg",
  },
  {
    title: "2. Accept",
    description: (
      <>
        Invitee accepts.
        <br />
        Membership pending
        <br />
        approval or auto-
        <br />
        approved.
      </>
    ),
    icon: "/b2b-saas/icons/lifecycle-2.svg",
  },
  {
    title: "3. Approve",
    description: (
      <>
        Admin approves.
        <br />
        Membership active.
        <br />
        Policies applied
        <br />
        based on role.
      </>
    ),
    icon: "/b2b-saas/icons/lifecycle-3.svg",
  },
  {
    title: "4. Active",
    description: (
      <>
        Membership valid.
        <br />
        Access granted per
        <br />
        policy. Monitored for
        <br />
        changes.
      </>
    ),
    icon: "/b2b-saas/icons/lifecycle-4.svg",
  },
  {
    title: "5. Expire",
    description: (
      <>
        Membership expires
        <br />
        at scheduled time.
        <br />
        Access revoked
        <br />
        automatically.
      </>
    ),
    icon: "/b2b-saas/icons/lifecycle-5.svg",
  },
  {
    title: "6. Revoke",
    description: (
      <>
        Admin revokes
        <br />
        immediately. All
        <br />
        sessions terminated.
        <br />
        Logged.
      </>
    ),
    icon: "/b2b-saas/icons/lifecycle-6.svg",
  },
];

export default function MembershipLifecycleSection() {
  return (
    <section className="bg-grey-96 px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-[60px]">
        <h2 className="text-center font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl lg:text-[52px] lg:leading-[59.8px]">
          Membership lifecycle
        </h2>

        <div className="flex w-full flex-col items-center gap-4 xl:flex-row xl:justify-between xl:gap-0">
          {stages.map((stage, index) => (
            <div key={stage.title} className="flex w-full items-center justify-center xl:w-auto">
              <article className="flex w-full max-w-[280px] flex-col items-center justify-start text-center gap-2.5 rounded-xl border border-grey-91 bg-white-solid px-3 py-5 shadow-xs xl:w-[170px] xl:max-w-[170px] xl:h-[242px] shrink-0">
                <div className="flex size-10 items-center justify-center">
                  <Image
                    src={stage.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="size-8"
                  />
                </div>

                <h3 className="font-manrope text-[16px] font-bold text-azure-9">
                  {stage.title}
                </h3>

                <p className="font-manrope text-[13px] font-normal leading-[20px] text-azure-47 sm:text-[13.5px] sm:leading-[21px]">
                  {stage.description}
                </p>
              </article>

              {index < stages.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden xl:block h-[2px] w-5 shrink-0 bg-cyan-49"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
