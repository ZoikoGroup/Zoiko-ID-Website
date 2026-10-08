import Image from "next/image";

import { Section, SectionHeader } from "./shared";

const capabilities = [
  {
    title: "Workforce Identity",
    description: "Secure access for employees and contractors",
    image: "/home/workforce-identity.webp",
  },
  {
    title: "Service Integration",
    description: "API-first approach for service identities",
    image: "/home/service-integration.webp",
  },
  {
    title: "Continuous Verification",
    description: "Real-time trust evaluation and signals",
    image: "/home/continuous-verification.webp",
  },
  {
    title: "Delegated Authority",
    description: "Bounded access for third parties",
    image: "/home/delegated-authority.webp",
  },
];

export default function PlatformCapabilitiesSection() {
  return (
    <Section>
      <SectionHeader
        title="Platform capabilities at scale"
        subtitle="Comprehensive features designed for enterprise requirements"
      />

      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
        {capabilities.map((capability) => (
          <article
            key={capability.title}
            className="relative h-80 overflow-hidden rounded-2xl shadow-[0px_12px_32px_0px_rgba(0,0,0,0.12)] sm:h-[400px]"
          >
            <Image
              src={capability.image}
              alt=""
              fill
              sizes="(min-width: 768px) 544px, 90vw"
              className="object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 bg-linear-to-b from-slate-900/40 to-slate-900/70 p-8 backdrop-blur-md sm:p-10">
              <h3 className="font-dm-serif text-xl font-normal leading-6 text-white-solid">
                {capability.title}
              </h3>
              <p className="font-manrope text-sm font-normal leading-6 text-white-solid/90">
                {capability.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
