import Image from "next/image";

/* ===== Mobile layout (< lg) — mobile-only closing block ===== */
function MobileNextStep() {
  return (
    <section className="bg-[#0b1b33] px-[22px] pb-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[50px] pt-[60px]">
        <div className="flex flex-col pt-[7.31px]">
          <div className="flex items-center gap-[12px]">
            <div className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
            <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6] whitespace-nowrap">
              20 · Next step
            </p>
          </div>
          <h2 className="pb-[0.65px] pt-[14.7px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-white">
            Read the authorization
            <br />
            model, then the trust
            <br />
            proofs.
          </h2>
          <p className="pt-[16px] font-manrope text-[16px] font-normal leading-[27.2px] text-[#b6c3d6] whitespace-nowrap">
            Delegated authority explains what an actor may
            <br />
            do. The Trust Center holds assurance material,
            <br />
            and Contact handles the questions the model
            <br />
            does not answer.
          </p>
        </div>
        <div className="relative h-[380px] w-full overflow-hidden rounded-[24px]">
          <Image
            src="/machine-agent-identity/mobile-footer-network.webp"
            alt=""
            fill
            sizes="(max-width: 1023px) 100vw, 560px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default function NextStepSection() {
  return (
    <div className="overflow-x-clip lg:hidden">
      <MobileNextStep />
    </div>
  );
}
