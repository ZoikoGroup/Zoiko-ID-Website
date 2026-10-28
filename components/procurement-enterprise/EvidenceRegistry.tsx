import { AlertTriangle } from "lucide-react";

const STATES = {
  "not-confirmed": {
    label: "NOT CONFIRMED",
    className: "bg-[#E8ECF2] text-[#475569]",
  },
  restricted: {
    label: "RESTRICTED",
    className: "bg-[#FEF3C7] text-[#92400E]",
  },
  public: {
    label: "PUBLIC",
    className: "bg-[#DCFCE7] text-[#166534]",
  },
} as const;

type StateKey = keyof typeof STATES;

interface DocumentRow {
  type: string;
  state: StateKey;
  request: string;
  href: string;
}

const ROWS: readonly DocumentRow[] = [
  {
    type: "Security overview",
    state: "not-confirmed",
    request: "Trust Center request, when enabled",
    href: "#",
  },
  {
    type: "Independent assurance report",
    state: "not-confirmed",
    request: "Owner-controlled review only",
    href: "#",
  },
  {
    type: "Data processing terms",
    state: "restricted",
    request: "Privacy and legal request path",
    href: "#",
  },
  {
    type: "Penetration test summary",
    state: "restricted",
    request: "Security review, by authorisation",
    href: "#",
  },
  {
    type: "Privacy Notice",
    state: "public",
    request: "Read directly",
    href: "#",
  },
] as const;

export default function EvidenceRegistry() {
  return (
    <main className="min-h-screen w-full bg-[#071426] px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <header>
          <h1 className="max-w-6xl font-serif text-4xl font-semibold leading-tight text-white md:text-[52px] md:leading-[1.15]">
            Evidence registry: what is available, and in what state
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-200 md:text-lg">
            Every document is listed with its state. A document marked
            restricted or not confirmed is not available to download. Documents
            are never shown as published unless the owner has approved them.
          </p>
        </header>

        <section
          aria-label="Evidence registry table"
          className="mt-12 overflow-hidden rounded-xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="bg-[#EEF2F7]">
                  <th
                    scope="col"
                    className="w-[38%] px-6 py-4 text-sm font-semibold text-slate-600"
                  >
                    Document type
                  </th>
                  <th
                    scope="col"
                    className="w-[24%] px-6 py-4 text-sm font-semibold text-slate-600"
                  >
                    State
                  </th>
                  <th
                    scope="col"
                    className="w-[38%] px-6 py-4 text-sm font-semibold text-slate-600"
                  >
                    How to request
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => {
                  const state = STATES[row.state];
                  return (
                    <tr
                      key={row.type}
                      className="border-t border-slate-200 first:border-t-0"
                    >
                      <td className="px-6 py-5 text-base font-semibold text-[#0F1B2D]">
                        <a href={row.href} className="hover:underline">
                          {row.type}
                        </a>
                      </td>
                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider ${state.className}`}
                        >
                          {state.label}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-sm text-slate-600">
                        {row.request}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <div
          role="note"
          className="mt-6 flex items-center gap-4 rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-5 py-4"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#FEE2E2]">
            <AlertTriangle
              className="h-5 w-5 text-[#DC2626]"
              aria-hidden="true"
            />
          </span>
          <p className="text-sm leading-relaxed text-[#991B1B] md:text-base">
            <strong className="font-bold">
              No certification is claimed on this page.
            </strong>{" "}
            No SOC 2, ISO or similar badge appears here. Any certification will
            be listed only with its scope, date and owner.
          </p>
        </div>
      </div>
    </main>
  );
}
