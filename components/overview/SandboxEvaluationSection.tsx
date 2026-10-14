import Image from "next/image";
import Link from "next/link";

export default function SandboxEvaluationSection() {
  return (
    <section className="relative overflow-hidden bg-[#071426] px-6 py-20 sm:px-10 lg:px-20 lg:py-28 xl:px-40">
      {/* Background Image Layer */}
      <div className="pointer-events-none absolute inset-0 opacity-25 mix-blend-screen">
        <Image
          src="/overview/sandbox-bg.webp"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-14">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-4xl font-normal leading-tight text-white-solid sm:text-5xl sm:leading-[59.8px]">
          Sandbox and evaluation
        </h2>

        {/* 2 White Cards Grid */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {/* Card 1: Gated environment */}
          <div className="flex flex-col justify-between rounded-xl border border-mystic bg-white-solid p-8 shadow-xl sm:p-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-scooter-48/10 p-2">
                  <Image
                    src="/overview/sandbox-gated.svg"
                    alt=""
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-dm-serif text-2xl font-normal text-azure-9">
                  Gated environment
                </h3>
              </div>

              <p className="font-manrope text-[15.2px] font-normal leading-relaxed text-slate-500">
                Sandbox access is by request. We provision isolated test environments for qualified organizations.
              </p>
            </div>
          </div>

          {/* Card 2: Start here */}
          <div className="flex flex-col justify-between rounded-xl border border-mystic bg-white-solid p-8 shadow-xl sm:p-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-scooter-48/10 p-2">
                  <Image
                    src="/overview/sandbox-start.svg"
                    alt=""
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-dm-serif text-2xl font-normal text-azure-9">
                  Start here
                </h3>
              </div>

              <p className="font-manrope text-[15.2px] font-normal leading-relaxed text-slate-500">
                Talk to our team. We&apos;ll discuss your use case, set up a sandbox, and walk you through integration.
              </p>
            </div>

            <div className="mt-8 pt-2">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2.5 rounded-[6px] bg-azure-48 px-7 py-3 font-manrope text-[15.2px] font-bold text-white-solid shadow-[0px_8px_20px_0px_rgba(37,99,235,0.3)] transition-all duration-200 hover:bg-blue-600 hover:shadow-[0px_10px_24px_0px_rgba(37,99,235,0.4)]"
              >
                Request sandbox
                <Image
                  src="/overview/arrow-right.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="brightness-0 invert"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* What You Get Bottom Banner */}
        <div className="w-full rounded-xl border border-white-solid/30 bg-white-solid/10 p-6 backdrop-blur-sm sm:p-7">
          <p className="font-manrope text-sm leading-relaxed text-white-solid sm:text-[15.2px]">
            <strong className="font-bold">What you get:</strong> Isolated tenant, test API keys, sandbox webhooks, example apps, and direct access to our integration team. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
