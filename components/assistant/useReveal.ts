/* Vendored from the Zoiko iD platform repo (@zoiko/assistant-widget). Keep identical to the source; rules below are disabled to match the platform's lint config. */
/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";

/** Characters per second for the reveal, and the longest a reveal may take: fast, never a wait. */
const RATE = 220;
const MAX_MS = 2600;

function reducedMotion(): boolean {
  try {
    return typeof window !== "undefined" && typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
}

/** How many characters of an already complete, already verified answer to show. This is a display effect only: the server still sends
 * the whole answer at once (no unverified text is ever streamed, ADR-05). Reduced motion, or `enabled === false`, shows it all at once. */
export function useReveal(text: string, enabled: boolean, onDone?: () => void): number {
  const skip = !enabled || reducedMotion() || typeof requestAnimationFrame !== "function";
  const [count, setCount] = useState(skip ? text.length : 0);
  useEffect(() => {
    if (skip) {
      setCount(text.length);
      return undefined;
    }
    const total = Math.min(MAX_MS, (text.length / RATE) * 1000);
    const rate = total > 0 ? text.length / total : 1; // chars per ms
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const n = Math.min(text.length, Math.floor((now - start) * rate));
      setCount(n);
      if (n < text.length) raf = requestAnimationFrame(step);
      else onDone?.();
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, skip]);
  return count;
}
