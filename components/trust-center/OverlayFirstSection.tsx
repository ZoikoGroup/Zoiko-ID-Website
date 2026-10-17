import Link from "next/link";
import { Building2, FileText, Link as LinkIcon, Scale, type LucideIcon } from "lucide-react";

import { IconBadge, Section, SectionHeading, StatusPill } from "./shared";

type Layer = {
  title: string;
  description: string;
  tag: string;
  icon: LucideIcon;
  highlighted?: boolean;
};

const layers: Layer[] = [
  { title: "Identity provider", description: "Federated identities for people and services.", tag: "Your organization", icon: Building2 },
  { title: "Your applications", description: "Request decisions and enforce them.", tag: "Your organization", icon: LinkIcon },
  {
    title: "Zoiko iD authority layer",
    description: "Scoped authority and policy-decision evidence.",
    tag: "Subject to verification",
    icon: Scale,
    highlighted: true,
  },
  { title: "Evidence owner", description: "Holds the authoritative decision record.", tag: "Owning service", icon: FileText },
];

const textVersion = [
  "Your identity provider authenticates people and services.",
  "Your applications request decisions from the authority layer.",
  "The authority layer evaluates scope and policy, subject to verification.",
  "The evidence owner holds the authoritative decision record.",
];

const links = [
  { label: "Developer documentation", href: "/overview" },
  { label: "API Reference", href: "/api-reference" },
  { label: "SDKs", href: "#" },
];

export default function OverlayFirstSection() {
  return (
    <Section tone="grey">
      <SectionHeading
        title="Overlay-first, with clear ownership"
        description="Zoiko iD is designed to complement existing identity providers and applications. Integration status is subject to verification, and no production deployment or geographic isolation is asserted here."
      />

      <div className="mt-10 grid grid-cols-1 overflow-hidden rounded-[20px] border border-grey-91 bg-white-solid sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
        {layers.map((layer) => (
          <article
            key={layer.title}
            className={`flex flex-col gap-2 border-grey-91 px-[22px] py-7 max-lg:border-b lg:border-r lg:last:border-r-0 ${
              layer.highlighted ? "bg-azure-9" : ""
            }`}
          >
            <IconBadge icon={layer.icon} tone={layer.highlighted ? "dark" : "light"} />
            <h3
              className={`pt-4 font-manrope text-[17px] font-bold leading-7 ${
                layer.highlighted ? "text-white-solid" : "text-[#0F172A]"
              }`}
            >
              {layer.title}
            </h3>
            <p className={`font-manrope text-sm leading-[22px] ${layer.highlighted ? "text-[#94A3B8]" : "text-azure-47"}`}>
              {layer.description}
            </p>
            <StatusPill
              className={`mt-2 rounded-full ${layer.highlighted ? "!bg-[#1E293B] !text-white-solid" : ""}`}
            >
              {layer.tag}
            </StatusPill>
          </article>
        ))}
      </div>

      <div
        className="mt-6 flex justify-center rounded-[20px] px-6 py-14 sm:px-10 lg:py-[76px]"
        style={{
          backgroundColor: "#1E293B",
          backgroundImage: "url('/trust-center/overlay-text-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full max-w-[540px]">
          <h3 className="border-b border-white-solid/20 pb-2 text-center font-manrope text-xl font-bold text-white-solid">
            Text version
          </h3>
          <ol className="mt-3 list-decimal space-y-1.5 pl-6 font-manrope text-base leading-[26px] text-[#E2E8F0] marker:font-bold marker:text-cyan-49">
            {textVersion.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-9 flex flex-wrap gap-x-[30px] gap-y-3">
        {links.map((link) => (
          <Link key={link.label} href={link.href} className="font-manrope text-base font-bold text-azure-48 hover:underline">
            {link.label} &rarr;
          </Link>
        ))}
      </div>
    </Section>
  );
}
