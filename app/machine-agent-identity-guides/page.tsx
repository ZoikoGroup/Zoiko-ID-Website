import type { Metadata } from "next";

import DesktopPart1 from "@/components/machine-agent-identity-guides/DesktopPart1";
import DesktopPart2 from "@/components/machine-agent-identity-guides/DesktopPart2";
import DesktopPart3 from "@/components/machine-agent-identity-guides/DesktopPart3";
import DesktopPart4 from "@/components/machine-agent-identity-guides/DesktopPart4";
import MobilePart1 from "@/components/machine-agent-identity-guides/MobilePart1";
import MobilePart2 from "@/components/machine-agent-identity-guides/MobilePart2";
import MobilePart3 from "@/components/machine-agent-identity-guides/MobilePart3";
import MobilePart4 from "@/components/machine-agent-identity-guides/MobilePart4";

export const metadata: Metadata = {
  title: "Machine & Agent Identity Guides | Zoiko iD",
  description:
    "Machine identity establishes an identity for a non-human actor such as a service or workload. AI-agent identity addresses actors that can initiate or coordinate actions. Proving identity does not by itself grant authority.",
};

export default function MachineAgentIdentityGuidesPage() {
  return (
    <>
      {/* Desktop design (>= lg) */}
      <div className="hidden lg:block">
        <DesktopPart1 />
        <DesktopPart2 />
        <DesktopPart3 />
        <DesktopPart4 />
      </div>

      {/* Mobile design (< lg) */}
      <div className="lg:hidden">
        <MobilePart1 />
        <MobilePart2 />
        <MobilePart3 />
        <MobilePart4 />
      </div>
    </>
  );
}
