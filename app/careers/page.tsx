import type { Metadata } from "next";

import DesktopPart1 from "@/components/careers/DesktopPart1";
import DesktopPart2 from "@/components/careers/DesktopPart2";
import DesktopPart3 from "@/components/careers/DesktopPart3";
import DesktopPart4 from "@/components/careers/DesktopPart4";
import DesktopPart5 from "@/components/careers/DesktopPart5";
import MobilePart1 from "@/components/careers/MobilePart1";
import MobilePart2 from "@/components/careers/MobilePart2";
import MobilePart3 from "@/components/careers/MobilePart3";
import MobilePart4 from "@/components/careers/MobilePart4";
import MobilePart5 from "@/components/careers/MobilePart5";
import MobilePart6 from "@/components/careers/MobilePart6";

export const metadata: Metadata = {
  title: "Careers | Zoiko iD",
  description:
    "Build trustworthy identity. Learn how we describe good work at Zoiko iD, how published roles will be listed and how applying will work.",
};

export default function CareersPage() {
  return (
    <>
      {/* Desktop design (>= lg) */}
      <div className="hidden lg:block">
        <DesktopPart1 />
        <DesktopPart2 />
        <DesktopPart3 />
        <DesktopPart4 />
        <DesktopPart5 />
      </div>

      {/* Mobile design (< lg) */}
      <div className="overflow-x-clip lg:hidden">
        <MobilePart1 />
        <MobilePart2 />
        <MobilePart3 />
        <MobilePart4 />
        <MobilePart5 />
        <MobilePart6 />
      </div>
    </>
  );
}
