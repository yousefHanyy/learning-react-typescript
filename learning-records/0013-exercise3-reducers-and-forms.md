# Learning Record 0013: Exercise 3 — Reducers & Forms

## Session
2026-07-22

## What We Did
- Created `lessons/0011-exercise-reducers-and-forms.html` (Exercise 3, covers Lessons 7–8)

## Challenges
1. FiltersReducer from scratch — State, discriminated-union actions with payload fields only where needed, exhaustive switch, one-line wiring
2. Break-it-on-purpose: add unhandled action variant → predict the `never` assignment error location + message, then fix; tests mental model of narrowing into default
3. FormData narrowing drill — signup form, typeof guards on every get(), no casts
4. Newsletter useActionState — argument flip, fresh state object per path (error clears on retry), isPending UI, inference from initial value
5. Stretch: reducer-in-provider combining L5+L7 — two contexts (state + Dispatch), guard hooks, export discipline; re-render prediction question (badge vs reset button) tests understanding of stable dispatch

## Pedagogy Notes
- Challenge 2 is diagnostic-first ("describe the error before fixing") — retrieval of the never mechanism rather than pattern copying
- Stretch re-render question reinforces Lesson 7's expanded two-context section from earlier this session
- Next lesson: Polymorphic Components (`as` prop) → 0012-polymorphic-components.html, pre-linked; follows user's design-system interest (wrapper Omit questions)

## Next
- Lesson 9: Polymorphic components — as prop typing, ComponentProps composition, extends constraint on tag type