import type { Metadata } from "next";

import DocumentationHeroSection from "@/components/documentation/DocumentationHeroSection";
import DocumentationSearchSection from "@/components/documentation/DocumentationSearchSection";
import CommonTasksSection from "@/components/documentation/CommonTasksSection";
import TopicGroupingsSection from "@/components/documentation/TopicGroupingsSection";
import MaintainedGuidesSection from "@/components/documentation/MaintainedGuidesSection";
import ArticleStructureSection from "@/components/documentation/ArticleStructureSection";
import CodeGatingSection from "@/components/documentation/CodeGatingSection";
import JumpListsAnchorsSection from "@/components/documentation/JumpListsAnchorsSection";
import ArticleStatesSection from "@/components/documentation/ArticleStatesSection";
import ContractDestinationsSection from "@/components/documentation/ContractDestinationsSection";
import QuestionDestinationsSection from "@/components/documentation/QuestionDestinationsSection";
import RolePermissionsSection from "@/components/documentation/RolePermissionsSection";
import ArticleFieldsSection from "@/components/documentation/ArticleFieldsSection";
import RecordedCategoriesSection from "@/components/documentation/RecordedCategoriesSection";
import WcagComplianceSection from "@/components/documentation/WcagComplianceSection";
import SourceBackedMetadataSection from "@/components/documentation/SourceBackedMetadataSection";
import AcceptanceOwnersSection from "@/components/documentation/AcceptanceOwnersSection";
import DocumentationFaqSection from "@/components/documentation/DocumentationFaqSection";
import DocumentationCtaSection from "@/components/documentation/DocumentationCtaSection";

export const metadata: Metadata = {
  title: "Documentation | Zoiko iD",
  description:
    "Documentation for identity, authority and evidence. Explore Zoiko iD concepts, architecture and implementation guidance.",
};

export default function DocumentationPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      {/* DESKTOP VERSION (hidden sm:block) */}
      <div className="hidden sm:block">
        <DocumentationHeroSection view="desktop" />
        <DocumentationSearchSection view="desktop" />
        <CommonTasksSection view="desktop" />
        <TopicGroupingsSection view="desktop" />
        <MaintainedGuidesSection view="desktop" />
        <ArticleStructureSection view="desktop" />
        <CodeGatingSection view="desktop" />
        <JumpListsAnchorsSection view="desktop" />
        <ArticleStatesSection view="desktop" />
        <ContractDestinationsSection view="desktop" />
        <QuestionDestinationsSection view="desktop" />
        <RolePermissionsSection view="desktop" />
        <ArticleFieldsSection view="desktop" />
        <RecordedCategoriesSection view="desktop" />
        <WcagComplianceSection view="desktop" />
        <SourceBackedMetadataSection view="desktop" />
        <AcceptanceOwnersSection view="desktop" />
        <DocumentationFaqSection view="desktop" />
        <DocumentationCtaSection view="desktop" />
      </div>

      {/* MOBILE VERSION (sm:hidden) */}
      <div className="sm:hidden">
        <DocumentationHeroSection view="mobile" />
        <DocumentationSearchSection view="mobile" />
        <CommonTasksSection view="mobile" />
        <TopicGroupingsSection view="mobile" />
        <MaintainedGuidesSection view="mobile" />
        <ArticleStructureSection view="mobile" />
        <CodeGatingSection view="mobile" />
        <JumpListsAnchorsSection view="mobile" />
        <ArticleStatesSection view="mobile" />
        <ContractDestinationsSection view="mobile" />
        <QuestionDestinationsSection view="mobile" />
        <RolePermissionsSection view="mobile" />
        <ArticleFieldsSection view="mobile" />
        <RecordedCategoriesSection view="mobile" />
        <WcagComplianceSection view="mobile" />
        <SourceBackedMetadataSection view="mobile" />
        <AcceptanceOwnersSection view="mobile" />
        <DocumentationFaqSection view="mobile" />
        <DocumentationCtaSection view="mobile" />
      </div>
    </main>
  );
}
