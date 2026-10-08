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

export function PlusIcon({ size }: IconProps) {
  return (
    <Icon size={size}>
      <path d="M12 5V19M5 12H19" strokeWidth="2" />
    </Icon>
  );
}
