import Image from "next/image";
import Link from "next/link";

type FooterColumn = {
  title: string;
  links: string[];
};

const footerColumns: FooterColumn[] = [
  {
    title: "Platform",
    links: [
      "Platform overview",
      "APIs & Integrations",
      "Evidence & Audit",
      "Architecture Overview",
    ],
  },
  {
    title: "Identity",
    links: [
      "Authentication & SSO",
      "Identity Verification",
      "Credentials",
      "Organization Identity",
    ],
  },
  {
    title: "Solutions Access",
    links: [
      "B2B / SaaS Identity",
      "Verified Onboarding",
      "Customer & User Access",
      "Workforce & Enterprise Access",
    ],
  },
  {
    title: "Solutions Delegation",
    links: [
      "AI Agent Security",
      "Regulated Services",
      "All Solutions",
      "Delegated Third-Party Access",
    ],
  },
  {
    title: "Developers",
    links: ["Developer overview", "Quickstarts", "API Reference", "SDKs"],
  },
  {
    title: "Integrate & Operate",
    links: ["Webhooks & Events", "Integrations", "Changelog", "Sandbox"],
  },
  {
    title: "Trust & Assurance",
    links: ["Security", "Privacy", "Trust Center", "Compliance & Standards"],
  },
  {
    title: "Security Operations",
    links: [
      "Availability / Status",
      "Security Advisories",
      "Responsible Disclosure",
      "Security contact",
    ],
  },
  {
    title: "Resources Learn",
    links: [
      "Identity Guides",
      "Architecture Guides",
      "Delegated Authority Explainers",
      "Machine & Agent Identity Guides",
    ],
  },
  {
    title: "Resources Reference",
    links: ["Research", "FAQ", "Glossary", "Updates"],
  },
  {
    title: "Pricing & Enterprise",
    links: [
      "Pricing overview",
      "Enterprise",
      "Platform & Usage Model",
      "Talk to Sales",
    ],
  },
  {
    title: "Company",
    links: ["About Zoiko iD", "Zoiko Tech Inc.", "Careers", "Contact"],
  },
  {
    title: "Support & Accessibility",
    links: ["Help & Support", "Documentation", "Accessibility", "Sitemap"],
  },
  {
    title: "Legal & Privacy",
    links: ["Terms of Use", "Privacy Notice", "Cookie Notice", "Cookie Settings"],
  },
  {
    title: "Locations & Connect",
    links: [
      "Headquarters",
      "Media / Press",
      "European Headquarters",
      "Procurement / Enterprise",
    ],
  },
  {
    title: "Authority & Trust",
    links: [
      "Authorization & Delegated Authority",
      "Machine & Agent Identity",
      "Continuous Trust & Revocation",
      "Responsible AI & Agent Governance",
    ],
  },
];

// Footer links that already have a page; the rest point to "#" for now
const footerRoutes: Record<string, string> = {
  "About Zoiko iD": "/about-us",
};

const offices = [
  {
    title: "Headquarters (United States)",
    lines: ["1401 21st Street, Suite R Sacramento,", "CA 95811, USA"],
  },
  {
    title: "European Headquarters",
    lines: [
      "167–169 Great Portland Street, 5th Floor,",
      "London W1W 5PF, United Kingdom",
    ],
  },
];

const legalLinks = [
  "Terms of Use",
  "Privacy Notice",
  "Cookie Notice",
  "Cookie Settings",
  "Accessibility",
  "Security",
  "Responsible Disclosure",
  "Sitemap",
];

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 0C0.67 0 0 0.67 0 1.5V14.5C0 15.33 0.67 16 1.5 16H14.5C15.33 16 16 15.33 16 14.5V1.5C16 0.67 15.33 0 14.5 0H1.5ZM4.85 6.1H2.6V13.4H4.85V6.1ZM3.73 2.6C3.01 2.6 2.43 3.18 2.43 3.9C2.43 4.62 3.01 5.2 3.73 5.2C4.45 5.2 5.03 4.62 5.03 3.9C5.03 3.18 4.45 2.6 3.73 2.6ZM8.47 6.1H6.32V13.4H8.56V9.79C8.56 8.84 8.74 7.92 9.92 7.92C11.08 7.92 11.1 9.01 11.1 9.85V13.4H13.35V9.4C13.35 7.43 12.92 5.92 10.63 5.92C9.53 5.92 8.79 6.52 8.49 7.09H8.47V6.1Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0.2C3.58 0.2 0 3.78 0 8.2C0 11.74 2.29 14.73 5.47 15.79C5.87 15.86 6.02 15.62 6.02 15.41C6.02 15.22 6.01 14.59 6.01 13.92C4 14.29 3.48 13.43 3.32 12.98C3.23 12.75 2.84 12.04 2.5 11.85C2.22 11.7 1.82 11.33 2.49 11.32C3.12 11.31 3.57 11.9 3.72 12.14C4.44 13.35 5.59 13.01 6.05 12.8C6.12 12.28 6.33 11.93 6.56 11.73C4.78 11.53 2.92 10.84 2.92 7.78C2.92 6.91 3.23 6.19 3.74 5.63C3.66 5.43 3.38 4.61 3.82 3.51C3.82 3.51 4.49 3.3 6.02 4.33C6.66 4.15 7.34 4.06 8.02 4.06C8.7 4.06 9.38 4.15 10.02 4.33C11.55 3.29 12.22 3.51 12.22 3.51C12.66 4.61 12.38 5.43 12.3 5.63C12.81 6.19 13.12 6.9 13.12 7.78C13.12 10.85 11.25 11.53 9.47 11.73C9.76 11.98 10.01 12.46 10.01 13.21C10.01 14.28 10 15.14 10 15.41C10 15.62 10.15 15.87 10.55 15.79C13.71 14.73 16 11.73 16 8.2C16 3.78 12.42 0.2 8 0.2Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.67 4.2C15.48 3.5 14.94 2.96 14.25 2.77C13 2.43 8 2.43 8 2.43C8 2.43 3 2.43 1.75 2.77C1.06 2.96 0.52 3.5 0.33 4.2C0 5.46 0 8.07 0 8.07C0 8.07 0 10.69 0.33 11.94C0.52 12.64 1.06 13.18 1.75 13.37C3 13.71 8 13.71 8 13.71C8 13.71 13 13.71 14.25 13.37C14.94 13.18 15.48 12.64 15.67 11.94C16 10.69 16 8.07 16 8.07C16 8.07 16 5.46 15.67 4.2ZM6.36 10.45V5.7L10.55 8.07L6.36 10.45Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M12.6 0.75H15.05L9.69 6.88L16 15.25H11.06L7.19 10.18L2.76 15.25H0.3L6.04 8.69L0 0.75H5.06L8.56 5.38L12.6 0.75ZM11.74 13.77H13.1L4.32 2.15H2.86L11.74 13.77Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

