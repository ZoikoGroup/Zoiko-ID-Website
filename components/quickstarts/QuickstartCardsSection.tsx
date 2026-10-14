"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface QuickstartCard {
  id: string;
  title: string;
  icon: string;
  status: "VERIFIED" | "CONCEPTUAL";
  duration: string;
  description: string;
  metaCol1: {
    icon: string;
    label: string;
    value: string;
  };
  metaCol2: {
    icon: string;
    label: string;
    value: string;
  };
  goal: string;
  actor: string[];
  languages: string[];
  level: string;
}

const cardsData: QuickstartCard[] = [
  {
    id: "add-sso",
    title: "Add SSO to your app",
    icon: "/quickstarts/card-sso-icon.svg",
    status: "VERIFIED",
    duration: "5 min",
    description:
      "Integrate OAuth 2.0 / OIDC. Verify user identity with your existing IdP (Okta, Azure AD, Keycloak). Layer Zoiko iD on top.",
    metaCol1: {
      icon: "/quickstarts/card-meta-user.svg",
      label: "ACTOR",
      value: "Human\nuser",
    },
    metaCol2: {
      icon: "/quickstarts/card-meta-code.svg",
      label: "LANGUAGE",
      value: "JavaScript,\nPython, Go",
    },
    goal: "Authenticate",
    actor: ["Human"],
    languages: ["JavaScript", "Python", "Go"],
    level: "Intro",
  },
  {
    id: "issue-agent-credential",
    title: "Issue an agent credential",
    icon: "/quickstarts/card-agent-icon.svg",
    status: "VERIFIED",
    duration: "8 min",
    description:
      "Enroll a service, AI agent, or non-human principal. Generate API keys. Bind identity to your bot, workflow, or automation.",
    metaCol1: {
      icon: "/quickstarts/card-meta-user.svg",
      label: "ACTOR",
      value: "AI Agent /\nService",
    },
    metaCol2: {
      icon: "/quickstarts/card-meta-code.svg",
      label: "LANGUAGE",
      value: "All SDKs",
    },
    goal: "Authenticate",
    actor: ["Service", "AI Agent"],
    languages: ["JavaScript", "Python", "Go"],
    level: "Intro",
  },
  {
    id: "create-delegation",
    title: "Create a delegation mandate",
    icon: "/quickstarts/card-delegation-icon.svg",
    status: "VERIFIED",
    duration: "12 min",
    description:
      "Grant time-limited, scoped on-behalf-of access. Define scope, purpose, and expiry. Revoke instantly when needed.",
    metaCol1: {
      icon: "/quickstarts/card-meta-user.svg",
      label: "ACTOR",
      value: "Third-\nparty user",
    },
    metaCol2: {
      icon: "/quickstarts/card-meta-code.svg",
      label: "LANGUAGE",
      value: "Python,\nJavaScript",
    },
    goal: "Delegate",
    actor: ["Human", "Service"],
    languages: ["Python", "JavaScript"],
    level: "Advanced",
  },
  {
    id: "stream-events",
    title: "Stream identity events",
    icon: "/quickstarts/card-events-icon.svg",
    status: "VERIFIED",
    duration: "10 min",
    description:
      "Subscribe to credential issued, revoked, mandate expired events. Build custom audit, compliance and observability workflows.",
    metaCol1: {
      icon: "/quickstarts/card-meta-user.svg",
      label: "PATTERN",
      value: "Event-\ndriven",
    },
    metaCol2: {
      icon: "/quickstarts/card-meta-code.svg",
      label: "LANGUAGE",
      value: "All\nlanguages",
    },
    goal: "Review",
    actor: ["Service", "AI Agent"],
    languages: ["JavaScript", "Python", "Go"],
    level: "Advanced",
  },
  {
    id: "check-mandate-status",
    title: "Check mandate status",
    icon: "/quickstarts/card-mandate-icon.svg",
    status: "VERIFIED",
    duration: "6 min",
    description:
      "Query delegation status. Verify actor has valid mandate. Evaluate policy. Make access control decisions at request time.",
    metaCol1: {
      icon: "/quickstarts/card-meta-check.svg",
      label: "PATTERN",
      value: "Policy check",
    },
    metaCol2: {
      icon: "/quickstarts/card-meta-code.svg",
      label: "LANGUAGE",
      value: "Go, Python,\nJava",
    },
    goal: "Decide",
    actor: ["Service", "AI Agent"],
    languages: ["Go", "Python"],
    level: "Intro",
  },
  {
    id: "query-evidence-trail",
    title: "Query evidence trail",
    icon: "/quickstarts/card-evidence-icon.svg",
    status: "CONCEPTUAL",
    duration: "15 min",
    description:
      "Search audit logs. Filter by actor, action, time range. Export compliance evidence. Build compliance dashboards.",
    metaCol1: {
      icon: "/quickstarts/card-meta-search.svg",
      label: "PATTERN",
      value: "Query /\nSearch",
    },
    metaCol2: {
      icon: "/quickstarts/card-meta-code.svg",
      label: "LANGUAGE",
      value: "Python,\nJavaScript",
    },
    goal: "Review",
    actor: ["Human", "Service"],
    languages: ["Python", "JavaScript"],
    level: "Advanced",
  },
];

