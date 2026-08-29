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
- `lessons/reference.html` is the user's living working reference — task-organized, deep-linked to lesson sections. MUST be updated with every new lesson's patterns AND whenever the user asks about something twice / shows a recurring confusion (promote it with extra emphasis). Standing rule (user requested 2026-07-22)
- Question-born reference entries get wrapped in `<div class="promoted">` — amber background + "From your questions" label (user requested 2026-07-22); six existing entries already tagged
- All lesson h2 headings now carry anchor ids (e.g. #guard-hook-pattern, #exhaustiveness-guard) so reference entries can deep-link; keep adding ids when creating lessons

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
- Session 15 (2026-07-22): Built living reference page (lessons/reference.html, task-organized, deep links); added anchor ids to all lesson h2s; fixed real bug in Lesson 9 main code block (as?: E missing from own props type); recorded reference-maintenance standing rule
- Session 16 (2026-07-22): Lesson 10 on typing data fetching (json-any boundary, getJSON wrapper with res.ok + sanctioned as T, FetchState<T> machine hook, narrowing consumption); reference §12 added per standing rule
- Session 17 (2026-07-22): User low confidence on when to use generics → taught one-job/correlation model + smell tests; new #when-generic section in Lesson 4; promoted decision test into reference §5; Exercise 4 will include a judgment drill
- Session 18 (2026-07-22): Added .promoted style (amber bg + "From your questions" label, light/dark aware) to style.css; tagged all six question-born entries in reference; standing rule recorded
- Session 19 (2026-07-22): Exercise 4 covering Lessons 9-10 (judgment drill per session 17 promise, Avatar polymorphic, broken-fetch debugging, useSearch machine, stretch: paginated directory with early-return narrowing); Lesson 11 pre-linked as 0015-typing-forms-advanced.html
- Session 20 (2026-07-22): User found L9/L10 hard → gave junior-expectations calibration (build-vs-consume framing: polymorphic = design-system/senior work, juniors consume; fetching = TanStack Query/SWR in real shops, FetchState machine maps onto useQuery's data/isPending/error); told user struggle was expected — L9 was senior material taught early for recognition
- Session 21 (2026-07-22): Lesson 11 on typed forms with Zod + React Hook Form (schema-is-the-type via z.infer, useForm<Values> + zodResolver wiring, Path/FieldErrors typing, register vs Controller, Input-vs-Output third generic); reference §13 added
- Session 22 (2026-07-22): Clarified Controller typing per user question — expanded lessons/0015-typing-forms-advanced.html#controller with full generic breakdown (TFieldValues from control, TName from name → ControllerRenderProps + FieldPathValue) and named render as the surviving render-prop case from Lesson 4/reference §5; noted useController hook alternative
- Session 23 (2026-07-22): Exercise 5 covering Lesson 11 (drift fix via z.infer, wiring register/FieldErrors, Controller for controlled Select with typed field, number coercion, stretch: Input-vs-Output transform with third generic); Lesson 12 pre-linked as 0017-typing-performance.html
- Session 24 (2026-07-22): User asked if recent Q&A promoted to reference → added three .promoted entries to reference §13 (Controller generic breakdown + render-prop survivor, resolver-as-gate, fieldState vs formState + isSubmitting pattern) per standing rule
- Session 25 (2026-07-22): Lesson 12 on performance & memo (when memo helps, typing memo/useMemo/useCallback, stable-props checklist, junior rule: don't memo until measured); reference §14 added
- Session 26 (2026-07-22): Exercise 6 covering Lesson 12 (spot useless memo, fix via useCallback/useMemo, inferred vs explicit handler typing, memo judgment checklist, stretch: inline vs memoized reference identity); Lesson 13 pre-linked as 0019-typing-testing.html; clarified earlier useMemo gotcha (inline object new reference defeats memo shallow compare)
