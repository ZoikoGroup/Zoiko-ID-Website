import React from "react";

function ControlCardIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 3.5H16C16.5523 3.5 17 3.94772 17 4.5V20.5C17 21.0523 16.5523 21.5 16 21.5H8C7.44772 21.5 7 21.0523 7 20.5V4.5C7 3.94772 7.44772 3.5 8 3.5Z"
        stroke="#D97706"
        strokeWidth="2"
      />
    </svg>
  );
}

function EvidenceVaultIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 3.5H15.5L19 7V20C19 20.5523 18.5523 21 18 21H7C6.44772 21 6 20.5523 6 20V4.5C6 3.94772 6.44772 3.5 7 3.5Z"
        stroke="#D97706"
        strokeWidth="2"
      />

      <path
        d="M15 3.5V7.5H19"
        stroke="#D97706"
        strokeWidth="2"
      />

      <path
        d="M9 11H16"
        stroke="#D97706"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M9 15H16"
        stroke="#D97706"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M9 18H14"
        stroke="#D97706"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

type EvidenceCardProps = {
  icon: React.ReactNode;
  title: string;
  rows: {
    label: string;
    value: string;
    valueClassName?: string;
  }[];
};

function EvidenceCard({
  icon,
  title,
  rows,
}: EvidenceCardProps) {
  return (
    <div className="w-full rounded-xl border border-amber-100 bg-transparent p-6">
      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="flex h-6 w-6 shrink-0 items-center justify-center">
          {icon}
        </div>

        <h3 className="text-base font-bold leading-6 text-sky-900">
          {title}
        </h3>
      </div>

      {/* Details */}
      <div className="mt-4 flex flex-col">
        {rows.map((row) => (
          <div
            key={row.label}
            className="pt-2 text-xs leading-4 text-slate-600 first:pt-0"
          >
            <span className="font-bold">
              {row.label}
            </span>

            <span className="font-normal">
              {" "}
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EvidenceBeforeExamination() {
  return (
    <section className="w-full bg-neutral-50 px-6 py-16 sm:px-8 md:px-12 lg:px-20 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start">

        {/* =====================================================
            HEADING
        ===================================================== */}

        <div className="w-full max-w-[458px]">
          <h2 className="text-3xl font-bold leading-9 tracking-tight text-sky-900">
            Evidence Before the Examination
          </h2>

          <p className="mt-2 text-base font-normal leading-6 text-slate-600">
            Native Evidence Vault with cryptographically verifiable lineage.
          </p>
        </div>

        {/* =====================================================
            EVIDENCE CARDS
        ===================================================== */}

        <div className="mt-12 w-full px-1 py-2">

          <div className="flex w-full flex-col gap-4">

            {/* Control Card */}
            <EvidenceCard
              icon={<ControlCardIcon />}
              title="Control Card: CTRL-IAM-402"
              rows={[
                {
                  label: "Owner:",
                  value: "Security Operations",
                },
                {
                  label: "Frequency:",
                  value: "Continuous / Automated",
                },
                {
                  label: "Status:",
                  value: "Evidence Verified",
                  valueClassName: "text-emerald-600",
                },
              ]}
            />

            {/* Evidence Vault Object */}
            <EvidenceCard
              icon={<EvidenceVaultIcon />}
              title="Evidence Vault Object"
              rows={[
                {
                  label: "Artifact Type:",
                  value: "Automated Identity Audit Log",
                },
                {
                  label: "Integrity Status:",
                  value: "Integrity Hash Matched",
                },
                {
                  label: "As-Of Timestamp:",
                  value: "2026-10-07 11:47:17 IST",
                },
              ]}
            />

          </div>
        </div>
      </div>
    </section>
  );
}