import {
  ApiIcon,
  ClipboardCheckIcon,
  DatabaseIcon,
  DocMinusIcon,
  FolderPersonIcon,
  WebhookIcon,
} from "@/components/home/icons";
import { IconTile, Section, SectionHeader } from "@/components/home/shared";

const integrations = [
  {
    title: "APIs & SDKs",
    description: "Verify organizations, manage delegation, query authority.",
    icon: <ApiIcon size={28} />,
  },
  {
    title: "Webhooks",
    description: "Real-time events on changes and revocations.",
    icon: <WebhookIcon size={28} />,
  },
  {
    title: "Authority Lookup",
    description: "Query who can do what on your resources.",
    icon: <DatabaseIcon size={28} />,
  },
  {
    title: "IdP Integration",
    description: "Extend existing identity provider.",
    icon: <FolderPersonIcon size={28} />,
  },
  {
    title: "Policy Engines",
    description: "Feed data to OPA, Styra for decisions.",
    icon: <DocMinusIcon size={28} />,
  },
  {
    title: "Audit & SIEM",
    description: "Stream events to your audit systems.",
    icon: <ClipboardCheckIcon size={28} />,
  },
];

export default function IntegrationDesignSection() {
  return (
    <Section background="grey">
      <SectionHeader
        title="Integration & overlay-first design"
        widthClass="max-w-[800px]"
      />

      <ul className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {integrations.map((integration) => (
          <li
            key={integration.title}
            className="flex flex-col items-center gap-3 rounded-xl bg-white-solid p-7 text-center outline-1 -outline-offset-1 outline-grey-91"
          >
            <IconTile>{integration.icon}</IconTile>
            <h3 className="pt-2 font-manrope text-lg font-semibold text-azure-9">
              {integration.title}
            </h3>
            <p className="max-w-[200px] font-manrope text-base font-normal leading-[26px] text-azure-47">
              {integration.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
