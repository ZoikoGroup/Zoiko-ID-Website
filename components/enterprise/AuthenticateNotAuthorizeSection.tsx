import Image from "next/image";

export default function AuthenticateNotAuthorizeSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      {/* Desktop Layout (hidden on mobile, visible on sm+) */}
      <div className="mx-auto hidden max-w-[1180px] px-6 sm:block sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Text & List */}
          <div className="flex flex-col">
            <h2 className="font-dm-serif text-3xl font-normal leading-[1.18] tracking-tight text-[#071324] sm:text-4xl lg:text-[42px]">
              Authenticate is not authorize, and neither proves a mandate
            </h2>

            <p className="mt-5 font-manrope text-sm leading-relaxed text-[#4b5563] sm:text-[15px]">
              Enterprises often ask one system to answer three different
              questions. Keeping them separate prevents a successful sign-in
              from being used as permission to act.
            </p>

            {/* Bulleted Points */}
            <ul className="mt-7 flex flex-col gap-3 font-manrope text-xs sm:text-[13px]">
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-sky-500" />
                <span className="text-[#374151]">
                  <strong className="font-bold text-[#111827]">
                    Authenticate
                  </strong>{" "}
                  — who is this?
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-sky-500" />
                <span className="text-[#374151]">
                  <strong className="font-bold text-[#111827]">
                    Authorize
                  </strong>{" "}
                  — may this action happen?
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-sky-500" />
                <span className="text-[#374151]">
                  <strong className="font-bold text-[#111827]">
                    Prove the mandate
                  </strong>{" "}
                  — on whose behalf, and why?
                </span>
              </li>
            </ul>
          </div>

          {/* Right Column: Rounded Image (ee2.png) */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl sm:rounded-3xl">
            <Image
              src="/Enterprise-02-enterprise/ee2.png"
              alt="Biometric phone authentication and security token"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout (strictly visible on mobile: sm:hidden) */}
      <div className="flex flex-col px-5 sm:hidden">
        {/* Category Pill / Subtitle */}
        <span className="font-mono text-[10px] font-bold tracking-wider text-[#0284c7] uppercase">
          DECISION CRITERIA
        </span>

        {/* Mobile Heading */}
        <h2 className="mt-2 font-dm-serif text-[28px] leading-[1.18] tracking-tight text-[#2563eb]">
          Authenticate is not authorize, and neither proves a mandate
        </h2>

        {/* Mobile Description */}
        <p className="mt-4 font-manrope text-[13px] leading-relaxed text-[#4b5563]">
          Enterprises often ask one system to answer three different questions. Keeping them separate prevents a successful sign-in from being read as permission to act.
        </p>

        {/* Bulleted Points with Square Cyan Markers */}
        <ul className="mt-5 flex flex-col gap-2.5 font-manrope text-xs">
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-[1px] bg-[#0ea5e9]" />
            <span className="text-[#4b5563]">
              <strong className="font-bold text-[#2563eb]">Authenticate</strong> — who is this?
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-[1px] bg-[#0ea5e9]" />
            <span className="text-[#4b5563]">
              <strong className="font-bold text-[#2563eb]">Authorize</strong> — may this action happen?
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-[1px] bg-[#0ea5e9]" />
            <span className="text-[#4b5563]">
              <strong className="font-bold text-[#2563eb]">Prove the mandate</strong> — on whose behalf, and why?
            </span>
          </li>
        </ul>

        {/* Mobile Image (ee8.jpg) */}
        <div className="relative mt-7 aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md">
          <Image
            src="/Enterprise-02-enterprise/ee8.jpg"
            alt="Collaborators discussing around laptop at meeting table"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Subtle Divider Line Between Sections */}
      <div className="mt-16 border-b border-slate-200/80 sm:mt-20 lg:mt-24" />
    </section>
  );
}
