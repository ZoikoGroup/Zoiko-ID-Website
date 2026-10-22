import MobileRouteIntroSection from "./MobileRouteIntroSection";
import MobileRouteCardsSection from "./MobileRouteCardsSection";
import MobileRouteImagesSection from "./MobileRouteImagesSection";

export default function MobileChooseEnquiryTypeSection() {
  return (
    <section
      id="routes"
      className="w-full border-b border-solid border-[#d9e1ec] bg-[#fafbfd] px-[22px] py-[60px]"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[36px]">
        <MobileRouteIntroSection />
        <MobileRouteCardsSection />
        <MobileRouteImagesSection />
      </div>
    </section>
  );
}
