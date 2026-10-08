import Image from "next/image";

import { SectionHeader } from "@/components/home/shared";

const statements = [
  {
    title: "Vision",
    text: "A digital world where every important action can be trusted because identity, authority, and evidence travel together.",
  },
  {
    title: "Mission",
    text: "Build programmable trust infrastructure that enables people, organizations, machines, and AI agents to prove who or what they are, what they are authorized to do, and why a decision can be trusted.",
  },
];

export default function VisionMissionSection() {
  return (
    <section className="relative overflow-hidden bg-azure-9 px-6 py-20 sm:px-10 lg:py-28">
      <Image
        src="/about-us/vision-mission-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col items-center gap-14">
        <SectionHeader dark title="Vision & Mission" />

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          {statements.map((statement) => (
            <article
              key={statement.title}
              className="flex flex-col gap-2.5 rounded-2xl bg-white-solid px-8 pb-14 pt-10 outline-1 -outline-offset-1 outline-grey-91 sm:px-10"
            >
              <h3 className="text-center font-dm-serif text-2xl font-normal text-azure-9">
                {statement.title}
              </h3>
              <p className="font-manrope text-base font-normal leading-7 text-azure-35">
                {statement.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
