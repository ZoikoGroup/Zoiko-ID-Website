import Image from "next/image";
import type { ReactNode } from "react";
import { Section, SectionHeading } from "@/components/docs/shared";

type ImageTextSectionProps = {
  id?: string;
  tone?: "white" | "grey";
  title: string;
  description: string;
  image: { src: string; alt: string };
  imageSide?: "left" | "right";
  children?: ReactNode;
};

// Heading + paragraph beside a rounded 520x480 photo.
export default function ImageTextSection({
  id,
  tone = "white",
  title,
  description,
  image,
  imageSide = "right",
  children,
}: ImageTextSectionProps) {
  return (
    <Section id={id} tone={tone}>
      <div
        className={`flex flex-col items-center gap-12 lg:gap-20 ${
          imageSide === "left" ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <SectionHeading className="w-full lg:flex-1" title={title} description={description} />
        <div className="relative h-[320px] w-full overflow-hidden rounded-3xl sm:h-[400px] lg:h-[480px] lg:flex-1">
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 520px, 100vw" className="object-cover" />
        </div>
      </div>
      {children}
    </Section>
  );
}
