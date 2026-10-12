import type { ReactNode } from "react";

// Line icons drawn on a 24px grid; size and colour come from the caller.
function Icon({
  size = 24,
  children,
}: {
  size?: number;
  children: ReactNode;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

type IconProps = { size?: number };

export function UserCheckIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <circle cx="9" cy="7.5" r="3.5" fill="currentColor" />
      <path d="M2.5 20C2.5 16.4 5.4 13.5 9 13.5C12.6 13.5 15.5 16.4 15.5 20H2.5Z" fill="currentColor" />
      <path d="M16 8.5L18 10.5L21.5 6.5" />
    </Icon>
  );
}

export function ShieldStarIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M12 2.5L4.5 5.5V11C4.5 15.6 7.7 19.8 12 21.5C16.3 19.8 19.5 15.6 19.5 11V5.5L12 2.5Z" fill="currentColor" />
      <path
        d="M12 8.5L12.9 10.4L15 10.6L13.4 12L13.9 14L12 13L10.1 14L10.6 12L9 10.6L11.1 10.4L12 8.5Z"
        fill="#FFFFFF"
        stroke="none"
      />
    </Icon>
  );
}

export function PulseIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M2.5 12.5H7L9.5 7L13.5 17.5L16 12.5H21.5" strokeWidth="2.25" />
    </Icon>
  );
}

export function DatabaseCheckIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <ellipse cx="10.5" cy="5.5" rx="7" ry="3" fill="currentColor" />
      <path d="M3.5 5.5V17C3.5 18.7 6.6 20 10.5 20M17.5 5.5V11M3.5 11.25C3.5 12.9 6.6 14.25 10.5 14.25" />
      <path d="M14 18L16.25 20.25L21 15.5" />
    </Icon>
  );
}

export function PolicyIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M13 21H6.5C5.4 21 4.5 20.1 4.5 19V5C4.5 3.9 5.4 3 6.5 3H14.5L19.5 8V11" />
      <path d="M8 8.5H12M8 12H11" />
      <circle cx="17" cy="15.5" r="2.75" />
      <path d="M15.5 18V21.5L17 20.5L18.5 21.5V18" />
    </Icon>
  );
}

export function UserKeyIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <circle cx="16" cy="7.5" r="3.25" fill="currentColor" />
      <path d="M10 19.5C10 16.2 12.7 13.5 16 13.5C19.3 13.5 22 16.2 22 19.5H10Z" fill="currentColor" />
      <circle cx="4.5" cy="12" r="2" />
      <path d="M6.5 12H10.5M9 12V13.75" />
    </Icon>
  );
}

export function WebhookIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M9.5 9.5L7 14H13.5" />
      <circle cx="12" cy="6" r="2.75" />
      <circle cx="6" cy="16.5" r="2.75" />
      <circle cx="18" cy="16.5" r="2.75" />
      <path d="M12 8.75L15.25 14.5M8.75 16.5H15.25" />
    </Icon>
  );
}

export function ApiIcon({ size }: IconProps) {
  return (
    <svg
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <text
        x="12"
        y="16.25"
        textAnchor="middle"
        fontSize="11"
        fontWeight="800"
        fontFamily="ui-monospace, monospace"
        letterSpacing="-0.5"
      >
        API
      </text>
    </svg>
  );
}

export function BracesIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M8 3.5C6.3 3.5 5.5 4.3 5.5 6V9.5C5.5 10.9 4.8 11.75 3.5 12C4.8 12.25 5.5 13.1 5.5 14.5V18C5.5 19.7 6.3 20.5 8 20.5" />
      <path d="M16 3.5C17.7 3.5 18.5 4.3 18.5 6V9.5C18.5 10.9 19.2 11.75 20.5 12C19.2 12.25 18.5 13.1 18.5 14.5V18C18.5 19.7 17.7 20.5 16 20.5" />
    </Icon>
  );
}

export function CertificateIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M11 18H4C3.2 18 2.5 17.3 2.5 16.5V5C2.5 4.2 3.2 3.5 4 3.5H20C20.8 3.5 21.5 4.2 21.5 5V9.5" />
      <path d="M6 8H12M6 11.5H10" />
      <circle cx="17" cy="13.5" r="3" fill="currentColor" />
      <path d="M15.25 16V21L17 20L18.75 21V16" />
    </Icon>
  );
}

