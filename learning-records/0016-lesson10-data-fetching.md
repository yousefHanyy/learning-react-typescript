# Learning Record 0016: Lesson 10 — Typing Data Fetching

## Session
2026-07-22

## What We Did
- Created `lessons/0013-typing-data-fetching.html`
- Updated `lessons/reference.html` per standing rule: new §12 "Typing data fetching" + TOC entry

## Content Covered
- The any-boundary: res.json() returns Promise<any> — compiler protection ends at network edge
- Two defenses: assert-and-trust (as T at one choke point) vs runtime validation (zod mention — what production teams use; flagged as "learn when you encounter it")
- API shape interfaces: exact fields, no defensive optionals (weak types hide contract violations)
- getJSON<T> wrapper: res.ok check (fetch does NOT throw on 404/500 — top real-world gotcha), single sanctioned as T
- Rule: all external-data assertions live in ONE wrapper layer
- FetchState<T> generic discriminated union; useFetch<T> with cancelled-flag cleanup for stale responses
- Consumption via switch narrowing — data access only compiles in success branch; contrasted with boolean-flag approach (illegal combos representable)
- Quiz (3 questions, data-why all options), Recipe section

## Pedagogy Notes
- Framing: "where TS stops protecting you" — honesty about the assertion deal (check once at the seam, not never/everywhere)
- zod deliberately kept to a mention, not taught — no deps in this static course; primes user for real codebases
- Reference §12 includes condensed wrapper + hook snippets so it works standalone

## Next
- Exercise 4 pre-linked: 0014-exercise-data-fetching.html (must create) — likely covers L10 + maybe L9 (polymorphic) since Ex3 covered 7-8