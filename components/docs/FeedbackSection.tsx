import Image from "next/image";
import { Section, SectionHeading } from "./shared";

export default function FeedbackSection() {
  return (
    <Section id="feedback">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
        <SectionHeading
          className="w-full lg:flex-1"
          title="Tell us if something is wrong"
          description="An optional reaction and issue report help us improve the guides. Feedback never includes your code, tokens or identifiers, and it is recorded without personal data."
        />

        <div className="relative h-[320px] w-full overflow-hidden rounded-3xl sm:h-[400px] lg:h-[460px] lg:flex-1">
          <Image
            src="/docs/Dashboard on a screen.png"
            alt="Colleague showing code on a tablet to a teammate"
            fill
            sizes="(min-width: 1024px) 520px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
