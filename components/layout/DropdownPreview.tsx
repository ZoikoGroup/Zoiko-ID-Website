"use client";

import { MegaMenuPanel, navigationItems } from "./Header";

// Shows every header dropdown open at once, for design review
export default function DropdownPreview() {
  return (
    <div className="flex flex-col items-center gap-16 overflow-x-auto bg-azure-9 px-6 py-16">
      {navigationItems.map((item) =>
        item.menu ? (
          <section key={item.label} className="flex flex-col gap-4">
            <h2 className="font-manrope text-sm font-semibold uppercase tracking-wide text-cyan-49">
              {item.label}
            </h2>
            <MegaMenuPanel
              id={`${item.label.toLowerCase()}-preview`}
              menu={item.menu}
              onNavigate={() => {}}
            />
          </section>
        ) : null
      )}
    </div>
  );
}