export function GitHubIcon({ size }: IconProps) {
  return (
    <svg
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M8 0.2C3.58 0.2 0 3.78 0 8.2C0 11.74 2.29 14.73 5.47 15.79C5.87 15.86 6.02 15.62 6.02 15.41C6.02 15.22 6.01 14.59 6.01 13.92C4 14.29 3.48 13.43 3.32 12.98C3.23 12.75 2.84 12.04 2.5 11.85C2.22 11.7 1.82 11.33 2.49 11.32C3.12 11.31 3.57 11.9 3.72 12.14C4.44 13.35 5.59 13.01 6.05 12.8C6.12 12.28 6.33 11.93 6.56 11.73C4.78 11.53 2.92 10.84 2.92 7.78C2.92 6.91 3.23 6.19 3.74 5.63C3.66 5.43 3.38 4.61 3.82 3.51C3.82 3.51 4.49 3.3 6.02 4.33C6.66 4.15 7.34 4.06 8.02 4.06C8.7 4.06 9.38 4.15 10.02 4.33C11.55 3.29 12.22 3.51 12.22 3.51C12.66 4.61 12.38 5.43 12.3 5.63C12.81 6.19 13.12 6.9 13.12 7.78C13.12 10.85 11.25 11.53 9.47 11.73C9.76 11.98 10.01 12.46 10.01 13.21C10.01 14.28 10 15.14 10 15.41C10 15.62 10.15 15.87 10.55 15.79C13.71 14.73 16 11.73 16 8.2C16 3.78 12.42 0.2 8 0.2Z"
      />
    </svg>
  );
}

export function BookOpenIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M12 6.5C10 5 7 4.5 3 4.5V18.5C7 18.5 10 19 12 20.5V6.5Z" fill="currentColor" />
      <path d="M12 6.5C14 5 17 4.5 21 4.5V18.5C17 18.5 14 19 12 20.5" />
      <path d="M15 8.5V13L16.5 12L18 13V8" />
    </Icon>
  );
}

export function BrowserFingerprintIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M11 19.5H5C3.9 19.5 3 18.6 3 17.5V6C3 4.9 3.9 4 5 4H19C20.1 4 21 4.9 21 6V10.5" />
      <path d="M3 8.5H21" />
      <path d="M14.5 21C14.25 19.75 14.25 18 14.75 16.75C15.25 15.5 16.25 14.75 17.5 14.75C18.9 14.75 20 15.85 20 17.25V18" />
      <path d="M17.5 17.25V21M16 21C16 19.5 16 18 16.5 17.25M19 21V19.5" />
    </Icon>
  );
}

export function LinkIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <rect x="2.75" y="5.75" width="12" height="8" rx="4" />
      <rect x="9.25" y="10.25" width="12" height="8" rx="4" />
    </Icon>
  );
}

export function TicketIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M3 7.5C3 6.7 3.7 6 4.5 6H19.5C20.3 6 21 6.7 21 7.5V9.5C19.9 9.5 19 10.4 19 11.5V12.5C19 13.6 19.9 14.5 21 14.5V16.5C21 17.3 20.3 18 19.5 18H4.5C3.7 18 3 17.3 3 16.5V14.5C4.1 14.5 5 13.6 5 12.5V11.5C5 10.4 4.1 9.5 3 9.5V7.5Z" />
      <path d="M8.5 10.5H15.5M8.5 13.5H13" />
    </Icon>
  );
}

export function CodeWindowIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M3 8.5H21" />
      <path d="M10 12L8 14L10 16M14 12L16 14L14 16" />
    </Icon>
  );
}

export function SyncIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M4 11L11 4M7 14L14 7M10 17L17 10M13 20L20 13" />
      <path d="M11 4C12.5 2.5 15 5 13.5 6.5M20 13C21.5 11.5 19 9 17.5 10.5" />
    </Icon>
  );
}

export function CheckCircleIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <circle cx="12" cy="12" r="9.5" fill="currentColor" stroke="none" />
      <path d="M7.75 12.25L10.5 15L16.25 9.25" stroke="#FFFFFF" strokeWidth="2.25" />
    </Icon>
  );
}

export function ShieldLockIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M12 2.5L4.5 5.5V11C4.5 15.6 7.7 19.8 12 21.5C16.3 19.8 19.5 15.6 19.5 11V5.5L12 2.5Z" fill="currentColor" />
      <rect x="9" y="11" width="6" height="4.5" rx="1" fill="#FFFFFF" stroke="none" />
      <path d="M10.25 11V9.75C10.25 8.8 11 8 12 8C13 8 13.75 8.8 13.75 9.75V11" stroke="#FFFFFF" strokeWidth="1.5" />
    </Icon>
  );
}

