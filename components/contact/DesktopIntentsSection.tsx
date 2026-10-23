import DesktopIntentsHeaderSection from "./DesktopIntentsHeaderSection";
import DesktopIntentsTableSection from "./DesktopIntentsTableSection";
import DesktopIntentsFaqSection from "./DesktopIntentsFaqSection";

export default function DesktopIntentsSection() {
  return (
    <section
      id="intents"
      className="flex w-full flex-col items-start gap-[60px] bg-[#f8fafc] px-[160px] py-[105px]"
    >
      <DesktopIntentsHeaderSection />
      <div className="flex w-full flex-col items-start gap-[32px]">
        <DesktopIntentsTableSection />
        <DesktopIntentsFaqSection />
      </div>
    </section>
  );
}
