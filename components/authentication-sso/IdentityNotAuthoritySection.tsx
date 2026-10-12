import Image from "next/image";

import {
  CheckCircleIcon,
  CheckIcon,
  XCircleIcon,
  XMarkIcon,
} from "@/components/home/icons";
import { SectionHeader } from "@/components/home/shared";

const columns = [
  {
    title: "NOT Enough",
    color: "text-[#DC2626]",
    headingIcon: <XCircleIcon size={28} />,
    itemIcon: <XMarkIcon size={20} />,
    items: [
      "Knowing who someone is",
      "Proving they authenticated",
      "Verifying their claims",
      "Trusting their credentials",
    ],
  },
  {
    title: "Still Required",
    color: "text-[#16A34A]",
    headingIcon: <CheckCircleIcon size={28} />,
    itemIcon: <CheckIcon size={20} />,
    items: [
      "Explicit access policy",
      "Resource-level permissions",
      "Delegated authority proof",
      "Continuous reevaluation",
    ],
  },
];

export default function IdentityNotAuthoritySection() {
  return (
    <section className="relative overflow-hidden bg-azure-9 px-6 py-20 sm:px-10 lg:py-28">
      <Image
        src="/authentication-sso/identity-not-authority-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12">
        <SectionHeader dark title="Identity is not authority" />

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {columns.map((column) => (
            <article
              key={column.title}
              className="flex flex-col gap-5 rounded-xl bg-white-solid p-8 outline-1 -outline-offset-1 outline-grey-91"
            >
              <h3
                className={`flex items-center gap-3 font-dm-serif text-2xl font-normal ${column.color}`}
              >
                {column.headingIcon}
                {column.title}
              </h3>

              <ul className="flex flex-col gap-3">
                {column.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-manrope text-base font-normal text-azure-35"
                  >
                    <span className={`shrink-0 pt-0.5 ${column.color}`}>
                      {column.itemIcon}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="max-w-[960px] pt-4 text-center font-manrope text-base font-normal leading-7 text-white-solid">
          Authentication provides identity context. Policy engines decide what
          authenticated users can do. Never conflate the two.
        </p>
      </div>
    </section>
  );
}
