import Image from "next/image";
import type { ReactNode } from "react";

/* ===== Shared content ===== */

const bindingRows: { field: string; dPurpose: string; mPurpose: ReactNode }[] = [
  {
    field: "actor_class",
    dPurpose: "Which kind of principal this is",
    mPurpose: (
      <>
        Which kind of principal this
        <br />
        is
      </>
    ),
  },
  {
    field: "owner",
    dPurpose: "The accountable person or team",
    mPurpose: (
      <>
        The accountable person or
        <br />
        team
      </>
    ),
  },
  { field: "issuer", dPurpose: "Who issued the identity", mPurpose: "Who issued the identity" },
  {
    field: "scope",
    dPurpose: "What the principal may touch",
    mPurpose: (
      <>
        What the principal may
        <br />
        touch
      </>
    ),
  },
  {
    field: "lifecycle_state",
    dPurpose: "Where the principal is in its life",
    mPurpose: (
      <>
        Where the principal is in its
        <br />
        life
      </>
    ),
  },
];

/* ===== Desktop layout (>= lg) ===== */

function DesktopBinding() {
  return (
    <section className="flex w-full flex-col items-start bg-white px-[160px] py-[105px]">
      <div className="flex w-full items-center justify-center gap-[70px]">
        <div className="flex min-w-px flex-1 flex-col items-start gap-[60px] pt-[7.31px]">
          <div className="flex w-full flex-col items-start gap-[15px]">
            <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#071121]">
              Every principal is bound to an owner
            </h2>
            <p className="w-full max-w-[720px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
              Before a principal can act, its identity is registered and bound to <br className="max-xl:hidden" />
              an owner. The binding is recorded, and it can be changed only by an authorized person. The fields below are illustrative.
            </p>
          </div>
          <table className="w-full overflow-clip rounded-[18px] border border-solid border-[#d9e1ec] bg-white [border-collapse:separate] [border-spacing:0]">
            <thead>
              <tr>
                <th className="w-[35.7%] border-b border-solid border-[#d9e1ec] bg-[#eef2f7] px-[18px] pb-[13.59px] pt-[13.5px] text-left align-top font-manrope text-[13px] font-bold leading-[22.1px] text-[#071121]">
                  Field
                </th>
                <th className="border-b border-solid border-[#d9e1ec] bg-[#eef2f7] px-[18px] pb-[13.59px] pt-[13.5px] text-left align-top font-manrope text-[13px] font-bold leading-[22.1px] text-[#071121]">
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody>
              {bindingRows.map((r, i) => {
                const last = i === bindingRows.length - 1;
                const border = last ? "" : "border-b border-solid border-[#d9e1ec]";
                const pad = last ? "px-[18px] pb-[15.3px] pt-[13.5px]" : "px-[18px] py-[14px]";
                return (
                  <tr key={r.field}>
                    <th
                      scope="row"
                      className={`${border} ${pad} whitespace-nowrap text-left align-top font-manrope text-[14px] font-bold leading-[23.8px] text-[#071121]`}
                    >
                      {r.field}
                    </th>
                    <td
                      className={`${border} ${pad} whitespace-nowrap align-top font-manrope text-[14px] font-normal leading-[23.8px] text-[#334155]`}
                    >
                      {r.dPurpose}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="relative h-[500px] min-w-px flex-1 rounded-[24px]">
          <Image
            src="/machine-agent-identity/desktop-sponsor-laptop.webp"
            alt="A person working at a laptop"
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="rounded-[24px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* ===== Mobile layout (< lg) ===== */

function MobileBinding() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-center gap-[50px]">
        <div className="flex w-full flex-col items-start gap-[14.8px] pt-[7.31px]">
          <div className="flex items-center gap-[12px]">
            <span className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
            <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6] whitespace-nowrap">
              06 · Registration and binding
            </p>
          </div>
          <h2 className="w-full pb-[0.745px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#071121]">
            Every principal is bound
            <br />
            to an owner
          </h2>
          <p className="w-full max-w-[720px] pt-[1.2px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
            Before a principal can act, its identity is
            <br />
            registered and bound to an owner. The
            <br />
            binding is recorded, and it can be changed
            <br />
            only by an authorized person. The fields
            <br />
            below are illustrative.
          </p>
          <table className="w-full overflow-clip rounded-[18px] border border-solid border-[#d9e1ec] bg-white pt-[16.7px] [border-collapse:separate] [border-spacing:0]">
            <thead>
              <tr>
                <th className="w-[38.3%] border-b border-solid border-[#d9e1ec] bg-[#eef2f7] px-[18px] pb-[13.59px] pt-[13.5px] text-left align-top font-manrope text-[13px] font-bold leading-[22.1px] text-[#071121]">
                  Field
                </th>
                <th className="border-b border-solid border-[#d9e1ec] bg-[#eef2f7] px-[18px] pb-[13.59px] pt-[13.5px] text-left align-top font-manrope text-[13px] font-bold leading-[22.1px] text-[#071121]">
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody>
              {bindingRows.map((r, i) => {
                const last = i === bindingRows.length - 1;
                const border = last ? "" : "border-b border-solid border-[#d9e1ec]";
                return (
                  <tr key={r.field}>
                    <th
                      scope="row"
                      className={`${border} whitespace-nowrap px-[18px] pt-[13.5px] text-left align-top font-manrope text-[14px] font-bold leading-[23.8px] text-[#071121]`}
                    >
                      {r.field}
                    </th>
                    <td
                      className={`${border} whitespace-nowrap px-[18px] py-[14px] align-top font-manrope text-[14px] font-normal leading-[23.8px] text-[#334155]`}
                    >
                      {r.mPurpose}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex w-full flex-col items-start pt-[20.7px]">
            <span className="rounded-[999px] bg-[#ede9fe] px-[10px] py-[5px] font-manrope text-[11px] font-extrabold uppercase leading-[18.7px] tracking-[0.88px] text-[#6d28d9] whitespace-nowrap">
              Illustrative
            </span>
          </div>
        </div>
        <div className="relative h-[300px] w-full shrink-0 rounded-[24px]">
          <Image
            src="/machine-agent-identity/mobile-sponsor-laptop.webp"
            alt="A person working at a laptop"
            fill
            sizes="(max-width: 560px) 100vw, 560px"
            className="rounded-[24px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default function BindingSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopBinding />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobileBinding />
      </div>
    </>
  );
}
