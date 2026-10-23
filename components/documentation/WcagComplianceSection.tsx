import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface WcagComplianceSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const wcagFeatures = [
  "Desktop: restrained article column with an optional table of contents.",
  "Tablet and mobile: one column, collapsible topics, no horizontal clipping.",
  "200% and 400% zoom: every function still works.",
  "Visible focus, logical order, live-region announcements, reduced motion honoured.",
];

export default function WcagComplianceSection({
  view = "all",
}: WcagComplianceSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full bg-white border-t border-slate-100">
      {/* DESKTOP VERSION (hidden sm:block) */}
      {showDesktop && (
        <div className="hidden sm:block py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Heading */}
              <div className="lg:col-span-4">
                <h2 className="font-dm-serif text-3xl font-normal leading-[1.15] tracking-tight text-[#071324] sm:text-4xl lg:text-[44px]">
                  WCAG 2.2
                  <br />
                  AA, at every
                  <br />
                  width
                </h2>
              </div>

              {/* Right Column: Images & Features List */}
              <div className="flex flex-col gap-8 lg:col-span-8">
                {/* Two side-by-side images */}
                <div className="grid grid-cols-2 gap-4 lg:gap-5">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-xs">
                    <Image
                      src="/Support-Accessibility-02-help-support/sad3.png"
                      alt="Reviewing accessible documentation papers"
                      fill
                      sizes="(min-width: 1024px) 380px, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-xs">
                    <Image
                      src="/Support-Accessibility-02-help-support/sad4.png"
                      alt="Organized stacks of bound documents"
                      fill
                      sizes="(min-width: 1024px) 380px, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* WCAG Criteria Checklist */}
                <ul className="flex flex-col gap-3.5 font-manrope text-xs sm:text-[13px] text-[#64748b]">
                  {wcagFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0ea5e9]" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE VERSION (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden bg-white px-5 py-12 border-t border-slate-200/60">
          {/* Category Number & Eyebrow */}
          <div>
            <p className="font-mono text-[10.5px] font-bold uppercase tracking-widest text-[#0ea5e9]">
              14 · RESPONSIVE AND ACCESSIBILITY
            </p>
            <div className="mt-1.5 h-[2px] w-12 bg-[#0ea5e9]" />
          </div>

          {/* Heading */}
          <h2 className="mt-4 font-dm-serif text-[30px] font-normal leading-[1.2] tracking-tight text-[#071324]">
            WCAG 2.2 AA, at every width
          </h2>

          {/* 4 Stacked Mobile Images */}
          <div className="mt-6 flex flex-col gap-3.5">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-xs">
              <Image
                src="/Support-Accessibility-01-help-support/ahs12.jpg"
                alt="Accessible surface tablet interface"
                fill
                sizes="(max-width: 640px) 100vw, 400px"
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-xs">
              <Image
                src="/Support-Accessibility-02-help-support/sad10.jpg"
                alt="Smiling user representing accessibility diversity"
                fill
                sizes="(max-width: 640px) 100vw, 400px"
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-xs">
              <Image
                src="/Support-Accessibility-02-help-support/sad11.jpg"
                alt="Team working around table with laptops"
                fill
                sizes="(max-width: 640px) 100vw, 400px"
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-xs">
              <Image
                src="/Support-Accessibility-01-help-support/ahs15.jpg"
                alt="Modern accessible office space"
                fill
                sizes="(max-width: 640px) 100vw, 400px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Mobile WCAG Checklist */}
          <ul className="mt-6 flex flex-col gap-3 font-manrope text-xs leading-relaxed text-[#64748b]">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#0ea5e9]" />
              <span>
                Desktop: restrained article column with an optional table of contents.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#0ea5e9]" />
              <span>
                Tablet and mobile: one column, collapsible topics, no horizontal clipping .
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#0ea5e9]" />
              <span>
                200% and 400% zoom: every function still works.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#0ea5e9]" />
              <span>
                Visible focus, logical order, live-region announcements, reduced motion honoured.
              </span>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
}
