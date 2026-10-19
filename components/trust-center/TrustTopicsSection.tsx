import Image from "next/image";
import Link from "next/link";
import { Award, Hand, ShieldCheck, TriangleAlert, type LucideIcon } from "lucide-react";

import { IconBadge, Section, SectionHeading } from "./shared";

type Topic = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: { src: string; alt: string };
  // Topics without an approved destination render as text only.
  link?: { label: string; href: string };
};

const topics: Topic[] = [
  {
    title: "Security",
    description: "Architecture, controls and security-reporting ownership.",
    icon: ShieldCheck,
    image: { src: "/trust-center/topic-security.webp", alt: "Security engineers reviewing a report beside monitors" },
    link: { label: "Open Security", href: "#" },
  },
  {
    title: "Privacy",
    description: "Privacy architecture. Legal terms live in the Privacy Notice.",
    icon: Hand,
    image: { src: "/trust-center/topic-privacy.webp", alt: "Two colleagues talking on a sofa in a bright office" },
    link: { label: "Open Privacy", href: "#" },
  },
  {
    title: "Compliance & Standards",
    description: "Standards posture, applicability and assessment status.",
    icon: Award,
    image: { src: "/trust-center/topic-compliance.webp", alt: "Two analysts smiling at a desk with printed charts" },
    link: { label: "Open Compliance Standards", href: "#" },
  },
  {
    title: "Responsible disclosure",
    description: "How to report a suspected vulnerability.",
    icon: TriangleAlert,
    image: { src: "/trust-center/topic-disclosure.webp", alt: "Person holding a phone above a laptop in low light" },
  },
];

export default function TrustTopicsSection() {
  return (
    <Section id="trust-topics">
      <SectionHeading
        title="Start with the topic that matters to you"
        description="Each topic summarizes approved information and links to the authoritative page that owns it. Topics without an approved destination show as text only."
      />

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
        {topics.map((topic) => (
          <article
            key={topic.title}
            className="flex flex-col overflow-hidden rounded-2xl border border-grey-91 bg-white-solid"
          >
            <div className="relative h-[150px] w-full">
              <Image src={topic.image.src} alt={topic.image.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <IconBadge icon={topic.icon} />
              <h3 className="pb-1.5 pt-5 font-manrope text-base font-bold leading-7 text-[#0F172A]">
                {topic.title}
              </h3>
              <p className="font-manrope text-sm leading-6 text-azure-47">{topic.description}</p>
              {topic.link ? (
                <Link
                  href={topic.link.href}
                  className="mt-auto pt-6 font-manrope text-sm font-bold leading-6 text-azure-48 hover:underline"
                >
                  {topic.link.label} &rarr;
                </Link>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
