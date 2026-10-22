import type { Metadata } from "next";

import DesktopPart1 from "@/components/platform-usage-model/DesktopPart1";
import DesktopPart2 from "@/components/platform-usage-model/DesktopPart2";
import DesktopPart3 from "@/components/platform-usage-model/DesktopPart3";
import DesktopPart4 from "@/components/platform-usage-model/DesktopPart4";
import MobilePart1 from "@/components/platform-usage-model/MobilePart1";
import MobilePart2 from "@/components/platform-usage-model/MobilePart2";
import MobilePart3 from "@/components/platform-usage-model/MobilePart3";
import MobilePart4 from "@/components/platform-usage-model/MobilePart4";

export const metadata: Metadata = {
  title: "Platform & Usage Model | Zoiko iD",
  description:
    "Understand Zoiko iD's platform and usage considerations. A conceptual model of identity, authority and evidence, not a rate card.",
};

export default function PlatformUsageModelPage() {
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
