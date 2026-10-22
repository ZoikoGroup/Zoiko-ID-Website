import DesktopRoleListIntroSection from "./DesktopRoleListIntroSection";
import DesktopRoleListFiltersSection from "./DesktopRoleListFiltersSection";
import DesktopRoleListCardsSection from "./DesktopRoleListCardsSection";
import DesktopRoleListEmptyStateSection from "./DesktopRoleListEmptyStateSection";

export default function DesktopRoleListSection() {
  return (
    <section id="role-list" className="flex w-full flex-col items-start gap-[60px] bg-white px-[160px] py-[105px]">
      <DesktopRoleListIntroSection />
      <div className="flex w-full flex-col gap-[15px]">
        <DesktopRoleListFiltersSection />
        <DesktopRoleListCardsSection />
        <DesktopRoleListEmptyStateSection />
      </div>
    </section>
  );
}