export function DatabaseLockIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <ellipse cx="10" cy="5.5" rx="7" ry="3" fill="currentColor" />
      <path d="M3 5.5V17C3 18.7 6.1 20 10 20M17 5.5V10M3 11.25C3 12.9 6.1 14.25 10 14.25" />
      <rect x="14" y="15" width="7" height="5.5" rx="1" fill="currentColor" />
      <path d="M15.5 15V13.75C15.5 12.8 16.4 12 17.5 12C18.6 12 19.5 12.8 19.5 13.75V15" />
    </Icon>
  );
}

export function EyeOffIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M2.5 12C4.5 8 8 5.75 12 5.75C16 5.75 19.5 8 21.5 12C19.5 16 16 18.25 12 18.25C8 18.25 4.5 16 2.5 12Z" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
      <path d="M4 3.5L20 20.5" strokeWidth="2.25" />
    </Icon>
  );
}

export function FileCheckIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M12.5 21H6C4.9 21 4 20.1 4 19V5C4 3.9 4.9 3 6 3H13.5L18.5 8V12.5" fill="currentColor" fillOpacity="0.15" />
      <path d="M8 11.5H14M8 15H11" />
      <path d="M14.5 18.5L16.75 20.75L21 16.5" />
    </Icon>
  );
}

export function BankIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M3 9L12 4L21 9H3Z" fill="currentColor" />
      <path d="M5.5 11.5V17M10 11.5V17M14 11.5V17M18.5 11.5V17M3 20H21" />
    </Icon>
  );
}

export function MedicalIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" fill="currentColor" stroke="none" />
      <path d="M12 8V16M8 12H16" stroke="#FFFFFF" strokeWidth="2.5" />
    </Icon>
  );
}

export function LandmarkIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M3.5 7.5H20.5V5.5H3.5V7.5Z" />
      <path d="M5.5 10.5V17M9 10.5V17M12.5 10.5V17M16 10.5V17M18.5 10.5V17M3.5 19.5H20.5" />
    </Icon>
  );
}

export function FileCabinetIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M5 12H19M10 7.5H14M10 16.5H14" />
    </Icon>
  );
}

export function ShieldFilledIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M12 2.5L4.5 5.5V11C4.5 15.6 7.7 19.8 12 21.5C16.3 19.8 19.5 15.6 19.5 11V5.5L12 2.5Z" fill="currentColor" />
    </Icon>
  );
}

export function BoltIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <circle cx="12" cy="12" r="9" />
      <path d="M13 6.5L8.5 13H12L11 17.5L15.5 11H12L13 6.5Z" />
    </Icon>
  );
}

export function ArrowRightIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M5 12H19M13 6L19 12L13 18" strokeWidth="2" />
    </Icon>
  );
}

export function PhoneIcon({ size }: IconProps) {
  return (
    <svg
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.6 10.8C8 13.6 10.4 16 13.2 17.4L15.4 15.2C15.7 14.9 16.1 14.8 16.4 15C17.5 15.4 18.7 15.6 20 15.6C20.6 15.6 21 16 21 16.6V20C21 20.6 20.6 21 20 21C10.6 21 3 13.4 3 4C3 3.4 3.4 3 4 3H7.5C8.1 3 8.5 3.4 8.5 4C8.5 5.3 8.7 6.5 9.1 7.6C9.2 7.9 9.1 8.3 8.9 8.6L6.6 10.8Z" />
    </svg>
  );
}

export function ShieldCheckIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M12 2.5L4.5 5.5V11C4.5 15.6 7.7 19.8 12 21.5C16.3 19.8 19.5 15.6 19.5 11V5.5L12 2.5Z" fill="currentColor" />
      <path
        d="M8.75 12L11 14.25L15.5 9.75"
        stroke="var(--icon-cutout, #FFFFFF)"
        strokeWidth="2"
      />
    </Icon>
  );
}

export function PersonIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <circle cx="12" cy="8" r="3.5" fill="currentColor" stroke="none" />
      <path d="M5 19.5C5 16.2 8.1 14 12 14C15.9 14 19 16.2 19 19.5V20H5V19.5Z" fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function BuildingIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <rect x="5.5" y="3" width="13" height="18" rx="1" fill="currentColor" stroke="none" />
      <path
        d="M8.5 6.5H9.5M11.5 6.5H12.5M14.5 6.5H15.5M8.5 10H9.5M11.5 10H12.5M14.5 10H15.5M8.5 13.5H9.5M11.5 13.5H12.5M14.5 13.5H15.5M11 21V17.5H13V21"
        stroke="#FFFFFF"
        strokeWidth="1.5"
      />
    </Icon>
  );
}

