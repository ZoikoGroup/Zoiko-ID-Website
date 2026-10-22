import DesktopIdentityConceptSection from "./DesktopIdentityConceptSection";
import DesktopAuthorityConceptSection from "./DesktopAuthorityConceptSection";
import DesktopEvidenceConceptSection from "./DesktopEvidenceConceptSection";
import DesktopEvaluationDimensionsSection from "./DesktopEvaluationDimensionsSection";
import DesktopPrincipalClassesSection from "./DesktopPrincipalClassesSection";

export default function DesktopIdentityAuthorityEvidenceSection() {
  return (
    <section id="concepts" className="hidden w-full flex-col gap-[60px] bg-white px-[160px] py-[105px] lg:flex">
      <div className="flex flex-col items-start">
        <h2 className="max-w-[854px] font-dm-serif text-[52px] font-normal leading-[58.8px] tracking-[-0.38px] text-[#07111f]">
          Identity, authority and evidence, kept distinct
        </h2>
        <p className="max-w-[780px] pt-[12px] font-manrope text-[15px] leading-[24px] text-[#64748b]">
          Identity establishes the actor. Authority evaluates what the actor may do, and on whose behalf. Evidence explains the decision and its relevant changes. Existence of an identity does not, by itself, establish authority.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-[24px]">
        <DesktopIdentityConceptSection />
        <DesktopAuthorityConceptSection />
        <DesktopEvidenceConceptSection />
      </div>
      <div className="flex items-center gap-[20px]">
        <DesktopEvaluationDimensionsSection />
        <DesktopPrincipalClassesSection />
      </div>
    </section>
  );
}
