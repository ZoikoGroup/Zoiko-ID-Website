import type { Metadata } from "next";
import {
  DelegatedAuthorityHeroSection,
  WhatIsDelegatedAuthSection,
  AuthenticationNotPermissionSection,
  RolesAndPolicySection,
  WhatGrantStatesSection,
  FromRequestToEndSection,
  AssistantActsForExecutiveSection,
  SixChecksSection,
  StateAndNextStepSection,
  RepresentationNotBlankCheckSection,
  AgentsActUnderSponsorSection,
  AuthorityReevaluatedSection,
  SeeWhyAccessDecidedSection,
  BoundVisibilitySection,
  BringGovernedAuthoritySection,
  WhatMustBeApprovedSection,
  DiscussAuthorizationSection,
  FrequentlyAskedQuestionsSection,
  DelegatedAuthorityNextStepSection,
} from "@/components/authorization-delegated-authority";

export const metadata: Metadata = {
  title: "Authorization & Delegated Authority | Zoiko iD",
  description:
    "Connect identity to the authority to act, evaluate permissions in context, and preserve evidence behind decisions—without confusing authentication with permission.",
};

export default function AuthorizationDelegatedAuthorityPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      <DelegatedAuthorityHeroSection view="all" />
      <WhatIsDelegatedAuthSection view="all" />
      <AuthenticationNotPermissionSection view="all" />
      <RolesAndPolicySection view="all" />
      <WhatGrantStatesSection view="all" />
      <FromRequestToEndSection view="all" />
      {/* Desktop retains exact original section ordering */}
      <AssistantActsForExecutiveSection view="desktop" />
      <SixChecksSection view="all" />
      <StateAndNextStepSection view="all" />
      {/* Mobile follows numbered design flow: 08 Six Checks -> 09 States -> 10 Human Delegation */}
      <AssistantActsForExecutiveSection view="mobile" />
      <RepresentationNotBlankCheckSection view="all" />
      <AgentsActUnderSponsorSection view="all" />
      <AuthorityReevaluatedSection view="all" />
      <SeeWhyAccessDecidedSection view="all" />
      <BoundVisibilitySection view="all" />
      <BringGovernedAuthoritySection view="all" />
      {/* Desktop keeps exact original order: WhatMustBeApproved -> DiscussAuthorization -> FAQ */}
      <WhatMustBeApprovedSection view="desktop" />
      <DiscussAuthorizationSection view="desktop" />
      <FrequentlyAskedQuestionsSection view="desktop" />
      {/* Mobile follows numbered design flow: 17 Questions -> 18 Enterprise Enquiry -> 19 Publication Gates */}
      <FrequentlyAskedQuestionsSection view="mobile" />
      <DiscussAuthorizationSection view="mobile" />
      <WhatMustBeApprovedSection view="mobile" />
      <DelegatedAuthorityNextStepSection view="all" />
    </main>
  );
}