export default function QuickstartCardsSection() {
  const [filters, setFilters] = useState({
    goal: "All",
    actor: "All",
    language: "All",
    level: "All",
  });

  useEffect(() => {
    const handleFilterChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ type: string; value: string }>;
      if (customEvent.detail) {
        setFilters((prev) => ({
          ...prev,
          [customEvent.detail.type]: customEvent.detail.value,
        }));
      }
    };

    window.addEventListener("quickstart-filter-change", handleFilterChange);
    return () => {
      window.removeEventListener("quickstart-filter-change", handleFilterChange);
    };
  }, []);

  const filteredCards = cardsData.filter((card) => {
    if (filters.goal !== "All" && card.goal !== filters.goal) return false;
    if (filters.actor !== "All" && !card.actor.includes(filters.actor))
      return false;
    if (
      filters.language !== "All" &&
      !card.languages.includes(filters.language) &&
      !card.languages.includes("All SDKs") &&
      !card.languages.includes("All languages")
    )
      return false;
    if (filters.level !== "All" && card.level !== filters.level) return false;
    return true;
  });

  return (
    <section className="bg-white-solid px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-28 xl:px-40">
      <div className="mx-auto w-full max-w-[1120px]">
        {filteredCards.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#E2E8F0] p-12 text-center">
            <p className="font-dm-serif text-2xl text-[#071426]">
              No matching quickstarts
            </p>
            <p className="mt-2 font-manrope text-sm text-[#64748B]">
              Try adjusting your filter options above to see available integration guides.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredCards.map((card) => (
              <article
                key={card.id}
                className="flex flex-col justify-between rounded-[12px] border-2 border-[#E2E8F0] bg-white-solid p-8 transition-shadow duration-200 hover:shadow-lg"
              >
                <div className="flex flex-col gap-3">
                  {/* Card Header: Icon & Title */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-16 shrink-0 items-center justify-center rounded-[12px] bg-[linear-gradient(135deg,#22B8D6_0%,#2563EB_100%)] text-white-solid shadow-sm">
                      <Image
                        src={card.icon}
                        alt=""
                        width={32}
                        height={32}
                        className="brightness-0 invert"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-center pt-1">
                      <h3 className="font-dm-serif text-[19.2px] font-normal leading-snug text-[#071426]">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  {/* Badges: Status & Time */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    {card.status === "VERIFIED" ? (
                      <span className="inline-flex rounded-full bg-[rgba(22,163,74,0.15)] px-3 py-1 font-manrope text-[12px] font-bold tracking-[0.05em] text-[#16A34A]">
                        VERIFIED
                      </span>
                    ) : (
                      <span className="inline-flex rounded-full bg-[rgba(245,158,11,0.15)] px-3 py-1 font-manrope text-[12px] font-bold tracking-[0.05em] text-[#F59E0B]">
                        CONCEPTUAL
                      </span>
                    )}

                    <span className="inline-flex rounded-full bg-[rgba(37,99,235,0.15)] px-3 py-1 font-manrope text-[12px] font-bold tracking-[0.05em] text-azure-48 uppercase">
                      {card.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="min-h-[84px] pt-1 font-manrope text-[14.4px] font-normal leading-[25.2px] text-[#64748B]">
                    {card.description}
                  </p>

                  {/* Meta pill container */}
                  <div className="grid grid-cols-2 gap-4 rounded-[8px] bg-[#F1F5F9] p-5">
                    {/* Meta Col 1 */}
                    <div className="flex items-start gap-3">
                      <Image
                        src={card.metaCol1.icon}
                        alt=""
                        width={20}
                        height={20}
                        className="mt-0.5 shrink-0 opacity-80"
                      />
                      <div className="flex flex-col">
                        <span className="font-manrope text-[12.8px] font-bold tracking-[0.05em] text-[#071426]">
                          {card.metaCol1.label}
                        </span>
                        <span className="whitespace-pre-line font-manrope text-[13.6px] font-normal leading-[22px] text-[#475569]">
                          {card.metaCol1.value}
                        </span>
                      </div>
                    </div>

                    {/* Meta Col 2 */}
                    <div className="flex items-start gap-3">
                      <Image
                        src={card.metaCol2.icon}
                        alt=""
                        width={20}
                        height={20}
                        className="mt-0.5 shrink-0 opacity-80"
                      />
                      <div className="flex flex-col">
                        <span className="font-manrope text-[12.8px] font-bold tracking-[0.05em] text-[#071426]">
                          {card.metaCol2.label}
                        </span>
                        <span className="whitespace-pre-line font-manrope text-[13.6px] font-normal leading-[22px] text-[#475569]">
                          {card.metaCol2.value}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4">
                  <Link
                    href={`/apis-integrations#${card.id}`}
                    className="flex w-full items-center justify-center gap-2.5 rounded-[6px] bg-azure-48 px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid shadow-sm transition-colors duration-200 hover:bg-blue-600"
                  >
                    <Image
                      src="/quickstarts/card-btn-arrow.svg"
                      alt=""
                      width={15}
                      height={15}
                      className="brightness-0 invert"
                    />
                    Start guide
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
