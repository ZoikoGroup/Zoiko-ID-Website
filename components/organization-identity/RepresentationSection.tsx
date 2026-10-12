import Image from "next/image";

import { Section, SectionHeader } from "@/components/home/shared";

import { GreenCheck } from "./shared";

const roles = [
  {
    title: "Officer/Executive",
    description: "Authorized to make certain decisions on org's behalf",
  },
  {
    title: "Domain Admin",
    description: "Can add/remove members, manage accounts for this org",
  },
  {
    title: "Delegate",
    description: "Granted specific rights by an officer, time-limited",
  },
];

export default function RepresentationSection() {
  return (
    <Section background="grey">
      <SectionHeader title="Representation & roles" />

      <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:gap-14">
        <div className="relative aspect-[530/400] w-full overflow-hidden rounded-xl lg:flex-1">
          <Image
            src="/organization-identity/representation-roles.webp"
            alt="Five colleagues standing in a row with arms crossed"
            fill
            sizes="(min-width: 1024px) 530px, 90vw"
            className="object-cover"
          />
        </div>

        <div className="flex w-full flex-1 flex-col items-start gap-5">
          <h3 className="font-dm-serif text-2xl font-normal text-azure-9">
            Who can act on behalf?
          </h3>

          <p className="max-w-[460px] font-manrope text-base font-normal leading-7 text-azure-35">
            A job title, email domain, or admin role never automatically
            establish authority. Representation is explicit and bounded:
          </p>

          <ul className="flex w-full flex-col gap-4 rounded-xl bg-white-solid px-6 pb-6 pt-7 outline-1 -outline-offset-1 outline-grey-91">
            {roles.map((role) => (
              <li key={role.title} className="flex items-start gap-3">
                <span className="pt-1">
                  <GreenCheck size={20} />
                </span>
                <div className="flex flex-col">
                  <span className="font-manrope text-base font-semibold leading-7 text-azure-35">
                    {role.title}
                  </span>
                  <span className="font-manrope text-sm font-normal leading-6 text-azure-47">
                    {role.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <p className="font-manrope text-base font-normal leading-7 text-azure-47">
            All relationships are time-bound and can be revoked at any time.
          </p>
        </div>
      </div>
    </Section>
  );
}
