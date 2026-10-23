import {
  User,
  KeyRound,
  Activity,
  FileText,
  Code2,
  ShieldCheck,
} from "lucide-react";

interface TopicGroupingsSectionProps {
  view?: "all" | "desktop" | "mobile";
}

interface GroupingCard {
  title: string;
  description: string;
  owner: string;
  icon: React.ComponentType<{ className?: string }>;
}

const groupings: GroupingCard[] = [
  {
    title: "Identity & Credentials",
    description: "Who or what is represented, and how credentials relate to claims.",
    owner: "Owner: Product",
    icon: User,
  },
  {
    title: "Delegation & Authorization",
    description: "What an actor may do, on whose behalf, and for how long.",
    owner: "Owner: Product",
    icon: KeyRound,
  },
  {
    title: "Continuous Trust & Revocation",
    description: "How permissions are reassessed as context changes.",
    owner: "Owner: Product",
    icon: Activity,
  },
  {
    title: "Evidence & Auditability",
    description: "Recording decisions so they can be inspected later.",
    owner: "Owner: Product and Privacy",
    icon: FileText,
  },
  {
    title: "APIs & Integrations",
    description: "Pointers to the specialist developer references.",
    owner: "Owner: Developer",
    icon: Code2,
  },
  {
    title: "Trust & Operations",
    description: "Assurance, status and operational routes.",
    owner: "Owner: Trust & Operations",
    icon: ShieldCheck,
  },
];

export default function TopicGroupingsSection({
  view = "all",
}: TopicGroupingsSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full bg-[#f8fafc] border-t border-slate-200/60">
      {/* DESKTOP VERSION (hidden sm:block) */}
      {showDesktop && (
        <div className="hidden sm:block py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Heading & Subtitle */}
              <div className="lg:col-span-4">
                <h2 className="font-dm-serif text-3xl font-normal leading-[1.15] tracking-tight text-[#071324] sm:text-4xl lg:text-[44px]">
                  Six groupings,
                  <br />
                  each with an
                  <br />
                  owner
                </h2>
                <p className="mt-4 max-w-[280px] font-manrope text-xs leading-relaxed text-[#64748b] sm:text-[13px]">
                  These groupings are editorial proposals. Listing a family does not mean every topic inside it has published content.
                </p>
              </div>

              {/* Right Column: 3x2 Grid of Grouping Cards */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:col-span-8">
                {groupings.map((group) => {
                  const Icon = group.icon;
                  return (
                    <div
                      key={group.title}
                      className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-6"
                    >
                      <div>
                        {/* Cyan Icon Box */}
                        <div className="flex size-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                          <Icon className="size-4.5" />
                        </div>

                        {/* Title */}
                        <h3 className="mt-4 font-manrope text-[14.5px] font-bold text-[#071324] leading-snug">
                          {group.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-2 font-manrope text-xs leading-relaxed text-[#64748b]">
                          {group.description}
                        </p>
                      </div>

                      {/* Owner Label */}
                      <div className="mt-5 border-t border-slate-100 pt-3">
                        <span className="font-manrope text-[11.5px] font-medium text-slate-500">
                          {group.owner}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE VERSION (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden bg-[#f4f7fa] px-5 py-12 border-t border-slate-200/60">
          {/* Category Number & Eyebrow */}
          <div>
            <p className="font-mono text-[10.5px] font-bold uppercase tracking-widest text-[#0ea5e9]">
              03 · FAMILIES
            </p>
            <div className="mt-1.5 h-[2px] w-12 bg-[#0ea5e9]" />
          </div>

          {/* Heading */}
          <h2 className="mt-4 font-dm-serif text-[30px] font-normal leading-[1.2] tracking-tight text-[#071324]">
            Six groupings, each with an owner
          </h2>

          {/* Subtitle */}
          <p className="mt-3 font-manrope text-xs leading-relaxed text-[#64748b]">
            These groupings are editorial proposals. Listing a family does not mean every topic inside it has published content.
          </p>

          {/* Stacked Cards */}
          <div className="mt-6 flex flex-col gap-4">
            {groupings.map((group) => {
              const Icon = group.icon;
              // Format owner label
              let ownerText = "Product";
              if (group.title === "Continuous Trust & Revocation") {
                ownerText = "Product and Engineering";
              } else if (group.title === "Evidence & Auditability") {
                ownerText = "Product and Privacy";
              } else if (group.title === "APIs & Integrations") {
                ownerText = "Developer Experience";
              } else if (group.title === "Trust & Operations") {
                ownerText = "Trust and Operations";
              }

              return (
                <div
                  key={group.title}
                  className="rounded-2xl border border-slate-200/80 bg-white p-5.5 shadow-xs"
                >
                  {/* Icon */}
                  <div className="flex size-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                    <Icon className="size-5" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-3.5 font-manrope text-[14.5px] font-bold text-[#071324]">
                    {group.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-1.5 font-manrope text-xs leading-relaxed text-[#64748b]">
                    {group.description}
                  </p>

                  {/* Divider & Owner label */}
                  <div className="mt-4 border-t border-slate-100 pt-3">
                    <p className="font-manrope text-[11px]">
                      <strong className="font-bold text-[#071324]">Owner:</strong>{" "}
                      <span className="text-[#64748b]">{ownerText}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
