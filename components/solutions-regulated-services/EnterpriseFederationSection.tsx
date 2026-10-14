import { DarkMonitorHeaderIcon } from "./icons";

export default function EnterpriseFederationSection() {
  return (
    <section className="bg-white px-5 py-12 sm:px-10 lg:px-16 lg:py-24 xl:px-20">
      <div className="mx-auto max-w-[1140px]">
        {/* Section Heading & Subtitle */}
        <div className="mx-auto mb-8 max-w-[760px] text-left sm:mb-12 sm:text-center">
          {/* Mobile Header with Monitor Icon */}
          <div className="mb-4 flex items-center gap-3 sm:hidden">
            <DarkMonitorHeaderIcon className="size-6 shrink-0 text-[#071426]" />
            <h2 className="font-dm-serif text-[26px] font-normal leading-[1.15] text-azure-9">
              Enterprise
              <br />
              federation overlay
            </h2>
          </div>

          {/* Desktop Header */}
          <h2 className="hidden font-dm-serif text-3xl font-normal tracking-tight text-azure-9 sm:block sm:text-4xl lg:text-[44px]">
            Enterprise federation overlay
          </h2>

          <p className="mt-3 font-manrope text-[12px] leading-relaxed text-azure-47 sm:mt-3.5 sm:text-[13.5px]">
            Regulated organizations often have existing IdP infrastructure (Active Directory, LDAP, SAML). Zoiko iD overlays identity + authority + evidence without replacing your IdP.
          </p>
        </div>

        {/* 2-Column Comparison Cards */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:gap-8">
          {/* Left Card: Your IdP (Source of Truth) */}
          <div className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] sm:p-8">
            <h3 className="font-dm-serif text-lg font-normal text-azure-9 sm:text-xl">
              Your IdP (Source of Truth)
            </h3>

            <ul className="mt-4 flex flex-col gap-3 font-manrope text-[12.5px] leading-relaxed text-azure-47 sm:mt-5 sm:text-[13px]">
              <li className="flex items-start gap-2">
                <span className="text-azure-47">•</span>
                <span>Remains your identity authority (AD, Okta, Ping, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-azure-47">•</span>
                <span>Owns user records, group membership, role assignments</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-azure-47">•</span>
                <span>Issues tokens, credentials, session certificates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-azure-47">•</span>
                <span>No change required to existing deployments</span>
              </li>
            </ul>
          </div>

          {/* Right Card: Zoiko iD Authority Layer */}
          <div className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] sm:p-8">
            <h3 className="font-dm-serif text-lg font-normal text-azure-9 sm:text-xl">
              Zoiko iD Authority Layer
            </h3>

            <ul className="mt-4 flex flex-col gap-3 font-manrope text-[12.5px] leading-relaxed text-azure-47 sm:mt-5 sm:text-[13px]">
              <li className="flex items-start gap-2">
                <span className="text-azure-47">•</span>
                <span>Sits between IdP and resource layer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-azure-47">•</span>
                <span>Adds explicit delegation (mandates, time bounds)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-azure-47">•</span>
                <span>Enforces policy-driven access decisions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-azure-47">•</span>
                <span>Logs authority decisions for audit</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Red-Bordered Disclaimer Box */}
        <div className="mt-5 rounded-2xl border border-red-300 bg-red-50/40 p-4.5 shadow-xs sm:mt-8 sm:bg-white sm:p-5">
          <p className="font-manrope text-[11.5px] leading-relaxed text-azure-47 sm:text-[13px]">
            <span className="font-bold text-amber-600">⚠</span>{" "}
            <strong className="font-bold text-red-600">No IdP Replacement:</strong>{" "}
            Your existing identity infrastructure remains in place. Zoiko iD adds authority and evidence on top. This is an overlay model, not a replacement.
          </p>
        </div>
      </div>
    </section>
  );
}
