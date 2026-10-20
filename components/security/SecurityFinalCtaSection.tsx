import Image from "next/image";
import Link from "next/link";

export default function SecurityFinalCtaSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-12 px-4 sm:px-8 xl:px-[105px]">
      <div
        className="relative max-w-[1250px] mx-auto rounded-[32px] overflow-hidden py-[100px] sm:py-[130px] px-6 sm:px-12 lg:px-20 text-center shadow-xl"
        style={{
          background:
            "linear-gradient(159deg, #071426 0%, #0D1F35 50%, rgba(34, 184, 214, 0.1) 100%)",
        }}
      >
        {/* Background Image with Figma's exact 20% opacity */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/security/img-4cde02412514b2b9f4267963d39a3942b38a898c.png"
            alt="CTA background"
            fill
            className="object-cover opacity-25"
          />
        </div>

        {/* Top-right radial glow (Cyan glow from Figma #502:1131) */}
        <div
          className="absolute -right-20 -top-20 w-[625px] h-[625px] rounded-full pointer-events-none z-0 blur-[80px]"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(34, 184, 214, 0.28) 0%, rgba(34, 184, 214, 0) 70%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-4 sm:gap-6 max-w-[900px] mx-auto">
          {/* Heading */}
          <h2 className="font-dm-serif text-[36px] sm:text-[46px] lg:text-[52px] leading-[1.15] text-[#FFFFFF]">
            Evaluate security architecture and<br className="hidden sm:inline" /> delegated authority with<br className="hidden sm:inline" /> the Zoiko iD team.
          </h2>

          {/* Description */}
          <div className="max-w-[600px] mx-auto">
            <p className="font-manrope text-[15px] sm:text-[16px] leading-[25.6px] text-[#CBD5E1] whitespace-pre-line">
              Bring your identity estate, your delegation requirements and your{"\n"}evidence expectations. For technical depth, read the developer{"\n"}documentation first.
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <Image
                src="/security/icon-502_1139.svg"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span className="font-manrope font-medium text-[14px] sm:text-[15.2px] leading-[24.32px] text-[#E2E8F0]">
                Designed architecture
              </span>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <Image
                src="/security/icon-502_1145.svg"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span className="font-manrope font-medium text-[14px] sm:text-[15.2px] leading-[24.32px] text-[#E2E8F0]">
                No certification implied
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-[6px] bg-[#2563EB] hover:bg-blue-600 font-manrope font-bold text-[15px] leading-[24px] text-[#FFFFFF] shadow-sm transition-all duration-200"
            >
              Talk to an identity expert
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-[6px] border border-[#FFFFFF] hover:bg-white/10 font-manrope font-bold text-[15px] leading-[24px] text-[#FFFFFF] transition-all duration-200"
            >
              View developer docs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
