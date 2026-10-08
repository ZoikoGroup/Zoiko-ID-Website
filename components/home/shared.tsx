import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export const primaryButtonClass =
  "inline-flex min-h-11 items-center justify-center rounded-lg bg-linear-73 from-azure-53 to-azure-48 px-6 py-3 text-center font-manrope text-base font-semibold leading-5 text-white-solid shadow-[0px_8px_20px_0px_rgba(37,99,235,0.30)] transition-opacity duration-200 hover:opacity-90";

export const secondaryButtonClass =
  "inline-flex min-h-11 items-center justify-center rounded-lg bg-azure-9 px-6 py-3 text-center font-manrope text-base font-semibold leading-5 text-white-solid outline-1 -outline-offset-1 outline-white-solid/20 transition-colors duration-200 hover:bg-azure-13";

const backgrounds = {
  white: "bg-white-solid",
  grey: "bg-grey-98",
  none: "",
};

export function Section({
  id,
  background = "white",
  className = "",
  children,
}: {
  id?: string;
  background?: keyof typeof backgrounds;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`px-6 py-20 sm:px-10 lg:py-28 ${backgrounds[background]} ${className}`}
    >
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-14 lg:gap-20">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  dark = false,
  widthClass = "max-w-[700px]",
}: {
  title: string;
  subtitle?: string;
  dark?: boolean;
  widthClass?: string;
}) {
  return (
    <div
      className={`flex w-full flex-col items-center gap-5 text-center ${widthClass}`}
    >
      <h2
        className={`font-dm-serif text-4xl font-normal leading-tight sm:text-5xl sm:leading-[59.8px] ${
          dark ? "text-white-solid" : "text-azure-9"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-manrope text-base font-normal leading-7 ${
            dark ? "text-white-solid" : "text-azure-35"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function IconTile({
  children,
  className = "size-14",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-cyan-49/15 to-azure-53/15 text-cyan-49 ${className}`}
    >
      {children}
    </div>
  );
}

export type CardItem = {
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
};

// White card used by the capability, actor, compliance and resource grids
export function FeatureCard({ item }: { item: CardItem }) {
  return (
    <article className="flex h-full flex-col items-start gap-4 rounded-2xl bg-white-solid p-8 outline-1 -outline-offset-1 outline-grey-91 sm:p-10">
      {item.image && (
        <div className="relative mb-2 aspect-[3/2] w-full overflow-hidden rounded-xl">
          <Image
            src={item.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 270px, (min-width: 640px) 45vw, 90vw"
            className="object-cover"
          />
        </div>
      )}

      {item.icon && <IconTile>{item.icon}</IconTile>}

      <h3 className="pb-2 font-dm-serif text-lg font-normal leading-6 text-azure-9">
        {item.title}
      </h3>

      <p className="font-manrope text-sm font-normal leading-6 text-azure-35">
        {item.description}
      </p>
    </article>
  );
}

export function CardGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <FeatureCard key={item.title} item={item} />
      ))}
    </div>
  );
}

export function ButtonLink({
  href = "#",
  variant = "primary",
  children,
}: {
  href?: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={
        variant === "primary" ? primaryButtonClass : secondaryButtonClass
      }
    >
      {children}
    </Link>
  );
}
