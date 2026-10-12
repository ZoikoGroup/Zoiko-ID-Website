import Image from "next/image";

import {
  BracesIcon,
  CertificateIcon,
  LockOpenIcon,
  RobotIcon,
  ShieldCheckIcon,
  WebhookIcon,
} from "@/components/home/icons";
import { IconTile, SectionHeader } from "@/components/home/shared";

const paths = [
  {
    title: "Identity & Federation",
    description:
      "Connect existing IdP, receive authenticated identity context, verify claims.",
    icon: <LockOpenIcon size={32} />,
  },
  {
    title: "Authorization & Delegation",
    description:
      "Evaluate scoped authority, verify mandate, return access decisions.",
    icon: <ShieldCheckIcon size={32} />,
  },
  {
    title: "Credentials & Verification",
    description:
      "Issue, present, and verify cryptographic credentials with proof of claims.",
    icon: <CertificateIcon size={32} />,
  },
  {
    title: "Machine & Agent Identity",
    description:
      "Authenticate services, workloads, and AI agents with bounded permissions.",
    icon: <RobotIcon size={32} />,
  },
  {
    title: "Events & Signals",
    description:
      "Subscribe to trust events, re-evaluate policy on changes, automate responses.",
    icon: <WebhookIcon size={32} />,
  },
  {
    title: "SDKs & Developer Tools",
    description:
      "Use pre-built libraries for Node.js, Python, Go, Java, C#, Rust and more.",
    icon: <BracesIcon size={32} />,
  },
];

export default function IntegrationPathSection() {
  return (
    <section className="relative overflow-hidden bg-azure-9 px-6 py-20 sm:px-10 lg:py-28">
      <Image
        src="/apis-integrations/integration-path-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col items-center gap-14">
        <SectionHeader dark title="Choose your integration path" />

        <ul className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {paths.map((path) => (
            <li
              key={path.title}
              className="flex flex-col items-center gap-3 rounded-xl bg-white-solid p-7 text-center outline-1 -outline-offset-1 outline-grey-91"
            >
              <IconTile className="size-16">{path.icon}</IconTile>
              <h3 className="pt-1 font-manrope text-base font-bold text-azure-9">
                {path.title}
              </h3>
              <p className="max-w-[280px] font-manrope text-sm font-normal leading-6 text-azure-47">
                {path.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
