type DecisionField = {
  label: string;
  value: string;
};

const allowedFields: DecisionField[] = [
  { label: "ACTOR", value: "john.smith@example.com (Individual)" },
  { label: "RESOURCE", value: "Acme Corp Marketing Plan" },
  { label: "ACTION", value: "Read, Comment" },
  {
    label: "POLICY",
    value: "Marketing team members can read and comment",
  },
  { label: "ORGANIZATION", value: "Acme Corp (member, active)" },
  {
    label: "REASON",
    value: "User is active member with Marketing role",
  },
];

const deniedFields: DecisionField[] = [
  { label: "ACTOR", value: "jane.lee@example.com (Individual)" },
  { label: "RESOURCE", value: "Acme Corp Financial Records" },
  { label: "ACTION", value: "Export" },
  {
    label: "POLICY",
    value: "Only CFO and Auditor roles can export financials",
  },
  { label: "ORGANIZATION", value: "Acme Corp (member, Sales role)" },
  {
    label: "REASON",
    value: "User does not have required role (Sales ≠ Finance)",
  },
];

export default function AuthorizationDecisionsSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-10 lg:gap-12">
        <div className="flex max-w-[900px] flex-col items-center gap-4 text-center">
          <h2 className="font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl lg:text-[52px] lg:leading-[59.8px]">
            Authorization &amp; access decisions
          </h2>
          <p className="font-manrope text-base font-normal leading-7 text-azure-47">
            Access is decided at the time an action is requested, using the
            authorized actor, resource, policy, context and active mandate as
            applicable.
          </p>
        </div>

        {/* Access Allowed Panel */}
        <div className="flex w-full flex-col gap-4 rounded-xl border border-[#16A34A] bg-[#16A34A]/[0.08] p-7 sm:p-8">
          <h3 className="font-manrope text-[16.8px] font-bold text-azure-9">
            ✅ Access Allowed
          </h3>

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            {allowedFields.map((field) => (
              <div
                key={field.label}
                className="flex flex-col gap-1 rounded-2xl bg-white-solid p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
              >
                <span className="font-manrope text-[12.8px] font-bold uppercase tracking-[0.05em] text-azure-47">
                  {field.label}
                </span>
                <span className="font-manrope text-[14.4px] font-normal leading-6 text-[#475569]">
                  {field.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Access Denied Panel */}
        <div className="flex w-full flex-col gap-4 rounded-xl border border-[#DC2626] bg-[#DC2626]/[0.08] p-7 sm:p-8">
          <h3 className="font-manrope text-[16.8px] font-bold text-[#DC2626]">
            ❌ Access Denied
          </h3>

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            {deniedFields.map((field) => (
              <div
                key={field.label}
                className="flex flex-col gap-1 rounded-2xl bg-white-solid p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
              >
                <span className="font-manrope text-[12.8px] font-bold uppercase tracking-[0.05em] text-azure-47">
                  {field.label}
                </span>
                <span className="font-manrope text-[14.4px] font-normal leading-6 text-[#475569]">
                  {field.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
