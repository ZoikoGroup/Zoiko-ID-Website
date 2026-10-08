import type { Metadata } from "next";

import AboutCtaSection from "@/components/about/AboutCtaSection";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import DifferentiatorsSection from "@/components/about/DifferentiatorsSection";
import IdentityNecessarySection from "@/components/about/IdentityNecessarySection";
import PrinciplesSection from "@/components/about/PrinciplesSection";
import ThreeThingsSection from "@/components/about/ThreeThingsSection";
import TrustLayerSection from "@/components/about/TrustLayerSection";
import TrustModelSection from "@/components/about/TrustModelSection";
import VerifiableTrustSection from "@/components/about/VerifiableTrustSection";
import VisionMissionSection from "@/components/about/VisionMissionSection";
import WhatIsZoikoSection from "@/components/about/WhatIsZoikoSection";

export const metadata: Metadata = {
  title: "About Us | Zoiko iD",
  description:
    "Zoiko iD is programmable identity infrastructure that connects identity, authority, and evidence so every important action can be trusted.",
};

export default function AboutUsPage() {
  return (
    <>
      <AboutHeroSection />
      <WhatIsZoikoSection />
      <IdentityNecessarySection />
      <VisionMissionSection />
      <ThreeThingsSection />
      <DifferentiatorsSection />
      <TrustModelSection />
      <TrustLayerSection />
      <VerifiableTrustSection />
      <PrinciplesSection />
      <AboutCtaSection />
    </>
  );
}
