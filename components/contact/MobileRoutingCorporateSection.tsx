import MobileRoutingCorporateCard from "./MobileRoutingCorporateCard";
import MobileRoutingTable from "./MobileRoutingTable";
import MobileRoutingFaqCards from "./MobileRoutingFaqCards";

export default function MobileRoutingCorporateSection() {
  return (
    <section
      id="intents"
      className="flex w-full flex-col items-start border-b border-solid border-[#d9e1ec] bg-[#f2f5fa] px-[22px] py-[60px]"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[56px]">
        <div className="flex w-full flex-col items-center gap-[40px]">
          <div className="flex w-full flex-col gap-[15px]">
            <div className="flex items-center gap-[12px]">
              <span className="h-[2px] w-[24.97px] shrink-0 bg-[#0891b2]" />
              <span className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0b1b33]">
                07
              </span>
              <span className="font-manrope whitespace-nowrap text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0891b2]">
                Routing and corporate
                <br />
                information
              </span>
            </div>
            <h2 className="font-dm-serif pb-[0.83px] text-[32px] font-normal leading-[35.84px] text-[#0b1b33] [word-break:break-word]">
              Where each intent goes
            </h2>
            <p className="font-manrope max-w-[720px] text-[17px] font-normal leading-[28px] text-[#5b6b82] [word-break:break-word]">
              Each intent has a destination and a forbidden
              <br />
              fallback. A general inbox is never a fallback
              <br />
              for a security or privacy matter.
            </p>
          </div>
          <MobileRoutingCorporateCard />
        </div>
        <MobileRoutingTable />
        <MobileRoutingFaqCards />
      </div>
    </section>
  );
}
