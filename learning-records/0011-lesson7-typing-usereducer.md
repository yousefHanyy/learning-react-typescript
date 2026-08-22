# Learning Record 0011: Lesson 7 — Typing useReducer

## Session
2026-07-22

## What We Did
- Created `lessons/0009-typing-usereducer.html`
- Grounded content via context7 against react.dev (learn/typescript useReducer example)

## Lesson Content
- Three pieces: State interface, Action discriminated union, fully-annotated reducer
- Inference direction: annotate the reducer → useReducer/dispatch typed automatically (`React.Dispatch<Action>`) — never write explicit generics at call site
- Exhaustiveness guard: `default: { const _exhaustive: never = action }` → compile error on unhandled new action variants
- Realistic CartItem[] example showing payload fields only where needed (no optional-everything params)
- Brief pairing with Lesson 5 provider pattern (dispatch context value = Dispatch<CartAction>)
- Recipe section per standing rule; top + bottom nav per standing rule

## Pedagogy Notes
- Framed as "Lesson 2's discriminated union applied twice" — reinforces the single most important type pattern taught so far
- User asked for deeper explanation of the context tie-in → expanded compressed callout into full section: mental model (L5 = where state lives/consumed, L7 = how transitions computed), CartProvider code with useState→useReducer swap, two-context split rationale (stable dispatch = no re-renders for dispatch-only consumers), "no new typing concept" note
- Next lesson: Forms & Actions (React 19 action prop) → `0010-typing-forms-and-actions.html`, pre-linked in nav

## User State
- Has all prerequisites; Exercise 2 stretch (tuple returns) touched Dispatch typing already

## Next
- Lesson 8: Typing Forms & React 19 Actions — form components, FormData access patterns, `action` prop typing, useActionState basics