const socialLinks = [
  { label: "LinkedIn", href: "#", icon: <LinkedInIcon /> },
  { label: "GitHub", href: "#", icon: <GitHubIcon /> },
  { label: "YouTube", href: "#", icon: <YouTubeIcon /> },
  { label: "X", href: "#", icon: <XIcon /> },
];

export default function Footer() {
  return (
    <footer className="w-full bg-azure-9 font-manrope text-white-solid">
      {/* =========================================================
          TOP FOOTER
      ========================================================= */}
      <section className="border-b border-white-solid/20">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-6 py-10 sm:px-10 lg:flex-row lg:items-start lg:justify-between lg:px-16 xl:px-28">
          <div className="flex max-w-[639px] flex-col items-start gap-2">
            <Link href="/" aria-label="Zoiko ID home">
              <Image
                src="/zoiko-id-logo-footer.webp"
                alt="Zoiko ID"
                width={240}
                height={56}
                className="h-14 w-60 object-contain"
              />
            </Link>

            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-49">
              Trusted Identity, Credentials &amp; Delegated Authority
              Infrastructure
            </p>

            <p className="max-w-[619px] pt-2 text-base font-normal leading-6 text-white-solid/96">
              Programmable identity infrastructure for people, organizations,
              services, machines and AI agents—designed to establish identity,
              govern bounded authority, respond to changing trust signals and
              preserve auditable evidence.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-4 lg:pt-6">
            <p className="pr-2 text-sm font-normal uppercase tracking-wide text-white-solid/96">
              Follow
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-11 min-w-11 items-center justify-center rounded-md bg-cyan-49/10 outline-1 -outline-offset-1 outline-cyan-49/20 transition-colors duration-200 hover:bg-cyan-49/20"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER NAVIGATION
      ========================================================= */}
      <section className="border-b border-white-solid/20">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-2 gap-x-6 gap-y-12 px-6 py-12 sm:px-10 md:grid-cols-4 lg:gap-y-16 lg:px-16 xl:grid-cols-6 xl:gap-y-20 xl:px-28">
          {footerColumns.map((column) => (
            <div key={column.title} className="flex min-w-0 flex-col gap-5">
              <h3 className="font-dm-serif text-sm font-normal capitalize tracking-tight text-white-solid">
                {column.title}
              </h3>

              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link} className="pb-0.5 pt-[1.5px]">
                    <Link
                      href={footerRoutes[link] ?? "#"}
                      className="text-sm font-normal leading-5 text-white-solid/96 transition-colors duration-200 hover:text-cyan-49"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          OFFICES
      ========================================================= */}
      <section className="border-b border-white-solid/20">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-6 py-10 sm:px-10 md:flex-row lg:px-16 xl:px-28">
          {offices.map((office) => (
            <address
              key={office.title}
              className="flex flex-1 flex-col gap-2 pl-4 not-italic md:pb-6"
            >
              <p className="text-sm font-bold uppercase tracking-wider text-cyan-49">
                {office.title}
              </p>
              <p className="text-sm font-normal leading-6 text-white-solid/96">
                {office.lines.map((line, index) => (
                  <span key={line}>
                    {line}
                    {index < office.lines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </address>
          ))}
        </div>
      </section>

      {/* =========================================================
          BOTTOM FOOTER
      ========================================================= */}
      <section>
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-6 py-6 sm:px-10 lg:px-16 xl:px-28">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-sm font-normal leading-5 text-white-solid/96">
            <p>Zoiko iD is a Zoiko Tech Inc. platform.</p>
            <p>© 2026 Zoiko Tech Inc. All rights reserved.</p>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm lg:gap-3 font-normal leading-5 text-white-solid/96">
            {legalLinks.map((link, index) => (
              <li key={link} className="flex items-center gap-3">
                {index > 0 && (
                  // Separators only when the links fit on one line
                  <span aria-hidden="true" className="hidden w-4 text-center lg:inline-block">
                    •
                  </span>
                )}
                <Link
                  href="#"
                  className="transition-colors duration-200 hover:text-cyan-49"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </footer>
  );
}
