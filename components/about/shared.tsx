import Link from "next/link";
import type { ReactNode } from "react";

import { ArrowRightIcon, PhoneIcon } from "@/components/home/icons";

const solidClass =
  "inline-flex items-center gap-2 rounded-md bg-azure-53 px-6 py-3 font-manrope text-base font-semibold text-white-solid transition-colors duration-200 hover:bg-azure-48";

const outlineClass =
  "inline-flex items-center gap-2 rounded-md px-6 py-3 font-manrope text-base font-semibold text-white-solid outline-1 -outline-offset-1 outline-white-solid transition-colors duration-200 hover:bg-white-solid/10";

// "Explore the platform" + "Talk to an expert"; `expertFirst` swaps which is solid
export function CtaButtons({ expertFirst = false }: { expertFirst?: boolean }) {
  const explore = (
    <Link
      key="explore"
      href="#"
      className={expertFirst ? outlineClass : solidClass}
    >
      <ArrowRightIcon size={16} />
      Explore the platform
    </Link>
  );
  const expert = (
    <Link key="expert" href="#" className={expertFirst ? solidClass : outlineClass}>
      <PhoneIcon size={16} />
      Talk to an expert
    </Link>
  );

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
      {expertFirst ? [expert, explore] : [explore, expert]}
    </div>
  );
}

export function NumberBadge({
  number,
  className = "size-10 rounded-md",
}: {
  number: number;
  className?: string;
}) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center bg-linear-to-br from-cyan-49 to-azure-53 font-manrope text-base font-bold text-white-solid ${className}`}
    >
      {number}
    </span>
  );
}

export function BulletList({
  items,
  className = "gap-3",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul
      className={`flex list-disc flex-col pl-6 font-manrope text-base font-normal leading-7 text-azure-35 marker:text-azure-35 ${className}`}
    >
      {items.map((item) => (
        <li key={item} className="pl-2">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function SplitRow({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:gap-12">
      {children}
    </div>
  );
}
