import type { ReactNode } from "react";
import Image from "next/image";

type Route = {
  icon: string;
  title: string;
  minH: string;
  description: ReactNode;
  notFor: ReactNode;
  status: string;
};

const routes: Route[] = [
  {
    icon: "send",
    title: "Sales",
    minH: "min-h-[284.72px]",
    description: "Evaluating Zoiko iD for your organization.",
    notFor: "Booking demos or quoting prices here.",
    status: "Talk to Sales · pending",
  },
  {
    icon: "user",
    title: "Help & Support",
    minH: "min-h-[309.47px]",
    description: (
      <>
        Existing customers with an account or<br />
        service issue.
      </>
    ),
    notFor: "Security incidents or general enquiries.",
    status: "Route pending",
  },
  {
    icon: "code",
    title: "Developers",
    minH: "min-h-[284.72px]",
    description: "Integration questions and documentation.",
    notFor: "Public ticketing, which is not assumed to exist.",
    status: "Developer Overview · pending",
  },
  {
    icon: "shield",
    title: "Security",
    minH: "min-h-[332.56px]",
    description: (
      <>
        Security concerns and account-security<br />
        questions.
      </>
    ),
    notFor: (
      <>
        Vulnerability reports, which go to Responsible<br />
        Disclosure.
      </>
    ),
    status: "Security Contact · pending",
  },
  {
    icon: "lock",
    title: "Privacy",
    minH: "min-h-[332.56px]",
    description: (
      <>
        Questions about privacy practices and data<br />
        handling.
      </>
    ),
    notFor: (
      <>
        Data-rights requests, which need the approved<br />
        process.
      </>
    ),
    status: "Privacy Notice · pending",
  },
  {
    icon: "mail",
    title: "Press",
    minH: "min-h-[284.72px]",
    description: "Press enquiries, if a verified route exists.",
    notFor: "Customer support or sales.",
    status: "No mailbox published",
  },
  {
    icon: "flow",
    title: "Partnerships",
    minH: "min-h-[309.47px]",
    description: (
      <>
        Partnership enquiries, if a verified route<br />
        exists.
      </>
    ),
    notFor: "Sales of the platform.",
    status: "No mailbox published",
  },
  {
    icon: "layers",
    title: "General",
    minH: "min-h-[309.47px]",
    description: (
      <>
        Corporate questions that fit none of the<br />
        routes above.
      </>
    ),
    notFor: "Sensitive data, secrets or incidents.",
    status: "Form not yet approved",
  },
];

function RouteCard({ route }: { route: Route }) {
  return (
    <li
      className={`flex w-full flex-col rounded-[16px] border border-solid border-[#d9e1ec] bg-white px-[24px] pb-[23.44px] pt-[24px] ${route.minH}`}
    >
      <div className="flex h-[53px] w-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8]">
        <Image src={`/contact/mobile-icon-${route.icon}.svg`} width={24} height={24} alt="" />
      </div>
      <h3 className="mt-[11px] pb-[6px] font-manrope text-[18px] font-bold leading-[24.3px] text-[#0b1b33] [word-break:break-word]">
        {route.title}
      </h3>
      <p className="mt-[11px] whitespace-nowrap font-manrope text-[15px] font-normal leading-[24.75px] text-[#334155] [word-break:break-word]">
        {route.description}
      </p>
      <div className="mt-[12px] flex flex-col gap-[1px]">
        <p className="font-manrope text-[11px] font-bold uppercase leading-[18.15px] tracking-[1.1px] text-[#991b1b]">
          Not for
        </p>
        <p className="whitespace-nowrap font-manrope text-[14px] font-normal leading-[23.1px] text-[#991b1b] [word-break:break-word]">
          {route.notFor}
        </p>
      </div>
      <div className="mt-auto border-t border-solid border-[#d9e1ec] pt-[14px]">
        <p className="whitespace-nowrap font-manrope text-[13px] font-bold leading-[21.45px] text-[#92400e]">
          {route.status}
        </p>
      </div>
    </li>
  );
}

export default function MobileRouteCardsSection() {
  return (
    <ul className="flex w-full flex-col items-start gap-[24px]">
      {routes.map((route) => (
        <RouteCard key={route.title} route={route} />
      ))}
    </ul>
  );
}
