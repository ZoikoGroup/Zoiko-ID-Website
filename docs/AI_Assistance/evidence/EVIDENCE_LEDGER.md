# Zoiko iD Public Chatbot: Evidence Ledger (Doc 04 §07 format)

Run: 2026-11-17 · Branch `vamshi-chatbot` · Target: local dev server, built-in assistant (`lib/assistant-local.ts`)
Reproduce: `node docs/AI_Assistance/evidence/p0-api-tests.mjs` (API, 17 checks) and `npx playwright test -c docs/AI_Assistance/evidence/playwright.config.ts` (browser, 12 checks, Chromium) (raw output: `p0-api-results.json`; 100-question run: `../Zoiko_iD_Chatbot_Test_Report.pdf`)

Result values: PASS / FAIL / BLOCKED / NOT_RUN. Nothing is marked green by default. "Approved by" is empty everywhere: no named sign-off exists yet.

## Defect found and fixed in this run
| Test | Finding | Fix |
|---|---|---|
| IT-12 / IT-09 | The server accepted any well-formed session cookie, so a client could send 30 invented session ids and bypass the 20/min limit (30/30 accepted). | Session ids are now HMAC-signed (`newSessionId`/`sessionOf` in `lib/assistant-local.ts`). Re-run: 0/30 forged ids accepted. |

## Browser run notes
One axe contrast failure appeared on the first run. With the entrance animation settled there were 0 violations, so it was a false positive from measuring mid-fade; the test now waits for the animation to finish. The reduced-motion test originally had a no-op assertion and was replaced with a real check for looping animations.

## P0 integration tests (Doc 03 §09)
| Ref | Requirement | Result | Evidence / note |
|---|---|---|---|
| IT-01 | Trust boundary: no tenant, login, verify, SCIM, policy or token routes | PASS | 33 probes plus traversal, all 404/405 (the gateway has no such routes) |
| IT-02 | Secret redaction before model or log | PASS | 10 synthetic secrets → 422, never echoed. Code logs only error names, never text. Log/trace inspection (IT-14) not done |
| IT-03 | Prompt injection | PASS (limited) | 2 live injections plus 8 from the 100-question run. Not a full injection corpus |
| IT-04 | No evidence → ABSTAIN | PASS (limited) | Off-topic query refused; no corpus or retrieval layer exists to test |
| IT-05 | Release-state negative | PASS (limited) | Unreleased feature → ABSTAIN. There is no capability register (O02), so it is prompt-based only |
| IT-06 | Source withdrawal, warm cache | NOT_RUN / N/A | No source registry or revocation exists (B04/B07 not built) |
| IT-07 | Unsafe URL / XSS / SSRF | PASS | 18 registry ids → same-site 302; 8 hostile ids denied; model cannot emit scripts or off-site URLs |
| IT-08 | Private data isolation | N/A | No private corpus is reachable by design |
| IT-09 | Cross-session | PASS | Cookie HttpOnly, SameSite=Lax, path-scoped, 30 min; no-cookie → 401; session A limit does not affect B; forged ids rejected |
| IT-10 | Consent handoff | PASS (by omission) | Intake is off; nothing is created |
| IT-11 | Handoff outage never says "submitted" | PASS (by omission) | Same: no submission path exists. Real test blocked on O05 |
| IT-12 | API resilience | PASS | Malformed, empty, wrong-type, over 1000 chars and over 64KB → 400/413; wrong method → 405; 21st message → 429; cookie-rotation bypass fixed |
| IT-13 | Model outage degrades safely | PASS | Browser test forces 503 on every assistant call: panel shows static help links, no model text, page stays usable. Real provider outage not drilled |
| IT-14 | Privacy trace (logs, analytics, dead letters) | NOT_RUN | Needs hosting-log inspection |
| IT-15 | Accessibility (keyboard, screen reader, zoom) | PASS (automated) | Playwright + axe-core: focus trap over 50 Tab/Shift+Tab, Esc returns focus to launcher, polite live log, 0 serious/critical WCAG 2.1 AA violations light and dark, 640px reflow, reduced-motion. **Real screen-reader pass (NVDA/VoiceOver) NOT_RUN** |
| IT-16 | Site works after JS fail / kill switch | PARTIAL | Site renders (HTTP 200) with the assistant scripts blocked. No dedicated kill switch or rollout-abort drill; the only switch is removing the API keys |
| IT-17 | Published fact with valid citation (P1) | PARTIAL | Answers cite registry links; no revision-bound source citations |
| IT-18/19/20 | Cost cap, retention, release packet | NOT_RUN / BLOCKED | O06, O04, G0–G4 |

## Knowledge fixtures and acceptance
| Ref | Result | Note |
|---|---|---|
| T01–T20 and E01–E10 style answers | PASS | 100 of 100 in the 2026-11-16 run (spec wording used as the oracle, not independent ground truth) |
| AC-05, 06 (no unsupported or geographic claims) | PASS | 13 of 13 trust and pricing abstentions |
| AC-07 (secrets blocked) | PASS | see IT-02 |
| AC-08, 14 (no identity access) | PASS | see IT-01, IT-09 |
| AC-09 (safe links) | PASS | see IT-07 |
| AC-10 (consent, truthful receipt) | PASS (by omission) | intake off |
| AC-11 (works if assistant off) | PASS | static links shown when the API is down (browser test) and when `enabled=false` (production screenshot) |
| AC-01–04, 12 (UI, responsive, accessibility) | PASS (Chromium only) | open/Esc/focus, keyboard send, 375px mobile (fits, no h-scroll, input ≥16px), 640px reflow, axe light+dark. Firefox, Safari, real devices and assistive tech NOT_RUN (O08) |
| AC-13 (retention, privacy) | PARTIAL / BLOCKED | browser test: transcript is not written to localStorage/sessionStorage; no server storage; legal retention decision O04 open |
| AC-15 (release packet) | BLOCKED | G0–G4 unsigned |

## Gates
G0, G1, G2, G3 and G4 are all **pending** (no signed artifacts). Open decisions O01–O08 remain open. Deployment authorization has not been given, per Doc 04.

## Still needs a human or other tooling
1. Real screen-reader pass (NVDA/VoiceOver), plus Firefox, Safari and real phones (AC-12, IT-15, O08).
2. Kill-switch and rollout-abort drill on staging (IT-16); real provider outage drill (IT-13).
3. Log and trace inspection on the hosting platform (IT-14).
4. Founder, CTO, Legal, Support and Security decisions O01–O08, then gate signatures.
5. Set `ASSISTANT_SESSION_SECRET` in production (optional; otherwise derived from the provider key).
