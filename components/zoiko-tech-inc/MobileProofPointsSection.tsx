import Image from "next/image";
import Link from "next/link";

const eyebrow =
  "w-full pb-[0.8px] font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0891b2]";
const title = "w-full font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]";
const lead = "w-full max-w-[680px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82]";
const focus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2";

const proofs = [
  { icon: "identity", title: "Identity", text: <span>Identity establishes who or what is<br />represented.</span>, link: "Platform overview →", href: "/identity-guides" },
  { icon: "authority", title: "Authority", text: "Authority governs what actions are permitted.", link: "Delegated authority →", href: "/authority-explainers" },
  { icon: "evidence", title: "Evidence", text: <span>Evidence supports review of important<br />decisions.</span>, link: "Evidence & Audit →", href: "/architecture-guides" },
];

const topics = [
  { title: "Security", text: "Zoiko iD security principles.", scope: "Scope: Zoiko iD security" },
  { title: "Privacy", text: "Privacy principles and data handling.", scope: "Scope: Zoiko iD privacy" },
  { title: "Trust Center", text: "Approved assurance materials.", scope: "Scope: as published" },
  { title: "Compliance & Standards", text: "Standards posture, with scope.", scope: "Scope: per standard" },
];

export default function MobileProofPointsSection() {
  return (
    <div className="lg:hidden">
      <section id="proof-points" className="bg-[#f7f8fa] px-[22px] pb-[60px] pt-[120px]">
        <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[12px]">
          <p className={eyebrow}>Identity, authority and evidence</p>
          <h2 className={title}><span>Three proof points, each with<br />
its own page</span></h2>
          <p className={`${lead} pt-[1.045px]`}>
            <span>Each card links to the surface that owns the<br />
detail. Nothing here is a claim made on behalf of<br />
another page.</span>
          </p>
          <ul className="flex w-full flex-col gap-[20px] pt-[28px]">
            {proofs.map((p) => (
              <li key={p.title}>
                <Link
                  href={p.href}
                  className={`flex w-full flex-col items-start gap-[7px] rounded-[8px] border border-solid border-[#dce3ee] bg-white p-[28px] ${focus}`}
                >
                  <span className="flex h-[41px] w-[40px] items-center justify-center rounded-[10px] bg-[#e4f3f8] pb-px">
                    <Image src={`/zoiko-tech-inc/mobile-icon-${p.icon}.svg`} width={20} height={20} alt="" />
                  </span>
                  <span className="flex h-[34.05px] w-full items-center font-manrope text-[17px] font-bold leading-[28px] text-[#2563eb]">
                    {p.title}
                  </span>
                  <span className="w-full pb-[0.7px] font-manrope text-[15px] font-normal leading-[24.75px] text-[#5b6b82]">
                    {p.text}
                  </span>
                  <span className="w-full font-manrope text-[14px] font-bold leading-[23.1px] text-[#1d4ed8]">{p.link}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="security" className="bg-[#f7f8fa] px-[11px]">
        <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[59px]">
          <div className="flex w-full flex-col items-start gap-[12px]">
            <p className={eyebrow}>Enterprise integration perspective</p>
            <h2 className={title}><span>Designed to complement<br />
existing estates</span></h2>
            <p className={`${lead} pt-[1.12px]`}>
              <span>The Zoiko iD approach is described as<br />
complementary to existing identity estates. It<br />
keeps clear boundaries between authentication,<br />
authorization and evidence. This page does not<br />
describe customer migrations, deployments or<br />
specific protocol support.</span>
            </p>
            <Link
              href="/apis-integrations"
              className={`mt-[5px] w-full font-manrope text-[16px] font-bold leading-[26.4px] text-[#1d4ed8] ${focus}`}
            >
              Explore integrations →
            </Link>
          </div>
          <div className="flex w-full flex-col items-start gap-[12px]">
            <p className={eyebrow}>Trust and governance</p>
            <h2 className={title}><span>Review by topic, not by<br />
company badge</span></h2>
            <p className={`${lead} pt-[1.045px]`}>
              <span>Assurance is described per product and per<br />
topic. Certifications and attestations are never<br />
inherited from one page to another.</span>
            </p>
            <ul className="flex w-full flex-col gap-[20px] pt-[24px]">
              {topics.map((t) => (
                <li key={t.title}>
                  <Link
                    href="/trust-center"
                    className={`relative block h-[162.94px] w-full rounded-[8px] border border-solid border-[#dce3ee] bg-white ${focus}`}
                  >
                    <span className="absolute left-[26px] right-[26px] top-[26px] flex h-[34.05px] items-center whitespace-nowrap font-manrope text-[17px] font-bold leading-[28px] text-[#2563eb]">
                      {t.title}
                    </span>
                    <span className="absolute left-[26px] right-[26px] top-[67.05px] whitespace-nowrap font-manrope text-[14px] font-normal leading-[23.1px] text-[#5b6b82]">
                      {t.text}
                    </span>
                    <span className="absolute bottom-[25.8px] left-[26px] right-[26px] whitespace-nowrap rounded-[6px] bg-[#f7f8fa] px-[10px] py-[8px] font-manrope text-[12px] font-normal leading-[19.8px] text-[#2563eb]">
                      {t.scope}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
