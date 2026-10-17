import type { Metadata } from "next";

import AvailabilityHeroSection from "@/components/availability-status/AvailabilityHeroSection";
import AvailabilityScopeSection from "@/components/availability-status/AvailabilityScopeSection";
import AvailabilityIncidentsSection from "@/components/availability-status/AvailabilityIncidentsSection";
import AvailabilityMaintenanceSection from "@/components/availability-status/AvailabilityMaintenanceSection";
import AvailabilityHistorySection from "@/components/availability-status/AvailabilityHistorySection";
import AvailabilitySubscriptionsSection from "@/components/availability-status/AvailabilitySubscriptionsSection";
import AvailabilityStateMatrixSection from "@/components/availability-status/AvailabilityStateMatrixSection";
import AvailabilityHandoffsSection from "@/components/availability-status/AvailabilityHandoffsSection";
import AvailabilityCtaSection from "@/components/availability-status/AvailabilityCtaSection";
import AvailabilityFaqSection from "@/components/availability-status/AvailabilityFaqSection";

export const metadata: Metadata = {
  title: "Availability & Status | Zoiko iD",
  description:
    "Check the currently published service-status information for Zoiko iD. Status, affected scope, and timestamps are shown only where confirmed by the operational source.",
};

export default function AvailabilityStatusPage() {
  return (
    <>
      {/* 1. Hero & Current Status Section */}
      <AvailabilityHeroSection />

      {/* 2. Monitored Scope & Components Section */}
      <AvailabilityScopeSection />

      {/* 3. Incidents & Active Status Section */}
      <AvailabilityIncidentsSection />

      {/* 4. Planned Maintenance & Work Section */}
      <AvailabilityMaintenanceSection />

      {/* 5. Historical Records & Search Section */}
      <AvailabilityHistorySection />

      {/* 6. Subscriptions Channel Section */}
      <AvailabilitySubscriptionsSection />

      {/* 7. Six States Matrix Section */}
      <AvailabilityStateMatrixSection />

      {/* 8. Owner Handoffs Section */}
      <AvailabilityHandoffsSection />

      {/* 9. Final Call to Action Section */}
      <AvailabilityCtaSection />

      {/* 10. Frequently Asked Questions Section */}
      <AvailabilityFaqSection />
    </>
  );
}
