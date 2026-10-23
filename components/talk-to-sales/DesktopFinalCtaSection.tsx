import Image from "next/image";
import Link from "next/link";

const GLOW = `url("data:image/svg+xml;utf8,<svg viewBox='0 0 625 673.84' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(42.597 0 0 49.579 312.5 336.92)'><stop stop-color='rgba(34,184,214,0.12)' offset='0'/><stop stop-color='rgba(34,184,214,0)' offset='0.7'/></radialGradient></defs></svg>")`;

export default function DesktopFinalCtaSection() {
  return (
    <section className="bg-white px-[105px] py-[48px]">
      <div className="relative mx-auto flex w-full flex-col items-center overflow-clip rounded-[32px] px-[80px] py-[130px]">
        <div aria-hidden="true" className="absolute inset-0 rounded-[32px]">
          <div
            className="absolute inset-0 rounded-[32px]"
            style={{
              backgroundImage:
                "linear-gradient(126.39667222005355deg, rgb(7, 20, 38) 1.8504%, rgb(13, 31, 53) 67.305%, rgba(34, 184, 214, 0.1) 132.76%)",
            }}
          />
          <Image
            src="/talk-to-sales/desktop-final-cta-bg.webp"
            alt=""
            fill
            sizes="1250px"
            className="rounded-[32px] object-cover opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-[0_-20%_-40%_70%] rounded-[346.74px] blur-[60px]"
          style={{ backgroundImage: GLOW }}
        />

        <div className="relative flex w-full max-w-[1280px] flex-col items-center justify-center gap-[15.3px] px-[80px]">
          <h2 className="w-full font-dm-serif text-center text-[52px] font-normal leading-[59.8px] tracking-[-0.78px] text-white">
            Start your enterprise enquiry.
          </h2>
          <p className="max-w-[600px] font-manrope text-center text-[15px] font-normal leading-[24px] text-[#b6c5d9]">
            Choose what you want to discuss, share your evaluation goals, and we
            will route your enquiry for review. No contractual commitment or
            offer is created by submitting an enquiry.
          </p>
        </div>

        <div className="relative flex w-full flex-wrap items-center justify-center gap-x-[19.99px] gap-y-[20px] pt-[20.01px]">
          <Link
            href="#enquiry-form"
            className="flex items-center whitespace-nowrap rounded-[6px] bg-[#2563eb] px-[28px] py-[13px] font-manrope text-[15px] font-bold leading-[24px] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Start sales enquiry
          </Link>
          <Link
            href="/architecture-guides"
            className="flex items-center whitespace-nowrap rounded-[6px] border border-solid border-white px-[28px] py-[14px] font-manrope text-[15px] font-bold leading-[24px] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Explore the platform
          </Link>
        </div>
      </div>
    </section>
  );
}
