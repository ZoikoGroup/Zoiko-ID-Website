import Image from "next/image";

const items = [
  { term: "Authenticate", rest: " — who is this?" },
  { term: "Authorize", rest: " — may this action happen?" },
  { term: "Prove the mandate", rest: " — on whose behalf, and why?" },
];

export default function DesktopAuthenticateSection() {
  return (
    <section
      id="authentication"
      className="flex w-full items-center justify-center gap-[80px] border-b border-[#e2e8f0] bg-white px-[160px] py-[105px]"
    >
      <div className="flex min-w-px flex-1 flex-col items-start gap-[36px]">
        <div className="flex w-full flex-col items-start">
          <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[57.9px] text-[#07111f]">
            Authenticate is not authorize, and neither proves a mandate
          </h2>
          <p className="w-full pt-[14.5px] font-manrope text-[16px] leading-[25.6px] text-[#64748b]">
            Enterprises often ask one system to answer three different questions. Keeping them
            separate prevents a successful sign-in from being read as permission to act.
          </p>
        </div>
        <ul className="flex w-full flex-col items-start gap-[9.5px] pt-[18.5px]">
          {items.map((it) => (
            <li
              key={it.term}
              className="relative w-full whitespace-nowrap pl-[22px] font-manrope text-[15px] leading-[24px]"
            >
              <span aria-hidden className="absolute left-0 top-[9.5px] size-[8px] rounded-[2px] bg-[#22b8d6]" />
              <strong className="font-bold text-[#07111f]">{it.term}</strong>
              <span className="text-[#334155]">{it.rest}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative h-[380px] min-w-px flex-1 rounded-[18px]">
        <Image
          src="/enterprise/desktop-architecture-whiteboard.webp"
          alt="Whiteboard sketch of an architecture separating authentication, authorization and mandate"
          fill
          sizes="560px"
          className="rounded-[18px] object-cover"
        />
      </div>
    </section>
  );
}