export function GearIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path
        d="M10.3 2.5H13.7L14.2 5.1C14.9 5.4 15.5 5.7 16 6.2L18.5 5.3L20.2 8.2L18.2 9.9C18.3 10.6 18.3 11.4 18.2 12.1L20.2 13.8L18.5 16.7L16 15.8C15.5 16.3 14.9 16.6 14.2 16.9L13.7 19.5H10.3L9.8 16.9C9.1 16.6 8.5 16.3 8 15.8L5.5 16.7L3.8 13.8L5.8 12.1C5.7 11.4 5.7 10.6 5.8 9.9L3.8 8.2L5.5 5.3L8 6.2C8.5 5.7 9.1 5.4 9.8 5.1L10.3 2.5Z"
        fill="currentColor"
        stroke="none"
        transform="translate(0 1)"
      />
      <circle cx="12" cy="12" r="2.75" fill="#FFFFFF" stroke="none" />
    </Icon>
  );
}

export function LaptopIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <rect x="4.5" y="5" width="15" height="10.5" rx="1.25" strokeWidth="2" />
      <path d="M2.5 19H21.5" strokeWidth="2" />
    </Icon>
  );
}

export function RobotIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M12 3.5V6.5" strokeWidth="2" />
      <circle cx="12" cy="3" r="1.25" fill="currentColor" stroke="none" />
      <rect x="4.5" y="7" width="15" height="12" rx="4" fill="currentColor" stroke="none" />
      <circle cx="9.25" cy="13" r="1.5" fill="#FFFFFF" stroke="none" />
      <circle cx="14.75" cy="13" r="1.5" fill="#FFFFFF" stroke="none" />
      <path d="M2.5 11.5V14.5M21.5 11.5V14.5" strokeWidth="2" />
    </Icon>
  );
}

export function LockCheckIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M7 10V7.5C7 4.7 9.2 2.5 12 2.5C14.8 2.5 17 4.7 17 7.5V10" strokeWidth="2" />
      <path d="M13.5 21H6C5.2 21 4.5 20.3 4.5 19.5V11.5C4.5 10.7 5.2 10 6 10H18C18.8 10 19.5 10.7 19.5 11.5V14" fill="currentColor" stroke="none" />
      <circle cx="10" cy="15" r="1.5" fill="#FFFFFF" stroke="none" />
      <path d="M15 19L17 21L21 17" />
    </Icon>
  );
}

export function EyeCheckIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M12 5.5C7.5 5.5 4 8.5 2 12C4 15.5 7.5 18.5 12 18.5C12.7 18.5 13.3 18.4 14 18.3V15.3C13.4 15.7 12.7 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12C16 12.4 15.9 12.9 15.8 13.3H19.6C20.5 12.9 21.3 12.5 22 12C20 8.5 16.5 5.5 12 5.5Z" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      <path d="M16 18L18 20L22 16" />
    </Icon>
  );
}

export function ScaleIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M12 3.5V19.5M5 20.5H19M5.5 6.5H18.5M12 6.5V3.5" />
      <path d="M5.5 6.5L3 12.5C3 14 4.1 15 5.5 15C6.9 15 8 14 8 12.5L5.5 6.5ZM18.5 6.5L16 12.5C16 14 17.1 15 18.5 15C19.9 15 21 14 21 12.5L18.5 6.5Z" />
      <path d="M3 12.5H8M16 12.5H21" />
    </Icon>
  );
}

export function LayersIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M12 3L21 8L12 13L3 8L12 3Z" fill="currentColor" />
      <path d="M3.5 12.5L12 17.25L20.5 12.5" strokeWidth="2" />
    </Icon>
  );
}

export function MailIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" fill="currentColor" stroke="none" />
      <path d="M4.5 8L12 13L19.5 8" stroke="var(--icon-cutout, #071426)" strokeWidth="1.75" />
    </Icon>
  );
}

export function OfficeIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M3 21V4.5H13V21H3ZM13 9.5H21V21H13V9.5Z" fill="currentColor" stroke="none" />
      <path
        d="M6 8H7M9 8H10M6 11.5H7M9 11.5H10M6 15H7M9 15H10M16 13H18M16 16.5H18"
        stroke="#FFFFFF"
        strokeWidth="1.75"
      />
    </Icon>
  );
}

