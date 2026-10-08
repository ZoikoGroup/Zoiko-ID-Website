import { Section, SectionHeader } from "./shared";

const plans = ["Starter", "Professional", "Enterprise"];

// true = included, false = not included, string = value shown as text
const rows: { feature: string; values: (boolean | string)[] }[] = [
  { feature: "Monthly Price", values: ["$299", "$999", "Custom"] },
  { feature: "Decision Volume", values: ["10K/month", "100K/month", "Unlimited"] },
  { feature: "Core Authentication", values: [true, true, true] },
  { feature: "Delegated Authority", values: [true, true, true] },
  { feature: "REST APIs & SDKs", values: [false, true, true] },
  { feature: "Event Webhooks", values: [false, true, true] },
  { feature: "Policy Engine", values: [false, true, true] },
  { feature: "99.99% SLA", values: [false, false, true] },
  { feature: "Dedicated Support", values: [false, "Email", "24/7 Phone"] },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <>
        <span aria-hidden="true" className="text-xl leading-6 text-cyan-49">
          ✓
        </span>
        <span className="sr-only">Included</span>
      </>
    );
  }

  if (value === false) {
    return <span className="sr-only">Not included</span>;
  }

  return <>{value}</>;
}

export default function PricingSection() {
  return (
    <Section background="grey">
      <SectionHeader
        title="Simple, predictable pricing"
        subtitle="Scale from startup to enterprise with transparent plans"
      />

      {/* Scrolls sideways on narrow screens; focusable so keyboards can scroll it.
          `relative` keeps the absolutely positioned sr-only labels inside the
          scroll box, otherwise they widen the whole page on mobile. */}
      <div
        role="region"
        aria-label="Plan comparison"
        tabIndex={0}
        className="relative w-full overflow-x-auto rounded-2xl bg-white-solid shadow-[0px_1px_2px_0px_rgba(0,0,0,0.04)]">
        <table className="w-full min-w-[720px] border-collapse text-left font-manrope text-sm">
          <thead className="bg-slate-900 text-white-solid">
            <tr>
              <th scope="col" className="w-[33%] px-6 py-6 font-semibold">
                Feature
              </th>
              {plans.map((plan) => (
                <th key={plan} scope="col" className="px-6 py-6 font-semibold">
                  {plan}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr
                key={row.feature}
                className="border-b border-grey-91 last:border-b-0"
              >
                <th
                  scope="row"
                  className="px-6 py-6 font-semibold text-azure-35"
                >
                  {row.feature}
                </th>
                {row.values.map((value, index) => (
                  <td
                    key={plans[index]}
                    className="px-6 py-6 font-normal text-azure-47"
                  >
                    <Cell value={value} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
