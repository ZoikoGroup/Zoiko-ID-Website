import Image from "next/image";

import { Section, SectionHeader } from "@/components/home/shared";
import { GreenCheck } from "@/components/organization-identity/shared";

const points = [
  {
    title: "Multi-Tenant",
    description: "Tenant isolation preserved at all layers",
  },
  {
    title: "Cross-IdP",
    description: "Works with any OAuth/SAML/OIDC provider",
  },
  {
    title: "No Migration",
    description: "Add without replacing existing IdP",
  },
];

export default function FederationBoundariesSection() {
  return (
    <Section background="slate">
      <SectionHeader
        title="Federation & tenant boundaries"
        widthClass="max-w-[760px]"
      />

      <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:gap-14">
        <div className="relative aspect-[530/420] w-full overflow-hidden rounded-xl lg:flex-1">
          <Image
            src="/authentication-sso/federation-tenant-boundaries.webp"
            alt="Person working on a laptop over a map on a wooden table"
            fill
            sizes="(min-width: 1024px) 530px, 90vw"
            className="object-cover"
          />
        </div>

        <div className="flex w-full flex-1 flex-col items-start gap-5">
          <h3 className="font-dm-serif text-2xl font-normal text-azure-9">
            Overlay-first design
          </h3>

          <p className="font-manrope text-base font-normal leading-7 text-azure-35">
            Zoiko iD sits between your identity provider and your application
            as an optional overlay. You keep your existing IdP (Okta, Azure AD,
            Ping). Zoiko iD receives signals from it, applies context, and
            passes decisions to policy engines.
          </p>

          <ul className="flex w-full flex-col gap-4 rounded-xl bg-white-solid px-6 pb-6 pt-7 outline-1 -outline-offset-1 outline-grey-91">
            {points.map((point) => (
              <li key={point.title} className="flex items-start gap-3">
                <span className="pt-1">
                  <GreenCheck size={20} />
                </span>
                <div className="flex flex-col">
                  <span className="font-manrope text-base font-semibold leading-7 text-azure-35">
                    {point.title}
                  </span>
                  <span className="font-manrope text-sm font-normal leading-6 text-azure-47">
                    {point.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