export function VerifiedBadgeIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path
        d="M12 2L14.4 3.9L17.5 3.6L18.6 6.5L21.3 8L20.6 11L22 13.8L19.7 15.9L19.4 19L16.3 19.6L14.2 22L12 20.6L9.8 22L7.7 19.6L4.6 19L4.3 15.9L2 13.8L3.4 11L2.7 8L5.4 6.5L6.5 3.6L9.6 3.9L12 2Z"
        fill="currentColor"
        stroke="none"
      />
      <path d="M8.25 12.25L10.9 14.9L15.9 9.6" stroke="#FFFFFF" strokeWidth="2.25" />
    </Icon>
  );
}

export function RepresentativeIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <circle cx="12" cy="7" r="3.75" fill="currentColor" stroke="none" />
      <path d="M4.5 20.5C4.5 16.6 7.6 13.5 12 13.5C16.4 13.5 19.5 16.6 19.5 20.5H4.5Z" fill="currentColor" stroke="none" />
      <path d="M12 14V18.5L10.75 20H13.25L12 18.5" stroke="#FFFFFF" strokeWidth="1.5" />
    </Icon>
  );
}

export function ClockCheckIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M12 3C7 3 3 7 3 12C3 17 7 21 12 21C12.5 21 13 21 13.5 20.9C13 20 12.75 19 12.75 18C12.75 14.8 15.3 12.25 18.5 12.25C19.4 12.25 20.2 12.4 20.9 12.8C21 12.5 21 12.3 21 12C21 7 17 3 12 3Z" fill="currentColor" stroke="none" />
      <path d="M12 7.5V12L14.5 13.5" stroke="var(--icon-cutout, #2f8fe6)" strokeWidth="1.75" />
      <path d="M15.5 18L17.5 20L21.25 16.25" strokeWidth="2" />
    </Icon>
  );
}

export function BoundaryIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M15 4H7C5.3 4 4 5.3 4 7V17C4 18.7 5.3 20 7 20H17C18.7 20 20 18.7 20 17V9.5" fill="currentColor" stroke="none" />
      <rect x="4" y="4" width="16" height="16" rx="3" fill="currentColor" stroke="none" />
      <circle cx="18.5" cy="5.5" r="3" fill="currentColor" stroke="var(--icon-cutout, #2f8fe6)" strokeWidth="1.5" />
      <path d="M8 14.5H12" stroke="var(--icon-cutout, #2f8fe6)" strokeWidth="2" />
    </Icon>
  );
}

export function OfficerIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <circle cx="15.5" cy="8" r="3.5" fill="currentColor" stroke="none" />
      <path d="M9 19.5C9 16.2 11.9 14 15.5 14C19.1 14 22 16.2 22 19.5V20H9V19.5Z" fill="currentColor" stroke="none" />
      <path
        d="M5.5 7.5L6.5 9.6L8.8 9.9L7.1 11.5L7.5 13.8L5.5 12.7L3.5 13.8L3.9 11.5L2.2 9.9L4.5 9.6L5.5 7.5Z"
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

export function ShareIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M7.5 11L16 6.5M7.5 13L16 17.5" strokeWidth="2" />
      <circle cx="18" cy="5.5" r="2.75" fill="currentColor" stroke="none" />
      <circle cx="6" cy="12" r="2.75" fill="currentColor" stroke="none" />
      <circle cx="18" cy="18.5" r="2.75" fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function HierarchyIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <rect x="5" y="3.5" width="14" height="10" rx="1.5" strokeWidth="2" />
      <path d="M12 13.5V18.5M3 18.5H21" strokeWidth="2" />
      <circle cx="12" cy="18.5" r="2" fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function HomesIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M12 9.5L5.5 15V21H10V17H14V21H18.5V15L12 9.5Z" fill="currentColor" stroke="none" />
      <path d="M3 8L6 5L9 8V10H3V8ZM15 8L18 5L21 8V10H15V8Z" fill="currentColor" stroke="none" />
      <path d="M6 5V3M18 5V3" />
    </Icon>
  );
}

export function GlobeIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <circle cx="12" cy="12" r="9.25" fill="currentColor" stroke="none" />
      <path
        d="M4 9.5C6 9.5 7.5 10.5 8.5 12C9.5 13.5 9 15.5 10.5 16.5C11.5 17.2 11 19 12 20.5M20 8C18 8.5 17.5 10 16 10C14.5 10 14 8.5 15 7C15.7 6 15 4.5 14 3.5M20.5 14.5C19 14 17.5 14.5 17 16C16.6 17.2 17 18.5 16.5 19.5"
        stroke="#FFFFFF"
        strokeWidth="1.5"
      />
    </Icon>
  );
}

