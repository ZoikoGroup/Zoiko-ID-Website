import type { Metadata } from "next";

import DesktopPart1 from "@/components/privacy-notice/DesktopPart1";
import DesktopPart2 from "@/components/privacy-notice/DesktopPart2";
import DesktopPart3 from "@/components/privacy-notice/DesktopPart3";
import DesktopPart4 from "@/components/privacy-notice/DesktopPart4";
import MobilePart1 from "@/components/privacy-notice/MobilePart1";
import MobilePart2 from "@/components/privacy-notice/MobilePart2";
import MobilePart3 from "@/components/privacy-notice/MobilePart3";
import MobilePart4 from "@/components/privacy-notice/MobilePart4";

export const metadata: Metadata = {
  title: "Privacy Notice | Zoiko iD",
  description:
    "How Zoiko iD describes the handling of personal information: controller, data categories, purposes, recipients, transfers, retention, rights, cookies and safeguards.",
};

export default function PrivacyNoticePage() {
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
