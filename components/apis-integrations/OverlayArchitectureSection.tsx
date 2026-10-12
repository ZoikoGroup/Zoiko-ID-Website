import { Fragment } from "react";

import {
  ArrowRightIcon,
  CheckCircleIcon,
  DatabaseIcon,
  ShieldLockIcon,
} from "@/components/home/icons";
import { Section, SectionHeader } from "@/components/home/shared";

const layers = [
  {
    title: "IdP / Directory",
    caption: "Existing source of identity",
    icon: <DatabaseIcon size={32} />,
  },
  {
    title: "Zoiko iD",
    caption: "Trust & authority layer",
    icon: <ShieldLockIcon size={32} />,
  },
  {
    title: "Applications",
    caption: "Enforce decisions",
    icon: <CheckCircleIcon size={32} />,
  },
];

export default function OverlayArchitectureSection() {
  return (
    <Section>
      <SectionHeader title="Overlay-first architecture" />

      <div className="flex w-full flex-col gap-8 rounded-xl bg-slate-900 p-6 sm:p-10">
        <p className="text-center font-manrope text-base font-semibold leading-7 text-white">
          Existing Infrastructure → Zoiko iD Trust Layer → Downstream
          Enforcement &amp; Evidence
        </p>

        <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-center">
          {layers.map((layer, index) => (
            <Fragment key={layer.title}>
              {index > 0 && (
                <span
                  aria-hidden="true"
                  className="flex rotate-90 justify-center text-cyan-49 md:rotate-0"
                >
                  <ArrowRightIcon size={28} />
                </span>
              )}
              <div className="flex flex-1 flex-col items-center rounded-xl bg-white-solid p-4 text-center outline-2 -outline-offset-2 outline-cyan-49">
                <span className="pb-1 pt-2.5 text-cyan-49">{layer.icon}</span>
                <span className="pt-2 font-manrope text-sm font-bold text-azure-9">
                  {layer.title}
                </span>
                <span className="font-manrope text-xs font-normal leading-6 text-azure-47">
                  {layer.caption}
                </span>
              </div>
            </Fragment>
          ))}
        </div>

        <p className="max-w-[940px] border-t border-white/10 pt-6 font-manrope text-sm font-normal leading-6 text-white">
          <strong className="font-bold">Key principle:</strong> Zoiko iD is
          non-destructive. Keep your existing IdP. Zoiko iD receives
          authentication signals, adds context and authority checks, returns
          decisions. No migration required.
        </p>
      </div>
    </Section>
  );
}
