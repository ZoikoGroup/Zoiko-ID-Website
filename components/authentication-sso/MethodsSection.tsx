import { AlertCircleIcon } from "@/components/home/icons";
import { Section, SectionHeader } from "@/components/home/shared";
import {
  GreenCheck,
  MediaCard,
  cardTextClass,
  cardTitleClass,
} from "@/components/organization-identity/shared";

const methods = [
  {
    title: "Password & MFA",
    description:
      "Password-based auth with optional second factor (TOTP, SMS, hardware key). Most common, well-understood, legacy support.",
    image: "/authentication-sso/password-mfa.webp",
    supported: true,
  },
  {
    title: "Passkeys",
    description:
      "WebAuthn/FIDO2-based phishing-resistant authentication. Native biometric or hardware key. Next-generation standard.",
    image: "/authentication-sso/passkeys.webp",
    supported: true,
  },
  {
    title: "OAuth 2.0 & OIDC",
    description:
      "Federation via OAuth/OpenID Connect. Delegate to identity provider. Works with Okta, Azure AD, Google, GitHub, custom IdPs.",
    image: "/authentication-sso/oauth-oidc.webp",
    supported: true,
  },
  {
    title: "SAML 2.0",
    description:
      "Enterprise federation standard. XML-based protocol. Common in on-prem and hybrid deployments. IdP-initiated or SP-initiated flows.",
    image: "/authentication-sso/saml.webp",
    supported: true,
  },
  {
    title: "Certificates & mTLS",
    description:
      "X.509 client certificates and mutual TLS. Common for service-to-service, machine workloads, and high-assurance environments.",
    image: "/authentication-sso/certificates-mtls.webp",
    supported: true,
  },
  {
    title: "Custom & Emerging",
    description:
      "Proprietary flows, device attestation, step-up, and risk-based auth. Planned or custom implementation under evaluation.",
    image: "/authentication-sso/custom-emerging.webp",
    supported: false,
  },
];

export default function MethodsSection() {
  return (
    <Section>
      <SectionHeader
        title="Authentication methods & protocols"
        widthClass="max-w-[860px]"
      />

      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {methods.map((method) => (
          <MediaCard
            key={method.title}
            image={method.image}
            sizes="(min-width: 1024px) 352px, (min-width: 768px) 45vw, 90vw"
          >
            <h3 className={cardTitleClass}>{method.title}</h3>
            <p className={`${cardTextClass} pb-5`}>{method.description}</p>

            {method.supported ? (
              <p className="mt-auto flex items-center gap-1 font-manrope text-xs font-semibold text-[#16A34A]">
                <GreenCheck size={14} />
                Supported
              </p>
            ) : (
              <p className="mt-auto flex items-center gap-1 font-manrope text-xs font-semibold text-[#F59E0B]">
                <AlertCircleIcon size={14} />
                Verify support
              </p>
            )}
          </MediaCard>
        ))}
      </div>
    </Section>
  );
}
