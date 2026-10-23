import Link from "next/link";
import type { SitemapCategory } from "./sitemapData";

interface SitemapCardProps {
  category: SitemapCategory;
  searchQuery?: string;
}

export default function SitemapCard({
  category,
  searchQuery = "",
}: SitemapCardProps) {
  const query = searchQuery.trim().toLowerCase();

  return (
    <article
      id={category.id}
      className="flex flex-col rounded-[18px] border border-[#D9E1EC] bg-white-solid p-6 sm:p-[34px] shadow-[0px_4px_12px_0px_rgba(11,27,51,0.02)] transition-all duration-200 hover:shadow-[0px_8px_24px_0px_rgba(11,27,51,0.05)]"
    >
      <h2 className="font-dm-serif text-2xl font-normal leading-tight text-[#0B1B33] pb-2 sm:leading-[49.28px]">
        {category.title}
      </h2>

      <ul className="flex flex-col">
        {category.items.map((item, index) => {
          const isLast = index === category.items.length - 1;
          const isMatched =
            query.length > 0 &&
            (item.name.toLowerCase().includes(query) ||
              category.title.toLowerCase().includes(query) ||
              (item.description && item.description.toLowerCase().includes(query)));

          return (
            <li
              key={item.name}
              className={`flex flex-wrap items-center justify-between gap-3 py-3.5 transition-colors ${
                !isLast ? "border-b border-[#D9E1EC]" : "pb-0"
              } ${isMatched ? "rounded-lg bg-blue-50/70 px-2 -mx-2" : ""}`}
            >
              {item.href && item.href !== "#" ? (
                <Link
                  href={item.href}
                  className="font-manrope text-base font-bold leading-6 text-[#0B1B33] transition-colors duration-150 hover:text-[#2563EB]"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="font-manrope text-base font-bold leading-6 text-[#0B1B33]">
                  {item.name}
                </span>
              )}

              {item.isSpecialBadge ? (
                <span className="inline-flex items-center rounded-full bg-[#E8ECF3] px-3 py-1 font-manrope text-xs font-bold leading-[19.2px] text-[#334155]">
                  {item.badge}
                </span>
              ) : (
                <span className="inline-flex items-center rounded-full bg-[#FEF3C7] px-3 py-1 font-manrope text-xs font-bold leading-[19.2px] text-[#92400E]">
                  {item.badge}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </article>
  );
}
