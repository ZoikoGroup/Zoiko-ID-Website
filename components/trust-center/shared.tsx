import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  tone?: "white" | "grey";
  className?: string;
  children: ReactNode;
};

export function Section({ id, tone = "white", className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-28 xl:px-40 ${
        tone === "grey" ? "bg-grey-96" : "bg-white-solid"
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-[1120px]">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  title: ReactNode;
  description?: ReactNode;
  className?: string;
};

export function SectionHeading({ title, description, className = "" }: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <h2 className="font-dm-serif text-[34px] font-normal leading-[1.15] text-[#0F172A] sm:text-[42px] lg:text-5xl lg:leading-[57.9px]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-[860px] font-manrope text-base leading-[26px] text-azure-47">
          {description}
        </p>
      ) : null}
    </div>
  );
}

type IconBadgeProps = {
  icon: LucideIcon;
  size?: "md" | "lg";
  tone?: "light" | "dark";
};

export function IconBadge({ icon: Icon, size = "md", tone = "light" }: IconBadgeProps) {
  const box = size === "lg" ? "size-12 rounded-2xl" : "size-10 rounded-xl";
  const iconSize = size === "lg" ? "size-6" : "size-5";
  const colors = tone === "dark" ? "bg-[#0E3A4F] text-cyan-49" : "bg-[#E0F2FE] text-[#0E7490]";

  return (
    <div className={`flex shrink-0 items-center justify-center ${box} ${colors}`}>
      <Icon className={iconSize} strokeWidth={1.75} aria-hidden="true" />
    </div>
  );
}

type StatusPillProps = {
  children: ReactNode;
  variant?: "neutral" | "designed" | "pending" | "withdrawn" | "superseded";
  className?: string;
};

const pillVariants: Record<NonNullable<StatusPillProps["variant"]>, string> = {
  neutral: "rounded-lg bg-grey-96 text-[#0F172A]",
  designed: "rounded-full bg-[#DBEAFE] text-[#1D4ED8]",
  pending: "rounded-full bg-[#FEF3C7] text-[#92400E]",
  withdrawn: "rounded-full bg-[#FEE2E2] text-[#B91C1C]",
  superseded: "rounded-full bg-[#EDE9FE] text-[#6D28D9]",
};

export function StatusPill({ children, variant = "neutral", className = "" }: StatusPillProps) {
  return (
    <span
      className={`inline-flex w-fit items-center px-2.5 py-[5px] font-manrope text-xs font-extrabold uppercase leading-4 tracking-wide ${pillVariants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
