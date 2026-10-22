import type { Metadata } from "next";

import DesktopPart1 from "@/components/zoiko-tech-inc/DesktopPart1";
import DesktopPart2 from "@/components/zoiko-tech-inc/DesktopPart2";
import DesktopPart3 from "@/components/zoiko-tech-inc/DesktopPart3";
import DesktopPart4 from "@/components/zoiko-tech-inc/DesktopPart4";
import MobilePart1 from "@/components/zoiko-tech-inc/MobilePart1";
import MobilePart2 from "@/components/zoiko-tech-inc/MobilePart2";
import MobilePart3 from "@/components/zoiko-tech-inc/MobilePart3";
import MobilePart4 from "@/components/zoiko-tech-inc/MobilePart4";

export const metadata: Metadata = {
  title: "Zoiko Tech Inc. | Zoiko iD",
  description:
    "Zoiko iD is a Zoiko Tech Inc. platform. Learn about the company behind Zoiko iD, its corporate presence and where to go next.",
};

export default function ZoikoTechIncPage() {
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
      <div className="overflow-x-clip lg:hidden">
        <MobilePart1 />
        <MobilePart2 />
        <MobilePart3 />
        <MobilePart4 />
      </div>
    </>
  );
}
