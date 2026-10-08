"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

type MenuLink = {
  label: string;
  href: string;
};

type MegaMenu = {
  title: string;
  icon: ReactNode;
  // Horizontal offset of the panel from its trigger, per the design
  panelOffsetClass: string;
  columns: {
    heading?: string;
    links: MenuLink[];
  }[];
  feature: {
    title?: string;
    description?: string;
    cta: MenuLink;
    image?: {
      src: string;
      alt: string;
    };
  };
};

type NavigationItem = {
  label: string;
  href: string;
  menu?: MegaMenu;
};

const platformMenu: MegaMenu = {
  title: "Platform",
  icon: <GlobeIcon />,
  panelOffsetClass: "-left-9",
  columns: [
    {
      heading: "Core Identity",
      links: [
        { label: "Platform overview", href: "#" },
        { label: "Authentication & SSO", href: "#" },
        { label: "Identity Verification", href: "#" },
        { label: "Credentials", href: "#" },
        { label: "Organization Identity", href: "#" },
      ],
    },
    {
      heading: "Authority & Trust",
      links: [
        { label: "Authorization & Delegation", href: "#" },
        { label: "Machine & Agent Identity", href: "#" },
        { label: "Continuous Trust & Revocation", href: "#" },
      ],
    },
    {
      heading: "Build & Connect",
      links: [
        { label: "APIs & Integrations", href: "#" },
        { label: "Standards & Interoperability", href: "#" },
        { label: "Architecture Overview", href: "#" },
        { label: "Evidence & Audit", href: "#" },
      ],
    },
  ],
  feature: {
    title: "Identity + Authority + Evidence",
    description:
      "One programmable trust layer for identity, bounded authority, continuous decisions, and immutable evidence.",
    cta: { label: "View platform architecture →", href: "#" },
    image: {
      src: "/dropdowns/platform-architecture.webp",
      alt: "Platform dashboard on a desktop monitor",
    },
  },
};

const solutionMenu: MegaMenu = {
  title: "Solution",
  icon: <LightbulbIcon />,
  panelOffsetClass: "-left-[29px]",
  columns: [
    {
      heading: "Customer & Workforce",
      links: [
        { label: "Customer & User Access", href: "#" },
        { label: "Workforce & Enterprise Access", href: "#" },
      ],
    },
    {
      heading: "Business & Delegation",
      links: [
        { label: "B2B / SaaS Identity", href: "#" },
        { label: "Verified Onboarding", href: "#" },
        { label: "Delegated Third-Party Access", href: "#" },
      ],
    },
    {
      heading: "Emerging Trust",
      links: [
        { label: "AI Agent Security", href: "#" },
        { label: "Regulated Services", href: "#" },
      ],
    },
  ],
  feature: {
    title: "Find the right identity pattern",
    description:
      "Explore use cases for customer, workforce, B2B, verification, delegation and AI-agent identity",
    cta: { label: "Explore all solutions →", href: "#" },
    image: {
      src: "/dropdowns/solution-identity-patterns.webp",
      alt: "Team discussing identity solutions around a laptop",
    },
  },
};

const developersMenu: MegaMenu = {
  title: "Development",
  icon: <DeveloperIcon />,
  panelOffsetClass: "-left-[17px]",
  columns: [
    {
      heading: "Start Building",
      links: [
        { label: "Developer overview", href: "#" },
        { label: "Quickstarts", href: "#" },
        { label: "API Reference", href: "#" },
        { label: "SDKs", href: "#" },
      ],
    },
    {
      heading: "Integrate & Operate",
      links: [
        { label: "Webhooks & Events", href: "#" },
        { label: "Integrations", href: "#" },
        { label: "Sandbox", href: "#" },
        { label: "Changelog", href: "#" },
      ],
    },
    {
      heading: "Technical Guides",
      links: [
        { label: "Authentication guide", href: "#" },
        { label: "Delegated authority guide", href: "#" },
        { label: "Machine & agent identity", href: "#" },
        { label: "Architecture patterns", href: "#" },
      ],
    },
  ],
  feature: {
    title: "Start building with Zoiko iD",
    description:
      "Quick-start flows, API reference, SDKs for Python, Node.js, Go, Java and more.",
    cta: { label: "Read the Quick Start →", href: "#" },
    image: {
      src: "/dropdowns/developers-quick-start.webp",
      alt: "Developers working together at laptops",
    },
  },
};

