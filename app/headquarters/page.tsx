import type { Metadata } from "next";

import DesktopPart1 from "@/components/headquarters/DesktopPart1";
import DesktopPart2 from "@/components/headquarters/DesktopPart2";
import DesktopPart3 from "@/components/headquarters/DesktopPart3";
import DesktopPart4 from "@/components/headquarters/DesktopPart4";
import DesktopPart5 from "@/components/headquarters/DesktopPart5";
import MobilePart1 from "@/components/headquarters/MobilePart1";
import MobilePart2 from "@/components/headquarters/MobilePart2";
import MobilePart3 from "@/components/headquarters/MobilePart3";
import MobilePart4 from "@/components/headquarters/MobilePart4";
import MobilePart5 from "@/components/headquarters/MobilePart5";
import MobilePart6 from "@/components/headquarters/MobilePart6";

export const metadata: Metadata = {
  title: "Headquarters | Zoiko iD",
  description:
    "A headquarters in Sacramento, and a listed office in London. What the address does and does not tell you, and how to reach the right team.",
};

export default function HeadquartersPage() {
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
