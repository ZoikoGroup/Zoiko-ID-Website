import {
  BrowserFingerprintIcon,
  CodeWindowIcon,
  LinkIcon,
  SyncIcon,
  TicketIcon,
} from "./icons";
import { IconTile, Section, SectionHeader } from "./shared";

const standards = [
  { label: "OAuth 2.0", icon: <BrowserFingerprintIcon size={28} /> },
  { label: "OpenID Connect", icon: <LinkIcon size={28} /> },
  { label: "SAML 2.0", icon: <TicketIcon size={28} /> },
  { label: "WebAuthn/FIDO2", icon: <CodeWindowIcon size={28} /> },
  { label: "SCIM", icon: <SyncIcon size={28} /> },
];

export default function IntegrationsSection() {
  return (
    <Section background="grey">
      <SectionHeader
        title="Integrations & standards"
        subtitle="Works seamlessly with your existing infrastructure"
      />

      <ul className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
        {standards.map((standard) => (
          <li
            key={standard.label}
            className="flex flex-col items-center gap-5 rounded-xl bg-white-solid px-4 py-8 outline-1 -outline-offset-1 outline-grey-91"
          >
            <IconTile className="size-16">{standard.icon}</IconTile>
            <p className="text-center font-manrope text-base font-semibold leading-6 text-azure-9">
              {standard.label}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
