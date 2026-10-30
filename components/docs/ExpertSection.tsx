import { Pill } from "./shared";

export default function ExpertSection() {
  return (
    <section
      id="expert"
      className="flex scroll-mt-24 items-center bg-[#1B2B45] px-6 py-20 sm:px-10 lg:min-h-[452px] lg:px-20 xl:px-40"
      style={{
        backgroundImage: "url('/docs/Section.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-start gap-4">
        <h2 className="font-dm-serif text-[34px] font-normal leading-[1.15] text-white-solid sm:text-[42px] lg:text-5xl lg:leading-[58px]">
          When the documentation is not enough
        </h2>
        <p className="max-w-[740px] font-manrope text-base leading-7 text-[#E2E8F0] sm:text-lg sm:leading-8">
          If a guide does not answer your question, the expert route can help. No self-service fix is promised for
          every case.
        </p>
        <div className="pt-8">
          <Pill>Talk to an expert: route pending verification</Pill>
        </div>
      </div>
    </section>
  );
}
