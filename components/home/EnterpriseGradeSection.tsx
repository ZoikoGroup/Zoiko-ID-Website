import Image from "next/image";

import { ButtonLink } from "./shared";

export default function EnterpriseGradeSection() {
  return (
    <section className="bg-white-solid px-6 py-16 sm:px-10 lg:px-24">
      <div className="mx-auto flex w-full max-w-[1248px] flex-col items-center gap-10 rounded-2xl bg-slate-900 p-8 sm:p-12 lg:flex-row lg:gap-16 lg:p-16">
        <div className="flex flex-1 flex-col items-start gap-5">
          <h2 className="max-w-[500px] font-dm-serif text-4xl font-normal leading-tight text-white-solid sm:text-5xl sm:leading-[59.8px]">
            Enterprise-grade identity for all
          </h2>

          <p className="max-w-[550px] pt-1 font-manrope text-base font-normal leading-7 text-grey-98">
            Zoiko iD is programmable identity infrastructure that helps
            applications authenticate people and workloads, verify
            credentials, authorize actions, govern delegated authority, respond
            to trust signals, and preserve audit-ready evidence.
          </p>

          <p className="max-w-[550px] font-manrope text-base font-normal leading-7 text-grey-98">
            Unified framework for humans, organizations, services, machines,
            and AI agents. One trust model across your entire infrastructure.
          </p>

          <ButtonLink>Explore now</ButtonLink>
        </div>

        <div className="relative aspect-[528/475] w-full overflow-hidden rounded-3xl shadow-[0px_12px_32px_0px_rgba(0,0,0,0.12)] lg:flex-1">
          <Image
            src="/home/enterprise-grade-team.webp"
            alt="Smiling team standing together in a bright office"
            fill
            sizes="(min-width: 1024px) 528px, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
