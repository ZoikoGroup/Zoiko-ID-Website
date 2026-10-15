export default function WebhooksDirectAnswerSection() {
  const cards = [
    {
      number: "01",
      title: "Notifications, not reads",
      body: "A notification says something changed. Reading current state is a separate API call.",
    },
    {
      number: "02",
      title: "Not an authorization decision",
      body: "Receiving an event never replaces a current, authoritative policy check.",
    },
    {
      number: "03",
      title: "Evidence stays with its owner",
      body: "The authoritative service holds the audit record. A notification refers to it.",
    },
  ];

  return (
    <section className="bg-grey-96 px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-14 lg:gap-16">
        {/* Top 2-col header */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h2 className="font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl md:text-[46px] md:leading-[1.15]">
              What are webhooks and events in Zoiko iD?
            </h2>
          </div>
          <div className="border-l-[3px] border-cyan-49 pl-6 sm:pl-8 lg:col-span-7">
            <p className="font-manrope text-lg font-normal leading-relaxed text-azure-9 sm:text-xl sm:leading-8">
              Webhooks and events are a proposed integration pattern for informing
              subscribed systems about relevant identity, authority and trust
              changes. A notification is not proof that access should be granted:
              consequential actions still require current policy and authority
              checks, and the underlying audit evidence belongs to the
              authoritative service.
            </p>
          </div>
        </div>

        {/* Bottom 3-card grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.number}
              className="flex flex-col gap-3 rounded-2xl border border-grey-91 bg-white-solid p-7 shadow-xs transition-shadow duration-200 hover:shadow-md sm:p-8"
            >
              <span className="font-dm-serif text-4xl font-normal text-cyan-49 sm:text-[44px]">
                {card.number}
              </span>
              <h3 className="font-manrope text-base font-bold text-azure-9 sm:text-[17px]">
                {card.title}
              </h3>
              <p className="font-manrope text-sm font-normal leading-relaxed text-azure-47 sm:text-[15px]">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
