import ReaderJourneysSection from "./MobileReaderJourneysSection";
import GlossarySection from "./MobileGlossarySection";
import EvaluationChecklistSection from "./MobileEvaluationChecklistSection";
import EditorialGovernanceSection from "./MobileEditorialGovernanceSection";
import ContentProvenanceSection from "./MobileContentProvenanceSection";
import PrivacyByDesignSection from "./MobilePrivacyByDesignSection";
import MeasureSection from "./MobileMeasureSection";

export default function Part3() {
  return (
    <>
      <ReaderJourneysSection />
      <GlossarySection />
      <EvaluationChecklistSection />
      <EditorialGovernanceSection />
      <ContentProvenanceSection />
      <PrivacyByDesignSection />
      <MeasureSection />
    </>
  );
}
