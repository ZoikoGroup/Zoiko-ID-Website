import Link from "next/link";

import {
  ApiIcon,
  ArrowRightIcon,
  BoltSolidIcon,
  BoxIcon,
  FlaskIcon,
} from "@/components/home/icons";
import { Section, SectionHeader } from "@/components/home/shared";
import {
  MediaCard,
  SolidIconTile,
  cardTextClass,
  cardTitleClass,
} from "@/components/organization-identity/shared";

const paths = [
  {
    title: "Quickstarts",
    description:
      "Copy-paste code examples for common use cases. Get started in 5 minutes.",
    image: "/apis-integrations/quickstarts.webp",
    icon: <BoltSolidIcon size={32} />,
    cta: "View",
  },
  {
    title: "API Reference",
    description:
      "Complete specification of all endpoints, parameters, and response schemas.",
    image: "/apis-integrations/api-reference.webp",
    icon: <ApiIcon size={32} />,
    cta: "Read docs",
  },
  {
    title: "SDKs & Libraries",
    description: "Node.js, Python, Go, Java, C#, Rust. Install and use immediately.",
    image: "/apis-integrations/sdks.webp",
    icon: <BoxIcon size={32} />,
    cta: "Download",
  },
  {
    title: "Sandbox",
    description:
      "Test environment with sample data. No production risk, full API access.",
    image: "/apis-integrations/sandbox.webp",
    icon: <FlaskIcon size={32} />,
    cta: "Access",
  },
];

export default function DeveloperPathsSection() {
  return (
    <Section background="slate">
      <SectionHeader title="Developer integration paths" />

      <div className="grid w-full grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {paths.map((path) => (
          <MediaCard
            key={path.title}
            image={path.image}
            sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 90vw"
          >
            <SolidIconTile>{path.icon}</SolidIconTile>
            <h3 className={cardTitleClass}>{path.title}</h3>
            <p className={`${cardTextClass} pb-4`}>{path.description}</p>

            <Link
              href="#"
              aria-label={`${path.cta}: ${path.title}`}
              className="mt-auto inline-flex items-center gap-2 font-manrope text-base font-medium text-azure-48 transition-colors duration-200 hover:text-azure-53"
            >
              {path.cta}
              <ArrowRightIcon size={16} />
            </Link>
          </MediaCard>
        ))}
      </div>
    </Section>
  );
}
