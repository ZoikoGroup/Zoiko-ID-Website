import IdentityAuthorityTableSection from "./DesktopIdentityAuthorityTableSection";
import ContinuousTrustSection from "./DesktopContinuousTrustSection";
import EvidenceSection from "./DesktopEvidenceSection";
import OverlayModelSection from "./DesktopOverlayModelSection";
import ReadersRoutesSection from "./DesktopReadersRoutesSection";
import GuideStructureSection from "./DesktopGuideStructureSection";

export default function Part2() {
  return (
    <>
      <IdentityAuthorityTableSection />
      <ContinuousTrustSection />
      <EvidenceSection />
      <OverlayModelSection />
      <ReadersRoutesSection />
      <GuideStructureSection />
    </>
  );
}
