import type { Metadata } from "next";

import DesktopPart1 from "@/components/talk-to-sales/DesktopPart1";
import DesktopPart2 from "@/components/talk-to-sales/DesktopPart2";
import DesktopPart3 from "@/components/talk-to-sales/DesktopPart3";
import DesktopPart4 from "@/components/talk-to-sales/DesktopPart4";
import MobilePart1 from "@/components/talk-to-sales/MobilePart1";
import MobilePart2 from "@/components/talk-to-sales/MobilePart2";
import MobilePart3 from "@/components/talk-to-sales/MobilePart3";

export const metadata: Metadata = {
  title: "Talk to Sales | Zoiko iD",
  description:
    "Talk to a Zoiko iD identity expert about identity, authority, evidence, integrations and agents. Enquiries are reviewed, not booked as meetings.",
};

export default function TalkToSalesPage() {
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
