import Image from "next/image";

import { ButtonLink } from "./shared";

const highlights = [
  "<50ms average decision latency globally",
  "99.99% uptime SLA with multi-region redundancy",
  "6B+ identity decisions processed annually",
  "Auto-scaling to handle traffic spikes",
  "Global CDN for edge decision making",
  "24/7 monitoring and alerting",
];

export default function PerformanceSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:flex-row lg:gap-24">
        <div className="flex flex-1 flex-col items-start gap-6">
          <h2 className="max-w-[500px] font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl sm:leading-[59.8px]">
            Built for performance at scale
          </h2>

          <p className="max-w-[500px] font-manrope text-base font-normal leading-7 text-azure-35">
            Enterprise infrastructure engineered for speed, reliability, and
            global scale. Process billions of identity decisions annually with
            consistent sub-50ms latency.
          </p>

          <ul className="flex flex-col gap-4 py-4">
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-4 font-manrope text-base font-normal leading-6 text-azure-35"
              >
                <span aria-hidden="true" className="text-xl leading-6 text-cyan-49">
                  ✓
                </span>
                {highlight}
              </li>
            ))}
          </ul>

          <ButtonLink>View SLA details</ButtonLink>
        </div>

        <div className="relative aspect-[528/500] w-full max-w-[528px] overflow-hidden rounded-3xl shadow-[0px_20px_48px_0px_rgba(0,0,0,0.15)] lg:shrink-0">
          <Image
            src="/home/performance-at-scale.webp"
            alt="Developer writing code on a laptop"
            fill
            sizes="(min-width: 640px) 528px, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
