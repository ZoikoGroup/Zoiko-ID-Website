import Image from "next/image";
import { Pill, Section, SectionHeading } from "./shared";

export default function SandboxSection() {
  return (
    <Section id="sandbox">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
        <div className="relative h-[280px] w-full overflow-hidden rounded-3xl sm:h-[340px] lg:h-[375px] lg:flex-1">
          <Image
            src="/docs/Server racks in a data centre.png"
            alt="Person typing on a laptop at a white desk"
            fill
            sizes="(min-width: 1024px) 520px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex w-full flex-col gap-4 lg:flex-1">
          <SectionHeading
            title="No sandbox is offered right now"
            description="A sandbox is provisioned only where you are permitted and it is operationally approved. When that is true, this page will say so and link to the setup steps."
          />
          <Pill>Sandbox not provisioned for public use</Pill>
        </div>
      </div>
    </Section>
  );
}
