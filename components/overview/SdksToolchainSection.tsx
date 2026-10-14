import Image from "next/image";
import Link from "next/link";

const sdks = [
  {
    icon: "/overview/sdk-js.svg",
    name: "JavaScript/Node.js",
    packageManager: "NPM",
  },
  {
    icon: "/overview/sdk-python.svg",
    name: "Python",
    packageManager: "PyPI",
  },
  {
    icon: "/overview/sdk-go.svg",
    name: "Go",
    packageManager: "Go Modules",
  },
  {
    icon: "/overview/sdk-java.svg",
    name: "Java",
    packageManager: "Maven",
  },
  {
    icon: "/overview/sdk-ruby.svg",
    name: "Ruby",
    packageManager: "Gem",
  },
  {
    icon: "/overview/sdk-csharp.svg",
    name: "C#/.NET",
    packageManager: "NuGet",
  },
  {
    icon: "/overview/sdk-docker.svg",
    name: "Docker",
    packageManager: "Compose",
  },
  {
    icon: "/overview/sdk-cli.svg",
    name: "CLI Tool",
    packageManager: "Homebrew",
  },
];

export default function SdksToolchainSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-28 xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-14">
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl sm:leading-[59.8px]">
            SDKs and toolchain
          </h2>
          <p className="max-w-[650px] font-manrope text-base font-normal leading-7 text-slate-500">
            Official client libraries and tools. Type-safe, fully tested, actively maintained.
          </p>
        </div>

        {/* 8 SDK Cards */}
        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {sdks.map((sdk, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-center rounded-xl border border-mystic bg-white-solid p-5 text-center transition-all duration-200 hover:-translate-y-1 hover:border-scooter-48/40 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50 p-2 group-hover:bg-scooter-48/10">
                <Image
                  src={sdk.icon}
                  alt={sdk.name}
                  width={32}
                  height={32}
                  className="h-full w-full object-contain"
                />
              </div>

              <h3 className="mt-3 font-manrope text-[14px] font-semibold text-azure-9 line-clamp-1">
                {sdk.name}
              </h3>

              <span className="mt-1.5 inline-block rounded-full bg-emerald-50 px-2 py-0.5 font-manrope text-xs font-semibold text-emerald-600">
                {sdk.packageManager}
              </span>
            </div>
          ))}
        </div>

        {/* Maintenance Status Box */}
        <div className="w-full rounded-xl border border-mystic bg-slate-50/60 p-5 text-center sm:p-6">
          <p className="font-manrope text-sm leading-relaxed text-[#475569] sm:text-[15.2px]">
            <strong className="font-bold text-azure-9">Status:</strong> All SDKs actively maintained. Security patches published within 24 hours. Version compatibility tracked in{" "}
            <Link
              href="/apis-integrations"
              className="font-semibold text-azure-48 underline hover:text-blue-700"
            >
              supported versions guide
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
