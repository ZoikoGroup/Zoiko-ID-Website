import Image from "next/image";

const notes = [
  "Keep messages to the facts needed to route your request.",
  "Attachments are not accepted by default.",
];

export default function DesktopNoSecretsSection() {
  return (
    <section className="w-full bg-[#fafbfd] px-[160px] py-[105px]">
      <div className="flex min-h-[416px] w-full items-center justify-center gap-[80px]">
        <div className="relative min-h-[380px] min-w-0 flex-1 self-stretch">
          <Image
            src="/contact/desktop-form-developer.webp"
            alt="Developer working at a desk"
            fill
            sizes="(min-width: 1024px) 520px, 100vw"
            className="rounded-[18px] object-cover"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-[32px]">
          <div className="flex flex-col gap-[15px]">
            <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
              Do not include secrets
            </h2>
            <p className="max-w-[720px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82]">
              Passwords, tokens, API keys, private keys, government identification numbers and confidential security configurations must never be included in a message. We will not ask for them.
            </p>
          </div>
          <ul className="flex flex-col gap-[12px] pt-[13px]">
            {notes.map((t) => (
              <li key={t} className="flex items-center gap-[12px]">
                <Image src="/contact/desktop-icon-x.svg" width={20} height={20} alt="" className="shrink-0" />
                <span className="font-manrope text-[15px] font-normal leading-[24.75px] text-[#334155] xl:whitespace-nowrap">
                  {t}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
