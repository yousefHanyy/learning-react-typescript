# Learning Record 0026: Lesson 14 — Advanced TS Patterns

## Session
2026-07-22 (session 34)

## What We Did
- Created `lessons/0022-typing-advanced.html` (Lesson 14: satisfies, as const, branded types, unknown narrowing)

## Key Concepts
- satisfies: validates shape without widening, keeps literals, catches typos vs `as`
- as const: readonly tuple + literal union via `typeof ROLES[number]`, gotcha readonly → mutable mismatch
- Branded types: `string & { __brand: "UserId" }` nominal fix for mixed IDs, zero runtime, helper `toUserId`
- unknown: forces narrowing at boundaries (JSON.parse, catch), zod as narrower, never for exhaustiveness

## Next
- Exercise 8 at 0023-exercise-advanced.html (pre-linked)
