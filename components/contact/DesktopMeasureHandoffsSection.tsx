import type { ReactNode } from "react";
import Image from "next/image";

const br = <br className="max-xl:hidden" />;

const rows: { event: string; safe: ReactNode; never: ReactNode }[] = [
  {
    event: "contact_view",
    safe: <>page version, {br}locale</>,
    never: <>IP address, {br}email, name</>,
  },
  {
    event: "contact_intent_select",
    safe: <>intent {br}category, {br}origin page</>,
    never: <>message {br}content</>,
  },
  {
    event: "contact_route_click",
    safe: <>destination {br}type, link ID</>,
    never: <>private URL {br}parameters</>,
  },
  {
    event: "corporate_form_validation",
    safe: <>field key, {br}error {br}category</>,
    never: <>entered {br}values</>,
  },
  {
    event: "corporate_form_submit_result",
    safe: <>success or {br}failure class</>,
    never: <>full receipt {br}token</>,
  },
  {
    event: "contact_route_unavailable",
    safe: <>route type, {br}page version</>,
    never: <>personal {br}details</>,
  },
];

const measures: { title: string; icon: string; tint: string; body: ReactNode }[] = [
  {
    title: "Primary measure",
    icon: "/contact/desktop-icon-chart.svg",
    tint: "bg-[#e4f3f8]",
    body: "Successful qualified handoff to the right destination.",
  },
  {
    title: "Secondary measure",
    icon: "/contact/desktop-icon-flow.svg",
    tint: "bg-[#e4f3f8]",
    body: "Self-service deflection and fewer misrouted requests.",
  },
  {
    title: "Guardrails",
    icon: "/contact/desktop-icon-alert.svg",
    tint: "bg-[#fee2e2]",
    body: (
      <>
        Assistive-technology abandonment, error rates and reports of {br}misrouted sensitive submissions.
      </>
    ),
  },
];

export default function DesktopMeasureHandoffsSection() {
  return (
    <section
      id="analytics"
      className="hidden w-full flex-col items-start gap-[56px] bg-[#f8fafc] px-[160px] py-[105px] lg:flex"
    >
      <div className="flex w-full max-w-[820px] flex-col gap-[15px]">
        <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
          Measure qualified handoffs, not form volume
        </h2>
        <p className="max-w-[720px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82] xl:whitespace-nowrap">
          Events record intent categories and outcomes only, never message content or personal values.
        </p>
      </div>
      <div className="flex w-full items-center justify-center gap-[80px]">
        <div className="min-w-px flex-1 overflow-auto rounded-[14px] border border-solid border-[#d9e1ec] bg-white">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#eef2f7]">
                <th scope="col" className="w-[49.7%] border-b border-[#d9e1ec] px-[20px] py-[15.5px] align-top font-manrope text-[13px] font-bold leading-[21.45px] text-[#0b1b33]">
                  Event
                </th>
                <th scope="col" className="w-[25.2%] border-b border-[#d9e1ec] px-[20px] py-[15.5px] align-top font-manrope text-[13px] font-bold leading-[21.45px] text-[#0b1b33] xl:whitespace-nowrap">
                  Safe {br}properties
                </th>
                <th scope="col" className="w-[25.1%] border-b border-[#d9e1ec] px-[20px] py-[15.5px] align-top font-manrope text-[13px] font-bold leading-[21.45px] text-[#0b1b33] xl:whitespace-nowrap">
                  Never {br}recorded
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => {
                const border = i < rows.length - 1 ? "border-b border-[#d9e1ec]" : "";
                return (
                  <tr key={r.event}>
                    <th scope="row" className={`${border} px-[20px] py-[16px] align-top font-manrope text-[15px] font-bold leading-[24.75px] text-[#0b1b33] xl:whitespace-nowrap`}>
                      {r.event}
                    </th>
                    <td className={`${border} px-[20px] py-[16px] align-top font-manrope text-[15px] font-normal leading-[24.75px] text-[#334155] xl:whitespace-nowrap`}>
                      {r.safe}
                    </td>
                    <td className={`${border} px-[20px] py-[16px] align-top font-manrope text-[15px] font-normal leading-[24.75px] text-[#334155] xl:whitespace-nowrap`}>
                      {r.never}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex min-w-px flex-1 flex-col items-start gap-[24px]">
          {measures.map((m) => (
            <div
              key={m.title}
              className="flex w-full flex-col items-start gap-[11px] rounded-[16px] border border-solid border-[#d9e1ec] bg-white p-[32px]"
            >
              <div className={`flex h-[53px] w-[52px] shrink-0 items-center justify-center rounded-[14px] pb-px ${m.tint}`}>
                <Image src={m.icon} alt="" width={24} height={24} />
              </div>
              <h3 className="w-full pb-[6px] font-manrope text-[18px] font-bold leading-[24.3px] text-[#0b1b33]">
                {m.title}
              </h3>
              <p className="w-full font-manrope text-[15px] font-normal leading-[24.75px] text-[#5b6b82]">
                {m.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
