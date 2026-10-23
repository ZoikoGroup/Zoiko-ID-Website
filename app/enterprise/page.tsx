import type { Metadata } from "next";

import DesktopPart1 from "@/components/enterprise/DesktopPart1";
import DesktopPart2 from "@/components/enterprise/DesktopPart2";
import DesktopPart3 from "@/components/enterprise/DesktopPart3";
import DesktopPart4 from "@/components/enterprise/DesktopPart4";
import MobilePart1 from "@/components/enterprise/MobilePart1";
import MobilePart2 from "@/components/enterprise/MobilePart2";
import MobilePart3 from "@/components/enterprise/MobilePart3";

export const metadata: Metadata = {
  title: "Enterprise | Identity, Authority and Evidence | Zoiko iD",
  description:
    "Zoiko iD is designed to help enterprises establish who or what is acting, evaluate bounded authority, respond to changing trust signals and preserve reviewable evidence across existing identity and application estates.",
};

export default function EnterprisePage() {
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
      </div>
    </>
  );
}
