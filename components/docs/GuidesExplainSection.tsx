import Image from "next/image";
import { FileText, ShieldCheck, User } from "lucide-react";
import { IconBadge, Section, SectionHeading } from "./shared";

const guides = [
  {
    title: "Actors and principals",
    body: "Who acts, and on whose behalf.",
    icon: User,
    image: { src: "/docs/Professional portrait.png", alt: "Two colleagues exchanging a document at a desk" },
  },
  {
    title: "Trust and revocation",
    body: "How trust signals change access.",
    icon: ShieldCheck,
    image: { src: "/docs/Team meeting around a table.png", alt: "Colleagues celebrating in an open-plan office" },
  },
  {
    title: "Evidence and audit",
    body: "What a decision record should show.",
    icon: FileText,
    image: { src: "/docs/Colleagues reviewing a shared document.png", alt: "Person holding a clipboard and papers" },
  },
];

export default function GuidesExplainSection() {
  return (
    <Section id="guides">
      <SectionHeading
        title="What the guides explain"
        description="These guides explain the concepts behind the platform. They are guidance, and each one states where its implementation details are confirmed."
      />

      <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
        {guides.map(({ title, body, icon, image }) => (
          <li key={title} className="flex flex-col overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white-solid">
            <div className="relative h-[150px] w-full">
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 357px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-col gap-1.5 p-6">
              <IconBadge icon={icon} />
              <h3 className="pt-2.5 font-manrope text-lg font-bold leading-6 text-[#0F172A]">{title}</h3>
              <p className="font-manrope text-sm leading-6 text-[#5B6B82]">{body}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
