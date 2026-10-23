interface RolePermissionsSectionProps {
  view?: "all" | "desktop" | "mobile";
}

interface RolePermission {
  role: string;
  canRead: string;
  canEdit: string;
  canPublish: string;
}

const rolePermissions: RolePermission[] = [
  {
    role: "Anonymous visitor",
    canRead: "Published public content",
    canEdit: "No",
    canPublish: "No",
  },
  {
    role: "Authenticated user",
    canRead: "Public plus entitled content, where implemented",
    canEdit: "No",
    canPublish: "No",
  },
  {
    role: "Documentation editor",
    canRead: "Assigned drafts",
    canEdit: "Assigned drafts",
    canPublish: "No",
  },
  {
    role: "Technical reviewer",
    canRead: "Assigned documents",
    canEdit: "Review comments only",
    canPublish: "Technical sign-off",
  },
  {
    role: "Security, Legal, Privacy",
    canRead: "Assigned sensitive documents",
    canEdit: "Review comments only",
    canPublish: "Subject sign-off",
  },
  {
    role: "Publication owner",
    canRead: "Governed corpus",
    canEdit: "Release operations",
    canPublish: "After all gates",
  },
];

export default function RolePermissionsSection({
  view = "all",
}: RolePermissionsSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full bg-white border-t border-slate-100">
      {/* DESKTOP VERSION (hidden sm:block) */}
      {showDesktop && (
        <div className="hidden sm:block py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Heading */}
              <div className="lg:col-span-4">
                <h2 className="font-dm-serif text-3xl font-normal leading-[1.15] tracking-tight text-[#071324] sm:text-4xl lg:text-[44px]">
                  Who can
                  <br />
                  read, edit
                  <br />
                  and publish
                </h2>
              </div>

              {/* Right Column: 4-Column Permissions Table */}
              <div className="lg:col-span-8">
                <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
                  {/* Table Header */}
                  <div className="grid grid-cols-12 bg-[#edf2f7] px-6 py-3.5 text-xs font-bold text-[#071324] font-manrope">
                    <span className="col-span-3">Role</span>
                    <span className="col-span-4">Can read</span>
                    <span className="col-span-3">Can edit</span>
                    <span className="col-span-2">Can publish</span>
                  </div>

                  {/* Rows */}
                  <div className="divide-y divide-slate-100 font-manrope text-xs sm:text-[13px]">
                    {rolePermissions.map((row) => (
                      <div
                        key={row.role}
                        className="grid grid-cols-12 items-center px-6 py-4"
                      >
                        <span className="col-span-3 font-bold text-[#071324]">
                          {row.role}
                        </span>
                        <span className="col-span-4 text-[#64748b]">
                          {row.canRead}
                        </span>
                        <span className="col-span-3 text-[#64748b]">
                          {row.canEdit}
                        </span>
                        <span className="col-span-2 text-[#64748b]">
                          {row.canPublish}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE VERSION (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden bg-white px-5 py-12 border-t border-slate-200/60">
          {/* Category Number & Eyebrow */}
          <div>
            <p className="font-mono text-[10.5px] font-bold uppercase tracking-widest text-[#0ea5e9]">
              11 · PERMISSIONS
            </p>
            <div className="mt-1.5 h-[2px] w-12 bg-[#0ea5e9]" />
          </div>

          {/* Heading */}
          <h2 className="mt-4 font-dm-serif text-[30px] font-normal leading-[1.2] tracking-tight text-[#071324]">
            Who can read, edit and publish
          </h2>

          {/* Mobile Table Card */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs">
            {/* Table Header */}
            <div className="grid grid-cols-[100px_1fr_85px] bg-[#edf2f7] px-4 py-3 text-[11.5px] font-bold text-[#071324] font-manrope">
              <span>Role</span>
              <span>Can read</span>
              <span>Can edit</span>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-slate-100 font-manrope text-xs">
              <div className="grid grid-cols-[100px_1fr_85px] items-start px-4 py-3.5">
                <span className="font-bold text-[#071324] text-[12px] leading-snug">
                  Anonymous visitor
                </span>
                <span className="text-[#64748b] text-[11.5px] leading-snug pr-2">
                  Published public content
                </span>
                <span className="text-[#64748b] text-[11.5px]">No</span>
              </div>

              <div className="grid grid-cols-[100px_1fr_85px] items-start px-4 py-3.5">
                <span className="font-bold text-[#071324] text-[12px] leading-snug">
                  Authenticated user
                </span>
                <span className="text-[#64748b] text-[11.5px] leading-snug pr-2">
                  Public plus entitled content, where implemented
                </span>
                <span className="text-[#64748b] text-[11.5px]">No</span>
              </div>

              <div className="grid grid-cols-[100px_1fr_85px] items-start px-4 py-3.5">
                <span className="font-bold text-[#071324] text-[12px] leading-snug">
                  Documentation editor
                </span>
                <span className="text-[#64748b] text-[11.5px] leading-snug pr-2">
                  Assigned drafts
                </span>
                <span className="text-[#64748b] text-[11.5px] leading-snug">
                  Assigned drafts
                </span>
              </div>

              <div className="grid grid-cols-[100px_1fr_85px] items-start px-4 py-3.5">
                <span className="font-bold text-[#071324] text-[12px] leading-snug">
                  Technical reviewer
                </span>
                <span className="text-[#64748b] text-[11.5px] leading-snug pr-2">
                  Assigned documents
                </span>
                <span className="text-[#64748b] text-[11.5px] leading-snug">
                  Review comments only
                </span>
              </div>

              <div className="grid grid-cols-[100px_1fr_85px] items-start px-4 py-3.5">
                <span className="font-bold text-[#071324] text-[12px] leading-snug">
                  Security, Legal, Privacy
                </span>
                <span className="text-[#64748b] text-[11.5px] leading-snug pr-2">
                  Assigned sensitive documents
                </span>
                <span className="text-[#64748b] text-[11.5px] leading-snug">
                  Review comments only
                </span>
              </div>

              <div className="grid grid-cols-[100px_1fr_85px] items-start px-4 py-3.5">
                <span className="font-bold text-[#071324] text-[12px] leading-snug">
                  Publication owner
                </span>
                <span className="text-[#64748b] text-[11.5px] leading-snug pr-2">
                  Governed corpus
                </span>
                <span className="text-[#64748b] text-[11.5px] leading-snug">
                  Release operations
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
