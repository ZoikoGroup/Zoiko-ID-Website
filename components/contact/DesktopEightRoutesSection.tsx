import DesktopRoutesGridSection from "./DesktopRoutesGridSection";
import DesktopRoutesPhotosSection from "./DesktopRoutesPhotosSection";

export default function DesktopEightRoutesSection() {
  return (
    <section id="routes" className="hidden w-full bg-[#fafbfd] lg:block">
      <div className="flex w-full flex-col items-start gap-[60px] px-[160px] py-[105px]">
        <div className="flex w-[820px] max-w-[820px] flex-col gap-[15px]">
          <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
            Eight routes, each with a clear purpose
          </h2>
          <p className="max-w-[720px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82] xl:whitespace-nowrap">
            Each route states what it is for and what it is not for. A route marked pending has no verified {" "}
            <br className="max-xl:hidden" />
            destination yet, so it does not link anywhere.
          </p>
        </div>
        <DesktopRoutesGridSection />
        <DesktopRoutesPhotosSection />
      </div>
    </section>
  );
}
