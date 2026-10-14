import Image from "next/image";
import Link from "next/link";

const quickstartGuides = [
  {
    icon: "/overview/quickstart-code-icon.svg",
    title: "Add SSO to your app",
    description:
      "Integrate OAuth 2.0 / OIDC. 10 minutes for basic flow. Supports JavaScript, Python, Go, Java.",
    href: "/quickstarts",
  },
  {
    icon: "/overview/quickstart-code-icon.svg",
    title: "Issue an agent credential",
    description:
      "Register a service, generate API key. Bind identity to your automation. 5 minutes.",
    href: "/quickstarts",
  },
  {
    icon: "/overview/quickstart-code-icon.svg",
    title: "Create a delegation mandate",
    description:
      "Define scope, time, and purpose. Grant on-behalf-of access. 15 minutes.",
    href: "/quickstarts",
  },
  {
    icon: "/overview/quickstart-code-icon.svg",
    title: "Stream identity events",
    description:
      "Subscribe to credential, mandate, and policy change events. Build custom workflows.",
    href: "/quickstarts",
  },
];

export default function OverviewQuickstartsSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-28 xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-14">
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl sm:leading-[59.8px]">
            Quickstarts
          </h2>
          <p className="max-w-[650px] font-manrope text-base font-normal leading-7 text-slate-500">
            Get up and running in minutes. Task-based guides for common integration patterns.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {quickstartGuides.map((guide, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between rounded-xl border border-mystic bg-white-solid p-7 transition-all duration-300 hover:-translate-y-1 hover:border-scooter-48/40 hover:shadow-[0px_16px_32px_0px_rgba(7,20,38,0.06)]"
            >
              <div className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-scooter-48/10 p-2.5">
                  <Image
                    src={guide.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="h-full w-full object-contain"
                  />
                </div>

                <h3 className="font-dm-serif text-xl font-normal text-azure-9">
                  {guide.title}
                </h3>

                <p className="font-manrope text-sm font-normal leading-relaxed text-slate-500">
                  {guide.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-mystic/60">
                <Link
                  href={guide.href}
                  className="inline-flex items-center gap-1.5 font-manrope text-sm font-bold text-azure-48 transition-colors duration-200 group-hover:text-blue-700"
                >
                  Start guide
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button: View all quickstarts */}
        <div className="pt-2">
          <Link
            href="/quickstarts"
            className="inline-flex items-center gap-2.5 rounded-[6px] bg-azure-48 px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid shadow-[0px_8px_20px_0px_rgba(37,99,235,0.3)] transition-all duration-200 hover:bg-blue-600 hover:shadow-[0px_10px_24px_0px_rgba(37,99,235,0.4)]"
          >
            <Image
              src="/overview/quickstart-view-all-arrow.svg"
              alt=""
              width={18}
              height={18}
              className="brightness-0 invert"
            />
            View all quickstarts
          </Link>
        </div>
      </div>
    </section>
  );
}
