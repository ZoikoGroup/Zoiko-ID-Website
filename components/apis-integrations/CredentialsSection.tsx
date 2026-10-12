import { Section, SectionHeader } from "@/components/home/shared";
import {
  GreenCheck,
  cardTextClass,
  cardTitleClass,
} from "@/components/organization-identity/shared";

const steps = [
  {
    title: "Issue Credentials",
    description:
      "Organizations and IdPs can issue signed credentials. Cryptographically verifiable claims about identity, role, or capability.",
  },
  {
    title: "Present Credentials",
    description:
      "Holders share credentials with verifiers. Selective disclosure: share only what's needed, not the entire credential.",
  },
  {
    title: "Verify Credentials",
    description:
      "Check signature, issuer trust, expiry, revocation status. Credentials inform access decisions but don't grant access alone.",
  },
];

export default function CredentialsSection() {
  return (
    <Section background="slate">
      <SectionHeader title="Credentials & verification" />

      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        {steps.map((step) => (
          <article
            key={step.title}
            className="flex flex-col items-start rounded-xl bg-white-solid p-8 outline-1 -outline-offset-1 outline-grey-91"
          >
            <h3 className={cardTitleClass}>{step.title}</h3>
            <p className={`${cardTextClass} pb-6 lg:pb-10`}>{step.description}</p>

            <p className="mt-auto flex items-center gap-1 font-manrope text-sm font-semibold text-[#16A34A]">
              <GreenCheck size={14} />
              Supported
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
