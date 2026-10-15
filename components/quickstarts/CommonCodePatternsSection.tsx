import Image from "next/image";

export default function CommonCodePatternsSection() {
  return (
    <section className="bg-[#F1F5F9] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-28 xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-14">
        {/* Section Heading */}
        <div className="flex w-full flex-col items-center gap-3 text-center">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#071426] sm:text-5xl lg:text-[52px]">
            Common code patterns
          </h2>
        </div>

        {/* Patterns List */}
        <div className="flex w-full flex-col gap-10">
          {/* Pattern 1: Verify actor identity */}
          <div className="flex flex-col gap-8 rounded-[12px] bg-white-solid p-8 shadow-sm lg:flex-row lg:items-center lg:gap-12 lg:p-10">
            <div className="flex w-full flex-1 flex-col gap-4">
              <div>
                <h3 className="font-dm-serif text-xl font-normal text-[#071426] sm:text-[22.4px]">
                  Verify actor identity
                </h3>
                <p className="mt-1 font-manrope text-sm font-normal leading-relaxed text-[#64748B] sm:text-base">
                  Check if a principal&apos;s credential is valid and not revoked.
                </p>
              </div>

              {/* Code Editor */}
              <div className="overflow-x-auto rounded-[8px] bg-[#071426] p-5">
                <span className="block font-mono text-xs font-bold uppercase tracking-wider text-[#22B8D6]">
                  Conceptual example
                </span>
                <pre className="mt-3 font-mono text-[13.6px] leading-[22px] text-[#E2E8F0]">
                  <code>
{`// Verify credential validity
credential = zoiko.credentials.get(actor_id)
if credential.is_valid():
    if credential.is_revoked():
        return DENIED
    return ALLOWED
else:
    return EXPIRED`}
                  </code>
                </pre>
              </div>
            </div>

            {/* Pattern 1 Right: Visual Code Patterns Image */}
            <div className="relative h-[280px] w-full overflow-hidden rounded-[12px] lg:h-[380px] lg:w-[440px] shrink-0">
              <Image
                src="/quickstarts/code-patterns.webp"
                alt="Code patterns illustration"
                fill
                sizes="(min-width: 1024px) 440px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Pattern 2: Evaluate mandate scope */}
          <div className="flex flex-col gap-4 rounded-[12px] border border-[#E2E8F0] bg-white-solid p-8 shadow-sm lg:p-10">
            <div>
              <h3 className="font-dm-serif text-xl font-normal text-[#071426] sm:text-[22.4px]">
                Evaluate mandate scope
              </h3>
              <p className="mt-1 font-manrope text-sm font-normal leading-relaxed text-[#64748B] sm:text-base">
                Check if an action fits the delegated mandate scope.
              </p>
            </div>

            <div className="overflow-x-auto rounded-[8px] bg-[#071426] p-5">
              <span className="block font-mono text-xs font-bold uppercase tracking-wider text-[#22B8D6]">
                Conceptual example
              </span>
              <pre className="mt-3 font-mono text-[13.6px] leading-[22px] text-[#E2E8F0]">
                <code>
{`// Check if action is within mandate
mandate = zoiko.mandates.get(delegation_id)
if mandate.resource == requested_resource:
    if requested_action in mandate.allowed_actions:
        if mandate.is_within_time_bounds():
            return ALLOWED
return DENIED`}
                </code>
              </pre>
            </div>
          </div>

          {/* Pattern 3: Handle revocation event */}
          <div className="flex flex-col gap-4 rounded-[12px] border border-[#E2E8F0] bg-white-solid p-8 shadow-sm lg:p-10">
            <div>
              <h3 className="font-dm-serif text-xl font-normal text-[#071426] sm:text-[22.4px]">
                Handle revocation event
              </h3>
              <p className="mt-1 font-manrope text-sm font-normal leading-relaxed text-[#64748B] sm:text-base">
                Respond to mandate.revoked webhook.
              </p>
            </div>

            <div className="overflow-x-auto rounded-[8px] bg-[#071426] p-5">
              <span className="block font-mono text-xs font-bold uppercase tracking-wider text-[#22B8D6]">
                Conceptual example
              </span>
              <pre className="mt-3 font-mono text-[13.6px] leading-[22px] text-[#E2E8F0]">
                <code>
{`// Webhook handler
def on_mandate_revoked(event):
    delegation_id = event.mandate_id
    affected_actor = event.actor_id
    
    # Invalidate cached state
    cache.delete(f"mandate:{delegation_id}")
    
    # Alert downstream systems
    notify_services(
        action="revoke_access",
        actor=affected_actor,
        reason=event.reason
    )`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
