import Image from "next/image";
import {
  ApplicantIcon,
  VerifierIcon,
  ReviewerIcon,
  RelyingPartyIcon,
  OrganizationIcon,
  AuditorIcon,
  ActorsHeaderIcon,
} from "./icons";

interface ActorItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const actors: ActorItem[] = [
  {
    title: "Applicant",
    description:
      "Person or organization submitting claims. Provides evidence (documents, credentials, contact info).",
    icon: ApplicantIcon,
  },
  {
    title: "Verifier",
    description:
      "System or service validating claims. Checks against databases, registries, and authoritative sources.",
    icon: VerifierIcon,
  },
  {
    title: "Reviewer",
    description:
      "Person evaluating verification output. Decides approve/deny. Owns the decision.",
    icon: ReviewerIcon,
  },
  {
    title: "Relying Party",
    description:
      "Your application. Receives verification result. Applies access policies based on verified claims + org policy.",
    icon: RelyingPartyIcon,
  },
  {
    title: "Organization",
    description:
      "Customer entity. Controls membership, can revoke or suspend applicant access anytime.",
    icon: OrganizationIcon,
  },
  {
    title: "Auditor",
    description:
      "Reviews decision logs and evidence trails. Ensures compliance, fairness and auditability.",
    icon: AuditorIcon,
  },
];

export default function DistinctActorsSection() {
  return (
    <section className="bg-[#f1f5f9] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-24 xl:px-20">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Heading */}
        <h2 className="mb-8 text-center font-dm-serif text-[28px] font-normal leading-[1.18] tracking-tight text-azure-9 sm:text-4xl lg:mb-12 lg:text-[44px]">
          {/* Mobile Heading */}
          <span className="lg:hidden">
            <span className="inline-flex items-center justify-center gap-2.5">
              <ActorsHeaderIcon className="size-6 shrink-0 text-azure-9" />
              <span>Distinct actors &amp;</span>
            </span>
            <br />
            <span>roles</span>
          </span>

          {/* Desktop Heading */}
          <span className="hidden lg:inline">Distinct actors &amp; roles</span>
        </h2>

        {/* Hero-style Wide Banner Image (Desktop only) */}
        <div className="relative mx-auto hidden aspect-[800/505] w-full max-w-[1080px] overflow-hidden rounded-[26px] shadow-[0px_16px_36px_rgba(0,0,0,0.08)] sm:rounded-[32px] lg:block">
          <Image
            src="/solutions-verified-onboarding/svo2.png"
            alt="Colleagues stacking hands in collaboration"
            fill
            sizes="(min-width: 1200px) 1080px, 100vw"
            className="object-cover"
          />
        </div>

        {/* 6 Actors Cards (Mobile: 1 column, sm: 2 columns, Desktop: 3 columns) */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-7">
          {actors.map((actor) => {
            const Icon = actor.icon;
            const isReviewer = actor.title === "Reviewer";
            return (
              <div
                key={actor.title}
                className="flex flex-col items-center rounded-[18px] border border-slate-200/80 bg-white p-6 text-center shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-200 hover:border-slate-300 hover:shadow-[0_6px_22px_rgba(0,0,0,0.06)] lg:rounded-2xl lg:p-8"
              >
                {/* Cyan Accent Icon */}
                <div className="flex size-11 items-center justify-center">
                  <Icon className={`size-8 ${isReviewer ? "hidden lg:block" : ""}`} />
                </div>

                <h3 className="mt-3.5 font-manrope text-base font-bold text-azure-9 sm:text-[17px] lg:mt-4">
                  {actor.title}
                </h3>

                <p className="mt-2 font-manrope text-[13px] leading-relaxed text-azure-47 sm:text-[14px] lg:mt-2.5">
                  {actor.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