export function UsersIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <circle cx="9" cy="8" r="3.25" strokeWidth="2" />
      <path d="M2.5 19.5C2.5 16.5 5.4 14.5 9 14.5C12.6 14.5 15.5 16.5 15.5 19.5H2.5Z" strokeWidth="2" />
      <path d="M15.5 4.9C17 5.2 18.25 6.5 18.25 8C18.25 9.5 17 10.8 15.5 11.1M18 14.8C20 15.5 21.5 17.2 21.5 19.5H19" strokeWidth="2" />
    </Icon>
  );
}

export function HistoryIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M4 12C4 7.6 7.6 4 12 4C16.4 4 20 7.6 20 12C20 16.4 16.4 20 12 20C9.6 20 7.4 18.9 6 17.2" strokeWidth="2" />
      <path d="M1.5 10.5L4 13L6.5 10.5" strokeWidth="2" />
      <path d="M12 8V12.5L15 14.25" strokeWidth="2" />
    </Icon>
  );
}

export function ClockRefreshIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M19.5 9C18.3 6 15.4 4 12 4C7.6 4 4 7.6 4 12C4 16.4 7.6 20 12 20C16.1 20 19.5 16.9 20 13" strokeWidth="2" />
      <path d="M20 4V9H15" strokeWidth="2" />
      <path d="M12 8.5V12.5L14.5 14" strokeWidth="2" />
    </Icon>
  );
}

export function DatabaseIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <ellipse cx="12" cy="6" rx="8" ry="3.25" fill="currentColor" stroke="none" />
      <path d="M4 9.5V10.5C4 12.3 7.6 13.75 12 13.75C16.4 13.75 20 12.3 20 10.5V9.5C18.5 10.9 15.5 11.75 12 11.75C8.5 11.75 5.5 10.9 4 9.5Z" fill="currentColor" stroke="none" />
      <path d="M4 14V17.5C4 19.3 7.6 20.75 12 20.75C16.4 20.75 20 19.3 20 17.5V14C18.5 15.4 15.5 16.25 12 16.25C8.5 16.25 5.5 15.4 4 14Z" fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function FolderPersonIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M2.5 6.5C2.5 5.4 3.4 4.5 4.5 4.5H9.5L11.5 7H19.5C20.6 7 21.5 7.9 21.5 9V18C21.5 19.1 20.6 20 19.5 20H4.5C3.4 20 2.5 19.1 2.5 18V6.5Z" fill="currentColor" stroke="none" />
      <circle cx="15" cy="11.5" r="1.75" fill="#FFFFFF" stroke="none" />
      <path d="M11.75 17C11.75 15.5 13.2 14.5 15 14.5C16.8 14.5 18.25 15.5 18.25 17H11.75Z" fill="#FFFFFF" stroke="none" />
    </Icon>
  );
}

export function DocMinusIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <rect x="4.5" y="3.5" width="15" height="17" rx="2.5" strokeWidth="2" />
      <path d="M8.5 9H15.5M8.5 13.5H15.5" strokeWidth="2" />
    </Icon>
  );
}

export function ClipboardCheckIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M9 2.5H15V4.5H18C18.8 4.5 19.5 5.2 19.5 6V20C19.5 20.8 18.8 21.5 18 21.5H6C5.2 21.5 4.5 20.8 4.5 20V6C4.5 5.2 5.2 4.5 6 4.5H9V2.5Z" fill="currentColor" stroke="none" />
      <path d="M8.25 13.25L10.75 15.75L15.75 10.5" stroke="#FFFFFF" strokeWidth="2" />
    </Icon>
  );
}

export function BookmarkBookIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M5 4.5C5 3.4 5.9 2.5 7 2.5H19V21.5H7C5.9 21.5 5 20.6 5 19.5V4.5Z" fill="currentColor" stroke="none" />
      <path d="M10 2.5V9.5L12 8L14 9.5V2.5" fill="var(--icon-cutout, #2f8fe6)" stroke="none" />
    </Icon>
  );
}

