import Image from "next/image";

export default function DesktopNodesSection() {
  return (
    <section
      id="nodes"
      className="flex w-full items-center justify-center gap-[80px] bg-white px-[160px] py-[105px]"
    >
      <div className="relative h-[380px] min-w-px flex-1 rounded-[18px]">
        <Image
          src="/enterprise/desktop-decision-visual.webp"
          alt="Visual of an access decision flowing through five distinct nodes"
          fill
          sizes="560px"
          className="rounded-[18px] object-cover"
        />
      </div>
      <div className="flex min-w-px flex-1 flex-col items-start gap-[36px]">
        <div className="flex w-full flex-col items-start">
          <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[57.9px] text-[#07111f]">
            Five distinct nodes, each with its own owner
          </h2>
          <p className="w-full pt-[13.8px] font-manrope text-[16px] leading-[25.6px] text-[#64748b]">
            Actor and organization, mandate, policy, decision and reviewable evidence. Each node has
            its own limits, so none can stand in for another.
          </p>
        </div>
        <div className="w-full rounded-[10px] bg-[#f1f5f9] px-[18px] py-[14px]">
          <p className="font-manrope text-[14px] font-normal leading-[22.4px] text-[#07111f]">
            <strong className="font-bold">Text equivalent.</strong> An actor (person, service or AI
            agent acting for an organization) makes a request; a mandate states who granted
            authority, purpose, resources and timeframe; policy is evaluated against current
            context; a decision is produced for this request; reviewable evidence records the basis
            and is shown only to authorized reviewers.
          </p>
        </div>
      </div>
    </section>
  );
}
