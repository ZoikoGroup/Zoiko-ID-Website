export interface SitemapItem {
  name: string;
  badge: string;
  isSpecialBadge?: boolean;
  href?: string;
  description?: string;
}

export interface SitemapCategory {
  id: string;
  title: string;
  sectionNumber: number;
  items: SitemapItem[];
}

export const SITEMAP_CATEGORIES: SitemapCategory[] = [
  // Section 1: Platform & Identity
  {
    id: "platform",
    title: "Platform",
    sectionNumber: 1,
    items: [
      {
        name: "Platform overview",
        badge: "Route pending registry",
        href: "/overview",
        description: "Core capabilities, infrastructure foundation, and system capabilities of the Zoiko iD platform.",
      },
      {
        name: "APIs & Integrations",
        badge: "Route pending registry",
        href: "/apis-integrations",
        description: "Programmatic integration interfaces, REST APIs, webhooks, and developer endpoints.",
      },
      {
        name: "Evidence & Audit",
        badge: "Route pending registry",
        href: "/reports",
        description: "Immutable audit logs, cryptographic receipts, and compliance evidence records.",
      },
      {
        name: "Architecture Overview",
        badge: "Route pending registry",
        href: "/architecture-guides",
        description: "System architecture, trust boundary models, and cryptographic infrastructure design.",
      },
    ],
  },
  {
    id: "identity",
    title: "Identity",
    sectionNumber: 1,
    items: [
      {
        name: "Authentication & SSO",
        badge: "Route pending registry",
        href: "/authentication-sso",
        description: "Enterprise single sign-on, multi-factor authentication, and identity provider integration.",
      },
      {
        name: "Identity Verification",
        badge: "Route pending registry",
        href: "/solutions-verified-onboarding",
        description: "Identity verification workflows, KYC/AML processes, and assurance level checks.",
      },
      {
        name: "Credentials",
        badge: "Route pending registry",
        href: "/customer-user-access",
        description: "Verifiable credentials, decentralized identifiers, and cryptographic attestations.",
      },
      {
        name: "Organization Identity",
        badge: "Route pending registry",
        href: "/organization-identity",
        description: "Corporate entity verification, organizational hierarchy, and delegated administrative bounds.",
      },
    ],
  },
  {
    id: "solutions-access",
    title: "Solutions Access",
    sectionNumber: 1,
    items: [
      {
        name: "B2B / SaaS Identity",
        badge: "Route pending registry",
        href: "/b2b-saas",
        description: "Multi-tenant B2B customer authentication, tenant boundary isolation, and domain enforcement.",
      },
      {
        name: "Verified Onboarding",
        badge: "Route pending registry",
        href: "/solutions-verified-onboarding",
        description: "Compliant user onboarding with document validation and real-time fraud mitigation.",
      },
      {
        name: "Customer & User Access",
        badge: "Route pending registry",
        href: "/customer-user-access",
        description: "Fine-grained customer permissions, self-service portals, and privacy consent controls.",
      },
      {
        name: "Workforce & Enterprise Access",
        badge: "Route pending registry",
        href: "/workforce-enterprise",
        description: "Enterprise employee provisioning, zero trust network access, and directory synchronization.",
      },
    ],
  },
  {
    id: "solutions-delegation",
    title: "Solutions Delegation",
    sectionNumber: 1,
    items: [
      {
        name: "AI Agent Security",
        badge: "Route pending registry",
        href: "/ai-agent-security",
        description: "Cryptographic delegation boundaries and intent verification for autonomous AI agents.",
      },
      {
        name: "Regulated Services",
        badge: "Route pending registry",
        href: "/solutions-regulated-services",
        description: "Compliance architectures for healthcare, financial services, and critical infrastructure.",
      },
      {
        name: "AI Solutions",
        badge: "Route pending registry",
        href: "/solutions-ai-solutions",
        description: "Intelligent agent orchestration, verifiable decision-making, and audit trail generation.",
      },
      {
        name: "Delegated Third-Party Access",
        badge: "Route pending registry",
        href: "/third-party-access",
        description: "Time-limited, purpose-bounded access permissions for external vendors and partners.",
      },
    ],
  },

  // Section 2: Developers & Integrate
  {
    id: "developers",
    title: "Developers",
    sectionNumber: 2,
    items: [
      {
        name: "Developer overview",
        badge: "Route pending registry",
        href: "/overview",
        description: "Documentation, toolkits, and quick-start tutorials for backend and frontend engineers.",
      },
      {
        name: "Quickstarts",
        badge: "Route pending registry",
        href: "/quickstarts",
        description: "Step-by-step guides to integrate Zoiko iD in under five minutes.",
      },
      {
        name: "API Reference",
        badge: "Route pending registry",
        href: "/api-reference",
        description: "Complete REST and GraphQL API specifications, request structures, and schemas.",
      },
      {
        name: "SDKs",
        badge: "Route pending registry",
        href: "/overview",
        description: "Official client libraries for TypeScript, Python, Go, Java, and C#.",
      },
    ],
  },
  {
    id: "integrate-operate",
    title: "Integrate & Operate",
    sectionNumber: 2,
    items: [
      {
        name: "Webhooks & Events",
        badge: "Route pending registry",
        href: "/webhooks-events",
        description: "Real-time event subscriptions, signature verification, and delivery guarantees.",
      },
      {
        name: "Integrations",
        badge: "Route pending registry",
        href: "/apis-integrations",
        description: "Pre-built connectors for identity providers, SIEM systems, and cloud environments.",
      },
      {
        name: "Changelog",
        badge: "Route pending registry",
        href: "/changelog",
        description: "Release notes, platform updates, protocol enhancements, and deprecation schedules.",
      },
      {
        name: "Sandbox",
        badge: "Route pending registry",
        href: "/sandbox",
        description: "Isolated testing environment for simulated identity transactions and failure cases.",
      },
    ],
  },
  {
    id: "trust-assurance",
    title: "Trust & Assurance",
    sectionNumber: 2,
    items: [
      {
        name: "Security",
        badge: "Route pending registry",
        href: "/security",
        description: "End-to-end cryptographic safeguards, key management practices, and perimeter defense.",
      },
      {
        name: "Privacy",
        badge: "Route pending registry",
        href: "/trust-assurance-privacy",
        description: "Zero-knowledge proofs, data minimization principles, and privacy by design architecture.",
      },
      {
        name: "Trust Center",
        badge: "Route pending registry",
        href: "/trust-center",
        description: "Centralized compliance repository, certification summaries, and third-party reports.",
      },
      {
        name: "Compliance & Standards",
        badge: "Route pending registry",
        href: "/assurance-compliance-standards",
        description: "Certifications across SOC 2 Type II, ISO 27001, GDPR, and FedRAMP readiness.",
      },
    ],
  },
  {
    id: "security-operations",
    title: "Security Operations",
    sectionNumber: 2,
    items: [
      {
        name: "Availability / Status",
        badge: "Route pending registry",
        href: "/availability-status",
        description: "Live system uptime status, component metrics, and scheduled maintenance windows.",
      },
      {
        name: "Security Advisories",
        badge: "Route pending registry",
        href: "/security-advisories",
        description: "Official vulnerability advisories, severity ratings, and mitigation instructions.",
      },
      {
        name: "Responsible Disclosure",
        badge: "Route pending registry",
        href: "/security-contact",
        description: "Vulnerability reporting guidelines, PGP keys, and safe harbor policy.",
      },
      {
        name: "Security contact",
        badge: "Route pending registry",
        href: "/security-contact",
        description: "Direct escalations for incident response teams and security researchers.",
      },
    ],
  },

  // Section 3: Resources & Company
  {
    id: "resources-learn",
    title: "Resources Learn",
    sectionNumber: 3,
    items: [
      {
        name: "Identity Guides",
        badge: "Route pending registry",
        href: "/identity-guides",
        description: "In-depth conceptual primers on modern digital identity and verifiable credentials.",
      },
      {
        name: "Architecture Guides",
        badge: "Route pending registry",
        href: "/architecture-guides",
        description: "Blueprints for enterprise deployment, high availability, and multi-region replication.",
      },
      {
        name: "Delegated Authority Explainers",
        badge: "Route pending registry",
        href: "/authority-explainers",
        description: "Explanations of bounded authority delegations across people, organizations, and AI agents.",
      },
      {
        name: "Machine & Agent Identity Guides",
        badge: "Route pending registry",
        href: "/identity-guides",
        description: "Workload identity, non-human actor authorization, and cryptographic attestation.",
      },
    ],
  },
  {
    id: "resources-reference",
    title: "Resources Reference",
    sectionNumber: 3,
    items: [
      {
        name: "Research",
        badge: "Route pending registry",
        href: "/reports",
        description: "Published academic papers, benchmark studies, and security audit findings.",
      },
      {
        name: "FAQ",
        badge: "Route pending registry",
        href: "/about-us",
        description: "Answers to common operational, architectural, and business questions.",
      },
      {
        name: "Glossary",
        badge: "Route pending registry",
        href: "/authority-explainers",
        description: "Authoritative terminology definitions for identity, credentials, and delegation.",
      },
      {
        name: "Updates",
        badge: "Route pending registry",
        href: "/changelog",
        description: "Continuous newsfeed on security features, product releases, and platform health.",
      },
    ],
  },
  {
    id: "pricing-enterprise",
    title: "Pricing & Enterprise",
    sectionNumber: 3,
    items: [
      {
        name: "Pricing overview",
        badge: "Route pending registry",
        href: "#",
        description: "Transparent platform pricing tiers, usage tiers, and verification volume rates.",
      },
      {
        name: "Enterprise",
        badge: "Route pending registry",
        href: "/workforce-enterprise",
        description: "Custom enterprise contracts, tailored SLAs, dedicated support, and private deployments.",
      },
      {
        name: "Platform & Usage Model",
        badge: "Route pending registry",
        href: "#",
        description: "Predictable compute and transaction cost models for scaling organizations.",
      },
      {
        name: "Talk to Sales",
        badge: "Route pending registry",
        href: "#",
        description: "Connect with our solution architects to plan custom implementation strategies.",
      },
    ],
  },
  {
    id: "company",
    title: "Company",
    sectionNumber: 3,
    items: [
      {
        name: "About Zoiko iD",
        badge: "Route pending registry",
        href: "/about-us",
        description: "Our corporate mission, executive leadership, and vision for trusted digital identity.",
      },
      {
        name: "Zoiko Tech Inc.",
        badge: "Route pending registry",
        href: "/about-us",
        description: "Parent company information, investor relations, and corporate governance.",
      },
      {
        name: "Careers",
        badge: "Route pending registry",
        href: "#",
        description: "Open engineering, security research, product, and developer relations positions.",
      },
      {
        name: "Contact",
        badge: "Route pending registry",
        href: "/security-contact",
        description: "General enquiries, office addresses, customer support, and sales inquiries.",
      },
    ],
  },

  // Section 4: Support & Legal
  {
    id: "support-accessibility",
    title: "Support & Accessibility",
    sectionNumber: 4,
    items: [
      {
        name: "Help & Support",
        badge: "Route pending registry",
        href: "#",
        description: "Customer support portal, ticketing system, troubleshooting guides, and documentation.",
      },
      {
        name: "Documentation",
        badge: "Route pending registry",
        href: "/overview",
        description: "Comprehensive technical manuals, integration references, and tutorial guides.",
      },
      {
        name: "Accessibility",
        badge: "Route pending registry",
        href: "#",
        description: "WCAG 2.1 AA compliance statement, screen reader support, and keyboard navigation.",
      },
      {
        name: "Sitemap",
        badge: "Route pending registry",
        href: "/support-accessibility-sitemap",
        description: "Comprehensive directory of all Zoiko iD public pages, resources, and endpoints.",
      },
    ],
  },
  {
    id: "legal-privacy",
    title: "Legal & Privacy",
    sectionNumber: 4,
    items: [
      {
        name: "Terms of Use",
        badge: "Route pending registry",
        href: "#",
        description: "Standard terms and conditions governing the use of Zoiko iD web services.",
      },
      {
        name: "Privacy Notice",
        badge: "Route pending registry",
        href: "#",
        description: "Detailed breakdown of data collection, processing boundaries, and user rights.",
      },
      {
        name: "Cookie Notice",
        badge: "Route pending registry",
        href: "#",
        description: "Information regarding functional, performance, and operational cookies in use.",
      },
      {
        name: "Cookie Settings",
        badge: "Action only · opens preference management when the provider is live",
        isSpecialBadge: true,
        href: "#",
        description: "Configure cookie consent preferences and tracking permissions.",
      },
    ],
  },
  {
    id: "locations-connect",
    title: "Locations & Connect",
    sectionNumber: 4,
    items: [
      {
        name: "Headquarters",
        badge: "Route pending registry",
        href: "#",
        description: "United States primary office: 1401 21st Street, Suite R Sacramento, CA 95811.",
      },
      {
        name: "Media / Press",
        badge: "Route pending registry",
        href: "#",
        description: "Press kit, brand assets, media inquiries, and official spokesperson contacts.",
      },
      {
        name: "European Headquarters",
        badge: "Route pending registry",
        href: "#",
        description: "UK office: 167–169 Great Portland Street, 5th Floor, London W1W 5PF, United Kingdom.",
      },
      {
        name: "Procurement / Enterprise",
        badge: "Route pending registry",
        href: "#",
        description: "Enterprise vendor onboarding, master service agreements, and procurement channels.",
      },
    ],
  },
  {
    id: "authority-trust",
    title: "Authority & Trust",
    sectionNumber: 4,
    items: [
      {
        name: "Authorization & Delegated Authority",
        badge: "Route pending registry",
        href: "/authority-explainers",
        description: "Bounded permissions architecture for actors operating on behalf of principal entities.",
      },
      {
        name: "Machine & Agent Identity",
        badge: "Route pending registry",
        href: "/identity-guides",
        description: "Zero-trust identity verification for automated software agents and non-human clients.",
      },
      {
        name: "Continuous Trust & Revocation",
        badge: "Route pending registry",
        href: "/authority-explainers",
        description: "Dynamic revocation lists, risk-adaptive authentication, and trust decay models.",
      },
      {
        name: "Responsible AI & Agent Governance",
        badge: "Route pending registry",
        href: "/ai-agent-security",
        description: "Policy enforcement and safety bounds for autonomous AI agents taking delegated actions.",
      },
    ],
  },
];
