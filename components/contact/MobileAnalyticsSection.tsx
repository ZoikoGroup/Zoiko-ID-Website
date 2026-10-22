import Image from "next/image";
import type { ReactNode } from "react";

type Row = {
  event: string;
  safe: ReactNode;
  never: ReactNode;
};

const rows: Row[] = [
  {
    event: "contact_view",
    safe: (
      <>
        page
        <br />
        version,
        <br />
        locale
      </>
    ),
    never: (
      <>
        IP address,
        <br />
        email,
        <br />
        name
      </>
    ),
  },
  {
    event: "contact_intent_select",
    safe: (
      <>
        intent
        <br />
        category,
        <br />
        origin
        <br />
        page
      </>
    ),
    never: (
      <>
        message
        <br />
        content
      </>
    ),
  },
  {
    event: "contact_route_click",
    safe: (
      <>
        destination
        <br />
        type, link
        <br />
        ID
      </>
    ),
    never: (
      <>
        private
        <br />
        URL
        <br />
        parameters
      </>
    ),
  },
  {
    event: "corporate_form_validation",
    safe: (
      <>
        field key,
        <br />
        error
        <br />
        category
      </>
    ),
    never: (
      <>
        entered
        <br />
        values
      </>
    ),
  },
  {
    event: "corporate_form_submit_result",
    safe: (
      <>
        success or
        <br />
        failure
        <br />
        class
      </>
    ),
    never: (
      <>
        full receipt
        <br />
        token
      </>
    ),
  },
  {
    event: "contact_route_unavailable",
    safe: (
      <>
        route type,
        <br />
        page
        <br />
        version
      </>
    ),
    never: (
      <>
        personal
        <br />
        details
      </>
    ),
  },
];

type Measure = {
  icon: string;
  iconBg: string;
  title: string;
  body: ReactNode;
};

const measures: Measure[] = [
  {
    icon: "/contact/mobile-icon-chart.svg",
    iconBg: "bg-[#e4f3f8]",
    title: "Primary measure",
    body: (
      <>
        Successful qualified handoff to the right
        <br />
        destination.
      </>
    ),
  },
  {
    icon: "/contact/mobile-icon-flow.svg",
    iconBg: "bg-[#e4f3f8]",
    title: "Secondary measure",
    body: (
      <>
        Self-service deflection and fewer misrouted
        <br />
        requests.
      </>
    ),
  },
  {
    icon: "/contact/mobile-icon-alert.svg",
    iconBg: "bg-[#fee2e2]",
    title: "Guardrails",
    body: (
      <>
        Assistive-technology abandonment, error
        <br />
        rates and reports of misrouted sensitive
        <br />
        submissions.
      </>
    ),
  },
];

export default function MobileAnalyticsSection() {
  return (
    <section
      id="analytics"
      className="flex w-full flex-col gap-[36px] border-b border-solid border-[#d9e1ec] bg-[#f2f5fa] px-[22px] py-[60px]"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[36px]">
        <div className="flex w-full flex-col gap-[14.9px]">
          <div className="flex items-center gap-[12px]">
            <span className="h-[2px] w-[24.33px] shrink-0 bg-[#0891b2]" />
            <span className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0b1b33]">
              11
            </span>
            <p className="whitespace-nowrap font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0891b2]">
              Analytics, conversion and
              <br />
              retention
            </p>
          </div>
          <h2 className="pb-[0.75px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33] [word-break:break-word]">
            Measure qualified
            <br />
            handoffs, not form volume
          </h2>
          <p className="max-w-[720px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82] [word-break:break-word]">
            Events record intent categories and outcomes
            <br />
            only, never message content or personal
            <br />
            values.
          </p>
        </div>

        <div className="flex w-full flex-col gap-[40px]">
          <div className="w-full overflow-x-auto rounded-[14px] border border-solid border-[#d9e1ec] bg-white">
            <table className="w-full min-w-[486px] table-fixed border-collapse text-left">
              <colgroup>
                <col style={{ width: "53%" }} />
                <col style={{ width: "23.16%" }} />
                <col style={{ width: "23.84%" }} />
              </colgroup>
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="whitespace-nowrap border-b border-solid border-[#d9e1ec] bg-[#eef2f7] px-[20px] pb-[36.88px] pt-[15.5px] align-top font-manrope text-[13px] font-bold leading-[21.45px] text-[#0b1b33]"
                  >
                    Event
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap border-b border-solid border-[#d9e1ec] bg-[#eef2f7] px-[20px] py-[15.7px] align-top font-manrope text-[13px] font-bold leading-[21.45px] text-[#0b1b33]"
                  >
                    Safe
                    <br />
                    properties
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap border-b border-solid border-[#d9e1ec] bg-[#eef2f7] px-[20px] py-[15.7px] align-top font-manrope text-[13px] font-bold leading-[21.45px] text-[#0b1b33]"
                  >
                    Never
                    <br />
                    recorded
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => {
                  const last = i === rows.length - 1;
                  const b = last ? "" : "border-b border-solid border-[#d9e1ec]";
                  return (
                    <tr key={r.event}>
                      <th
                        scope="row"
                        className={`whitespace-nowrap px-[20px] pb-[16px] pt-[15.5px] align-top font-manrope text-[15px] font-bold leading-[24.75px] text-[#0b1b33] ${b}`}
                      >
                        {r.event}
                      </th>
                      <td
                        className={`whitespace-nowrap px-[20px] py-[16px] align-top font-manrope text-[15px] font-normal leading-[24.75px] text-[#334155] ${b}`}
                      >
                        {r.safe}
                      </td>
                      <td
                        className={`whitespace-nowrap px-[20px] py-[16px] align-top font-manrope text-[15px] font-normal leading-[24.75px] text-[#334155] ${b}`}
                      >
                        {r.never}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <ul className="flex w-full flex-col gap-[24px]">
            {measures.map((m) => (
              <li
                key={m.title}
                className="flex w-full flex-col items-start gap-[10.9px] rounded-[16px] border border-solid border-[#d9e1ec] bg-white p-[24px]"
              >
                <div
                  className={`flex h-[53.1px] w-[52px] shrink-0 items-center justify-center rounded-[14px] pb-[1.1px] ${m.iconBg}`}
                >
                  <Image src={m.icon} alt="" width={24} height={24} />
                </div>
                <h3 className="w-full pb-[6px] font-manrope text-[18px] font-bold leading-[24.3px] text-[#0b1b33]">
                  {m.title}
                </h3>
                <p className="w-full font-manrope text-[15px] font-normal leading-[24.75px] text-[#5b6b82] [word-break:break-word]">
                  {m.body}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-[260px] w-full overflow-hidden rounded-[18px]">
          <Image
            src="/contact/mobile-analytics-charts.webp"
            alt="Analytics charts showing qualified handoffs, deflection and guardrail metrics"
            width={900}
            height={400}
            sizes="(max-width: 1023px) 560px, 0px"
            className="absolute left-[-60.98%] top-0 h-full w-[221.97%] max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
