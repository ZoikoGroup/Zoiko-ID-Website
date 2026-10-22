import type { Metadata } from "next";

import EnterpriseHeroSection from "@/components/enterprise/EnterpriseHeroSection";
import AuthenticateNotAuthorizeSection from "@/components/enterprise/AuthenticateNotAuthorizeSection";
import FiveDistinctNodesSection from "@/components/enterprise/FiveDistinctNodesSection";
import ExistingSystemsAuthoritativeSection from "@/components/enterprise/ExistingSystemsAuthoritativeSection";
import StartFromTeamQuestionSection from "@/components/enterprise/StartFromTeamQuestionSection";
import FiveConceptualGatesSection from "@/components/enterprise/FiveConceptualGatesSection";
import WhatTheEnquiryAsksSection from "@/components/enterprise/WhatTheEnquiryAsksSection";
import EnterpriseFaqSection from "@/components/enterprise/EnterpriseFaqSection";
import EnterpriseCtaSection from "@/components/enterprise/EnterpriseCtaSection";

export const metadata: Metadata = {
  title: "Enterprise | Identity, Authority and Evidence | Zoiko iD",
  description:
    "Zoiko iD is designed to help enterprises establish who or what is acting, evaluate bounded authority, respond to changing trust signals and preserve reviewable evidence across existing identity and application estates.",
};

export default function EnterprisePage() {
  return (
    <main className="min-h-screen bg-white">
      <EnterpriseHeroSection />
      <AuthenticateNotAuthorizeSection />
      <FiveDistinctNodesSection />
      <ExistingSystemsAuthoritativeSection />
      <StartFromTeamQuestionSection />
      <FiveConceptualGatesSection />
      <WhatTheEnquiryAsksSection />
      <EnterpriseFaqSection />
      <EnterpriseCtaSection />
    </main>
  );
}