export function FlaskIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M8 2.5H16V4.5H15V14.5C15 17 13.7 21.5 12 21.5C10.3 21.5 9 17 9 14.5V4.5H8V2.5Z" fill="currentColor" stroke="none" />
      <circle cx="12" cy="8.5" r="1" fill="var(--icon-cutout, #2f8fe6)" stroke="none" />
      <circle cx="12" cy="13" r="1.25" fill="var(--icon-cutout, #2f8fe6)" stroke="none" />
    </Icon>
  );
}

export function BoxIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M3.5 7C3.5 5.9 4.4 5 5.5 5H18.5C19.6 5 20.5 5.9 20.5 7V9H3.5V7Z" fill="currentColor" stroke="none" />
      <path d="M3.5 10.5H20.5V18C20.5 19.1 19.6 20 18.5 20H5.5C4.4 20 3.5 19.1 3.5 18V10.5Z" fill="currentColor" stroke="none" />
      <path d="M7.5 15.5H11.5" stroke="var(--icon-cutout, #2f8fe6)" strokeWidth="2" />
    </Icon>
  );
}

export function HeadsetIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M4.5 14V11.5C4.5 7.4 7.9 4 12 4C16.1 4 19.5 7.4 19.5 11.5V14" strokeWidth="2.25" />
      <rect x="3" y="12.5" width="4.5" height="6.5" rx="1.5" fill="currentColor" stroke="none" />
      <rect x="16.5" y="12.5" width="4.5" height="6.5" rx="1.5" fill="currentColor" stroke="none" />
      <path d="M19 19C19 20.5 17.5 21.25 15.5 21.25H13" strokeWidth="1.75" />
    </Icon>
  );
}

export function LockIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M8 10V7.5C8 5.3 9.8 3.5 12 3.5C14.2 3.5 16 5.3 16 7.5V10" strokeWidth="2" />
      <rect x="5" y="10" width="14" height="11" rx="2" fill="currentColor" stroke="none" />
      <circle cx="12" cy="15.5" r="1.5" fill="#FFFFFF" stroke="none" />
    </Icon>
  );
}

export function LockOpenIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M8 10V7.5C8 5.3 9.8 3.5 12 3.5C13.9 3.5 15.4 4.8 15.9 6.5" strokeWidth="2" />
      <rect x="5" y="10" width="14" height="11" rx="2" fill="currentColor" stroke="none" />
      <circle cx="12" cy="15.5" r="1.5" fill="#FFFFFF" stroke="none" />
    </Icon>
  );
}

export function KeyIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <circle cx="7" cy="12" r="4.5" fill="currentColor" stroke="none" />
      <circle cx="7" cy="12" r="1.5" fill="#FFFFFF" stroke="none" />
      <path d="M11 12H21.5M17 12V15.5M20.5 12V14.5" strokeWidth="2.5" />
    </Icon>
  );
}

export function AlertOctagonIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M8.3 3H15.7L21 8.3V15.7L15.7 21H8.3L3 15.7V8.3L8.3 3Z" fill="currentColor" stroke="none" />
      <path d="M12 7.5V13" stroke="#FFFFFF" strokeWidth="2.25" />
      <circle cx="12" cy="16.25" r="1.25" fill="#FFFFFF" stroke="none" />
    </Icon>
  );
}

export function SendIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M3 4L22 12L3 20L5.5 13.25L14 12L5.5 10.75L3 4Z" fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function DeviceGearIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M17 9V4.5C17 3.7 16.3 3 15.5 3H7.5C6.7 3 6 3.7 6 4.5V19.5C6 20.3 6.7 21 7.5 21H11" strokeWidth="2" />
      <path d="M10.5 6H12.5" strokeWidth="2" />
      <circle cx="17.5" cy="17" r="2" strokeWidth="2" />
      <path d="M17.5 12.75V14M17.5 20V21.25M13.8 14.9L14.9 15.5M20.1 18.5L21.2 19.1M13.8 19.1L14.9 18.5M20.1 15.5L21.2 14.9" />
    </Icon>
  );
}

export function BoltSolidIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M13.5 2.5L6 13.5H11L10.5 21.5L18 10.5H13L13.5 2.5Z" fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function CloudIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M7 19C4.2 19 2 16.8 2 14C2 11.5 3.8 9.4 6.2 9.1C7 6.7 9.3 5 12 5C15.1 5 17.6 7.3 18 10.3C20.3 10.6 22 12.5 22 14.75C22 17.1 20.1 19 17.75 19H7Z" fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function PlayIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M8 5L19 12L8 19V5Z" fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function TargetIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <circle cx="12" cy="12" r="6.5" strokeWidth="2" />
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      <path d="M12 2.5V5.5M12 18.5V21.5M2.5 12H5.5M18.5 12H21.5" strokeWidth="2" />
    </Icon>
  );
}

