import type { Metadata } from "next";

import DesktopPart1 from "@/components/contact/DesktopPart1";
import DesktopPart2 from "@/components/contact/DesktopPart2";
import DesktopPart3 from "@/components/contact/DesktopPart3";
import DesktopPart4 from "@/components/contact/DesktopPart4";
import DesktopPart5 from "@/components/contact/DesktopPart5";
import DesktopPart6 from "@/components/contact/DesktopPart6";
import DesktopPart7 from "@/components/contact/DesktopPart7";
import DesktopPart8 from "@/components/contact/DesktopPart8";
import MobilePart1 from "@/components/contact/MobilePart1";
import MobilePart2 from "@/components/contact/MobilePart2";
import MobilePart3 from "@/components/contact/MobilePart3";
import MobilePart4 from "@/components/contact/MobilePart4";
import MobilePart5 from "@/components/contact/MobilePart5";
import MobilePart6 from "@/components/contact/MobilePart6";
import MobilePart7 from "@/components/contact/MobilePart7";
import MobilePart8 from "@/components/contact/MobilePart8";

export const metadata: Metadata = {
  title: "Contact | Zoiko iD",
  description:
    "Reach the right Zoiko iD team. Choose an enquiry type, see how each request is routed and what happens to the information you share.",
};

export default function ContactPage() {
  return (
    <>
      {/* Desktop design (>= lg) */}
      <div className="hidden lg:block">
        <DesktopPart1 />
        <DesktopPart2 />
        <DesktopPart3 />
        <DesktopPart4 />
        <DesktopPart5 />
        <DesktopPart6 />
        <DesktopPart7 />
        <DesktopPart8 />
      </div>

      {/* Mobile design (< lg) */}
      <div className="overflow-x-clip lg:hidden">
        <MobilePart1 />
        <MobilePart2 />
        <MobilePart3 />
        <MobilePart4 />
        <MobilePart5 />
        <MobilePart6 />
        <MobilePart7 />
        <MobilePart8 />
      </div>
    </>
  );
}
