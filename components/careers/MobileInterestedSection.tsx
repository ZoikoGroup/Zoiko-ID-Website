import Image from "next/image";

export default function MobileInterestedSection() {
  return (
    <section className="bg-white px-[22px] pb-[60px] pt-[62px]">
      <div className="mx-auto flex w-full max-w-[560px] items-center gap-[24px] rounded-[18px] border border-solid border-[#dce3ee] px-[40px] py-[34px]">
        <div className="flex size-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8]">
          <Image src="/careers/mobile-icon-bulb.svg" width={26} height={26} alt="" />
        </div>
        <p className="min-w-0 font-manrope text-[17px] font-normal leading-[28px] text-[#334155] min-[380px]:whitespace-nowrap">
          <strong className="font-bold text-[#0b1b33]">
            Interested before a role
            <br />
            exists?
          </strong>{" "}
          Read how the
          <br />
          platform works and what
          <br />
          problems it addresses.
          <br />
          We do not keep
          <br />
          speculative lists or
          <br />
          collect details for future
          <br />
          roles.
        </p>
      </div>
    </section>
  );
}
