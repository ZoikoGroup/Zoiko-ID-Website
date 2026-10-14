import Image from "next/image";

const revocationPoints = [
  {
    bold: "Sponsor revokes:",
    text: " Mandate withdrawn instantly. New requests denied in seconds.",
  },
  {
    bold: "Org policy revokes:",
    text: " All agents matching condition lose access immediately.",
  },
  {
    bold: "Credential revoked:",
    text: " Identity invalidated. Next request fails. Sessions in-flight get error on next policy check.",
  },
  {
    bold: "Time expires:",
    text: " Automatic revocation. No re-grant without new mandate.",
  },
  {
    bold: "Audit trail:",
    text: ' "Agent access revoked by X at Y reason Z" recorded.',
  },
];

export default function RevocationSection() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-[160px] lg:py-[105px]">
      <div className="mx-auto w-full max-w-[1120px]">
        <h2 className="mb-14 text-center font-dm-serif text-3xl font-normal leading-[1.2] text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[71.3px]">
          Immediate revocation
        </h2>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[497px_1fr]">
          {/* Left Graphic */}
          <div className="relative h-[400px] w-full overflow-hidden rounded-[12px] bg-slate-100 shadow-sm">
            <Image
              src="/solutions-ai-solutions/revocation.webp"
              alt="Immediate revocation diagram"
              fill
              sizes="(min-width: 1024px) 497px, 100vw"
              className="object-cover"
            />
          </div>

          {/* Right Card */}
          <div className="flex flex-col justify-center rounded-[12px] border border-[#E2E8F0] bg-white p-8 lg:p-10 shadow-sm">
            <h3 className="mb-6 font-dm-serif text-2xl font-normal leading-[1.2] text-[#071426] sm:text-[22.4px]">
              No delay. No grace period.
            </h3>

            <div className="flex flex-col gap-4">
              {revocationPoints.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-[#EF4444]" />
                  <p className="font-manrope text-[16px] leading-[28.8px] text-[#64748B]">
                    <strong className="font-bold text-[#071426]">{item.bold}</strong>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
