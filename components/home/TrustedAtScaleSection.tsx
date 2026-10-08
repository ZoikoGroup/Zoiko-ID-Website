import Image from "next/image";

import { SectionHeader } from "./shared";

const stats = [
  { value: "6B+", label: "Identities Managed Annually" },
  { value: "99.99%", label: "Uptime Guarantee" },
  { value: "150+", label: "Enterprise Customers" },
];

export default function TrustedAtScaleSection() {
  return (
    <section className="relative overflow-hidden bg-azure-9 px-6 py-20 sm:px-10 lg:py-28">
      <Image
        src="/home/trusted-at-scale.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col items-center gap-14">
        <SectionHeader
          dark
          title="Trusted at scale"
          subtitle="Powering identity decisions for enterprises worldwide"
        />

        <dl className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2.5 rounded-2xl bg-white-solid px-10 pb-14 pt-10 outline-1 -outline-offset-1 outline-grey-91"
            >
              <dt className="order-2 text-center font-manrope text-base font-semibold leading-6 text-azure-35">
                {stat.label}
              </dt>
              <dd className="order-1 text-center font-dm-serif text-5xl font-normal leading-[56px] text-azure-53 sm:text-6xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
