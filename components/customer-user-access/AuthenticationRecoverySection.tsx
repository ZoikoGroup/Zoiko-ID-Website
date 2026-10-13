import Image from "next/image";

const items = [
  {
    title: "Recognize Identity",
    description:
      "Identify who is requesting access. Verify through approved methods: password, passkey, social, federated, biometric.",
    icon: "/customer-user-access/icons/auth-recognize.svg",
  },
  {
    title: "Verify Session",
    description:
      "Establish and protect the session. Challenge if risk signals arise. Support MFA and step-up authentication.",
    icon: "/customer-user-access/icons/auth-verify.svg",
  },
  {
    title: "Recover Access",
    description:
      "Support secure password reset, account recovery, and credential management. No single-method lock-out.",
    icon: "/customer-user-access/icons/auth-recover.svg",
  },
];

export default function AuthenticationRecoverySection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-[60px]">
        <h2 className="text-center font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl lg:text-[52px] lg:leading-[59.8px]">
          Identity, authentication &amp; recovery
        </h2>

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="flex flex-col gap-5 rounded-xl border border-mystic bg-white-solid p-7 pb-[53px] transition-shadow duration-200 hover:shadow-sm"
            >
              <div className="flex size-8 items-center justify-center">
                <Image
                  src={item.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="size-8"
                />
              </div>

              <h3 className="font-manrope text-[16.8px] font-bold text-azure-9">
                {item.title}
              </h3>

              <p className="font-manrope text-[14.4px] font-normal leading-[25.2px] text-azure-47">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
