import {
  ClockCheckIcon,
  LayersIcon,
  PhoneIcon,
  ShieldCheckIcon,
  StairsUpIcon,
  TargetIcon,
} from "@/components/home/icons";
import {
  IconRowCardGrid,
  Section,
  SectionHeader,
  type IconRowItem,
} from "@/components/home/shared";

const controls: IconRowItem[] = [
  {
    title: "Multi-Factor Authentication",
    description:
      "Require password + something you have (TOTP app, security key, SMS). Reduces risk of password compromise.",
    icon: <LayersIcon size={28} />,
  },
  {
    title: "Assurance Levels",
    description:
      "Classify auth strength: low (password), medium (password + TOTP), high (passkey or hardware). Let policy require specific levels.",
    icon: <TargetIcon size={28} />,
  },
  {
    title: "Step-Up Authentication",
    description:
      "Initially authenticate at low assurance. If accessing sensitive resource, require step-up (e.g., re-auth with MFA) without full login.",
    icon: <StairsUpIcon size={28} />,
  },
  {
    title: "Risk-Based Auth",
    description:
      "Evaluate context (location, device, time, behavior anomalies). Require stronger auth if risk score is high.",
    icon: <ShieldCheckIcon size={28} />,
  },
  {
    title: "Adaptive MFA",
    description:
      "Adjust MFA requirement based on context. Low-risk = no prompt. High-risk = MFA required.",
    icon: <PhoneIcon size={28} />,
  },
  {
    title: "Session Re-Auth",
    description:
      "Require periodic re-authentication on long-lived sessions. Configurable timeouts per resource sensitivity.",
    // Cutout matches the pale icon tile behind it
    icon: (
      <span className="flex [--icon-cutout:#dbeefa]">
        <ClockCheckIcon size={28} />
      </span>
    ),
  },
];

export default function MfaSection() {
  return (
    <Section>
      <SectionHeader title="MFA, assurance & step-up" />
      <IconRowCardGrid items={controls} />
    </Section>
  );
}
