import SponsorshipDelegationSection from "./MobileSponsorshipDelegationSection";
import IdentityVersusAuthoritySection from "./MobileIdentityVersusAuthoritySection";
import ContinuousTrustSection from "./MobileContinuousTrustSection";
import EvidencePrivacySection from "./MobileEvidencePrivacySection";
import EnterpriseIntegrationSection from "./MobileEnterpriseIntegrationSection";
import GuideDetailTemplateSection from "./MobileGuideDetailTemplateSection";
import CommonMisreadingsSection from "./MobileCommonMisreadingsSection";

export default function Part2() {
  return (
    <>
      <SponsorshipDelegationSection />
      <IdentityVersusAuthoritySection />
      <ContinuousTrustSection />
      <EvidencePrivacySection />
      <EnterpriseIntegrationSection />
      <GuideDetailTemplateSection />
      <CommonMisreadingsSection />
    </>
  );
}
