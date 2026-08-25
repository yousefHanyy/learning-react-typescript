# Learning Record 0018: Exercise 4 — Polymorphic & Data Fetching

## Session
2026-07-22

## What We Did
- Created `lessons/0014-exercise-data-fetching.html` (covers Lessons 9–10)

## Challenges
0. Judgment drill (promised in session 17): 6 signatures → generic/concrete/union verdict + deciding test aloud; solutions graded with the specific smell test per item; items 1/5/6 flagged as the same single-use trap; links back to L4 #when-generic
1. Avatar polymorphic component — corrected own-props-generic shape from the session-15 bugfix; no-as rejection falls out of E default
2. Fix-the-broken-fetch: missing res.ok (silent 500s as data) + invisible assertion (any→Post[] without acknowledgment); bonus: no error/loading distinction yet
3. useSearch full machine — idle member so empty query isn't a lie, cancelled-flag stale guard, narrowed consumption
4. Stretch: paginated directory — envelope typing, early-return narrowing style, polymorphic rows composing with fetch state; deliberate wrinkle noted (impossible status check after narrowing gets flagged)

## Pedagogy Notes
- Challenge 0 is diagnostic for session 17's intervention — user said "I get it now", this verifies before we build more on generics
- Stretch introduces early-return narrowing as an alternative to switch (real codebases use both) and shows TS flagging impossible checks as a feature

## Next
- Lesson 11 pre-linked: 0015-typing-forms-advanced.html (must create when asked)
- Reference §12 already covers L10 patterns; nothing new to promote unless user asks