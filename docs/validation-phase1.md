# Phase-1 Validation — Discovery Engine (Section 21 gate)

**Date:** 2026-10-14 · **Status:** ✅ PASSED · **Total spend:** ~$0.20

## Question
Can Parallel.ai reliably discover *real* companies experiencing a specific
buying situation, with evidence URLs + reasoning, for a given B2B seller?

## Test
- **Seller:** FieldSalesPro — software for managing distributed outside/field sales teams.
- **Situation:** US companies expanding their outside sales force (new territories,
  acquisitions, or substantial field-rep hiring) in the last ~6 months.
- **API:** Parallel **FindAll** (`preview` generator), `POST /v1beta/findall/runs`,
  poll `GET /runs/{id}`, fetch `GET /runs/{id}/result`. Auth: `x-api-key`.

## The decisive learning
First attempt targeted "companies associated with field sales" → returned the seller's
**competitors** (field-sales *software vendors*: Aforza, RepZio, Fieldist) and PitchBook
profile pages. Reframing to **"companies that EMPLOY field reps and are expanding them,
excluding software/SaaS vendors"** — i.e. the buyer in the buyer's own world — flipped the
output to real buyers with fresh, dated evidence. **This objective framing is the core IP
of the engine** and drives Stage B→C prompt design.

## Result (5/5 verified, all real domains, all 2026-dated evidence)
| Company | Domain | Evidence (dated) | Source verified |
|---|---|---|---|
| Stryker | stryker.com | Field territory sales roles posted Jun 16 & Oct 6 2026 | — |
| Pelthos Therapeutics | pelthos.com | May 14 2026: added 14 sales-rep positions in uncovered territories; 64 territory mgrs | ✅ verbatim |
| NAPCO Security | napcosecurity.com | Apr 28 2026: 4 new Regional Sales Managers (FL/SE/Mid-Central/NE) | ✅ verbatim |
| INDEX Corp | index-group.com | May 20 2026: 4 regional sales mgrs, territories 5→7 | — |
| Madico | madico.com | Jun 2026: +3 regional/state sales reps | — |

Two evidence URLs independently re-fetched and confirmed verbatim.

## Metrics
- Research duration: ~6 min (async — **must** persist job + poll/webhook, never block HTTP)
- Candidates discovered: 9 · verified (`matched`): 5 · rejected: 4
- Cost: $0.10 per preview run (matches not charged on `preview`)
- Response shape: `candidate{ candidate_id, name, url, description, match_status, output, basis }`
  - `match_status` ∈ `matched | unmatched | generated` → qualification signal
  - `basis[]` carries per-condition `reasoning` + `citations[]{url, date}` → evidence

## Engineering implications (feed the build)
1. **Stage B must emit buyer-centric discovery objectives** (buyer's world + exclude vendors), not seller vocabulary.
2. **`preview` generator** gives 5 verified matches for $0.10 — viable even for cheap daily runs; `base`/`core` reserved for wider/narrower situations.
3. **Async is mandatory** — persist `findall_id`, poll/webhook, retrieve later.
4. **Stage D (domain resolution)** still required for edge cases (vendor/directory URLs leaked in the first run).
5. **Freshness must be an explicit match condition** + a qualification date filter (stale 2012/2014 items appeared without it).

Harness: `scratchpad/validation/findall-validate.mjs` (not committed; dev-only).
