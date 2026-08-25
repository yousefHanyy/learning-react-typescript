# Notes

## User Profile
- Knows React well (can build real apps)
- Wants professional/industry-standard TypeScript patterns
- Pragmatic learner — wants what "people use at work"

## Teaching Preferences
- Focus on real-world patterns, not theoretical TS
- Prefer lessons tied to concrete coding scenarios
- Each lesson should give a tangible win
- Give an exercise after each group of related lessons (user requested) — retrieval practice, revealable solutions; stretch challenges get a full revealable solution in the same `.exercise` widget format (user requested 2026-07-22)
- Every lesson MUST end with a "Recipe" section: numbered steps for the pattern, as a quick reference when the user forgets how to do something while working (user requested 2026-07-22, applied retroactively to lessons 1-5)
- Every lesson/exercise page has lesson-nav at BOTH top (`.lesson-nav.top`, right after lesson-meta) and bottom of the page (user requested 2026-07-22, applied to all existing pages)
- Quiz options each carry a `data-why` explanation; quiz.js shows why the answer is correct, or why the chosen misconception is wrong (user requested 2026-07-22, applied to all lessons)

## Session Record
- Session 1 (2026-07-22): Setting up workspace, foundational lesson on typing props
- Session 2 (2026-07-22): Lesson 2 on events & state; user asked for deeper explanation of the union `type` pattern before continuing
- Session 3 (2026-07-22): Lesson 3 on refs; user understood the generic mechanism from `useState<T>`; covered React 19 ref-as-prop
- Session 4 (2026-07-22): Lesson 4 on generic components; fixed misleading ref counter example in lesson 3 (refs don't re-render); user clarified useRef vs useState for counters
- Session 5 (2026-07-22): Built Exercise 1 (covers Lessons 1-4) + reusable exercise widget; user requested exercises after each lesson group
- Session 6 (2026-07-22): Corrected deprecated React.FormEvent → SubmitEvent (user caught it, verified @types/react 19.2.10); added render-props-vs-hooks distinction to glossary Patterns section
- Session 7 (2026-07-22): Lesson 5 on context & custom hooks (null-default + guard hook pattern); fixed stale nav in lesson 4
- Session 8 (2026-07-22): Added side-by-side table to Lesson 5 clarifying why Theme needs no null and Auth does; added Recipe sections to all lessons 1–6 (standing preference)
- Session 9 (2026-07-22): Lesson 6 on utility types (Pick/Omit/Partial/Record/ComponentProps); clarified wrapper-Omit rationale (replacing native prop types, e.g. TextField's string onChange)
- Session 10 (2026-07-22): Exercise 2 covering Lessons 5-6 (ToastContext, debug raw useContext, derive utility types, PasswordInput wrapper, stretch: useLocalStorageState)
- Session 11 (2026-07-22): Added top lesson-nav to all pages (standing rule); stretch solutions now full revealable blocks (standing rule); Lesson 7 on typing useReducer (discriminated-union actions, exhaustiveness guard); expanded context tie-in section after user question
- Session 12 (2026-07-22): Lesson 8 on forms & actions (action prop, FormData narrowing, useActionState); quiz explanations added everywhere (data-why + quiz.js upgrade)
- Session 13 (2026-07-22): Exercise 3 covering Lessons 7-8 (filters reducer, break-the-guard drill, FormData narrowing, newsletter useActionState, stretch: reducer-in-provider)
- Session 14 (2026-07-22): Lesson 9 on polymorphic components (as prop, ElementType constraint, ComponentPropsWithRef + Omit composition, React 19 free ref forwarding); user moved on without reporting Exercise 3 results — follow up
