import Image from "next/image";
import React from "react";

interface ActorCard {
  id: string;
  image: string;
  icon: string;
  title: string;
  description: React.ReactNode;
}

const ACTORS: ActorCard[] = [
  {
    id: "human",
    image: "/security/img-6989751cdb98b7206f4506fbb6318bdb4f87fa94.png",
    icon: "/security/icon-411_20755.svg",
    title: "Human",
    description: (
      <>
        Signs in and acts for
        <br />
        themselves or
        <br />
        their organization.
      </>
    ),
  },
  {
    id: "organization",
    image: "/security/img-77498c0fbb659917d3ad09864cf89d151f53a7fd.png",
    icon: "/security/icon-411_20769.svg",
    title: "Organization",
    description: (
      <>
        An affiliation. It is never
        <br />
        inferred from an email
        <br />
        domain.
      </>
    ),
  },
  {
    id: "service",
    image: "/security/img-08e9742f28deec7c0981c1a2db199cd5ae97769c.png",
    icon: "/security/icon-411_20783.svg",
    title: "Service",
    description: (
      <>
        A workload with its own
        <br />
        identity and a narrow
        <br />
        role.
      </>
    ),
  },
  {
    id: "machine",
    image: "/security/img-ec01bf576c6053e7e0e4c149679dc6aec93aa06c.png",
    icon: "/security/icon-411_20798.svg",
    title: "Machine",
    description: (
      <>
        An automated device or
        <br />
        process with bounded
        <br />
        duty.
      </>
    ),
  },
  {
    id: "ai-agent",
    image: "/security/img-bc3b50b1110fdb98a8d32ca01f5612932e091dc1.png",
    icon: "/security/icon-411_20812.svg",
    title: "AI agent",
    description: (
      <>
        Acts only under explicit,
        <br />
        sponsored authority. Tool
        <br />
        use is never automatic.
      </>
    ),
  },
];

export default function SecurityActorsSection() {
  return (
    <section className="w-full bg-[#F1F5F9] py-[105px] px-6 sm:px-12 lg:px-20 xl:px-[160px]">
      <div className="max-w-[1120px] mx-auto flex flex-col gap-[60px]">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.13] text-[#0B1B33]">
            An agent should not inherit broad authority
          </h2>
          <div className="max-w-[820px] pt-[2px]">
            <p className="font-manrope text-[16px] leading-[25.6px] text-[#64748B]">
              Being able to authenticate does not give a workload or an agent broad permissions. Each non-human<br className="hidden sm:inline" /> principal needs a sponsor, a mandate, a duration and a role boundary.
            </p>
          </div>
        </div>

        {/* 5 Actor Cards Row / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {ACTORS.map((actor) => (
            <div
              key={actor.id}
              className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[18px] overflow-hidden flex flex-col h-[344px] shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="relative w-full h-[150px] shrink-0">
                <Image
                  src={actor.image}
                  alt={actor.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col gap-[6px] flex-1">
                <div className="w-10 h-10 rounded-[12px] bg-[#E0F2FE] flex items-center justify-center shrink-0">
                  <Image
                    src={actor.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </div>
                <h4 className="font-manrope font-bold text-[17px] leading-[27.2px] text-[#0B1B33] pt-1">
                  {actor.title}
                </h4>
                <div className="font-manrope text-[14px] leading-[22.4px] text-[#64748B]">
                  {actor.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
