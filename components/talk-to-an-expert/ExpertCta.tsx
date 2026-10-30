export default function ExpertCta() {
  return (
    <section className="bg-white-solid px-4 py-12 sm:px-10 lg:px-[95px]">
      <div
        className="mx-auto flex w-full max-w-[1250px] flex-col items-center justify-center gap-5 rounded-[32px] px-6 py-16 text-center sm:px-12 lg:min-h-[432px]"
        style={{
          backgroundColor: "#2C3E57",
          backgroundImage: "url('/talk-to-an-expert/Section - 20. FINAL CTA.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="max-w-[900px] font-dm-serif text-[34px] font-normal leading-[1.15] text-white-solid sm:text-[44px] lg:text-[56px] lg:leading-[70px]">
          Prepare your question, then reach out when the route is live.
        </h2>
        <p className="max-w-[540px] font-manrope text-base leading-7 text-[#E2E8F0]">
          Until the enquiry route is verified, read the documentation and the trust pages above.
        </p>
      </div>
    </section>
  );
}
