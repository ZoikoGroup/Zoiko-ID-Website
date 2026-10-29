import Image from "next/image";

/* ===== Desktop layout (>= lg) ===== */


const dCards = [
  {
    img: "/continuous-trust/desktop-credential-lock.webp",
    icon: "/continuous-trust/desktop-icon-key.svg",
    title: "Credential",
    body: (
      <>
        An identity credential can be invalidated. That<br className="max-xl:hidden" />{" "}
        affects future presentations, not work already<br className="max-xl:hidden" />{" "}
        completed.
      </>
    ),
  },
  {
    img: "/continuous-trust/desktop-session-code.webp",
    icon: "/continuous-trust/desktop-icon-clock-2.svg",
    title: "Session",
    body: (
      <>
        A live session can be ended. Its termination timing<br className="max-xl:hidden" />{" "}
        depends on the integration that holds it.
      </>
    ),
  },
  {
    img: "/continuous-trust/desktop-grant-documents.webp",
    icon: "/continuous-trust/desktop-icon-doc.svg",
    title: "Delegated grant",
    body: (
      <>
        A grant of authority can be withdrawn. Records of<br className="max-xl:hidden" />{" "}
        what was done under it remain as evidence.
      </>
    ),
  },
];



function DesktopLifecycle() {
  return (
    <section className="flex w-full flex-col items-start gap-[60px] bg-white px-[160px] py-[105px]">
      <div className="flex w-full flex-col gap-[15px]">
        <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#071121]">
          Credentials, sessions and grants end differently
        </h2>
        <p className="w-full max-w-[720px] pt-[1.11px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] xl:whitespace-nowrap">
          Revoking one thing does not revoke everything. An identity credential, a live session and a<br className="max-xl:hidden" />{" "}
          delegated grant each have their own termination rules. Which rule applies depends on the<br className="max-xl:hidden" />{" "}
          specific credential, the session and the integration involved.
        </p>
      </div>
      <ul className="grid w-full grid-cols-3 items-stretch overflow-hidden rounded-[26px] border border-[#d9e1ec] bg-white">
        {dCards.map((c, i) => (
          <li
            key={c.title}
            className={`flex min-w-0 flex-col ${i < 2 ? "border-r border-[#d9e1ec]" : ""}`}
          >
            <div className="relative h-[200px] w-full shrink-0">
              <Image src={c.img} alt="" fill sizes="33vw" className="object-cover" />
            </div>
            <div className="flex min-h-[274px] flex-1 flex-col justify-between p-[24px]">
              <div className="flex w-full flex-col gap-[11px]">
                <div className="flex h-[43.2px] w-[42px] items-center justify-center rounded-[12px] bg-[#e4f3f8] pb-[1.2px]">
                  <Image src={c.icon} width={20} height={20} alt="" />
                </div>
                <h3 className="font-manrope text-[18px] font-bold leading-[25.2px] text-[#071121]">
                  {c.title}
                </h3>
                <p className="pb-[0.6px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">
                  {c.body}
                </p>
              </div>
              <div className="flex w-full flex-col items-start justify-end pt-[1.2px]">
                <span className="inline-flex items-center justify-center whitespace-nowrap rounded-[999px] bg-[#fef3c7] px-[12px] py-[6px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#92400e]">
                  Scope pending engineering
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ===== Mobile layout (< lg) ===== */


const mCards = [
  {
    img: "/continuous-trust/mobile-credential-lock.webp",
    icon: "/continuous-trust/mobile-icon-key-1.svg",
    title: "Credential",
    text: (
      <>
        An identity credential can be invalidated. That
        <br />
        affects future presentations, not work already
        <br />
        completed.
      </>
    ),
  },
  {
    img: "/continuous-trust/mobile-session-code.webp",
    icon: "/continuous-trust/mobile-icon-clock-2.svg",
    title: "Session",
    text: (
      <>
        A live session can be ended. Its termination
        <br />
        timing depends on the integration that holds it.
      </>
    ),
  },
  {
    img: "/continuous-trust/mobile-grant-documents.webp",
    icon: "/continuous-trust/mobile-icon-doc.svg",
    title: "Delegated grant",
    text: (
      <>
        A grant of authority can be withdrawn. Records
        <br />
        of what was done under it remain as evidence.
      </>
    ),
  },
];



function MobileRevocation() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] bg-white px-[22px] pb-[60px] pt-[67.31px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[14.8px]">
        <div className="flex items-center gap-[12px]">
          <div className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] whitespace-nowrap text-[#22b8d6]">
            06 · Revocation
          </p>
        </div>
        <h2 className="w-full pb-[0.745px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#071121]">
          Credentials, sessions and
          <br />
          grants end differently
        </h2>
        <p className="w-full max-w-[720px] pt-[0.685px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] whitespace-nowrap">
          Revoking one thing does not revoke
          <br />
          everything. An identity credential, a live
          <br />
          session and a delegated grant each have
          <br />
          their own termination rules. Which rule
          <br />
          applies depends on the specific credential,
          <br />
          the session and the integration involved.
        </p>
        <div className="relative flex w-full flex-col items-start overflow-clip rounded-[26px] border border-solid border-[#d9e1ec] bg-white pt-[17.2px]">
          {mCards.map((c) => (
            <div key={c.title} className="flex w-full flex-col items-start">
              <div className="relative h-[200px] w-full overflow-hidden">
                <Image src={c.img} alt="" fill sizes="(max-width: 1023px) 100vw" className="object-cover" />
              </div>
              <div className="flex w-full flex-col items-start gap-[10.8px] p-[24px]">
                <div className="flex h-[43.2px] w-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8] pb-[1.2px]">
                  <Image src={c.icon} width={20} height={20} alt="" />
                </div>
                <h3 className="w-full font-manrope text-[18px] font-bold leading-[25.2px] whitespace-nowrap text-[#071121]">
                  {c.title}
                </h3>
                <p className="w-full pb-[0.595px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82] whitespace-nowrap">
                  {c.text}
                </p>
                <div className="flex w-full flex-col items-start justify-end pt-[1.2px]">
                  <span className="rounded-[999px] bg-[#fef3c7] px-[12px] pb-[5.89px] pt-[15.5px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] whitespace-nowrap text-[#92400e]">
                    Scope pending engineering
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function LifecycleSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopLifecycle />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobileRevocation />
      </div>
    </>
  );
}
