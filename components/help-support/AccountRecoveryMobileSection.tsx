import { KeyRound } from "lucide-react";

export default function AccountRecoveryMobileSection() {
  return (
    <section className="w-full bg-[#f8fafc] px-5 py-4 sm:hidden">
      <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm">
        <div className="flex size-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
          <KeyRound className="size-4.5" />
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span className="h-[2px] w-4 bg-[#0ea5e9]" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0284c7]">
            ACCOUNT RECOVERY
          </span>
        </div>

        <h3 className="mt-3 font-dm-serif text-[22px] font-normal leading-[1.25] tracking-tight text-[#071324]">
          Recovering access is separate from proving identity
        </h3>

        <p className="mt-3 font-manrope text-[12.5px] leading-relaxed text-[#4b5563]">
          Password reset and identity proofing have their own steps. We will never ask you to send a password, recovery code or private key, and we cannot promise immediate restoration. If your account is locked and you suspect compromise, use the security route above.
        </p>
      </div>
    </section>
  );
}
