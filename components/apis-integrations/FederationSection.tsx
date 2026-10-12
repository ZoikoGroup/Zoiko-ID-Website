import {
  ApiIcon,
  CertificateIcon,
  CloudIcon,
  LockOpenIcon,
  PersonIcon,
  PlayIcon,
  ShieldLockIcon,
  SyncIcon,
} from "@/components/home/icons";
import {
  IconRowCardGrid,
  Section,
  SectionHeader,
  type IconRowItem,
} from "@/components/home/shared";

const sources: IconRowItem[] = [
  {
    title: "OAuth 2.0",
    description:
      "Authorization protocol. Delegate authentication to provider. Common with social IdPs and APIs.",
    icon: <LockOpenIcon size={28} />,
  },
  {
    title: "OpenID Connect",
    description:
      "Identity layer on OAuth 2.0. Returns verified identity claims in authenticated token.",
    icon: <ShieldLockIcon size={28} />,
  },
  {
    title: "SAML 2.0",
    description:
      "Enterprise federation standard. XML assertions. IdP-initiated or SP-initiated flows supported.",
    icon: <CertificateIcon size={28} />,
  },
  {
    title: "SCIM Provisioning",
    description:
      "Synchronize user lifecycle. Automate account creation, updates, and deprovisioning.",
    icon: <SyncIcon size={28} />,
  },
  {
    title: "Cloud Identity Platforms",
    description:
      "Okta, Azure AD, Ping Identity, Auth0, and custom identity providers. Pre-built connectors.",
    icon: <CloudIcon size={28} />,
  },
  {
    title: "Directory Services",
    description:
      "Active Directory, LDAP, custom directories. Full lifecycle sync and attribute mapping.",
    icon: <PersonIcon size={28} />,
  },
  {
    title: "Custom APIs",
    description:
      "Build custom connectors to proprietary systems using REST APIs and webhooks.",
    icon: <ApiIcon size={28} />,
  },
  {
    title: "Real-Time Events",
    description:
      "Subscribe to user/group changes. React immediately to identity updates and revocations.",
    icon: <PlayIcon size={28} />,
  },
];

export default function FederationSection() {
  return (
    <Section background="slate">
      <SectionHeader
        title="Federation & identity sources"
        widthClass="max-w-[760px]"
      />
      <div className="w-full max-w-[1040px]">
        <IconRowCardGrid items={sources} />
      </div>
    </Section>
  );
}
