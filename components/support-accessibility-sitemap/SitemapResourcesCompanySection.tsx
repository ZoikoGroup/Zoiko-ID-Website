import { SITEMAP_CATEGORIES } from "./sitemapData";
import SitemapCard from "./SitemapCard";

interface SitemapSectionProps {
  searchQuery?: string;
}

export default function SitemapResourcesCompanySection({
  searchQuery = "",
}: SitemapSectionProps) {
  const categories = SITEMAP_CATEGORIES.filter((cat) => cat.sectionNumber === 3);

  return (
    <section className="border-b border-[#D9E1EC] bg-[#F3F6FA] px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto w-full max-w-[1120px]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <SitemapCard
              key={category.id}
              category={category}
              searchQuery={searchQuery}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
