import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DocsCta() {
  return (
    <section className="bg-white-solid px-4 py-12 sm:px-10 lg:px-[95px]">
      <div
        className="mx-auto flex w-full max-w-[1250px] flex-col items-center gap-5 rounded-[32px] px-6 py-16 text-center sm:px-12 lg:min-h-[432px] lg:justify-center"
        style={{
          backgroundColor: "#2C3E57",
          backgroundImage: "url('/docs/Section - 20. FINAL CTA.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="max-w-[940px] font-dm-serif text-[34px] font-normal leading-[1.12] text-white-solid sm:text-[44px] lg:text-[56px] lg:leading-[62px]">
          Start with the prerequisites, then build.
        </h2>
        <p className="max-w-[620px] font-manrope text-base leading-7 text-[#E2E8F0]">
          Verify the prerequisites above, then follow the guide that matches your release.
        </p>
        <div className="pt-6">
          <Link
            href="#prerequisites"
            className="inline-flex items-center gap-2.5 rounded-full bg-white-solid px-7 py-4 font-manrope text-base font-bold text-[#0F172A] transition-colors hover:bg-[#E2E8F0]"
          >
            Start here
            <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
