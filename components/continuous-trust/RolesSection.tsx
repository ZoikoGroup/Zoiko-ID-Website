import Image from "next/image";
import type { ReactNode } from "react";

/* ===== Desktop layout (>= lg) ===== */


const dCards: {
  title: string;
  body: React.ReactNode;
  img: string;
  imgAlt: string;
  icon: string;
  imgClass: string;
}[] = [
  {
    title: "Issuer",
    body: "Created the credential or grant, and can withdraw it within their authority.",
    img: "/continuous-trust/desktop-roles-portrait.webp",
    imgAlt: "Portrait of a professional representing the issuer role",
    icon: "/continuous-trust/desktop-icon-user-1.svg",
    imgClass: "object-cover",
  },
  {
    title: "Sponsor",
    body: (
      <>
        Accountable for a delegated grant, and for any <br className="max-xl:hidden" />
        agent acting under it.
      </>
    ),
    img: "/continuous-trust/desktop-roles-colleagues.webp",
    imgAlt: "Colleagues working together representing the sponsor role",
    icon: "/continuous-trust/desktop-icon-building.svg",
    imgClass: "object-cover object-top",
  },
  {
    title: "Authorized reviewer",
    body: (
      <>
        Reviews referred decisions and any appeal <br className="max-xl:hidden" />
        against them.
      </>
    ),
    img: "/continuous-trust/desktop-roles-meeting.webp",
    imgAlt: "Meeting in progress representing the authorized reviewer role",
    icon: "/continuous-trust/desktop-icon-scale-2.svg",
    imgClass: "object-cover",
  },
];



function DesktopRoles() {
  return (
    <section className="flex w-full flex-col gap-[14.9px] bg-white px-[160px] pb-[105.01px] pt-[112.31px]">
      <div className="flex w-full flex-col gap-[15px]">
        <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#071121]">
          Named owners for each decision
        </h2>
        <p className="max-w-[720px] pt-[1.1px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] xl:whitespace-nowrap">
          Every grant has a sponsor who is accountable for it. Policy has an owner, and any appeal <br className="max-xl:hidden" />
          reaches an authorized reviewer. No decision is taken by a system without a named human <br className="max-xl:hidden" />
          path behind it.
        </p>
      </div>
      <ul className="grid w-full list-none grid-cols-3 items-stretch gap-[24px] pt-[33.1px]">
        {dCards.map((c) => (
          <li
            key={c.title}
            className="flex min-h-[468px] flex-col overflow-hidden rounded-[24px] border border-solid border-[#d9e1ec] bg-white"
          >
            <div className="relative h-[190px] w-full shrink-0">
              <Image
                src={c.img}
                alt={c.imgAlt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className={c.imgClass}
              />
            </div>
            <div className="flex flex-1 flex-col justify-between gap-[10.9px] p-[24px]">
              <div className="flex w-full flex-col gap-[11px]">
                <div className="flex h-[43.1px] w-[42px] items-center justify-center rounded-[12px] bg-[#e4f3f8] pb-[1.1px]">
                  <Image src={c.icon} width={20} height={20} alt="" />
                </div>
                <h3 className="font-manrope text-[18px] font-bold leading-[25.2px] text-[#071121] xl:whitespace-nowrap">
                  {c.title}
                </h3>
                <p className="pb-[0.69px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">
                  {c.body}
                </p>
              </div>
              <div className="flex w-full flex-col items-start">
                <span className="inline-flex items-center justify-center whitespace-nowrap rounded-[999px] bg-[#fef3c7] px-[12px] py-[6px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#92400e]">
                  Role mapping pending
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ===== Mobile layout (< lg) ===== */


const mRoles: {
  photo: string;
  icon: string;
  title: string;
  alt: string;
  text: ReactNode;
}[] = [
  {
    photo: "/continuous-trust/mobile-roles-portrait.webp",
    icon: "/continuous-trust/mobile-icon-user-1.svg",
    title: "Issuer",
    alt: "Portrait of an issuer at work",
    text: (
      <>
        Created the credential or grant, and can
        <br />
        withdraw it within their authority.
      </>
    ),
  },
  {
    photo: "/continuous-trust/mobile-roles-colleagues.webp",
    icon: "/continuous-trust/mobile-icon-building.svg",
    title: "Sponsor",
    alt: "Colleagues discussing a delegated grant",
    text: (
      <>
        Accountable for a delegated grant, and for any
        <br />
        agent acting under it.
      </>
    ),
  },
  {
    photo: "/continuous-trust/mobile-roles-meeting.webp",
    icon: "/continuous-trust/mobile-icon-scale-2.svg",
    title: "Authorized reviewer",
    alt: "Reviewers in a meeting",
    text: (
      <>
        Reviews referred decisions and any appeal
        <br />
        against them.
      </>
    ),
  },
];



function MobileWhoCanAct() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] bg-white px-[22px] pb-[59.99px] pt-[67.32px] lg:hidden">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[14.8px]">
        <div className="flex items-center gap-[12px]">
          <div className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] whitespace-nowrap text-[#22b8d6]">
            08 · Who can act
          </p>
        </div>
        <h2 className="font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#071121]">
          Named owners for each
          <br />
          decision
        </h2>
        <p className="max-w-[720px] pt-[1.19px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] whitespace-nowrap">
          Every grant has a sponsor who is
          <br />
          accountable for it. Policy has an owner,
          <br />
          and any appeal reaches an authorized
          <br />
          reviewer. No decision is taken by a system
          <br />
          without a named human path behind it.
        </p>
        <ul className="flex flex-col gap-[24px] pt-[17.2px]">
          {mRoles.map((r) => (
            <li
              key={r.title}
              className="flex flex-col overflow-hidden rounded-[24px] border border-solid border-[#d9e1ec] bg-white"
            >
              <div className="relative h-[190px] w-full">
                <Image
                  src={r.photo}
                  alt={r.alt}
                  fill
                  sizes="(max-width: 600px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-start gap-[10.9px] p-[24px]">
                <div className="flex h-[43.1px] w-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8] pb-[1.1px]">
                  <Image src={r.icon} width={20} height={20} alt="" />
                </div>
                <h3 className="font-manrope text-[18px] font-bold leading-[25.2px] whitespace-nowrap text-[#071121]">
                  {r.title}
                </h3>
                <p className="pb-[0.69px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82] whitespace-nowrap">
                  {r.text}
                </p>
                <span className="mt-[1.1px] inline-flex rounded-full bg-[#fef3c7] px-[12px] py-[5px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] whitespace-nowrap text-[#92400e]">
                  Role mapping pending
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function RolesSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopRoles />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobileWhoCanAct />
      </div>
    </>
  );
}
