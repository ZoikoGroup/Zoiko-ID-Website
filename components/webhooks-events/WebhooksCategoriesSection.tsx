import Image from "next/image";

const categories = [
  {
    image: "/webhooks-events/category-identity-lifecycle.webp",
    alt: "Identity verification and lifecycle representation",
    title: "Identity lifecycle",
    description: "Changes to an actor identity or a verified relationship.",
  },
  {
    image: "/webhooks-events/category-delegated-authority.webp",
    alt: "Delegated authority documents and signatures",
    title: "Delegated authority",
    description: "Changes in representation, scope, mandate or expiry.",
  },
  {
    image: "/webhooks-events/category-policy-outcomes.webp",
    alt: "Policy outcomes evaluation and compliance check",
    title: "Policy outcomes",
    description: "Relevant controlled decisions. Not a replacement for a live check.",
  },
  {
    image: "/webhooks-events/category-trust-signals.webp",
    alt: "Trust signals and real-time risk indicators",
    title: "Trust signals",
    description: "Context changes used to re-evaluate an action before it proceeds.",
  },
  {
    image: "/webhooks-events/category-revocation.webp",
    alt: "Revocation protocol and credential expiration",
    title: "Revocation",
    description: "Withdrawal or expiry of scoped authority or access. Treat it as a reason to re-check.",
  },
  {
    image: "/webhooks-events/category-evidence-reference.webp",
    alt: "Evidence records and immutable decision logs",
    title: "Evidence reference",
    description: "Pointers to source-governed decision records held by the owning service.",
  },
];

export default function WebhooksCategoriesSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-12 sm:gap-14">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl md:text-[46px]">
            Six conceptual categories
          </h2>
          <p className="max-w-[760px] font-manrope text-base font-normal leading-relaxed text-azure-47">
            Each category describes a kind of change. None is a list of event names.
            Exact event types are published only after the approved Event Registry
            confirms them.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <article
              key={cat.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-grey-91 bg-white-solid p-6 shadow-xs transition-shadow duration-200 hover:shadow-md sm:p-7"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src={cat.image}
                  alt={cat.alt}
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>

              <div className="pt-5">
                <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 font-manrope text-[11px] font-extrabold uppercase tracking-wider text-amber-800">
                  Conceptual
                </span>
              </div>

              <h3 className="pt-3 font-dm-serif text-2xl font-normal text-azure-9">
                {cat.title}
              </h3>

              <p className="pt-2 font-manrope text-sm font-normal leading-relaxed text-azure-47 sm:text-[15px]">
                {cat.description}
              </p>

              <div className="mt-6 rounded-lg bg-amber-50/80 p-3.5 font-manrope text-[13px] font-medium leading-relaxed text-amber-800">
                Conceptual only until approved Event Registry confirms exact event
                types.
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