const trustMenu: MegaMenu = {
  title: "Trust",
  icon: <ShieldIcon />,
  panelOffsetClass: "-left-[162px]",
  columns: [
    {
      heading: "Assurance",
      links: [
        { label: "Security", href: "#" },
        { label: "Privacy", href: "#" },
        { label: "Compliance & Standards", href: "#" },
      ],
    },
    {
      heading: "Operations",
      links: [
        { label: "Trust Center", href: "#" },
        { label: "Availability / Status", href: "#" },
        { label: "Security Advisories", href: "#" },
      ],
    },
    {
      heading: "Governance",
      links: [{ label: "Responsible AI & Agents", href: "#" }],
    },
  ],
  feature: {
    title: "Trust Center",
    description:
      "Security posture, verified attestations, independent certifications, and governance documentation.",
    cta: { label: "Explore Trust Center →", href: "#" },
    image: {
      src: "/dropdowns/trust-center.webp",
      alt: "Business partners joining hands",
    },
  },
};

const resourcesMenu: MegaMenu = {
  title: "Resources",
  icon: <ResourcesIcon />,
  panelOffsetClass: "-left-[263px]",
  columns: [
    {
      heading: "Learn",
      links: [
        { label: "Identity Guides", href: "#" },
        { label: "Delegated Authority Explainers", href: "#" },
        { label: "Machine & Agent Guides", href: "#" },
      ],
    },
    {
      heading: "Deep Dive",
      links: [
        { label: "Architecture Guides", href: "#" },
        { label: "Research", href: "#" },
        { label: "Updates", href: "#" },
      ],
    },
    {
      heading: "Reference",
      links: [
        { label: "FAQ", href: "#" },
        { label: "Glossary", href: "#" },
      ],
    },
  ],
  feature: {
    title: "What is delegated authority?",
    description:
      "Learn how to establish who can act for whom, under what limits, and for how long.",
    cta: { label: "Read the explainer →", href: "#" },
    image: {
      src: "/dropdowns/resources-delegated-authority.webp",
      alt: "Student reading a book in a library",
    },
  },
};

const pricingMenu: MegaMenu = {
  title: "Pricing",
  icon: <PricingIcon />,
  panelOffsetClass: "-left-[403px]",
  columns: [
    {
      links: [
        { label: "Pricing overview", href: "#" },
        { label: "Enterprise", href: "#" },
        { label: "Platform & usage model", href: "#" },
      ],
    },
  ],
  feature: {
    cta: { label: "Talk to Sales →", href: "#" },
  },
};

const navigationItems: NavigationItem[] = [
  { label: "Platform", href: "#", menu: platformMenu },
  { label: "Solution", href: "#", menu: solutionMenu },
  { label: "Developers", href: "#", menu: developersMenu },
  { label: "Trust", href: "#", menu: trustMenu },
  { label: "Resources", href: "#", menu: resourcesMenu },
  { label: "Pricing", href: "#", menu: pricingMenu },
];

const navTextClass =
  "font-manrope text-base font-medium leading-6 text-azure-8";

const primaryButtonClass =
  "flex min-h-11 items-center justify-center rounded-lg bg-linear-73 from-azure-53 to-azure-48 px-6 py-3 text-center font-manrope text-base font-semibold leading-5 text-white-solid shadow-[0px_8px_20px_0px_rgba(37,99,235,0.30)] transition-opacity duration-200 hover:opacity-90";

