import Image from "next/image";
import { Section, SectionHeading } from "./shared";

export default function ReviewedSamplesSection() {
  return (
    <Section id="samples" tone="grey">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        <div className="flex w-full flex-col gap-10 lg:w-[551px] lg:shrink-0 lg:gap-20">
          <SectionHeading
            title="Reviewed samples only"
            description="Code samples appear here only after an engineer has reviewed them. Every sample uses placeholder values, never real secrets, and includes a copy action."
          />

          <pre
            aria-label="Layout example, not a runnable sample"
            className="overflow-x-auto rounded-2xl bg-[#0F172A] px-7 pb-7 pt-6 font-mono text-sm leading-6"
          >
            <code>
              <span className="text-amber-300">{"// Layout example only. Not a runnable sample."}</span>
              {"\n"}
              <span className="text-sky-300">sample.status</span>
              <span className="text-[#CBD5E1]">{' = "not published"'}</span>
              {"\n"}
              <span className="text-sky-300">sample.secrets</span>
              <span className="text-[#CBD5E1]">{' = "placeholders only"'}</span>
            </code>
          </pre>
        </div>

        <div className="relative h-[320px] w-full overflow-hidden rounded-3xl sm:h-[400px] lg:h-[460px] lg:flex-1">
          <Image
            src="/docs/Code on a screen.png"
            alt="Developer reviewing a printed sample at her desk"
            fill
            sizes="(min-width: 1024px) 505px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
