import Image from "next/image";
import Link from "next/link";

const paths = [
  {
    title: "For Product & Security Teams",
    description:
      "Understand identity, authentication, authorization, and audit requirements. Design the access flow with your architecture and compliance constraints.",
    image: "/customer-user-access/product-security-teams.webp",
    ctaText: "Talk to identity expert",
    ctaHref: "#final-cta",
    icon: "/customer-user-access/icons/action-expert.svg",
  },
  {
    title: "For Builders & Engineers",
    description:
      "Dive into APIs, SDKs, and integration patterns. Start with API reference docs or a sandbox environment for hands-on exploration.",
    image: "/customer-user-access/builders-engineers.webp",
    ctaText: "View documentation",
    ctaHref: "/apis-integrations",
    icon: "/customer-user-access/icons/action-docs.svg",
  },
];

export default function DeveloperEnterprisePathsSection() {
  return (
    <section className="bg-grey-96 px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-[60px]">
        <h2 className="text-center font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl lg:text-[52px] lg:leading-[59.8px]">
          Developer &amp; enterprise paths
        </h2>

        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-[60px]">
          {paths.map((path) => (
            <article
              key={path.title}
              className="flex flex-col overflow-hidden rounded-xl border border-grey-91 bg-white-solid shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <div className="relative h-[238px] w-full overflow-hidden bg-grey-91">
                <Image
                  src={path.image}
                  alt={path.title}
                  fill
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-8">
                <div className="flex flex-col gap-3 pb-6">
                  <h3 className="font-dm-serif text-2xl font-normal text-azure-9">
                    {path.title}
                  </h3>
                  <p className="font-manrope text-base font-normal leading-7 text-azure-47">
                    {path.description}
                  </p>
                </div>

                <Link
                  href={path.ctaHref}
                  className="inline-flex items-center justify-center gap-2.5 rounded-md bg-azure-48 px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid transition-colors duration-200 hover:bg-azure-53"
                >
                  <Image
                    src={path.icon}
                    alt=""
                    width={16}
                    height={16}
                    className="brightness-0 invert"
                  />
                  {path.ctaText}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
