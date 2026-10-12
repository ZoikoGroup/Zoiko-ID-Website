import {
  DocumentIcon,
  FenceIcon,
  HistoryIcon,
  UserCheckIcon,
} from "@/components/home/icons";
import { Section, SectionHeader } from "@/components/home/shared";

import CenteredCardGrid, { type CenteredCard } from "./CenteredCardGrid";

const outcomes: CenteredCard[] = [
  {
    title: "User Authenticated",
    description: "Proof of valid authenticator use at a point in time.",
    icon: <UserCheckIcon size={32} />,
  },
  {
    title: "Session Established",
    description:
      "Authenticator proof is cached for reuse during session window.",
    icon: <HistoryIcon size={32} />,
  },
  {
    title: "Context Passed",
    description: "Token or session reference flows to downstream app/policy.",
    icon: <FenceIcon size={32} />,
  },
  {
    title: "Policy Decides Access",
    description: "Authorization engine evaluates who can do what.",
    icon: <DocumentIcon size={32} />,
  },
];

export default function OutcomesSection() {
  return (
    <Section background="slate">
      <SectionHeader
        title="Core authentication outcomes"
        widthClass="max-w-[760px]"
      />
      <CenteredCardGrid items={outcomes} tileClass="size-16 rounded-lg" />
    </Section>
  );
}
