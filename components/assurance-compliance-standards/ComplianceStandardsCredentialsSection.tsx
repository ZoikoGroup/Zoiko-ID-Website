import Image from "next/image";

export default function ComplianceStandardsCredentialsSection() {
  return (
    <section className="bg-[#F1F5F9] px-6 py-12 lg:px-20 lg:py-12 xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-7 lg:flex-row">
        {/* Card 1: Authentication & passkeys */}
        <div className="flex flex-1 flex-col overflow-hidden rounded-[18px] border border-[#E2E8F0] bg-[#FFFFFF] sm:flex-row">
          <div className="relative h-[200px] w-full shrink-0 overflow-hidden bg-slate-100 sm:h-auto sm:w-[199px]">
            <Image
              src="/assurance-compliance-standards/img-d4e745be4cd2d21c7b088bc739a5832c9219dd7d.png"
              alt="Abstract data visualization"
              fill
              className="object-cover"
              sizes="(min-width: 640px) 200px, 100vw"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between p-6 sm:p-[26px]">
            <div className="flex flex-col gap-2.5">
              <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#E0F2FE]">
                <Image
                  src="/assurance-compliance-standards/icon-411_5962.svg"
                  alt=""
                  width={22}
                  height={22}
                  className="shrink-0"
                />
              </div>

              <h3 className="font-dm-serif text-2xl font-normal leading-[30px] text-[#0B1B33]">
                Authentication & passkeys
              </h3>

              <p className="font-manrope text-[14px] font-normal leading-[22.4px] text-[#64748B]">
                WebAuthn and FIDO2 are concepts in the
                <br />
                <span className="sm:whitespace-nowrap">taxonomy. Their presence in a design does not</span>
                <br />
                confirm a deployed implementation.
              </p>
            </div>

            <div className="pt-6">
              <span className="inline-flex w-fit items-center justify-center rounded-full bg-[#DBEAFE] px-3 py-1 font-manrope text-[11px] font-extrabold uppercase leading-[17.6px] tracking-[0.08em] text-[#1E40AF]">
                Designed for · status to confirm
              </span>
            </div>
          </div>
        </div>

        {/* Card 2: Verifiable credentials */}
        <div className="flex flex-1 flex-col overflow-hidden rounded-[18px] border border-[#E2E8F0] bg-[#FFFFFF] sm:flex-row">
          <div className="relative h-[200px] w-full shrink-0 overflow-hidden bg-slate-100 sm:h-auto sm:w-[200px]">
            <Image
              src="/assurance-compliance-standards/img-a36d0ac22b4ad2257504d906a7ef375adbfd2cc6.png"
              alt="Documents on a desk"
              fill
              className="object-cover"
              sizes="(min-width: 640px) 200px, 100vw"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between p-6 sm:p-[26px]">
            <div className="flex flex-col gap-2.5">
              <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#E0F2FE]">
                <Image
                  src="/assurance-compliance-standards/icon-411_5977.svg"
                  alt=""
                  width={22}
                  height={22}
                  className="shrink-0"
                />
              </div>

              <h3 className="font-dm-serif text-2xl font-normal leading-[30px] text-[#0B1B33]">
                Verifiable credentials
              </h3>

              <p className="font-manrope text-[14px] font-normal leading-[22.4px] text-[#64748B]">
                Issuer and verifier roles are distinct. A
                <br />
                <span className="sm:whitespace-nowrap">credential proves a claim; it does not prove</span>
                <br />
                legal eligibility.
              </p>
            </div>

            <div className="pt-6">
              <span className="inline-flex w-fit items-center justify-center rounded-full border border-dashed border-[#94A3B8] bg-[#F1F5F9] px-3 py-1 font-manrope text-[11px] font-extrabold uppercase leading-[17.6px] tracking-[0.08em] text-[#334155]">
                NOT PUBLICLY CONFIRMED
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
