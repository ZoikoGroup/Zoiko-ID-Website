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
      className={`scroll-mt-24 border-b border-[#E2E8F0] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-28 xl:px-40 ${
        tone === "grey" ? "bg-[#F5F7FA]" : "bg-white-solid"
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
    <div className={`flex flex-col gap-3.5 ${className}`}>
      <h2 className="font-dm-serif text-[34px] font-normal leading-[1.15] text-[#0F172A] sm:text-[42px] lg:text-5xl lg:leading-[58px]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-[740px] font-manrope text-base leading-7 text-[#5B6B82] sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#E0F2FE] text-[#0E7490]">
      <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
    </div>
  );
}

type PillProps = {
  children: ReactNode;
  variant?: "pending" | "neutral";
};

export function Pill({ children, variant = "pending" }: PillProps) {
  const colors = variant === "pending" ? "bg-[#FEF3C7] text-[#92400E]" : "bg-[#E2E8F0] text-[#334155]";
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full px-3 py-1.5 font-manrope text-xs font-extrabold uppercase leading-5 tracking-wide ${colors}`}
    >
      {children}
    </span>
  );
}
