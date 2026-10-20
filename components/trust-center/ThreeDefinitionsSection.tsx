import Image from "next/image";
import { FileText, KeyRound, User } from "lucide-react";

import { IconBadge, Section, SectionHeading, StatusPill } from "./shared";

const definitions = [
  {
    title: "Identity",
    description: "Who or what acts, including people, organizations, services and agents.",
    owner: "Owner: Product and Security",
    icon: User,
    image: { src: "/trust-center/definition-identity.webp", alt: "Professional in a suit standing in an office" },
  },
  {
    title: "Authority",
    description: "The bounded actions an actor may take, within policy-defined limits.",
    owner: "Owner: Product and Security",
    icon: KeyRound,
    image: { src: "/trust-center/definition-authority.webp", alt: "Two executives reviewing a tablet together" },
  },
  {
    title: "Evidence",
    description: "Attributable decision context, where supported and approved for disclosure.",
    owner: "Owner: GRC and Security",
    icon: FileText,
    image: { src: "/trust-center/definition-evidence.webp", alt: "Stack of documents on a desk" },
  },
];

export default function ThreeDefinitionsSection() {
  return (
    <Section tone="grey">
      <SectionHeading
        title="Three definitions, kept separate"
        description="Identity establishes who or what acts. Authority identifies bounded action rights. Evidence records attributable decision context where it is supported. Authentication is not authorization, and a record is not an independent audit opinion."
      />

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-14">
        {definitions.map((item) => (
          <article
            key={item.title}
            className="flex flex-col overflow-hidden rounded-2xl border border-grey-91 bg-white-solid"
          >
            <div className="relative h-44 w-full">
              <Image src={item.image.src} alt={item.image.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-6">
              <IconBadge icon={item.icon} size="lg" />
              <h3 className="pb-2 pt-3 font-dm-serif text-2xl font-normal leading-8 text-[#0F172A]">
                {item.title}
              </h3>
              <p className="font-manrope text-base leading-6 text-azure-47">{item.description}</p>
              <StatusPill className="mt-auto">{item.owner}</StatusPill>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
