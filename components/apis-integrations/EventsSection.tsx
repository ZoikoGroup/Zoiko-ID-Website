import {
  CheckCircleIcon,
  DeviceGearIcon,
  MailIcon,
  SendIcon,
} from "@/components/home/icons";
import { Section, SectionHeader } from "@/components/home/shared";

const flow = [
  {
    title: "Event Produced",
    description:
      "User created, credential revoked, session ended, policy changed.",
    icon: <SendIcon size={32} />,
  },
  {
    title: "Webhook Delivered",
    description: "HTTP POST to your endpoint with signed event payload.",
    icon: <MailIcon size={32} />,
  },
  {
    title: "Your Service Responds",
    description:
      "Process event: invalidate cache, revoke session, reevaluate policy.",
    icon: <DeviceGearIcon size={32} />,
  },
  {
    title: "Action Enforced",
    description: "Application implements decision. Event is audited.",
    icon: <CheckCircleIcon size={32} />,
  },
];

export default function EventsSection() {
  return (
    <Section>
      <SectionHeader title="Events, signals & webhooks" />

      <ol className="grid w-full grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {flow.map((step) => (
          <li
            key={step.title}
            className="flex flex-col items-center gap-3 rounded-xl bg-white-solid p-7 text-center outline-1 -outline-offset-1 outline-grey-91"
          >
            {/* White cutout so the envelope flap shows on a white card */}
            <span className="text-cyan-49 [--icon-cutout:#ffffff]">
              {step.icon}
            </span>
            <h3 className="font-manrope text-base font-bold text-azure-9">
              {step.title}
            </h3>
            <p className="max-w-[200px] font-manrope text-base font-normal leading-[26px] text-azure-47">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
