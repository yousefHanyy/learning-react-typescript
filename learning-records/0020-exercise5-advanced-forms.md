# Learning Record 0020: Exercise 5 — Advanced Forms

## Session
2026-07-22 (session 23)

## What We Did
- Created `lessons/0016-exercise-advanced-forms.html` (Exercise 5, covers Lesson 11)

## Challenges
1. Fix the drift — delete mirroring interface, derive via z.infer
2. Wire login form — useForm<Values> + zodResolver, Path<Values> typo check, FieldErrors rendering, handleSubmit validated payload
3. Controller for controlled RoleSelect — why register fails, field: ControllerRenderProps<Values, "role">, FieldPathValue, render-prop survivor case
4. Number input string vs z.number — fix via z.coerce.number vs valueAsNumber
5. Stretch: tags transform string → string[] — third generic useForm<Input, unknown, Output>, z.input vs z.output

## Pedagogy Notes
- Lesson 11 deliberately junior-daily; exercise tests the exact mistakes from real codebases
- Nav pre-links Lesson 12 as 0017-typing-performance.html

## Next
- Lesson 12 not yet created (next user request)
