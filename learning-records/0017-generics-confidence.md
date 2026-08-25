# Learning Record 0017: Generics Confidence Intervention

## Session
2026-07-22

## Trigger
User reported lack of confidence in judging WHEN a generic is appropriate ("can't predict when using a generic is preferred or not").

## What We Did
- Taught the one-job model directly: generics preserve a caller-controlled type across signature positions; nothing to link → no generic
- Two legitimate jobs: correlation (same T, 2+ slots) and caller-declared returns (T once, in return)
- Three smell tests: duplication / single-use-T / rename-to-whateverTheCallerSent
- Added `#when-generic` section to Lesson 4 (before Quick Check) with ❌/✅ examples (getTotal generic-theater vs honest; useDebouncedValue earning its keep)
- Promoted condensed decision test into reference §5 per standing rule (recurring-confusion promotion)

## Pedagogy Notes
- Root cause hypothesis: user sees generics as a feature to activate rather than a promise/preservation mechanism
- Offered aloud-drill (scenarios → user answers → grading) matching their established self-quiz habit; pending user response
- Union-vs-generic distinction added (closed set → union, open caller-owned shapes → generic) — likely second source of the uncertainty

## Next
- Exercise 4 (0014-exercise-data-fetching.html) — include one "generic or not?" judgment challenge to reinforce