import Link from "next/link";

import {
  ArrowRightIcon,
  BookmarkBookIcon,
  BoxIcon,
  FlaskIcon,
  HeadsetIcon,
} from "@/components/home/icons";
import { Section, SectionHeader } from "@/components/home/shared";

import {
  MediaCard,
  SolidIconTile,
  cardTextClass,
  cardTitleClass,
} from "./shared";

const resources = [
  {
    title: "Documentation",
    description: "API references, guides, code examples in all languages.",
    image: "/organization-identity/documentation.webp",
    icon: <BookmarkBookIcon size={32} />,
    cta: "View docs",
  },
  {
    title: "Sandbox",
    description: "Test environment to build and verify without production risk.",
    image: "/organization-identity/sandbox.webp",
    icon: <FlaskIcon size={32} />,
    cta: "Try now",
  },
  {
    title: "SDKs",
    description: "Node.js, Python, Go, Java, C#, Rust for rapid integration.",
    image: "/organization-identity/sdks.webp",
    icon: <BoxIcon size={32} />,
    cta: "Download",
  },
  {
    title: "Support",
    description: "24/7 developer support, forums, and office hours.",
    image: "/organization-identity/support.webp",
    icon: <HeadsetIcon size={32} />,
    cta: "Get help",
  },
];

export default function DeveloperAdoptionSection() {
  return (
    <Section>
      <SectionHeader title="Developer adoption" />

      <div className="grid w-full grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {resources.map((resource) => (
          <MediaCard
            key={resource.title}
            image={resource.image}
            sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 90vw"
          >
            <SolidIconTile>{resource.icon}</SolidIconTile>
            <h3 className={cardTitleClass}>{resource.title}</h3>
            <p className={`${cardTextClass} pb-4`}>{resource.description}</p>

            <Link
              href="#"
              aria-label={`${resource.cta}: ${resource.title}`}
              className="mt-auto inline-flex items-center gap-2 font-manrope text-base font-medium text-azure-48 transition-colors duration-200 hover:text-azure-53"
            >
              {resource.cta}
              <ArrowRightIcon size={16} />
            </Link>
          </MediaCard>
        ))}
      </div>
    </Section>
  );
}
