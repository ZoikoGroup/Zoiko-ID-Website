"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";

export default function CustomerAccessCtaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [useCase, setUseCase] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="final-cta" className="bg-white-solid px-6 py-12 sm:px-10 lg:px-24">
      <div className="relative mx-auto flex w-full max-w-[1250px] flex-col items-center overflow-hidden rounded-[32px] bg-azure-9 px-6 py-16 sm:px-12 sm:py-20 lg:p-20">
        <Image
          src="/customer-user-access/final-cta-bg.webp"
          alt=""
          fill
          sizes="(min-width: 1440px) 1250px, 100vw"
          className="object-cover"
        />

        {/* Gradient Overlay & Radial Accent matching Figma */}
        <div className="absolute inset-0 bg-[linear-gradient(159deg,rgba(7,20,38,0.75)_0%,rgba(13,35,62,0.72)_70%,rgba(34,184,214,0.15)_100%)]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-0 h-[600px] w-[600px] rounded-full bg-cyan-49/18 blur-[80px]"
        />

        <div className="relative flex w-full max-w-[880px] flex-col items-center gap-8 text-center sm:gap-10">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-white-solid sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
            Design customer access built on
            <br />
            explainable trust
          </h2>

          {submitted ? (
            <div className="flex w-full max-w-[640px] flex-col items-center gap-3 rounded-2xl border border-cyan-49/40 bg-white/10 p-8 text-center backdrop-blur-md">
              <span className="text-3xl">✓</span>
              <h3 className="font-dm-serif text-2xl text-white-solid">
                Thank you for your inquiry
              </h3>
              <p className="font-manrope text-sm text-[#CBD5E1]">
                Our identity and trust architecture team will reach out to{" "}
                <span className="font-semibold text-white-solid">{email}</span>{" "}
                shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.12] p-6 text-left backdrop-blur-md sm:p-10 lg:p-12"
            >
              <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="cta-name"
                    className="font-manrope text-[15.2px] font-semibold text-white-solid"
                  >
                    Name
                  </label>
                  <input
                    id="cta-name"
                    type="text"
                    required
                    suppressHydrationWarning
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="h-12 w-full rounded-md border border-white/20 bg-white/10 px-4 font-manrope text-[15.2px] text-white-solid placeholder:text-white-solid/60 focus:border-cyan-49 focus:outline-hidden focus:ring-1 focus:ring-cyan-49"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="cta-email"
                    className="font-manrope text-[15.2px] font-semibold text-white-solid"
                  >
                    Email
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    required
                    suppressHydrationWarning
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="h-12 w-full rounded-md border border-white/20 bg-white/10 px-4 font-manrope text-[15.2px] text-white-solid placeholder:text-white-solid/60 focus:border-cyan-49 focus:outline-hidden focus:ring-1 focus:ring-cyan-49"
                  />
                </div>

                {/* Use Case */}
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label
                    htmlFor="cta-use-case"
                    className="font-manrope text-[15.2px] font-semibold text-white-solid"
                  >
                    Tell us about your use case
                  </label>
                  <textarea
                    id="cta-use-case"
                    rows={4}
                    suppressHydrationWarning
                    value={useCase}
                    onChange={(e) => setUseCase(e.target.value)}
                    placeholder="What access patterns do you need to support?"
                    className="w-full rounded-md border border-white/20 bg-white/10 p-4 font-manrope text-[15.2px] text-white-solid placeholder:text-white-solid/60 focus:border-cyan-49 focus:outline-hidden focus:ring-1 focus:ring-cyan-49"
                  />
                </div>

                {/* Checkbox */}
                <div className="flex items-center gap-3 sm:col-span-2">
                  <input
                    id="cta-subscribe"
                    type="checkbox"
                    suppressHydrationWarning
                    checked={subscribed}
                    onChange={(e) => setSubscribed(e.target.checked)}
                    className="size-4 rounded-xs border-white/30 bg-white/10 text-azure-48 focus:ring-cyan-49"
                  />
                  <label
                    htmlFor="cta-subscribe"
                    className="font-manrope text-[15.2px] font-normal text-white-solid"
                  >
                    I would like to receive updates about new features and best
                    practices.
                  </label>
                </div>

                {/* Submit button */}
                <div className="pt-2 sm:col-span-2">
                  <button
                    type="submit"
                    suppressHydrationWarning
                    className="inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-md bg-azure-48 px-7 font-manrope text-[15.2px] font-bold text-white-solid transition-colors duration-200 hover:bg-azure-53"
                  >
                    <Image
                      src="/customer-user-access/icons/action-submit.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="brightness-0 invert"
                    />
                    Submit inquiry
                  </button>
                </div>
              </div>
            </form>
          )}

          <p className="font-manrope text-[13.6px] font-normal leading-[23.8px] text-[#CBD5E1]">
            By submitting, you agree to our{" "}
            <Link
              href="/privacy"
              className="text-cyan-49 underline underline-offset-4 hover:text-cyan-400"
            >
              Privacy Policy
            </Link>
            . Your inquiry is not a service commitment.
          </p>
        </div>
      </div>
    </section>
  );
}
