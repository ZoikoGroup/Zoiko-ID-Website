import type { Metadata } from "next";

import AuthCtaSection from "@/components/authentication-sso/AuthCtaSection";
import AuthFaqSection from "@/components/authentication-sso/AuthFaqSection";
import AuthHeroSection from "@/components/authentication-sso/AuthHeroSection";
import DeveloperPathwaysSection from "@/components/authentication-sso/DeveloperPathwaysSection";
import FederationBoundariesSection from "@/components/authentication-sso/FederationBoundariesSection";
import IdentityNotAuthoritySection from "@/components/authentication-sso/IdentityNotAuthoritySection";
import MethodsSection from "@/components/authentication-sso/MethodsSection";
import MfaSection from "@/components/authentication-sso/MfaSection";
import OutcomesSection from "@/components/authentication-sso/OutcomesSection";
import SecurityResilienceSection from "@/components/authentication-sso/SecurityResilienceSection";
import SessionsSection from "@/components/authentication-sso/SessionsSection";
import WhatIsAuthSection from "@/components/authentication-sso/WhatIsAuthSection";
import { SectionDivider } from "@/components/home/shared";

export const metadata: Metadata = {
  title: "Authentication & SSO | Zoiko iD",
  description:
    "Connect enterprise sign-in to governed access: passkeys, MFA, OAuth, OIDC and SAML federation, step-up assurance, sessions and revocation.",
};

export default function AuthenticationSsoPage() {
  return (
    <>
      <AuthHeroSection />
      <WhatIsAuthSection />
      <SectionDivider />
      <MethodsSection />
      <OutcomesSection />
      <SectionDivider />
      <FederationBoundariesSection />
      <SectionDivider />
      <MfaSection />
      <IdentityNotAuthoritySection />
      <SessionsSection />
      <DeveloperPathwaysSection />
      <SecurityResilienceSection />
      <AuthFaqSection />
      <AuthCtaSection />
    </>
  );
}
