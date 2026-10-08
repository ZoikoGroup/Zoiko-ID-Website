import type { Metadata } from "next";

import DropdownPreview from "@/components/layout/DropdownPreview";

// Internal review page: keep it out of search results
export const metadata: Metadata = {
  title: "Dropdown preview",
  robots: { index: false, follow: false },
};

export default function DropdownsPage() {
  return <DropdownPreview />;
}
