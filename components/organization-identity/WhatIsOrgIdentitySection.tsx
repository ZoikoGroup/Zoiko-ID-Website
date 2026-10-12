import { CalloutSection } from "@/components/home/shared";

export default function WhatIsOrgIdentitySection() {
  return (
    <CalloutSection title="What is organization identity?">
      <p className="mx-auto max-w-[700px]">
        A cryptographically verifiable representation of an organization: who
        it is, what claims it makes about itself, who is authorized to act on
        its behalf, and what those authorizations permit.
      </p>
      <p className="mx-auto max-w-[720px] text-azure-47">
        Separates identity (what you are), verification (what we can prove),
        representation (who speaks for you), and authority (what they&apos;re
        allowed to do).
      </p>
    </CalloutSection>
  );
}
