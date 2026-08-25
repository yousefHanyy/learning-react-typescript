# Learning Record 0014: Lesson 9 — Polymorphic Components

## Session
2026-07-22

## What We Did
- Created `lessons/0012-polymorphic-components.html`

## Content Covered
- The `as` prop pattern used by design systems (MUI, Chakra, Radix)
- Failure modes of naive union typing (`as?: "button" | "a"`) — props disconnected from element choice
- Generic solution: `E extends React.ElementType = "button"`, `ComponentPropsWithRef<E> & OwnProps`
- Call-site inference from `as`; invalid combos caught at compile time
- `React.ElementType` vs `keyof JSX.IntrinsicElements` — custom components (router Link) need ElementType; rule of thumb for choosing
- Prop collisions → Omit before intersection (TextField onChange replacement, ties back to L6 wrapper pattern, now generic)
- React 19: ref-as-prop makes polymorphic refs free via ComponentPropsWithRef + spread; no forwardRef
- Quiz (3 questions, data-why on all options), Recipe section

## Pedagogy Notes
- Deliberately shows the broken attempt first so the generic constraint has a motivation
- TextField example connects to user's earlier design-system questions (L6 wrapper-Omit discussion)
- User skipped ahead to next lesson without reporting Exercise 3 results — worth asking about Challenge 2 / stretch answers when convenient (diagnostic value)

## Next
- Exercise 4 eventually covers L9+L10
- Lesson 10 pre-linked: 0013-typing-data-fetching.html (API response typing, discriminated-union results)