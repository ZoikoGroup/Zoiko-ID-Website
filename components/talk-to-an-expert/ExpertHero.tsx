import Link from "next/link";
import { Eye, Hand, Layers, ShieldCheck } from "lucide-react";

const features = [
  { title: "Skip to main content", body: "First stop on the keyboard", icon: Hand },
  { title: "Approved header", body: "Platform mega-menu; Escape closes it", icon: Layers },
  { title: "Breadcrumb", body: "Standards & Interoperability", icon: ShieldCheck },
  { title: "Visible focus", body: "On every control", icon: Eye },
];

export default function ExpertHero() {
  return (
    <section
      className="relative -mt-20 overflow-hidden px-6 pb-16 pt-36 sm:-mt-24 sm:px-10 sm:pt-40 lg:-mt-[116px] lg:flex lg:min-h-[722px] lg:items-center lg:px-20 lg:pb-20 lg:pt-[180px] xl:px-40"
      style={{
        backgroundColor: "#1B2B45",
        backgroundImage: "url('/talk-to-an-expert/Section - CL-01 HERO + DIRECT ANSWER.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-start gap-8">
        <div className="flex max-w-[634px] flex-col gap-5">
          <h1 className="font-dm-serif text-[44px] font-normal leading-[1.1] text-white-solid sm:text-6xl lg:text-7xl lg:leading-[82.8px]">
            Talk to an expert
          </h1>
          <p className="font-manrope text-base leading-7 text-[#D3DCE8] sm:text-lg sm:leading-8">
            Discuss identity, bounded authority, developer integration and governance with the Zoiko iD team.
          </p>
        </div>

        <Link
          href="/docs"
          className="inline-flex items-center rounded-md bg-azure-48 px-7 py-3.5 font-manrope text-base font-bold text-white-solid transition-colors hover:bg-[#1D4ED8]"
        >
          Explore documentation
        </Link>

        <ul className="grid w-full grid-cols-1 overflow-hidden rounded-3xl bg-white-solid sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, body, icon: Icon }, index) => (
            <li
              key={title}
              className={`flex items-center gap-3.5 border-[#E2E8F0] px-6 py-8 lg:py-12 ${
                index < features.length - 1 ? "border-b sm:border-b-0 lg:border-r" : ""
              } ${index % 2 === 0 ? "sm:border-r" : ""} ${index < 2 ? "sm:border-b lg:border-b-0" : ""}`}
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-49/18 text-cyan-49">
                <Icon className="size-6" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="font-manrope text-base font-bold leading-6 text-[#0F172A]">{title}</p>
                <p className="max-w-[160px] font-manrope text-xs leading-5 text-[#5B6B82]">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
