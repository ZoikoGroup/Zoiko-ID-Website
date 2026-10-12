import {
  AlertCircleIcon,
  BlockIcon,
  PulseIcon,
  SessionTimerIcon,
  ShieldOffIcon,
  UserRemoveIcon,
} from "@/components/home/icons";
import { Section, SectionHeader } from "@/components/home/shared";

import CenteredCardGrid, { type CenteredCard } from "./CenteredCardGrid";

const events: CenteredCard[] = [
  {
    title: "Session Timeout",
    description:
      "Sessions expire after idle or absolute time. User must re-authenticate.",
    icon: <SessionTimerIcon size={28} />,
  },
  {
    title: "Explicit Revocation",
    description:
      "Admin can revoke session immediately if user leaves org or compromised.",
    icon: <BlockIcon size={28} />,
  },
  {
    title: "Continuous Trust",
    description:
      "Monitor session signals (location, device) and re-evaluate trust during session.",
    icon: <PulseIcon size={28} />,
  },
  {
    title: "User Terminated",
    description:
      "Employee departing → all sessions revoked → access logs created.",
    icon: <UserRemoveIcon size={28} />,
  },
  {
    title: "Credential Revoked",
    description:
      "Underlying credential (e.g., certificate, API key) revoked → new auth required.",
    icon: <ShieldOffIcon size={28} />,
  },
  {
    title: "Breach Detection",
    description:
      "Compromise detected → invalidate sessions → force re-auth → audit trail.",
    icon: <AlertCircleIcon size={28} />,
  },
];

export default function SessionsSection() {
  return (
    <Section>
      <SectionHeader title="Sessions, trust & revocation" />
      <CenteredCardGrid items={events} />
    </Section>
  );
}
