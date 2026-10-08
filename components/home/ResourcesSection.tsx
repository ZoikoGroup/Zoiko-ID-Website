import { CardGrid, Section, SectionHeader, type CardItem } from "./shared";

const resources: CardItem[] = [
  {
    title: "API Documentation",
    description:
      "Comprehensive reference with code examples for all endpoints and SDKs.",
    image: "/home/api-documentation.webp",
  },
  {
    title: "Implementation Guide",
    description:
      "Step-by-step guide to integrate with your existing infrastructure.",
    image: "/home/implementation-guide.webp",
  },
  {
    title: "Training Programs",
    description:
      "Online courses and certification for architects and engineers.",
    image: "/home/training-programs.webp",
  },
  {
    title: "Code Repository",
    description: "SDKs, examples, and templates ready to use on GitHub.",
    image: "/home/code-repository.webp",
  },
  {
    title: "Community Forum",
    description:
      "Connect with developers, share best practices, and get support.",
    image: "/home/community-forum.webp",
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step walkthroughs for common use cases and features.",
    image: "/home/video-tutorials.webp",
  },
];

export default function ResourcesSection() {
  return (
    <Section background="grey">
      <SectionHeader
        title="Resources & learning center"
        subtitle="Everything you need to succeed with Zoiko iD"
      />
      <CardGrid items={resources} />
    </Section>
  );
}
