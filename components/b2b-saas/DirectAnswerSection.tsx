export default function DirectAnswerSection() {
  return (
    <section className="bg-[rgba(255,255,255,1)] px-6 py-14 sm:px-10 lg:px-20 lg:py-16">
      <div className="mx-auto flex w-full max-w-[960px] flex-col items-center gap-8">
        <h2 className="text-center font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl lg:text-[52px] lg:leading-[59.8px]">
          What is B2B / SaaS identity?
        </h2>

        <div className="flex w-full max-w-[880px] min-h-[250px] flex-col justify-center gap-5 rounded-xl border border-grey-91 border-l-[5px] border-l-cyan-49 bg-[linear-gradient(163deg,rgba(34,184,214,0.05)_0%,rgba(37,99,235,0.05)_100%)] p-8 shadow-[0px_8px_24px_0px_rgba(34,184,214,0.08)] sm:p-10">
          <p className="font-manrope text-base leading-[30.8px] text-[#475569] sm:text-[17.6px]">
            <strong className="font-bold text-azure-9">
              B2B / SaaS identity
            </strong>{" "}
            describes how a software provider represents customer
            <br className="hidden md:inline" />
            organizations, individual actors, their membership and context, and the authorization
            <br className="hidden md:inline" />
            required to access organization-specific resources.
          </p>

          <p className="font-manrope text-base leading-7 text-azure-47 sm:text-[16px]">
            <strong className="font-semibold text-[#475569]">
              Key distinction:
            </strong>{" "}
            Authentication establishes identity. Authorization must evaluate what the actor
            <br className="hidden md:inline" />
            may do within a particular organization. Sign-in is not permission.
          </p>
        </div>
      </div>
    </section>
  );
}
