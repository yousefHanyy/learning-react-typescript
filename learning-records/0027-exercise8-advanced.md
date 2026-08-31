# Learning Record 0027: Exercise 8 — Advanced TS Patterns

## Session
2026-07-22 (session 35)

## What We Did
- Created `lessons/0023-exercise-advanced.html` (Exercise 8, covers Lesson 14)

## Challenges
1. satisfies vs as — rewrite `as Theme` to `satisfies Theme` to catch typo and keep literal
2. as const — `as const` + `typeof ROLES[number]` union, readonly gotcha with lib expecting string[]
3. Branded types — `string & { readonly __brand: "UserId" }`, helper owns the single `as`, mix rejected
4. Narrowing unknown — `JSON.parse` as unknown, manual typeof/in guard vs zod safeParse, catch unknown vs any
5. Stretch — branded + validated boundary: zod validate raw then toUserId brand, getUser accepts but getPost rejects

## Next
- Course checkpoint — all 14 lessons + 8 exercises complete; next could be capstone project or review
