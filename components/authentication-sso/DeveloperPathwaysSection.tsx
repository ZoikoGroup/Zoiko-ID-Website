import Link from "next/link";

import { ArrowRightIcon } from "@/components/home/icons";
import { Section, SectionHeader } from "@/components/home/shared";
import {
  MediaCard,
  cardTextClass,
  cardTitleClass,
} from "@/components/organization-identity/shared";

const pathways = [
  {
    title: "Quick Start",
    description:
      "Redirect to Zoiko iD login, receive token. Works in 5 minutes with any web app.",
    image: "/authentication-sso/quick-start.webp",
    cta: "Read docs",
  },
  {
    title: "Deep Integration",
    description:
      "Custom auth flows, policy evaluation, session management. APIs and webhooks for advanced use.",
    image: "/authentication-sso/deep-integration.webp",
    cta: "View APIs",
  },
  {
    title: "Expert Support",
    description:
      "Architecture review, implementation assistance, production support 24/7.",
    image: "/authentication-sso/expert-support.webp",
    cta: "Get help",
  },
];

export default function DeveloperPathwaysSection() {
  return (
    <Section background="slate">
      <SectionHeader
        title="Developer integration pathways"
        widthClass="max-w-[800px]"
      />

      {/* Wrapping flex row so the lone third card on tablet stays centred */}
      <div className="flex w-full max-w-[1040px] flex-wrap justify-center gap-8">
        {pathways.map((pathway) => (
          <div
            key={pathway.title}
            className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-21.34px)]"
          >
            <MediaCard
              image={pathway.image}
              sizes="(min-width: 1024px) 325px, (min-width: 768px) 45vw, 90vw"
            >
              <h3 className={cardTitleClass}>{pathway.title}</h3>
              <p className={`${cardTextClass} pb-6`}>{pathway.description}</p>

              <Link
                href="#"
                aria-label={`${pathway.cta}: ${pathway.title}`}
                className="mt-auto inline-flex items-center gap-2 font-manrope text-base font-medium text-azure-48 transition-colors duration-200 hover:text-azure-53"
              >
                {pathway.cta}
                <ArrowRightIcon size={16} />
              </Link>
            </MediaCard>
          </div>
        ))}
      </div>
    </Section>
  );
}
