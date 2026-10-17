import Link from "next/link";
import { FileText, ShieldCheck } from "lucide-react";

const chips = [
  { label: "Public pages stay open", icon: FileText },
  { label: "No gate on education", icon: ShieldCheck },
];

export default function TrustCenterCta() {
  return (
    <section className="bg-white-solid px-4 py-12 sm:px-10 lg:px-[95px] lg:py-12">
      <div
        className="mx-auto flex w-full max-w-[1250px] flex-col items-center gap-5 rounded-[32px] px-6 py-16 text-center sm:px-12 lg:min-h-[602px] lg:justify-center"
        style={{
          backgroundColor: "#1E2A3D",
          backgroundImage: "url('/trust-center/final-cta-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="max-w-[940px] font-dm-serif text-[34px] font-normal leading-[1.12] text-white-solid sm:text-[44px] lg:text-[56px] lg:leading-[62px]">
          Request assurance information, or talk to an identity expert.
        </h2>
        <p className="max-w-[620px] font-manrope text-base leading-7 text-[#E2E8F0]">
          Enterprise reviewers can request assurance information through the route above. Developers and
          security teams can start with the public pages at any time.
        </p>

        <ul className="flex flex-wrap justify-center gap-4 pt-4">
          {chips.map(({ label, icon: Icon }) => (
            <li
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-white-solid/25 bg-white-solid/5 px-4 py-2 font-manrope text-sm text-[#E2E8F0]"
            >
              <Icon className="size-4 text-cyan-49" strokeWidth={1.75} aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap justify-center gap-5 pt-6">
          <Link
            href="#request-assurance"
            className="inline-flex items-center rounded-md bg-azure-48 px-7 py-3.5 font-manrope text-base font-bold text-white-solid transition-colors hover:bg-[#1D4ED8]"
          >
            Request assurance information
          </Link>
          <Link
            href="#"
            className="inline-flex items-center rounded-md border border-white-solid px-7 py-3.5 font-manrope text-base font-bold text-white-solid transition-colors hover:bg-white-solid/10"
          >
            Talk to an identity expert
          </Link>
        </div>
      </div>
    </section>
  );
}
