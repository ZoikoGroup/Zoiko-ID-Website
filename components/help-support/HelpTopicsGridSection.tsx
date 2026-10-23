import Image from "next/image";
import {
  User,
  KeyRound,
  FileCheck2,
  Building2,
  Bot,
  Code2,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

interface TopicCard {
  title: string;
  description: string;
  owner: string;
  status: string;
  icon: React.ComponentType<{ className?: string }>;
}

const topics: TopicCard[] = [
  {
    title: "Accounts & Sign-in",
    description: "Access to your account and sign-in issues.",
    owner: "Owner: Support Operations",
    status: "Route pending",
    icon: User,
  },
  {
    title: "Authentication & SSO",
    description: "How sign-in and federation work with your identity provider.",
    owner: "Owner: Product and Support",
    status: "Route pending",
    icon: KeyRound,
  },
  {
    title: "Verification & Credentials",
    description: "Claims, verification and what credentials do and do not prove.",
    owner: "Owner: Product",
    status: "Route pending",
    icon: FileCheck2,
  },
  {
    title: "Organizations & Delegated Authority",
    description: "Organization admin tasks and delegated access questions.",
    owner: "Owner: Product and Support",
    status: "Route pending",
    icon: Building2,
  },
  {
    title: "Machine & AI-agent Identity",
    description: "Sponsorship, mandates and non-human actors.",
    owner: "Owner: Product",
    status: "Route pending",
    icon: Bot,
  },
  {
    title: "APIs & Integrations",
    description: "Developer guidance, with the documentation for exact interfaces.",
    owner: "Owner: Developer Experience",
    status: "Route pending",
    icon: Code2,
  },
  {
    title: "Billing or Enterprise Enquiries",
    description: "Redirects to Talk to Sales. No support promise is made.",
    owner: "Owner: Sales",
    status: "Route pending",
    icon: CreditCard,
  },
  {
    title: "Security & Privacy",
    description: "Specialist routes only. General support does not handle these.",
    owner: "Owner: Security and Privacy",
    status: "Route pending",
    icon: ShieldCheck,
  },
];

const photoGallery = [
  {
    src: "/Support-Accessibility-01-help-support/ahs4.png",
    alt: "AI agent robotics and engineering team reviewing technical operations",
  },
  {
    src: "/Support-Accessibility-01-help-support/ahs5.png",
    alt: "User verification approval confirmed on smartphone with advisor",
  },
  {
    src: "/Support-Accessibility-01-help-support/ahs6.png",
    alt: "Developers collaborating over API integration code on screen",
  },
  {
    src: "/Support-Accessibility-01-help-support/ahs7.png",
    alt: "Security shield and biometric fingerprint authentication on mobile device",
  },
];

const mobilePhotos = [
  {
    src: "/Support-Accessibility-01-help-support/ahs12.jpg",
    alt: "User working on tablet device",
  },
  {
    src: "/Support-Accessibility-01-help-support/ahs13.jpg",
    alt: "Analytics dashboard on laptop",
  },
  {
    src: "/Support-Accessibility-01-help-support/ahs14.jpg",
    alt: "Team meeting in modern office space",
  },
  {
    src: "/Support-Accessibility-01-help-support/ahs15.jpg",
    alt: "Modern office corridor",
  },
];

interface HelpTopicsGridSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function HelpTopicsGridSection({
  view = "all",
}: HelpTopicsGridSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section id="topics" className="w-full bg-[#f8fafc]">
      {/* MOBILE VERSION (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden px-5 py-12">
          {/* Category tag */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-4 bg-[#0ea5e9]" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0284c7]">
              HELP TOPICS
            </span>
          </div>

        {/* Title & Subtitle */}
        <h2 className="mt-3 font-dm-serif text-[28px] font-normal leading-[1.2] tracking-tight text-[#071324]">
          Start with the topic that matches your question
        </h2>
        <p className="mt-3 font-manrope text-[12.5px] leading-relaxed text-[#4b5563]">
          Each topic states its purpose, the team that owns it and its status. No article counts are shown until the content registry confirms them.
        </p>

        {/* 8 Topic Cards - Vertical Stack */}
        <div className="mt-6 flex flex-col gap-3.5">
          {topics.map((topic) => {
            const Icon = topic.icon;
            return (
              <div
                key={topic.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"
              >
                <div>
                  <div className="flex size-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                    <Icon className="size-4.5" />
                  </div>
                  <h3 className="mt-3 font-manrope text-[15px] font-bold text-[#071324]">
                    {topic.title}
                  </h3>
                  <p className="mt-1.5 font-manrope text-xs leading-relaxed text-[#64748b]">
                    {topic.description}
                  </p>
                </div>
                <div className="mt-4 border-t border-slate-100 pt-3 flex flex-col gap-0.5">
                  <span className="font-manrope text-[11px] font-semibold text-[#071324]">
                    {topic.owner}
                  </span>
                  <span className="font-mono text-[10px] font-bold tracking-wider text-amber-600 uppercase">
                    {topic.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Photos - Vertical Stack */}
        <div className="mt-6 flex flex-col gap-3.5">
          {mobilePhotos.map((photo, i) => (
            <div
              key={photo.src}
              className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-sm"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      )}

      {/* DESKTOP VERSION (hidden sm:block) */}
      {showDesktop && (
        <div className="hidden sm:block py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="max-w-[800px]">
            <h2 className="font-dm-serif text-3xl font-normal leading-[1.18] tracking-tight text-[#071324] sm:text-4xl lg:text-[44px]">
              Start with the topic that matches your question
            </h2>
            <p className="mt-4 font-manrope text-xs leading-relaxed text-[#64748b] sm:text-sm sm:leading-relaxed">
              Each topic states its purpose, the team that owns it and its status. No article counts are shown until the content registry confirms them.
            </p>
          </div>

          {/* 8 Topics Grid (2 rows x 4 cols on desktop) */}
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {topics.map((topic) => {
              const Icon = topic.icon;
              return (
                <div
                  key={topic.title}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md"
                >
                  <div>
                    {/* Cyan Icon Container */}
                    <div className="flex size-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                      <Icon className="size-5" />
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 font-manrope text-[15px] font-bold text-[#071324] sm:text-base">
                      {topic.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 font-manrope text-xs leading-relaxed text-[#64748b] sm:text-[12.5px]">
                      {topic.description}
                    </p>
                  </div>

                  {/* Card Footer (Owner & Status) */}
                  <div className="mt-6 border-t border-slate-100 pt-3.5">
                    <span className="block font-manrope text-[11.5px] font-semibold text-[#071324]">
                      {topic.owner}
                    </span>
                    <span className="mt-0.5 block font-mono text-[10.5px] font-bold tracking-wider text-amber-600 uppercase">
                      {topic.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 4 Photo Strip Gallery */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {photoGallery.map((photo, i) => (
              <div
                key={photo.src}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-sm"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 270px, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      )}
    </section>
  );
}
