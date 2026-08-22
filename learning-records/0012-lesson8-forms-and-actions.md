# Learning Record 0012: Lesson 8 — Forms & Actions

## Session
2026-07-22

## What We Did
- Created `lessons/0010-typing-forms-and-actions.html`
- Grounded via context7 against react.dev (form component docs, useActionState reference)

## Lesson Content
- Classic controlled onSubmit recap (SubmitEventHandler, ties to Lesson 2 + FormEvent deprecation correction)
- React 19 `action` prop: async fn `(formData: FormData) => void | Promise<void>`, uncontrolled inputs, auto-reset, no preventDefault
- THE gotcha: formData.get() returns FormDataEntryValue | null (string | File | null) — must narrow with typeof
- name attribute requirement (silent null if missing)
- useActionState: [state, actionFn, isPending]; state type inferred from initial value; the (prevState, formData) argument flip
- Full CommentForm example: FormState { error: string | null }, narrowing, isPending UI
- Comparison table: classic vs action style
- Cross-lesson ties called out explicitly (L5 nullable honesty, L3 visible-state rule, L2 discriminated unions)
- Recipe + top/bottom nav per standing rules

## Pedagogy Notes
- Positioned as "both styles exist in production" — user works with real codebases
- Next: Exercise 3 covering Lessons 7–8 → 0011-exercise-reducers-and-forms.html (pre-linked)

## Next
- Exercise 3: cart reducer from scratch, exhaustiveness guard demo (add an action), FormData narrowing drill, useActionState form with error state; stretch: reducer-in-provider combining L5+L7
