import {
  OfficeIcon,
  RepresentativeIcon,
  ShieldCheckIcon,
  VerifiedBadgeIcon,
} from "@/components/home/icons";
import { IconTile, Section, SectionHeader } from "@/components/home/shared";

const objects = [
  {
    title: "Organization",
    description:
      "Legal entity, business unit, or tenant. Persistent identity with attributes like name, jurisdiction, tax ID.",
    icon: <OfficeIcon size={40} />,
  },
  {
    title: "Verified Attributes",
    description:
      "Claims about the org with evidence of who attested, when, and under what conditions. Expiry and revocation support.",
    icon: <VerifiedBadgeIcon size={40} />,
  },
  {
    title: "Representation",
    description:
      "Who is authorized to speak for the organization? Domain admin? Officer? Which org do they represent?",
    icon: <RepresentativeIcon size={40} />,
  },
  {
    title: "Authority",
    description:
      "Scoped, bounded permissions. What can this person/service do? On which resources? For how long?",
    icon: <ShieldCheckIcon size={40} />,
  },
];

export default function FourObjectsSection() {
  return (
    <Section background="grey">
      <SectionHeader title="Four objects in the model" />

      <ul className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
        {objects.map((object) => (
          <li
            key={object.title}
            className="flex flex-col items-center rounded-xl bg-white-solid px-7 pb-10 pt-7 text-center outline-1 -outline-offset-1 outline-grey-91"
          >
            <IconTile className="mb-5 size-20">{object.icon}</IconTile>
            <h3 className="pb-2 font-manrope text-base font-bold text-azure-9">
              {object.title}
            </h3>
            <p className="max-w-[260px] font-manrope text-sm font-normal leading-6 text-azure-47">
              {object.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
