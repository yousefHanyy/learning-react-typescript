# Learning Record 0019: Lesson 11 — Typed Forms (Zod + React Hook Form)

## Session
2026-07-22 (session 21)

## What We Did
- Created `lessons/0015-typing-forms-advanced.html` (Lesson 11)
- Updated `lessons/reference.html` §13 per standing rule

## Lesson Summary
- Schema-is-the-type: single zod schema → `z.infer<typeof schema>`; never hand-write mirroring interface
- Wiring: `useForm<Values>({ resolver: zodResolver(schema), defaultValues })`; register is Path<Values>, handleSubmit receives validated Values, errors is FieldErrors<Values>
- Numbers: DOM strings vs `z.coerce.number()` / `valueAsNumber` (pick one)
- Controller for controlled components (value/onChange) vs register for natives
- Input vs Output trap: third generic `useForm<Input, unknown, Output>` when transforms diverge

## Pedagogy Notes
- Lesson deliberately pitched as "this is your daily junior work" after user's Session 20 question about what's actually expected — RHF+Zod IS the codebase reality for forms
- Verified against Context7 docs for react-hook-form/documentation and colinhacks/zod

## Next
- Exercise 5 pre-linked as 0016-exercise-advanced-forms.html (covers Lesson 11) — not yet created
