import Image from "next/image";
import { Bot, FileText, KeyRound, RotateCw, User, type LucideIcon } from "lucide-react";

import { IconBadge, Section, SectionHeading, StatusPill } from "./shared";

type Category = {
  title: string;
  description: string;
  icon: LucideIcon;
  status: "designed" | "pending";
};

const categories: Category[] = [
  { title: "Authentication", description: "Verifying who is acting.", icon: User, status: "designed" },
  { title: "Delegated controls", description: "Bounded grants with expiry and revocation.", icon: KeyRound, status: "designed" },
  { title: "Machine and agent security", description: "Sponsors and mandates for non-human principals.", icon: Bot, status: "designed" },
  { title: "Revocation", description: "Withdrawal of authority; timing confirmed per integration.", icon: RotateCw, status: "pending" },
];

const loggingCategory: Category = {
  title: "Logging and evidence",
  description: "Decision context for review, access-controlled.",
  icon: FileText,
  status: "designed",
};

function CategoryCard({ category }: { category: Category }) {
  return (
    <article className="flex items-start gap-4 rounded-2xl border border-grey-91 bg-white-solid p-5">
      <IconBadge icon={category.icon} />
      <div className="flex flex-col gap-1.5">
        <h3 className="font-manrope text-base font-bold leading-7 text-[#0F172A]">{category.title}</h3>
        <p className="pb-1 font-manrope text-sm leading-6 text-azure-47">{category.description}</p>
        <StatusPill variant={category.status}>
          {category.status === "designed" ? "Designed" : "Pending verification"}
        </StatusPill>
      </div>
    </article>
  );
}

export default function ArchitectureCategoriesSection() {
  return (
    <Section tone="grey">
      <div className="grid grid-cols-1 gap-9 lg:grid-cols-2 lg:items-end xl:grid-cols-[550px_1fr]">
        <div className="flex flex-col gap-9">
          <SectionHeading
            title="Architecture categories, with their status"
            description="Each category is a design area. Claims about implementation appear only when verified and approved."
          />
          <div className="flex flex-col gap-2">
            {categories.map((category) => (
              <CategoryCard key={category.title} category={category} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-9">
          <div className="relative h-[280px] w-full overflow-hidden rounded-[20px] sm:h-[360px] lg:h-[411px]">
            <Image
              src="/trust-center/architecture-team.webp"
              alt="Team reviewing architecture plans around a laptop"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <CategoryCard category={loggingCategory} />
        </div>
      </div>
    </Section>
  );
}
