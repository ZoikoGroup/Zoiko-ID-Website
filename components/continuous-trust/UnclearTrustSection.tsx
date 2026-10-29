import type { ReactNode } from "react";

/* ===== Desktop layout (>= lg) ===== */
const dRows: [string, string, string][] = [
  ["Stale signal", "The age of the observation and the next action required", "Security owner"],
  ["Source unavailable", "That the source cannot be reached. No safe outcome is asserted.", "Incident owner"],
  ["Denied or revoked", "That access has changed, without disclosing sensitive policy detail", "Privacy and security"],
  ["Disputed authority", "That the decision is under review, and how to appeal", "Authorized reviewer"],
  ["Recovery", "How access can be re-established, once verified", "Sponsor and issuer"],
];



function DesktopUnclearTrust() {
  return (
    <section className="flex w-full flex-col gap-[60px] bg-[#f4f6fa] px-[160px] py-[105px]">
      <div className="flex w-full flex-col gap-[15px]">
        <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#071121]">
          What the page and the system show when trust is unclear
        </h2>
        <p className="max-w-[720px] pt-px font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] xl:whitespace-nowrap">
          Uncertainty is shown, not hidden. When a signal is stale, missing or its source is down, <br className="max-xl:hidden" />
          the outcome is the security-approved default, and the reason is stated. A missing signal is <br className="max-xl:hidden" />
          never presented as a safe result.
        </p>
      </div>
      <div className="w-full overflow-auto rounded-[18px]">
        <table className="w-full table-fixed border-collapse border border-solid border-[#d9e1ec] bg-white text-left">
          <colgroup>
            <col style={{ width: "21.38%" }} />
            <col style={{ width: "57.54%" }} />
            <col style={{ width: "21.08%" }} />
          </colgroup>
          <thead>
            <tr>
              {["State", "What is shown", "Owner"].map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="whitespace-nowrap border-b border-solid border-[#0f2140] bg-[#0f2140] px-[20px] py-[15.5px] text-left font-manrope text-[13px] font-bold leading-[22.1px] text-white"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dRows.map(([state, shown, owner], i) => {
              const last = i === dRows.length - 1;
              const pad = last ? "pb-[17.3px] pt-[15.5px]" : "py-[16px] border-b border-solid border-[#d9e1ec]";
              return (
                <tr key={state}>
                  <th
                    scope="row"
                    className={`whitespace-nowrap px-[20px] text-left font-manrope text-[14px] font-bold leading-[23.8px] text-[#071121] ${pad}`}
                  >
                    {state}
                  </th>
                  <td className={`whitespace-nowrap px-[20px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#334155] ${pad}`}>
                    {shown}
                  </td>
                  <td className={`whitespace-nowrap px-[20px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#334155] ${pad}`}>
                    {owner}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ===== Mobile layout (< lg) ===== */


const mRows: { state: ReactNode; shown: ReactNode; owner: ReactNode }[] = [
  {
    state: (
      <>
        Stale
        <br />
        signal
      </>
    ),
    shown: (
      <>
        The age of
        <br />
        the
        <br />
        observation
        <br />
        and the next
        <br />
        action
        <br />
        required
      </>
    ),
    owner: (
      <>
        Security
        <br />
        owner
      </>
    ),
  },
  {
    state: (
      <>
        Source
        <br />
        unavailable
      </>
    ),
    shown: (
      <>
        That the
        <br />
        source
        <br />
        cannot be
        <br />
        reached. No
        <br />
        safe
        <br />
        outcome is
        <br />
        asserted.
      </>
    ),
    owner: (
      <>
        Incident
        <br />
        owner
      </>
    ),
  },
  {
    state: (
      <>
        Denied or
        <br />
        revoked
      </>
    ),
    shown: (
      <>
        That access
        <br />
        has
        <br />
        changed,
        <br />
        without
        <br />
        disclosing
        <br />
        sensitive
        <br />
        policy detail
      </>
    ),
    owner: (
      <>
        Privacy
        <br />
        and
        <br />
        security
      </>
    ),
  },
  {
    state: (
      <>
        Disputed
        <br />
        authority
      </>
    ),
    shown: (
      <>
        That the
        <br />
        decision is
        <br />
        under
        <br />
        review, and
        <br />
        how to
        <br />
        appeal
      </>
    ),
    owner: (
      <>
        Authorized
        <br />
        reviewer
      </>
    ),
  },
  {
    state: <>Recovery</>,
    shown: (
      <>
        How access
        <br />
        can be re-
        <br />
        established,
        <br />
        once
        <br />
        verified
      </>
    ),
    owner: (
      <>
        Sponsor
        <br />
        and issuer
      </>
    ),
  },
];



function MobileStatesFailSafe() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] bg-[#f4f6fa] px-[22px] pb-[60px] pt-[67.31px] lg:hidden">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[14.7px]">
        <div className="flex items-center gap-[12px]">
          <div className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] whitespace-nowrap text-[#22b8d6]">
            09 · States and fail-safe
          </p>
        </div>
        <h2 className="font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#071121] whitespace-nowrap">
          What the page and the
          <br />
          system show when trust is
          <br />
          unclear
        </h2>
        <p className="max-w-[720px] pt-[0.79px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] whitespace-nowrap">
          Uncertainty is shown, not hidden. When a
          <br />
          signal is stale, missing or its source is
          <br />
          down, the outcome is the security-
          <br />
          approved default, and the reason is stated.
          <br />
          A missing signal is never presented as a
          <br />
          safe result.
        </p>
        <div className="mt-[14.6px] w-full overflow-x-auto rounded-[18px] whitespace-nowrap">
          <table className="w-full min-w-[345px] border-collapse border border-solid border-[#d9e1ec] bg-white text-left">
            <colgroup>
              <col style={{ width: "34.04%" }} />
              <col style={{ width: "34.58%" }} />
              <col style={{ width: "31.38%" }} />
            </colgroup>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="border-b border-solid border-[#d9e1ec] bg-[#eef2f7] px-[20px] py-[15.5px] align-top font-manrope text-[13px] font-bold leading-[22.1px] whitespace-nowrap text-[#071121]"
                >
                  State
                </th>
                <th
                  scope="col"
                  className="border-b border-solid border-[#d9e1ec] bg-[#eef2f7] px-[20px] py-[15.5px] align-top font-manrope text-[13px] font-bold leading-[22.1px] whitespace-nowrap text-[#071121]"
                >
                  What is
                  <br />
                  shown
                </th>
                <th
                  scope="col"
                  className="border-b border-solid border-[#d9e1ec] bg-[#eef2f7] px-[20px] py-[15.5px] align-top font-manrope text-[13px] font-bold leading-[22.1px] whitespace-nowrap text-[#071121]"
                >
                  Owner
                </th>
              </tr>
            </thead>
            <tbody>
              {mRows.map((r, i) => {
                const border =
                  i < mRows.length - 1
                    ? "border-b border-solid border-[#d9e1ec]"
                    : "";
                return (
                  <tr key={i}>
                    <th
                      scope="row"
                      className={`${border} px-[20px] py-[16px] align-top font-manrope text-[14px] font-bold leading-[23.8px] whitespace-nowrap text-[#071121]`}
                    >
                      {r.state}
                    </th>
                    <td
                      className={`${border} px-[20px] py-[16px] align-top font-manrope text-[14px] font-normal leading-[23.8px] whitespace-nowrap text-[#334155]`}
                    >
                      {r.shown}
                    </td>
                    <td
                      className={`${border} px-[20px] py-[16px] align-top font-manrope text-[14px] font-normal leading-[23.8px] whitespace-nowrap text-[#334155]`}
                    >
                      {r.owner}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default function UnclearTrustSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopUnclearTrust />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobileStatesFailSafe />
      </div>
    </>
  );
}
