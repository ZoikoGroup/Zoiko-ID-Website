import type { ReactNode } from "react";
import Image from "next/image";

type Route = {
  icon: string;
  title: string;
  desc: ReactNode;
  notFor: ReactNode;
  status: string;
};

const br = <br className="max-xl:hidden" />;

const routes: Route[] = [
  {
    icon: "send",
    title: "Sales",
    desc: <>Evaluating Zoiko iD for your {br}organization.</>,
    notFor: <>Booking demos or quoting {br}prices here.</>,
    status: "Talk to Sales · pending",
  },
  {
    icon: "user",
    title: "Help & Support",
    desc: <>Existing customers with an {br}account or service issue.</>,
    notFor: <>Security incidents or general {br}enquiries.</>,
    status: "Route pending",
  },
  {
    icon: "code",
    title: "Developers",
    desc: <>Integration questions and {br}documentation.</>,
    notFor: <>Public ticketing, which is not {br}assumed to exist.</>,
    status: "Developer Overview · pending",
  },
  {
    icon: "shield",
    title: "Security",
    desc: <>Security concerns and {br}account-security questions.</>,
    notFor: <>Vulnerability reports, which go {br}to Responsible Disclosure.</>,
    status: "Security Contact · pending",
  },
  {
    icon: "lock",
    title: "Privacy",
    desc: <>Questions about privacy {br}practices and data handling.</>,
    notFor: <>Data-rights requests, which {br}need the approved process.</>,
    status: "Privacy Notice · pending",
  },
  {
    icon: "mail",
    title: "Press",
    desc: <>Press enquiries, if a verified {br}route exists.</>,
    notFor: "Customer support or sales.",
    status: "No mailbox published",
  },
  {
    icon: "flow",
    title: "Partnerships",
    desc: <>Partnership enquiries, if a {br}verified route exists.</>,
    notFor: "Sales of the platform.",
    status: "No mailbox published",
  },
  {
    icon: "layers",
    title: "General",
    desc: <>Corporate questions that fit {br}none of the routes above.</>,
    notFor: <>Sensitive data, secrets or {br}incidents.</>,
    status: "Form not yet approved",
  },
];

export default function DesktopRoutesGridSection() {
  return (
    <ul className="grid w-full grid-cols-4 items-stretch gap-[24px]">
      {routes.map((r) => (
        <li
          key={r.title}
          className="relative h-[348.56px] rounded-[16px] border border-solid border-[#d9e1ec] bg-white"
        >
          <div className="absolute left-[32px] top-[32px] flex h-[53.1px] w-[52px] items-center justify-center rounded-[14px] bg-[#e4f3f8] pb-[1.1px]">
            <Image
              src={`/contact/desktop-icon-${r.icon}.svg`}
              width={24}
              height={24}
              alt=""
            />
          </div>
          <h3 className="absolute left-[32px] right-[32px] top-[96px] font-manrope text-[18px] font-bold leading-[24.3px] text-[#0b1b33]">
            {r.title}
          </h3>
          <p className="absolute left-[32px] right-[32px] top-[137.18px] font-manrope text-[15px] font-normal leading-[24.75px] text-[#334155] xl:whitespace-nowrap">
            {r.desc}
          </p>
          <div className="absolute left-[32px] right-[32px] top-[199.8px] flex flex-col gap-[1px]">
            <p className="font-manrope text-[11px] font-bold uppercase leading-[18.15px] tracking-[1.1px] text-[#22b8d6]">
              Not for
            </p>
            <p className="font-manrope text-[14px] font-normal leading-[23.1px] text-[#22b8d6] xl:whitespace-nowrap">
              {r.notFor}
            </p>
          </div>
          <p className="absolute bottom-[31.44px] left-[32px] right-[32px] border-t border-solid border-[#d9e1ec] pt-[14px] font-manrope text-[13px] font-bold leading-[21.45px] text-[#92400e] xl:whitespace-nowrap">
            {r.status}
          </p>
        </li>
      ))}
    </ul>
  );
}
