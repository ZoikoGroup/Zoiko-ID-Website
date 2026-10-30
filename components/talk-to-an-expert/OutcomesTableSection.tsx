import { Section, SectionHeading } from "@/components/docs/shared";

const outcomes = [
  { state: "Validation error", body: "Each problem is named beside its field, and the error summary receives focus." },
  { state: "Sending", body: "The submit control is disabled while the request is in flight, so it cannot be sent twice." },
  { state: "Received", body: "Confirmed only after the server acknowledges receipt. No timing promise is made." },
  { state: "Not received", body: "Your draft is kept, and you can retry without retyping." },
  { state: "Unavailable", body: "The enquiry route is hidden or replaced with an approved alternative, never a broken link." },
];

export default function OutcomesTableSection() {
  return (
    <Section id="outcomes">
      <SectionHeading
        title="Every outcome is reported honestly"
        description="Confirmation is shown only after the server acknowledges receipt. An error explains what went wrong, keeps your draft, and never clears what you typed."
      />

      <div className="mt-12 overflow-x-auto rounded-t-2xl border border-[#E2E8F0] lg:mt-14">
        <table className="w-full min-w-[560px] border-collapse text-left font-manrope">
          <thead className="bg-[#0F1B33] text-white-solid">
            <tr>
              <th scope="col" className="w-[214px] px-[18px] py-4 text-sm font-bold">
                State
              </th>
              <th scope="col" className="px-[18px] py-4 text-sm font-bold">
                What you see
              </th>
            </tr>
          </thead>
          <tbody>
            {outcomes.map(({ state, body }) => (
              <tr key={state} className="border-t border-[#E2E8F0] bg-white-solid">
                <th scope="row" className="px-[18px] py-4 text-sm font-bold text-[#0F172A]">
                  {state}
                </th>
                <td className="px-[18px] py-4 text-sm text-[#334155]">{body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
