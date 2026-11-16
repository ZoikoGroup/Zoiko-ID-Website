/** Small inline icons (no icon library, no external requests). Decorative: every icon is `aria-hidden`, and the control that holds it
 * carries the accessible name. Stroke icons use `currentColor`, so they follow the surrounding text and theme. */
import type { ReactElement, ReactNode } from "react";

function Svg({ children }: { children: ReactNode }): ReactElement {
  return (
    <svg className="zpa-icon" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

export const LockIcon = () => (
  <Svg>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </Svg>
);
export const DocumentIcon = () => (
  <Svg>
    <path d="M7 3h7l4 4v14H7z" />
    <path d="M14 3v4h4M10 12h5M10 16h5" />
  </Svg>
);
export const ShieldIcon = () => (
  <Svg>
    <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z" />
  </Svg>
);
export const ShieldCheckIcon = () => (
  <Svg>
    <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z" />
    <path d="M9 12l2 2 4-4" />
  </Svg>
);
export const ShareIcon = () => (
  <Svg>
    <circle cx="6" cy="12" r="2.2" />
    <circle cx="17" cy="6" r="2.2" />
    <circle cx="17" cy="18" r="2.2" />
    <path d="M8 11l7-4M8 13l7 4" />
  </Svg>
);
export const CodeIcon = () => (
  <Svg>
    <path d="M9 8l-4 4 4 4M15 8l4 4-4 4M13 6l-2 12" />
  </Svg>
);
export const BuildingIcon = () => (
  <Svg>
    <rect x="5" y="3" width="14" height="18" rx="1.5" />
    <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M11 21v-3h2v3" />
  </Svg>
);
export const UserIcon = () => (
  <Svg>
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
  </Svg>
);
export const ChatIcon = () => (
  <Svg>
    <path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-6l-5 4v-4H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
  </Svg>
);
export const SendIcon = () => (
  <Svg>
    <path d="M4 12l16-8-6 17-3-7z" />
    <path d="M11 14l9-10" />
  </Svg>
);
export const ExpandIcon = () => (
  <Svg>
    <path d="M15 4h5v5M9 20H4v-5M20 4l-6 6M4 20l6-6" />
  </Svg>
);
export const ShrinkIcon = () => (
  <Svg>
    <path d="M14 10h6M14 10V4M10 14H4M10 14v6M20 4l-6 6M4 20l6-6" />
  </Svg>
);
export const MinusIcon = () => (
  <Svg>
    <path d="M5 12h14" />
  </Svg>
);
export const PlusIcon = () => (
  <Svg>
    <path d="M12 5v14M5 12h14" />
  </Svg>
);
export const ClockIcon = () => (
  <Svg>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Svg>
);
export const CloseIcon = () => (
  <Svg>
    <path d="M6 6l12 12M18 6L6 18" />
  </Svg>
);
export const MoonIcon = () => (
  <Svg>
    <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z" />
  </Svg>
);
export const SunIcon = () => (
  <Svg>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4" />
  </Svg>
);
export const TrashIcon = () => (
  <Svg>
    <path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6" />
  </Svg>
);
export const ArrowRightIcon = () => (
  <Svg>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
);
export const ChevronRightIcon = () => (
  <Svg>
    <path d="M9 6l6 6-6 6" />
  </Svg>
);

/** The icon names a starter may carry (from the bootstrap): anything else falls back to the chat glyph, never to server markup. */
export type IconName = "lock" | "document" | "shield" | "share" | "code" | "building" | "user" | "chat";
const BY_NAME: Record<IconName, () => ReactElement> = {
  lock: LockIcon,
  document: DocumentIcon,
  shield: ShieldIcon,
  share: ShareIcon,
  code: CodeIcon,
  building: BuildingIcon,
  user: UserIcon,
  chat: ChatIcon,
};

export function NamedIcon({ name }: { name?: string | null }): ReactElement {
  const Icon = name && Object.hasOwn(BY_NAME, name) ? BY_NAME[name as IconName] : ChatIcon;
  return <Icon />;
}

/** A soft colour per icon, so tiles read like the design (blue, mint, blue, blue). Fixed map: not driven by server text. */
export function toneFor(name?: string | null): "blue" | "mint" {
  return name === "document" ? "mint" : "blue";
}
