import {
  User,
  KeyRound,
  FileText,
  Building2,
  Code2,
  LifeBuoy,
} from "lucide-react";

interface CommonTasksSectionProps {
  view?: "all" | "desktop" | "mobile";
}

interface TaskCard {
  title: string;
  description: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
}

const tasks: TaskCard[] = [
  {
    title: "Understand identity",
    description: "Who or what an actor is, and how that is established.",
    badge: "DESTINATION PENDING",
    icon: User,
  },
  {
    title: "Understand delegated authority",
    description: "How bounded permission to act for another party works.",
    badge: "DESTINATION PENDING",
    icon: KeyRound,
  },
  {
    title: "Explore evidence",
    description: "How decisions are recorded so they can be reviewed.",
    badge: "DESTINATION PENDING",
    icon: FileText,
  },
  {
    title: "Plan enterprise integration",
    description: "Architecture and integration considerations for organizations.",
    badge: "DESTINATION PENDING",
    icon: Building2,
  },
  {
    title: "Find implementation references",
    description: "Exact interface contracts live in the developer references.",
    badge: "DESTINATION PENDING",
    icon: Code2,
  },
  {
    title: "Get support",
    description: "When documentation does not answer your question.",
    badge: "DESTINATION PENDING",
    icon: LifeBuoy,
  },
];

export default function CommonTasksSection({
  view = "all",
}: CommonTasksSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full bg-white">
      {/* DESKTOP VERSION (hidden sm:block) */}
      {showDesktop && (
        <div className="hidden sm:block py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Heading & Subtitle */}
              <div className="lg:col-span-4">
                <h2 className="font-dm-serif text-3xl font-normal leading-[1.15] tracking-tight text-[#071324] sm:text-4xl lg:text-[44px]">
                  Common
                  <br />
                  tasks with a
                  <br />
                  next step
                </h2>
                <p className="mt-4 max-w-[280px] font-manrope text-xs leading-relaxed text-[#64748b] sm:text-[13px]">
                  Each path links to a verified destination. Paths with no approved target stay visible as pending.
                </p>
              </div>

              {/* Right Column: 2x3 Grid of Task Cards */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-8">
                {tasks.map((task) => {
                  const Icon = task.icon;
                  return (
                    <div
                      key={task.title}
                      className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-7"
                    >
                      <div>
                        {/* Cyan Icon Box */}
                        <div className="flex size-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                          <Icon className="size-4.5" />
                        </div>

                        {/* Title */}
                        <h3 className="mt-4 font-manrope text-[15px] font-bold text-[#071324]">
                          {task.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-2 font-manrope text-xs leading-relaxed text-[#64748b]">
                          {task.description}
                        </p>
                      </div>

                      {/* Pending Badge */}
                      <div className="mt-5 border-t border-slate-100 pt-3">
                        <span className="inline-block rounded-full bg-[#edf2f7] px-3 py-1 font-mono text-[9.5px] font-bold tracking-wider text-slate-500 uppercase">
                          {task.badge}
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
        <div className="sm:hidden bg-white px-5 py-12 border-t border-slate-100">
          {/* Category Number & Eyebrow */}
          <div>
            <p className="font-mono text-[10.5px] font-bold uppercase tracking-widest text-[#0ea5e9]">
              02 · START HERE
            </p>
            <div className="mt-1.5 h-[2px] w-12 bg-[#0ea5e9]" />
          </div>

          {/* Heading */}
          <h2 className="mt-4 font-dm-serif text-[30px] font-normal leading-[1.2] tracking-tight text-[#071324]">
            Common tasks with a next step
          </h2>

          {/* Subtitle */}
          <p className="mt-3 font-manrope text-xs leading-relaxed text-[#64748b]">
            Each path links to a verified destination. Paths with no approved target stay visible as pending.
          </p>

          {/* Stacked Cards */}
          <div className="mt-6 flex flex-col gap-4">
            {tasks.map((task) => {
              const Icon = task.icon;
              return (
                <div
                  key={task.title}
                  className="rounded-2xl border border-slate-200/80 bg-white p-5.5 shadow-xs"
                >
                  {/* Icon */}
                  <div className="flex size-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                    <Icon className="size-5" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-3.5 font-manrope text-[14.5px] font-bold text-[#071324]">
                    {task.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-1.5 font-manrope text-xs leading-relaxed text-[#64748b]">
                    {task.description}
                  </p>

                  {/* Divider & Pending Badge */}
                  <div className="mt-4 border-t border-slate-100 pt-3">
                    <span className="inline-block rounded-full bg-[#edf2f7] px-3 py-1 font-mono text-[9px] font-bold tracking-wider text-slate-500 uppercase">
                      {task.badge}
                    </span>
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
