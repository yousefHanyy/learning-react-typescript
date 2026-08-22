# Learning Record 0010: Exercise 2 — Context & Utility Types

## Session
2026-07-22

## What We Did
- Created `lessons/0008-exercise-context-and-utils.html` (Exercise 2, covers Lessons 5–6)

## Challenges
1. Build typed ToastContext from memory (honest null default, provider, guard hook, export discipline)
2. Debug raw `useContext` consumption — compile error (can't destructure `| null`) + convention break (must use hook API); reinforces that `user: User | null` stays but context-null doesn't
3. Derive PublicUser/UserDraft/UserPatch/permissions Record from one User type — auto-update + completeness points
4. PasswordInput wrapper — ComponentPropsWithoutRef + Omit<"onChange" | "type">, spread rest, simplified onChange signature
5. Stretch: generic useLocalStorageState<T> (combines L4 generics, L5 hooks, lazy init, tuple return)

## Pedagogy Notes
- Challenge 2 deliberately separates "context value null" (removed by guard) from "user null" (real domain state) — the distinction user needed explained in Lesson 5
- Challenge 3 shows maintenance win: source type changes propagate to derived types

## Next
- Lesson 7: Typing useReducer → `lessons/0009-typing-usereducer.html` (pre-linked in nav; pairs with discriminated unions from Lesson 2 and the reducer+context scaling pattern from Lesson 5)
