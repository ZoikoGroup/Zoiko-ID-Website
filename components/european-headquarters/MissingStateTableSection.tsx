import React from "react";

export default function MissingStateTableSection() {
  return (
    <section className="bg-[#071426] text-white py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-16 text-center">
          What the page shows when something is missing
        </h2>

        {/* Table Container */}
        <div className="w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#EEF2F7] text-slate-900 border-b border-slate-200">
                <th className="py-4 px-6 font-bold text-sm md:text-base w-1/3">
                  State
                </th>
                <th className="py-4 px-6 font-bold text-sm md:text-base w-2/3">
                  What the visitor sees
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800 text-sm md:text-base">
              {/* Row 1 */}
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-5 px-6 font-semibold text-slate-900">
                  Default
                </td>
                <td className="py-5 px-6 text-slate-600">
                  Address and approved routes. The address loads without any
                  dependency.
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-5 px-6 font-semibold text-slate-900">
                  Route unavailable
                </td>
                <td className="py-5 px-6 text-slate-600">
                  The link is removed. A general Contact fallback is shown if
                  approved.
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-5 px-6 font-semibold text-slate-900">
                  Registry unavailable
                </td>
                <td className="py-5 px-6 text-slate-600">
                  The last approved address snapshot is shown, with a freshness
                  notice.
                </td>
              </tr>

              {/* Row 4 */}
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-5 px-6 font-semibold text-slate-900">
                  Address conflict
                </td>
                <td className="py-5 px-6 text-slate-600">
                  Nothing is published until the conflict is resolved and
                  approved.
                </td>
              </tr>

              {/* Row 5 */}
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-5 px-6 font-semibold text-slate-900">
                  Copy action unsupported
                </td>
                <td className="py-5 px-6 text-slate-600">
                  The address stays selectable text. No copy button is shown.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
