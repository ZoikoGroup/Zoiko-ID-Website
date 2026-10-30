import Image from "next/image";
import { Activity, Bot, KeyRound, Layers, Route, Scale } from "lucide-react";
import { IconBadge, Pill, Section, SectionHeading } from "./shared";

const families = [
  {
    title: "Authentication",
    body: "Sign-in and token flows, referenced only where verified.",
    status: "Guide pending verification",
    icon: KeyRound,
    image: { src: "/docs/Abstract security lock.png", alt: "Phone showing a lock screen beside a laptop sign-in form" },
  },
  {
    title: "Delegated authority",
    body: "Actor, principal, scope, time, purpose, revocation and evidence.",
    status: "Guide pending verification",
    icon: Scale,
    image: { src: "/docs/Documents on a desk.png", alt: "A team standing together in an office" },
  },
  {
    title: "Machine and agent identity",
    body: "Non-human principals, shown separately from people.",
    status: "Guide pending verification",
    icon: Bot,
    image: { src: "/docs/Abstract AI visualization.png", alt: "Engineers working beside a robotic arm" },
  },
  {
    title: "Webhooks and events",
    body: "Subscription, delivery, signing, retries and ordering.",
    status: "Specification pending",
    icon: Activity,
    image: { src: "/docs/Abstract data visualization.png", alt: "Two colleagues looking at a tablet together" },
  },
  {
    title: "Integrations catalogue",
    body: "Supported connectors, their status and owners.",
    status: "Catalogue pending",
    icon: Route,
    image: { src: "/docs/Global network of connected nodes.png", alt: "Laptop showing a data dashboard" },
  },
  {
    title: "Architecture patterns",
    body: "Reference designs for connecting identity and authority.",
    status: "Link to patterns pending",
    icon: Layers,
    // No dedicated image was supplied for this card; replace when it is available.
    image: { src: "/enterprise/desktop-architecture-whiteboard.webp", alt: "Hands reviewing architecture notes on a desk" },
  },
];

export default function BrowseByBuildingSection() {
  return (
    <Section id="browse">
      <SectionHeading
        title="Browse by what you are building"
        description="Each family groups related guides. A family is shown only with its real destinations, so a heading never leads to an empty page."
      />

      <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
        {families.map(({ title, body, status, icon, image }) => (
          <li
            key={title}
            className="flex flex-col overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white-solid"
          >
            <div className="relative h-[150px] w-full">
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 357px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6">
              <div className="flex flex-col gap-1.5">
                <IconBadge icon={icon} />
                <h3 className="pt-2 font-manrope text-lg font-bold leading-6 text-[#0F172A]">{title}</h3>
                <p className="font-manrope text-sm leading-6 text-[#5B6B82]">{body}</p>
              </div>
              <div className="mt-auto pt-1">
                <Pill>{status}</Pill>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
