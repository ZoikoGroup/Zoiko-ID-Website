"use client";

import Image from "next/image";
import { useState } from "react";

interface ErrorScenario {
  id: string;
  icon: string;
  title: string;
  whyItHappens: string;
  whatToDo: string[];
  codeTitle: string;
  code: string;
}

const errorScenarios: ErrorScenario[] = [
  {
    id: "403-forbidden",
    icon: "/quickstarts/error-403-icon.svg",
    title: "403 Forbidden: Mandate revoked or expired",
    whyItHappens:
      "Actor's delegation was withdrawn by the delegator, or time boundary was reached, or policy was updated.",
    whatToDo: [
      "Check mandate status: is it revoked or expired?",
      "If expired, request a new mandate with extended date.",
      "If revoked, contact the delegator to understand why.",
      "Implement exponential backoff before retrying.",
    ],
    codeTitle: "Safe retry pattern",
    code: `def retry_with_backoff(fn, max_retries=3):
    backoff_ms = 100
    for attempt in range(max_retries):
        try:
            return fn()
        except ForbiddenError as e:
            if attempt < max_retries - 1:
                time.sleep(backoff_ms / 1000)
                backoff_ms *= 2
            else:
                # Final attempt failed; escalate
                log_and_alert(e)`,
  },
  {
    id: "503-unavailable",
    icon: "/quickstarts/error-503-icon.svg",
    title: "503 Service Unavailable: Can't reach Zoiko iD",
    whyItHappens:
      "Upstream network unreachable, transient outage, or corporate firewall egress misconfiguration.",
    whatToDo: [
      "Check the Zoiko iD status dashboard for platform availability and scheduled maintenance.",
      "Verify outbound HTTPS access and egress allowlists on port 443.",
      "Fall back to cached verified tokens or safe fail-closed security policies.",
      "Retry the request using exponential backoff with randomized jitter.",
    ],
    codeTitle: "Service outage fallback",
    code: `def handle_service_outage(request):
    try:
        return zoiko.verify(request)
    except ServiceUnavailableError:
        # Check local validated mandate cache
        if cache.has_valid_mandate(request.mandate_id):
            return ALLOWED_FALLBACK
        return DENIED_FAIL_SAFE`,
  },
  {
    id: "429-rate-limit",
    icon: "/quickstarts/error-429-icon.svg",
    title: "429 Too Many Requests: Rate limit exceeded",
    whyItHappens:
      "Request throughput exceeded the allowed rate limit for your tier or sandbox development keys.",
    whatToDo: [
      "Inspect the Retry-After header in the HTTP 429 response payload.",
      "Batch repeated verification queries or debounce high-frequency agent actions.",
      "Request a higher quota allocation for production verification workloads.",
      "Offload background audit logging to asynchronous queue workers.",
    ],
    codeTitle: "Rate limit throttling pattern",
    code: `def call_with_rate_limit(api_call):
    response = api_call()
    if response.status_code == 429:
      wait_time = int(response.headers.get("Retry-After", 1))
      time.sleep(wait_time)
      return api_call()
    return response`,
  },
  {
    id: "timeout-decision",
    icon: "/quickstarts/error-timeout-icon.svg",
    title: "Timeout: Decision took too long",
    whyItHappens:
      "Evaluation latency exceeded timeout thresholds due to deep multi-hop delegation chains or complex custom webhooks.",
    whatToDo: [
      "Set an explicit client request timeout window (recommended: 3000ms).",
      "Flatten deeply nested delegation graphs where immediate synchronous evaluation is required.",
      "Leverage pre-computed authority snapshots for latency-critical paths.",
      "Implement a graceful circuit breaker around authorization checks.",
    ],
    codeTitle: "Client timeout configuration",
    code: `# Configure explicit bounded timeout in Zoiko SDK
client = zoiko.Client(
    api_key="zoiko_sec_...",
    timeout_ms=3000,
    retry_policy={"max_attempts": 2, "backoff": "exponential"}
)`,
  },
];

export default function ErrorScenariosSection() {
  const [openId, setOpenId] = useState<string>("403-forbidden");

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section className="bg-white-solid px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-28 xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-14">
        {/* Section Heading */}
        <div className="flex w-full flex-col items-center gap-3 text-center">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#071426] sm:text-5xl lg:text-[52px]">
            Error scenarios and recovery
          </h2>
        </div>

        {/* Error Scenarios Accordion List */}
        <div className="flex w-full flex-col gap-5">
          {errorScenarios.map((scenario) => {
            const isOpen = openId === scenario.id;

            return (
              <div
                key={scenario.id}
                className={`overflow-hidden rounded-[12px] bg-white-solid transition-all duration-200 ${
                  isOpen
                    ? "border border-azure-48 p-7 pb-12 shadow-[0px_8px_24px_0px_rgba(37,99,235,0.12)] sm:p-8 sm:pb-12"
                    : "border border-[#E2E8F0] p-6 hover:border-slate-300 sm:p-7"
                }`}
              >
                {/* Accordion Summary / Header */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(scenario.id)}
                  className="flex w-full cursor-pointer items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <Image
                      src={scenario.icon}
                      alt=""
                      width={24}
                      height={24}
                      className="shrink-0"
                    />
                    <h3 className="font-manrope text-base font-bold text-[#071426] sm:text-lg">
                      {scenario.title}
                    </h3>
                  </div>

                  <div
                    className={`flex size-6 shrink-0 items-center justify-center transition-transform duration-200 ${
                      isOpen ? "rotate-0" : "rotate-180"
                    }`}
                  >
                    <Image
                      src="/quickstarts/error-chevron-icon.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="shrink-0"
                    />
                  </div>
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="mt-6 flex flex-col gap-6 pt-2">
                    {/* Why it happens */}
                    <div className="font-manrope text-base leading-relaxed text-[#475569]">
                      <strong className="font-bold text-[#475569]">Why it happens:</strong>{" "}
                      {scenario.whyItHappens}
                    </div>

                    {/* What to do */}
                    <div className="flex flex-col gap-2">
                      <span className="font-manrope text-base font-bold text-[#475569]">
                        What to do:
                      </span>
                      <ol className="list-decimal space-y-1.5 pl-6 font-manrope text-base leading-7 text-[#475569]">
                        {scenario.whatToDo.map((step, idx) => (
                          <li key={idx}>{step}</li>
                        ))}
                      </ol>
                    </div>

                    {/* Code Pattern */}
                    <div className="overflow-x-auto rounded-[8px] bg-[#071426] p-6">
                      <span className="block font-mono text-xs font-bold uppercase tracking-wider text-[#22B8D6]">
                        {scenario.codeTitle}
                      </span>
                      <pre className="mt-3 font-mono text-[13.6px] leading-[22px] text-[#E2E8F0]">
                        <code>{scenario.code}</code>
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