export function StairsUpIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M3 20H8V15H13V10H18V6" strokeWidth="2.25" />
      <path d="M14 4L20 4L20 10M20 4L15 9" strokeWidth="2" />
    </Icon>
  );
}

export function BlockIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <circle cx="12" cy="12" r="8.5" strokeWidth="2" />
      <path d="M6 6L18 18" strokeWidth="2" />
    </Icon>
  );
}

export function UserRemoveIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <circle cx="15" cy="8" r="3.5" fill="currentColor" stroke="none" />
      <path d="M8.5 19.5C8.5 16.2 11.4 14 15 14C18.6 14 21.5 16.2 21.5 19.5V20H8.5V19.5Z" fill="currentColor" stroke="none" />
      <path d="M2.5 8L6.5 12M6.5 8L2.5 12" strokeWidth="2" />
    </Icon>
  );
}

export function ShieldOffIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M12 2.5L4.5 5.5V11C4.5 15.6 7.7 19.8 12 21.5C16.3 19.8 19.5 15.6 19.5 11V5.5L12 2.5Z" fill="currentColor" stroke="none" />
      <path d="M4 3.5L20 20.5" stroke="#FFFFFF" strokeWidth="3.5" />
      <path d="M4 3.5L20 20.5" strokeWidth="1.75" />
    </Icon>
  );
}

export function AlertCircleIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <circle cx="12" cy="12" r="9.5" fill="currentColor" stroke="none" />
      <path d="M12 7V13" stroke="#FFFFFF" strokeWidth="2.25" />
      <circle cx="12" cy="16.5" r="1.25" fill="#FFFFFF" stroke="none" />
    </Icon>
  );
}

export function FenceIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M4.5 19V8L6 6L7.5 8V19M10.5 19V8L12 6L13.5 8V19M16.5 19V8L18 6L19.5 8V19" strokeWidth="2" />
      <path d="M2.5 11H21.5M2.5 16H21.5" strokeWidth="2" />
    </Icon>
  );
}

export function DocumentIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M6 2.5H14L19.5 8V20C19.5 20.8 18.8 21.5 18 21.5H6C5.2 21.5 4.5 20.8 4.5 20V4C4.5 3.2 5.2 2.5 6 2.5Z" fill="currentColor" stroke="none" />
      <path d="M8 12H16M8 15.5H16M8 8.5H11" stroke="#FFFFFF" strokeWidth="1.75" />
    </Icon>
  );
}

export function SessionTimerIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M8 8V6.5C8 4.6 9.6 3 11.5 3C13.4 3 15 4.6 15 6.5" strokeWidth="2" />
      <path d="M4 8H15.5C13 9 11.25 11.5 11.25 14.5C11.25 16.6 12.1 18.5 13.5 19.8L13.5 20H5.5C4.7 20 4 19.3 4 18.5V8Z" fill="currentColor" stroke="none" />
      <circle cx="17" cy="15" r="4.5" strokeWidth="2" />
      <path d="M17 12.75V15L18.5 16" />
    </Icon>
  );
}

export function ShieldPersonIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M12 2.5L4.5 5.5V11C4.5 15.6 7.7 19.8 12 21.5C16.3 19.8 19.5 15.6 19.5 11V5.5L12 2.5Z" fill="currentColor" stroke="none" />
      <circle cx="12" cy="9" r="2.25" fill="#FFFFFF" stroke="none" />
      <path d="M8 15.5C8 13.8 9.8 12.75 12 12.75C14.2 12.75 16 13.8 16 15.5V16H8V15.5Z" fill="#FFFFFF" stroke="none" />
    </Icon>
  );
}

export function XCircleIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <circle cx="12" cy="12" r="9.5" fill="currentColor" stroke="none" />
      <path d="M8.5 8.5L15.5 15.5M15.5 8.5L8.5 15.5" stroke="#FFFFFF" strokeWidth="2.25" />
    </Icon>
  );
}

export function XMarkIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M6 6L18 18M18 6L6 18" strokeWidth="2" />
    </Icon>
  );
}

export function CheckIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M4.5 12.5L9.5 17.5L19.5 7" strokeWidth="2" />
    </Icon>
  );
}

export function PlusIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M12 5V19M5 12H19" strokeWidth="2" />
    </Icon>
  );
}
