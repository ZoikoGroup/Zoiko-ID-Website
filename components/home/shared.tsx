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
  slate: "bg-grey-96",
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

// Tinted, outlined card with a centred heading and body copy ("What is …?")
export function CalloutSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-white-solid px-6 py-12 sm:px-10 lg:px-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8 rounded-2xl bg-cyan-500/5 px-6 pb-12 pt-10 outline-1 -outline-offset-1 outline-cyan-500/40 sm:px-8 lg:min-h-96 lg:justify-center lg:gap-10">
        <h2 className="text-balance text-center font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl sm:leading-[1.2]">
          {title}
        </h2>

        <div className="flex max-w-[860px] flex-col gap-3.5 text-center font-manrope text-base font-normal leading-7 text-azure-35">
          {children}
        </div>
      </div>
    </section>
  );
}

// Hairline between sections that fades out at both edges
export function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="h-px w-full bg-linear-to-r from-grey-91/0 via-grey-91 to-grey-91/0"
    />
  );
}

export type IconRowItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

// Grid of cards with the icon tile on the left and text on the right
export function IconRowCardGrid({ items }: { items: IconRowItem[] }) {
  return (
    <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <li
          key={item.title}
          className="flex items-start gap-5 rounded-xl bg-white-solid p-7 outline-1 -outline-offset-1 outline-grey-91"
        >
          <IconTile className="size-14 rounded-lg">{item.icon}</IconTile>
          <div className="flex flex-col gap-3">
            <h3 className="font-manrope text-base font-bold text-azure-9">
              {item.title}
            </h3>
            <p className="font-manrope text-base font-normal leading-7 text-azure-47">
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
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
