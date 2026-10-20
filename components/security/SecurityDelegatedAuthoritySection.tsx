import Image from "next/image";

interface DefinitionItem {
  term: string;
  description: string;
}

const DEFINITIONS: DefinitionItem[] = [
  {
    term: "Grantor.",
    description: " The party whose authority is delegated.",
  },
  {
    term: "Grantee.",
    description: " The actor who receives bounded authority.",
  },
  {
    term: "Action and resource.",
    description: " What may be done, and to what.",
  },
  {
    term: "Purpose and policy.",
    description: " Why, and under which current rules.",
  },
  {
    term: "Expiry and revocation.",
    description: " When it ends, and how it is withdrawn.",
  },
];

interface GrantField {
  label: string;
  value: string;
}

const GRANT_FIELDS: GrantField[] = [
  { label: "Grantor", value: "[Redacted]" },
  { label: "Grantee", value: "[Redacted]" },
  { label: "Action", value: "Read (example)" },
  { label: "Resource", value: "Example record" },
  { label: "Purpose", value: "Evaluation only" },
  { label: "Policy", value: "Version\nreference" },
  { label: "Expiry", value: "Set at issue" },
  { label: "Revocation", value: "Available to\ngrantor" },
];

export default function SecurityDelegatedAuthoritySection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-[105px] px-6 sm:px-12 lg:px-20 xl:px-[160px]">
      <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Column: Heading and Definitions */}
        <div className="flex flex-col gap-[40px] lg:gap-[60px]">
          <div className="flex flex-col gap-3">
            <h2 className="font-dm-serif text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.13] text-[#0B1B33]">
              A grant has boundaries
            </h2>
            <div className="pt-[2px]">
              <p className="font-manrope text-[16px] leading-[25.6px] text-[#64748B]">
                Authority can be constrained by grantor, grantee, action, resource, purpose, policy, expiry and revocation. The card shows the fields; its values are{"\n"}invented.
              </p>
            </div>
          </div>

          {/* List of Definitions */}
          <div className="flex flex-col gap-3 pt-2">
            {DEFINITIONS.map((item, index) => (
              <div key={index} className="font-manrope text-[15px] leading-[24px]">
                <strong className="font-bold text-[#0B1B33]">{item.term}</strong>
                <span className="text-[#64748B]">{item.description}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image + Redacted Grant Card */}
        <div className="flex flex-col gap-[13px] w-full max-w-[504px] mx-auto lg:ml-auto">
          {/* Desk Image */}
          <div className="relative w-full h-[260px] rounded-[18px] overflow-hidden">
            <Image
              src="/security/img-4dee96e9e2f34de72f0e8a5bff7415b155bb07f2.png"
              alt="Documents on a desk"
              fill
              className="object-cover"
            />
          </div>

          {/* Redacted Grant Card */}
          <div className="bg-[#071426] rounded-[20px] overflow-hidden border border-white/10 shadow-lg">
            {/* Card Header */}
            <div className="px-[26px] py-5 border-b border-white/12 flex items-center justify-between">
              <h4 className="font-manrope font-bold text-[16px] leading-[25.6px] text-[#FFFFFF]">
                Redacted grant card
              </h4>
              <span className="px-[11px] py-[4px] rounded-full bg-[#EDE9FE] font-manrope font-extrabold text-[11px] leading-[17.6px] text-[#5B21B6]">
                Illustrative
              </span>
            </div>

            {/* Fields Grid 2 cols */}
            <div className="grid grid-cols-2 divide-x divide-y divide-white/10">
              {GRANT_FIELDS.map((field, idx) => (
                <div
                  key={idx}
                  className="p-[17px_26px] flex flex-col justify-center min-h-[82px]"
                >
                  <span className="font-manrope font-extrabold text-[11px] leading-[17.6px] text-[#94A3B8] uppercase tracking-wider mb-1">
                    {field.label}
                  </span>
                  <span className="font-manrope font-semibold text-[15px] leading-[24px] text-[#FFFFFF] whitespace-pre-line">
                    {field.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