function ChevronDown({ open = false }: { open?: boolean }) {
  return (
    <svg
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        d="M1 1L6 6L11 1"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="8.25" stroke="#000000" strokeWidth="1.5" />
      <path
        d="M1.75 10H18.25M10 1.75C12.1 4 13.25 6.9 13.25 10C13.25 13.1 12.1 16 10 18.25C7.9 16 6.75 13.1 6.75 10C6.75 6.9 7.9 4 10 1.75Z"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LightbulbIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7.5 15.25H12.5M8.25 18.25H11.75M10 1.75C6.96 1.75 4.75 4.06 4.75 6.94C4.75 8.86 5.75 10.27 6.86 11.37C7.35 11.86 7.5 12.4 7.5 13.06V15.25H12.5V13.06C12.5 12.4 12.65 11.86 13.14 11.37C14.25 10.27 15.25 8.86 15.25 6.94C15.25 4.06 13.04 1.75 10 1.75Z"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DeveloperIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="1.75"
        y="2.75"
        width="16.5"
        height="14.5"
        rx="2"
        stroke="#000000"
        strokeWidth="1.5"
      />
      <path
        d="M8.25 6.5L6.25 8.5L8.25 10.5M11.75 6.5L13.75 8.5L11.75 10.5M5 13.75H15"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 1.75L3.75 4.25V9.25C3.75 13.1 6.4 16.6 10 18.25C13.6 16.6 16.25 13.1 16.25 9.25V4.25L10 1.75Z"
        stroke="#000000"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ResourcesIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="7" height="7" rx="1" stroke="#000000" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1" stroke="#000000" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1" stroke="#000000" />
      <path
        d="M17 13.5V20.5M13.5 17H20.5"
        stroke="#000000"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PricingIcon() {
  return (
    <svg
      width="28"
      height="20"
      viewBox="0 0 28 20"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="0.5"
        y="0.5"
        width="27"
        height="19"
        rx="3"
        stroke="#000000"
      />
      <path
        d="M6 7.5V12.5M11 7H19M11 10H19M11 13H19"
        stroke="#000000"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 7H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 12H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 17H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 6L18 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Logo() {
  return (
    <Image
      src="/zoiko-id-logo.webp"
      alt="Zoiko ID"
      width={137}
      height={32}
      preload
      className="h-8 w-[137px] object-contain"
    />
  );
}

function MegaMenuPanel({
  id,
  menu,
  onNavigate,
}: {
  id: string;
  menu: MegaMenu;
  onNavigate: () => void;
}) {
  return (
    <div
      id={id}
      className="flex flex-col gap-6 rounded-2xl bg-white px-12 py-8 shadow-[0px_20px_48px_0px_rgba(0,0,0,0.15)] outline-1 -outline-offset-1 outline-neutral-700/10"
    >
      <div className="flex flex-col gap-8">
        {/* Panel Title */}
        <div className="flex w-[728px] items-center gap-2.5 border-b border-slate-900/20 p-2.5">
          <div className="flex items-center justify-center overflow-hidden rounded-sm bg-cyan-500/10 p-2">
            {menu.icon}
          </div>
          <p className="font-dm-serif text-xl font-normal leading-6 text-azure-9">
            {menu.title}
          </p>
        </div>

        {/* Link Columns */}
        <div className="flex items-start gap-1">
          {menu.columns.map((column, index) => (
            <div
              key={column.heading ?? index}
              className="flex w-60 flex-col items-center gap-3"
            >
              {column.heading && (
                <p className="w-48 font-dm-serif text-base font-normal leading-6 text-azure-8">
                  {column.heading}
                </p>
              )}

              <ul className="flex flex-col items-center gap-3">
                {column.links.map((link) => (
                  <li key={link.label} className="w-48">
                    <Link
                      href={link.href}
                      onClick={onNavigate}
                      className="font-manrope text-sm font-medium leading-6 text-azure-35 transition-colors duration-200 hover:text-cyan-49"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Card */}
      <div className="flex min-h-20 w-[728px] items-center justify-between rounded-xl bg-cyan-49/5 p-6">
        <div className="flex flex-col items-start gap-2.5">
          {(menu.feature.title || menu.feature.description) && (
            <div className="flex w-[469px] flex-col items-start gap-1">
              {menu.feature.title && (
                <p className="font-dm-serif text-base font-normal leading-6 text-azure-8">
                  {menu.feature.title}
                </p>
              )}
              {menu.feature.description && (
                <p className="font-manrope text-sm font-medium leading-6 text-azure-35">
                  {menu.feature.description}
                </p>
              )}
            </div>
          )}

          <Link
            href={menu.feature.cta.href}
            onClick={onNavigate}
            className="font-manrope text-base font-medium leading-6 text-cyan-49 underline transition-opacity duration-200 hover:opacity-80"
          >
            {menu.feature.cta.label}
          </Link>
        </div>

        {menu.feature.image && (
          <Image
            src={menu.feature.image.src}
            alt={menu.feature.image.alt}
            width={171}
            height={123}
            className="h-[123px] w-[171px] rounded-3xl object-cover"
          />
        )}
      </div>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openOnHover = (label: string) => {
    cancelClose();
    setOpenMenu(label);
  };

  const closeOnLeave = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };

  // Close the desktop dropdown on Escape or a click outside the nav
  useEffect(() => {
    if (!openMenu) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null);
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [openMenu]);

  useEffect(() => cancelClose, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-[30px] lg:pt-9">
      <div className="relative mx-auto w-full max-w-[1381px] rounded-[32px] border-b border-cyan-49/10 bg-white-solid backdrop-blur-[5px]">
        {/* ================= DESKTOP HEADER ================= */}
        <div className="hidden h-20 items-center justify-between px-8 py-4 xl:flex 2xl:px-16">
          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label="Zoiko ID home"
          >
            <Logo />
          </Link>

          {/* Navigation */}
          <nav
            ref={navRef}
            aria-label="Main"
            className="flex items-center gap-7 2xl:gap-10"
          >
            {navigationItems.map((item) => {
              if (!item.menu) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`${navTextClass} flex items-center gap-2 whitespace-nowrap transition-colors duration-200 hover:text-cyan-49`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown />
                  </Link>
                );
              }

              const isOpen = openMenu === item.label;
              const panelId = `${item.label.toLowerCase()}-menu`;

              return (
                <div
                  key={item.label}
                  className="relative"
                  // Hover only for mouse; touch taps are handled by onClick
                  onPointerEnter={(event) => {
                    if (event.pointerType === "mouse") openOnHover(item.label);
                  }}
                  onPointerLeave={(event) => {
                    if (event.pointerType === "mouse") closeOnLeave();
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenMenu(isOpen ? null : item.label)}
                    className={`${navTextClass} flex items-center gap-2 whitespace-nowrap transition-colors duration-200 hover:text-cyan-49`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown open={isOpen} />
                  </button>

                  {isOpen && (
                    <div
                      className={`absolute top-full pt-[35px] ${item.menu.panelOffsetClass}`}
                    >
                      <MegaMenuPanel
                        id={panelId}
                        menu={item.menu}
                        onNavigate={() => setOpenMenu(null)}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex shrink-0 items-center gap-4">
            <Link
              href="#"
              className={`${navTextClass} whitespace-nowrap transition-colors duration-200 hover:text-cyan-49`}
            >
              Docs
            </Link>

            <Link
              href="#"
              className={`${navTextClass} whitespace-nowrap transition-colors duration-200 hover:text-cyan-49`}
            >
              Sign in
            </Link>

            <Link href="#" className={primaryButtonClass}>
              Talk to an expert
            </Link>
          </div>
        </div>

        {/* ================= MOBILE / TABLET HEADER ================= */}
        <div className="flex h-16 items-center justify-between px-5 sm:h-20 sm:px-8 xl:hidden">
          <Link
            href="/"
            className="flex items-center"
            aria-label="Zoiko ID home"
            onClick={closeMobile}
          >
            <Logo />
          </Link>

          <div className="flex items-center gap-3">
            <Link href="#" className={`${primaryButtonClass} hidden sm:flex`}>
              Talk to an expert
            </Link>

            {/* Menu Button */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => (mobileOpen ? closeMobile() : setMobileOpen(true))}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-azure-8 transition-colors hover:bg-cyan-49/10"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {mobileOpen && (
          <div className="max-h-[calc(100dvh-7rem)] overflow-y-auto border-t border-slate-900/10 xl:hidden">
            <nav
              aria-label="Main"
              className="flex flex-col px-5 pb-6 pt-2 sm:px-8"
            >
              {navigationItems.map((item) => {
                if (!item.menu) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMobile}
                      className={`${navTextClass} flex min-h-12 items-center justify-between border-b border-slate-900/10`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown />
                    </Link>
                  );
                }

                const isExpanded = mobileExpanded === item.label;
                const panelId = `${item.label.toLowerCase()}-mobile-menu`;

                return (
                  <div
                    key={item.label}
                    className="border-b border-slate-900/10"
                  >
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={panelId}
                      onClick={() =>
                        setMobileExpanded(isExpanded ? null : item.label)
                      }
                      className={`${navTextClass} flex min-h-12 w-full items-center justify-between`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown open={isExpanded} />
                    </button>

                    {isExpanded && (
                      <div id={panelId} className="flex flex-col gap-5 pb-5">
                        {item.menu.columns.map((column, index) => (
                          <div
                            key={column.heading ?? index}
                            className="flex flex-col gap-2"
                          >
                            {column.heading && (
                              <p className="font-dm-serif text-base font-normal leading-6 text-azure-8">
                                {column.heading}
                              </p>
                            )}
                            <ul className="flex flex-col gap-1">
                              {column.links.map((link) => (
                                <li key={link.label}>
                                  <Link
                                    href={link.href}
                                    onClick={closeMobile}
                                    className="block py-1 font-manrope text-sm font-medium leading-6 text-azure-35"
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}

                        <div className="flex flex-col gap-2 rounded-xl bg-cyan-49/5 p-4">
                          {item.menu.feature.title && (
                            <p className="font-dm-serif text-base font-normal leading-6 text-azure-8">
                              {item.menu.feature.title}
                            </p>
                          )}
                          {item.menu.feature.description && (
                            <p className="font-manrope text-sm font-medium leading-6 text-azure-35">
                              {item.menu.feature.description}
                            </p>
                          )}
                          <Link
                            href={item.menu.feature.cta.href}
                            onClick={closeMobile}
                            className="font-manrope text-base font-medium leading-6 text-cyan-49 underline"
                          >
                            {item.menu.feature.cta.label}
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              <Link
                href="#"
                onClick={closeMobile}
                className={`${navTextClass} flex min-h-12 items-center border-b border-slate-900/10`}
              >
                Docs
              </Link>

              <Link
                href="#"
                onClick={closeMobile}
                className={`${navTextClass} flex min-h-12 items-center border-b border-slate-900/10`}
              >
                Sign in
              </Link>

              <Link
                href="#"
                onClick={closeMobile}
                className={`${primaryButtonClass} mt-5 sm:hidden`}
              >
                Talk to an expert
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
