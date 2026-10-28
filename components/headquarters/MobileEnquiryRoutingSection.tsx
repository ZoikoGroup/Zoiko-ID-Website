import Image from "next/image";

type Route = {
  image: string;
  icon: string;
  title: string;
  body: React.ReactNode;
  alt: string;
};

const routes: Route[] = [
  {
    image: "/headquarters/mobile-route-documents.webp",
    icon: "/headquarters/mobile-icon-building-2.svg",
    title: "Corporate enquiries",
    body: "General questions about Zoiko Tech Inc.",
    alt: "Corporate documents on a desk",
  },
  {
    image: "/headquarters/mobile-route-laptop.webp",
    icon: "/headquarters/mobile-icon-doc.svg",
    title: "Media / Press",
    body: (
      <>
        Press and media enquiries, handled
        <br />
        separately.
      </>
    ),
    alt: "Laptop for press and media work",
  },
  {
    image: "/headquarters/mobile-route-meeting.webp",
    icon: "/headquarters/mobile-icon-send.svg",
    title: "Procurement / Enterprise",
    body: "Enterprise and procurement enquiries.",
    alt: "Enterprise meeting room",
  },
  {
    image: "/headquarters/mobile-route-lock.webp",
    icon: "/headquarters/mobile-icon-shield.svg",
    title: "Security contact",
    body: "Security concerns go here, not to this page.",
    alt: "Padlock representing security",
  },
];

function RouteCard({ route }: { route: Route }) {
  return (
    <li className="flex w-full flex-col overflow-clip rounded-[22px] border border-solid border-[#d9e1ec] bg-white">
      <div className="relative h-[180px] min-h-[180px] w-full shrink-0">
        <Image
          src={route.image}
          alt={route.alt}
          fill
          sizes="(max-width: 560px) 100vw, 560px"
          className="object-cover"
        />
      </div>
      <div className="flex w-full flex-1 flex-col items-start gap-[9px] p-[26px]">
        <div className="flex h-[51px] w-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8] pb-px">
          <Image src={route.icon} width={24} height={24} alt="" />
        </div>
        <h3 className="m-0 h-[31.19px] w-full whitespace-nowrap font-manrope text-[18px] font-bold leading-[25.2px] text-[#0b1b33]">
          {route.title}
        </h3>
        <p className="m-0 w-full pb-[0.8px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">
          {route.body}
        </p>
        <div className="mt-auto flex w-full flex-col items-start justify-end pt-px">
          <span className="rounded-[999px] bg-[#fef3c7] px-[12px] pb-[5.89px] pt-[5.5px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#92400e]">
            Route pending
          </span>
        </div>
      </div>
    </li>
  );
}

export default function MobileEnquiryRoutingSection() {
  return (
    <section className="lg:hidden flex w-full flex-col border-b border-solid border-[#d9e1ec] bg-[#f4f6fa] pb-[60px] pt-[67.31px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[16.8px] px-[22px]">
        <div className="flex items-center gap-[12px]">
          <div className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
          <p className="m-0 whitespace-nowrap font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6]">
            10 · Enquiry routing
          </p>
        </div>
        <h2 className="m-0 w-full pb-[0.745px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33]">
          Choose the team that fits
          <br />
          your question
        </h2>
        <p className="m-0 w-full max-w-[680px] pt-[1.19px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
          This page has no general enquiry form.
          <br />
          Each route goes to a named destination
          <br />
          that owns its topic.
        </p>
        <ul className="m-0 flex w-full list-none flex-col items-stretch gap-[40px] p-0 pt-[27.21px]">
          {routes.map((route) => (
            <RouteCard key={route.title} route={route} />
          ))}
        </ul>
      </div>
    </section>
  );
}
