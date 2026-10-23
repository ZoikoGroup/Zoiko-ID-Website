import Image from "next/image";
import Eyebrow from "./MobileEyebrow";

const items = [
  ["Re-evaluation", "A fresh check against current context."],
  ["Limitation", "Narrowing what the actor may do."],
  ["Revocation", "Withdrawing authority, where the mechanism permits."],
  ["Expiry", "Authority ends at the stated time."],
];

export default function ContinuousTrustSection() {
  return (
    <section id="continuous-trust" className="w-full px-[22px] pt-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[28px]">
        <div className="flex flex-col gap-[12px]">
          <Eyebrow>Continuous trust and revocation</Eyebrow>
          <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
            Changing context can
            <br />
            change the answer
          </h2>
          <p className="max-w-[820px] pt-[2.01px] font-manrope text-[16px] leading-[25.6px] text-[color:#64748b]">
            Risk signals, expiry, access limitation and revocation are architectural patterns. Timing and triggers are examples, not promised guarantees.
          </p>
          <ul className="flex flex-col gap-[14px] pt-[12px]">
            {items.map(([title, text]) => (
              <li key={title} className="flex flex-col gap-[6px] rounded-[18px] border border-solid border-[#e2e8f0] bg-white p-[26px]">
                <h3 className="font-manrope text-[17px] font-bold leading-[27.2px] text-[#2563eb]">{title}</h3>
                <p className="font-manrope text-[14px] leading-[22.4px] text-[color:#64748b]">{text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-[440px] w-full overflow-hidden rounded-[20px]">
          <Image
            src="/machine-agent-identity-guides/mobile-continuous-trust-signals.webp"
            alt=""
            fill
            sizes="(max-width: 560px) 100vw, 560px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
