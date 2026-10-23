import Image from "next/image";

const cards = [
  ["Re-evaluation", "A fresh check against current context."],
  ["Limitation", "Narrowing what the actor may do."],
  ["Revocation", "Withdrawing authority, where the mechanism permits."],
  ["Expiry", "Authority ends at the stated time."],
];

export default function ContinuousTrustSection() {
  return (
    <section className="w-full bg-white py-[105px] px-[160px]">
      <div className="mx-auto flex w-full items-center gap-7">
        <div className="flex min-w-0 flex-1 flex-col gap-12">
          <div className="flex flex-col gap-[11px]">
            <h2 className="font-dm-serif text-[52px] font-normal leading-[57.9px] text-[#07111f]">
              Changing context can change the answer
            </h2>
            <p className="max-w-[820px] pt-[1.9px] font-manrope text-[16px] leading-[25.6px] text-[#64748b]">
              Risk signals, expiry, access limitation and revocation are architectural patterns. Timing and triggers are examples, not promised guarantees.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-[14px]">
            {cards.map(([t, d]) => (
              <li key={t} className="flex flex-col gap-[6px] rounded-[18px] border border-[#e2e8f0] bg-white p-[26px] pb-[48.4px]">
                <h3 className="font-manrope text-[17px] font-bold leading-[27.2px] text-[#07111f]">{t}</h3>
                <p className="font-manrope text-[14px] leading-[22.4px] text-[#64748b]">{d}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-[440px] min-w-0 flex-1 rounded-[20px]">
          <Image
            src="/machine-agent-identity-guides/desktop-continuous-trust-signals.webp"
            alt=""
            fill
            sizes="(min-width: 1440px) 546px, 40vw"
            className="rounded-[20px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
