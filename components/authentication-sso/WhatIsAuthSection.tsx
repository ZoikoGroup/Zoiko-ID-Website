import { CalloutSection } from "@/components/home/shared";

export default function WhatIsAuthSection() {
  return (
    <CalloutSection title="What is authentication & SSO?">
      <p className="mx-auto max-w-[660px]">
        Authentication confirms an actor&apos;s use of a valid authenticator
        (password, passkey, token, certificate). SSO (Single Sign-On) allows
        one login to grant access to multiple applications via federation
        protocols.
      </p>
      <p className="mx-auto max-w-[720px] text-azure-47">
        Authentication proves identity claim. Authorization still determines
        what the authenticated actor can do. Zoiko iD connects both with
        auditable evidence and policy.
      </p>
    </CalloutSection>
  );
}
