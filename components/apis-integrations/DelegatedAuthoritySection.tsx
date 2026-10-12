import Image from "next/image";

import { CheckCircleIcon } from "@/components/home/icons";
import { Section, SectionHeader } from "@/components/home/shared";

const checks = [
  { title: "Actor Verification", description: "Who is requesting access?" },
  { title: "Authority Check", description: "Do they have the right to act?" },
  {
    title: "Resource & Action",
    description: "What resource, for what purpose?",
  },
  {
    title: "Scope & Time",
    description: "For how long, under what conditions?",
  },
  {
    title: "Policy Evaluation",
    description: "Apply your custom policies and rules",
  },
];

export default function DelegatedAuthoritySection() {
  return (
    <Section>
      <SectionHeader
        title="Delegated authority & decisions"
        widthClass="max-w-[760px]"
      />

      <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:gap-14">
        <div className="relative aspect-[530/400] w-full overflow-hidden rounded-xl lg:flex-1">
          <Image
            src="/apis-integrations/delegated-authority.webp"
            alt="Colleagues reviewing documents around a meeting table"
            fill
            sizes="(min-width: 1024px) 530px, 90vw"
            className="object-cover"
          />
        </div>

        <div className="flex w-full flex-1 flex-col items-start gap-5">
          <h3 className="font-dm-serif text-2xl font-normal text-azure-9">
            From identity to authorized action
          </h3>

          <p className="font-manrope text-base font-normal leading-7 text-azure-35">
            Authorization goes beyond authentication. Zoiko iD evaluates:
          </p>

          <ul className="flex flex-col gap-4 pt-1">
            {checks.map((check) => (
              <li key={check.title} className="flex items-start gap-3">
                <span className="shrink-0 pt-0.5 text-cyan-49">
                  <CheckCircleIcon size={24} />
                </span>
                <div className="flex flex-col">
                  <span className="font-manrope text-base font-semibold leading-7 text-azure-35">
                    {check.title}
                  </span>
                  <span className="font-manrope text-sm font-normal leading-6 text-azure-47">
                    {check.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
