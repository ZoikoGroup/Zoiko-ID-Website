export default function WhatIsVerifiedOnboardingSection() {
  return (
    <section className="bg-white px-6 py-12 lg:hidden">
      <div className="mx-auto max-w-[420px]">
        {/* Dark Circle Icon */}
        <div className="mb-3.5 flex justify-center">
          <div className="flex size-9 items-center justify-center rounded-full bg-[#071426] text-white shadow-sm">
            <span className="font-dm-serif text-[20px] font-bold leading-none">?</span>
          </div>
        </div>

        {/* Section Heading */}
        <h2 className="mb-6 text-center font-dm-serif text-[28px] font-normal leading-[1.18] text-[#071426] sm:text-3xl">
          What is verified
          <br />
          onboarding?
        </h2>

        {/* Card */}
        <div className="rounded-[20px] border border-[#dbeafe]/80 bg-[#f4f8fd] p-5 sm:p-6">
          <p className="font-manrope text-[13.5px] font-normal leading-[23px] text-[#475569]">
            Verified onboarding uses organization and identity evidence to
            inform access decisions while keeping verification, authentication,
            and authorization as separate evaluations.
          </p>

          <p className="mt-4 font-manrope text-[13.5px] font-normal leading-[23px] text-[#475569]">
            <strong className="font-bold text-[#0f172a]">Key principle:</strong>{" "}
            Verification output is a qualified input to a broader trust
            decision. Verification success does not automatically grant access
            or assume authority.
          </p>
        </div>
      </div>
    </section>
  );
}
