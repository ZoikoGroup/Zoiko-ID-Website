import Image from "next/image";
import { Pill } from "@/components/docs/shared";

export default function ExploreDocsBanner() {
  return (
    <section className="border-b border-[#E2E8F0] bg-white-solid px-4 py-12 sm:px-10 lg:px-20 xl:px-40">
      <div className="relative mx-auto flex min-h-[420px] w-full max-w-[1120px] items-end overflow-hidden rounded-3xl">
        <Image
          src="/talk-to-an-expert/Abstract AI visualization.png"
          alt=""
          fill
          sizes="(min-width: 1280px) 1120px, 100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(15,30,54,0.10) 0%, rgba(15,30,54,0.95) 85%)" }}
        />
        <div className="relative flex flex-col gap-3.5 px-6 pb-12 pt-16 sm:px-14 sm:pb-14">
          <h2 className="font-dm-serif text-[34px] font-normal leading-[1.15] text-white-solid sm:text-[42px] lg:text-5xl lg:leading-[58px]">
            Explore documentation
          </h2>
          <p className="font-manrope text-base leading-7 text-[#D3DCE8]">
            Public documentation needs no sign-in. Read it first, then return here if you still have a question.
          </p>
          <div className="pt-6">
            <Pill>Documentation link pending</Pill>
          </div>
        </div>
      </div>
    </section>
  );
}
