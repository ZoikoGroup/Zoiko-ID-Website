import type { ReactNode } from "react";

import { IconTile } from "@/components/home/shared";

export type CenteredCard = {
  title: string;
  description: string;
  icon: ReactNode;
};

// Four-across grid of cards with a centred icon tile, title and description
export default function CenteredCardGrid({
  items,
  tileClass = "size-14",
}: {
  items: CenteredCard[];
  tileClass?: string;
}) {
  return (
    <ul className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <li
          key={item.title}
          className="flex flex-col items-center gap-3 rounded-xl bg-white-solid p-7 text-center outline-1 -outline-offset-1 outline-grey-91"
        >
          <IconTile className={tileClass}>{item.icon}</IconTile>
          <h3 className="pt-1 font-manrope text-base font-bold text-azure-9">
            {item.title}
          </h3>
          <p className="max-w-[220px] font-manrope text-sm font-normal leading-6 text-azure-47">
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
