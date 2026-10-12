import Image from "next/image";
import type { ReactNode } from "react";

import { CheckCircleIcon } from "@/components/home/icons";

// Card with a photo across the top and free-form content below
export function MediaCard({
  image,
  sizes,
  children,
}: {
  image: string;
  sizes: string;
  children: ReactNode;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white-solid outline-1 -outline-offset-1 outline-grey-91">
      <div className="relative h-56 w-full shrink-0">
        <Image src={image} alt="" fill sizes={sizes} className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col items-start p-8">{children}</div>
    </article>
  );
}

// Solid gradient tile holding a white icon. --icon-cutout is the colour icons
// use for details drawn "through" their white shape (see icons.tsx).
export function SolidIconTile({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 flex size-16 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-cyan-49 to-azure-53 text-white-solid [--icon-cutout:#2f8fe6]">
      {children}
    </div>
  );
}

export function GreenCheck({ size = 16 }: { size?: number }) {
  return (
    <span className="shrink-0 text-[#16A34A]">
      <CheckCircleIcon size={size} />
    </span>
  );
}

export const cardTitleClass =
  "pb-3 font-dm-serif text-xl font-normal text-azure-9";

export const cardTextClass =
  "font-manrope text-base font-normal leading-7 text-azure-47";
