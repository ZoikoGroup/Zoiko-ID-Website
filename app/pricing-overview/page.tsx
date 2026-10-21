import type { Metadata } from "next";

import DesktopHeroSection from "@/components/pricing-overview/DesktopHeroSection";
import DesktopMain from "@/components/pricing-overview/DesktopMain";
import DesktopPart1 from "@/components/pricing-overview/DesktopPart1";
import DesktopPart2 from "@/components/pricing-overview/DesktopPart2";
import DesktopPart3 from "@/components/pricing-overview/DesktopPart3";
import DesktopPart4 from "@/components/pricing-overview/DesktopPart4";
import DesktopFinalCtaSection from "@/components/pricing-overview/DesktopFinalCtaSection";
import MobilePart1 from "@/components/pricing-overview/MobilePart1";
import MobilePart2 from "@/components/pricing-overview/MobilePart2";
import MobilePart3 from "@/components/pricing-overview/MobilePart3";

export const metadata: Metadata = {
  title: "Pricing Overview | Zoiko iD",
  description:
    "Zoiko iD pricing and usage terms depend on the capabilities and deployment scope approved for a specific evaluation. Public pricing figures, units and plans are shown only when formally published.",
};

export default function PricingOverviewPage() {
  return (
    <>
      {/* Desktop design (>= lg) */}
      <div className="hidden lg:block">
        <DesktopHeroSection />
        <DesktopMain>
          <DesktopPart1 />
          <DesktopPart2 />
          <DesktopPart3 />
          <DesktopPart4 />
        </DesktopMain>
        <DesktopFinalCtaSection />
      </div>

      {/* Mobile design (< lg) */}
      <div className="lg:hidden">
        <MobilePart1 />
        <MobilePart2 />
        <MobilePart3 />
      </div>
    </>
  );
}
