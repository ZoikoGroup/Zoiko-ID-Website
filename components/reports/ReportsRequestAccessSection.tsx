"use client";

import Image from "next/image";
import { useState } from "react";

export default function ReportsRequestAccessSection() {
  const [orgName, setOrgName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [reportsSelected, setReportsSelected] = useState<string[]>([]);
  const [purpose, setPurpose] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleReport = (reportName: string) => {
    setReportsSelected((prev) =>
      prev.includes(reportName)
        ? prev.filter((r) => r !== reportName)
        : [...prev, reportName]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orgName || !email || !agreed) return;
    setSubmitted(true);
  };

  return (
    <section
      id="request-access"
      className="relative scroll-mt-24 overflow-hidden px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px]"
      style={{
        backgroundColor: "#030712",
        backgroundImage: `linear-gradient(rgba(3, 7, 18, 0.88), rgba(3, 7, 18, 0.88)), url('/reports/form-bg.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      <div className="relative mx-auto flex w-full max-w-[1108px] flex-col items-center gap-10 lg:gap-14">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-3xl font-normal text-white-solid sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Request restricted report access
        </h2>

        {/* Form Container Card */}
        <div className="w-full rounded-[12px] border border-[#E2E8F0] bg-white-solid p-6 shadow-xl sm:p-10">
          {/* Explanation Header */}
          <div className="pb-7">
            <p className="font-manrope text-[15.2px] leading-[26.6px] text-[#64748B]">
              <span className="font-bold text-[#071426]">How it works:</span>{" "}
              Submit your request below. Our trust team will review your
              organization and purpose, then approve or deny access. You&apos;ll
              receive a secure download link or document portal access.
            </p>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-dm-serif text-2xl font-normal text-[#071426]">
                Access Request Received
              </h3>
              <p className="max-w-md font-manrope text-[15.2px] text-[#64748B]">
                Thank you. We have logged your request for review. You will receive
                a verification message at <span className="font-semibold text-[#071426]">{email}</span> within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Organization Name */}
              <div className="flex flex-col gap-2">
                <label className="font-manrope text-[15.2px] font-semibold text-[#071426]">
                  Organization Name
                </label>
                <input
                  type="text"
                  required
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  placeholder="Your company name"
                  className="w-full rounded-[6px] border border-[#E2E8F0] bg-white-solid px-4 py-3.5 font-manrope text-[15.2px] text-[#071426] placeholder-[#757575] outline-none transition-colors focus:border-[#2563EB]"
                />
              </div>

              {/* Business Email */}
              <div className="flex flex-col gap-2">
                <label className="font-manrope text-[15.2px] font-semibold text-[#071426]">
                  Business Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@company.com"
                  className="w-full rounded-[6px] border border-[#E2E8F0] bg-white-solid px-4 py-3.5 font-manrope text-[15.2px] text-[#071426] placeholder-[#757575] outline-none transition-colors focus:border-[#2563EB]"
                />
              </div>

              {/* Your Role */}
              <div className="flex flex-col gap-2">
                <label className="font-manrope text-[15.2px] font-semibold text-[#071426]">
                  Your Role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full rounded-[6px] border border-[#E2E8F0] bg-[#EFEFEF] px-4 py-3.5 font-manrope text-[15.2px] text-[#000000] outline-none transition-colors focus:border-[#2563EB]"
                >
                  <option value="" disabled>
                    Select your role
                  </option>
                  <option value="security">Security Engineer</option>
                  <option value="compliance">Compliance Officer</option>
                  <option value="procurement">Procurement / Legal</option>
                  <option value="ciso">CISO / Executive</option>
                  <option value="architect">Enterprise Architect</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Which report(s) are you requesting? */}
              <div className="flex flex-col gap-3">
                <label className="font-manrope text-[15.2px] font-semibold text-[#071426]">
                  Which report(s) are you requesting?
                </label>
                <div className="flex flex-col gap-3 pt-1">
                  {[
                    "GDPR Data Processing Assessment",
                    "HIPAA Compliance Review",
                    "Penetration Test Report",
                  ].map((rep) => {
                    const isChecked = reportsSelected.includes(rep);
                    return (
                      <label
                        key={rep}
                        onClick={() => toggleReport(rep)}
                        className="flex cursor-pointer items-center gap-3 select-none"
                      >
                        <div
                          className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[2.5px] border transition-colors ${
                            isChecked
                              ? "border-[#2563EB] bg-[#2563EB] text-white"
                              : "border-[#767676] bg-white-solid"
                          }`}
                        >
                          {isChecked && (
                            <svg
                              className="h-3.5 w-3.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </div>
                        <span className="font-manrope text-base text-[#475569]">
                          {rep}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Business Purpose for Access */}
              <div className="flex flex-col gap-2">
                <label className="font-manrope text-[15.2px] font-semibold text-[#071426]">
                  Business Purpose for Access
                </label>
                <textarea
                  rows={4}
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  placeholder="Describe your intended use (e.g., vendor assessment, compliance audit, security review)..."
                  className="w-full resize-y rounded-[6px] border border-[#E2E8F0] bg-white-solid p-3.5 font-manrope text-[15.2px] text-[#071426] placeholder-[#757575] outline-none transition-colors focus:border-[#2563EB]"
                />
              </div>

              {/* Compliance Agreement Checkbox */}
              <label
                onClick={() => setAgreed(!agreed)}
                className="flex cursor-pointer items-start gap-3 select-none pt-1"
              >
                <div
                  className={`mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[2.5px] border transition-colors ${
                    agreed
                      ? "border-[#2563EB] bg-[#2563EB] text-white"
                      : "border-[#767676] bg-white-solid"
                  }`}
                >
                  {agreed && (
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                <span className="font-manrope text-[14.4px] leading-relaxed text-[#475569]">
                  I agree to use these reports only for authorized business purposes
                  and will not publicly disclose or redistribute them without
                  permission.
                </span>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!agreed}
                className="mt-2 flex w-full items-center justify-center gap-2.5 rounded-[6px] bg-[#2563EB] py-3.5 font-manrope text-[15.2px] font-bold text-white-solid shadow-md transition-all duration-200 hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Image
                  src="/reports/form-submit.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="brightness-0 invert"
                />
                Submit Request
              </button>
            </form>
          )}

          {/* Footer Callout */}
          <div className="mt-8 border-t border-[#E2E8F0] pt-7 text-center">
            <p className="font-manrope text-[13.6px] leading-[23.8px] text-[#64748B]">
              <span className="font-bold text-[#071426]">What happens next?</span>{" "}
              You&apos;ll receive a confirmation email within 24 hours. Approval
              typically takes 2–3 business days. Access is managed securely with
              audit logging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
