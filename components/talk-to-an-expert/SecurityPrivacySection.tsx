import Image from "next/image";
import { Lock, Route, ShieldCheck } from "lucide-react";
import { IconBadge, Pill, Section, SectionHeading } from "@/components/docs/shared";

const pages = [
  {
    title: "Security",
    body: "How we protect the platform.",
    icon: ShieldCheck,
    image: { src: "/talk-to-an-expert/Abstract security lock.png", alt: "Digital shield with a keyhole over a circuit board" },
  },
  {
    title: "Privacy",
    body: "How personal data is handled.",
    icon: Lock,
    image: { src: "/talk-to-an-expert/Documents on a desk.png", alt: "Lock icon projected over a developer workstation" },
  },
  {
    title: "Standards & Interoperability",
    body: "Protocols and integration patterns.",
    icon: Route,
    image: { src: "/talk-to-an-expert/Global network of connected nodes.png", alt: "Hands holding a tablet against a blue background" },
  },
];

export default function SecurityPrivacySection() {
  return (
    <Section id="security-privacy" tone="grey">
      <SectionHeading
        title="Security, privacy and standards"
        description="Before you send anything, these pages explain how we handle security, privacy and interoperability. Each link opens only once its destination is approved."
      />

      <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
        {pages.map(({ title, body, icon, image }) => (
          <li key={title} className="flex flex-col overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white-solid">
            <div className="relative h-[170px] w-full">
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 357px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col gap-1.5 p-6">
              <IconBadge icon={icon} />
              <h3 className="pt-2.5 font-manrope text-lg font-bold leading-6 text-[#0F172A]">{title}</h3>
              <p className="pb-2 font-manrope text-sm leading-6 text-[#5B6B82]">{body}</p>
              <div className="mt-auto">
                <Pill>Pending verification</Pill>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
